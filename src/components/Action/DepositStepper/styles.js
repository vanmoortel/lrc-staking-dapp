export default (theme) => ({
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
  buttonProgress: {
    color: theme.palette.primary.main,
    left: '50%',
    marginLeft: -16,
    marginTop: -9,
    position: 'absolute',
    top: '50%',
  },
  divBackAndConfirm: {
    display: 'flex',
  },
  divConfetti: {
    height: '100%',
    left: 0,
    overflowX: 'hidden',
    overflowY: 'hidden',
    pointerEvents: 'none',
    position: 'fixed',
    top: 0,
    width: '100%',
  },
  inputLRC: {
    marginBottom: 8,
    marginTop: 16,
    width: '60%',
  },
  root: {
    width: '100%',
  },
  sliderAmount: {
    width: '60%',
  },
  spanAmount: {
    color: theme.palette.primary.main,
  },
  wrapper: {
    position: 'relative',
    width: 'fit-content',
  },
});
