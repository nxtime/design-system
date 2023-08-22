import { ReactNode } from "react";

interface IHeaderProps {
  logo: ReactNode;
  items?: ReactNode;
}

const Header = ({ logo, items }: IHeaderProps) => {
  return (
    <header className="header">
      {logo}
      {items}
    </header>
  );
};

export default Header;
