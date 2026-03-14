import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const apiKey = process.env.OPENAI_API_KEY || "";
  const model = process.env.OPENAI_MODEL || "gpt-4.1-mini";

  if (!apiKey) {
    return NextResponse.json({ error: "OPENAI_API_KEYが未設定です" }, { status: 500 });
  }

  const body = await request.json();
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
