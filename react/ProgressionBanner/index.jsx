import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import Banner from '../Banner'
import { LinearProgress } from '../Progress'
import { paleGrey } from '../palette'
import Typography from '../Typography'

const progressHeight = '0.125rem'

const styles = {
  progress: {
    backgroundColor: 'transparent',
    height: progressHeight,
    marginTop: `-${progressHeight}`
  }
}

const ProgressionBanner = withStyles(styles)(
  ({ classes, value, text, icon, button, progressBar }) => {
    const variant = value ? 'determinate' : undefined

    return (
      <>
        <Banner
          bgcolor={paleGrey}
          icon={icon}
          text={<Typography variant="h6">{text}</Typography>}
          buttonOne={button}
          inline
        />
        {progressBar && (
          <LinearProgress
            className={classes.progress}
            variant={variant}
            value={value}
          />
        )}
      </>
    )
  }
)

ProgressionBanner.propTypes = {
  /** Percentage of progression, should be between 0 and 100 */
  value: PropTypes.number,
  /** Text to be shown in the banner */
  text: PropTypes.string,
  /** Icon to be shown in the banner */
  icon: PropTypes.node,
  /** Button to use in the banner */
  button: PropTypes.node,
  /** Progression bar is hidden if set to false (defaults to true) */
  progressBar: PropTypes.bool
}

ProgressionBanner.defaultProps = {
  progressBar: true
}

export default ProgressionBanner
