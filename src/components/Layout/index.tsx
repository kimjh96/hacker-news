import React from "react";

// Components
import Header from "../Header";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default Layout;
