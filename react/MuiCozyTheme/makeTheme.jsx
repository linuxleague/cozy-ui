import { createTheme } from '../styles'
import { getCssVariableValue } from '../utils/color'
import isTesting from '../helpers/isTesting'
import { makePalette } from './makePalette'
import { makeTypography } from './makeTypography'
import { makeShadows } from './makeShadows'
import { makeOverrides } from './makeOverrides'
import { makeInvertedOverrides } from './makeInvertedOverrides'

const themesCommonConfig = {
  shape: {
    borderRadius: 6
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 1023,
      xl: 1200
    }
  },
  zIndex: {
    modal: getCssVariableValue('zIndex-modal')
  },
  textShadows: [
    'none',
    '0px 2px 8px rgba(29, 33, 42, 0.16), 0px 0px 1px rgba(29, 33, 42, 0.48)'
  ],
  shadows: makeShadows(), // Shadow ar not linked to themes
  ...(isTesting() && { transitions: { create: () => 'none' } })
}

export const makeTheme = type => {
  const palette = makePalette(type)
  const theme = createTheme({
    ...themesCommonConfig,
    typography: makeTypography(palette),
    palette
  })
  const overrides =
    theme.palette.type === 'dark'
      ? makeInvertedOverrides(theme)
      : makeOverrides(theme)

  return {
    ...theme,
    overrides
  }
}
