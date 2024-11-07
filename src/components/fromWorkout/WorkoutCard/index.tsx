import { Title } from './Title'

import { WorkoutModel } from '../../../models/WorkoutModel'

import * as S from './styles'

import edit from '../../../assets/images/edit.svg'

export const WorkoutCard = (props: WorkoutModel ) => {

    return(
        <S.Card>
            <Title day={props.day} />
            <S.EditButton src={edit} alt="Botão de editar"/>
        </S.Card>
    )
}