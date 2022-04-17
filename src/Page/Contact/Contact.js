import React from "react";
import DefaultLayout from "../../Component/layout/DefaultLayout";
import Container from "../../Component/common/Container";
import {
  ContactRol,
  ContactCol,
  Card,
  FormContainer,
  FormBg,
  FormButtom
} from "./ContactStyle";
import WindowDecoration from "../../Component/common/WindowDecoration";

const Contact = () => {
  return (
    <DefaultLayout>
      <Container>
        <ContactRol>
          <ContactCol>
            <Card />
          </ContactCol>
          <ContactCol>
            <Card />
          </ContactCol>
        </ContactRol>
      </Container>
      <FormContainer>
        <FormBg>
          <WindowDecoration />
          <FormButtom>
            <a href="#">按鈕</a>
          </FormButtom>
        </FormBg>
      </FormContainer>
    </DefaultLayout>
  );
};

export default Contact;
