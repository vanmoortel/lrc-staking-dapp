export default (theme) => ({
  buttonTranslate: {
    '& > button': {
      '&:hover': {
        backgroundColor: 'transparent',
        color: theme.palette.primary.light,
        transition: 'color 0.2s ease-out 0s',
      },
      backgroundColor: 'transparent',
      boxShadow: 'none',
      color: theme.palette.primary.dark,
    },
  },
  flagAction: {
    backgroundColor: 'transparent !important',
    boxShadow: 'none',
  },
});
