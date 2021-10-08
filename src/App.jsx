import PrivateLayout from 'layouts/PrivateLayout';
import PublicLayout from 'layouts/PublicLayout';
import Index from 'pages/Index';
import Admin from 'pages/admin/Index';
import Ventas from 'pages/admin/Ventas';
import Usuarios from 'pages/admin/Usuarios';
import Login from 'pages/auth/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'styles/styles.css';
import Registro from 'pages/auth/Registro';
import AuthLayout from 'layouts/AuthLayout';
import Productos from 'pages/admin/Productos';


function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path={['/admin', '/admin/productos', '/admin/usuarios' ]}>
            <PrivateLayout>
              <Switch>
                <Route path='/admin/productos'>
                  <Productos />
                  </Route>
                <Route path='/admin/ventas'>
                  <Ventas/>
                </Route>
                <Route path='/admin/usuarios'>
                  <Usuarios/>
                </Route>
                <Route path='/admin'>
                  <Admin />
                </Route>
              </Switch>
            </PrivateLayout>
          </Route>
          <Route path={['/login', '/registro']}>
            <AuthLayout>
              <Switch>
                <Route path='/login'>
                  <Login />
                </Route>
                <Route path='/registro'>
                  <Registro />
                </Route>
              </Switch>
            </AuthLayout>
          </Route>
          <Route path={['/']}>
            <PublicLayout>
              <Route path='/'>
                <Index />
              </Route>
            </PublicLayout>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;