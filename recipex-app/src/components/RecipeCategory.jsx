import MeatImg from '../assets/images/meat-img-card.jpg'
import ChickenImg from '../assets/images/chicken-img-card.jpg'
import FishImg from '../assets/images/fish-img-card.jpg'
import VegetablesImg from '../assets/images/vegetables-img-card.jpg'
import DessertImg from '../assets/images/dessert-img-card.jpg'

import RecipeCategoryCard from './RecipeCategoryCard'

import './RecipeCategory.scss'

const RecipeCategory = () => {
  return (
    <div className="recipe-category-container">
      <h1>Categorias</h1>
      <div className="recipe-category-cards">
        <RecipeCategoryCard
          img={MeatImg}
          alt="imagem da categoria de carnes"
          title="Carnes"
        />
        <RecipeCategoryCard
          img={ChickenImg}
          alt="imagem da categoria de aves"
          title="Aves"
        />
        <RecipeCategoryCard
          img={FishImg}
          alt="imagem da categoria de peixes"
          title="Frutos do mar"
        />
        <RecipeCategoryCard
          img={VegetablesImg}
          alt="imagem da categoria de vegetais"
          title="Vegetais"
        />
        <RecipeCategoryCard
          img={DessertImg}
          alt="imagem da categoria de sobremesas"
          title="Sobremesas"
        />
      </div>
    </div>
  )
}

export default RecipeCategory
