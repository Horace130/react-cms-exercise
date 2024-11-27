import Button from "./button";

function Card(props) {
  const {
    image,
    title,
    desc,
    buttonLabel = "Learn More",
    buttonColor = "blue",
    buttonLink = "#",
  } = props;
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desc}</p>
        <Button color={buttonColor}>{buttonLabel}</Button>
      </div>
    </div>
  );
}

export default Card;
