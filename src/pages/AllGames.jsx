import {useFetchGamesQuery} from "@/store/index.js";

const AllGames = () => {
    const {data, error, isLoading} = useFetchGamesQuery();
    console.log(data, error, isLoading)
    return (
        <div>AllGames</div>
    )
}

export default AllGames