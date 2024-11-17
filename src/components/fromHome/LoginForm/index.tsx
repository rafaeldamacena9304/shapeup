import { useState } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./styles";

import person from "../../../assets/images/person.svg";
import email from "../../../assets/images/email.svg";
import padlock from "../../../assets/images/padlock.svg";
import weight from "../../../assets/images/weight.svg";
import height from "../../../assets/images/height.svg";
import gender from "../../../assets/images/gender.svg";

interface LoginFormProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  isLogin: boolean;
  setIsLogin: (value: boolean) => void;
}

export const LoginForm = ({
  isModalOpen,
  setIsModalOpen,
  isLogin,
  setIsLogin,
}: LoginFormProps) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    weight: "",
    height: "",
    gender: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const url = isLogin
      ? "https://shapeup-backend.vercel.app/api/login"
      : "https://shapeup-backend.vercel.app/api/register";
    const payload = isLogin
      ? { email: formData.email, password: formData.password }
      : formData;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        credentials: "include"
      });
      const result = await response.json();
      alert(result);

      if (response.ok) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
    }
  };

  return (
    <>
      <S.FormOverlay
        onClick={() => {
          setIsModalOpen(false);
          setIsLogin(false);
        }}
        isModalOpen={isModalOpen}
      />
      <S.Form action="#" isModalOpen={isModalOpen} onSubmit={handleSubmit}>
        {isLogin ? (
          <>
            <h3>Login</h3>
            <S.InputContainer>
              <img src={email} alt="" />
              <input
                type="email"
                placeholder="Seu endereço de e-mail"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </S.InputContainer>
            <S.InputContainer>
              <img src={padlock} alt="" />
              <input
                type="password"
                placeholder="Digite sua senha"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
              />
            </S.InputContainer>
            <S.Button type="submit">Entrar</S.Button>
          </>
        ) : (
          <>
            <h3>Registre-se</h3>
            <S.InputContainer>
              <img src={person} alt="" />
              <input
                type="text"
                placeholder="Nome e sobrenome"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </S.InputContainer>
            <S.InputContainer>
              <img src={email} alt="" />
              <input
                type="email"
                placeholder="Seu endereço de e-mail"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </S.InputContainer>
            <S.InputContainer>
              <img src={padlock} alt="" />
              <input
                type="password"
                placeholder="Crie sua senha"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
              />
            </S.InputContainer>
            <S.InputContainer>
              <img src={weight} alt="" />
              <input
                type="number"
                min="20"
                placeholder="Seu peso (kg)"
                name="weight"
                required
                value={formData.weight}
                onChange={handleChange}
              />
            </S.InputContainer>
            <S.InputContainer>
              <img src={height} alt="" />
              <input
                type="number"
                min="100"
                placeholder="Sua altura (cm)"
                name="height"
                required
                value={formData.height}
                onChange={handleChange}
              />
            </S.InputContainer>
            <S.InputContainer>
              <img src={gender} alt="" />
              <select onChange={handleChange}>
                <option value="">Selecione uma opção</option>
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
              </select>
            </S.InputContainer>
            <S.Button type="submit">Registrar</S.Button>
          </>
        )}
      </S.Form>
    </>
  );
};
