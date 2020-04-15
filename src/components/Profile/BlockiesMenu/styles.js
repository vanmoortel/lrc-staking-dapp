export default (theme) => ({
  btnBlockies: {
    '&:hover': {
      transform: 'scale(1.1)'
    },
    cursor: 'pointer'
  },
  accountAction: {
    background: 'transparent'
  },
  angleDownBlockies: {
    position: 'absolute',
    right: 4,
    bottom: -11,
    color: theme.palette.primary.main
  },
  iconLeft: {
    marginRight: theme.spacing(1)
  }
});
