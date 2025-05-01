import './App.css';
import { ProductCard } from './components/ProductCard';
import { ProductList } from './components/ProductList';
import { Fragment } from 'react';

function App() {

  const products = [
    {
      imageSrc: "/images/iphone-5.png",
      name: "iPhone 16 Pro Max",
      specs: ["Long battery life", "Excellent camera", "A18 Pro chip"],
      price: 1399,
      stockCount: 5
    },
    {
      imageSrc: "images/apple-tv.png",
      name: "Samsung Galaxy S24 Ultra",
      specs: ["200MP camera", "S Pen included", "Snapdragon 8 Gen 3"],
      price: 1299,
      stockCount: 3
    },
    {
      imageSrc: "/images/apple-watch.png",
      name: "Google Pixel 9 Pro",
      specs: ["Pure Android experience", "Tensor G3 chip", "Outstanding photography"],
      price: 1099,
      stockCount: 0
    },
    {
      imageSrc: "/images/macbook.png",
      name: "Apple M06 laptop",
      specs: ["Fast charging", "Smooth AMOLED display", "Snapdragon 8 Gen 3"],
      price: 899,
      stockCount: 1
    }
  ];

  function eventHandler(product) {
    alert(`you clicked ${product.name} the price is $${product.price}`);
  }


  return (

    <div className="App">
      <ProductList>
        {products.map(product =>
          <ProductCard key={product.name} product={product} clickEvent={eventHandler} />
        )}

        {/* above use map function to iterate over the products array and create a ProductCard for each product */}
        {/* <ProductCard product={products[0]} clickEvent={eventHandler} />
        <ProductCard product={products[1]} clickEvent={eventHandler} />
        <ProductCard product={products[2]} clickEvent={eventHandler} />
        <ProductCard product={products[3]} clickEvent={eventHandler} /> */}
      </ProductList>

      <h2>products which cost upto $1200</h2>

      {products
        .filter(({ price }) => price < 1200)
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
