import { Banner } from "../../components/fromHome/Banner";
import { Button } from "../../components/fromHome/Button";
import { Container } from "../../components/fromHome/Container";
import { Logo } from "../../components/fromHome/Logo";
import { Text } from "../../components/fromHome/Text";
import { Wrapper } from "../../components/fromHome/Wrapper";
import { MainCard } from "../../components/fromDashboard/MainCard";
import dumbbell from '../../assets/images/dumbbell.png'

const conteudos = ["Pulley Frente", "Remada", "Agachamento"]

export const HomePage = () => {
  return (
    <>
      <MainCard content={conteudos} image={dumbbell} title="Treino de hoje"  subType="Costas" status="Pendente"/>
      <Container>
        <>
          <Wrapper forImage={false}>
            <>
              <Logo />
              <Text />
              <Button />
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
