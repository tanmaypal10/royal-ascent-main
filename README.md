# Royal College of Engineering

A modern, responsive website for Royal College of Engineering built with cutting-edge web technologies.

## 🚀 Project Overview

This is the official website for Royal College of Engineering, showcasing:
- Academic programs and courses
- Campus life and facilities
- Research opportunities
- Placement statistics
- Faculty information
- Admission process
- Contact information

## 🛠️ Technology Stack

- **Frontend Framework**: React 19 with TypeScript
- **Meta Framework**: TanStack Start (SSR)
- **Routing**: TanStack Router
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI + shadcn/ui
- **Build Tool**: Vite
- **Deployment**: Cloudflare Workers

## 📁 Project Structure

```
royal-ascent-main/
├── Frontend/
│   ├── public/          # Static assets (favicon, images)
│   ├── src/
│   │   ├── components/  # React components
│   │   │   ├── site/    # Site-specific components
│   │   │   └── ui/      # Reusable UI components
│   │   ├── routes/      # Route definitions
│   │   ├── lib/         # Utilities and helpers
│   │   └── styles.css   # Global styles
│   ├── package.json
│   ├── vite.config.ts
│   ├── tsconfig.json
│   └── wrangler.jsonc   # Cloudflare Workers config
└── README.md
```

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd royal-ascent-main/Frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 🎨 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Beautiful components with Radix UI and shadcn/ui
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Performance**: SSR with TanStack Start and optimized builds
- **Accessibility**: WCAG compliant components
- **Type Safety**: Full TypeScript implementation

## 📦 Build & Deployment

### Production Build

```bash
npm run build
```

### Cloudflare Workers Deployment

The project is configured to deploy on Cloudflare Workers. Use the `wrangler.jsonc` configuration file for deployment settings.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and owned by Royal College of Engineering.

## 📞 Contact

For any inquiries regarding the website:
- **Email**: webmaster@royalcollege.edu
- **Address**: Royal College of Engineering, [Campus Address]

---

Built with ❤️ for Royal College of Engineering
