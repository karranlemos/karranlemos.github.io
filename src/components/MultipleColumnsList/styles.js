const styles = {
  multipleColumnsList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '50px',

    margin: '30px 20px',
    textAlign: 'center',

    overflow: 'hidden',
  },

  columnList: {
    flex: '1 1 0',
    minWidth: 200,
    overflow: 'hidden',
  },

  columnTitle: {
    fontSize: 22,
    margin: '10px 0 20px 0',
  },

  list: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },

  line: {
    margin: 10,
    lineHeight: 1.4,
  },
}

export default styles