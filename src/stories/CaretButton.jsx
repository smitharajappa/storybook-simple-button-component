import React from 'react'
import PropTypes from 'prop-types';
import './button.css';

/**
 * Button component with caret
 */
export const CaretButton = ({label,
  isDisabled,
  isHovered,
  color, 
  onClick,
  caretDirection, ...props}) => {
    
    const disabled = (isDisabled && `button_disabled_${color}`) ? `button_disabled_${color}` : '';
    const hovered = (isHovered && `button_hovered_${color}`) ? `button_hovered_${color}` : '';

  return (
    <button
     onClick={onClick}
     className={[
        'button',
        `button_${color}`,
        `${disabled}`,
        `${hovered}`,
     ].join(' ')}
     disabled={isDisabled}
     {...props}
    >{label}<span className={['caret',`${caretDirection}`].join(' ')}>{">"}</span></button>
  );
};

CaretButton.protoTypes = {
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
     onClick: PropTypes.func,
    /**
    * caretDirection
    */
    caretDirection: PropTypes.oneOf('left', 'right','up', 'down'),
};