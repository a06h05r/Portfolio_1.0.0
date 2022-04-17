import styled from "styled-components";

export const TimeContainer = styled.div`
  background-color: #2c2c2c;
  padding: 150px 0;

  .container {
    width: 50%;
    margin: 0 auto;
  }
  .container .rol {
    margin: 0;
    /* margin-top: 100px; */
    list-style: none;
    position: relative;
    color: #2c2c2c;
    font-size: 13px;
  }
  .container .rol:before {
    content: "";
    width: 1px;
    height: 100%;
    position: absolute;
    border-left: 2px solid #e76e5a;
  }
  .container .rol .col {
    position: relative;
    margin-left: 30px;
    background-color: #fff;
    padding: 20px 30px;
    border-radius: 6px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.08);
  }
  .container .rol .col:not(:first-child) {
    margin-top: 60px;
  }
  .container ul li > span {
    width: 2px;
    height: 100%;
    left: -30px;
    top: 0;
    position: absolute;
  }
  .container .rol .col > span:before {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: 2px solid #e76e5a;
    position: absolute;
    background: #e76e5a;
    left: -5px;
    top: 0;
  }
  .container .rol .col span:after {
    top: 100%;
  }
  .container .rol .col > div {
    margin-left: 10px;
  }
  .container div .title {
    font-size: 24px;
    color: #e76e5a;
  }
  .container div .timeinfo {
    font-size: 18px;
  }
  .container div .info {
    font-size: 18px;
  }
  .container div .type {
    font-size: 18px;
  }
  .container div > div {
    margin-top: 5px;
  }

  /* 自行設定 */
  .container ul {
    padding-inline-start: none;
  }
  .job-namebox {
    display: flex;
    justify-content: space-between;
  }
  .type li {
    list-style-type: number;
  }
`;
