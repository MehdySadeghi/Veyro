# Veyro

Veyro is a responsive e-commerce frontend focused on modern technology products. The project was built to practice React development, reusable component design, client-side routing, state management, responsive layouts, and accessible user interactions.

## Overview

Veyro presents a collection of technology products through a product-focused shopping experience. The application includes product browsing, filtering, search, product details, a shopping cart, and responsive navigation across desktop, tablet, and mobile layouts.

## Features

- Responsive homepage with promotional and product-focused sections
- Product listing with category filtering, search, and sorting
- Product details pages with product imagery, pricing, warranty selection, and ratings
- Shopping cart powered by Redux Toolkit
- Add, remove, increase, and decrease cart item quantities
- Cart subtotal, discount handling, and total calculation
- Live global product search from the navbar
- Responsive mobile navigation with a hamburger menu
- Product category navigation
- React Router navigation between pages
- Local product data and client-side state management
- Accessible interactive controls and semantic navigation
- Responsive layouts for desktop, tablet, and mobile screens

## Tech Stack

- React
- JavaScript
- Vite
- React Router
- Redux Toolkit
- CSS Modules
- Lucide React
- npm

## Project Structure

```text
src/
├── components/
├── data/
├── features/
├── images/
├── pages/
├── App.jsx
└── main.jsx
```

The project is organized around reusable React components, page-level sections, local product data, and Redux state for shared cart functionality.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

Clone the repository and install the dependencies:

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

The application will be available at the local development URL provided by Vite.

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Main Pages

- Home
- Products
- Product Details
- About

## What I Practiced

Veyro was built as a hands-on React project focused on moving from tutorial-based development toward more independent implementation.

The project gave me practical experience with:

- Building reusable React components
- Managing shared state with Redux Toolkit
- Working with React Router
- Implementing client-side product search and filtering
- Designing responsive layouts
- Handling UI state for navigation, search, and drawers
- Building interactive cart functionality
- Improving accessibility through semantic controls and labels
- Structuring CSS with CSS Modules
- Debugging and refining UI behavior across different screen sizes

## Future Improvements

Possible future additions include a backend, authentication, real payment processing, a database-backed product catalog, and a production checkout flow.
