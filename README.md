# Portfolio-react

This portfolio website is a personal showcase of my work, skills, and experience as a web developer. Built with a focus on modern design, responsiveness, and performance, it highlights my projects, technical expertise, and professional background. The site aims to provide visitors with a clear understanding of my capabilities and passion for creating high-quality web applications.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Used](#technologies-used)
- [File Structure](#file-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Contact](#contact)
- [License](#license)

## Overview

This portfolio website serves as a personal showcase of my skills, experience, and work as a web developer. Designed with a modern, responsive, and performance-focused approach, it highlights key projects I’ve worked on, demonstrating my technical expertise in front-end development, including HTML, CSS, JavaScript, and frameworks like React. The website is structured to provide visitors with a clear, visually appealing overview of my professional background, showcasing my ability to build user-friendly, high-quality web applications. With smooth navigation and interactive elements, the site reflects my passion for creating elegant and efficient digital solutions. Whether you are a potential client, employer, or collaborator, this portfolio offers a comprehensive view of my development journey and capabilities, reinforcing my commitment to delivering well-crafted web applications.

The app focuses on delivering a smooth, responsive, and user-friendly experience, making learning and self-assessment both fun and engaging.
You can view the live portfolio at: [LIVE PREVIEW](https://badshahyadav.github.io/Portfolio-react/)

## Features

- **Responsive Design:** The site is fully responsive, ensuring it looks great on both desktop and mobile devices.
- **Project Showcase:** A dedicated section that highlights various projects I’ve worked on, including details on the technologies used.
- **Smooth Navigation:** Includes a smooth scrolling experience for easy navigation through sections like "Home," "About," "Projects," and "Contact."
- **Downloadable Resume:** A button that allows visitors to download my resume in PDF format with just one click, making it easy for potential employers or clients to access my qualifications.
- **Contact Form:** A simple and effective contact form to allow easy communication for potential opportunities or inquiries.
- **Responsive Design:** Fully responsive across desktop, tablet, and mobile devices.
- **Component-Based Structure:** Built with reusable and modular React components.
- **State Management:** Uses React hooks (useState, useEffect) for managing quiz state and behavior.
- **Simple Deployment:** Hosted using GitHub Pages.

## Tech Stack

- **Frontend**: JS,React.js, Vite (for fast build and development).
- **Styling**: CSS3 (or Tailwind CSS if you used it).
- **Deployment**: GitHub Pages.
- **State Mangement** : React Hooks (useState, useEffect).

## Main Components

- **App.jsx** : Main application logic and state.

- **Header (Navbar.jsx)** : Contains the navigation menu for easy access to different sections like Home, About, Projects, and Contact.
- **Intro.jsx:**  Welcomes visitors with a brief introduction about who I am.
- **About.jsx:** : Provides an overview of my background, skills, and expertise.
- **Projects.jsx:** : Displays a list of selected projects with descriptions, technologies used, and links to the live version or GitHub repository.
- **Contact.jsx:** : Provides a contact form for visitors to send inquiries or requests.
- **Footer.jsx:** Contains links to social media profiles, copyright information, and possibly other legal disclaimers.


## File Structure

Here's an overview of the project's file structure:

```plaintext
portfolio/
├── public/
│   ├── index.html                  # Main HTML file
│   ├── assets/                     # Folder for images and static assets
│   │   ├── logo.png                # Logo image
│   │   ├── hireme.png              # Hire Me button image
│   │   └── bg.png                  # Background image
│   ├── resume/                     # Folder for storing resume PDFs
│   │   └── April-Resume.pdf        # Resume file
│   └── favicon.ico                 # Favicon
├── src/
│   ├── components/                 # Reusable components
│   │   ├── Header.js               # Navbar component
│   │   ├── Intro.js                # Intro section component
│   │   ├── About.js                # About section component
│   │   ├── Projects.js             # Projects section component
│   │   ├── Skills.js               # Skills section component
│   │   ├── Contact.js              # Contact section component
│   │   └── Footer.js               # Footer component
│   ├── styles/                     # Global and component-specific CSS files
│   │   ├── global.css              # Global styles
│   │   ├── intro.css               # Intro section styles
│   │   ├── navbar.css              # Navbar styles
│   │   ├── projects.css            # Projects section styles
│   │   ├── contact.css             # Contact section styles
│   │   └── footer.css              # Footer styles
│   ├── App.js                      # Main React component (includes routing & structure)
│   ├── index.js                    # Entry point for the React app
│   └── App.css                     # Global styles (if you prefer using one CSS file)
├── .gitignore                      # Git ignore file
├── package.json                    # NPM package file with project dependencies and scripts
├── README.md                       # Project documentation (description, setup, etc.)
└── node_modules/                   # Node modules (generated after running npm install)
```

## Getting Started

### Prerequisites

Ensure you have the following tools installed on your development machine:

- **React.js** (Use current version)
- **npm** or **yarn**

### Installation

Clone the repository to your local machine:

```bash
https://github.com/BadshahYadav/Portfolio-react.git
cd Portfolio-react
```

Install the dependencies:

```bash
npm install
# or
yarn install
```

### Running the Project

To start the development server, run:

```bash
npm run dev
# or
yarn dev
```

Open your browser and navigate to `http://localhost:3000` to view the application.

## Environment Variables Setup

The project requires the following environment variables. Create a `.env` file in the root directory and add your values:

```plaintext
VITE_APP_TITLE=Portfolio-react
VITE_APP_VERSION=1.0.0
VITE_PUBLIC_URL=https://yourusername.github.io/Portfolio-react/
```

Vite environment variables must start with VITE_ or they won’t work!
## How to use them in your code:

In any React file (e.g., App.jsx):
```plaintext
const title = import.meta.env.VITE_APP_TITLE;
console.log(title);  // Outputs: Portfolio-react
```

## Deployment (GitHub Pages)

 Install gh-pages package

```bash
npm install gh-pages --save-dev
```

```bash
npm run deploy
```

Follow the prompts to deploy your application.

## Contact

If you have any questions or feedback, feel free to contact me via the [contact form](https://badshahyadav.github.io/Portfolio/) on my portfolio website or connect with me through my social profiles.

## License

This project is open-source and available under the [MIT License](LICENSE).
