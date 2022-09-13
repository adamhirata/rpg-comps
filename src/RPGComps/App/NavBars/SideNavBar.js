import "./SideNavBar.css";

export default function (props) {
  // [Props]

  const [width, backgroundColor, innerComps] = [
    props.width ? props.width : "10vw",
    props.backgroundColor ? props.backgroundColor : "#383c44",
    props.innerComps ? props.innerComps : null,
  ];

  // [States]

  return (
    <div
      style={{ width: width, backgroundColor: backgroundColor }}
      className="SideNavBar"
    >
      {innerComps}
    </div>
  );
}
