import Image from 'next/image'
import styles from './animatedButton.module.css'
import { motion } from 'framer-motion'

function AnimatedButton() {
    return (
        <article className={styles.animatedButton}>
            <motion.div 
                whileHover={{ scale: 1.2
                }} 
                className={styles.btn}
            >
                <a href="/lista-de-precios" 
                >Lista de precios 2025</a>
            </motion.div>
        </article>
    )
}

export default AnimatedButton