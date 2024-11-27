import { useNavigate } from "react-router-dom";
import Button from "./button";

function PostCard(props) {
  const {
    title,
    desc,
    buttonLabel = "Learn More",
    buttonColor = "blue",
    buttonLink = "#",
  } = props;
  const navigate = useNavigate();
  return (
    <div className="card mb-2">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desc}</p>
        <div className="text-end">
          <Button
            color={buttonColor}
            onClick={(event) => {
              event.preventDefault();
              navigate(buttonLink);
            }}
          >
            {buttonLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
