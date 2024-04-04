import {useFetchPlayersQuery} from "@/store/api/playersApi.js";
import {NewGameForm, Skeleton} from "@/components/index.js";


const NewGame = () => {
    const {data, error, isFetching} = useFetchPlayersQuery();
    const playersData = [];

    let content;
    if (isFetching) {
        content = <Skeleton className="h-8 w-8" times={4}/>;
    } else if (error) {
        content = <div>Error fetching games.</div>
    } else {
        data.map(datum => {
            playersData.push({id: datum.id, name: datum.name})
        })
        content = <NewGameForm playersData={playersData}/>
    }
    return <>{content}</>
}

export default NewGame