import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const apiKey = process.env.OPENAI_API_KEY || "";
  const model = process.env.OPENAI_MODEL || "gpt-4.1-mini";

  if (!apiKey) {
    return NextResponse.json({ error: "OPENAI_API_KEYが未設定です" }, { status: 500 });
  }

  const body = await request.json();
  const type = String(body.type || "blog").trim();

  if (type === "works") {
    const excerpt = String(body.excerpt || "").trim();
    const category = String(body.category || "").trim();
    const service = String(body.service || "").trim();
    const keywords = String(body.keywords || "").trim();

    if (!excerpt) {
      return NextResponse.json({ error: "概要が未入力です" }, { status: 400 });
    }

    const prompt = `以下の概要から、実績紹介の構成要素を日本語で生成してください。\n\n概要: ${excerpt}\nカテゴリ: ${category || "未指定"}\n担当サービス: ${service || "未指定"}\nキーワード: ${keywords || "未指定"}\n\n要件:\n- JSONのみで返す\n- 次のキーを含める: title, challenge, solution, results, testimonial, metrics\n- solution, results, metrics は1行につき1項目で改行区切り\n- metrics の各行は「ラベル | 値」の形式\n- 企業サイト向けのトーン\n\n出力形式(例):\n{\n  "title": "...",\n  "challenge": "...",\n  "solution": "...\n...",\n  "results": "...\n...",\n  "testimonial": "...",\n  "metrics": "... | ...\n... | ..."\n}`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: "system", content: "You are a helpful Japanese copywriter." },
          { role: "user", content: prompt },
        ],
        temperature: 0.6,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json({ error: errorText }, { status: 500 });
    }

    const data = await response.json();
    const content = String(data.choices?.[0]?.message?.content || "").trim();

    try {
      const parsed = JSON.parse(content);
      return NextResponse.json({
        title: String(parsed.title || "").trim(),
        challenge: String(parsed.challenge || "").trim(),
        solution: String(parsed.solution || "").trim(),
        results: String(parsed.results || "").trim(),
        testimonial: String(parsed.testimonial || "").trim(),
        metrics: String(parsed.metrics || "").trim(),
      });
    } catch {
      return NextResponse.json({ error: "AI出力の解析に失敗しました" }, { status: 500 });
    }
  }

  const title = String(body.title || "").trim();
  const category = String(body.category || "").trim();
  const keywords = String(body.keywords || "").trim();

  const prompt = `以下の条件で日本語のブログ本文HTMLを作成してください。\n\nタイトル: ${title}\nカテゴリ: ${category || "未指定"}\nキーワード: ${keywords || "未指定"}\n\n要件:\n- 600〜900文字程度\n- h2を2〜3個含める\n- 1段落は短め\n- 企業サイト向けのトーン\n- HTMLのみで返す（p, h2, ul, liなど）\n`;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      messages: [
        { role: "system", content: "You are a helpful Japanese copywriter." },
        { role: "user", content: prompt },
      ],
      temperature: 0.7,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    return NextResponse.json({ error: errorText }, { status: 500 });
  }

  const data = await response.json();
  const content = data.choices?.[0]?.message?.content || "";

  return NextResponse.json({ body: content });
}
