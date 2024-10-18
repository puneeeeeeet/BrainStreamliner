const SIZES = {
    extraSmall:14,
    lessSmall:16,
    small: 20,
    medium: 24,
    large: 32,
  };
  
  const COLORS = {
    blue: "text-blue",
    
  };
  
  const Icon = ({ icon: IconComponent, size='small', color='blue', onClick, className }) => {
    const colorClass = `text-${color}`;
    return (
      // <IconComponent
      //   height={SIZES[size]}
      //   width={SIZES[size]}
      //   className={className}
      //   onClick={onClick}
      //   color={COLORS[color]}
      // ></IconComponent>
      <IconComponent
      height={SIZES[size]}
      width={SIZES[size]}
      className={`${colorClass} ${className}`}
      onClick={onClick}
    />
    );
  };
  export {Icon};