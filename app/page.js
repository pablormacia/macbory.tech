"use client";
import styles from "./page.module.css";
import Form from "./components/form/Form";
import Map from "./components/map/Map";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Title from "./components/title/Title";
import ContratarButton from "./components/contratar-button/ContratarButton";
import AnimatedButton from "./components/animated-button/AnimatedButton";
import { easeIn, motion } from "framer-motion";
import Image from "next/image";
import phoneParts from "./assets/phone-parts.png";

export default function Home() {
  return (
    <>
      <section className={styles.mainItemsContainer}>
        <Navbar />
        <Title
          title="MacBory Tech"
          subtitle="Reparación de equipos informáticos"
        />
        <motion.div
          initial={{ opacity: 0 }} // Estado inicial (invisible)
          animate={{ opacity: 1 }} // Estado final (visible)
          transition={{ duration: 1 }} // Duración de la animación (1s)
          className={styles.mainTextContainer}
        >
          <div  style={{ position: "relative", width: "300px", height:"200px" }}>
            <Image
              className={styles.mainImage}
              src={phoneParts}
              fill
              alt="partes de un teléfono para reparar"
            />
          </div>
          <div className={styles.mainText}>
            <h2>Profesionalidad y transparencia</h2>
            <h3>
              Más de 15 años brindando servicios de reparaciones de equipos
              informáticos, desde aquellas antiguas pcs con windows 98 hasta las
              notebooks y celulares más modernos de hoy en día.
              <br />
              Seguimos apostando a que nuestros queridos equipos todavía pueden
              seguir funcionando.
            </h3>
          </div>
        </motion.div>
      </section>

      <AnimatedButton />
      <ContratarButton />
      <hr />
      <div className="desktopFlex">
        <Form />
        <Map />
      </div>

      <Footer />
    </>
  );
}
