# Games Library

A modern, interactive web application for discovering and exploring games across multiple categories. Built with React, this application provides a comprehensive gaming platform with curated game collections, detailed information, and integrated gameplay experiences.

## 🎮 Description

Games Library is a React-based web application that serves as a comprehensive gaming platform featuring:

- **Curated Game Collections**: Over 90 free games across 10 different categories
- **Interactive Game Browser**: Search, filter, and explore games with detailed information
- **Integrated Gameplay**: Play select games directly within the application
- **Responsive Design**: Optimized for desktop and mobile devices
- **Modern UI/UX**: Clean, intuitive interface with smooth animations

## 🏗️ Architecture

The application follows a component-based architecture with React Router for navigation:

```
src/
├── components/
│   ├── about/          # About page component
│   ├── cover/          # Landing page cover component
│   ├── home/           # Main home page with 3D elements
│   ├── library/        # Game library browser
│   │   └── games/      # Game listing and modal components
│   ├── navbar/         # Navigation bar with search
│   ├── paintgame/      # Integrated paint game
│   ├── playnow/        # Quick play game browser
│   └── support/        # Support/contact page
├── images/             # Static image assets
├── App.js             # Main application component
└── index.js           # Application entry point
```

### Key Components:

- **App.js**: Main router configuration and layout
- **Navbar**: Navigation with search functionality
- **Library**: Game browsing with category filtering
- **Games**: Game grid display with modal details
- **PlayNow**: Quick access to popular games
- **PaintGame**: Integrated drawing/painting game

### Data Structure:

Games are stored in structured JavaScript objects with properties:
- `id`, `title`, `category`, `image`, `description`
- `size`, `requirements`, `downloadLink`
- Game ratings and player statistics

## 🔌 API Endpoints

This application is frontend-only and doesn't have traditional API endpoints. However, it integrates with external services:

### External Integrations:
- **Spline 3D**: `https://prod.spline.design/zanBOu6Q9QkrQovw/scene.splinecode`
- **Steam Store**: Game links redirect to Steam store pages
- **Game Platforms**: Direct links to Epic Games, Battle.net, etc.

### Data Sources:
- **gamesdata.js**: Main game database (90+ games)
- **playnowdata.js**: Quick play games collection
- Static image assets from various game distributors

## 🛠️ Local Setup

### Prerequisites:
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation:

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd Games-Library/games-library
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000`

### Build for Production:
```bash
npm run build
```

## 🧪 Running Tests

The application uses Jest and React Testing Library for testing:

### Run all tests:
```bash
npm test
```

### Run tests in watch mode:
```bash
npm test -- --watch
```

### Test coverage:
```bash
npm test -- --coverage
```

### Test Configuration:
- **Framework**: Jest with React Testing Library
- **Setup**: `setupTests.js` configures jest-dom matchers
- **Test Files**: `*.test.js` files alongside components
- 
## 🚀 Pre-commit Hooks

Currently, no pre-commit hooks are configured. Recommended setup:

### Install husky and lint-staged:
```bash
npm install --save-dev husky lint-staged
```

### Configure in package.json:
```json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "src/**/*.{js,jsx}": [
      "eslint --fix",
      "prettier --write"
    ]
  }
}
```

## ⚙️ Operations (CI/CD)

### Current Status:
No CI/CD pipeline is currently configured.

### Recommended GitHub Actions Setup:

Create `.github/workflows/ci.yml`:
```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - uses: actions/setup-node@v2
      with:
        node-version: '18'
    - run: npm ci
    - run: npm test -- --coverage --watchAll=false
    - run: npm run build

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
    - uses: actions/checkout@v2
    - uses: actions/setup-node@v2
      with:
        node-version: '18'
    - run: npm ci
    - run: npm run build
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./build
```

### Deployment Options:
- **GitHub Pages**: Free hosting for static sites
- **Netlify**: Continuous deployment with preview builds
- **Vercel**: Optimized for React applications

## ❓ FAQ

### Q: How do I add new games to the library?
**A**: Edit `src/components/library/games/gamesdata.js` and add new game objects following the existing structure. Include all required fields: id, title, category, image, description, size, requirements, and downloadLink.

### Q: Can I add new game categories?
**A**: Yes, update the categories list in `src/components/library/library.js` and ensure your game objects use the new category names.

### Q: How do I customize the 3D background?
**A**: The 3D scene is powered by Spline. You can create your own scene at https://spline.design and replace the scene URL in `src/components/home/home.js`.

### Q: Is this application mobile-friendly?
**A**: Yes, the application is responsive and works on mobile devices. The CSS uses flexible layouts and media queries for optimal mobile experience.

### Q: How do I modify the paint game?
**A**: The integrated paint game is located in `src/components/paintgame/`. You can modify the canvas implementation and add new features in `paintgame.js`.

### Q: Can I integrate with real game APIs?
**A**: Yes, you can replace the static data with API calls. Consider integrating with Steam API, RAWG API, or other gaming databases for real-time game information.

### Q: How do I set up analytics?
**A**: Add Google Analytics or other tracking services by including the tracking code in `public/index.html` and implementing event tracking in components.

### Q: What's the performance like?
**A**: The application is optimized for performance with lazy loading, efficient rendering, and minimal bundle size. The 3D elements are loaded asynchronously to prevent blocking.

---

**Built with ❤️ using React, React Router, and Spline 3D**
