import hero1 from "../../assets/images/hero-bg/hero-1.jpg";

export default (theme) => ({
  loopringImg: {
    height: '1.7rem'
  },
  backgroundHero: {
    backgroundImage: 'url(' + hero1 + ')'
  },
  btnSwitchPrev: {
    position: 'absolute',
    left: 8,
    bottom: 2,
    border: 0,
    fontSize: '1rem'
  },
  btnSwitchNext: {
    position: 'absolute',
    right: 8,
    bottom: 2,
    border: 0,
    fontSize: '1rem',
  },
  btnBack: {
    position: 'absolute',
    left: 8,
    top: 2,
    border: 0,
    fontSize: '1rem'
  },
  pb40: {
    paddingBottom: theme.spacing(5)
  },
  colorTitleWatch: {
    color: theme.palette.secondary.main
  }
});
