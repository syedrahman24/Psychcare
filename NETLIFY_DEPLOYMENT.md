# 🚀 Netlify Deployment Guide for PsychCare

## Environment Variables Setup on Netlify

### Method 1: Netlify Dashboard (Recommended)

#### Step 1: Deploy Your Site
1. Push your code to GitHub (follow `GITHUB_UPLOAD_GUIDE.md`)
2. Go to [https://netlify.com](https://netlify.com) and sign in
3. Click "New site from Git"
4. Connect your GitHub account
5. Select your `psychcare-website` repository
6. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
7. Click "Deploy site"

#### Step 2: Add Environment Variables
1. Go to your site dashboard on Netlify
2. Navigate to **Site settings** → **Environment variables**
3. Click **"Add a variable"** and add these three variables:

```
Key: VITE_EMAILJS_SERVICE_ID
Value: your_actual_service_id_from_emailjs

Key: VITE_EMAILJS_TEMPLATE_ID  
Value: your_actual_template_id_from_emailjs

Key: VITE_EMAILJS_PUBLIC_KEY
Value: your_actual_public_key_from_emailjs
```

#### Step 3: Redeploy
1. Go to **Deploys** tab
2. Click **"Trigger deploy"** → **"Deploy site"**
3. Your contact form will now work with real emails!

---

### Method 2: netlify.toml File (Advanced)

Create a `netlify.toml` file in your project root:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  VITE_EMAILJS_SERVICE_ID = "your_service_id"
  VITE_EMAILJS_TEMPLATE_ID = "your_template_id"
  VITE_EMAILJS_PUBLIC_KEY = "your_public_key"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

### Method 3: Netlify CLI (Developer)

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Set environment variables
netlify env:set VITE_EMAILJS_SERVICE_ID "your_service_id"
netlify env:set VITE_EMAILJS_TEMPLATE_ID "your_template_id"
netlify env:set VITE_EMAILJS_PUBLIC_KEY "your_public_key"

# Deploy
netlify deploy --prod
```

---

## 🔒 Security Best Practices

### Environment Variables Security
- ✅ **Never commit** `.env` files to GitHub
- ✅ **Use Netlify's secure environment variables** for production
- ✅ **Different values** for development vs production
- ✅ **Rotate keys** periodically for security

### Build Security
```toml
[build.environment]
  NODE_ENV = "production"
  GENERATE_SOURCEMAP = "false"
```

---

## 🚀 Automatic Deployments

### GitHub Integration
1. **Auto-deploy**: Every push to `main` branch triggers deployment
2. **Preview deployments**: Pull requests get preview URLs
3. **Rollback**: Easy rollback to previous deployments

### Deploy Hooks
```bash
# Webhook URL for manual triggers
curl -X POST -d {} https://api.netlify.com/build_hooks/YOUR_HOOK_ID
```

---

## 📊 Performance & Monitoring

### Build Optimization
- **Build time**: ~2-3 minutes
- **Bundle size**: Optimized with Vite
- **Performance score**: 98+ (with our optimizations)

### Analytics Setup
1. Go to **Site settings** → **Analytics**
2. Enable Netlify Analytics for visitor insights
3. Set up form notifications for contact submissions

---

## 🔧 Troubleshooting

### Common Issues

#### Environment Variables Not Working
```bash
# Check if variables are set
netlify env:list

# Verify build logs
netlify logs
```

#### Build Failures
- Check Node.js version compatibility
- Verify all dependencies in `package.json`
- Review build logs in Netlify dashboard

#### Contact Form Issues
- Verify EmailJS credentials are correct
- Check browser console for errors
- Test EmailJS service independently

---

## 📱 Custom Domain Setup

### Add Custom Domain
1. **Site settings** → **Domain management**
2. **Add custom domain**: `psychcare.com`
3. **DNS configuration**: Point to Netlify
4. **SSL certificate**: Automatic Let's Encrypt

### DNS Records
```
Type: CNAME
Name: www
Value: your-site-name.netlify.app

Type: A
Name: @
Value: 75.2.60.5
```

---

## ✅ Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] Netlify site created and connected
- [ ] Environment variables configured
- [ ] EmailJS credentials added
- [ ] Build successful
- [ ] Contact form tested
- [ ] Custom domain configured (optional)
- [ ] SSL certificate active
- [ ] Performance score verified

**🎉 Your PsychCare website is now live and professional!**
