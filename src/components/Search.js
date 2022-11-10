import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const Search = ({ isDarkMode, setIsDarkMode, setSearchQuery }) => {
  function handleSearch(e) {
    setSearchQuery(e.target.value)
  }
  return (
    <div className="search">
      <div className="search-icon">
        <FontAwesomeIcon icon="search" />
      </div>
      <input
        placeholder="Search for a country..."
        className={isDarkMode ? "search-bar search-bar-dark" : "search-bar"}
        onChange={handleSearch}
      />
    </div>
  );
}
