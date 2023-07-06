import React, { forwardRef } from 'react'
import createDepreciationLogger from '../helpers/createDepreciationLogger'

const logDeprecatedComponent = createDepreciationLogger()

export const deprecateComponent = WrappedComponent => {
  const Wrapper = forwardRef((props, ref) => {
    logDeprecatedComponent(
      `"${WrappedComponent.displayName ||
        WrappedComponent.name}" is now exported elsewhere. Please change the import path to "cozy-ui/transpiled/react/providers"`
    )

    return <WrappedComponent ref={ref} {...props} />
  })

  Wrapper.displayName = `deprecate(${WrappedComponent.displayName ||
    WrappedComponent.name})`

  return Wrapper
}

export const deprecateFunction = fn => {
  logDeprecatedComponent(
    `"${fn.name}" is now exported elsewhere. Please change the import path to "cozy-ui/transpiled/react/providers"`
  )

  return fn
}
