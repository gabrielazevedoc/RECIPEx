import MeatImg from '../assets/images/meat-img-card.jpg'

import RecipeCategoryCard from '../components/RecipeCategoryCard';

import './RecipeCategory.scss';

const RecipeCategory = () => {
    return(
        <div className="recipe-category-container">
            <h1>Categorias</h1>
            <div className="recipe-category-cards">
                <RecipeCategoryCard title={MeatImg} alt="imagem da categoria de carnes"/>
            </div>
        </div>
    )
}

export default RecipeCategory;