import { useNavigate } from "react-router-dom";
export const Card = ({ country, isDarkMode }) => {
    const navigate = useNavigate();
    return (
        <div className={isDarkMode ? "card-wrapper card-wrapper-dark" : "card-wrapper"} onClick={() => navigate(`${country.name}`)}>
            < div className="card" >
                <div className="card-flag-wrapper">
                    <img
                        src={country.flag}
                        alt={country.name}
                        className="card-flag" />
                </div>
                <div className="card-info">
                    <h4 className="card-info-title">{country.name}</h4>
                    <p className="card-info-paragrahp">Population: {country.population}</p>
                    <p className="card-info-paragrahp">Region: {country.region}</p>
                    <p className="card-info-paragrahp">Capital: {country.capital}</p>
                </div>
            </div >
        </div >
    )
}