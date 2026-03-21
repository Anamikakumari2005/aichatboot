import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";
import connectDb from "@/lib/db";
import Settings from "@/app/model/settings.model";
import mongoose from "mongoose";


export async function POST(req) {
    try {
        const {message,ownerid}=await req.json()
        if (!message || !ownerid) {
            return NextResponse.json(
                {message:"message or owner id are requared"},
                {status:400}
            )
        }
            await connectDb()
        const setting = await Settings.findOne({ ownerid });
        if (!setting) {
             return NextResponse.json(
                {message:"chatbot is not configured yet."},
                {status:400}
            )
        }

        const KNOWLEDGE=`
        bussiness name - ${setting.businessName || "not provided"}
        support email-${setting.supportEmail || "not provided"}
        knowledge-${setting.knowled || "not provided"}
        `

        const prompt = `
        You are a professional AI assistant for a tech service business that provides Web Development and Data Science solutions.

Business Name: SmartTech Solutions

Services Offered:
- Website Development (Frontend, Backend, Full Stack)
- Portfolio & Resume Websites
- E-commerce Website Development
- AI & Data Science Projects
- Data Analysis and Visualization
- Machine Learning Model Development
- Chatbot Development
- Student Projects and Guidance

Target Customers:
- Students
- Small business owners
- Startups
- Developers
${KNOWLEDGE}
Your Role:
- Help customers understand services
- Suggest best solutions based on their needs
- Guide users step-by-step
- Convert interested users into clients

Behavior Rules:
1. Be polite, friendly, and professional.
2. Keep answers simple and easy to understand.
3. Ask questions to understand customer needs better.
4. Suggest the best service based on the user's problem.
5. Never give wrong or fake information.
6. Encourage users to take action (like contacting or starting a project).
${message}
Conversation Style:
- Friendly and slightly conversational
- Not too long answers
- Clear and confident tone

Special Instructions:
- If user wants a website → ask about type (portfolio, business, e-commerce)
- If user asks about data science → ask about project or learning needs
- If user is a student → guide them with projects and learning path
- If user wants to hire → guide them to share requirements

Sales Guidance:
- Highlight benefits like fast delivery, modern design, and reliable support
- Suggest affordable solutions for students

Closing Line:
Always end with:
“Would you like me to help you get started with your project?”

Do not mention that you are an AI. Act like a real business assistant.
        `;

        const ai = new GoogleGenAI({apiKey:process.env.GEMINI_API_KEY});
        const res = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });
  const response = NextResponse.json(res.text)
   response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type");
    return response

    } catch (error) {
         const response = NextResponse.json(
                {message:`chat error ${error}`},
                {status:500}
            )
        response.headers.set("Access-Control-Allow-Origin", "*");
        response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
        response.headers.set("Access-Control-Allow-Headers", "Content-Type");
        return response
    }
}

export async function OPTIONS() {
    const response = NextResponse.json({message:"ok"})
    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type");
    return response
}