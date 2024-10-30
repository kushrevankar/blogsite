"use client"

import { createContext, useState } from "react";


export const ThemeContext = createContext();

const getFromLocalStorage = () => {
    if (typeof window !== "undefined") { // Only run in a browser environment
        const value = localStorage.getItem("theme");
        return value || "light";
    }
    return "light"; // Default to "light" theme if localStorage isn’t accessible
};

export const ThemeContextProvider = ({children}) =>{
    const [theme, setTheme] = useState(()=>{
        return getFromLocalStorage();
    });
    return <ThemeContext.Provider value={{theme}}>{children}</ThemeContext.Provider>;
};