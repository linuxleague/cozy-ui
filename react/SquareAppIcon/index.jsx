import React, { useEffect, useState } from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import get from 'lodash/get'

import AppIcon from '../AppIcon'
import Badge from '../Badge'
import Icon from '../Icon'
import IconCheckAnimated from '../Icons/IconCheckAnimated'
import InfosBadge from '../InfosBadge'
import Spinner from '../Spinner'
import SvgIconCrossAnimated from '../Icons/IconCrossAnimated'
import Typography from '../Typography'
import iconOut from '../Icons/LinkOut'
import iconPlus from '../Icons/Plus'
import iconWarning from '../Icons/WarningCircle'
import { alpha, makeStyles } from '../styles'
import { nameToColor } from '../Avatar'
import CozyTheme, { useCozyTheme } from '../providers/CozyTheme'

import styles from './styles.styl'

const useStyles = makeStyles(theme => ({
  name: {
    color: 'var(--primaryTextColor)',
    width: '5.5rem',
    textAlign: 'center',
    fontSize: '0.875rem',
    lineHeight: '1.188rem',
    margin: '0.5rem 0.25rem 0 0.25rem',
    lineClamp: '2',
    boxOrient: 'vertical',
    display: '-webkit-box',
    height: '2.375rem',
    [theme.breakpoints.down('sm')]: {
      width: '3.75rem',
      fontSize: '0.6875rem',
      lineHeight: '1rem',
      margin: '0.25rem 0.25rem 0 0.25rem',
      height: '2rem'
    }
  },
  nameInverted: {
    textShadow: theme.textShadows[1]
  },
  squareAppIconGhost: {
    backgroundColor: alpha(
      theme.palette.primary.main,
      theme.palette.action.ghostOpacity
    ),
    border: `1px dashed ${alpha(
      theme.palette.primary.main,
      theme.palette.border.ghostOpacity
    )}`
  },
  letter: {
    color: 'white',
    margin: 'auto'
  },
  shadow: {
    boxShadow: theme.shadows[1]
  },
  errorIcon: {
    fill: 'var(--errorColor)',
    backgroundColor: 'var(--primaryContrastTextColor)',
    borderRadius: '1rem'
  },
  tileWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '6rem',
    [theme.breakpoints.down('sm')]: {
      width: '4.25rem'
    }
  }
}))

const shouldRenderSpinner = (variant, animationState) => {
  return ['loading'].includes(variant) || animationState
}

const SquareAppIconSpinner = ({ variant, animationState }) => {
  if (!shouldRenderSpinner(variant, animationState)) {
    return null
  }

  return <Spinner className={cx(styles['SquareAppIcon-spinner'], 'u-m-0')} />
}

export const SquareAppIcon = ({
  name,
  variant,
  IconContent,
  ...appIconProps
}) => {
  const theme = useCozyTheme()
  const classes = useStyles()
  const appName =
    name || get(appIconProps, 'app.name') || get(appIconProps, 'app') || ''
  const letter = appName[0] || ''
  const prevVariant = React.useRef(variant)
  const [animationState, setAnimationState] = useState()

  const handleAnimationEnd = e => {
    if (e.animationName.includes('end')) setAnimationState()
  }

  useEffect(() => {
    const curr = prevVariant.current

    if (curr === 'loading' && variant === 'error') setAnimationState('failed')

    if (curr === 'loading' && (variant === 'default' || variant === undefined))
      setAnimationState('success')

    prevVariant.current = variant
  }, [variant])

  const squareTheme = ['add', 'ghost'].includes(variant) ? theme : 'normal'

  return (
    <div data-testid="square-app-icon" className={cx(classes.tileWrapper)}>
      <CozyTheme variant={squareTheme}>
        <InfosBadge
          badgeContent={
            variant === 'shortcut' ? <Icon size="10" icon={iconOut} /> : null
          }
          overlap="rectangular"
          invisible={variant !== 'shortcut'}
        >
          <SquareAppIconSpinner
            variant={variant}
            animationState={animationState}
          />
          <Badge
            className={cx(
              styles['SquareAppIcon-wrapper'],
              styles[`SquareAppIcon-wrapper-${variant}`],
              {
                [classes.squareAppIconGhost]: ['ghost', 'add'].includes(
                  variant
                ),
                [classes.shadow]: !['add', 'ghost'].includes(variant)
              }
            )}
            badgeContent={
              variant === 'error' ? (
                <Icon
                  size="16"
                  className={cx(classes.errorIcon)}
                  icon={iconWarning}
                />
              ) : (
                ''
              )
            }
            color={variant === 'error' ? 'error' : undefined}
            withBorder={false}
            size="large"
            overlap="rectangular"
            style={
              variant === 'shortcut' && !IconContent
                ? { backgroundColor: nameToColor(name) }
                : null
            }
          >
            {variant === 'shortcut' && !IconContent ? (
              <Typography
                className={classes.letter}
                variant="h2"
                align="center"
              >
                {letter.toUpperCase()}
              </Typography>
            ) : (
              <div
                className={cx(styles['SquareAppIcon-icon-container'], {
                  [styles['SquareAppIcon-icon-container-normal']]:
                    theme === 'normal'
                })}
              >
                <div
                  className={cx(
                    styles['onEnd'],
                    { [styles['isSuccess']]: animationState === 'success' },
                    { [styles['isFailed']]: animationState === 'failed' }
                  )}
                  onAnimationEnd={handleAnimationEnd}
                >
                  {animationState && (
                    <Icon
                      size="32"
                      icon={
                        animationState === 'success'
                          ? IconCheckAnimated
                          : SvgIconCrossAnimated
                      }
                    />
                  )}
                </div>

                {variant === 'add' ? (
                  <Icon icon={iconPlus} color="var(--primaryColor)" />
                ) : IconContent ? (
                  IconContent
                ) : (
                  <AppIcon {...appIconProps} />
                )}
              </div>
            )}
          </Badge>
        </InfosBadge>
      </CozyTheme>
      <Typography
        className={cx(
          classes.name,
          { [classes.nameInverted]: theme === 'inverted' },
          'u-spacellipsis'
        )}
        variant="h6"
        align="center"
      >
        {appName}
      </Typography>
    </div>
  )
}

SquareAppIcon.propTypes = {
  name: PropTypes.string,
  variant: PropTypes.oneOf([
    'default',
    'loading',
    'ghost',
    'maintenance',
    'error',
    'add',
    'shortcut'
  ]),
  IconContent: PropTypes.node
}

SquareAppIcon.defaultProps = {
  variant: 'default'
}

export default SquareAppIcon
