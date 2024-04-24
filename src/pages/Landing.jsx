import {useFetchGamesQuery} from "@/store/index.js";
import Skeleton from "../components/Skeleton.jsx";
import {DataTable, GameColumns} from "@/components/index.js";
import {Button} from "@/components/ui/button.jsx";
import {Link} from "react-router-dom";
import {Separator} from "@/components/ui/separator.jsx";

export const Landing = () => {
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
        <Button variant='outline'
                className='border-2 rounded-xl my-2 mt-0 px-9 py-6 text-[1rem]
                hover:bg-accent-foreground hover:text-background'>
            <Link to="/game/new">New Game</Link>
        </Button>
        <Separator className='my-2 h-[2px]'/>
        <div className='m-0 p-0'>Past Games</div>
        <Separator className='my-2 h-[2px]'/>
        {content}
    </>)
}

export default Landing