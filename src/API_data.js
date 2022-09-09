// https://rawg.io/apidocs

const API_KEY = "10630d2e36d64e329dc46d15845a0426";

const allGamesURL = `https://api.rawg.io/api/games?key=${API_KEY}`;

const allDevelopersURL = `https://api.rawg.io/api/developers?key=${API_KEY}`;

const popularURLs = {
    popularGames2022URL: `https://api.rawg.io/api/games?key=${API_KEY}&dates=2022-01-01,2022-07-31&ordering=-added`,
    popularGames2021URL: `https://api.rawg.io/api/games?key=${API_KEY}&dates=2021-01-01,2021-12-31&ordering=-added`,
    popularGames2020URL: `https://api.rawg.io/api/games?key=${API_KEY}&dates=2020-01-01,2020-12-31&ordering=-added`,
    popularGames2019URL: `https://api.rawg.io/api/games?key=${API_KEY}&dates=2019-01-01,2019-12-31&ordering=-added`,
};

const topRatedURLs = {
    topRated2022URL: `https://api.rawg.io/api/games?key=${API_KEY}&dates=2022-01-01,2022-12-31&ordering=-rating`,
    topRated2021URL: `https://api.rawg.io/api/games?key=${API_KEY}&dates=2021-01-01,2021-12-31&ordering=-rating`,
    topRated2020URL: `https://api.rawg.io/api/games?key=${API_KEY}&dates=2020-01-01,2020-12-31&ordering=-rating`,
};

let gameID = "58616";   // Assassin's Creed Odyssey
const gameDetailsURL = `https://api.rawg.io/api/games/${gameID}?key=${API_KEY}`;

export { allDevelopersURL, popularURLs, topRatedURLs, gameDetailsURL };
export default allGamesURL;