import FormCP from "../Forms/Forms";
import Etiqueta from "../Forms/Etiqueta";
import FormEnviar from "../Forms/FormEnviar";

function LoginInput({titulo, subtitulo}){
    return (
        <form action="" class="m-7">  
            <Etiqueta lblfor="email" text="Correo electrónico:"></Etiqueta>       
            <FormCP type="email" name="email" id="email" placeholder="Email"></FormCP>
            <Etiqueta lblfor="password" text="Contraseña:"></Etiqueta>
            <FormCP type="password" name="password" id="password" placeholder="Password"></FormCP>
            <Etiqueta></Etiqueta>
            <FormEnviar text="Aceptar"></FormEnviar>
            <Etiqueta lblfor="text" text="¿Olvidó su contraseña?"></Etiqueta>
        </form>
    );
}
export default LoginInput;