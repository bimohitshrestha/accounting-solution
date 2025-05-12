import { ReactNode } from "react";
import { Metadata } from "next";

interface LayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Contact | Chartered Management ",
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <main className="h-[100%] ">{children}</main>;
};

export default Layout;
