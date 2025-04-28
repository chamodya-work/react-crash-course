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
        <ProductCard product={product} background="green" width="80px" height="80px" />
        <ProductCard product={product} background="yellow" width="90px" height="90px" />
        <ProductCard product={product} width="60px" height="60px" />
        <ProductCard product={product} background="red" width="100px" height="100px" />
      </ProductList>
    </div>
  );
}

export default App;
