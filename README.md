# Portfolio Frontend

Modern, responsive portfolio website built with **Next.js**, **React**, and **Tailwind CSS**.

## 🚀 Tech Stack

- **Framework**: Next.js 14
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## 📦 Features

- ✅ Responsive design for all devices
- ✅ Dynamic project showcase
- ✅ Video demos gallery
- ✅ Contact form
- ✅ Admin dashboard
- ✅ Data analytics visualizations
- ✅ Optimized for SEO

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌍 Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=https://portfolio22-api.osamashaer66.workers.dev
```

## 📤 Deployment on Vercel

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "New Project"
4. Import your GitHub repository
5. Configure environment variables:
   - `NEXT_PUBLIC_API_URL`: Your Cloudflare Worker URL
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

## 🔗 Backend Repository

The backend API is deployed on **Cloudflare Workers** with **D1 Database**.

Backend URL: `https://portfolio22-api.osamashaer66.workers.dev`

## 📝 License

MIT License

## 👤 Author

**Osama MD. Mousa**
- GitHub: [@osamagivegh-hash](https://github.com/osamagivegh-hash)
- LinkedIn: [Osama Alshaer](http://www.linkedin.com/in/osama-alshaer-b7059b382)
