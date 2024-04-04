import {useFetchGamesQuery} from "@/store/index.js";
import {DataTable, GameColumns} from "@/components/index.js";
import Skeleton from "@/components/Skeleton.jsx";

const RecentGames = () => {
    const {data, error, isFetching} = useFetchGamesQuery();

    let content;
    if (isFetching) {
        content = <Skeleton className="h-8 w-8" times={4}/>;
    } else if (error) {
        content = <div>Error fetching games.</div>
    } else {
        content = <DataTable columns={GameColumns} data={data}/>
    }

    return (<>
        {content}
    </>)
}

export default RecentGames