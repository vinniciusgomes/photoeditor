import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 500px;
  height: auto;
  background-color: #32323c;
  border-radius: 10px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Icon = styled.img`
  width: 100px;
  margin-bottom: 50px;
  height: auto;
`;

export const Title = styled.h3`
  color: #ffffff;
  margin-bottom: 10px;
`;

export const SubTitle = styled.span`
  color: #ffffff;
  margin-bottom: 40px;
  font-weight: 100;
  opacity: 0.5;
`;

export const TextfieldContainer = styled.div`
  width: 100%;
`;

export const Label = styled.span`
  color: #ffffff;
  font-weight: 700;
`;

export const Textfield = styled.input`
  width: 100%;
  height: 50px;
  background-color: #25252d;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 10px;
  border: 0;
  margin-top: 10px;
  color: #ffffff;
`;

export const Button = styled.div`
  width: 200px;
  height: 50px;
  border-radius: 5px;
  margin-top: 60px;
  background-color: #d42f2f;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: filter 0.2s;
  border: 0;
  font-size: 18px;
  color: #ffffff;
  &:hover {
    filter: brightness(80%);
    cursor: pointer;
  }
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SignUpButton = styled.div`
  width: 100%;
  color: #bbbbbb;
  text-align: center;
  margin-top: 20px;
  font-size: 15px;
`;
