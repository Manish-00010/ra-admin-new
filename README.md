# RA Admin Dashboard

A modern, responsive React admin dashboard built with React 18, Vite, and Bootstrap 5. This dashboard supports multiple platforms (Amazon & D2C) with comprehensive features for e-commerce management.

## 🚀 Features

- **Multi-Platform Support**: Amazon and D2C dashboard sections
- **Modern Tech Stack**: React 18, Vite, Bootstrap 5, SASS
- **Rich Components**: Charts (ApexCharts, Chart.js), Data tables, Form elements
- **Responsive Design**: Mobile-first approach with Bootstrap 5
- **Performance Optimized**: Code splitting, lazy loading, and optimized bundles
- **Developer Experience**: Hot reload, ESLint, error boundaries

## 📦 Tech Stack

- **Frontend**: React 18, React Router DOM v6
- **Build Tool**: Vite
- **UI Framework**: Bootstrap 5, Reactstrap
- **Charts**: ApexCharts, Chart.js
- **Styling**: SASS/SCSS
- **Icons**: Tabler Icons, Phosphor Icons
- **Code Quality**: ESLint

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ra-admin-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.development .env.local
   ```
   Edit `.env.local` with your configuration.

4. **Start development server**
   ```bash
   npm run dev
   ```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier

## 📁 Project Structure

```
src/
├── Components/          # Reusable UI components
│   ├── Common/         # Common components (ErrorBoundary, Loading, etc.)
│   ├── Dashboard/      # Dashboard specific components
│   └── ...
├── Pages/              # Page components
│   ├── Dashboard/      # Dashboard pages
│   ├── Apps/          # Application pages
│   └── ...
├── Layout/             # Layout components
│   ├── Header/        # Header component
│   ├── Sidebar/       # Sidebar component
│   └── Footer/        # Footer component
├── Data/              # Static data and configurations
├── Route/             # Routing configuration
├── Services/          # API services
├── hooks/             # Custom React hooks
├── utils/             # Utility functions
├── constants/         # Application constants
├── context/           # React contexts
└── scss/              # SASS styles
```

## 🎨 Customization

### Theme Configuration

The dashboard supports multiple themes. You can customize colors in:
- `src/scss/variables.scss` - SASS variables
- `src/constants/index.js` - Theme constants
- `public/assets/css/style.css` - CSS custom properties

### Adding New Components

1. Create component in appropriate directory under `src/Components/`
2. Add necessary styles in `src/scss/`
3. Export from `src/Components/index.js` if needed

### Adding New Pages

1. Create page component in `src/Pages/`
2. Add route in `src/Route/AuthRoutes.jsx`
3. Update sidebar navigation in `src/Data/Sidebar/sidebar.js`

## 🔧 Environment Variables

Create `.env.local` file:

```env
VITE_APP_NAME=RA Admin Dashboard
VITE_API_BASE_URL=http://localhost:3001/api
VITE_ENABLE_DEV_TOOLS=true
```

## 📊 Performance Optimization

- **Code Splitting**: Automatic route-based splitting
- **Lazy Loading**: React.lazy() for components
- **Bundle Analysis**: Use `npm run analyze`
- **Image Optimization**: WebP format support
- **Caching**: Service worker for static assets

## 🧪 Development Guidelines

### Code Style
- Use functional components with hooks
- Follow React best practices
- Use TypeScript for type safety (optional)
- Write meaningful component and variable names

### Component Structure
```jsx
import React from 'react';
import PropTypes from 'prop-types';

const ComponentName = ({ prop1, prop2 }) => {
  // Component logic here
  
  return (
    <div>
      {/* JSX here */}
    </div>
  );
};

ComponentName.propTypes = {
  prop1: PropTypes.string.required,
  prop2: PropTypes.number,
};

export default ComponentName;
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

### Deploy to Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

## 🐛 Troubleshooting

### Common Issues

1. **Module not found errors**: Clear node_modules and reinstall
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Build errors**: Check for TypeScript errors and fix them
3. **Style issues**: Clear browser cache or hard refresh

### Performance Issues

1. Check bundle size with `npm run analyze`
2. Optimize images and assets
3. Use React DevTools Profiler

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support and questions:
- Create an issue in the repository
- Contact the development team

---

**Happy Coding! 🎉**
