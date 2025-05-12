export function ProductFilter({ filter, onFilter }) {
    return (
        <div>
            Price: $
            <input defaultValue={filter.price.min} type="number" min={0} max={100}
                onChange={(e) => onFilter('min', e.target.value)} />
            -$
            <input defaultValue={filter.price.max} type="number" min={0} max={100}
                onChange={(e) => onFilter('max', e.target.value)}
            />
        </div>
    );
}