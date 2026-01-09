---
description: How to deploy the portfolio to Vercel and configure the custom domain pradeepgopi.de
---

# Deploying to Vercel with Custom Domain

This guide covers pushing your code to GitHub, deploying on Vercel, and setting up your domain `pradeepgopi.de`.

## 1. Push to GitHub
First, ensure your code is hosted on GitHub.
1.  Create a new **empty repository** on GitHub (e.g., `portfolio`).
2.  Run the following commands in your terminal (replace `YOUR_USERNAME` with your actual GitHub username):

```powershell
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

## 2. Deploy on Vercel
1.  Go to [Vercel Dashboard](https://vercel.com/dashboard).
2.  Click **"Add New..."** -> **"Project"**.
3.  Select your GitHub repository (`portfolio`) and click **Import**.
4.  **Configure Project**:
    *   **Framework Preset**: Next.js (should be auto-detected).
    *   **Root Directory**: `./` (default).
    *   **Environment Variables**:
        *   Expand the section.
        *   Key: `RESEND_API_KEY`
        *   Value: `re_7cJPr6Ku_5vAB48rsD8VwQLjgC4mQT9y8` (or your actual key).
5.  Click **Deploy**.

## 3. Configure Custom Domain (pradeepgopi.de)
Once deployed:
1.  Go to the **Settings** tab of your Vercel project.
2.  Select **Domains** from the sidebar.
3.  Enter `pradeepgopi.de` in the input field and click **Add**.
4.  Select the option meant for your root domain (usually "Add pradeepgopi.de and www.pradeepgopi.de").

## 4. Update DNS Settings (Domain Registrar)
Log in to where you bought your domain (e.g., GoDaddy, Namecheap, IONOS) and update the DNS records as shown by Vercel:

| Type | Name | Value |
| :--- | :--- | :--- |
| **A** | `@` | `76.76.21.21` |
| **CNAME** | `www` | `cname.vercel-dns.com` |

*Note: DNS propagation can take up to 24-48 hours, but usually happens within minutes.*
