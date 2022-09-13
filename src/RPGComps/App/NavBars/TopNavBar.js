import "./TopNavBar.css";

export default function (props) {
  // [Props]

  const [height, backgroundColor, innerComps] = [
    props.height ? props.height : "10vh",
    props.backgroundColor ? props.backgroundColor : "#282c34",
    props.innerComps ? props.innerComps : null,
  ];

  // [States]

  return (
    <div
      style={{ height: height, backgroundColor: backgroundColor }}
      className="TopNavBar"
    >
      {innerComps}
    </div>
  );
}
