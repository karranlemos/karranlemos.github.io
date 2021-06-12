import styles from './styles'

export default function MultipleColumnsList({ columnsInfo }) {
  return (
    <div style={styles.multipleColumnsList}>
      {
        columnsInfo.map((columnInfo, index) => (
          <ColumnList
            key={index}
            title={columnInfo.title}
            items={columnInfo.items}
          />
        ))
      }
    </div>
  )
}

function ColumnList({ title, items }) {
  return (
    <div style={styles.columnList}>
      <h2 style={styles.columnTitle}>{title}</h2>
      <ul style={styles.list}>
        {
          items.map((item, index) => (
            <li
              key={index}
              style={styles.line}
            >{item}</li>
          ))
        }
      </ul>
    </div>
  )
}