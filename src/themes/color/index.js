const White = '#ffffff';
const offWhite = '#F8F8F8';
const primary = '#57BD83';
const secondary = '#388D5B';
const textGreen = '#008037'
const Black = '#000';
const liteBlack = '#545454';

const comman = {
  Primary: primary,
  Secondary: secondary,
  highlightText: textGreen,
};

const light = {
  ...comman,
  Background: White,
  secondaryBackground: offWhite,
  TextColor: Black,
  SecondaryTextColor: liteBlack,
  
};

const dark = {
  ...comman,
  background: Black,
  secondaryBackground: liteBlack,
  TextColor: White,
  SecondaryTextColor: offWhite,
};

export const colors = {light, dark};
