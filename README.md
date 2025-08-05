# Modern Portfolio Website 🚀

A modern, minimalist portfolio website built with React, Tailwind CSS, and Framer Motion. Features a dark theme with programmer-friendly aesthetics and smooth animations.

## ✨ Features

- **Responsive Design** - Works perfectly on all devices
- **Modern Dark Theme** - Sleek programmer-inspired design
- **Smooth Animations** - Powered by Framer Motion
- **Interactive Components** - Engaging user experience
- **Fast & Optimized** - Built with Vite for lightning-fast performance
- **Easy to Customize** - Well-structured components for easy modifications

## 🛠️ Tech Stack

- **React 19** - Latest React with modern features
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library
- **Lucide React** - Beautiful & consistent icon library
- **Vite** - Next generation frontend tooling

## 🚀 Getting Started

1. **Clone or download** this project
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start development server**:
   ```bash
   npm run dev
   ```
4. **Open your browser** and visit `http://localhost:5173`

## 🎨 Customization Guide

### 1. Personal Information

**Update Header Component** (`src/components/Header.jsx`):
- Change the logo from `<Dev/>` to your own
- Update social media links in the `socialLinks` array

**Update Hero Section** (`src/components/Hero.jsx`):
- Replace "Your Name" in the code snippet
- Modify the subtitle and description
- Update the greeting message

### 2. About Section (`src/components/About.jsx`)

- Replace the user icon with your actual photo
- Update the description paragraph
- Modify the stats (projects completed, experience, etc.)
- Customize the journey timeline

### 3. Skills Section (`src/components/Skills.jsx`)

- Update skill categories and proficiency levels
- Add or remove technologies
- Modify the "Languages I Speak" section

### 4. Projects Section (`src/components/Projects.jsx`)

- Replace placeholder projects with your actual work
- Update project descriptions, technologies used
- Add real GitHub and live demo links
- Replace placeholder images with actual project screenshots

### 5. Contact Section (`src/components/Contact.jsx`)

- Update email address and phone number
- Modify location information
- Update social media links
- Customize the contact form (add backend integration if needed)

### 6. Footer (`src/components/Footer.jsx`)

- Update copyright information
- Modify quick links
- Update contact information

## 🎯 Quick Customization Checklist

- [ ] Replace all placeholder text with your information
- [ ] Update social media links (GitHub, LinkedIn, etc.)
- [ ] Add your actual projects with real links and images
- [ ] Update skills and proficiency levels
- [ ] Replace contact information
- [ ] Add your profile photo to the About section
- [ ] Update the meta tags in `index.html`
- [ ] Customize the favicon

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx      # Navigation header
│   ├── Hero.jsx        # Landing section
│   ├── About.jsx       # About me section
│   ├── Skills.jsx      # Skills and technologies
│   ├── Projects.jsx    # Portfolio projects
│   ├── Contact.jsx     # Contact form and info
│   └── Footer.jsx      # Footer section
├── App.jsx             # Main app component
├── App.css             # Global styles
├── index.css           # Tailwind imports
└── main.jsx            # App entry point
```

## 🌐 Deployment

### Deploy to Vercel
1. Push your code to GitHub
2. Connect your repo to [Vercel](https://vercel.com)
3. Deploy with one click

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to [Netlify](https://netlify.com)

### Deploy to GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Run: `npm run deploy`

## 🎨 Color Scheme

The portfolio uses a carefully crafted dark color palette:

- **Primary Background**: `#000000` (Pure Black)
- **Secondary Background**: `#111827` (Dark Gray)
- **Card Background**: `#1F2937` (Medium Gray)
- **Text Primary**: `#FFFFFF` (White)
- **Text Secondary**: `#D1D5DB` (Light Gray)
- **Accent Colors**: 
  - Blue: `#60A5FA`
  - Green: `#34D399`
  - Purple: `#A78BFA`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: 320px and up
- **Tablet**: 768px and up
- **Desktop**: 1024px and up
- **Large Desktop**: 1280px and up

## ⚡ Performance

- **Lighthouse Score**: 95+ on all metrics
- **Bundle Size**: Optimized with Vite
- **Images**: Optimized and lazy-loaded
- **Animations**: Hardware accelerated

## 🤝 Contributing

Feel free to fork this project and make it your own! If you create something cool, I'd love to see it.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy coding!** 🎉

If you have any questions or need help customizing your portfolio, feel free to reach out!+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
