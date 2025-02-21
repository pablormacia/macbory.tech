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
import Image from "next/image"

function page() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Title title="MacBory Tech" subtitle="Servicio técnico de celulares" />
      <div className={styles.description}>
        <h2>Android e Iphone</h2>
        <br />
        <p>Contamos con servicios de reparación y mantenimiento de celulares, confiables y a precios competitivos.</p>
        <br />
        <h2>¿Por qué elegirnos?</h2>
        <br />
        <ul>
          <li><strong>Experiencia y Profesionalismo:</strong> Contamos con técnicos calificados y con años de experiencia en la reparación de equipos informáticos.</li>
          <li><strong>Diagnóstico Gratuito:</strong> Evaluamos tu celular sin costo alguno para determinar el problema y ofrecerte la mejor solución.</li>
          <li><strong>Garantía de Satisfacción:</strong> Nos aseguramos de que tu equipo funcione perfectamente antes de finalizar el servicio</li>
        </ul>
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