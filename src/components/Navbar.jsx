import ThemeToggle from "@/components/ThemeToggle.jsx";
import NavDropDownMenu from "@/components/NavDropDownMenu.jsx";


const Navbar = () => {
    return (
        <nav className='bg-muted py-4 sm:px-16 lg:px-24 px-4 flex items-center justify-between'>
            <div>
                <NavDropDownMenu/>
            </div>
            <span className='mx-auto text-2xl lg:hidden'>Monopoly</span>
            <div className='flex items-center gap-x-4'>
                <ThemeToggle/>
            </div>
        </nav>
    );
};

export default Navbar;
