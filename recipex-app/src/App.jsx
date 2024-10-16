import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import "./App.scss"

import HomePage from './pages/HomePage'
import RecipeCategoryPage from './pages/RecipeCategoryPage'
import RecipePage from './pages/RecipePage'
import RecipeFormPage from './pages/RecipeFormPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/Receitas" element={<RecipeCategoryPage />} />
        <Route path="/Lista-Receitas-Carne" element={<RecipePage />} />
        <Route path="/Cadastro-Receita" element={<RecipeFormPage />} />
      </Routes>
    </Router>
  )
}

export default App
