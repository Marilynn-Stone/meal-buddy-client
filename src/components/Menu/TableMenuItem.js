export default function TableMenuItem(props) {
  return (
    <section className="TableMenuTile">
      <p>{props.day}</p>
      <p>{props.meal}</p>
      <p>{props.name}</p>
    </section>
  )
}