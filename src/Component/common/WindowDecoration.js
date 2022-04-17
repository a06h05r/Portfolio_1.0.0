import React from "react";
import styled from "styled-components";

const WindowBG = styled.div`
  background-color: #2c2c2c;
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  color: #ffffff;

  .title {
    margin-left: 12px;
    line-height: 30px;
  }

  .circlebox {
    display: flex;
    align-items: center;
  }
  .circle {
    width: 15px;
    height: 15px;
    background-color: #f8e4e3;
    margin-right: 12px;
    border-radius: 50px;

    &:last-child {
      background-color: #e76e5a;
    }
    &:first-child {
      background-color: #c5b2b1;
    }
  }
`;
const WindowDecoration = () => {
  return (
    <WindowBG>
      <div className="title">聯絡表單 Contact Form</div>
      <div className="circlebox">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </WindowBG>
  );
};

export default WindowDecoration;
