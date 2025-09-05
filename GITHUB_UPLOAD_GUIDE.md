# 🚀 GitHub Upload Guide for PsychCare Website

## Step-by-Step Instructions to Upload Your Code

### Method 1: Using GitHub Desktop (Easiest)

#### Step 1: Install GitHub Desktop
1. Download from [https://desktop.github.com/](https://desktop.github.com/)
2. Install and sign in with your GitHub account

#### Step 2: Create Repository
1. Open GitHub Desktop
2. Click "Create a New Repository on your hard drive"
3. Fill in details:
   - **Name**: `psychcare-website`
   - **Description**: `Professional child psychology therapy center website`
   - **Local Path**: Choose your Desktop folder
   - ✅ Check "Initialize this repository with a README"
   - **Git ignore**: Node
   - **License**: MIT License

#### Step 3: Copy Your Code
1. Copy all files from `C:\Users\wefrefer\Desktop\Psychcare\` 
2. Paste into the new repository folder
3. GitHub Desktop will automatically detect changes

#### Step 4: Commit and Push
1. In GitHub Desktop, you'll see all your files listed
2. Add commit message: `Initial commit - PsychCare website with contact form`
3. Click "Commit to main"
4. Click "Publish repository" 
5. ✅ Keep "Keep this code private" unchecked (make it public)
6. Click "Publish Repository"

---

### Method 2: Using Command Line (Advanced)

#### Step 1: Initialize Git Repository
```bash
cd C:\Users\wefrefer\Desktop\Psychcare
git init
git add .
git commit -m "Initial commit - PsychCare website"
```

#### Step 2: Create GitHub Repository
1. Go to [https://github.com/new](https://github.com/new)
2. Repository name: `psychcare-website`
3. Description: `Professional child psychology therapy center website`
4. Make it **Public**
5. Don't initialize with README (you already have files)
6. Click "Create repository"

#### Step 3: Connect and Push
```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/psychcare-website.git
git push -u origin main
```

---

### Method 3: Upload via GitHub Web Interface

#### Step 1: Create Repository
1. Go to [https://github.com/new](https://github.com/new)
2. Name: `psychcare-website`
3. Description: `Professional child psychology therapy center website`
4. Make it **Public**
5. Click "Create repository"

#### Step 2: Upload Files
1. Click "uploading an existing file"
2. Drag and drop your entire `Psychcare` folder
3. Commit message: `Initial commit - PsychCare website`
4. Click "Commit changes"

---

## 🔒 Important: Secure Your Credentials

### Before Uploading, Update .env File:
```env
# EmailJS Configuration - Add your actual values
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here  
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### Create .gitignore File:
```
# Dependencies
node_modules/
.pnp
.pnp.js

# Production
/dist
/build

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# IDE
.vscode/
.idea/

# OS
.DS_Store
Thumbs.db
```

---

## 🌐 Next Steps After Upload

### 1. Deploy to Netlify
- Connect your GitHub repo to Netlify
- Automatic deployments on every push
- Free hosting with custom domain support

### 2. Enable GitHub Pages (Alternative)
- Go to repository Settings → Pages
- Source: Deploy from branch → main
- Your site will be live at `https://yourusername.github.io/psychcare-website`

### 3. Set Up EmailJS
- Follow the `EMAILJS_SETUP.md` guide
- Add credentials to your deployment platform

---

## ✅ Repository Structure After Upload
```
psychcare-website/
├── public/
├── src/
├── .env (excluded from git)
├── .gitignore
├── package.json
├── README.md
├── EMAILJS_SETUP.md
└── GITHUB_UPLOAD_GUIDE.md
```

**🎉 Your professional therapy website will be live and accessible worldwide!**
