const Button = ({
  children,
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  startIcon,
  endIcon,
  fullWidth,
  disabled = false,
  className,
  ...rest
}) => {
  const isDisabled = disabled ? 'disabled' : '';
  const fullWidthClass = fullWidth ? 'w-full' : '';

  const classes = [
    'button',
    isDisabled,
    variant,
    size,
    color,
    fullWidthClass,
    className,
  ].join(' ');

  let content = (
    <>
      {startIcon && <span className="mr-2">{startIcon}</span>}
      {children}
      {endIcon && <span className="ml-2">{endIcon}</span>}
    </>
  );

  return (
    <button {...rest} disabled={disabled} className={classes}>
      {content}
    </button>
  );
};
export default Button;
