import { IStyle } from '../../commons/interfaces';
import colors from '../../commons/colors'

export const styles: IStyle = {
  sections: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },

  sectionOdd: {
    backgroundColor: colors.black,
  },
  
  sectionEven: {
    backgroundColor: colors.lightBlack,
  },
};