import { useEffect, useState } from 'react'
import RecipeService from '../service/RecipeService'

import './RecipeListCategory.scss'

const RecipeListCategory = ({category}) => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const data = await RecipeService.getRecipesByCategory(category);
                setRecipes(data);
                setLoading(false);
            } catch (error) {
                console.error('Erro ao carregar receita:', error.response?.data?.errors || error);
                setError('Erro ao carregar as receitas');
                setLoading(false);
            }
        };

        fetchRecipes();
    }, [category]);

    if (loading) {
        return <p>Carregando receitas...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return(
      <div className="category-box">
        <span></span>
          <div className="category-recipes">
                <h2>{category}</h2>
                <div className="recipes-grid">
                    {recipes.map((recipe) => (
                        <div key={recipe.id} className="recipe-card">
                            <div className="recipe-card-image" />
                            <div className="recipe-card-content">
                                <h3>{recipe.name}</h3>
                                <p>{recipe.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
      </div>
    )
}

export default RecipeListCategory
