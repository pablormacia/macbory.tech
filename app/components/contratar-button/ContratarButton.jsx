import Image from 'next/image'
import styles from './contratar.module.css'
import { motion } from 'framer-motion'

function ContratarButton() {
    return (
        <article className={styles.contratar}>
            <motion.a target="_BLANK" href="https://wa.me/541170645880?text=%C2%A1Hola!%20Vengo%20desde%20la%20web%20de%20Macbory.tech%20y%20quiero%20hacer%20una%20consulta%3A
" 
            whileHover={{ scale: 1.2 }} onTap={{ scale: 1.2 }}>
                <Image src={require('@/app/assets/whatsapp-comp.png')} alt="Contratá nuestros servicios" />
            </motion.a>
        </article>
    )
}

export default ContratarButton