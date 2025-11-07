# Lucille's Portfolio 2025

A cyberpunk-influenced portfolio website built with React, featuring custom animations and a neon color scheme.

## Features

- Smooth scroll animations with Framer Motion
- Fully responsive design
- Contact form with validation
- Skills and experience timeline
- Custom color palette and hover effects

## Tech Stack

- React 19.1.1
- Vite 7.1.7
- Tailwind CSS 4.1.15
- Framer Motion
- Font Awesome icons

## Quick Start

**Requirements:** Node.js 20.19+ or 22.12+

```bash
npm install
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Lint code
```

## Configuration

### Environment Variables

Create a `.env` file with:

```env
VITE_CONTACT_EMAIL=your-email@example.com
VITE_FORM_SUBMIT_URL=https://formsubmit.co/your-email@example.com
VITE_GITHUB_URL=https://github.com/yourusername
VITE_LINKEDIN_URL=https://linkedin.com/in/yourusername
```

### Customization

Key files to edit:

- **Content:** [src/data/experiences.js](src/data/experiences.js), [src/data/projects.js](src/data/projects.js)
- **Skills:** [src/constants/skills.js](src/constants/skills.js)
- **Bio:** [src/Components/About/Bio.jsx](src/Components/About/Bio.jsx)
- **Colors:** [src/constants/colors.js](src/constants/colors.js)
- **CV:** Place file in `/public` and update [src/constants/fileConfig.js](src/constants/fileConfig.js)

## Project Structure

```
src/
├── Section/              # Page sections (Hero, About, Experience, etc)
├── Components/           # Reusable components
├── constants/            # Configuration (colors, messages, skills, etc)
├── data/                 # Content (experiences, projects)
├── assets/               # Images and icons
├── App.jsx
└── index.css
```
