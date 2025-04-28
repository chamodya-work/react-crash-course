import './App.css';
import { ProductCard } from './components/ProductCard';
import { ProductList } from './components/ProductList';

function App() {

  const product = {
    imageSrc: "/images/iphone-5.png",
    name: "iphone 16pro max",
    specs: ["long battery life", "great camera", "fast processor"],
    price: 100
  };


  return (
    <div className="App">
      <ProductList>
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
      </ProductList>
    </div>
  );
}

export default App;
