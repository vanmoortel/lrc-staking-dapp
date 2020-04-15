export default (theme) => ({
  buttonTranslate: {
    '& > button':{
      '&:hover': {
        color: theme.palette.primary.light,
        transition: 'color 0.2s ease-out 0s',
        backgroundColor: 'transparent',
      },
      color: theme.palette.primary.dark,
      backgroundColor: 'transparent',
      boxShadow: 'none',
    },
  },
  flagAction: {
    backgroundColor: 'transparent !important',
    boxShadow: 'none',
  }
});
