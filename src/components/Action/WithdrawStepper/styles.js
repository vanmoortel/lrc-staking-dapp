export default (theme) => ({
  root: {
    width: '100%'
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  actionsContainer: {
    marginBottom: theme.spacing(2)
  },
  buttonProgress: {
    color: theme.palette.primary.main,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -9,
    marginLeft: -16
  },
  wrapper: {
    position: 'relative',
    width: 'fit-content'
  },
  inputLRC: {
    marginTop: 16,
    marginBottom: 8,
    width: '60%'
  },
  sliderAmount: {
    width: '60%'
  },
  spanAmount: {
    color: theme.palette.primary.main
  },
  divBackAndConfirm: {
    display: 'flex'
  },
});