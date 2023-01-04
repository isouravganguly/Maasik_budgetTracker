const White = '#ffffff';
const offWhite = '#F8F8F8';
const primary = '#57BD83';
const secondary = '#388D5B';
const textGreen = '#008037';
const Black = '#0f0f0f';
const liteBlack = '#151515';

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
  Background: liteBlack,
  secondaryBackground: Black,
  TextColor: White,
  SecondaryTextColor: offWhite,
};

export const colors = {light, dark};
