import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Overlay from '../Overlay'
import migrateProps from '../helpers/migrateProps'
import Portal from '../Portal'
import uniqueId from 'lodash/uniqueId'
import styles from './styles.styl'
import ModalContent from './ModalContent'
import ModalSection from './ModalSection'
import { ModalHeader, ModalBrandedHeader } from './ModalHeader'
import ModalCross from './ModalCross'
import ModalFooter from './ModalFooter'
import ModalButtons from './ModalButtons'
import AnimatedContentHeader from './AnimatedContentHeader'
import ModalBackButton from './ModalBackButton'

const ModalDescription = ModalContent

const ModalTitle = props => {
  console.log('ModalTitle is a deprecated component, use ModalHeader instead')
  return <ModalHeader {...props} />
}

class Modal extends Component {
  constructor(props) {
    super(props)
    this.titleID = uniqueId('modal_')
  }

  handleOutsideClick = e => {
    if (e.target === e.currentTarget) this.props.dismissAction()
  }

  componentDidMount() {
    if (!this.props.title) {
      console.warn(
        'If your modal has not label you should add an invisible one with `aria-label` props for a11y purposes.'
      )
    }
    document.body.classList.add('has-modal')
  }

  componentWillUnmount() {
    document.body.classList.remove('has-modal')
  }

  render() {
    const {
      children,
      description,
      title,
      closable,
      dismissAction,
      overflowHidden,
      className,
      closeBtnClassName,
      closeBtnColor,
      into,
      size,
      height,
      width,
      spacing,
      mobileFullscreen,
      overlayClassName,
      wrapperClassName,
      primaryText,
      primaryAction,
      primaryType,
      secondaryText,
      secondaryAction,
      secondaryType,
      containerClassName,
      ...restProps
    } = this.props
    const { titleID } = this
    const style = Object.assign({}, height && { height }, width && { width })
    return (
      <Portal into={into}>
        <div className={cx(styles['c-modal-container'], containerClassName)}>
          <Overlay
            onEscape={closable ? dismissAction : undefined}
            className={overlayClassName}
          >
            <div
              className={cx(
                styles['c-modal-wrapper'],
                {
                  [styles['c-modal-wrapper--fullscreen']]: mobileFullscreen
                },
                wrapperClassName
              )}
              onClick={closable ? this.handleOutsideClick : undefined}
            >
              <div
                className={cx(
                  styles['c-modal'],
                  styles[`c-modal--${size}`],
                  {
                    [styles['c-modal--overflowHidden']]: overflowHidden,
                    [styles[`c-modal--${spacing}-spacing`]]: spacing,
                    [styles['c-modal--fullscreen']]: mobileFullscreen,
                    [styles['c-modal--closable']]: closable
                  },
                  className
                )}
                style={style}
                role="dialog"
                aria-modal="true"
                aria-labelledby={title ? titleID : null}
                {...restProps}
              >
                {closable && (
                  <ModalCross
                    className={cx(closeBtnClassName, {
                      [styles['c-modal-close--notitle']]: !title
                    })}
                    onClick={dismissAction}
                    color={closeBtnColor}
                  />
                )}
                {title && <ModalHeader title={title} id={titleID} />}
                {description && (
                  <ModalDescription>{description}</ModalDescription>
                )}
                {children}
                {(primaryText && primaryAction) ||
                (secondaryText && secondaryAction) ? (
                  <ModalFooter>
                    <ModalButtons
                      primaryText={primaryText}
                      primaryAction={primaryAction}
                      primaryType={primaryType}
                      secondaryText={secondaryText}
                      secondaryAction={secondaryAction}
                      secondaryType={secondaryType}
                    />
                  </ModalFooter>
                ) : null}
              </div>
            </div>
          </Overlay>
        </div>
      </Portal>
    )
  }
}

