import {ThemeProvider} from "next-themes";

const Providers = ({children}) => {
    return (
        <>
            <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
                {children}
            </ThemeProvider>
        </>
    )
}

export default Providers