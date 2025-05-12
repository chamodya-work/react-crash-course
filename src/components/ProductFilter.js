export function ProductFilter({ filter }) {
    return (
        <div>
            Price: $
            <input defaultValue={filter.minPrice} type="number" min={0} max={100}
                onChange={(e) => console.log(e.target.value)}
            /> -$
            <input defaultValue={filter.maxPrice} type="number" min={0} max={100} />
        </div>
    );
}