'use client'
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
      <Title title="MacBory Tech" subtitle="Lista de precios 2025" />
      
      <PreciosTable />
      <div className={styles.description}>
        <h3>Aclaraciones</h3>
        <p>El servicio técnico a domicilio y el retiro y entrega de equipos está estipulado para las zonas cercanas a Lanús. Consultar por otras zonas. <br />
        *Los tiempos de reparación están sujetos a disponibilidad de hardware.<br /><br />
        <strong>Medios de pago: <br />
        Efectivo - Transferencia</strong>

        </p>
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