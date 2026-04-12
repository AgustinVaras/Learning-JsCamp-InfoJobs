import { useContactForm } from "../hooks/useContactForm";

import styles from "../components/Contact.module.css"

export default function Contact () {
    const { values, errors, isSubmited, handleChange, handleSubmit } = useContactForm();

    return (
        <main className={styles.contactPage}>

            <div className={styles.contactFormContainer}>

                <h1 >📧 Contacto </h1>
                <p>¿Alguna duda? ¡Contáctanos!</p>

                <form role="form" className={styles.contactForm} onSubmit={handleSubmit}>
                    <input 
                        name="email"
                        type="email"
                        placeholder="Leave your e-mail: example@email.com"
                        // required
                        className={styles.emailInput}
                        value={values.email}
                        onChange={handleChange}
                    ></input>
                    {errors.email && <p className={styles.error}>{errors.email}</p>}
                    <textarea
                        name="message"
                        rows="10"
                        cols="50"
                        placeholder="Leave your message here. . ."
                        // required
                        className={styles.contactInput}
                        value={values.message}
                        onChange={handleChange}
                        ></textarea>
                        {errors.message && <p className={styles.error}>{errors.message}</p>}
                    <button className={styles.submitForm}>Submit</button>
                    {isSubmited && <p className={styles.success}>Mensaje enviado correctamente</p>}
                </form>

            </div>
        </main>
    );
};