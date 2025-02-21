import styles from './title.module.css'

function Title({title, subtitle}) {
  return (
    <div className={styles.title}>
          <h1>&gt;_ {title}</h1>
          <h2> {subtitle}</h2>
    </div>
  )
}

export default Title