import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: 587, // さくらサーバーはこのポート
      secure: false, // TLSを使用するためfalse
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      // TLSの設定（接続エラーを防ぐための魔法の一行）
      tls: {
        rejectUnauthorized: false
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER, // ★必ず「さくらのアドレス」にしてください
      to: process.env.EMAIL_USER,   // 自分宛に届く
      replyTo: email,               // 返信先はお客様のアドレスに
      subject: `【Palette Lab】お問い合わせ: ${name}様`,
      text: `お名前: ${name}\nメール: ${email}\n内容: ${message}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2>お問い合わせがありました</h2>
          <p><strong>お名前:</strong> ${name}</p>
          <p><strong>メール:</strong> ${email}</p>
          <p><strong>内容:</strong> ${message}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Success' }, { status: 200 });

  } catch (error: any) {
    console.error('SMTP Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}