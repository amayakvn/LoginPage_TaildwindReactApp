import NavBar from './components/NavBars/NavBar';
import LoginPage from './components/Pages/LoginPage';
import ListPage from './components/Pages/ListPage';
import Todo from './components/Pages/Todo/Todo';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import BrandHeader from './components/BrandHeader/BrandHeader';

function App() {
  return (
    <Router>
      <body class="bg-indigo-100">
        <header>
          <BrandHeader></BrandHeader>
        </header>
        <main>
            <Switch>
                <Route path="/login" exact>
                    <LoginPage></LoginPage>
                </Route>
                <Route path="/list" exact>
                    <Todo/>
                </Route>
            </Switch>
        </main>
      </body>  
    </Router>
   
  );
}

export default App;
