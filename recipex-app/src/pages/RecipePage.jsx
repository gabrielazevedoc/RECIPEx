import NavBar from '../components/NavBar'
import RecipeListCategory from '../components/RecipeListCategory'
import Footer from '../components/Footer'

import '../App.scss'

const RecipePage = () => {
  return (
    <div className="full-page-container">
      <NavBar />
      <RecipeListCategory category="carnes" />
      <Footer />
    </div>
  )
}

export default RecipePage
