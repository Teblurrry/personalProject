import './App.css';
import Header from './components/header';
// import { BrowserRouterasRouter, Routes, Route, redirect } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import HomePages from './components/HomePages';
import HomeTest from './components/home';
import Footer from './components/footer';
import Pages from './components/pages';
import Work from './components/work';
import education from './components/education';
import contact from './components/contact';


function App() {
    return (
      <Router>
        <Header />
          <Routes>
            <Route path='/' exact Component={HomeTest} />
            <Route path='/home' exact Component={HomeTest} />
            <Route path='/my-app' exact Component={HomeTest} />
            <Route path='/interests' exact Component={Pages} />
            <Route path='/projects' exact Component={Work} />
            <Route path='/education' exact Component={education} />
            <Route path='/contact' exact Component={contact} />

          </Routes>
          <Footer />
      </Router>
    );
  }

export default App;
