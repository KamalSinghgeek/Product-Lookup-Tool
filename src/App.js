import React, { useState } from 'react';
import ProductSearch from './components/ProductSearch';
import ProductCard from './components/ProductCard';
import ErrorMessage from './components/ErrorMessage';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async (productName) => {
    setLoading(true);
    setError(null);
    setProducts([]);

    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      const matchedProducts = response.data.filter((product) =>
        product.title.toLowerCase().includes(productName.toLowerCase())
      );

      if (matchedProducts.length > 0) {
        setProducts(matchedProducts);
      } else {
        setError('No products found');
      }
    } catch (error) {
      setError('An error occurred while fetching products');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Product Lookup Tool</h1>
      <ProductSearch onSearch={fetchProducts} />
      {loading && <p>Loading...</p>}
      {error && <ErrorMessage message={error} />}
      <div className="results-container">
        {products.length > 0 && products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
