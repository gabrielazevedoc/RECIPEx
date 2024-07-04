import NavBar from '../components/NavBar'
import RecipeList from '../components/RecipeList'
import Footer from '../components/Footer'

import '../App.scss'

const RecipePage = () => {
  return (
    <div className="full-page-container">
      <NavBar />
      <RecipeList title="Carnes" />
      <Footer />
    </div>
  )
}

export default RecipePage
