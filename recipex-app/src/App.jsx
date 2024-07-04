import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import "./App.scss"

import HomePage from './pages/HomePage'
import RecipeCategoryPage from './pages/RecipeCategoryPage'
import RecipePage from './pages/RecipePage'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/Receitas" element={<RecipeCategoryPage />} />
        <Route path="/Lista-Receitas-Carne" element={<RecipePage />} />
      </Routes>
    </Router>
  )
}

export default App
