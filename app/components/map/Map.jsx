import styles from './map.module.css'

function Map() {
  return (
    <div className={styles.mapContainer}>
        <h2>¿Dónde está nuestro taller?</h2>
        <h3>Lanús oeste, a cuadras del coto Lanús (ubicación aproximada)</h3>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2603.775212328419!2d-58.41670850010541!3d-34.6912726310448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1722105529643!5m2!1ses-419!2sar" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default Map