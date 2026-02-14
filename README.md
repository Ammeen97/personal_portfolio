# Amine Ben Faiza - Portfolio Website

A modern, premium portfolio website built with Next.js, featuring automatic project fetching from Behance API, stunning animations, and full SEO optimization.

## ✨ Features

- 🎨 **Stunning Premium Design** - Dark mode with gradient accents, glassmorphism effects, and smooth animations
- 🔌 **Behance API Integration** - Automatically fetches and displays your projects from Behance
- ⚡ **Next.js 14** - Built with the latest Next.js for optimal performance
- 📱 **Fully Responsive** - Beautiful on all devices, from mobile to desktop
- 🎯 **SEO Optimized** - Complete meta tags, Open Graph, and sitemap support
- 🚀 **Production Ready** - Optimized for deployment to Vercel, Netlify, or any hosting provider
- 💅 **Modern CSS** - Custom design system with CSS modules and variables
- ♿ **Accessible** - WCAG compliant with semantic HTML

## 📁 Project Structure

```
amine-portfolio/
├── src/
│   ├── app/
│   │   ├── about/           # About page
│   │   ├── work/            # Projects/Work page
│   │   ├── layout.tsx       # Root layout with navigation & footer
│   │   ├── page.tsx         # Homepage
│   │   └── globals.css      # Global styles & design system
│   ├── components/
│   │   ├── Navigation.tsx   # Header navigation
│   │   ├── Footer.tsx       # Footer component
│   │   └── ProjectCard.tsx  # Project card component
│   └── lib/
│       └── behance.ts       # Behance API integration
├── package.json
├── next.config.js
├── tsconfig.json
└── .env.local.example
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm installed
- (Optional) Behance API key for higher rate limits

### Installation

1. **Clone or navigate to the project**
   ```bash
   cd C:\Users\mbenfaiza2\.gemini\antigravity\scratch\amine-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables (Optional)**
   
   Copy the example file:
   ```bash
   copy .env.local.example .env.local
   ```
   
   Edit `.env.local` and add your details:
   ```env
   NEXT_PUBLIC_BEHANCE_USERNAME=your_behance_username
   NEXT_PUBLIC_BEHANCE_API_KEY=your_api_key_here  # Optional
   ```

   > **Note:** The website works without an API key using fallback data. An API key is only needed for higher rate limits when fetching from Behance.

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Customization

### Update Your Information

1. **Personal Details**: Edit content in:
   - `src/app/page.tsx` - Homepage hero and sections
   - `src/app/about/page.tsx` - About page content
   - `src/components/Footer.tsx` - Contact information and social links

2. **Behance Username**: Update in `.env.local`:
   ```env
   NEXT_PUBLIC_BEHANCE_USERNAME=your_username
   ```

3. **Colors & Design**: Customize the design system in `src/app/globals.css`:
   - Change color variables under `:root`
   - Modify spacing, typography, border-radius, etc.

### Add Custom Projects (Fallback Data)

If you want to customize the fallback projects (used when Behance API is unavailable), edit `src/lib/behance.ts` in the `getFallbackProjects()` function.

## 🌐 Deployment

### Deploy to Vercel (Recommended - Free)

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/your-username/portfolio.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Add environment variables (if using Behance API):
     - `NEXT_PUBLIC_BEHANCE_USERNAME`
     - `NEXT_PUBLIC_BEHANCE_API_KEY` (optional)
   - Click "Deploy"

3. **Done!** Your site will be live at `https://your-project.vercel.app`

### Deploy to Netlify (Free)

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `.next` folder or connect GitHub
   - Set build command: `npm run build`
   - Set publish directory: `.next`
   - Add environment variables (optional)

### Custom Domain

Both Vercel and Netlify allow you to add a custom domain for free. Simply:
1. Purchase a domain (e.g., `aminebenfaiza.com`)
2. Go to your deployment settings
3. Add the custom domain
4. Update your domain's DNS settings as instructed

## 📊 Behance API Setup (Optional)

The website works without a Behance API key, but you can get one for higher rate limits:

1. Go to [behance.net/dev](https://www.behance.net/dev)
2. Register a new app
3. Copy your API key
4. Add it to `.env.local`:
   ```env
   NEXT_PUBLIC_BEHANCE_API_KEY=your_key_here
   ```

## 🛠️ Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📸 Features Breakdown

### Homepage
- Animated hero section with floating gradient blobs
- Featured projects from Behance
- About snippet
- Services overview
- Contact CTA

### About Page
- Professional bio
- Design approach (Clarity, Consistency, Usability)
- Skills breakdown
- Experience highlights
- Notable clients

### Work Page
- Grid of all Behance projects
- Automatic fetching via API
- Project cards with hover effects
- Category and industry tags

## 🎨 Design System

The portfolio uses a comprehensive design system with:
- Custom CSS variables for easy theming
- Consistent spacing scale
- Typography system
- Color palette (dark mode optimized)
- Reusable components
- Smooth animations and transitions

## 🔍 SEO Features

- Optimized meta tags on all pages
- Open Graph tags for social sharing
- Semantic HTML structure
- Auto-generated sitemap
- Responsive images
- Fast page loads

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 🆘 Troubleshooting

### Projects not loading?
- Check your Behance username in `.env.local`
- Verify your Behance profile is public
- The site will show fallback projects if API fails

### Styles not loading?
- Clear your browser cache
- Run `npm run build` again
- Check console for CSS errors

### Build errors?
- Delete `node_modules` and `.next` folders
- Run `npm install` again
- Make sure you're using Node.js 18+

## 📄 License

This project is open source and available for personal use.

## 🤝 Support

For questions or issues:
- Email: hello@aminebenfa iza.com
- Behance: [behance.net/aminebenfa](https://www.behance.net/aminebenfa)

---

Built with ❤️ using Next.js

