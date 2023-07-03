export default function Story(){
    const array = [
        {imagem:"assets/img/9gag.svg",titulo:"9gag"},
        {imagem:"assets/img/meowed.svg",titulo:"meowed"},
        {imagem:"assets/img/barked.svg",titulo:"barked"},
        {imagem:"assets/img/nathanwpylestrangeplanet.svg",titulo:"nathanwpylestrangeplanet"},
        {imagem:"assets/img/wawawicomics.svg",titulo:"wawawicomics"},
        {imagem:"assets/img/respondeai.svg",titulo:"respondeai"},
        {imagem:"assets/img/filomoderna.svg",titulo:"filomoderna"},
        {imagem:"assets/img/memeriagourmet.svg",titulo:"memeriagourmet"}
        ];
    return(
        
        <div class="stories"> 
        
            {array.map((item) =>
                <div class="story">
                    <div class="imagem">
                        <img src={item.imagem} alt={item.titulo}/>
                    </div>
                    <div class="usuario">
                        {item.titulo}
                    </div>
                </div>)}      
        </div>
        );  
}
