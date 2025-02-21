import styles from './map.module.css'

function Map() {
  return (
    <div className={styles.mapContainer}>
        <h2>¿Dónde está nuestro taller?</h2>
        <h3>Lanús oeste, a cuadras de Coto Lanús (ubicación aproximada)</h3>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d105059.0526621987!2d-58.4332985!3d-34.6270295!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35a35feff86ebc1%3A0xcf944037bf052be1!2sMacbory.tech!5e0!3m2!1ses-419!2sar!4v1722379164308!5m2!1ses-419!2sar" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default Map

