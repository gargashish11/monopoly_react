import {DataTable, GameColumns} from "@/components/index.js";
import Skeleton from "@/components/Skeleton.jsx";
import {useQuery, useQueryClient} from "@tanstack/react-query";
import {getGames} from "@/store/api/gamesApi.js";

const RecentGames = () => {
    const queryClient = useQueryClient();

    const {data, error, isLoading} = useQuery({
        queryKey: 'games',
        queryFn: getGames
    })

    let content;
    if (isLoading) {
        content = <Skeleton className="h-8 w-8" times={4}/>;
    } else if (error) {
        // content = <div>Error fetching games.</div>
        content = <div>{error.data}</div>
    } else if (data.length === 0) {
        content = <div>No games found.</div>
    } else {
        content = <DataTable columns={GameColumns} data={data}/>
    }

    return (<>{content}</>)
}

export default RecentGames