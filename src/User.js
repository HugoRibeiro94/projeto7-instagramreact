export default function User(){
    return (
        <div class="usuario">
            <img data-test="profile-image" src="assets/img/catanacomics.svg" alt="imagem de perfil"/>
            <div class="texto">
                <span>
                <strong data-test="name" >catanacomics</strong>
                <ion-icon name="pencil" data-test="edit-name"></ion-icon>
                </span>
            </div>
        </div>
    );
}