# Quiz App

![Bevs for Devs Banner](public/demo.png)

A modern quiz application built with React, TypeScript, and Chakra UI.

## Features

- Interactive quiz interface
- Modern UI with Chakra UI components
- Responsive design
- TypeScript for type safety

## Getting Started

### Prerequisites

- Node.js (v20 or higher)
- npm (v9 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/thearkabanerjee/quiz-app.git
cd quiz-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment

### Option 1: Deploy to Vercel (Recommended)

1. Install Vercel CLI (optional):
```bash
npm install -g vercel
```

2. Deploy using Vercel CLI:
```bash
vercel
```

Or deploy directly from the Vercel dashboard:
1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect the project settings and deploy

Your app will be available at `https://quiz-app-.vercel.app`

### Option 2: Deploy to GitHub Pages

This project is also configured for deployment to GitHub Pages. To deploy:

1. Push your code to the `main` branch of your GitHub repository
2. Go to your repository's Settings > Pages
3. Under "Source", select "GitHub Actions"
4. The deployment will automatically start when you push to the main branch

The app will be available at `https://thearkabanerjee.github.io/quiz-app`

## Development

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Technologies Used

- React
- TypeScript
- Vite
- Chakra UI
- Framer Motion
- React Icons
