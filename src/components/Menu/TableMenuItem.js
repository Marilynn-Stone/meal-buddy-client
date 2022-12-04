import { Link } from "react-router-dom"

export default function TableMenuItem(props) {
  return (
    <section className="TableMenuItem" item_id={props.item_id}>
      <p>{props.day}</p>
      <p>{props.meal}</p>
      <Link to={`/menu/meal/${props.item_id}`} >{props.name}</Link>
      
    </section>
  )
}