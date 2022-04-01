import bg from "../assets/bg.jpeg";
import chip from "../assets/chip.png";
import visa from "../assets/visa.png";
import discover from "../assets/ds.png";
import master from "../assets/mastercard.png";

const CardFront = ({ state, dispatch }) => {
  let cardNum = [...state.num]
    .map((d, i) => (i % 4 == 0 ? " " + d : d))
    .join("")
    .trim();
  const cards = [
    master,
    master,
    master,
    master,
    visa,
    discover,
    master,
    master,
    master,
    master,
  ];

  const card = {
    main: {
      backgroundImage: `url(${bg})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      boxShadow: "2px 2px 4px #000000",
      width: "80%",
      maxWidth: "25rem",
      height: "14rem",
      borderRadius: "12px",
      position: "absolute",
      top: "1rem",
      marginLeft: "auto",
      marginRight: "auto",
      left: "0",
      right: "0",
      zIndex: 1,
      backfaceVisibility: "hidden",
      transform: `perspective(1800px) rotateY(${state.card.front}deg)`,
      transition: "transform 0.8s ease-in-out",
      color: "white",
    },
    chip: {
      padding: "1rem 1rem 0 1rem",
      display: "flex",
      justifyContent: "space-between",
    },
    number: {
      fontSize: "1.5rem",
      textAlign: "center",
      height: "20%",
    },
    data: {
      margin: "0 1rem 0 1rem",
      paddingLeft: "5px",
      borderRadius: "15px",
      display: "flex",
      justifyContent: "space-between",
    },
    nDiv: {
      border: state.isActive.number ? "2px solid white" : "0",
      borderRadius: "15px",
      width: "80%",
      margin: "10px auto 0 auto",
    },
    name: {
      fontSize: "1.1rem",
      marginTop: "-0.8rem",
    },
    box1: {
      border: state.isActive.name ? "2px solid white" : "0",
      width: "70%",
      paddingLeft: "1rem",
      borderRadius: "15px",
    },
    box2: {
      border: state.isActive.expires ? "2px solid white" : "0",
      width: "20%",
      padding: "0 1rem 0 1rem",
      borderRadius: "15px",
    },
  };
  return (
    <div style={card.main} onClick={() => dispatch({ type: "flip" })}>
      <div style={card.chip}>
        <img src={chip} alt="chip" width="15%"></img>
        <img
          src={cards[Number(state.num[0]) || 0]}
          alt="chip"
          width="15%"
        ></img>
      </div>
      <div style={card.nDiv}>
        <p style={card.number}>{cardNum}</p>
      </div>
      <div style={card.data}>
        <div style={card.box1}>
          <p>Card Holder</p>
          <p style={card.name}>{state.name.toUpperCase()}</p>
        </div>
        <div style={card.box2}>
          <p>Expires</p>
          <p style={card.name}>
            {state.month}/{state.year}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardFront;
