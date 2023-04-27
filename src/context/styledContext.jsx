import {
    createContext,
    useContext,
    useEffect,
    useState
} from 'react';
import style from '../../settings/colors.json'


const StyleContext = createContext();
export const useStyleContext = () => useContext(StyleContext);

export const StyleProvider = ({ children }) => {
    const [styleMode, setStyleMode] = useState(style.light);
    const [screeSize, setScreenSize] = useState(window.innerWidth);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const mode = darkMode? style.dark_mode: style.light_mode;
        setStyleMode(mode);
    }, [darkMode]);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setScreenSize(window.innerWidth);
        });
    }, []);

    return (
        <StyleContext.Provider value={{
            buttons: styleMode.buttons,
            background: styleMode.background,
            text: styleMode.text,
            link: styleMode.link,
            link_hover: styleMode.link_hover,
            divider: styleMode.divider,
            title: styleMode.title,
            subtitle: styleMode.subtitle,
            text_primary: styleMode.text_primary,
            input: styleMode.input,
            
            darkMode,
            setDarkMode,
            screeSize
        }} >
            {children}
        </StyleContext.Provider>
    )
}