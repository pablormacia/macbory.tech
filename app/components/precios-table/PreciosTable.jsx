import styles from './preciosTable.module.css'
import items from './precios.json'

function PreciosTable() {
  return (
    <div className={styles.tableContainer}>
        <h2>Precios (Febrero 2025)</h2>
        <br />
        <table className={styles.table}>
        <thead>
          <tr>
          <th>Categoría</th>
            <th>Descripción</th>
            <th>Precio (ARS)</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.category}</td>
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