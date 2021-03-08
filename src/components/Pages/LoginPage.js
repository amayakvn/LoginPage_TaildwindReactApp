import '../../App.css';
import BrandHeader from '../BrandHeader/BrandHeader';
import Contenido from '../Contenido/Contenido';
import LoginH1 from '../Login/LoginH1';
import LoginInput from '../Login/LoginInput';

function LoginPage({}) {
  return (
    <section>
      <section>
        <Contenido>
          <LoginH1></LoginH1>
          <LoginInput></LoginInput>
        </Contenido>
      </section>
    </section>
  );
}
export default LoginPage;
