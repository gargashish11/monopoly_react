import {NewGameForm, Skeleton} from "@/components/index.js";
import {getPlayers} from "@/store/api/playersApi.js";
import {useQuery} from "@tanstack/react-query";


const NewGame = () => {

    const {data, error, isLoading} = useQuery({
        queryKey: ['players'],
        queryFn: ({signal}) => getPlayers({signal}),
        staleTime: 30000
    })

    const playersData = [];

    let content;
    if (isLoading) {
        content = <Skeleton className="h-8 w-8" times={4}/>;
    } else if (error) {
        content = <div>Error fetching players. Please try again later.</div>
    } else {
        data.map(datum => {
            playersData.push({id: datum.id, name: datum.name})
        })
        content = <NewGameForm playersData={playersData}/>
    }
    return <>{content}</>
}

export default NewGame