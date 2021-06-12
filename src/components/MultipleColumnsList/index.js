import styles from './styles'

export default function MultipleColumnsList({ columnsInfo }) {
  return (
    <div style={styles.multipleColumnsList}>
      {
        columnsInfo.map(columnInfo => (
          <ColumnList
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
          items.map(item => (
            <li style={styles.line}>{item}</li>
          ))
        }
      </ul>
    </div>
  )
}