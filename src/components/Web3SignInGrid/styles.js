import hero1 from '../../assets/images/hero-bg/hero-1.jpg';

export default (theme) => ({
  backgroundHero: {
    backgroundImage: `url(${hero1})`,
  },
  btnBack: {
    border: 0,
    fontSize: '1rem',
    left: 8,
    position: 'absolute',
    top: 2,
    zIndex: 6,
  },
  btnSwitchNext: {
    border: 0,
    bottom: 2,
    fontSize: '1rem',
    position: 'absolute',
    right: 8,
  },
  btnSwitchPrev: {
    border: 0,
    bottom: 2,
    fontSize: '1rem',
    left: 8,
    position: 'absolute',
  },
  colorTitleWatch: {
    color: theme.palette.secondary.main,
  },
  loopringImg: {
    height: '1.7rem',
  },
  pb40: {
    paddingBottom: theme.spacing(5),
  },
});
