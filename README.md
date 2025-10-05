# Gemini Chat Bot

## Overview
Gemini Chat Bot is a frontend-only, ReactJS-based chatbot leveraging the **Gemini Flash 2.5 free API**. It allows interactive conversations and can be customized to focus on specific topics or domains via `customInfo.js`. Use cases include food ordering assistant, mental health support bot, casual chatting, and more.

## Features
- Fully frontend ReactJS chatbot (no backend required)
- Integration with Gemini Flash 2.5 free API
- Customizable instructions via `customInfo.js` to restrict conversation to a specific topic
- Open-source and free to use
- Multi-purpose: can be used as an assistant, entertainment bot, or informational agent

## Tech Stack
- Frontend: ReactJS + Vite
- API: Gemini Flash 2.5 Free API
- State management: React hooks

## Prerequisites
- Node.js (>=18)
- npm or yarn
- Internet connection to access Gemini API
## Environment Setup
```bash
1. Create a `.env` file in the root of the project:

touch .env
```
```bash
2. VITE_API_URL=your_api_key_here
```
## Setup & Installation

```bash
# Clone the repository
git clone https://github.com/AdityaSaxena914/Gemini-Chat-Bot.git
cd Gemini-Chat-Bot

# Install dependencies
npm install

# Run development server
npm run dev
````

Open browser at `http://localhost:5173` to access the chatbot.

## Customization

Edit `src/customInfo.js` to define the chatbot's topic or behavior. Example:

```js
export const customInfo = {
  topic: "Mental Health Support",
  instructions: "You are a supportive mental health assistant. Answer only within this domain."
};
```

This allows you to create bots for:

* Food ordering
* Mental health
* Casual conversation
* Any specific topic

## Folder Structure

```
/public
/src
  /components/customInfo.js
.gitignore
package.json
vite.config.js
```

## Usage

1. Start the development server with `npm run dev`.
2. Chat through the web interface.
3. Responses are handled via Gemini Flash 2.5 API based on `customInfo.js`.

## Contribution

* Fork the repo
* Add new features or improve UI
* Submit a pull request

## License

Open-source, free to use.
