import {Routes, Route} from 'react-router-dom'

import './App.scss';

import HomePage from './pages/HomePage'
import RecipeCategoryPage from './pages/RecipeCategoryPage';


function App() {
  return (
    <Routes>
      <Route exact path='/' Component={HomePage}/>
      <Route path='/Receitas' Component={RecipeCategoryPage}/>
    </Routes>
  );
}

export default App;
