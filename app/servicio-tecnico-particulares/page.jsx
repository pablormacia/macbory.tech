
import ContratarButton from "../components/contratar-button/ContratarButton"
import Navbar from "../components/navbar/Navbar"
import PreciosTable from "../components/precios-table/PreciosTable"
import Title from "../components/title/Title"
import styles from './page.module.css'
import Form from "../components/form/Form"
import Map from "../components/map/Map"
import Footer from "../components/footer/Footer"
import Link from "next/link"

function page() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Title title="MacBory Tech" subtitle="Servicio técnico de pc" />
      <div className={styles.menu}>
        <Link className={styles.active} href="servicio-tecnico-particulares">Particulares</Link>
        <Link  href="servicio-tecnico-empresas">Empresas</Link>
      </div>
      <div className={styles.description}>
        <h2>Soporte técnico para el hogar</h2>
        <br />
        <p>Contamos con servicios de reparación y mantenimiento de PC rápidos, confiables y a precios competitivos.</p>
        <br />
        <h2>¿Por qué elegirnos?</h2>
        <br />
        <ul>
          <li><strong>Experiencia y Profesionalismo:</strong> Contamos con técnicos calificados y con años de experiencia en la reparación de equipos informáticos.</li>
          <li><strong>Servicio a Domicilio:</strong> Nos desplazamos hasta tu hogar para mayor comodidad.</li>
          <li><strong>Diagnóstico Gratuito:</strong> Evaluamos tu PC sin costo alguno para determinar el problema y ofrecerte la mejor solución.</li>
          <li><strong>Garantía de Satisfacción:</strong> Nos aseguramos de que tu equipo funcione perfectamente antes de finalizar el servicio</li>
        </ul>
      </div>
      <div className={styles.bannerContainer}>
        <h2>INSTALAMOS SOFTWARE ORIGINAL</h2>
        <br />
        <img src="./images/software1.png" alt="" />
      </div>
      <PreciosTable />
      <div className={styles.description}>
        <h3>Aclaraciones</h3>
        <p>El servicio técnico a domicilio y el retiro y entrega de equipos está estipulado para las zonas cercanas a Lanús. Consultar por otras zonas. <br />
        Los tiempos de reparación están sujetos a disponibilidad de hardware.<br /><br />
        <strong>Medios de pago: <br />
        Efectivo - Trasnferencia</strong>

        </p>
      </div>
      <ContratarButton />
      <Form />
      <Map />
      <Footer />
    </div>
    
  )
}

export default page