import "./Herostyles.css";

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img alt="Heroimg" src={props.Imgbg} />
      </div>
      <div className="Herotext">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
      </div>
    </>
  );
}
export default Hero;
