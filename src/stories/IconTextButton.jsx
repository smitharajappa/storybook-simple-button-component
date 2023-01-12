import React from 'react'
import PropTypes from 'prop-types';
import './button.css';
import {ReactComponent as Icon} from '../stories/assets/bookmark.svg'

/**
 * Button component with Icon and text
 */

const IconTextButton = (props) => {
    const {
        label,
        isDisabled,
        isHovered,
        color, 
        onClick,
    } = props;

    const variant = color;
    const disabled = (isDisabled && `button_disabled_${variant}`) ? `button_disabled_${variant}` : ''
    const hovered = (isHovered && `button_hovered_${variant}`) ? `button_hovered_${variant}` : '';

  return (
    <button
     onClick={onClick}
     className={[
        'button',
        `button_${variant}`,
        `${disabled}`,
        `${hovered}`,
     ].join(' ')}
     disabled={isDisabled}
     {...props}
    >
      <span className="icon"><Icon/></span>{label}</button>
  )
}

IconTextButton.protoTypes = {
     /**
   * Button contents
   */
      label: PropTypes.string.isRequired,
      /**
    * What background color to use
    */
     color: PropTypes.oneOf('primary', 'secondary'),
       /**
    * Disabled state of button
    */
     isDisabled: PropTypes.bool,
       /**
    * Hovered state of button
    */
     isHovered: PropTypes.bool,
       /**
    * Optional function click
    */
     onClick: PropTypes.func
}

IconTextButton.defaultProps = {
    onClick: undefined
}

export default IconTextButton;