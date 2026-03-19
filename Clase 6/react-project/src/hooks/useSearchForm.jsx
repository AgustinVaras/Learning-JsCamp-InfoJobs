import { useId } from "react";

export function useSearchForm(onSearch) {
    const idSearch = useId();
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const filters = {
            search: formData.get(idSearch),
            technology: formData.get("technology"),
            location: formData.get("location"),
            contract: formData.get("contract"),
            level: formData.get("level")
        }
        console.log(filters);
        onSearch(filters);
    }

    return {
        idSearch,
        handleSubmit
    }
};