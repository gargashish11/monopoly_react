import {Outlet, useNavigation} from "react-router-dom";
import Navbar from "@/components/Navbar.jsx";
import Sidebar from "@/components/Sidebar.jsx";

const HomeLayout = () => {
    const navigation = useNavigation();
    const isPageLoading = navigation.state === 'loading';

    return (<>
        <div className="grid lg:grid-cols-5">
            <div className="hidden lg:block lg:col-span-1 lg:min-h-screen">
                <Sidebar/>
            </div>
            <div className="lg:col-span-4">
                <Navbar/>
                <div className='py-8 px-8'>
                    {isPageLoading ? <div className=""/> : <Outlet/>}
                </div>
            </div>
        </div>
    </>)
}

export default HomeLayout