import styles from './preciosTable.module.css'
import items from './precios.json'

function PreciosTable() {
  return (
    <div className={styles.tableContainer}>
        <h2>Precios (Julio 2024)</h2>
        <br />
        <table className={styles.table}>
        <thead>
          <tr>
            <th>Descripción</th>
            <th>Precio (ARS)</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.description}</td>
              <td>{item.precio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PreciosTable