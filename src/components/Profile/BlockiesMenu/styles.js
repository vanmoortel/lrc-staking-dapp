export default (theme) => ({
  accountAction: {
    background: 'transparent',
  },
  angleDownBlockies: {
    bottom: -11,
    color: theme.palette.primary.main,
    position: 'absolute',
    right: 4,
  },
  btnBlockies: {
    '&:hover': {
      transform: 'scale(1.1)',
    },
    cursor: 'pointer',
  },
  iconLeft: {
    marginRight: theme.spacing(1),
  },
});
