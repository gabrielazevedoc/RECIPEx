import NavBar from '../components/NavBar'
import RecipeForm from '../components/RecipeForm'
import Footer from '../components/Footer'

import '../App.scss'


const RecipeFormPage = () => {
  return (
    <div className="full-page-container">
      <NavBar />
      <RecipeForm />
      <Footer />
    </div>
  )
}

export default RecipeFormPage