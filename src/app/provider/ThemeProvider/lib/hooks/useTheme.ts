import {ThemeContext} from "../context/ThemeContext";
import {useContext} from "react";
import {Theme} from "../../types";
import {LOCAL_STORAGE_THEME_KEY} from "../const";

interface UseThemeResult {
    theme: Theme;
    toggleTheme: () => void;
}
export function useTheme(): UseThemeResult{
    const {theme, setTheme} = useContext(ThemeContext)
    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    }

    return {theme, toggleTheme}
}