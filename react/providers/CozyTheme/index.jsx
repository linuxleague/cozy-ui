import React, { createContext, useContext } from 'react'
import cx from 'classnames'

import MuiCozyTheme from '../../MuiCozyTheme'

export const CozyThemeContext = createContext()

export const useCozyTheme = () => {
  const context = useContext(CozyThemeContext)

  if (!context) {
    throw new Error(
      '`CozyThemeContext` is missing. `useCozyTheme()` must be used within a `<CozyTheme>`'
    )
  }

  return context
}

const CozyTheme = ({ variant, children, className }) => (
  <CozyThemeContext.Provider value={variant}>
    <MuiCozyTheme variant={variant}>
      <div
        className={cx(className, {
          [`CozyTheme--${variant}`]: Boolean(variant)
        })}
      >
        {children}
      </div>
    </MuiCozyTheme>
  </CozyThemeContext.Provider>
)

export default CozyTheme
