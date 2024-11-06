import { Banner } from "../../components/fromHome/Banner"
import { Button } from "../../components/fromHome/Button"
import { Container } from "../../components/fromHome/Container"
import { Logo } from "../../components/fromHome/Logo"
import { Text } from "../../components/fromHome/Text"
import { Wrapper } from "../../components/fromHome/Wrapper"

export const HomePage = () => {

    return (
        <>
            <Container>
                <>
                <Wrapper forImage={false}>
                    <>
                    <Logo/>
                    <Text/>
                    <Button/>
                    </>
                </Wrapper>
                <Wrapper forImage>
                    <Banner/>
                </Wrapper>
                </>
            </Container>
        </>
    )
}