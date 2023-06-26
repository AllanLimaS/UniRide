import React, {useState } from "react";
import logoImg from './images/Logo.png';

export const Login = (props) => {
    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email);
    }
    return (
        <div className="login-container">
            <img src={logoImg} alt="Logo" className="logo-img" />
            <form onSubmit={handleSubmit}>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="E-mail (@edu.univali.br)" id="email" name="email" />
                <input value={senha} onChange={(e) => setSenha(e.target.value)} type="password" placeholder="Senha" id="senha" name="senha" />
                <button type="submit">Entrar</button>
            </form>
            <button onClick={()=> props.onFormSwitch('register')}>Cadastrar-se</button>
            <a href="">Esqueci minha senha</a>
        </div>
    )
}