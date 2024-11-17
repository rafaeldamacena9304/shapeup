import { Banner } from "../../components/fromHome/Banner";
import { Button } from "../../components/fromHome/Button";
import { Container } from "../../components/fromHome/Container";
import { Logo } from "../../components/fromHome/Logo";
import { Text } from "../../components/fromHome/Text";
import { Wrapper } from "../../components/fromHome/Wrapper";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {

  const navigate = useNavigate();

  return (
    <>
      <Container>
        <>
          <Wrapper forImage={false}>
            <>
              <Logo />
              <Text />
              <Button onClick={() => navigate('/dashboard')} />
              <p className="login">
                Já tem uma conta?{" "}
                <span
                  onClick={() => {
                    navigate('/dashboard')
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
