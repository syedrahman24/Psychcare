# EmailJS Setup Guide for PsychCare Contact Form

## 📧 Real Email Functionality Setup

Your contact form is now configured to send real emails using EmailJS. Follow these steps to activate it:

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (100 emails/month free)
3. Verify your email address

### Step 2: Create Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. **Copy the Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template
1. Go to "Email Templates" in dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact Form - {{subject}}

Hello {{to_name}},

You have received a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Message: {{message}}

Reply to: {{reply_to}}

Best regards,
PsychCare Website
```

4. **Copy the Template ID** (e.g., `template_xyz789`)

### Step 4: Get Public Key
1. Go to "Account" → "General"
2. **Copy your Public Key** (e.g., `user_abcdef123`)

### Step 5: Update Environment Variables
Edit the `.env` file in your project root:

```env
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

### Step 6: Test the Form
1. Restart your development server: `npm run dev`
2. Fill out and submit the contact form
3. Check your email inbox for the form submission

## 🔒 Security Features
- Input sanitization prevents XSS attacks
- Form validation ensures data quality
- Environment variables keep keys secure
- Rate limiting prevents spam (EmailJS built-in)

## 📊 EmailJS Dashboard
Monitor form submissions, delivery rates, and usage in your EmailJS dashboard.

## 🆓 Free Tier Limits
- 200 emails/month free
- Upgrade plans available for higher volume

---
**Status**: ✅ Form is ready - just add your EmailJS credentials!
