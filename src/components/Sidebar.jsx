import MenuAccordion from "@/components/MenuAccordion.jsx";


const Sidebar = () => {
    return (<aside className='py-4 px-8 bg-muted h-full'>
        <span className='mx-auto text-2xl'>Monopoly</span>
        <div className='flex flex-col mt-20 gap-y-4'>
            <MenuAccordion type={"multiple"}/>
        </div>
    </aside>);
};

export default Sidebar;
