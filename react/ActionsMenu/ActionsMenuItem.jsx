import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import omit from 'lodash/omit'

import MenuItem from '../MenuItem'
import ListItem from '../ListItem'

const cleanPropsForDOM = props => {
  const nonDOMProps = ['doc']

  return omit(props, nonDOMProps)
}

const ActionsMenuItem = forwardRef(({ isListItem, ...props }, ref) => {
  const Component = isListItem ? ListItem : MenuItem
  const compProps = cleanPropsForDOM(props)

  return <Component {...compProps} ref={ref} button ellipsis={false} />
})

ActionsMenuItem.displayName = 'ActionsMenuItem'

ActionsMenuItem.propTypes = {
  /** Whether the ActionsMenuItem will return a ListItem or MenuItem */
  isListItem: PropTypes.bool
}

export default ActionsMenuItem
