import { useState } from "react";

export default function Post(){
    const array = [
        {imagem:"assets/img/meowed.svg",titulo:"meowed",imagemPost:"assets/img/gato-telefone.svg"},
        {imagem:"assets/img/barked.svg",titulo:"barked",imagemPost:"assets/img/dog.svg"},
        {imagem:"assets/img/9gag.svg",titulo:"9gag",imagemPost:"assets/img/gato-telefone.svg"}
    ];

    let [corVermelho, setCorVermelho] = useState("");

    let [curtidas, setCurtidas] = useState("101.523");

    function curtirImagem(){
        if ( corVermelho === ""){
            setCurtidas("101.524");            
            setCorVermelho("vermelho");
        }
    }

    function trocarCorCurtida(){
        
        if ( corVermelho === ""){
            setCurtidas("101.524");            
            setCorVermelho("vermelho");
        }else{
            setCurtidas("101.523");
            setCorVermelho("");
        }
    }

    let [corAzul, setCorAzul] = useState("");

    function trocarCorSalvar(){
        
        if ( corAzul === ""){            
            setCorAzul("azul");
        }else{
            setCorAzul("");
        }
    }
    return(
        <div class="posts">
            {array.map((item) =>
                <div class="post" data-test="post">
                    <div class="topo">
                        <div class="usuario">
                            <img src={item.imagem} alt={item.titulo}/>
                            {item.titulo}
                        </div>
                        <div class="acoes">
                            <ion-icon name="ellipsis-horizontal"></ion-icon>
                        </div>
                    </div>

                    <div class="conteudo">
                        <img src={item.imagemPost} alt="gato-telefone" data-test="post-image" onClick={curtirImagem}/>
                    </div>

                    <div class="fundo">
                        <div class="acoes">
                            <div>
                                <ion-icon name="heart-outline" data-test="like-post" class={corVermelho} onClick={trocarCorCurtida} ></ion-icon>
                                <ion-icon name="chatbubble-outline"></ion-icon>
                                <ion-icon name="paper-plane-outline"></ion-icon>
                            </div>
                            <div>
                                <ion-icon name="bookmark-outline" data-test="save-post" class={corAzul} onClick={trocarCorSalvar}></ion-icon>
                            </div>
                        </div>

                        <div class="curtidas">
                            <img src="assets/img/respondeai.svg" alt="respondeai"/>
                            <div class="texto">
                                Curtido por <strong>respondeai</strong> e <strong data-test="likes-number">outras {curtidas} pessoas</strong>
                            </div>
                        </div>
                    </div>
                </div>)}
        </div>
    );
}
