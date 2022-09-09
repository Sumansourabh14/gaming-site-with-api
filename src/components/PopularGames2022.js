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
            <div className="border-4 border-cyan-500 px-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 container mx-auto">
                {popular2022Games.map(game => {
                    return (
                        <div key={game.id}>
                            <h3>{game.name}</h3>
                            <p>{game.rating}</p>
                            <p>{game.metacritic}</p>
                            <div className="w-36">
                                <img src={game.background_image} alt={game.slug} />
                            </div>
                        </div>
                    )
                })}
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