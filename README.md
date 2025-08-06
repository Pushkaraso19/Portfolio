
# Modern Portfolio Website 🚀

A modern, minimalist portfolio website built with React, Vite, and Framer Motion. Features a dark theme, programmer-friendly aesthetics, and smooth animations.


## ✨ Features

- **Responsive Design** – Works perfectly on all devices
- **Modern Dark Theme** – Sleek programmer-inspired design
- **Smooth Animations** – Powered by Framer Motion
- **Interactive Components** – Engaging user experience
- **Fast & Optimized** – Built with Vite for lightning-fast performance
- **Easy to Customize** – Well-structured components for easy modifications


## 🛠️ Tech Stack

- **React 19** – Latest React with modern features
- **Framer Motion** – Production-ready motion library
- **Lucide React** – Beautiful & consistent icon library
- **Vite** – Next generation frontend tooling


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

- **Navbar** (`src/components/Navbar.jsx`):
  - Change the logo to your own
  - Update social media links in the `portfolioData.js` file (`src/data/portfolioData.js`)

- **Hero Section** (`src/components/HeroSection/HeroSection.jsx`):
  - Replace "Your Name" in the code snippet
  - Modify the subtitle and description
  - Update the greeting message

- **About Section** (`src/components/AboutSection/AboutSection.jsx`):
  - Replace the user icon/photo in `src/assets/photo.png`
  - Update the description paragraph
  - Modify the stats (projects completed, experience, etc.)
  - Customize the journey timeline

- **Skills Section** (`src/components/SkillsSection/SkillsSection.jsx`):
  - Update skill categories and proficiency levels
  - Add or remove technologies
  - Modify the "Languages I Speak" section

- **Projects Section** (`src/components/ProjectsSection/ProjectsSection.jsx`):
  - Replace placeholder projects with your actual work
  - Update project descriptions, technologies used
  - Add real GitHub and live demo links
  - Replace placeholder images with actual project screenshots in `public/projects/`

- **Contact Section** (`src/components/ContactSection/ContactSection.jsx`):
  - Update email address and phone number in `portfolioData.js`
  - Modify location information
  - Update social media links
  - Customize the contact form (add backend integration if needed)

- **Footer** (part of `ContactSection`):
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
├── assets/                  # Images, PDFs, icons
├── data/
│   └── portfolioData.js     # Centralized portfolio data
├── components/
│   ├── Navbar.jsx           # Navigation bar
│   ├── AboutSection/
│   │   ├── AboutSection.jsx
│   │   └── AboutSection.css
│   ├── ContactSection/
│   │   ├── ContactSection.jsx
│   │   └── ContactSection.css
│   ├── Dock/
│   │   ├── Dock.jsx
│   │   └── Dock.css
│   ├── EducationSection/
│   │   ├── EducationSection.jsx
│   │   └── EducationSection.css
│   ├── ExperienceSection/
│   │   ├── ExperienceSection.jsx
│   │   └── ExperienceSection.css
│   ├── HeroSection/
│   │   ├── HeroSection.jsx
│   │   └── HeroSection.css
│   │   └── ProfileCard/
│   │       ├── ProfileCard.jsx
│   │       └── ProfileCard.css
│   ├── ProjectsSection/
│   │   ├── ProjectsSection.jsx
│   │   └── ProjectsSection.css
│   ├── SkillsSection/
│   │   ├── SkillsSection.jsx
│   │   └── SkillsSection.css
├── App.jsx                  # Main app component
├── App.css                  # Global styles
├── index.css                # Global imports
└── main.jsx                 # App entry point
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

The portfolio uses a modern dark color palette and gradients:

- **Primary Background**: `#232222` (Deep Charcoal)
- **Gradient Background**: `linear-gradient(135deg, #0d1117 0%, #161b22 50%, #0d1117 100%)`
- **Card Background**: `linear-gradient(135deg, rgba(51, 51, 51, 0.9), rgba(100, 100, 100, 0.9))`
- **Text Primary**: `#fff` (White)
- **Text Secondary**: `#A7A7A7` (Muted Gray)
- **Accent Gradient**: `linear-gradient(to right, #F85002, #C10801)` (Orange-Red)
- **Accent Solid**: `#F85002` (Orange), `#C10801` (Red)
- **Card Border**: `rgba(167, 167, 167, 0.3)`
- **Scrollbar**: `#1f2937` (Track), `#4b5563` (Thumb), `#F85002` (Thumb Hover)


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

If you have any questions or need help customizing your portfolio, feel free to reach out!
