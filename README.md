# PsychCare Therapy Center

A secure, high-performance website for PsychCare Therapy Center - Professional child psychology and therapy services.

## 🔒 Security Features

- **Input Sanitization**: All form inputs are sanitized to prevent XSS attacks
- **Content Security Policy (CSP)**: Strict CSP headers to prevent code injection
- **Security Headers**: X-Frame-Options, X-Content-Type-Options, X-XSS-Protection
- **HTTPS Enforcement**: Automatic HTTP to HTTPS redirects
- **Secure Build Process**: Source maps disabled, console logs removed in production
- **Vulnerability Scanning**: Automated security audits in CI/CD pipeline

## 🚀 Performance Optimizations

- **Code Splitting**: Vendor and animation libraries separated for optimal loading
- **Minification**: Terser minification with dead code elimination
- **Lazy Loading**: Components load only when needed
- **Optimized Assets**: Compressed and optimized for fast delivery

## 🛠 Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run security audit
npm run audit

# Run security linting
npm run lint:security

# Build for production (with security checks)
npm run build:secure
```

## 🔧 CI/CD Pipeline

The project includes a comprehensive CI/CD pipeline with:
- Security vulnerability scanning
- Automated testing and building
- Production deployment to Netlify
- Build artifact management

## 📁 Project Structure

```
src/
├── components/          # React components
├── styles/             # CSS stylesheets
├── App.jsx            # Main application
└── main.jsx           # Entry point

public/
├── _headers           # Security headers configuration
├── _redirects         # URL redirects and security rules
├── robots.txt         # SEO and security directives
└── sitemap.xml        # Search engine sitemap
```

## 🔐 Security Measures Implemented

1. **XSS Prevention**: Input sanitization and CSP headers
2. **Injection Attack Prevention**: Strict input validation
3. **Clickjacking Protection**: X-Frame-Options header
4. **MIME Type Sniffing Protection**: X-Content-Type-Options header
5. **Referrer Policy**: Strict referrer policy implementation
6. **HTTPS Enforcement**: Automatic redirects and HSTS headers

## 📞 Contact Information

- **Phone**: 8885800560
- **Email**: psychcare4you@gmail.com
- **Location**: Kondapur, Telangana 500084

## 👩‍⚕️ About

Professional child psychology services by Mrs. Ayesha Siddiqa, specializing in behavioral therapy, family counseling, and children's mental health support.
