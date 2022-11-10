import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Header({ isDarkMode, setIsDarkMode }) {
  function handleDarkMode() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <header className={isDarkMode ? "header header-dark" : "header"} >
      <div className="header-title-wrapper">
        <h1 className="header-title">Where in the world?</h1>
      </div>
      <div className="header-light-switch-wrapper">
        <div className="header-light-switch-icon" onClick={handleDarkMode}>
          {isDarkMode ? (<FontAwesomeIcon icon="sun" />) : (<FontAwesomeIcon icon="moon" />)}
        </div>
        <div className="header-light-switch-text">{isDarkMode ? "Light Mode" : "Dark Mode"}</div>
      </div>
    </header >
  );
}
