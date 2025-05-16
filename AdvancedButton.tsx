

// import React from 'react';


//  type ButtonProps = {
//   label: string; // label is a string that will be displayed on the button.
//    size?: 'small' | 'medium' | 'large';  // property represents the button's size,
//    type?: 'primary' | 'secondary' | 'tertiary'; // // property represents the button's type,
//    state?: 'default' | 'disabled' | 'pressed' | 'hover';  //property represents the button's current state,
//                                                          // such as 'default', 'disabled', 'pressed', or 'hover', 
//                                                          //which can be used to adjust its appearance or behavior.
//    destructive?: 'yes' | 'no';  // indicates whether the button performs 
//                                 //  a destructive action, such as deleting data, 
//                                 // and accepts either 'yes' or 'no'. 
//    buttonText: string;
//    showLeftIcon?: boolean;  //properties determine whether icons should be displayed 
//    showRightIcon?: boolean; //on the left or right side of the button
//    leftIcon?: React.ReactNode;  //leftIcon and rightIcon are optional React nodes that can be passed in as props
//    rightIcon?: React.ReactNode;  // to customize the button's appearance.
//    onClick?: () => void;
//  };

// const sizeStyles = {             //These classes control the button's text size and padding.
//   small: 'text-sm py-2 px-4 rounded-md',
//   medium: 'text-base py-3 px-6 rounded-lg',
//   large: 'text-lg py-4 px-8 rounded-xl',
// };

// const typeStyles = {
//   primary: 'font-bold',   // Makes the button text bold for the "primary" type
//   secondary: 'font-medium border border-red-300', // Medium font weight and a red border for the "secondary" type
//   tertiary: 'text-red-500', // Red text color for the "tertiary" type
// };

// const stateStyles = {
//   default: '',
//   disabled: 'opacity-50 cursor-not-allowed',  // Makes the button semi-transparent and changes the cursor to indicate it's not clickable
//   pressed: 'bg-opacity-80',      // Makes the button background slightly transparent when pressed
//  hover: 'hover:bg-opacity-80 hover:brightness-110',      // Adds a medium shadow when the mouse hovers over the button
// };

// const colorStyles = {
//   yes:'bg-red-600 text-white',  // For destructive actions (like delete): red background, white text
//   no: 'bg-blue-600 text-white' // For normal actions: blue background, white text
// };

// const iconColorStyles = {
//   yes: 'bg-red-600',// For destructive actions (like delete): red background for the icon
//   no: 'bg-blue-600',   // For normal actions: blue background for the icon
// };

// export const AdvancedButton: React.FC<ButtonProps> = ({
//   label,     //Exports the component so it can be used in other files.
//   size = 'medium',
//   type = 'primary',
//   state = 'default',
//   destructive = 'no',
//   buttonText,
//   showLeftIcon = false,
//   showRightIcon = false,
//   leftIcon,
//   rightIcon,
//   onClick,
// }) => {
//   // const isDisabled = state === 'disabled';  // Checks if the button should be disabled based on the state prop.
//   // const iconColor = iconColorStyles[destructive]; //Picks the icon color style based on whether the button is for a destructive action ('yes' or 'no').

//   const getButtonClasses = (): string => {
//     const baseClasses = `px-4 py-2 rounded-md transition-colors`;
//     let typeClasses = '';
    
//     switch (type) {
//       case 'primary':
//         typeClasses = 'bg-purple-500 text-white hover:bg-purple-600';
//         break;
//       case 'secondary':
//         typeClasses = 'bg-white text-purple-500 border border-purple-500 hover:bg-purple-100';
//         break;
//       case 'tertiary':
//         typeClasses = 'text-purple-500 hover:bg-purple-100';
//         break;
//     }

//     switch (size) {
//       case 'small':
//         typeClasses += ' text-sm px-3 py-1.5';
//         break;
//       case 'medium':
//         typeClasses += ' text-base';
//         break;
//       case 'large':
//         typeClasses += ' text-lg px-5 py-2.5';
//         break;
//     }
//     return `${baseClasses} ${typeClasses}`;
//   };

//   return (
//     <button
//       className={getButtonClasses()}
//       disabled={state === 'disabled'}
//       onClick={onClick}
//     >
//       {showLeftIcon && leftIcon && (
//         <span className="mr-2">{leftIcon}</span>
//       )}
//       {buttonText}
//       {showRightIcon && rightIcon && (
//         <span className="ml-2">{rightIcon}</span>
//       )}
//     </button>
//   );
// };

import React from 'react';
import styles from './AdvancedButton.module.css';

interface AdvancedButtonProps {
  text: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

export const AdvancedButton: React.FC<AdvancedButtonProps> = ({
  text,
  variant = 'primary',
  size = 'md',
  onClick,
}) => {
  return (
    <button className={styles.buttonContainer} onClick={onClick}>
      <span className={styles.sideIcon}>
        <span className={styles.iconBackground}></span>
      </span>
      <span className={styles.textLabel}>{text}</span>
      <span className={styles.sideIcon}>
        <span className={styles.iconBackground}></span>
      </span>
    </button>
  );
};
