import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, message } = body;

    // Form validasyonu
    if (!firstName || !lastName || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Tüm alanlar zorunludur.' },
        { status: 400 }
      );
    }

    // Email validasyonu
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Geçerli bir e-posta adresi giriniz.' },
        { status: 400 }
      );
    }

    // Environment variables kontrolü
    const smtpEmail = process.env.SMTP_EMAIL;
    const smtpPassword = process.env.SMTP_PASSWORD;

    if (!smtpEmail || !smtpPassword) {
      console.error('SMTP credentials eksik!');
      return NextResponse.json(
        { error: 'Sunucu yapılandırma hatası. Lütfen daha sonra tekrar deneyin.' },
        { status: 500 }
      );
    }

    // SMTP transporter oluştur
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: smtpEmail,
        pass: smtpPassword
      }
    });

    // Email içeriği
    const mailOptions = {
      from: smtpEmail,
      to: smtpEmail,
      subject: `DM Finans İletişim Formu - ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            Yeni İletişim Formu Mesajı
          </h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <p><strong>Ad:</strong> ${firstName}</p>
            <p><strong>Soyad:</strong> ${lastName}</p>
            <p><strong>E-posta:</strong> ${email}</p>
            <p><strong>Telefon:</strong> ${phone}</p>
          </div>
          
          <div style="margin-top: 20px;">
            <h3 style="color: #1f2937;">Mesaj:</h3>
            <p style="background-color: #ffffff; padding: 15px; border-left: 4px solid #2563eb; border-radius: 4px;">
              ${message.replace(/\n/g, '<br>')}
            </p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>Bu mesaj DM Finans web sitesi iletişim formundan gönderilmiştir.</p>
            <p>Gönderim Tarihi: ${new Date().toLocaleString('tr-TR')}</p>
          </div>
        </div>
      `
    };

    // Email gönder
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Mesajınız başarıyla gönderildi!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email gönderme hatası:', error);
    return NextResponse.json(
      { error: 'Mesaj gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.' },
      { status: 500 }
    );
  }
}

