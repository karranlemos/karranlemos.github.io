import colors from '../../commons/colors'
import './keyframes.css'

export const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    height: '100vh',
    width: '100vw',
    overflow: 'hidden',

    backgroundColor: colors.black,
  },
  loading: {
    border: `10px solid ${colors.white}`,
    borderTop: '10px solid transparent',
    borderRadius: '50%',
    width: '80px',
    height: '80px',
    animation: 'spin 0.9s linear infinite',
  }
}