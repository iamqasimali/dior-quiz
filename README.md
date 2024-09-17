# Dior Quiz WebApp

Welcome to the Dior Quiz App, a fun and interactive way to explore Dior fragrances and win a free perfume gift!

## Overview

The Dior Quiz App is built using React, Vite, and Tailwind CSS, designed to provide an engaging quiz experience with a stylish and modern interface. The app consists of a 5-question quiz that tests your knowledge about Dior's iconic fragrances. 

## Features

- **Interactive Quiz**: Answer 5 carefully crafted questions about Dior perfumes to showcase your knowledge.
- **Free Perfume Gift**: Upon completing the quiz, you have the chance to claim a free perfume gift.
- **Seamless Checkout**: After answering the quiz, you will be redirected to the checkout page to claim your free perfume.

## Technologies Used

- **React**: For building the interactive user interface.
- **Vite**: For fast development and build performance.
- **Tailwind CSS**: For responsive and modern styling.
- **Node JS**: 20.x.x
  
## How It Works

1. **Start the Quiz**: Begin by answering the 5 questions about Dior fragrances.
2. **Claim Your Gift**: After completing the quiz, you'll be eligible to claim a free perfume gift.
3. **Checkout**: Proceed to the checkout page to finalize the claim for your perfume.

## Installation

To run the Dior Quiz App locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/iamqasimali/dior-quiz.git
   ```
2. Navigate to the project directory:
   ```
   cd dior-quiz-app
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm run dev
   ```
5. Open your browser and go to http://localhost:3000 to start using the app.


## Folder Structure

The project directory is structured as follows:

```
└── dior-quiz/
    ├── public/
    │   └── vite.svg/
    │       └── src/
    │           ├── assets/
    │           │   ├── images
    │           │   └── logo
    │           ├── components/
    │           │   ├── card
    │           │   ├── checkout
    │           │   └── privacy-policy
    │           ├── data/
    │           │   ├── checkoutdata.js
    │           │   ├── index.js
    │           │   └── quizdata.js
    │           ├── layout/
    │           │   ├── Header.jsx
    │           │   └── Footer.jsx
    │           └── pages/
    │               ├── LandingPage.jsx
    │               └── CheckoutPage.jsx
    ├── app.css
    ├── app.jsx
    ├── index.css
    ├── main.jsx
    ├── .gitignore
    ├── eslintconfig.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── README.md
    ├── tailwind.config.js
    └── vite.config.js
```

### Folder Structure Explanation:

- **public/**: Contains static files, like `vite.svg`.
- **src/**: Contains the main source code.
  - **assets/**: Stores images and logos.
  - **components/**: Houses reusable UI components.
    - **card/**: Components related to displaying cards.
    - **checkout/**: Components related to checkout functionality.
    - **privacy-policy/**: Components handling privacy policy information.
  - **data/**: Contains data files such as `checkoutdata.js` and `quizdata.js` for quiz and checkout information.
  - **layout/**: Contains layout components like `Header.jsx` and `Footer.jsx`.
  - **pages/**: Holds full pages like `LandingPage.jsx` and `CheckoutPage.jsx`.
- **app.css, index.css**: CSS files for global styling.
- **main.jsx, app.jsx**: Main entry point files for the React app.
- **eslintconfig.js**: ESLint configuration for linting rules.
- **index.html**: Main HTML file.
- **package.json, package-lock.json**: Node.js dependencies and version locks.
- **tailwind.config.js**: Tailwind CSS configuration.
- **vite.config.js**: Vite configuration.

This layout explains the key files and directories in your project. You can include this in your `README.md` file to help others understand the structure.
# Note
> To add or delete or update questions check the quizdata.js file.
