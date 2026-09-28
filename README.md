# React Post Composer

A simple React Post Composer that supports Twitter and LinkedIn character limits.

## Features

- Textarea for writing a post
- Twitter character limit: 280
- LinkedIn character limit: 3000
- Dynamic character counter
- Error message when the limit is exceeded
- Post button disabled for empty or invalid posts
- React controlled component using `useState`

## Project Structure

```text
post-composer/
├── src/
│   ├── components/
│   │   └── PostComposer.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── public/
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Run Locally

Make sure Node.js is installed.

```bash
npm install
npm run dev
```

Open the local URL shown by Vite in your browser.

## Build

```bash
npm run build
```

## Aim

To design and implement a Post Composer application using React that allows users to compose posts for Twitter or LinkedIn, dynamically applies platform-specific character limits, validates the entered content, displays appropriate error messages when the limit is exceeded, and shows the current character count using React state management.
