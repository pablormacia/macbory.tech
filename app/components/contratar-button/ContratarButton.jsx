import Image from 'next/image'
import styles from './contratar.module.css'

function ContratarButton() {
    return (
        <article className={styles.contratar}>
            <a href=""><Image src={require('@/app/assets/whatsapp-comp.png')} alt="Contratá nuestros servicios" /></a>
        </article>
    )
}

export default ContratarButton