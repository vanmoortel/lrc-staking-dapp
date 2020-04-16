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
  root: {
    width: '100%',
  },
  spanAmount: {
    color: theme.palette.primary.main,
  },
  wrapper: {
    position: 'relative',
    width: 'fit-content',
  },
});
