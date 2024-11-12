import * as S from "./styles";

import add from '../../../assets/images/add.svg'

interface WorkoutModalProps {
    isModalOpen: boolean
    setIsModalOpen: (value: boolean) => void
}

export const WorkoutModal = (props: WorkoutModalProps) => {
  return (
    <S.ModalOverlay onClick={() => props.setIsModalOpen(false)} isModalOpen={props.isModalOpen}>
      <S.Content>
        <h3>Registrar treino do dia</h3>
        <S.ExerciseList>
          <S.ExerciseContainer>
            <div>
              <label htmlFor="exerciseGroup">Grupo do exercício:</label>
              <select name="" id="exerciseGroup">
                <option value="">Pernas</option>
                <option value="">Costas</option>
                <option value="">Peitoral</option>
                <option value="">Braços</option>
              </select>
            </div>
            <div>
              <label htmlFor="exerciseGroup">Exercício:</label>
              <select name="" id="exerciseGroup">
                <option value="">Pernas</option>
                <option value="">Costas</option>
                <option value="">Peitoral</option>
                <option value="">Braços</option>
              </select>
            </div>
            <S.InputContainer>
              <input min="1" type="number" placeholder="Séries" />
              <input min="1" type="number" placeholder="Repetições" />
            </S.InputContainer>
          </S.ExerciseContainer>
          <S.AddButton>
            <img src={add} alt="" /> <span>Novo exercício</span>
          </S.AddButton>
        </S.ExerciseList>
        <S.SaveButton>Salvar treino</S.SaveButton>
      </S.Content>
    </S.ModalOverlay>
  );
};
