import React from 'react';
import { useRouter } from 'next/router';
import { IBasicMouseEvent } from '../../utils/props/mouseEvent';

interface ILinkProps {
  children?: React.ReactNode;
  to: string;
  className: string;
}

const Link: React.FC<ILinkProps> = ({ children, to, className }) => {
  const { push } = useRouter();

  const handleClick = (event: IBasicMouseEvent) => {
    event.preventDefault();
    push(to);
  };

  return (
    <a href="#" onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export default Link;
