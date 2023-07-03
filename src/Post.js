import { useState } from "react";

export default function Post(props){
    let [corVermelho, setCorVermelho] = useState("");

    let [curtidas, setCurtidas] = useState(props.qtd);

    function curtirImagem(){
        if ( corVermelho === ""){
            setCurtidas(curtidas + 1);            
            setCorVermelho("vermelho");
        }
    }

    function trocarCorCurtida(){
        
        if ( corVermelho === ""){
            setCurtidas(curtidas + 1);            
            setCorVermelho("vermelho");
        }else{
            setCurtidas(curtidas - 1);
            setCorVermelho("");
        }
    }

    let [corPreto, setCorPreto] = useState("");

    function trocarCorSalvar(){
        
        if ( corPreto === ""){            
            setCorPreto("preto");
        }else{
            setCorPreto("");
        }
    }
    return(
        <div class="posts">
                <div class="post" data-test="post">
                    <div class="topo">
                        <div class="usuario">
                            <img src={props.imagem} alt={props.titulo}/>
                            {props.titulo}
                        </div>
                        <div class="acoes">
                            <ion-icon name="ellipsis-horizontal"></ion-icon>
                        </div>
                    </div>

                    <div class="conteudo">
                        <img src={props.imagemPost} alt="gato-telefone" data-test="post-image" onClick={curtirImagem}/>
                    </div>

                    <div class="fundo">
                        <div class="acoes">
                            <div>
                                <ion-icon name="heart-outline" data-test="like-post" class={corVermelho} onClick={trocarCorCurtida} ></ion-icon>
                                <ion-icon name="chatbubble-outline"></ion-icon>
                                <ion-icon name="paper-plane-outline"></ion-icon>
                            </div>
                            <div>
                                <ion-icon name="bookmark-outline" data-test="save-post" class={corPreto} onClick={trocarCorSalvar}></ion-icon>
                            </div>
                        </div>

                        <div class="curtidas">
                            <img src="assets/img/respondeai.svg" alt="respondeai"/>
                            <div class="texto">
                                Curtido por <strong>respondeai</strong> e <strong data-test="likes-number">outras {curtidas} pessoas</strong>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}
