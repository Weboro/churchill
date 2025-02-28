import nodemailer from 'nodemailer';
import multer from 'multer';
import { NextResponse } from 'next/server';

// Configure multer to store files in memory
const upload = multer.fields([
  { name: 'attachedFile', maxCount: 1 }, // Handle file upload
  { name: 'identity' }, { name: 'firstName' }, { name: 'lastName' }, { name: 'email' }, 
  { name: 'verifyEmail' }, { name: 'incidentType' }, { name: 'impacted' },
  { name: 'incidentDate' }, { name: 'incidentTime' }, { name: 'isOngoing' }, 
  { name: 'incidentSeverity' }, { name: 'incidentDescription' }, 
  { name: 'otherIncidentType' }, { name: 'reportingAbout' }, { name: 'osUsed' },
  { name: 'browserUsed' }, { name: 'deviceUsed' }
]);

export const config = {
  api: {
    bodyParser: false, // Disable default body parser to handle file uploads
  },
};

export async function POST(req, res) {
  return new Promise((resolve, reject) => {
    // Use multer to parse form data and handle file uploads
    upload(req, res, async (err) => {
      if (err) {
        console.error('Multer error:', err);
        return reject(NextResponse.json({ message: 'Error uploading file' }, { status: 500 }));
      }

      try {
        // Extract form fields and file from `req.body` and `req.files`
        const {
          identity, firstName, lastName, email, verifyEmail, incidentType,
          impacted, incidentDate, incidentTime, isOngoing, incidentSeverity,
          incidentDescription, otherIncidentType, reportingAbout, osUsed, 
          browserUsed, deviceUsed
        } = req.body;

        const file = req.files?.attachedFile?.[0]; // Extract the uploaded file if present

        // Configure nodemailer transporter
        const transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 465,
          auth: {
            user: 'dhitalabhishek98@gmail.com',
            pass: 'vlhw oohs hznx fgua',
          },
        });

        // Prepare the email body with all the form data
        const mailOptions = {
          from: 'your-email@gmail.com',
          to: 'ujjrai98@gmail.com',
          subject: 'Cybersecurity Incident Report',
          html: `
            <html>
              <body>
                <h1>New Cybersecurity Incident Report</h1>
                <p><strong>Identity:</strong> ${identity}</p>
                <p><strong>First Name:</strong> ${firstName}</p>
                <p><strong>Last Name:</strong> ${lastName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Verify Email:</strong> ${verifyEmail}</p>
                <p><strong>Incident Type:</strong> ${incidentType}</p>
                <p><strong>Impacted:</strong> ${impacted}</p>
                <p><strong>Incident Date:</strong> ${incidentDate}</p>
                <p><strong>Incident Time:</strong> ${incidentTime}</p>
                <p><strong>Is Ongoing:</strong> ${isOngoing}</p>
                <p><strong>Incident Severity:</strong> ${incidentSeverity}</p>
                <p><strong>Incident Description:</strong> ${incidentDescription}</p>
                <p><strong>Other Incident Type:</strong> ${otherIncidentType}</p>
                <p><strong>Reporting About:</strong> ${reportingAbout}</p>
                <p><strong>OS Used:</strong> ${osUsed}</p>
                <p><strong>Browser Used:</strong> ${browserUsed}</p>
                <p><strong>Device Used:</strong> ${deviceUsed}</p>
              </body>
            </html>
          `,
          // Attach the uploaded file if available
          attachments: file
            ? [
                {
                  filename: file.originalname,
                  content: file.buffer,
                  contentType: file.mimetype,
                },
              ]
            : [],
        };

        // Send the email
        const info = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', info.messageId);

        // Respond with success
        resolve(NextResponse.json({ message: 'Email sent successfully' }, { status: 200 }));
      } catch (error) {
        console.error('Error sending email:', error);
        resolve(NextResponse.json({ message: 'Internal Server Error' }, { status: 500 }));
      }
    });
  });
}
