import { UserCard } from "../../components/fromDashboard/UserCard"
import { Header } from "../../components/general/Header"
import { MainTitle } from "../../components/general/MainTitle"



export const DashboardPage = () => {

    return (
        <>
        <Header/>
        <div className="container">
            <div className="topContainer">
                <div className="titleContainer">
                    <MainTitle content="Olá, usuário"  />
                    <p className="subTitle">Pronto para superar os seus limites?</p>
                </div>
                <UserCard id={1} name="Rafael" age={18} height={161} weight={65} gender="Masculino" bmi={26} bmr={1800}  />
            </div>

        </div>
        </>
    )
}