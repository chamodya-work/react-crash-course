import './App.css';
import { ProductCard } from './components/ProductCard';
import { ProductList } from './components/ProductList';

function App() {

  const products = [
    {
      imageSrc: "/images/iphone-5.png",
      name: "iPhone 16 Pro Max",
      specs: ["Long battery life", "Excellent camera", "A18 Pro chip"],
      price: 1399
    },
    {
      imageSrc: "images/apple-tv.png",
      name: "Samsung Galaxy S24 Ultra",
      specs: ["200MP camera", "S Pen included", "Snapdragon 8 Gen 3"],
      price: 1299
    },
    {
      imageSrc: "/images/apple-watch.png",
      name: "Google Pixel 9 Pro",
      specs: ["Pure Android experience", "Tensor G3 chip", "Outstanding photography"],
      price: 1099
    },
    {
      imageSrc: "/images/macbook.png",
      name: "OnePlus 12",
      specs: ["Fast charging", "Smooth AMOLED display", "Snapdragon 8 Gen 3"],
      price: 899
    }
  ];

  function eventHandler(product) {
    alert(`you clicked ${product.name} the price is $${product.price}`);
  }


  return (
    <div className="App">
      <ProductList>
        <ProductCard product={products[0]} background="lightblue" width="80px" height="80px" clickEvent={eventHandler} />
        <ProductCard product={products[1]} background="lavender" width="90px" height="90px" clickEvent={eventHandler} />
        <ProductCard product={products[2]} background="mistyrose" width="60px" height="60px" clickEvent={eventHandler} />
        <ProductCard product={products[3]} background="peachpuff" width="100px" height="100px" clickEvent={eventHandler} />
      </ProductList>
    </div>
  );
}

export default App;
