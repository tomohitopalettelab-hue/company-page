"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { Bot, Loader2, LogOut, Plus, Trash2 } from "lucide-react";

type PostStatus = "draft" | "published";

type PostItem = {
  id: string;
  slug: string;
  slugAuto: boolean;
  title: string;
  body: string;
  bodyText: string;
  category: string;
  keywords: string;
  coverUrl: string;
  excerpt: string;
  tags: string[];
  status: PostStatus;
  publishedAt: string;
  isNew: boolean;
};

type AuthState = "loading" | "login" | "dashboard";

// ---- ユーティリティ ----

const textToHtml = (value: string): string => {
  const normalized = String(value || "").trim();
  if (!normalized) return "";
  return normalized
    .split(/\n{2,}/)
    .map((block) => `<p>${block.replace(/\n/g, "<br/>")}</p>`)
    .join("\n");
};

const htmlToText = (value: string): string => {
  const raw = String(value || "")
    .replace(/<\s*br\s*\/?>/gi, "\n")
    .replace(/<\s*\/p\s*>/gi, "\n\n")
    .replace(/<[^>]+>/g, "");
  return raw.replace(/\n{3,}/g, "\n\n").trim();
};

const toDatetimeLocal = (iso: string): string => {
  if (!iso) return "";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  const offset = date.getTimezoneOffset() * 60000;
  return new Date(date.getTime() - offset).toISOString().slice(0, 16);
};

const toIsoFromLocal = (value: string): string => {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return date.toISOString();
};

const createNewPost = (): PostItem => {
  const now = new Date().toISOString();
  return {
    id: `new-${Date.now()}`,
    slug: "",
    slugAuto: true,
    title: "",
    body: "",
    bodyText: "",
    category: "",
    keywords: "",
    coverUrl: "",
    excerpt: "",
    tags: [],
    status: "published",
    publishedAt: now,
    isNew: true,
  };
};

const dbRecordToPostItem = (record: Record<string, unknown>): PostItem => {
  const bodyStr = String(record.body || "");
  const isHtml = /<[a-z][\s\S]*>/i.test(bodyStr);
  return {
    id: String(record.id || ""),
    slug: String(record.slug || ""),
    slugAuto: false,
    title: String(record.title || ""),
    body: bodyStr,
    bodyText: isHtml ? htmlToText(bodyStr) : bodyStr,
    category: String(record.category || ""),
    keywords: String(record.keywords || ""),
    coverUrl: String(record.cover_url || ""),
    excerpt: String(record.excerpt || ""),
    tags: (() => {
      try {
        const parsed = JSON.parse(String(record.tags || "[]"));
        return Array.isArray(parsed) ? parsed : [];
      } catch {
        return [];
      }
    })(),
    status: record.status === "published" ? "published" : "draft",
    publishedAt: String(record.published_at || new Date().toISOString()),
    isNew: false,
  };
};

// ---- ログイン画面 ----

function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ user, pass }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data?.error ?? "ログインに失敗しました");
        return;
      }
      onLogin();
    } catch {
      setError("通信エラーが発生しました");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#F0FDFF] via-white to-[#EFF6FF] flex items-center justify-center p-6 font-sans">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <Image
            src="/palette-lab-logo.png"
            alt="Palette Lab"
            width={180}
            height={54}
            className="mx-auto h-10 w-auto"
            priority
          />
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.06)] border border-slate-100 overflow-hidden">
          <div className="h-1.5 bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400" />

          <div className="p-10">
            <div className="mb-8">
              <h1 className="text-2xl font-black text-slate-900 tracking-tight">管理画面</h1>
              <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-widest">Admin Login</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest">
                  ユーザーID
                </label>
                <input
                  type="text"
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                  autoComplete="username"
                  required
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-medium text-slate-800 focus:bg-white focus:ring-4 focus:ring-blue-50 focus:border-blue-400 outline-none transition-all"
                  placeholder="admin"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest">
                  パスワード
                </label>
                <input
                  type="password"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  autoComplete="current-password"
                  required
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-medium text-slate-800 focus:bg-white focus:ring-4 focus:ring-blue-50 focus:border-blue-400 outline-none transition-all"
                  placeholder="••••••••"
                />
              </div>

              {error && (
                <div className="bg-red-50 border border-red-100 rounded-2xl px-5 py-3 text-sm font-bold text-red-500">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl text-sm font-black shadow-[0_12px_24px_-6px_rgba(37,99,235,0.4)] transition-all active:scale-[0.98] disabled:opacity-60 mt-2"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 size={16} className="animate-spin" />
                    認証中...
                  </span>
                ) : "ログイン"}
              </button>
            </form>
          </div>
        </div>

        <p className="text-center text-[10px] text-slate-300 font-bold uppercase tracking-widest mt-8">
          Palette Lab · Admin
        </p>
      </div>
    </main>
  );
}

