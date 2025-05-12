export function ProductFilter({ filter, onFilter }) {
    return (
        <div>
            Price: $
            <input defaultValue={filter.minPrice} type="number" min={0} max={100}
                onChange={(e) => onFilter('minPrice', e.target.value)} />
            -$
            <input defaultValue={filter.maxPrice} type="number" min={0} max={100}
                onChange={(e) => onFilter('maxPrice', e.target.value)}
            />
        </div>
    );
}