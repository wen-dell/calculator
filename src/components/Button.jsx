import "./Button.css";

const Button = (props) => {
  return (
    <button
      onClick={e => props.click && props.click(props.label)}
      className={`
    Button
    ${props.operation ? "Operation" : ""}
    ${props.double ? "Double" : ""}
    ${props.triple ? "Triple" : ""}
    `}
    >
      {props.label}
    </button>
  );
};

export default Button;
