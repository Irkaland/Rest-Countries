import { Catalog } from "./Catalog";

export const Main = ({ setCountries, countries, isDarkMode, setIsDarkMode }) => {
    return (
        <div className="main">
            <Catalog setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} setCountries={setCountries} countries={countries} />
        </div>
    )
}