// ---- ダッシュボード ----

export default function AdminClient() {
  const [authState, setAuthState] = useState<AuthState>("loading");
  const [posts, setPosts] = useState<PostItem[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [error, setError] = useState("");
  const [tagInput, setTagInput] = useState("");
  const tagInputRef = useRef<HTMLInputElement>(null);

  const selected = useMemo(
    () => posts.find((p) => p.id === selectedId) ?? null,
    [posts, selectedId]
  );

  // ---- 認証チェック ----

  const fetchPosts = async () => {
    const res = await fetch("/api/admin/posts", { cache: "no-store", credentials: "include" });
    if (res.status === 401) {
      setAuthState("login");
      return;
    }
    const data = await res.json();
    const loaded: PostItem[] = (data.posts ?? []).map(dbRecordToPostItem);
    setPosts(loaded);
    if (loaded.length > 0) {
      setSelectedId(loaded[0].id);
    }
    setAuthState("dashboard");
  };

  useEffect(() => {
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogin = async () => {
    await fetchPosts();
  };

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST", credentials: "include" });
    setPosts([]);
    setSelectedId(null);
    setAuthState("login");
  };

  // スラッグ自動生成
  useEffect(() => {
    if (!selected?.slugAuto || !selected.title || !selectedId) return;
    const base =
      selected.title
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9\-]/g, "")
        .replace(/\-+/g, "-")
        .replace(/^-+|-+$/g, "") || "post";
    const date = new Date(selected.publishedAt || Date.now());
    const yyyymmdd = `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, "0")}${String(date.getDate()).padStart(2, "0")}`;
    const slug = `${base}-${yyyymmdd}`;
    setPosts((prev) =>
      prev.map((p) => (p.id === selectedId ? { ...p, slug } : p))
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected?.title, selected?.publishedAt, selected?.slugAuto, selectedId]);

  if (authState === "loading") {
    return (
      <main className="min-h-screen bg-[#F8FDFF] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4 text-blue-400">
          <Loader2 size={32} className="animate-spin" />
          <p className="text-[10px] font-black tracking-[0.3em] uppercase opacity-60">読み込み中</p>
        </div>
      </main>
    );
  }

  if (authState === "login") {
    return <LoginScreen onLogin={handleLogin} />;
  }

  // ---- 投稿操作 ----

  const updateSelected = (patch: Partial<PostItem>) => {
    if (!selectedId) return;
    setPosts((prev) =>
      prev.map((p) => (p.id === selectedId ? { ...p, ...patch } : p))
    );
  };

  const handleCreatePost = () => {
    const next = createNewPost();
    setPosts((prev) => [next, ...prev]);
    setSelectedId(next.id);
    setError("");
  };

  const handleDeletePost = async () => {
    if (!selected) return;
    if (!confirm(`「${selected.title || "無題"}」を削除しますか？`)) return;

    if (selected.isNew) {
      setPosts((prev) => prev.filter((p) => p.id !== selected.id));
      setSelectedId(posts.find((p) => p.id !== selected.id)?.id ?? null);
      return;
    }

    setIsDeleting(true);
    setError("");
    try {
      const res = await fetch(`/api/admin/posts/${selected.id}`, {
        method: "DELETE",
        credentials: "include",
      });
      if (!res.ok) throw new Error("削除に失敗しました");
      setPosts((prev) => prev.filter((p) => p.id !== selected.id));
      setSelectedId(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "削除に失敗しました");
    } finally {
      setIsDeleting(false);
    }
  };

  const handleSave = async () => {
    if (!selected) return;
    if (!selected.title.trim() || !selected.bodyText.trim()) {
      setError("タイトルと本文は必須です");
      return;
    }

    setIsSaving(true);
    setError("");

    const payload = {
      title: selected.title,
      body: textToHtml(selected.bodyText),
      category: selected.category || null,
      keywords: selected.keywords || null,
      coverUrl: selected.coverUrl || null,
      excerpt: selected.excerpt || null,
      tags: selected.tags,
      status: selected.status,
      publishedAt:
        selected.publishedAt ||
        (selected.status === "published" ? new Date().toISOString() : null),
      slug: selected.slug,
    };

    try {
      if (selected.isNew) {
        const res = await fetch("/api/admin/posts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify(payload),
        });
        if (!res.ok) {
          const data = await res.json();
          throw new Error(data?.error ?? "保存に失敗しました");
        }
        const { id, slug } = await res.json();
        setPosts((prev) =>
          prev.map((p) =>
            p.id === selected.id ? { ...p, id, slug, isNew: false } : p
          )
        );
        setSelectedId(id);
      } else {
        const res = await fetch(`/api/admin/posts/${selected.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify(payload),
        });
        if (!res.ok) {
          const data = await res.json();
          throw new Error(data?.error ?? "保存に失敗しました");
        }
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "保存に失敗しました");
    } finally {
      setIsSaving(false);
    }
  };

  const handleGenerateAi = async () => {
    if (!selected?.title.trim()) {
      setError("タイトルを入力してください");
      return;
    }
    setIsAiLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          title: selected.title,
          category: selected.category,
          keywords: selected.keywords,
        }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data?.error ?? "AI生成に失敗しました");
      }
      const data = await res.json();
      const generatedHtml = String(data.body || "");
      updateSelected({ body: generatedHtml, bodyText: htmlToText(generatedHtml) });
    } catch (err) {
      setError(err instanceof Error ? err.message : "AI生成に失敗しました");
    } finally {
      setIsAiLoading(false);
    }
  };

  const addTag = (raw: string) => {
    const tag = raw.trim();
    if (!tag || !selected) return;
    updateSelected({ tags: Array.from(new Set([...selected.tags, tag])) });
    setTagInput("");
  };

  const removeTag = (tag: string) => {
    if (!selected) return;
    updateSelected({ tags: selected.tags.filter((t) => t !== tag) });
  };

  return (
    <main className="min-h-screen bg-[#F8FDFF] font-sans text-slate-900">
      <div className="max-w-[1400px] mx-auto p-4 md:p-10">

        {/* ヘッダー */}
        <header className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10">
          <div className="flex items-center gap-4">
            <Image src="/palette-lab-logo.png" alt="Palette Lab" width={140} height={42} className="h-8 w-auto" />
            <div className="w-px h-6 bg-slate-200" />
            <div>
              <h1 className="text-xl font-black text-slate-900 tracking-tight">記事投稿</h1>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Admin Dashboard</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="/news"
              className="px-5 py-3 text-sm font-bold rounded-2xl border border-slate-100 bg-white/50 text-slate-600 hover:bg-white hover:shadow-md transition-all"
            >
              公開ページを見る
            </a>
            <button
              onClick={handleCreatePost}
              className="px-5 py-3 text-sm font-bold rounded-2xl bg-white text-slate-800 border border-slate-100 hover:border-blue-200 shadow-sm transition-all flex items-center gap-2"
            >
              <Plus size={16} className="text-blue-500" />
              新規作成
            </button>
            <button
              onClick={handleSave}
              disabled={isSaving || !selected}
              className="px-8 py-3 text-sm font-black rounded-2xl bg-blue-600 text-white hover:bg-blue-700 shadow-[0_8px_20px_-4px_rgba(37,99,235,0.4)] transition-all disabled:opacity-50"
            >
              {isSaving ? "保存中..." : "変更を保存"}
            </button>
            <button
              onClick={handleLogout}
              className="p-3 rounded-2xl border border-slate-100 bg-white text-slate-400 hover:text-slate-700 hover:bg-slate-50 transition-all"
              title="ログアウト"
            >
              <LogOut size={18} />
            </button>
          </div>
        </header>

        {error && (
          <div className="mb-6 rounded-2xl bg-red-50 border border-red-100 px-5 py-4 text-sm font-bold text-red-500">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-8">

          {/* 左: 記事一覧 */}
          <aside>
            <div className="bg-white/70 backdrop-blur-md rounded-[2rem] border border-white shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-50 flex items-center justify-between">
                <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">記事一覧</h2>
                <span className="text-[10px] font-black bg-blue-50 text-blue-500 px-2 py-0.5 rounded-full">
                  {posts.length}
                </span>
              </div>
              <div className="p-3 max-h-[75vh] overflow-y-auto">
                {posts.length === 0 ? (
                  <p className="py-12 text-center text-xs text-slate-300">まだ投稿がありません</p>
                ) : (
                  <div className="space-y-1.5">
                    {posts.map((post) => (
                      <button
                        key={post.id}
                        onClick={() => { setSelectedId(post.id); setError(""); }}
                        className={`w-full text-left rounded-[1.25rem] px-4 py-3.5 transition-all relative overflow-hidden ${
                          selectedId === post.id
                            ? "bg-white shadow-[0_6px_20px_-4px_rgba(37,99,235,0.15)] ring-1 ring-blue-200"
                            : "hover:bg-white/60"
                        }`}
                      >
                        {selectedId === post.id && (
                          <div className="absolute left-0 top-2 bottom-2 w-1 bg-blue-500 rounded-r-full" />
                        )}
                        <div className="flex items-start justify-between gap-2 mb-0.5">
                          <p className={`text-[13px] font-bold truncate ${selectedId === post.id ? "text-slate-900" : "text-slate-600"}`}>
                            {post.title || "無題"}
                          </p>
                          <span className={`shrink-0 text-[9px] px-1.5 py-0.5 rounded-md font-black uppercase ${
                            post.isNew
                              ? "text-orange-400 bg-orange-50"
                              : post.status === "published"
                              ? "text-blue-500 bg-blue-50"
                              : "text-slate-400 bg-slate-100"
                          }`}>
                            {post.isNew ? "未保存" : post.status === "published" ? "公開" : "下書き"}
                          </span>
                        </div>
                        <p className="text-[10px] text-slate-300 font-mono truncate uppercase">
                          {post.category || "—"} / {post.slug || "未設定"}
                        </p>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </aside>

          {/* 右: エディター */}
          <section className="bg-white/80 backdrop-blur-md rounded-[2.5rem] border border-white shadow-sm overflow-hidden">
            {!selected ? (
              <div className="flex flex-col items-center justify-center py-40 px-10 text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-to-br from-white to-slate-50 rounded-[2rem] border border-white shadow-sm flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-slate-900 font-black">記事が選択されていません</h3>
                  <p className="text-sm text-slate-400 mt-1">左のリストから編集したい記事を選んでください。</p>
                </div>
              </div>
            ) : (
              <div className="divide-y divide-slate-50">
                <div className="px-8 py-6 flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-black text-slate-900">コンテンツ編集</h2>
                    <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">
                      {selected.category || "記事"} 編集
                    </p>
                  </div>
                  <button
                    onClick={handleDeletePost}
                    disabled={isDeleting}
                    className="p-3 text-red-300 hover:text-red-500 hover:bg-red-50 rounded-2xl transition-all disabled:opacity-50"
                    title="削除"
                  >
                    {isDeleting ? <Loader2 size={20} className="animate-spin" /> : <Trash2 size={20} />}
                  </button>
                </div>

                <div className="p-8 lg:p-12 space-y-10">

                  {/* タイトル + スラッグ */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest">タイトル</label>
                      <input
                        value={selected.title}
                        onChange={(e) => updateSelected({ title: e.target.value })}
                        className="w-full px-5 py-4 bg-slate-50/50 border border-slate-100 rounded-[1.25rem] text-[15px] font-bold text-slate-800 focus:bg-white focus:ring-4 focus:ring-blue-50 focus:border-blue-400 transition-all outline-none"
                        placeholder="タイトルを入力..."
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest">URLスラッグ</label>
                      <div className="flex gap-2">
                        <input
                          value={selected.slug}
                          onChange={(e) => updateSelected({ slug: e.target.value, slugAuto: false })}
                          className="flex-1 px-5 py-4 bg-slate-50/50 border border-slate-100 rounded-[1.25rem] text-sm font-mono text-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50 focus:border-blue-400 transition-all outline-none"
                          placeholder="url-slug"
                        />
                        <button
                          onClick={() => updateSelected({ slugAuto: true })}
                          className="px-4 bg-white border border-slate-100 hover:border-blue-200 text-slate-400 hover:text-blue-500 rounded-[1.25rem] text-[10px] font-black transition-all uppercase"
                        >
                          再生成
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* カテゴリ + 公開状態 + 公開日時 */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest">カテゴリ</label>
                      <input
                        value={selected.category}
                        onChange={(e) => updateSelected({ category: e.target.value })}
                        className="w-full px-5 py-4 bg-slate-50/50 border border-slate-100 rounded-[1.25rem] text-sm font-bold text-slate-700 focus:bg-white focus:ring-4 focus:ring-blue-50 focus:border-blue-400 outline-none transition-all"
                        placeholder="Release / Event ..."
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest">公開状態</label>
                      <select
                        value={selected.status}
                        onChange={(e) => updateSelected({ status: e.target.value as PostStatus })}
                        className="w-full appearance-none px-5 py-4 bg-slate-50/50 border border-slate-100 rounded-[1.25rem] text-sm font-bold text-slate-700 outline-none cursor-pointer focus:bg-white focus:border-blue-400 transition-all"
                      >
                        <option value="draft">📁 下書き</option>
                        <option value="published">🚀 公開</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest">公開日時</label>
                      <input
                        type="datetime-local"
                        value={toDatetimeLocal(selected.publishedAt)}
                        onChange={(e) => updateSelected({ publishedAt: toIsoFromLocal(e.target.value) })}
                        className="w-full px-5 py-4 bg-slate-50/50 border border-slate-100 rounded-[1.25rem] text-sm font-bold text-slate-700 outline-none focus:bg-white focus:border-blue-400 transition-all"
                      />
                    </div>
                  </div>

                  {/* タグ */}
                  <div className="space-y-3">
                    <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest">タグ</label>
                    <div className="flex flex-wrap gap-2 min-h-[28px]">
                      {selected.tags.map((tag) => (
                        <button
                          key={tag}
                          type="button"
                          onClick={() => removeTag(tag)}
                          className="px-3 py-1 rounded-full bg-blue-50 text-blue-500 text-[10px] font-bold hover:bg-red-50 hover:text-red-400 transition-all"
                          title="クリックで削除"
                        >
                          {tag} ×
                        </button>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <input
                        ref={tagInputRef}
                        value={tagInput}
                        onChange={(e) => setTagInput(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") { e.preventDefault(); addTag(tagInput); }
                        }}
                        className="flex-1 px-4 py-3 bg-slate-50/50 border border-slate-100 rounded-[1.25rem] text-sm font-bold text-slate-700 outline-none focus:bg-white focus:border-blue-400 transition-all"
                        placeholder="タグを追加 (Enter で確定)"
                      />
                      <button
                        type="button"
                        onClick={() => addTag(tagInput)}
                        className="px-5 py-3 bg-white border border-slate-100 rounded-[1.25rem] text-[10px] font-black text-blue-500 hover:border-blue-200 transition-all uppercase"
                      >
                        追加
                      </button>
                    </div>
                  </div>

                  {/* カバー画像 + SEOキーワード */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest">アイキャッチ画像URL</label>
                      <input
                        value={selected.coverUrl}
                        onChange={(e) => updateSelected({ coverUrl: e.target.value })}
                        className="w-full px-5 py-4 bg-slate-50/50 border border-slate-100 rounded-[1.25rem] text-sm text-slate-700 outline-none focus:bg-white focus:border-blue-400 transition-all"
                        placeholder="https://..."
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest">SEOキーワード</label>
                      <input
                        value={selected.keywords}
                        onChange={(e) => updateSelected({ keywords: e.target.value })}
                        className="w-full px-5 py-4 bg-slate-50/50 border border-slate-100 rounded-[1.25rem] text-sm text-slate-700 outline-none focus:bg-white focus:border-blue-400 transition-all"
                        placeholder="カンマ区切り"
                      />
                    </div>
                  </div>

                  {/* 概要 */}
                  <div className="space-y-2">
                    <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest">概要（抜粋）</label>
                    <textarea
                      value={selected.excerpt}
                      onChange={(e) => updateSelected({ excerpt: e.target.value })}
                      rows={3}
                      className="w-full px-6 py-5 bg-white border border-slate-100 rounded-[1.5rem] text-[14px] leading-relaxed text-slate-700 focus:ring-4 focus:ring-blue-50 focus:border-blue-400 transition-all outline-none"
                      placeholder="記事の要点を短くまとめてください..."
                    />
                  </div>

                  {/* 本文 */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between flex-wrap gap-3">
                      <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest">本文</label>
                      <button
                        type="button"
                        onClick={handleGenerateAi}
                        disabled={isAiLoading}
                        className="inline-flex items-center gap-2 px-5 py-2 text-[11px] font-black rounded-full bg-white text-slate-700 border border-slate-100 hover:border-blue-200 hover:text-blue-600 transition-all disabled:opacity-40 shadow-sm"
                      >
                        {isAiLoading ? <Loader2 size={12} className="animate-spin" /> : <Bot size={12} />}
                        AI生成
                      </button>
                    </div>
                    <textarea
                      value={selected.bodyText}
                      onChange={(e) => {
                        const nextText = e.target.value;
                        updateSelected({ bodyText: nextText, body: textToHtml(nextText) });
                      }}
                      rows={16}
                      className="w-full px-8 py-8 bg-white border border-slate-100 rounded-[2rem] text-[15px] leading-[1.8] text-slate-700 focus:ring-4 focus:ring-blue-50 focus:border-blue-400 transition-all outline-none"
                      placeholder="本文を入力してください..."
                    />
                  </div>

                  {/* プレビュー */}
                  <div className="space-y-5">
                    <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-widest text-center">プレビュー</h3>
                    <article className="max-w-2xl mx-auto border border-slate-50 bg-white/60 rounded-[2.5rem] p-8 md:p-12 shadow-sm">
                      <div className="flex items-center gap-2 text-[10px] font-black text-slate-300 uppercase tracking-widest mb-4">
                        <span>{selected.category || "記事"}</span>
                        <span>·</span>
                        <span>{toDatetimeLocal(selected.publishedAt).split("T")[0] || "—"}</span>
                      </div>
                      <h2 className="text-2xl font-black text-slate-900 leading-tight mb-5">
                        {selected.title || "タイトル未入力"}
                      </h2>
                      {selected.coverUrl && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={selected.coverUrl}
                          alt={selected.title}
                          className="w-full h-56 object-cover rounded-[1.5rem] mb-8 shadow-md"
                        />
                      )}
                      {selected.excerpt && (
                        <p className="text-sm text-slate-500 italic mb-6 border-l-2 border-blue-200 pl-4">
                          {selected.excerpt}
                        </p>
                      )}
                      <div
                        className="prose prose-slate prose-sm max-w-none opacity-80"
                        dangerouslySetInnerHTML={{ __html: selected.body || "" }}
                      />
                    </article>
                  </div>

                  {/* フッター */}
                  <div className="pt-8 border-t border-slate-50 flex items-center justify-between gap-4">
                    <p className="text-[10px] text-slate-300 font-mono">/{selected.slug || "未設定"}</p>
                    <button
                      onClick={handleSave}
                      disabled={isSaving || !selected.title.trim() || !selected.bodyText.trim()}
                      className="px-8 py-3 text-sm font-black rounded-2xl bg-blue-600 text-white hover:bg-blue-700 shadow-[0_8px_20px_-4px_rgba(37,99,235,0.4)] transition-all disabled:opacity-50"
                    >
                      {isSaving ? "保存中..." : "変更を保存"}
                    </button>
                  </div>

                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
