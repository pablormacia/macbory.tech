import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import Form from "./components/form/Form";
import Map from "./components/map/Map";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Title from "./components/title/Title";
import ContratarButton from "./components/contratar-button/ContratarButton";
import HoverImage from "./components/motion/HoverImage";

export default function Home() {
  return (
    <>
      <section className={styles.mainItemsContainer}>
        <Navbar />
        <Title title="MacBory Tech" subtitle="Servicios informáticos al alcance de todos" />
        <div className={styles.onlyDesktop}>
          {/* <HoverImage /> */}
        </div>
        <div className={`${styles.cardsContainer} ${styles.onlyMobile}`}>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <Image src={require('@/app/assets/serviciotecnico.png')} alt="Servicio técnico de pc a domicilio en Lanús" />
              <div>
                <h3>Servicio técnico de pc</h3>
                <p>&gt;_ tu computadora como nueva ...</p>
              </div>
              <Link href="/servicio-tecnico-particulares" className={`${styles.btn} ${styles.purpleBackground} ${styles.btnRoundedBottomRight}`}>Ver más</Link>
            </div>
          </div>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <Image src={require('@/app/assets/desarrolloweb.png')} alt="Desarrollo web en Lanús" />
              <div>
                <h3>Desarrollo web</h3>
                <p>&gt;_ tu marca potenciada en las redes...</p>
              </div>
              <Link href="/desarrollo-web" className={`${styles.btn} ${styles.blueBackground} ${styles.btnRoundedBottomRight}`}>Ver más</Link>
            </div>
          </div>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <Image src={require('@/app/assets/clasesparticulares.png')} alt="Clases particulares de informática en Lanús" />
              <div>
                <h3>Clases particulares</h3>
                <p>&gt;_ tus conocimientos a la vanguardia...</p>
              </div>
              <Link href="/clases-particulares" className={`${styles.btn} ${styles.yellowBackground} ${styles.btnRoundedBottomRight}`}>Ver más</Link>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.secondaryItemsContainer} ${styles.onlyMobile}`}>
        <div className={styles.card2}>
          <div>
            <h2 className={styles.purpleText}>Servicio técnico de pc</h2>
            <p>¿Cuándo es necesario un service?</p>
            <ul>
              <li>- Cuando tu pc anda lenta</li>
              <li>- Sospechás que puede haber un &quot;virus&quot;</li>
              <li>- Necesitás algún programa particular</li>
              <li>- Tu pc hace ruidos extraños</li>
            </ul>
            <br />
            <Link href="/servicio-tecnico-particulares" className={`${styles.btn} ${styles.purpleBackground} ${styles.btnRoundedAll}`}>Ver más</Link>
          </div>
          <Image src={require('@/app/assets/serviciotecnico2.png')} alt="Servicio técnico de pc a domicilio en Lanús" />
        </div>
        <div className={`${styles.gradientLine} ${styles.gradientLine1} `}></div>
        <div className={styles.card2}>
          <Image src={require('@/app/assets/desarrolloweb2.png')} alt="Desarrollo web en Lanús" />
          <div>
            <h2 className={styles.blueText}>Desarrollo web</h2>
            <p>¿Tu marca ya está online?
              <br />
              La presencia en internet es importante.Por eso, creemos que tener una página web de calidad es una excelente idea para reforzar tu marca.
            </p>
            <br />
            <Link href="/desarrollo-web" className={`${styles.btn} ${styles.blueBackground} ${styles.btnRoundedAll}`}>Ver más</Link>
          </div>

        </div>
        <div className={`${styles.gradientLine} ${styles.gradientLine2} `}></div>
        <div className={styles.card2}>
          <div>
            <h2 className={styles.blueText}>Desarrollo web</h2>
            <p>¿Necesitás ayuda?
              <br />
              Ya seas un estudiante de nivel secundario, o estés realizando un curso de programación y necesites apoyo,estamos para ayudarte.
            </p>
            <br />
            <Link href="/clases-particulares" className={`${styles.btn} ${styles.yellowBackground} ${styles.btnRoundedAll}`}>Ver más</Link>
          </div>
          <Image src={require('@/app/assets/clasesparticulares2.png')} alt="Clases particulares en Lanús" />
        </div>
      </section>
      <ContratarButton />
      <hr />
      <Form />
      <Map />
      <Footer />
    </>
  );
}
