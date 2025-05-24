import './App.css';
import { ProductCard } from './components/ProductCard';
import { ProductList } from './components/ProductList';
import { ProductFilter } from './components/ProductFilter';
import { Fragment, useState } from 'react';


function App() {

  const products = [
    {
      id: 1,
      imageSrc: "/images/iphone-5.png",
      name: "iPhone 16 Pro Max",
      specs: ["Long battery life", "Excellent camera", "A18 Pro chip"],
      price: 1399,
      stockCount: 5
    },
    {
      id: 2,
      imageSrc: "images/apple-tv.png",
      name: "Samsung Galaxy S24 Ultra",
      specs: ["200MP camera", "S Pen included", "Snapdragon 8 Gen 3"],
      price: 1299,
      stockCount: 3
    },
    {
      id: 3,
      imageSrc: "/images/apple-watch.png",
      name: "Google Pixel 9 Pro",
      specs: ["Pure Android experience", "Tensor G3 chip", "Outstanding photography"],
      price: 1099,
      stockCount: 0
    },
    {
      id: 4,
      imageSrc: "/images/macbook.png",
      name: "Apple M06 laptop",
      specs: ["Fast charging", "Smooth AMOLED display", "Snapdragon 8 Gen 3"],
      price: 899,
      stockCount: 1
    }
  ];
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
          <ProductCard key={product.name} product={product} clickEvent={eventHandler} onFavorite={handlefavorite} />
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
