import {ThemeProvider as NextThemesProvider} from "next-themes";

const ThemeProviders = ({children, ...props}) => {
    return (<NextThemesProvider {...props}>{children}
        </NextThemesProvider>
    )
}

export default ThemeProviders