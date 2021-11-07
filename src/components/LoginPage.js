import React, { useState } from "react";

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
  PasswordDiv,
  VisibleIcon,
  VisibleOffIcon,
} from "../assets/styled";

const LoginPage = () => {
  const [visible, setVisible] = useState(true);
  const [userControl, setUserControl] = useState(true);
  const [passwordControl, setPasswordControl] = useState(true);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = () => {
    setVisible(!visible);
  };

  const handleGo = (e) => {
    if (/\S+@\S+.\S+/.test(user)) {
      if (user === "omer@gmail.com") {
        setUserControl(true);

        if (
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
        ) {
          if (password === "Omer57.61") {
            setPasswordControl(true);
            localStorage.setItem("token", "omer");
            window.location.replace("/todo");
          } else {
            alert("Kullanıcı şifreniz yanlıştır.");
          }
        } else {
          setPasswordControl(false);
        }
      } else {
        alert("Kullanıcı adınız yanlıştır.");
      }
    } else {
      setUserControl(false);
   
    }
  };

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
            <PencilIcon></PencilIcon>
          </Pencil>

          <RedBorder></RedBorder>

          <FormBox>
            <LoginTitle>LOGIN</LoginTitle>
            <Textfield
              error={userControl ? "" : "false"}
              helperText={
                userControl && user.length >= 0 ? "" : "Enter valid username"
              }
              id="standard-basic1"
              label="Username"
              variant="standard"
              value={user}
              onChange={(e) => setUser(e.currentTarget.value)}
            ></Textfield>

            <PasswordDiv>
              <Textfield
                error={passwordControl ? "" : "false"}
                helperText={
                  passwordControl && password.length >= 0
                    ? ""
                    : "Enter valid password"
                }
                id="standard-basic"
                label="Password"
                type={visible ? "password" : "text"}
                variant="standard"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
              ></Textfield>

              {visible ? (
                <VisibleIcon onClick={handleChange} />
              ) : (
                <VisibleOffIcon onClick={handleChange} />
              )}
            </PasswordDiv>
            <GoButton onClick={handleGo} size="large">
              GO
            </GoButton>

            <ForgotText
              onClick={() => {
                alert("Clue: Son's birthday ");
              }}
            >
              Forgot your password?
            </ForgotText>
          </FormBox>
        </FormComponent>
      </LoginPageContainer>
    </Login>
  );
};

export default LoginPage;
// const handleGo = (e) => {
//   if((/\S+@\S+.\S+/).test(user) && (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/).test(password)) {
//     if(user==="omer@gmail.com" && password==="Omer57.61" ) {
//       setUserControl(true);
//       setPasswordControl(true);
//       localStorage.setItem("token", "omer")
//       window.location.replace('/todo')
//     } else {
//       alert("Kullanıcı adı veya şifreniz yanlıştır.")
//     }
//   } else {
//     setUserControl(false);
//       setPasswordControl(false);
//   };

// };
