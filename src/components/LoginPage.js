import React from "react";

import {
  Title,
  Login,
  LoginPageContainer,
  SubTitle,
  CustomButton,
  FormComponent,
  LoginTitle,
  FormBox,
  Textfield,
  GoButton,
  ForgotText,
  SubDiv,
  Pencil,
  PencilIcon,
  RedBorder,
} from "../assets/styled";

const LoginPage = () => {
  return (
    <Login>
      <LoginPageContainer>
        <Title>Material Login Form</Title>

        <SubTitle>
          Pen by <span style={{ color: "red" }}>Ömer Sarısoy</span>
        </SubTitle>

        <CustomButton variant="contained">Rerun Pen</CustomButton>

        <FormComponent>
          <SubDiv></SubDiv>

            <Pencil>
              <PencilIcon
              ></PencilIcon>
            </Pencil>

            <RedBorder></RedBorder>


          <FormBox>

            <LoginTitle>LOGIN</LoginTitle>
            <Textfield
              id="standard-basic"
              label="Username"
              variant="standard"
            ></Textfield>
            <Textfield
              id="standard-basic"
              label="Password"
              type="password"
              variant="standard"
            ></Textfield>
          </FormBox>

          <GoButton size="large">GO</GoButton>

          <ForgotText>Forgot your password?</ForgotText>
        </FormComponent>
      </LoginPageContainer>
    </Login>
  );
};

export default LoginPage;
