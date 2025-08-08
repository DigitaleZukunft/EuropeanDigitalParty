# European Digital Party

A modern platform for launching and managing a digital political party with integrated referendum functionality.

## 🌐 Live Website

**GitHub Pages**: https://europeandigital.party  
**Repository**: https://github.com/DigitaleZukunft/EuropeanDigitalParty

## 🚀 Quick Start

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/DigitaleZukunft/EuropeanDigitalParty.git
   cd EuropeanDigitalParty
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   The site will be available at http://localhost:8000

4. **Run tests**:
   ```bash
   npm test
   ```

5. **Debug mode**:
   ```bash
   npm run debug
   ```
   Debug server runs at http://localhost:8002

## 📁 Project Structure

```
democra/
├── src/                    # Main website files
│   ├── index.html         # Homepage
│   ├── styles/            # CSS files
│   ├── scripts/           # JavaScript files
│   ├── pages/             # Additional pages
│   ├── languages/         # Internationalization
│   └── assets/            # Images and media
├── server.js              # Node.js development server
├── debug.js               # Debug server with logging
├── tests/                 # Test suite
└── .github/workflows/     # GitHub Actions for deployment
```

## 🌍 Features

- **Multi-language Support**: German, English, Spanish, French, Italian
- **Responsive Design**: Works on all devices
- **Modern UI**: Clean, professional interface
- **Interactive Elements**: Voting system and engagement features
- **Accessibility**: WCAG compliant design

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Server**: Node.js with custom HTTP server
- **Testing**: Custom test suite with HTTP assertions
- **Deployment**: GitHub Pages with GitHub Actions
- **Internationalization**: JSON-based i18n system

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run debug` - Start debug server with logging
- `npm test` - Run test suite
- `npm start` - Start production server
- `npm run build` - Build static files

## 🔧 Development

### Adding New Pages

1. Create HTML file in `src/pages/`
2. Add navigation links in `src/index.html`
3. Update language files in `src/languages/`

### Styling

- Main styles: `src/styles/styles.css`
- Global styles: `styles.css` (root level)

### JavaScript

- Main script: `src/scripts/script.js`
- Internationalization: `src/scripts/i18n.js`

## 🌐 Deployment

The website is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

**Deployment URLs**:
- Production: https://europeandigital.party
- GitHub Pages: https://digitalezukunft.github.io/EuropeanDigitalParty

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Contact

For questions or support, please open an issue on GitHub or contact the development team.

---

**European Digital Party** - Building the future of democracy through technology. 