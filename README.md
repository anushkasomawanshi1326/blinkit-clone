# Blinkit Clone - E-commerce React Application

## Overview

A fully functional e-commerce web application inspired by Blinkit, built with React.js. This application replicates the core shopping experience with product browsing, cart management, checkout process, and order tracking.

## Screenshot
<img width="1863" height="946" alt="image" src="https://github.com/user-attachments/assets/d252b843-cfa0-428b-b2f3-73480a8a2b0d" />

---

## Features

### Shopping Experience

* **Product Catalog**: Browse through various categories including Dairy, Bakery, Snacks, Vegetables, and Staples
* **Advanced Search**: Search products by name with real-time filtering
* **Smart Filters**: Filter by price range and product categories
* **Sorting Options**: Sort products by price (low to high/high to low), name, availability, and popularity
* **Shopping Cart**: Add/remove items with persistent storage using localStorage
* **Checkout Process**: Complete order placement with coupon application
* **Order History**: View past orders with status tracking
* **User Profile**: Manage personal information and delivery addresses

### User Interface

* **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop
* **Modern Interface**: Clean, intuitive design with smooth animations
* **Real-time Updates**: Instant cart updates and price calculations
* **Theme Consistency**: Blinkit-inspired green color theme throughout the application

### Technical Features

* **State Management**: Custom hooks for cart and user data management
* **Local Storage**: Persistent data storage for cart, orders, and user profile
* **Component Architecture**: Modular, reusable component structure
* **Error Handling**: Graceful error handling and fallback UI
* **Performance Optimized**: Efficient rendering and state updates

---

## Tech Stack

### Frontend

* React 18: Frontend library with latest features
* React Router DOM: Client-side routing and navigation
* Vite: Build tool and development server
* CSS-in-JS: Component-level styling with inline styles

### Development Tools

* Git: Version control
* GitHub: Code hosting and collaboration
* VS Code: Development environment

---

## Project Structure

```text
blinkit-clone/
├── public/                           # Static assets
│   ├── Logo.png                      # Application logo
│   ├── milk.png                      # Product images (25+ files)
│   ├── bread.png
│   ├── chips.png
│   ├── eggs.png
│   └── index.html                    # HTML template
├── src/                              # Source code
│   ├── components/                   # Reusable UI components
│   │   ├── Cart.jsx                  # Shopping cart component
│   │   ├── ProductCard.jsx           # Individual product card
│   │   ├── Navbar.jsx                # Navigation bar
│   │   ├── Header.jsx                # Page header
│   │   ├── Footer.jsx                # Page footer
│   │   ├── Logo.jsx                  # Logo component
│   │   ├── SearchBar.jsx             # Product search
│   │   ├── CategoryFilter.jsx        # Category filter buttons
│   │   ├── PriceFilter.jsx           # Price range filter
│   │   ├── SortProducts.jsx          # Product sorting
│   │   ├── PeakTime.jsx              # Peak hour indicator
│   │   ├── Coupon.jsx                # Coupon application
│   │   ├── DeliverySlot.jsx          # Delivery time selection
│   │   ├── RiderInfo.jsx             # Delivery rider information
│   │   ├── RecentlyOrdered.jsx       # Reorder suggestions
│   │   ├── CancelOrder.jsx           # Order cancellation
│   │   ├── StockLabel.jsx            # Stock availability indicator
│   │   ├── ThemeToggle.jsx           # Dark/light mode toggle
│   │   └── Skeleton.jsx              # Loading skeleton
│   ├── pages/                        # Page components
│   │   ├── Home.jsx                  # Home page with products
│   │   ├── Checkout.jsx              # Checkout page
│   │   ├── Orders.jsx                # Order history page
│   │   └── Profile.jsx               # User profile page
│   ├── hooks/                        # Custom React hooks
│   │   ├── useCart.js                # Cart management hook
│   │   └── useWishlist.jsx           # Wishlist hook
│   ├── data/                         # Application data
│   │   └── products.js               # Product database
│   ├── assets/                       # Additional assets
│   │   └── react.svg                 # React logo
│   ├── App.jsx                       # Main application component
│   ├── App.css                       # Application styles
│   ├── main.jsx                      # Application entry point
│   └── index.css                     # Global styles
├── package.json                      # Dependencies and scripts
├── package-lock.json                 # Dependency lock file
├── vite.config.js                    # Vite configuration
├── .gitignore                        # Git ignore rules
└── README.md                         # This file
```

---

## Installation and Setup

### Prerequisites

* Node.js (version 14 or higher)
* npm (version 6 or higher) or yarn
* Git

### Step-by-Step Installation

#### Clone the repository

```bash
git clone https://github.com/your-username/blinkit-clone.git
cd blinkit-clone
```

#### Install dependencies

```bash
npm install
```

#### Run the development server

```bash
npm run dev
```

#### Build for production

```bash
npm run build
```

#### Preview production build

```bash
npm run preview
```

---

## Available Scripts

* `npm run dev` - Start development server on [http://localhost:5173](http://localhost:5173)
* `npm run build` - Build the application for production
* `npm run preview` - Preview the production build locally
