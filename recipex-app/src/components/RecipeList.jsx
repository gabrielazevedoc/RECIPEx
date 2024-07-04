import RecipeListCard from './RecipeListCard'

import './RecipeList.scss'

const RecipeList = (props) => {
  return (
    <div className="recipe-list-container">
      <h1>{props.title}</h1>
      <div className="recipe-list-cards">
        <RecipeListCard />
        <RecipeListCard />
        <RecipeListCard />
        <RecipeListCard />
        <RecipeListCard />
        <RecipeListCard />
      </div>
    </div>
  )
}

export default RecipeList
