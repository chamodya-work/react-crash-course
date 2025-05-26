import './App.css';
import { ProductCard } from './components/ProductCard';
import { ProductList } from './components/ProductList';
import { ProductFilter } from './components/ProductFilter';
import { products as productData } from './data/products';
import { Fragment, useState } from 'react';


function App() {

  const [products, setProducts] = useState(productData);

  const [filters, setFilters] = useState({
    price: {
      min: 0,
      max: 1000
    },
    other: "other filter"
  });

  const [favorites, setFavorites] = useState([]);

  function eventHandler(product) {
    alert(`you clicked ${product.name} the price is $${product.price}`);
  }

  function handleFilter(key, value) {
    setFilters((prevFilter) => ({
      ...prevFilter,
      price: {
        ...prevFilter.price,
        [key]: value
      }
    }));
  }

  function handlefavorite(productId) {
    if (favorites.includes(productId)) {
      //remove it
      setFavorites((prevFavorites) => prevFavorites.filter(id => id !== productId));
    } else {
      // add it
      setFavorites((prevFavorites) => [...prevFavorites, productId]);
    }
  }

  return (

    <div className="App">
      <ProductList>
        {products.map(product =>
          <ProductCard key={product.name} product={product} isfavorite={favorites.includes(product.id)} clickEvent={eventHandler} onFavorite={handlefavorite} />
        )}

        {/* above use map function to iterate over the products array and create a ProductCard for each product  */}
        {/* <ProductCard product={products[0]} clickEvent={eventHandler} />
        <ProductCard product={products[1]} clickEvent={eventHandler} />
        <ProductCard product={products[2]} clickEvent={eventHandler} />
        <ProductCard product={products[3]} clickEvent={eventHandler} /> */}
      </ProductList>

      <h2>products filtered by price</h2>
      <ProductFilter filter={filters} onFilter={handleFilter} />

      {products
        .filter(({ price }) => (price <= filters.price.max && price >= filters.price.min))
        .map(({ name, price }) => (
          <Fragment key={name}>
            <hr />
            <p key={name}>
              {name} cost ${price}
            </p>
          </Fragment>
        ))}

    </div>

  );
}

export default App; 
