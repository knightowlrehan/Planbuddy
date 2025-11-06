import styles from './Button.module.css';

const Button = ({ 
  children, 
  text,
  variant = 'primary', 
  className = '', 
  ...props 
}) => {
  const getVariantClass = () => {
    switch (variant) {
      case 'primary':
        return styles.primary;
      case 'secondary':
        return styles.secondary;
      case 'download':
        return styles.download;
      case 'outline':
        return styles.outline;
      default:
        return styles.primary;
    }
  };
  
  return (
    <button 
      className={`${styles.button} ${getVariantClass()} ${className}`}
      {...props}
    >
      {text || children}
    </button>
  )
}

export default Button