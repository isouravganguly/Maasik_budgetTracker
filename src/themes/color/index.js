const White = '#ffffff';
const offWhite = '#EDEDED';
const Blue = '#48BEFF';
const Bluish = '#3DFAFF';
const Green = '#43C59E';
const GrayGreen = '#3D7068';
const darkGreen = '#14453D';
const Black = '#000';
const liteBlack = '#2B2B2B';

const comman = {
  Primary: Blue,
  Secondary: Bluish,
  Tertiary: Green,
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
