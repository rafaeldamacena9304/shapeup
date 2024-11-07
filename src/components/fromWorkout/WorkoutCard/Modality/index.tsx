import * as S from './styles'

interface ModalityProps {
    modality:string
}

export const Modality = (props: ModalityProps) => {

    return(
        <S.Modality>{props.modality}</S.Modality>
    )
}