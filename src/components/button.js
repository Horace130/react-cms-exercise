function ButtonWithChildren(props) {
    const { color, size, onClick, children } = props;
    let btnClass = "btn";
    if (color === "red") {
      btnClass += " btn-danger"; // btn btn-danger
    } else if (color === "green") {
      btnClass += " btn-success"; // btn btn-success
    } else if (color === "blue") {
      btnClass += " btn-info"; // btn btn-info
    } else if (color === "black") {
      btnClass += " btn-dark"; // btn btn-dark
    } else if (color === "primary") {
      btnClass += " btn-primary"; // btn btn-dark
    } else if (color === "grey") {
      btnClass += " btn-secondary"; // btn btn-secondary
    } else if (color === "yellow") {
      btnClass += " btn-warning"; // btn btn-warning
    }
  
    if (size === "small") {
      btnClass += " btn-sm"; // btn btn-danger btn-sm
    } else if (size === "large") {
      btnClass += " btn-lg"; // btn btn-danger btn-lg
    }
  
    return (
      <button className={btnClass} onClick={onClick}>
        {children}
      </button>
    );
  }
  
  export default ButtonWithChildren;
  