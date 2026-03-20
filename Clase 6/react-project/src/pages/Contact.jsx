import styles from "../components/Contact.module.css"

export function Contact () {

    return (
        <main className={styles.contactPage}>

            <div className={styles.contactFormContainer}>

                <h1 >📧 Contacto </h1>
                <p>¿Alguna duda? ¡Contáctanos!</p>

                <form className={styles.contactForm}>
                    {/* <label 
                        for="email-input">
                        E-mail
                    </label> */}
                    <input 
                        id="email-input"
                        type="email"
                        placeholder="Leave your e-mail: example@email.com"
                        className={styles.emailInput}
                    ></input>
                    <textarea
                        
                        name="message"
                        rows="10"
                        cols="50"
                        placeholder="Leave your message here. . ."
                        className={styles.contactInput}
                        ></textarea>
                    <button className={styles.submitForm}>Submit</button>
                </form>

            </div>
        </main>
    );
};