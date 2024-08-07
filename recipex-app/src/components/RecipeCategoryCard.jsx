import './RecipeCategoryCard.scss'

const RecipeCategoryCard = (props) => {
  return (
    <div className="category-container" onClick={props.onClick}>
      <img src={props.img} alt={props.alt} />
      <h3 className="category-title">{props.title}</h3>
    </div>
  )
}

export default RecipeCategoryCard
