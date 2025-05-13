import { ReactNode } from "react";
import { Metadata } from "next";

interface LayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Real Estate | Chartered Management",
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <main className="h-[100%] bg-gradient-layout ">{children}</main>;
};

export default Layout;
