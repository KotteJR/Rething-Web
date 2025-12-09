import { NextRequest, NextResponse } from "next/server";

const WEB3FORMS_ACCESS_KEY = process.env.WEB3FORMS_ACCESS_KEY;
const RECIPIENT_EMAIL = "dimitar.najdenov@adamass.se";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, email, firstName, lastName, budget, message, source } = body;

    // Prepare the data for Web3Forms
    const formData: Record<string, string> = {
      access_key: WEB3FORMS_ACCESS_KEY || "",
      to_email: RECIPIENT_EMAIL,
      from_name: type === "hero" ? "ReThing Website" : `${firstName} ${lastName}`,
      reply_to: email,
      subject: type === "hero" 
        ? "New Contact Request from ReThing Website" 
        : "New Project Inquiry from ReThing Website",
    };

    if (type === "hero") {
      formData.message = `New contact request from: ${email}`;
      formData.email = email;
    } else {
      formData.name = `${firstName} ${lastName}`;
      formData.email = email;
      formData.budget = budget || "Not specified";
      formData.source = source || "Not specified";
      formData.message = message || "No message provided";
    }

    // Check if Web3Forms is configured
    if (!WEB3FORMS_ACCESS_KEY) {
      // Log the submission for development
      console.log("=== Contact Form Submission ===");
      console.log("To:", RECIPIENT_EMAIL);
      console.log("Data:", body);
      console.log("================================");
      console.log("⚠️  Set WEB3FORMS_ACCESS_KEY in .env.local to enable email sending");
      
      return NextResponse.json(
        { 
          success: true, 
          message: "Form received (Web3Forms not configured - check server logs)" 
        },
        { status: 200 }
      );
    }

    // Send via Web3Forms API
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (result.success) {
      return NextResponse.json(
        { success: true, message: "Form submitted successfully" },
        { status: 200 }
      );
    } else {
      throw new Error(result.message || "Failed to submit form");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    return NextResponse.json(
      { success: false, message: "Failed to submit form" },
      { status: 500 }
    );
  }
}
