import React from "react";

// Components
import Header from "../Header";
import PageTabs from "../PageTabs";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <Header />
      <PageTabs />
      {children}
    </>
  );
}

export default Layout;
