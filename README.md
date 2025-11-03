# 🌐 WhichEmail Web

> AI-powered email credential manager - Never forget which email you used for any service.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38bdf8?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Live Demo:** [whichemail.app](https://whichemail.charlseempire.tech) _(coming soon)_

---

## ✨ Features

- 🔐 **Secure Authentication** - Email/password & Google OAuth
- 📧 **Service Management** - Track which email you used for each service
- 🤖 **AI Assistant** - Natural language search powered by Google Gemini
- 📊 **Analytics Dashboard** - Insights into your digital footprint
- ⭐ **Favorites** - Quick access to frequently used services
- 🌓 **Dark Mode** - Beautiful UI in light and dark themes
- 📤 **Export Data** - Backup your data in JSON/CSV formats
- 🔍 **Smart Search** - Find services instantly
- 📱 **Responsive Design** - Works on mobile, tablet, and desktop
- 🚀 **Progressive Web App** - Install to home screen

---

## 🎯 Why WhichEmail?

Ever tried logging into a service and couldn't remember which email you used? Gmail? Yahoo? Work email? 

**WhichEmail solves this problem** by organizing all your login credentials in one secure place, with AI-powered search to find them instantly.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Backend:** [Appwrite](https://appwrite.io/)
- **State Management:** [TanStack Query (React Query)](https://tanstack.com/query)
- **AI:** [Google Gemini](https://ai.google.dev/)
- **Icons:** [Lucide Icons](https://lucide.dev/)
- **Deployment:** [Vercel](https://vercel.com/)

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm/yarn/pnpm
- Appwrite account ([cloud.appwrite.io](https://cloud.appwrite.io))
- Google Gemini API key ([ai.google.dev](https://ai.google.dev))

### Installation

```bash
# Clone the repository
git clone https://github.com/fanyicharllson/whichemail-web.git
cd whichemail-web

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your credentials

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔧 Environment Variables

Create a `.env.local` file in the root directory:

```env
# Appwrite Configuration
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT_ID=your_project_id
NEXT_PUBLIC_APPWRITE_DATABASE_ID=your_database_id
NEXT_PUBLIC_APPWRITE_COLLECTION_SERVICES_ID=your_collection_id
NEXT_PUBLIC_APPWRITE_COLLECTION_USERS_ID=your_users_collection_id

# Google Gemini AI
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

---

## 📁 Project Structure

```
whichemail-web/
├── app/                      # Next.js App Router
│   ├── (auth)/              # Authentication pages
│   │   ├── login/
│   │   ├── register/
│   │   └── forgot-password/
│   ├── (dashboard)/         # Protected dashboard pages
│   │   ├── layout.tsx       # Dashboard layout with sidebar
│   │   ├── page.tsx         # Home/Overview
│   │   ├── services/        # Services management
│   │   ├── ai-assistant/    # AI chat interface
│   │   ├── analytics/       # Analytics dashboard
│   │   └── settings/        # User settings
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Landing page
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── layout/              # Layout components (Header, Sidebar)
│   ├── features/            # Feature-specific components
│   └── shared/              # Reusable components
├── lib/
│   ├── appwrite.ts          # Appwrite client setup
│   ├── queries/             # React Query hooks
│   └── utils.ts             # Utility functions
├── hooks/                   # Custom React hooks
├── types/                   # TypeScript type definitions
└── public/                  # Static assets
```

---

## 🎨 Key Features Explained

### AI Assistant
Ask questions in natural language:
- "Which email did I use for Netflix?"
- "Show me all my shopping services"
- "I created an account in 2023 for gaming"

### Security
- All passwords encrypted on the server
- Appwrite handles authentication & authorization
- No passwords stored in plain text
- Secure session management

### Analytics
- Track total services
- Monitor unique emails used
- Security score based on password coverage
- Activity trends and insights

---

## 📱 Mobile App

Looking for the mobile version?

👉 **Android:** [WhichEmail on Google Play](#) _(link when published)_  
👉 **React Native Repo:** [whichemail-mobile](https://github.com/fanyicharllson/whichemail-mobile-app)

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Fanyi Charllson**

- GitHub: [@fanyicharllson](https://github.com/fanyicharllson)
- LinkedIn: [Fanyi Charllson](https://linkedin.com/in/fanyicharllson)
- Twitter: [@fanyicharllson](https://twitter.com/fanyicharllson)

---

## 🙏 Acknowledgments

- Built as a university project for Mobile App Development course
- Inspired by personal frustration with forgetting login emails
- Special thanks to the open-source community

---

## 🗺️ Roadmap

- [x] Core CRUD functionality
- [x] AI-powered search
- [x] Analytics dashboard
- [x] Dark mode
- [ ] iOS native app
- [ ] Browser extension
- [ ] Password strength analyzer
- [ ] Two-factor authentication
- [ ] Team/family sharing
- [ ] Import from other password managers

---

## 📊 Stats

![GitHub stars](https://img.shields.io/github/stars/fanyicharllson/whichemail-web?style=social)
![GitHub forks](https://img.shields.io/github/forks/fanyicharllson/whichemail-web?style=social)
![GitHub issues](https://img.shields.io/github/issues/fanyicharllson/whichemail-web)

---

## 💬 Support

If you have any questions or need help, feel free to:

- Open an [issue](https://github.com/fanyicharllson/whichemail-web/issues)
- Reach out on [Twitter](https://twitter.com/fanyicharllson)
- Email: your.email@example.com

---

<div align="center">

**[⬆ Back to Top](#-whichemail-web)**

Made with ❤️ by [Fanyi Charllson](https://github.com/fanyicharllson)

If you found this project helpful, please consider giving it a ⭐!

</div>