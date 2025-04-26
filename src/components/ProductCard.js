export function ProductCard() {
    return (
        <div className="product-card">
            <img src="/images/iphone-5.png" alt="Product" className='product-image' />
            <h2>Product Name</h2>
            <p>Product Description</p>
            <p>$19.99</p>
            <button>Add to Cart</button>
        </div>
    );
}