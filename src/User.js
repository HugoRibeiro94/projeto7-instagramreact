import {useState} from "react";

export default function User(){

    let [imagem, setImagem] = useState("assets/img/catanacomics.svg");

    function trocarImagem(){
        const novaImagem = prompt("Digite a nova imagem");
        setImagem(novaImagem);
    }

    let [nomeUsuario, setNomeUsuario] = useState("");

    function perguntarNome(){
        const nome = prompt("Digite seu nome");
        setNomeUsuario(nome);
    }

    return (
        <div class="usuario">
            <img data-test="profile-image" onClick={trocarImagem} src={(!imagem) ? "assets/img/catanacomics.svg" : `${imagem}`} />
            <div class="texto">
                <span>
                <strong data-test="name" >{(!nomeUsuario) ? "catanacomics" : `${nomeUsuario}`}</strong>
                <ion-icon name="pencil" data-test="edit-name" onClick={perguntarNome} ></ion-icon>
                </span>
            </div>
        </div>
    );
}