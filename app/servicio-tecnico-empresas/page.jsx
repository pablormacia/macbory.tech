'use client'
import ContratarButton from "../components/contratar-button/ContratarButton"
import Navbar from "../components/navbar/Navbar"
import Title from "../components/title/Title"
import styles from '../servicio-tecnico-particulares/page.module.css'
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
        <Link href="servicio-tecnico-particulares">Particulares</Link>
        <Link className={styles.active} href="servicio-tecnico-empresas">Empresas</Link>
      </div>
      <div className={styles.description}>
        <h2>Soporte técnico para la empresa</h2>
        <br />
        <p>En el entorno empresarial actual, la tecnología es crucial para el éxito. Ofrecemos servicios integrales de reparación y mantenimiento de PC, servidores y redes para asegurarnos de que tu infraestructura informática funcione sin problemas y con la máxima eficiencia.</p>
        <br />
        <h2>Nuestros servicios</h2>
        <br />
        <ul>
          <li><strong>Reparación y Mantenimiento de PC:</strong> Solucionamos problemas de hardware y software, mejoramos el rendimiento y ofrecemos soporte técnico continuo.</li>
          <li><strong>Redes Informáticas:</strong> Diseño, implementación y mantenimiento de redes seguras y eficientes que faciliten la comunicación y el flujo de información en tu empresa.
          </li>
          <li><strong>Soporte Técnico Dedicado: </strong> Atención rápida y personalizada para resolver cualquier incidencia tecnológica que pueda surgir.</li>
        </ul>
      </div>
      <div className={styles.bannerContainer}>
        <h2>INSTALAMOS SOFTWARE ORIGINAL</h2>
        <br />
        <img src="./images/software2.png" alt="Instalamos software original" />
      </div>
      <ContratarButton />
      <div className="desktopFlex">
        <Form />
        <Map />
      </div>
      <Footer />
    </div>
    
  )
}

export default page