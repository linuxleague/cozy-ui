import React from 'react'
import cx from 'classnames'

import { useCozyDialog } from './useCozyDialog'
import MUIDialog, {
  DialogTitle,
  DialogActions,
  DialogContent
} from 'cozy-ui/transpiled/react/Dialog'
import { CardDivider } from 'cozy-ui/transpiled/react/MuiCozyTheme/Divider'

import dialogPropTypes from './dialogPropTypes'
import DialogBackButton from './DialogBackButton'
import DialogCloseButton from './DialogCloseButton'
import DialogTransition from './DialogTransition'

const Dialog = ({
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
    <MUIDialog
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
        <div className="dialogContentInner withFluidActions">
          {content}
          <DialogActions
            disableActionSpacing
            className={cx('dialogActionsFluid', {
              columnLayout: actionsLayout == 'column'
            })}
          >
            {actions}
          </DialogActions>
        </div>
      </DialogContent>
    </MUIDialog>
  )
}

Dialog.propTypes = dialogPropTypes

export default Dialog
