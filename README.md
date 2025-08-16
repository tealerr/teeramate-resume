# Teeramate Kantima - Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Vite.

## 🚀 Features

- **Modern Design**: Clean and professional layout with dark/light mode support
- **Responsive**: Works perfectly on all devices (desktop, tablet, mobile)
- **Smooth Navigation**: Smooth scrolling between sections with fixed navbar
- **Interactive Components**:
  - Profile image with hover effects
  - Skills categorized with animated tags
  - Timeline-style experience display
  - Contact information with social links
- **Dark Mode**: Toggle between light and dark themes
- **Back to Top**: Floating button for easy navigation

## 🛠️ Technologies Used

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: CSS3, Bootstrap 5, Custom CSS Variables
- **Icons**: Custom SVG icons
- **Deployment**: GitHub Actions + GitHub Pages

## 📁 Project Structure

```text
src/
├── components/          # React components
│   ├── Bio.tsx         # About me section
│   ├── Skills.tsx      # Technical skills
│   ├── Experience.tsx  # Work experience
│   ├── Contact.tsx     # Contact information
│   ├── Navbar.tsx      # Navigation bar
│   ├── ProfileImage.tsx # Profile picture component
│   └── BackToTop.tsx   # Back to top button
├── contexts/           # React contexts
│   └── ThemeContext.tsx # Dark/light mode context
├── hooks/              # Custom hooks
│   └── usePersonalData.ts # Data fetching hooks
├── data/               # JSON data
│   └── personalData.json # Personal information
├── types/              # TypeScript types
│   └── personalData.ts # Type definitions
└── styles/             # CSS files
    ├── global.css      # Global styles
    └── [Component].css # Component-specific styles
```

## 🎨 Customization

### Personal Data

Edit `src/data/personalData.json` to update:

- Personal information
- Skills and technologies
- Work experience
- Education details
- Contact information
- Social links

### Profile Image

1. Add your profile image to `public/images/profile.jpg`
2. Update the path in `personalData.json` if needed

### Styling

- Global styles: `src/styles/global.css`
- Component styles: Individual CSS files in `src/styles/`
- Dark mode: Controlled by CSS variables in `global.css`

## 🚀 Development

### Prerequisites

- Node.js 20.x or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/tealerr/teeramate-resume.git

# Navigate to project directory
cd teeramate-resume

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📦 Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions.

### Setup GitHub Pages Deployment

1. **Fork/Clone this repository**
2. **Update `vite.config.ts`**:

   ```typescript
   base: '/your-repository-name/'
   ```

3. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: GitHub Actions
4. **Push to main branch** - Deployment will start automatically

### Manual Deployment

```bash
npm run build
# Upload dist/ folder to your hosting service
```

## 🔧 GitHub Actions Workflow

The deployment workflow (`.github/workflows/deploy.yml`) automatically:

1. **Builds** the React application
2. **Runs** linting checks
3. **Deploys** to GitHub Pages (on main branch only)
4. **Supports** manual triggers

### Workflow Features

- ✅ Node.js 20.x
- ✅ Dependency caching
- ✅ ESLint checks
- ✅ Production builds
- ✅ Automatic deployment
- ✅ Manual workflow dispatch

## 📱 Responsive Design

- **Desktop**: Full-width layout with grid systems
- **Tablet**: Adjusted layouts with proper spacing
- **Mobile**: Single-column layouts with touch-friendly buttons

## 🌙 Dark Mode

Toggle between light and dark themes using the button in the navigation bar. Theme preference is saved in localStorage.

## 📧 Contact

- **Email**: [teeramate.kan@gmail.com](mailto:teeramate.kan@gmail.com)
- **LinkedIn**: [Teeramate Kantima](https://www.linkedin.com/in/teeramate-kantima-855057225/)
- **GitHub**: [@tealerr](https://github.com/tealerr)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Teeramate Kantima
