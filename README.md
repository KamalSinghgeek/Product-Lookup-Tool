---

# Product Lookup Tool - By Kamal Singh

This React app allows users to search for products and view product details using the Fake Store API.

---

## Project Overview

The **Product Lookup Tool** enables users to:
- Search for products by entering keywords.
- View product details, including title, category, description, price, and rating.
- Display multiple search results in a scrollable view.
- Handle errors if no product is found or if there are issues with the API call.

This project is structured with reusable components and uses `axios` for API calls.

---

## Installation

To set up and run the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/KamalSinghgeek/Product-Lookup-Tool
   ```
2. **Navigate to the project folder**:
   ```bash
   cd Product-Lookup-Tool
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start the development server**:
   ```bash
   npm start
   ```
5. Open `http://localhost:3000` in your browser to view the app.

---

## Usage

1. Type a product name into the search bar.
2. Click on the "Search" button to fetch matching products from the Fake Store API.
3. The app displays a list of product cards for all matching results or shows an error message if no products match the search.

---

## Components and Functions

### Component Overview

Each component is designed to handle specific tasks, making the app modular, readable, and easy to maintain.

- **App.js**: Main container for managing search logic, API calls, and states for products, errors, and loading.
- **ProductSearch.js**: Provides a search input field and button, triggering the search and passing the term back to `App.js`.
- **ProductCard.js**: Displays individual product details in a card format, including image, title, category, description, price, and rating.
- **ErrorMessage.js**: Shows a user-friendly error message if the search yields no results or there’s an issue with the API.

### Detailed Component Explanation

#### App.js
`App.js` is the central hub of the app, containing logic for search input, API calls, state management, and coordination with other components.

- **fetchProducts**: Fetches data from the Fake Store API and filters it based on the search term.
- **State Variables**:
  - `products`: Stores the list of matching products.
  - `error`: Stores error messages, if any.
  - `loading`: Tracks loading status for API calls.

#### ProductSearch.js
This component captures user input for searching products and calls the `onSearch` function provided by `App.js`.

- **Props**: Accepts an `onSearch` function from `App.js`.
- **State Variables**:
  - `searchTerm`: Holds user input.
- **Functionality**: Calls `onSearch(searchTerm)` on button click to trigger a search.

#### ProductCard.js
Displays product details in an organized card format, rendering title, category, description, price, image, and rating.

- **Props**: Receives a `product` object with details.
- **Conditional Rendering**: Ensures only available data is displayed, with placeholders for missing fields.

#### ErrorMessage.js
Shows an error message if there is an API failure or no search results are found. This component provides a user-friendly feedback mechanism.

---

## System Design Overview

The **Product Lookup Tool** is a frontend-only, client-side application. The main components of the system are:

1. **Frontend**: The React app, handling user input, fetching product data, and rendering results.
2. **API**: The Fake Store API, providing product data for filtering and display.

### Component Architecture

```
App.js
├── ProductSearch.js
└── ProductCard.js
└── ErrorMessage.js
```

---

## System Design Flow

1. **User Input**: Users input a product name in `ProductSearch`.
2. **Data Fetching**: `App.js` sends a request to the Fake Store API and filters products matching the search term.
3. **Error Handling**: If no products match, `App.js` sets an error message, which `ErrorMessage.js` displays.
4. **Data Display**: `App.js` passes the filtered product data to `ProductCard.js`, rendering each matching product.

---

## State Management

- **React Hooks**: `useState` is used to manage `products`, `loading` status, and `errors`.
- **Conditional Rendering**: Based on state (`loading`, `error`, or `product` list), the app renders loading indicators, error messages, or product cards as needed.

---
