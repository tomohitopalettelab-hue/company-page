import type { Metadata } from "next";
import AdminClient from "./AdminClient";

export const metadata: Metadata = {
  title: "Admin | Palette Lab",
  description: "記事投稿の管理画面",
};

export default function AdminPage() {
  return <AdminClient />;
}
