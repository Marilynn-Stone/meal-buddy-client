import { Link } from "react-router-dom"

export default function TableMenuItem(props) {


  return (
    <section className="TableMenuItem">
      <p>{props.day}</p>
      <p>{props.meal}</p>
      <Link to={`/RecipeItem/${props.item_id}`} >{props.name}</Link>
      
    </section>
  )
}