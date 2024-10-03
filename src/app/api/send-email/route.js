import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const {
      identity,
      firstName,
      lastName,
      email,
      verifyEmail,
      incidentDate,
      incidentTime,
      isOngoing,
      incidentSeverity,
      incidentDescription,
      otherIncidentType,
      reportingAbout,
      osUsed,
      browserUsed,
      deviceUsed,
      incidentType,
      impacted,
      attachedFiles: attachments, // Changed to 'attachments' (plural) for clarity
    } = await req.json();

    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASS,
      },
    });

    // Prepare mail options
    let mailOptions = {
      from: process.env.SMTP_EMAIL,
      to: "kuickelsayuj@gmail.com",
      subject: `mail by ${firstName} ${lastName}`, // Fixed the subject string
      html: `
        <html>
          <body>
            <p><strong>identity</strong>:  ${identity}</p>
            <p><strong>firstName</strong>:  ${firstName}</p>
            <p><strong>lastName</strong>:  ${lastName}</p>
            <p><strong>email</strong>:  ${email}</p>
            <p><strong>verifyEmail</strong>:  ${verifyEmail}</p>
            <p><strong>incidentDate</strong>:  ${incidentDate}</p>
            <p><strong>incidentTime</strong>:  ${incidentTime}</p>
            <p><strong>isOngoing</strong>:  ${isOngoing}</p>
            <p><strong>incidentSeverity</strong>:  ${incidentSeverity}</p>
            <p><strong>incidentDescription</strong>:  ${incidentDescription}</p>
            <p><strong>otherIncidentType</strong>:  ${otherIncidentType}</p>
            <p><strong>reportingAbout</strong>:  ${reportingAbout}</p>
            <p><strong>osUsed</strong>:  ${osUsed}</p>
            <p><strong>browserUsed</strong>:  ${browserUsed}</p>
            <p><strong>deviceUsed</strong>:  ${deviceUsed}</p>
            <p><strong>incidentType</strong>:  ${incidentType.join(", ")}</p>
            <p><strong>impacted</strong>:  ${impacted.join(", ")}</p>
            <p><strong>Attachments:</strong> ${attachments
              .map((file) => file.name)
              .join(", ")}</p>
          </body>
        </html>`,
      cc: "info@example.co",
      attachments: attachments.map((attachment) => ({
        filename: attachment.name,
        content: Buffer.from(attachment.data, "base64"),
        contentType: attachment.type,
      })),
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (err) {
    console.log("There was an error", err.message);

    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
