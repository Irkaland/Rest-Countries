export const Filter = ({ setSelect, isDarkMode }) => {

    function handleSelect(e) {
        setSelect(e.target.value)
    }
    return (
        <select className={isDarkMode ? "filter filter-dark" : "filter"} onChange={handleSelect}>
            <option className="filter-option">All Region</option>
            <option className="filter-option">Africa</option>
            <option className="filter-option">Asia</option>
            <option className="filter-option">America</option>
            <option className="filter-option">Europe</option>
            <option className="filter-option">Oceania</option>
        </select>
    )
}