import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import api from "../../services/api";
import {
  Container,
  Content,
  Title,
  SubTitle,
  Textfield,
  Icon,
  Label,
  TextfieldContainer,
  Button,
  Form,
  SignUpButton,
} from "./styles";

function SignUp() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit() {
    setLoading(true);
    formData.username = "@" + formData.username;
    if (formData.password === formData.confirmPassword) {
      await api
        .post("auth/register", formData)
        .then((res) => {
          requestSignIn(formData.email, formData.password);
        })
        .catch((err) => {
          alert(err.response.data.message);
          setLoading(false);
        });
    } else {
      alert("Senha e confirmação de senha devem ser identicas");
    }
  }

  async function requestSignIn(email, password) {
    const body = {
      email,
      password,
    };
    await api
      .post("auth", body)
      .then((res) => {
        localStorage.setItem("accessToken", res.data.accessToken);
        history.push("/editor");
      })
      .catch((err) => alert(err.response.data.message))
      .finally(() => setLoading(false));
  }

  return (
    <Container>
      <Icon src="./static/img/icon.png" />
      <Content>
        <Title>Cadastro</Title>
        <SubTitle>Para acessar crie sua conta</SubTitle>
        <Form onSubmit={handleSubmit}>
          <TextfieldContainer>
            <Label>Nome de usuário</Label>
            <Textfield
              type="text"
              id="username"
              name="username"
              required
              onChange={handleInputChange}
            />
          </TextfieldContainer>
          <TextfieldContainer className="mt-3">
            <Label>E-mail</Label>
            <Textfield
              type="email"
              id="email"
              name="email"
              required
              onChange={handleInputChange}
            />
          </TextfieldContainer>
          <TextfieldContainer className="mt-3">
            <Label>Senha</Label>
            <Textfield
              type="password"
              id="password"
              name="password"
              required
              onChange={handleInputChange}
            />
          </TextfieldContainer>
          <TextfieldContainer className="mt-3">
            <Label>Confirmação de senha</Label>
            <Textfield
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
              onChange={handleInputChange}
            />
          </TextfieldContainer>
          <Button onClick={handleSubmit} disabled={loading}>
            {loading ? <i class="fas fa-spinner fa-pulse" /> : "Cadastrar"}
          </Button>
          <SignUpButton>
            Já possuí conta?{" "}
            <Link to="/" style={{ color: "#ffffff" }}>
              Acesse aqui
            </Link>
          </SignUpButton>
        </Form>
      </Content>
    </Container>
  );
}

export default SignUp;
