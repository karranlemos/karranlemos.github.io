import styles from './styles'

export default function Portfolio({ children }) {
  return (
    <div style={styles.portfolio}>
      {children}
    </div>
  )
}

export function PortfolioItem({ image, title, children, onClick=()=>{} }) {
  return (
    <div
      style={styles.getItem(image)}
      onClick={onClick}
      title={title}
    ></div>
  )
}