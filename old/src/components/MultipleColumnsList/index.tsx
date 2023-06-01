import { styles } from './styles'

interface IColumnsInfo {
  title: string
  items: string[]
}

interface IOwnProps {
  columnsInfo: IColumnsInfo[]
}

export const MultipleColumnsList = ({ columnsInfo }: IOwnProps) => (
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

const ColumnList = ({
  title,
  items
}: IColumnsInfo) => (
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