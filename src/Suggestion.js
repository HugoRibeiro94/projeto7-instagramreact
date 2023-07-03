export default function Suggestion(){
    const array = [
        {imagem:"assets/img/bad.vibes.memes.svg",titulo:"bad.vibes.memes"},
        {imagem:"assets/img/chibirdart.svg",titulo:"chibirdart"},
        {imagem:"assets/img/razoesparaacreditar.svg",titulo:"razoesparaacreditar"},
        {imagem:"assets/img/adorable_animals.svg",titulo:"adorable_animals"},
        {imagem:"assets/img/smallcutecats.svg",titulo:"smallcutecats"}
    ]
    return(
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {array.map((item) =>
                <div class="sugestao">
                    <div class="usuario">
                        <img src={item.imagem} alt={item.titulo}/>
                        <div class="texto">
                            <div class="nome">{item.titulo}</div>
                            <div class="razao">Segue você</div>
                        </div>
                    </div>
                    <div class="seguir">Seguir</div>
                </div>)}
        </div>    
    );
}
/*              <div class="sugestao">
                    <div class="usuario">
                        <img src="assets/img/bad.vibes.memes.svg" alt="bad.vibes.memes.svg"/>
                        <div class="texto">
                            <div class="nome">bad.vibes.memes</div>
                            <div class="razao">Segue você</div>
                        </div>
                    </div>

                    <div class="seguir">Seguir</div>
                </div>

                <div class="sugestao">
                    <div class="usuario">
                        <img src="assets/img/chibirdart.svg" alt="chibirdart"/>
                        <div class="texto">
                            <div class="nome">chibirdart</div>
                            <div class="razao">Segue você</div>
                        </div>
                    </div>

                    <div class="seguir">Seguir</div>
                </div>

                <div class="sugestao">
                    <div class="usuario">
                        <img src="assets/img/razoesparaacreditar.svg" alt="razoesparaacreditar" />
                        <div class="texto">
                            <div class="nome">razoesparaacreditar</div>
                            <div class="razao">Novo no Instagram</div>
                        </div>
                    </div>

                    <div class="seguir">Seguir</div>
                </div>

                <div class="sugestao">
                    <div class="usuario">
                        <img src="assets/img/adorable_animals.svg" alt="adorable_animals"/>
                        <div class="texto">
                            <div class="nome">adorable_animals</div>
                            <div class="razao">Segue você</div>
                        </div>
                    </div>

                    <div class="seguir">Seguir</div>
                </div>

                <div class="sugestao">
                    <div class="usuario">
                        <img src="assets/img/smallcutecats.svg" alt="smallcutecats"/>
                        <div class="texto">
                            <div class="nome">smallcutecats</div>
                            <div class="razao">Segue você</div>
                        </div>
                    </div>

                    <div class="seguir">Seguir</div>
                </div>*/