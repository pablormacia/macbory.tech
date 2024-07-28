
import ContratarButton from "../components/contratar-button/ContratarButton"
import Navbar from "../components/navbar/Navbar"
import Title from "../components/title/Title"
import styles from './page.module.css'
import Form from "../components/form/Form"
import Map from "../components/map/Map"
import Footer from "../components/footer/Footer"

function page() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Title title="MacBory Tech" subtitle="Desarrollo web" />
      <div className={styles.description}>
        <h2>Desarrollo web profesional</h2>
        <br />
        <p>Nos especializamos en el desarrollo de sitios web de alta calidad diseñados para mejorar la presencia en línea de su negocio y potenciar su crecimiento. Ofrecemos soluciones a medida que se alinean con sus objetivos estratégicos.</p>
        <br />
        <h2>Nuestros servicios</h2>
        <br />
        <ul>
          <li><strong>Desarrollo de Sitios Web Personalizados:</strong> Creamos sitios web únicos que reflejan la identidad de su marca.</li>
          <li><strong>Diseño Responsivo:</strong> Aseguramos una excelente visualización y funcionalidad en todos los dispositivos.</li>
          <li><strong>Optimización SEO: </strong> Mejoramos la visibilidad de su sitio web en los motores de búsqueda.</li>
          <li><strong>E-commerce: </strong>  Soluciones de comercio electrónico eficientes y seguras.</li>
          <li><strong>Mantenimiento y Soporte:  </strong>  Servicios continuos para mantener su sitio web actualizado y funcionando sin problemas.</li>
        </ul>
      </div>
      <ContratarButton />
      <Form />
      <Map />
      <Footer />
    </div>
    
  )
}

export default page