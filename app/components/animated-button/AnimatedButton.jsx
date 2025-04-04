import Image from 'next/image'
import styles from './animatedButton.module.css'
import { motion } from 'framer-motion'
import Link from 'next/link'

function AnimatedButton() {
    return (
        <article className={styles.animatedButton}>
            <motion.div 
                whileHover={{ scale: 1.2
                }} 
                className={styles.btn}
            >
                <Link href="/lista-de-precios" 
                >Lista de precios 2025</Link>
            </motion.div>
        </article>
    )
}

export default AnimatedButton