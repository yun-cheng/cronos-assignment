# Demo instructions

## Prerequisites

Before you begin, ensure you have the following installed on your computer:

- Node.js
- pnpm

If you do not have pnpm installed, you can install it globally using npm with the following command:

```bash
npm install -g pnpm
```

## Install Dependencies

```bash
pnpm install
```

## Configure Environment Variables

For the project to function correctly, you need to set up required environment variables. Create a file named `.env.local` in the root directory of the project:

```bash
touch .env.local
```

Open `.env.local` with text editor and add the following line:

```text
VITE_COINGECKO_API_KEY=your_api_key_here
```

Replace `your_api_key_here` with your actual CoinGecko API key.

## Running the Application

With the dependencies installed and the environment variables set, you can now run the application locally:

```bash
pnpm run dev
```

This command will start the Vite development server. Once the server is running, it will provide you with a URL, typically <http://localhost:5173>, which you can open in your browser to view the application.
