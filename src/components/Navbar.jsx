import ThemeToggle from "@/components/ThemeToggle.jsx";
import {Logo, NavDropDownMenu} from "@/components/index.js";


const Navbar = () => {
    return (
        <nav className='bg-muted py-4 sm:px-16 lg:px-24 px-4 flex items-center justify-between'>
            <div>
                <NavDropDownMenu/>
            </div>
            <Logo className='lg:hidden'/>
            <div className='flex items-center gap-x-4'>
                <ThemeToggle/>
            </div>
        </nav>
    );
};

export default Navbar;
