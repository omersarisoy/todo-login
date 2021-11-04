import styled, { createGlobalStyle } from "styled-components";
import { Colors } from "./colors";
import { Button, Box, TextField } from "@mui/material";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteIcon from "@mui/icons-material/Delete";

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
  justify-content: center;
  padding-bottom: 60px;
  //   border: 3px solid red;
`;

export const Title = styled.h1`
  font-family: Arial;
  font-size: 4em;
  color: ${Colors.darkGrey};
  letter-spacing: 3px;
  padding: 30px;
`;

export const SubTitle = styled.p`
  font-family: Arial;
  color: ${Colors.darkGrey};
  text-align: center;
  letter-spacing: 3px;
`;

export const CustomButton = styled(Button)`
  && {
    color: ${Colors.white};
    background-color: ${Colors.red};
    text-transform: capitalize;
    padding: 5px 30px;
    margin: 50px;
    font-weight: 400;
    font-size: 1em;
  }
`;

export const FormComponent = styled.div`
  background-color: ${Colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 60px;
  position: relative;
  border: 2px solid ${Colors.lightGrey};
`;

export const LoginTitle = styled.h1`
  font-family: Arial;
  font-weight: bold;
  font-size: 2.5em;
  color: ${Colors.red};
`;

export const FormBox = styled(Box)`
  width: 500px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

export const Textfield = styled(TextField)`
  && {
  }
`;

export const GoButton = styled(Button)`
  && {
    color: ${Colors.lightGrey};
    border: 1px solid ${Colors.lightGrey};
    width: 60%;
    font-size: 2em;
    margin-top: 70px;
  }
`;

export const ForgotText = styled.p`
  font-family: Arial;
  color: ${Colors.lightGrey};
  text-align: center;
  font-size: 2em;
  margin-top: 70px;
`;

export const SubDiv = styled.div`
  width: 95%;
  height: 6%;
  background-color: ${Colors.white};
  border-radius: 8px;
  position: absolute;
  border-top: 2px solid ${Colors.lightGrey};
  //   border: 3px solid red;
  top: -15px;
`;

export const Pencil = styled.div`
  padding: 60px;
  background-color: ${Colors.red};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${Colors.white};
  position: absolute;
  right: -100px;
  top: 40px;
`;

export const PencilIcon = styled(CreateOutlinedIcon)`
  && {
    font-size: 5em;
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
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  position:relative;
`;

export const TrashBin = styled(DeleteIcon)`
  && {
    color: ${Colors.darkGrey};
    float: right;
    padding: 10px;
    font-size: 50px;
    position:absolute;
    top:0;
    right:0;

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
  padding-top: 35px;

`;
