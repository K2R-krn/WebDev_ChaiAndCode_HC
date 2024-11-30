import { createContext, useContext } from "react";

// While creating context you can see what are the data avaliable 
// What all basic info u can add here

// 1.  Creating context
export const ThemeContext = createContext({
    //we dont define data here we just provide general info
    themeMode: 'Light',
    darkTheme: () => {},
    lightTheme: () => {}
});

// 2.  Making everyone aware that context exist
export const ThemeProvider = ThemeContext.Provider;

// 3. If any component want to consume the state then use this useContext
// Hook so not have to use each one not have import st and all just use hook
export default function useTheme(){
    return useContext(ThemeContext);
}