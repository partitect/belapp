import color from 'color';



const DefaultTheme = {
  dark: false,
  roundness: 4,
  colors: {
    primary: '#ED1C24',
    accent: '#00A651',
    background: '#f6f6f6',
    surface: '#fff',
    error: '#B00020',
    text: '#000',
    onBackground: '#000000',
    onSurface: '#000000',
    disabled: color('#000')
      .alpha(0.26)
      .rgb()
      .string(),
    placeholder: color('#000')
      .alpha(0.54)
      .rgb()
      .string(),
    backdrop: color('#000')
      .alpha(0.5)
      .rgb()
      .string(),
    notification: '#f0c',
  },
  animation: {
    scale: 1.0,
  },
};

export default DefaultTheme;