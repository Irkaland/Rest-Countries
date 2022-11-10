import { Card } from "./Card"
import { Search } from "./Search"
import { useEffect, useState } from "react";
import { Filter } from "./Filter"

export const Catalog = ({ isDarkMode, countries }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [select, setSelect] = useState("");
    const [filteredCountries, setFilteredCountries] = useState([]);

    useEffect(() => {
        if (select === "All Region") {
            setFilteredCountries(countries.filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase())));
        } else {
            setFilteredCountries(countries.filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase())
            ).filter((item) => item.region.includes(select))
            );
        }
    }, [searchQuery, select, countries]);

    return (
        <div className={isDarkMode ? "catalog catalog-dark" : "catalog"}>
            <div className="catalog-nav">
                <Search setSearchQuery={setSearchQuery}
                    isDarkMode={isDarkMode}
                />
                <Filter setSelect={setSelect}
                    isDarkMode={isDarkMode}
                />
            </div>
            <div className="catalog-card-container">
                <div className="catalog-card">
                    {filteredCountries.map((country) => {
                        return (
                            <Card
                                key={country.name}
                                country={country}
                                isDarkMode={isDarkMode}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
