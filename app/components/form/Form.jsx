import React from 'react'
import styles from './form.module.css'


function Form() {
    return (
        <div className={styles.formContainer}>
            <h2>Contacto</h2>
            <form className={styles.formMobile} action="">
                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                    <label htmlFor="name">Nombre</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className={styles.formRow}>
                    <div className={`${styles.formGroup} ${styles.halfWidth}`}>
                        <label htmlFor="phone">Celular</label>
                        <input type="tel" id="phone" name="phone" required />
                    </div>
                    <div className={`${styles.formGroup} ${styles.halfWidth}`}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                </div>
                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                    <label htmlFor="message">Consulta</label>
                    <textarea id="message" name="message" rows="4" required></textarea>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Form