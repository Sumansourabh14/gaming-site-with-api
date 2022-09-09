import { faPlaystation, faWindows, faXbox } from "@fortawesome/free-brands-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState } from "react";
import { popularURLs } from "../API_data";
import LinkButton from "./LinkButton";

function GetPopular2022Games() {
    const [popular2022Games, setPopular2022Games] = useState([]);

    axios.get(popularURLs.popularGames2022URL)
        .then(res => setPopular2022Games(res.data.results));

    return (
        <section id="popularGames2022">
            <div className="container mx-auto border-2">
                <div className="border-cyan-500 px-8 grid md:grid-cols-3 lg:grid-cols-5 gap-4 justify-center">
                    {popular2022Games.map(game => {
                        return (
                            <div key={game.id} className="max-w-sm border-stone-700 shadow-lg">
                                <div className="border-2 border-stone-500">
                                    <img 
                                        src={game.background_image} 
                                        alt={game.slug}
                                        className=""
                                    />
                                </div>
                                <h3 className="font-bold text-xl">{game.name}</h3>
                                <p>{game.rating} <FontAwesomeIcon icon={faStar} /></p>
                                <p>{game.metacritic}</p>
                                
                                <div>
                                    {game.parent_platforms.map(platform => {
                                        if (platform.platform.name === "PC") {
                                            return <FontAwesomeIcon icon={faWindows} />
                                        }
                                        if (platform.platform.name === "PlayStation") {
                                            return <FontAwesomeIcon icon={faPlaystation} />
                                        }
                                        if (platform.platform.name === "Xbox") {
                                            return <FontAwesomeIcon icon={faXbox} />
                                        }
                                        {/* return (
                                            <p>{platform.platform.name}</p>
                                        ) */}
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            {/* <a href="" className="bg-slate-800 px-12 py-4 text-slate-200 font-bold uppercase rounded-md">View All Games</a> */}
            <LinkButton 
                destination="" 
                classes="" 
                linkText="View All Games" 
            />
        </section>
    )
}

export default GetPopular2022Games;