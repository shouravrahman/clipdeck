# YouTube to PowerPoint Converter

This is a Next.js project that allows users to transform YouTube videos into engaging PowerPoint presentations. The application leverages the Gemini API for generating titles, descriptions, and slide content based on the video transcripts.

## Features

-   **YouTube Video Integration**: Easily input a YouTube video URL to generate a presentation.
-   **Automatic Slide Generation**: The app automatically creates slides based on the video's content.
-   **User Authentication**: Secure user sessions with Kinde authentication.
-   **Responsive Design**: The application is designed to work seamlessly on both desktop and mobile devices.

## Getting Started

To get started with this project, follow these steps:

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine. You can check if you have it installed by running:

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application in action.

### Editing the Application

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## API Integration

This project uses the [Gemini API](https://www.npmjs.com/package/@google/generative-ai) to generate content for the PowerPoint presentations. Make sure to set up your API keys in the environment variables.

### Environment Variables

Create a `.env.local` file in the root of the project and add the following variables:

GEMINI_API_KEY=your_gemini_api_key
UPLOADTHING_TOKEN=your_uploadthing_token
RAPID_API_KEY=your_rapid_api_key
GITHUB_TOKEN=your_github_token
