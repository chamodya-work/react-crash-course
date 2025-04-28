import './App.css';
import { ProductCard } from './components/ProductCard';

function App() {

  const product = {
    imageSrc: "/images/iphone-5.png",
    name: "iphone 16pro max",
    specs: ["long battery life", "great camera", "fast processor"],
    price: 100
  };


  return (
    <div className="App">
      <ProductCard product={product} />
    </div>
  );
}

export default App;
