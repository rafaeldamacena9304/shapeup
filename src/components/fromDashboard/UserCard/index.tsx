import { UserModel } from '../../../models/UserModel'
import * as S from './styles'
import edit from '../../../assets/images/edit.svg'

export const UserCard = (props: UserModel) => {

    return(
        <S.Card>
            <S.Profile>
                <h4>{props.name}</h4>
                <img src={edit} alt="Edit Icon" />
            </S.Profile>
            <S.ContentGrid>
                <S.Item>
                    Peso: <S.Value>{props.weight}kg</S.Value>
                </S.Item>
                <S.Item>
                    Sexo: <S.Value>{props.gender}</S.Value>
                </S.Item>
                <S.Item>
                    Idade: <S.Value>{props.age} anos</S.Value>
                </S.Item>
                <S.Item>
                    Altura: <S.Value>{props.height}cm</S.Value>
                </S.Item>
                <S.Item>
                    IMC: <S.Value>{props.bmi}</S.Value>
                </S.Item>
                <S.Item>
                    TMB: <S.Value>{props.bmr}</S.Value>
                </S.Item>
            </S.ContentGrid>
        </S.Card>
    )
}