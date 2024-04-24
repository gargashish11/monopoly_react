import PlayerCard from "@/components/PlayerCard.jsx";

const Players = ({players}) => {
    return (<div className="flex mt-5 gap-4">
        {players.map(player => (<PlayerCard key={player.player_id} player={player}/>))}
    </div>);
};

export default Players;
