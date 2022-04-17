import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import styled, { css } from "styled-components";

const PageHeader = styled(Header)`
  ${(props) =>
    props.fixed &&
    css`
      position: fixed;
    `}
`;

const DefaultLayout = ({ fixedHeader, children }) => {
  return (
    <div>
      <PageHeader fixed={fixedHeader} />
      {children}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
