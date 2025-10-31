# 🚀 3D Portfolio - MJ Hesari

A stunning 3D portfolio website inspired by modern design trends, built with Next.js, Three.js, and Tailwind CSS. This project showcases advanced web development techniques with interactive 3D elements and smooth animations.

## ✨ Features

- **3D Interactive Elements**: Realistic 3D computer model with hover animations
- **Smooth Animations**: Powered by Framer Motion with custom easing
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI/UX**: Glass morphism effects and gradient designs
- **Performance Optimized**: Next.js 15 with App Router and Turbopack
- **TypeScript**: Full type safety throughout the application
- **Loading Screen**: Beautiful animated loading experience

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **3D Graphics**: Three.js, React Three Fiber, Drei
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/3d-portfolio.git
cd 3d-portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx           # Home page component
│   └── globals.css        # Global styles and animations
├── components/
│   ├── 3d/
│   │   └── Computer.tsx   # 3D computer model with realistic geometry
│   ├── sections/
│   │   ├── Hero.tsx       # Hero section with 3D background
│   │   ├── About.tsx      # About section with skills grid
│   │   ├── Projects.tsx   # Projects section with featured cards
│   │   └── Contact.tsx    # Contact section with form
│   ├── Navigation.tsx     # Responsive navigation with smooth scrolling
│   ├── Footer.tsx         # Footer with social links and scroll-to-top
│   └── LoadingScreen.tsx  # Animated loading screen
```

## 🎨 Design Features

### 3D Elements

- Realistic computer model with monitor, keyboard, mouse, and desk
- Interactive hover animations with rotation and elevation
- Auto-rotation with smooth camera controls
- Realistic lighting and shadows

### Animations

- Staggered entrance animations for all sections
- Smooth scroll-triggered animations
- Hover effects with scale and color transitions
- Loading screen with gradient animations

### UI Components

- Glass morphism cards with backdrop blur
- Gradient text and button effects
- Responsive grid layouts
- Modern form styling with focus states

## 🎯 Sections

### Hero Section

- Large gradient text with 3D background
- Call-to-action buttons with hover effects
- Social media links with backdrop blur
- Smooth scroll indicator

### About Section

- Personal introduction with gradient highlights
- Skills grid with icons and descriptions
- Technology tags with hover animations

### Projects Section

- Featured projects with large cards
- Hover overlays with action buttons
- Technology stack badges
- Additional projects grid

### Contact Section

- Contact information with gradient icons
- Modern form with validation
- Responsive layout with proper spacing

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:

- **Desktop** (1920px+): Full layout with all features
- **Tablet** (768px - 1024px): Adjusted spacing and grid layouts
- **Mobile** (320px - 767px): Stacked layout with mobile navigation

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with optimized build

### Other Platforms

The project can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔧 Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Colors and Themes

The project uses a dark theme with blue and purple gradients. You can customize:

- `src/app/globals.css` - Global color variables and animations
- Individual component styles for specific sections
- Tailwind config for custom color palettes

### Content

Update the content in each section component:

- **Hero**: Update name, title, and description in `Hero.tsx`
- **About**: Modify personal information and skills in `About.tsx`
- **Projects**: Add your projects in `Projects.tsx`
- **Contact**: Update contact information in `Contact.tsx`

### 3D Models

The 3D computer model is created using Three.js geometries. You can:

- Replace with custom 3D models (.glb/.gltf files)
- Add more interactive elements
- Implement different animations and effects

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: contact@mjhesari.com
- **LinkedIn**: [Your LinkedIn]
- **GitHub**: [Your GitHub]

---

Made with ❤️ by MJ Hesari using Next.js & Three.js
