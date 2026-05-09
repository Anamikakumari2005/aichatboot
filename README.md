# 🤖 AI Chatbot — Powered by Google Gemini LLM

<div align="center">

![Chatbot Banner](https://img.shields.io/badge/Google%20Gemini-LLM%20Powered-blue?style=for-the-badge&logo=google&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**A fully customizable, production-ready AI Chatbot built on Google Gemini's LLM — plug it into any web application!**

[Live Demo](#) · [Report Bug](../../issues) · [Request Feature](../../issues)

</div>

---

## 📌 Table of Contents

- [About the Project](#-about-the-project)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Project Structure](#-project-structure)
- [Screenshots](#-screenshots)
- [How It Works](#-how-it-works)
- [Customization](#-customization)
- [Contributing](#-contributing)
- [Contact](#-contact)

---

## 📖 About the Project

This project is a **fully customizable AI-powered Chatbot** integrated with **Google Gemini's Large Language Model (LLM)**. It is designed to be domain-agnostic — meaning you can configure it for customer support, FAQ handling, personal assistant, tutoring, onboarding flows, or any conversational use case with minimal changes.

The goal was to build something that goes beyond a simple API call — with a clean UI, proper chat history management, configurable system prompts, and a modular codebase that can be dropped into any existing web application.

> 💡 This project demonstrates practical skills in **LLM API integration**, **prompt engineering**, **React state management**, and **full-stack JavaScript development**.

---

## ✨ Features

- 🧠 **Google Gemini LLM Integration** — Real AI responses powered by `gemini-pro` model
- 💬 **Conversational Chat History** — Maintains full context across the conversation
- ⚙️ **Configurable System Prompts** — Easily change the chatbot's persona and behavior
- 🎨 **Clean, Responsive UI** — Built with React + Tailwind CSS, works on all screen sizes
- ⚡ **Real-time Streaming Responses** — Fast, token-by-token reply rendering
- 🔌 **Plug-and-Play Architecture** — Drop into any web app with minimal setup
- 🔒 **Secure API Key Handling** — Environment variable based, never exposed on frontend
- 🌙 **Dark Mode Ready** — Supports light and dark themes

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React.js, Tailwind CSS |
| Backend | Node.js, Express.js |
| AI / LLM | Google Gemini API (`gemini-pro`) |
| HTTP Client | Axios |
| Environment | dotenv |
| Version Control | Git & GitHub |

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or above)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A **Google Gemini API Key** — get it from [Google AI Studio](https://makersuite.google.com/app/apikey)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/ai-chatbot-gemini.git
cd ai-chatbot-gemini
```

2. **Install dependencies**

```bash
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
```

3. **Set up environment variables** (see below)

4. **Run the application**

```bash
# Start backend server
cd server
npm run dev

# Start frontend (in a new terminal)
cd client
npm start
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser 🎉

---

## 🔐 Environment Variables

Create a `.env` file inside the `/server` directory and add:

```env
GEMINI_API_KEY=your_google_gemini_api_key_here
PORT=5000
```

> ⚠️ **Never commit your `.env` file.** It is already included in `.gitignore`.

---

## 📁 Project Structure

```
ai-chatbot-gemini/
│
├── client/                  # React frontend
│   ├── public/
│   └── src/
│       ├── components/
│       │   ├── ChatWindow.jsx
│       │   ├── MessageBubble.jsx
│       │   └── InputBar.jsx
│       ├── App.jsx
│       └── index.js
│
├── server/                  # Node.js + Express backend
│   ├── routes/
│   │   └── chat.js          # Gemini API route handler
│   ├── controllers/
│   │   └── chatController.js
│   ├── .env                 # API keys (not committed)
│   └── index.js             # Server entry point
│
├── .gitignore
└── README.md
```

---

## 📸 Screenshots

> *(Add your project screenshots here)*

| Chat Interface | Mobile View |
|---|---|
| ![Desktop](./screenshots/desktop.png) | ![Mobile](./screenshots/mobile.png) |

---

## 🧠 How It Works

```
User types a message
        ↓
React frontend sends POST request to Express backend
        ↓
Backend calls Google Gemini API with:
  - User message
  - Chat history (for context)
  - System prompt (for persona)
        ↓
Gemini LLM processes and generates a response
        ↓
Response is sent back to frontend and displayed
```

The chatbot maintains **full conversation context** by passing previous messages with every new request — giving Gemini the ability to understand the flow of the conversation, just like a real assistant.

---

## 🎛 Customization

Want to use this chatbot for a specific purpose? It's easy!

Open `server/controllers/chatController.js` and modify the system prompt:

```javascript
const systemPrompt = `You are a helpful customer support assistant for 
an e-commerce store. Answer only questions related to orders, 
returns, and product queries. Be polite and concise.`;
```

Change this one string — and your chatbot now has a completely new personality and purpose! ✅

---

## 🤝 Contributing

Contributions are welcome! If you find a bug or have a feature request:

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

---

## 📬 Contact

**Anamika** — CS Student | Aspiring Web Developer

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/your-profile)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/your-username)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:your-email@gmail.com)

---

<div align="center">

⭐ **If you found this project helpful, please give it a star!** ⭐

*Made with ❤️ by Anamika*

</div>
