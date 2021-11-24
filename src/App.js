import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './header/navbar';
import Footer from './header/footer';
import Landing from './body/landing';
import Registration from './body/registration';
import Login from './body/login';
import Dashboard from './body/dashboard';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <main>
      <Route path="/" component={Landing} exact />
      <Route path="/register" component={Registration} />
      <Route path="/login" component={Login} exact />
      <Route path="/dashboard" component={Dashboard} exact />
    </main>
    <Footer />
  </BrowserRouter>

);

export default App;
