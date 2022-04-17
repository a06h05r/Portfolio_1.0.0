import React from "react";
import styled from "styled-components";
import DefaultLayout from "../../Component/layout/DefaultLayout";
import WorkTimeLine from "./JobTimeLine";

const ClearFix = styled.div`
  height: 86px;
`;

const HomePage = () => {
  return (
    <DefaultLayout fixedHeader>
      <ClearFix />
      <WorkTimeLine />
    </DefaultLayout>
  );
};

export default HomePage;
