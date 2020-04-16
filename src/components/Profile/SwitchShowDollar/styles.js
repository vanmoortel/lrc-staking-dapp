export default (theme) => ({
  divTopRight: {
    [theme.breakpoints.down('lg')]: {
      right: theme.spacing(1.5),
    },
    position: 'absolute',
    right: 0,
    top: theme.spacing(3),
  },
  iconDollar: {
    color: theme.palette.primary.main,
  },
  loopringLogo: {
    marginBottom: 'auto',
    marginRight: 4,
    marginTop: 'auto',
  },
});
