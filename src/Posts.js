import Post from "./Post";
export default function Posts(){
    const array = [
        {imagem:"assets/img/meowed.svg",titulo:"meowed",imagemPost:"assets/img/gato-telefone.svg"},
        {imagem:"assets/img/barked.svg",titulo:"barked",imagemPost:"assets/img/dog.svg"},
        {imagem:"assets/img/9gag.svg",titulo:"9gag",imagemPost:"assets/img/gato-telefone.svg"}
    ];
    return(
            <div>
                {array.map((item) =>(<Post imagem={item.imagem} titulo={item.titulo} imagemPost={item.imagemPost}/>))}
            </div>
    );
}
