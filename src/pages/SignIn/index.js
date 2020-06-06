import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";

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

function SignIn() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit() {
    setLoading(true);
    await api
      .post("auth", formData)
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
        <Title>Entrar</Title>
        <SubTitle>Para continuar faça login em sua conta</SubTitle>
        <Form onSubmit={handleSubmit}>
          <TextfieldContainer>
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
          <Button onClick={handleSubmit}>
            {loading ? <i class="fas fa-spinner fa-pulse" /> : "Acessar"}
          </Button>
          <SignUpButton>
            Não possuí conta?{" "}
            <Link to="/cadastro" style={{ color: "#ffffff" }}>Cadastre-se aqui</Link>
          </SignUpButton>
        </Form>
      </Content>
    </Container>
  );
}

export default SignIn;
