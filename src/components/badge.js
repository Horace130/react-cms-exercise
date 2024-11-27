function Badge(props) {
    const { color, children } = props;
    let badgeClass = "badge";
  
    if (color === "green") {
      badgeClass += " bg-success";
    } else if (color === "yellow") {
      badgeClass += " bg-warning";
    } else if (color === "turquoise") {
      badgeClass += " bg-info";
    } else if (color === "blue") {
      badgeClass += " bg-primary";
    } else if (color === "red") {
      badgeClass += " bg-danger";
    }
  
    return <span className={badgeClass}>{children}</span>;
  }
  export default Badge;
  