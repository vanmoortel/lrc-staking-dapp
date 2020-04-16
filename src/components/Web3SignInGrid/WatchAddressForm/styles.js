export default (theme) => ({
  btnConfirm: {
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      width: '100%',
    },
    display: 'block',
    flex: 3,
    height: 55,
    marginBottom: 'auto ',
    marginLeft: theme.spacing(2),
    marginTop: 'auto',
  },
  buttonProgress: {
    color: theme.palette.primary.main,
    left: '50%',
    marginLeft: -5,
    marginTop: -13,
    position: 'absolute',
    top: '50%',
  },
  divForm: {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
    display: 'flex',
    width: '100%',
  },
  inputWallet: {
    flex: 10,
    height: 55,
    marginBottom: 'auto',
    marginTop: 'auto',
  },
  wrapper: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    position: 'relative',
    width: 'fit-content',
  },
});
