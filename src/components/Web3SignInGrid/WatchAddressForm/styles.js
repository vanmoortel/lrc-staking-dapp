export default (theme) => ({
  btnConfirm: {
    flex: 3,
    marginLeft: theme.spacing(2),
    display: 'block',
    marginTop: 'auto',
    marginBottom: 'auto ',
    height: 55
  },
  inputWallet: {
    flex: 10,
    marginTop: 'auto',
    marginBottom: 'auto',
    height: 55
  },
  buttonProgress: {
    color: theme.palette.primary.main,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -13,
    marginLeft: -5
  },
  wrapper: {
    position: 'relative',
    width: 'fit-content'
  },
});
