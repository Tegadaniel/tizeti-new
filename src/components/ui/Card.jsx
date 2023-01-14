const Card = ({ className, children, ...rest }) => (
  <div className={`card ${className}`} {...rest}>
    {children}
  </div>
);

export default Card;
