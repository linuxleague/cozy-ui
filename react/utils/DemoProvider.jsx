import React from 'react'

import { CozyProvider } from 'cozy-client'

import CozyTheme from '../providers/CozyTheme'
import { BreakpointsProvider } from '../providers/Breakpoints'
import { I18nContext } from '../providers/I18n'

const defaultClient = {
  plugins: {
    realtime: {
      subscribe: () => {},
      unsubscribe: () => {},
      unsubscribeAll: () => {}
    }
  },
  getStackClient: () => ({
    uri: 'https://cozy.io/'
  }),
  getInstanceOptions: () => ({
    subdomain: ''
  })
}

const DemoProvider = ({ client, children }) => {
  const lang = localStorage.getItem('lang') || 'en'

  return (
    <CozyProvider client={client || defaultClient}>
      <BreakpointsProvider>
        <I18nContext.Provider
          value={{
            t: x => x,
            f: () => '01 Jan. 2022',
            lang
          }}
        >
          <CozyTheme variant="normal">{children}</CozyTheme>
        </I18nContext.Provider>
      </BreakpointsProvider>
    </CozyProvider>
  )
}

export default DemoProvider
