import logo from './logo.svg';
import './App.css';
import BrandHeader from './components/BrandHeader/BrandHeader';
import Contenido from './components/Contenido/Contenido';
import LoginH1 from './components/Login/LoginH1';
import LoginInput from './components/Login/LoginInput';

function App() {
  return (
    <section>
      <BrandHeader></BrandHeader>
      <section>
        <Contenido>
          <LoginH1></LoginH1>
          <LoginInput></LoginInput>
        </Contenido>
      </section>
    </section>
  );
}

export default App;
