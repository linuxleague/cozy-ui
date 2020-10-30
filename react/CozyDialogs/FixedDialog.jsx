import React from 'react'
import cx from 'classnames'

import { useCozyDialog } from './useCozyDialog'
import Dialog, {
  DialogTitle,
  DialogActions,
  DialogContent
} from 'cozy-ui/transpiled/react/Dialog'
import { CardDivider } from 'cozy-ui/transpiled/react/MuiCozyTheme/Divider'

import dialogPropTypes from './dialogPropTypes'
import DialogTransition from './DialogTransition'
import DialogBackButton from './DialogBackButton'
import DialogCloseButton from './DialogCloseButton'

const FixedDialog = ({
  opened,
  onClose,
  title,
  content,
  actions,
  actionsLayout,
  size
}) => {
  const { cssSize, isFullscreen, id } = useCozyDialog(size)

  return (
    <Dialog
      open={opened}
      onClose={onClose}
      TransitionComponent={DialogTransition}
      TransitionProps={{ isFullscreen }}
      fullScreen={isFullscreen}
      classes={{ paper: cssSize }}
      aria-labelledby={`modal-title-${id}`}
    >
      {!isFullscreen && <DialogCloseButton onClick={onClose} />}
      <DialogTitle
        id={`modal-title-${id}`}
        disableTypography
        className="u-ellipsis"
      >
        {isFullscreen ? <DialogBackButton onClick={onClose} /> : null}
        {title}
      </DialogTitle>
      <CardDivider />
      <DialogContent>
        <div className="dialogContentInner">{content}</div>
      </DialogContent>
      <CardDivider />
      <DialogActions
        disableActionSpacing
        className={cx({ columnLayout: actionsLayout == 'column' })}
      >
        {actions}
      </DialogActions>
    </Dialog>
  )
}

FixedDialog.propTypes = dialogPropTypes

export default FixedDialog
