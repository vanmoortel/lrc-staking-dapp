export default (theme) => ({
  btnConfirm: {
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
  inputWallet: {
    flex: 10,
    height: 55,
    marginBottom: 'auto',
    marginTop: 'auto',
  },
  wrapper: {
    position: 'relative',
    width: 'fit-content',
  },
});
