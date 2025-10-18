import { ReactNode } from "react";

type Props = {
    children: ReactNode
  }


const Nav = ({children}: Props) => {
  return (
    <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
      {children}
    </ul>
  );
};

export default Nav;
