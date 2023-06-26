import React, {useState } from "react";
import logoImg from './images/Logo.png';
import axios from "axios";


export const Register = (props) => {
    const [nome,setNome] = useState('');
    const [senha,setSenha] = useState('');
    const [dataNasc,setDataNasc] = useState('');
    const [sexo,setSexo] = useState('');
    const [cidade,setCidade] = useState('');
    const [bairro,setBairro] = useState('');
    const [insta,setInsta] = useState('');
    const [email,setEmail] = useState('');

    function verificaCampos(){
        if(nome === "" || senha === "" || dataNasc === "" || sexo === "" || cidade === "" || bairro ==="" || email ===""){
            const errorModal = document.getElementById('errorModal');
            errorModal.style.display = 'block';
            return false;
        }
        else {
            return true;
        }
    }

    const handleClose = () =>{
        const errorModal = document.getElementById('errorModal');
            errorModal.style.display = 'none';
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        if (verificaCampos()){
            const data = {
                id: 1,
                nome: nome,
                senha: senha,
                data_nasc: dataNasc,
                sexo: 1,
                cidade: cidade,
                bairro: bairro,
                insta: insta,
                email: email,
                telefone: '',
                foto: '',
                nota: 5
            };
    
            axios.post('http://localhost:8000/usuarios', data)
            .then(response => {
                const successModal = document.getElementById('successModal');
                successModal.style.display = 'block';
            })
            .catch(error =>{
                console.error(error);
            });
        }
        
    }
    return (
        <div>
            <div className="register-container">
                <img src={logoImg} alt="Logo" className="logo-img" />
                <form onSubmit={handleSubmit}>
                    <input value={nome} onChange={(e) => setNome(e.target.value)} type="text" placeholder="Nome completo" id="nome" name="nome" />
                    <input value={senha} onChange={(e) => setSenha(e.target.value)} type="password" placeholder="Senha" id="senha" name="senha" />
                    <div className="row">
                        <input value={dataNasc} onChange={(e) => setDataNasc(e.target.value)} type="date" placeholder="Data de nasc." id="dataNasc" name="dataNasc" />
                        <input value={sexo} onChange={(e) => setSexo(e.target.value)} type="text" placeholder="sexo" id="Sexo" name="sexo" />
                    </div>
                    <div className="row">
                        <input value={cidade} onChange={(e) => setCidade(e.target.value)} type="text" placeholder="Cidade" id="cidade" name="cidade" />
                        <input value={bairro} onChange={(e) => setBairro(e.target.value)} type="text" placeholder="Bairro" id="bairro" name="bairro" />
                    </div>
                    <input value={insta} onChange={(e) => setInsta(e.target.value)} type="text" placeholder="@instagram (opcional)" id="insta" name="insta" />
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="E-mail (@edu.univali.br)" id="email" name="email" />
                    <button type="submit">Cadastrar-se</button>
                </form>
                <button onClick={()=> props.onFormSwitch('login')}>Já possuo uma conta</button>
            </div>
            <div id="successModal" className="modal">
                <div className="modal-content">
                    <h3>Cadastro realizado com sucesso!</h3>
                    <p>Seu cadastro foi efetuado sucesso!. Clique no botão abaixo para retornar à tela de login.</p>
                    <button onClick={()=> props.onFormSwitch('login')} id="returnToLoginButton">Voltar para o Login</button>
                </div>
            </div>
            <div id="errorModal" className="modal">
                <div className="modal-content">
                    <h3>Erro!!</h3>
                    <p>É necessário preencher todos os campos obrigatórios para realizar o cadastro.</p>
                    <button onClick={handleClose} id="close">Ok</button>
                </div>
            </div>
        </div>
    )
}