import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

export const CountryPage = ({ countries, isDarkMode }) => {
    const { name } = useParams();
    const [country, setCountry] = useState([]);

    useEffect(() => {
        fetch(`https://restcountries.com/v2/name/${name}`)
            .then((response) => response.json())
            .then((country) => setCountry(country));
    }, [name]);
    console.log(country[0]);
    return (
        <div className={isDarkMode ? "country-container-wrapper country-container-wrapper-dark" : "country-container-wrapper"}>
            <Link to={"/"}>
                {" "}
                <button className={isDarkMode ? "country-container-back-btn country-container-back-btn-dark" : "country-container-back-btn"}>Back</button>
            </Link>
            <div className="country-container">
                <img src={country[0]?.flag} alt={country[0]?.name} className="country-container-img" />
                <div className="country-container-info">
                    <h2>{country[0]?.name}</h2>
                    <div className="country-container-info-wrapper">
                        <div className="country-container-info-right">
                            <div><strong>Native Name:</strong> {country[0]?.nativeName}</div>
                            <div><strong>Population:</strong> {country[0]?.population}</div>
                            <div><strong>Region:</strong> {country[0]?.region}</div>
                            <div><strong>Sub Region:</strong> {country[0]?.subregion}</div>
                            <div><strong>Capital:</strong> {country[0]?.capital}</div>
                        </div>
                        <div className="country-container-info-right">
                            <div><strong>Top Level Domain:</strong> {country[0]?.topLevelDomain}</div>
                            <div><strong>Currencies:</strong> {country[0]?.currencies[0]?.name}</div>
                            <div><strong>Languages:</strong> {country[0]?.languages[0]?.name}</div>
                        </div>
                    </div>
                    {/* <div className="border-btn-wrapper"><strong>Border Countries:</strong> {country[0]?.borders.map((border) => {
                        return (
                            <div className={isDarkMode ? "border-btn border-btn-dark" : "border-btn"} key={border}>{border}
                            </div>
                        );
                    })}
                    </div> */}
                </div>
            </div>

        </div>)
}


