import styled, { createGlobalStyle } from "styled-components";
import { Colors } from "./colors";
import { Button, Box, TextField } from "@mui/material";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";


export const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
`;

export const Login = styled.div`
  background-color: #e9e9e9;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
`;

export const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90vh;

`;

export const Title = styled.h1`
  font-family: Arial;
  font-size: 4em;
  color: ${Colors.darkGrey};
  letter-spacing: 3px;
  padding-bottom: 30px;

`;

export const SubTitle = styled.p`
  font-family: Arial;
  color: ${Colors.darkGrey};
  text-align: center;
  letter-spacing: 3px;
  padding-bottom: 30px;

`;

export const CustomButton = styled(Button)`
  && {
    color: ${Colors.white};
    background-color: ${Colors.red};
    text-transform: capitalize;
    padding: 5px 30px;
    font-weight: 400;
    font-size: 1em;
    margin-bottom: 50px;
  }
`;

export const FormComponent = styled.div`
  background-color: ${Colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 50px;
  position: relative;
  border: 2px solid ${Colors.lightGrey};
  width: 80%;

`;

export const LoginTitle = styled.h1`
  font-family: Arial;
  font-weight: bold;
  font-size: 2.5em;
  color: ${Colors.red};
`;

export const FormBox = styled(Box)`
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const Textfield = styled(TextField)`
  && {
    width: 100%;
  }
`;

export const PasswordDiv = styled.div`
  position: relative;
  width: 100%;

`;
export const VisibleIcon = styled(VisibilityIcon)`
  position: absolute;
  right: 10px;
  top: 15px;
  color: ${Colors.darkGrey};

  &.invisible{
    visibility: hidden;

  }
`;
export const VisibleOffIcon = styled(VisibilityOffIcon)`
  position: absolute;
  right: 10px;
  top: 15px;
  color: ${Colors.darkGrey};

  &.invisible{
    visibility: hidden;

  }
`;

export const GoButton = styled(Button)`
  && {
    color: ${Colors.lightGrey};
    border: 1px solid ${Colors.lightGrey};
    width: 60%;
    font-size: 2em;
  }
`;

export const ForgotText = styled.p`
  font-family: Arial;
  color: ${Colors.lightGrey};
  text-align: center;
  font-size: 2em;
`;

export const SubDiv = styled.div`
  width: 95%;
  height: 6%;
  background-color: ${Colors.white};
  border-radius: 8px;
  position: absolute;
  border-top: 2px solid ${Colors.lightGrey};
  top: -15px;
`;

export const Pencil = styled.div`
  padding: 50px;
  background-color: ${Colors.red};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${Colors.white};
  position: absolute;
  right: -80px;
  top: 30px;
`;

export const PencilIcon = styled(CreateOutlinedIcon)`
  && {
    font-size: 4em;
  }
`;

export const RedBorder = styled.div`
  border-left: 5px solid red;
  height: 80px;
  position: absolute;
  left: 0;
  top: 40px;
`;

export const Todo = styled.div`
  background-color: ${Colors.red};
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
`;

export const TodoContainer = styled.div`
  background-color: ${Colors.white};
  width: 700px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  &::after {
    content: "";
    width: 96%;
    height: 40px;
    border-radius: 20px;
    position: absolute;
    bottom: -14px;
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

export const TrashButton = styled(Button)`
  && {
    color: ${Colors.darkGrey};
    float: right;
    padding: 15px;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 50px;
  }
`;

export const ToDoHeader = styled.div`
  font-family: Arial;
  font-size: 5em;
  font-weight: 800;
  color: ${Colors.lightRed};
  padding-top: 100px;
`;

export const ToDoDate = styled.p`
  font-family: Arial;
  color: ${Colors.lightPink};
  padding-top: 20px;
`;

export const DeleteButton = styled(Button)`
  && {
    visibility: hidden;
    opacity: 0;
    color: ${Colors.darkGrey};
    position: absolute;
    right: 40px;
    transition: all .3s ease;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 600px;
  position: relative;
  margin-top: 30px;
  overflow: auto;
  &:hover {
    cursor: pointer;
    .deleteButton {
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const Inputs = styled.p`
  font-family: Arial;
  color: ${Colors.darkGrey};
  font-size: 1.5em;
  &.line {
    text-decoration: line-through;
  }
`;

export const PlusButton = styled(Button)`
  && {
    color: ${Colors.lightGrey};
    font-size: 80px;
    font-weight: lighter;

    &.hidden {
      display: none;
    }
  }
`;

export const MinusButton = styled(Button)`
  && {
    color: ${Colors.lightGrey};
    font-size: 80px;
    font-weight: lighter;

    &.hidden {
      display: none;
    }
  }
`;

export const InputBox = styled.div`
  width: 600px;
  margin-bottom: 80px;
  position: relative;

  &.hide {
    visibility: hidden;
  }
`;

export const InputArea = styled.input`
  font-family: Arial;
  padding: 15px;
  border: 1px solid ${Colors.darkGrey};
  border-radius: 10px;
  width: 100%;
`;

export const AddButton = styled(Button)`
  && {
    color: ${Colors.darkGrey};
    position: absolute;
    right: 0;
    top: 7px;
  }
`;
