export default (theme) => ({
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  addMarginMobile: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: `${theme.spacing(4)}px !important`,
    },
  },
  btnBack: {
    border: 0,
    fontSize: '1rem',
    left: 8,
    position: 'absolute',
    top: 2,
  },
  button: {
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
  root: {
    width: '100%',
  },
});
