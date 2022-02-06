const colors = require('tailwindcss/colors')

// Tweak to be able to pair opacity with colors when using CSS variables
// Check https://youtu.be/MAtaT8BZEAo?t=891
const withOpacityValue = (variableName) => {
  return ({ opacityValue }) => {
    return opacityValue !== undefined
      ? `rgba(var(${variableName}), ${opacityValue})`
      : `rgb(var(${variableName}))`
  }
}

module.exports = {
  /* Main */
  primary: withOpacityValue('--primary'),
  onPrimary: withOpacityValue('--onPrimary'),

  secondary: withOpacityValue('--secondary'),
  onSecondary: withOpacityValue('--onSecondary'),

  tertiary: withOpacityValue('--tertiary'),
  onTertiary: withOpacityValue('--onTertiary'),

  /* Background/surface */
  backgroundPrimary: withOpacityValue('--backgroundPrimary'),
  onBackgroundPrimary: withOpacityValue('--onBackgroundPrimary'),

  backgroundSecondary: withOpacityValue('--backgroundSecondary'),
  onBackgroundSecondary: withOpacityValue('--onBackgroundSecondary'),

  surfacePrimary: withOpacityValue('--surfacePrimary'),
  onSurfacePrimary: withOpacityValue('--onSurfacePrimary'),

  surfaceSecondary: withOpacityValue('--surfaceSecondary'),
  onSurfaceSecondary: withOpacityValue('--onSurfaceSecondary'),

  /* Semantic */
  success: withOpacityValue('--success'),
  onSuccess: withOpacityValue('--onSuccess'),

  error: withOpacityValue('--error'),
  onError: withOpacityValue('--onError'),

  warning: withOpacityValue('--warning'),
  onWarning: withOpacityValue('--onWarning'),

  notification: withOpacityValue('--notification'),
  onNotification: withOpacityValue('--onNotification'),

  /* Buttons */

  // Primary
  buttonPrimary: withOpacityValue('--buttonPrimary'),
  onButtonPrimary: withOpacityValue('--onButtonPrimary'),
  buttonPrimaryBorder: withOpacityValue('--buttonPrimaryBorder'),

  buttonPrimaryHover: withOpacityValue('--buttonPrimaryHover'),
  onButtonPrimaryHover: withOpacityValue('--onButtonPrimaryHover'),
  buttonPrimaryBorderHover: withOpacityValue('--buttonPrimaryBorderHover'),

  // Secondary
  buttonSecondary: withOpacityValue('--buttonSecondary'),
  onButtonSecondary: withOpacityValue('--onButtonSecondary'),
  buttonSecondaryBorder: withOpacityValue('--buttonSecondaryBorder'),

  buttonSecondaryHover: withOpacityValue('--buttonSecondaryHover'),
  onButtonSecondaryHover: withOpacityValue('--onButtonSecondaryHover'),
  buttonSecondaryBorderHover: withOpacityValue('--buttonSecondaryBorderHover'),

  // Tertiary
  buttonTertiary: withOpacityValue('--buttonTertiary'),
  onButtonTertiary: withOpacityValue('--onButtonTertiary'),
  buttonTertiaryBorder: withOpacityValue('--buttonTertiaryBorder'),

  buttonTertiaryHover: withOpacityValue('--buttonTertiaryHover'),
  onButtonTertiaryHover: withOpacityValue('--onButtonTertiaryHover'),
  buttonTertiaryBorderHover: withOpacityValue('--buttonTertiaryBorderHover'),

  // Quaternary
  buttonQuaternary: withOpacityValue('--buttonQuaternary'),
  onButtonQuaternary: withOpacityValue('--onButtonQuaternary'),
  buttonQuaternaryBorder: withOpacityValue('--buttonQuaternaryBorder'),

  buttonQuaternaryHover: withOpacityValue('--buttonQuaternaryHover'),
  onButtonQuaternaryHover: withOpacityValue('--onButtonQuaternaryHover'),
  buttonQuaternaryBorderHover: withOpacityValue(
    '--buttonQuaternaryBorderHover'
  ),

  // Extend for basic purposes (modal dark background...)
  gray: colors.gray,
}
