import Post from "./Post";
export default function Posts(){
    const array = [
        {imagem:"assets/img/meowed.svg",titulo:"meowed",imagemPost:"assets/img/gato-telefone.svg",qtd:101553},
        {imagem:"assets/img/barked.svg",titulo:"barked",imagemPost:"assets/img/dog.svg",qtd:201694},
        {imagem:"assets/img/9gag.svg",titulo:"9gag",imagemPost:"assets/img/gato-telefone.svg",qtd:401728}
    ];
    return(
            <div>
                {array.map((item) =>(<Post imagem={item.imagem} titulo={item.titulo} imagemPost={item.imagemPost} qtd={item.qtd}/>))}
            </div>
    );
}
