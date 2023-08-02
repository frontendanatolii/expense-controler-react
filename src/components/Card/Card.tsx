import { ReactNode } from "react";
import './Card.css';

interface Props {
  children?: ReactNode,
  className?: string,
}

const Card: React.FC<Props> = ({ children, className }) => {
  const classes = 'card ' + className;
 
  return (
    <div className={classes}>{children}</div>
  )
};

export default Card;