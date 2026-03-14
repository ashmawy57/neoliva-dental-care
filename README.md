# Neoliva Dental Care - Bilingual Website

A modern, bilingual (English/Arabic) dental clinic website built with React, Tailwind CSS, and react-i18next.

## 🌟 Features

- **Bilingual Support**: Seamless switching between English (LTR) and Arabic (RTL)
- **Responsive Design**: Fully responsive across all devices
- **Modern UI**: Beautiful gradients, animations, and glassmorphism effects
- **RTL/LTR Layout**: Automatic layout mirroring based on selected language
- **Dynamic Typography**: Different fonts for English (Inter, Poppins) and Arabic (Cairo, Tajawal)
- **Booking Form**: Integrated appointment booking with validation
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- **Framework**: React 18 with Vite
- **Styling**: Tailwind CSS v4
- **Internationalization**: react-i18next
- **Icons**: Lucide React
- **Form Handling**: React Hook Form
- **Routing**: React Router Dom

## 📁 Project Structure

```
neoliva-dental-clinic/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation with language toggle
│   │   ├── Hero.jsx            # Hero section with CTA
│   │   ├── VideoSection.jsx    # Introductory video section
│   │   ├── About.jsx           # About Us section
│   │   ├── Features.jsx        # Why choose us section
│   │   ├── Services.jsx        # Services grid
│   │   ├── Portfolio.jsx       # Success stories
│   │   ├── Gallery.jsx         # Image gallery
│   │   ├── Articles.jsx        # Latest articles summary
│   │   ├── Booking.jsx         # Appointment booking form
│   │   └── Footer.jsx          # Footer with contact info
│   ├── pages/
│   │   └── ArticlesPage.jsx    # Dedicated articles page
│   ├── locales/
│   │   ├── en.js               # English translations
│   │   └── ar.js               # Arabic translations
│   ├── i18n.js                 # i18n configuration
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd neoliva-dental-clinic
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

## 🌐 Language Switching

The website supports two languages:

- **English (Default)**: LTR layout with Inter/Poppins fonts
- **Arabic**: RTL layout with almarai fonts

To switch languages, click the language toggle button in the navbar. The button displays:
- "العربية" when in English mode
- "English" when in Arabic mode

## 📝 Translation Structure

Translations are organized in `src/locales/`:

- `en.js`: English translations
- `ar.js`: Arabic translations

Each translation file contains:
- Navigation items
- Hero section content
- Features descriptions
- Services information
- Booking form labels
- Footer content

## 🎨 Customization

### Colors

The color scheme is defined in `tailwind.config.js`:

```javascript
colors: {
  primary: { /* Blue shades */ },
  dental: {
    blue: '#0ea5e9',
    teal: '#14b8a6',
    mint: '#6ee7b7',
  }
}
```

### Fonts

Fonts are imported in `src/index.css`:
- **English**: Inter, Poppins
- **Arabic**: Cairo, Tajawal

### Adding New Sections

1. Create a new component in `src/components/`
2. Add translations to `src/locales/en.js` and `src/locales/ar.js`
3. Import and use the component in `App.jsx`

## 📱 Sections

1. **Navbar**: Fixed navigation with language toggle and "Book Now" CTA
2. **Hero**: Eye-catching hero section with headline and CTAs
3. **Video Section**: Engaging introductory video
4. **About Us**: Information about the clinic and doctors
5. **Features**: Three key features (Sterilization, Doctors, Technology)
6. **Services**: Six dental services with descriptions
7. **Success Stories**: Transformations and patient feedback
8. **Gallery**: Visual showcase of the clinic and procedures
9. **Articles**: Educational dental health articles
10. **Booking**: Appointment booking form with validation
11. **Footer**: Contact information and social media links

## 🔧 Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

## 📄 License

© 2026 Neoliva Dental Care. All rights reserved.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

For more information, visit our website or contact us at:
- **Address**: Dokki, Giza, Egypt
- **Phone**: +20 123 456 7890
- **Email**: info@neoliva.com
