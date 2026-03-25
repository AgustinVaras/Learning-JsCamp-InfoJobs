import { useState } from 'react';

const HELP_MESSAGES = {
    technology: "Selecciona una tecnología para filtrar los resultados de búsqueda.",
    location: "Selecciona una ubicación para filtrar los resultados de búsqueda.",
    level: "Selecciona un nivel de experiencia para filtrar los resultados de búsqueda."
}

export function useFilterHelp(styles) {
    const [helpText, setHelptext] = useState("");
        
    const showHelp = (filterName) => {
        setHelptext(HELP_MESSAGES[filterName] || "");
    };
    const hideHelp = () => {
        setHelptext("");
    };
    
    const handleFocus = (event) => {
        event.target.classList.add(styles.isFocused);
        showHelp(event.target.name);
    };

    const handleMouseEnter = (event) => {
        showHelp(event.target.name);
    };
    
    const handleBlur = (event) => {
        event.target.classList.remove(styles.isFocused);
        hideHelp();
    };
    
    const handleChange = () => {
        hideHelp();
    };

    const handleMouseLeave = () => {
        hideHelp();
    };

    return { 
        helpText, 
        handleFocus, 
        handleBlur, 
        handleMouseEnter, 
        handleChange, 
        handleMouseLeave 
    };
}