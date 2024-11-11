# Product Lookup Tool  - By Kamal Singh

This is a simple React app that allows users to search for products and view product details using the Fake Store API.

# Project Overview
The Product Lookup Tool allows users to:

1. Search for products by entering keywords.
2. View product details, including title, category, description, price, and rating.
3. Display multiple search results in a scrollable view.
4. Handle errors if no product is found or if there are issues with the API call.
5. This project is structured with reusable components and uses axios for API calls.

# Installation
To set up and run the project locally, follow these steps:

1. Clone the repository:
git clone https://github.com/KamalSinghgeek/Product-Lookup-Tool
2. Navigate to the project folder:
cd Project-Dyte
3. Install dependencies:
npm install
4. Start the development server:
npm start
5. Open http://localhost:3000 in your browser to view the app.

# Usage
1. Type a product name into the search bar.
2. Click on the "Search" button to fetch matching products from the Fake Store API.
3. The app will display a list of product cards for all matching results or show an error message if no products match the search.

# Components and Functions
## Component Overview
Each component in this app is designed to handle specific tasks, making the app modular, readable, and easy to maintain.

1. App.js: The main container component for the app. Manages the search logic, API calls, and state for handling products, errors, and loading.

2. ProductSearch.js: A simple component containing the search input field and button. Triggers the product search and sends the search term back to App.js when the user clicks the button.

3. ProductCard.js: Displays individual product details in a card format. Each card includes an image, title, category, description, price, and rating, with placeholders for missing fields.

4. ErrorMessage.js: Shows a user-friendly error message if the search yields no results or if there’s an issue with the API.

### App.js
App.js is the central hub of the app, containing the main logic for handling search input, making API calls, managing state, and coordinating with other components.

Key Elements:
1. fetchProducts function: Fetches product data from the Fake Store API and filters it based on the search term.
State Variables:
2. products: Holds the list of matching products.
3. error: Stores any error messages.
4. loading: Tracks loading status.

### ProductSearch.js
Handles the search input field and search button, allowing users to type a product name and submit it for search. It’s responsible for capturing user input and passing it back to App.js.

Key Elements:
1. Props: Accepts an onSearch function prop from App.js.
2. State Variables:
   - searchTerm: Stores user input.
3. Functionality: Calls onSearch(searchTerm) on button click.

### ProductCard.js
Displays product details in an organized, visually appealing card format. It renders each product's details such as the title, category, description, price, image, and rating.

Key Elements
1. Props: Receives a product object containing product details.
2. Conditional Rendering: Renders available data, displaying placeholders if certain fields are unavailable.

### ErrorMessage.js
Displays error messages in the event of an API failure or no search results found. It provides a user-friendly way to communicate issues back to the user.


# System Design Overview
The Product Lookup Tool is a frontend-only, client-side application. The main components of the system are:

1. Frontend: The React app handles user input, fetches product data from the Fake Store API, and renders results.
2. API: The Fake Store API provides the product data, which is filtered and displayed in the app.




# Component Architecture

App.js
├── ProductSearch.js
└── ProductCard.js
└── ErrorMessage.js



# System Design Flow
1. User Input: Users input the product name in ProductSearch.
2. Data Fetching: App.js sends a request to the Fake Store API to retrieve product data. It filters products that match the search term.
3. Error Handling: If no products are found, App.js sets an error message which ErrorMessage.js displays.
4. Data Display: App.js passes product data to ProductCard.js components, which render each matching product.



# State Management
1. React Hooks: useState is used to manage state for products, loading status, and errors.
2. Conditional Rendering: Based on the states (loading, error, or product list), the application conditionally renders loading indicators, error messages, or product cards.

 
 
