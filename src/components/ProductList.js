export function ProductList(props) {
    return (
        <>
            <h2>Products</h2>
            <div style={{ display: "flex", gap: "20px" }}>{props.children}</div>
        </>

    );
}