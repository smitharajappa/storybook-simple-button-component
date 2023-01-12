import React from 'react'
import PropTypes from 'prop-types';
import './button.css';

/**
 * Button component
 */

const Button = (props) => {
    const {
        label,
        isDisabled,
        isHovered,
        color, 
        onClick,
    } = props;

    const variant = color
    const disabled = (isDisabled && `button_disabled_${variant}`) ? `button_disabled_${variant}` : ''
    const hovered = (isHovered && `button_hovered_${variant}`) ? `button_hovered_${variant}` : ''

  return (
    <button
    type='button'
     onClick={onClick}
     className={[
        'button',
        `button_${variant}`,
        `${disabled}`,
        `${hovered}`,
     ].join(' ')}
     disabled={isDisabled}
     {...props}
    >{label}</button>
  )
}

Button.protoTypes = {
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

Button.defaultProps = {
    isDisabled: false
}

export default Button;