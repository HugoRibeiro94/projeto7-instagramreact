import {useState} from "react";

export default function User(){

    let [novaImagem, setImagem] = useState("");

    function trocarImagem(){
        const imagem = prompt("Digite a nova imagem");
        setImagem(imagem);
    }

    let [nomeUsuario, setNomeUsuario] = useState("");

    function perguntarNome(){
        const nome = prompt("Digite seu nome");
        setNomeUsuario(nome);
    }

    return (
        <div class="usuario">
            <img data-test="profile-image" onClick={trocarImagem} src={(!novaImagem) ? "assets/img/catanacomics.svg" : {novaImagem}} alt="imagem de perfil"/>
            <div class="texto">
                <span>
                <strong data-test="name" >{(!nomeUsuario) ? "catanacomics" : `${nomeUsuario}`}</strong>
                <ion-icon name="pencil" data-test="edit-name" onClick={perguntarNome} ></ion-icon>
                </span>
            </div>
        </div>
    );
}