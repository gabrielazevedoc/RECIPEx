import NavBar from '../components/NavBar'
import RecipeCategory from '../components/RecipeCategory'
import Footer from '../components/Footer'

import '../App.scss'

const RecipeCategoryPage = () => {
  return (
    <div className="full-page-container">
      <NavBar />
      <RecipeCategory />
      <Footer />
    </div>
  )
}

export default RecipeCategoryPage