Modal.propTypes = {
  /** Modal title */
  title: PropTypes.node,
  /** Content for simple modals */
  description: PropTypes.node,
  /** Secondary button type */
  secondaryType: PropTypes.string,
  /** Secondary button text */
  secondaryText: PropTypes.string,
  /** Secondary button callback */
  secondaryAction: PropTypes.func,
  /** Primary button type */
  primaryType: PropTypes.string,
  /** Primary button text */
  primaryText: PropTypes.string,
  /** Primary button callback */
  primaryAction: PropTypes.func,
  /** Display the cross and enable click outside and escape key to close */
  closable: PropTypes.bool,
  /** Use overflowHidden when your content may overflow of your modal */
  overflowHidden: PropTypes.bool,
  /** `className` used on the modal, useful if you want to custom its CSS */
  className: PropTypes.string,
  /** `className` used on the cross, useful if you want to custom its CSS */
  closeBtnClassName: PropTypes.string,
  /** `closeBtnColor` to overwrite the default color of the cross button */
  closeBtnColor: PropTypes.string,
  /** If has a value, the modal will be rendered inside a portal and its value will be passed to Portal
   to control the rendering destination of the Modal */
  into: PropTypes.string,
  size: PropTypes.oneOf([
    'xsmall',
    'small',
    'medium',
    'large',
    'xlarge',
    'xxlarge'
  ]),
  height: PropTypes.string,
  width: PropTypes.string,
  spacing: PropTypes.oneOf(['small', 'large']),
  /** If you want your modal taking all the screen on mobile */
  mobileFullscreen: PropTypes.bool,
  /** className to apply to Overlay component */
  overlayClassName: PropTypes.string,
  /** className to apply to wrapper element */
  wrapperClassName: PropTypes.string,
  /** className to apply to the container element */
  containerClassName: PropTypes.string
}

Modal.defaultProps = {
  primaryType: 'regular',
  secondaryType: 'secondary',
  closable: true,
  overflowHidden: false,
  size: 'small',
  into: 'body',
  mobileFullscreen: false
}

ModalBrandedHeader.propTypes = {
  /** `bg` can be any type of color Hexa, RGB(A), HSL(A), gradient… anything that CSS allows for a color really */
  bg: PropTypes.string.isRequired,
  /** `logo` should be a path to any type of image file supported by browsers */
  logo: PropTypes.string.isRequired
}

ModalHeader.propTypes = {
  appIcon: PropTypes.string,
  appEditor: PropTypes.string,
  appName: PropTypes.string
}

ModalContent.propTypes = {
  iconSrc: PropTypes.node,
  iconDest: PropTypes.node,
  fixed: PropTypes.bool
}

const EnhancedModal = migrateProps([
  { src: 'withCross', dest: 'closable' }, // withCross -> closable
  { src: 'crossClassName', dest: 'closeBtnClassName' }, // crossClassName -> closeBtnClassName
  { src: 'crossColor', dest: 'closeBtnColor' }, // crossColor -> closeBtnColor
  {
    fn: props => {
      let newProps
      if (props.secondaryAction && !props.dismissAction) {
        newProps = { ...props }
        newProps.dismissAction = props.secondaryAction
        const msg =
          'In the future, `secondaryAction` will not be bound to closing actions (clicking on cross, clicking outside), please use `dismissAction` for that'
        return [newProps, msg]
      } else {
        return [props, null]
      }
    }
  }
])(Modal)

EnhancedModal.propTypes = Modal.propTypes
EnhancedModal.defaultProps = Modal.defaultProps

// to be able to use them in Styleguidist
Object.assign(EnhancedModal, {
  ModalContent,
  ModalSection,
  ModalFooter,
  ModalHeader,
  AnimatedContentHeader,
  ModalBrandedHeader,
  ModalDescription,
  ModalBackButton
})

export default EnhancedModal

export {
  ModalContent,
  ModalSection,
  ModalFooter,
  ModalHeader,
  AnimatedContentHeader,
  ModalTitle,
  ModalButtons,
  ModalBrandedHeader,
  ModalDescription,
  ModalBackButton
}
