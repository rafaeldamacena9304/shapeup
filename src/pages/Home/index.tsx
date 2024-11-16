import { useState } from "react";
import { Banner } from "../../components/fromHome/Banner";
import { Button } from "../../components/fromHome/Button";
import { Container } from "../../components/fromHome/Container";
import { LoginForm } from "../../components/fromHome/LoginForm";
import { Logo } from "../../components/fromHome/Logo";
import { Text } from "../../components/fromHome/Text";
import { Wrapper } from "../../components/fromHome/Wrapper";

export const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <LoginForm isLogin={isLogin} setIsLogin={setIsLogin} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <Container>
        <>
          <Wrapper forImage={false}>
            <>
              <Logo />
              <Text />
              <Button setIsModalOpen={setIsModalOpen} />
              <p className="login">
                Já tem uma conta?{" "}
                <span
                  onClick={() => {
                    setIsLogin(true);
                    setIsModalOpen(true);
                  }}
                >
                  Faça login
                </span>
              </p>
            </>
          </Wrapper>
          <Wrapper forImage>
            <Banner />
          </Wrapper>
        </>
      </Container>
    </>
  );
};
