import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as nodemailer from "nodemailer";
import { firestore } from "firebase-functions";
import { EventContext } from "firebase-functions";

admin.initializeApp();

const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_PASS = process.env.GMAIL_PASS;
const GMAIL_RECEIVER = process.env.GMAIL_RECEIVER;

export const sendQuoteEmail = functions.firestore
  .document("quotes/{docId}")
  .onCreate(async (snap: firestore.DocumentSnapshot, context: EventContext) => {
    if (!GMAIL_USER || !GMAIL_PASS || !GMAIL_RECEIVER) {
      console.error("Missing Gmail environment variables.");
      return;
    }

    const data = snap.data() as {
      name: string;
      email: string;
      requirement: string;
      message: string;
    };

    if (!data) {
      console.error("No data found in Firestore document.");
      return;
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: GMAIL_USER,
      to: GMAIL_RECEIVER,
      replyTo: data.email,
      subject: `New Quote from ${data.name}`,
      text: `
Name: ${data.name}
Email: ${data.email}
Requirement: ${data.requirement}
Message: ${data.message}
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log("✅ Email sent successfully");
    } catch (error) {
      console.error("❌ Email sending error:", error);
    }
  });
