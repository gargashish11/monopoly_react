import {useLoaderData} from "react-router-dom";

const Game = () => {

    const loaderData = useLoaderData();
    console.log(loaderData);

    return (<>
        <h1>Game</h1>
    </>);
};

export default Game;
