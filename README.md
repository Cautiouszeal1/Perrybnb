# PERRY - Token Creator for BNB Smart Chain

No-code token creation and instant verification on BNB Smart Chain.

## Setup & Deploy to Vercel

### Option 1: Deploy Directly (Fastest)

1. **Create GitHub repository**
   - Create a new repo on GitHub (e.g., `perry-token-launcher`)
   - Clone it locally

2. **Copy these files into your repo root:**
   ```
   perry-token-launcher/
   ├── app/
   │   ├── page.js
   │   └── layout.js
   ├── package.json
   ├── next.config.js
   ├── .gitignore
   └── README.md
   ```

3. **Initialize and push to GitHub**
   ```bash
   cd perry-token-launcher
   git add .
   git commit -m "Initial Perry deployment"
   git push origin main
   ```

4. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New..." → "Project"
   - Select your GitHub repo
   - Click "Deploy"
   - Done! Your app is live.

### Option 2: Local Development

1. **Install Node.js** (v18+)

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   ```
   http://localhost:3000
   ```

## How to Use Perry

1. **Connect MetaMask**
   - Click "Connect MetaMask"
   - Ensure you're on BNB Smart Chain Mainnet (Chain ID: 0x38)

2. **Configure Token**
   - Token Name: e.g., "My Token"
   - Symbol: e.g., "TOKEN"
   - Initial Supply: e.g., "1000000"
   - Decimals: 18 (standard)
   - Toggle Burnable/Mintable as needed

3. **Deploy**
   - Click "Deploy Token"
   - Sign transaction in MetaMask
   - Wait for confirmation (~20-60 seconds)

4. **Copy Details**
   - Copy token address
   - Copy tx hash
   - Click "View on BscScan" to verify

## Tech Stack

- **Next.js 14** - React framework
- **Lucide React** - Icons
- **MetaMask** - Wallet integration
- **BNB Smart Chain** - Blockchain network

## Features

✓ No API keys required  
✓ No contract code to write  
✓ Direct MetaMask integration  
✓ One-click deployment  
✓ Real-time tx tracking  
✓ BSCScan verification links  
✓ Jaguar-themed gold/dark UI  

## Environment Requirements

- MetaMask browser extension
- BNB Smart Chain Mainnet
- ~0.01 BNB for gas fees per deployment

## Support

For errors during deployment:
- Check MetaMask is on BNB Smart Chain (0x38)
- Ensure you have enough BNB for gas
- Verify network connection is stable
