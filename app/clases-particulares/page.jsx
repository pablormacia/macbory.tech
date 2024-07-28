
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
      <Title title="MacBory Tech" subtitle="Clases particulares" />
      <div className={styles.description}>
        <h2>Clases personalizadas y grupales</h2>
        <br />
        <p>Puede que seas un estudiante de nivel secundario preparando las materias de tecnología, o un estudiante de bootcamps necesitando un refuerzo. En cualquier caso, podemos ayudarte a preparar la materia, exámenes o trabajos prácticos.</p>
        <br />
        <h2>Qué ofrecemos:</h2>
        <br />
        <ul>
          <li><strong>Clases online individuales: </strong>  Por medio de plataformas como Zoom o Meet</li>
          <li><strong>Clases online grupales:</strong> También por medio de plataformas como Zoom o Meet.</li>
          <li><strong>Apoyo asíncrono: </strong> Por whatsapp o redes, para revisar trabajos y dar comentarios y sugerencias.</li>
        </ul>
        <h2>Temas:</h2>
        <br />
        <ul>
          <li><strong>Algoritmos y programación </strong> </li>
          <li><strong>PSeInt</strong></li>
          <li><strong>Diseño web con figma, html y css</strong></li>
          <li><strong>Programación en Javascript</strong> </li>
          <li><strong>React y React Native</strong></li>
        </ul>

        <h2>Referencias:</h2>
        <br />
        <ul>
          <li>Director y docente de informática en Colegio Lausanne  </li>
          <li>Profesor en curso de desarrollo de aplicaciones con React Native en Coderhouse</li>
          <li>Profesor de alfabetización tecnológica en "Plan Joven"</li>
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