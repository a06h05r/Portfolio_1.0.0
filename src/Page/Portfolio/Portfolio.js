import React from "react";
import { Link } from "react-router-dom";
import DefaultLayout from "../../Component/layout/DefaultLayout";
import Container from "../../Component/common/Container";
import { StyledLabel, Label } from "./PortfolioStyle";

const Portfolio = () => {
  return (
    <DefaultLayout>
      <StyledLabel>
        <div className="labelbox">
          <Label>
            <Link to="#">全部</Link>
          </Label>
          <Label>
            <Link to="#">網頁設計</Link>
          </Label>
          <Label>
            <Link to="#">攝影</Link>
          </Label>
          <Label>
            <Link to="#">插畫</Link>
          </Label>
        </div>
      </StyledLabel>
      <Container>123</Container>
    </DefaultLayout>
  );
};

export default Portfolio;
