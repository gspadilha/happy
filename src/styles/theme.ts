const theme = {
  fontsFamily: {
    Nunito: 'Nunito',
  },
  colors: {
    dark: {},
    light: {
      gradient: 'linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%)',
      background: '#ebf2f5',
      color: '#ffffff',
      primaryColor: '#0089a5',
      primaryButton: '#15c3d6',
      primaryButtonHover: '#17d6eb',
      secondaryButton: '#ffd666',
      secondaryButtonHover: '#96feff',
    },
  },
};

type ThemeType = typeof theme;

export type { ThemeType };
export default theme;
