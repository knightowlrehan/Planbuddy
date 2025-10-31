const Button = ({ 
  children, 
  text,
  variant = 'primary', 
  className = '', 
  ...props 
}) => {
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    download: 'px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-white font-bold rounded-lg transition-colors duration-200 text-lg shadow-lg',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 font-semibold px-6 py-3 rounded-lg transition-all duration-300'
  }
  
  return (
    <button 
      className={`${variants[variant]} ${className}`}
      {...props}
    >
      {text || children}
    </button>
  )
}

export default Button