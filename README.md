# E-Commerce Store(no)

## 🛍️ Project Overview
A full-featured online store with:
- Product catalog
- Shopping cart
- User accounts
- Order confirmation emails

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
# or
yarn install

# Core Settings
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Database (Prisma)
DATABASE_URL="postgresql://user:password@localhost:5432/dbname"

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# EmailJS (For order confirmations)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_USER_ID=your_public_key

EmailJS Configuration (Optional)
Register at EmailJS

Set up:
    Email Service (Connect your email provider)
    Template with variables:

html
Customer: {{to_name}}
Email: {{from_email}}
Order Details: {{message}}
Add credentials to .env.local