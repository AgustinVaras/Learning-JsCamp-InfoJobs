import { useState, useEffect } from "react";

export function useContactForm() {
    const [ values, setValues ] = useState({
        email: "",
        message: ""
    });
    
    const [ errors, setErrors ] = useState({
        
    });

    const [ isSubmited, setIsSubmited ] = useState(false);

    useEffect(() => {
            if (isSubmited) {
                const timer = setTimeout(() => {
                    setIsSubmited(false);
                }, 3000);

                return () => clearTimeout(timer);
            }
        }, [isSubmited]);

    const validate = (values) => {
        const errorMessages = {};

        if (!values.email) {
            errorMessages.email = "El email es obligatorio";
        } else if (!values.email.includes("@") || !values.email.includes(".")) {
            errorMessages.email = "El email no es válido";
        } 

        if (!values.message) {
            errorMessages.message = "El mensaje es obligatorio";
        } else if (values.message.length < 10) {
            errorMessages.message = "El mensaje debe tener al menos 10 caracteres";
        }
      
        if (Object.keys(errorMessages).length > 0) {
            setErrors(errorMessages);
            return false;
        }

        return true;
    }; 

    const resetForm = () => {
        setValues({
            email: "",
            message: ""
        });
        setErrors({});
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));

        setErrors(prevErrors =>({
            ...prevErrors,
            [name]: ""
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const formValues = {
            email: formData.get("email"),
            message: formData.get("message")
        };

        if(!validate(formValues)){ 
            console.log(errors);
            return;
        };

        console.log(values);
        
        setIsSubmited(true);
        resetForm();

        
    };
    
    return {
        values,
        errors,
        isSubmited,
        handleChange,
        handleSubmit
    }
}