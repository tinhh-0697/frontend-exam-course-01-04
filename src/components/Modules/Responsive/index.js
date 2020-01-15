const size = {
  // mobileS: '320px',
  // mobileM: '375px',
  // mobileL: '425px',
  tablet: '890px',
  laptop: '1050px',
  laptopL: '1380px',
  desktop: '2560px'
};

export const device = {
  // mobileS: `(max-width: ${size.mobileS})`,
  // mobileM: `(max-width: ${size.mobileM})`,
  // mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  tablet_mobile_first: `(min-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`
  // desktopL: `(max-width: ${size.desktop})`
};
