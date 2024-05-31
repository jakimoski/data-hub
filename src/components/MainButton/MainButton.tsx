import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  logo?: string;
  variant?: string;
  handler?: React.MouseEventHandler<HTMLButtonElement>;
  alt?: string;
  rightLogo?: string;
}

const MainButton = ({
  handler,
  logo,
  alt,
  rightLogo,
  variant,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <button onClick={handler} className={`btn ${variant}`} {...rest}>
      {logo && <img className="btn__logo" src={logo} alt={alt as string} />}
      <span className="btn__children">{children}</span>
      {rightLogo && (
        <img className="btn__logo--right" src={rightLogo} alt={alt as string} />
      )}
    </button>
  );
};

export default MainButton;
