import bg from '../assets/bg.jpeg'
import visa from '../assets/visa.png'
import discover from '../assets/ds.png'
import master from '../assets/mastercard.png'
const CardBack = ({state, dispatch}) => {
    const cards = [master, master, master, master, visa, discover, master, master, master, master];
    const card = {
        main: {
            backgroundImage: `url(${bg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            boxShadow: '2px 2px 4px #000000',
            width: '80%',
            maxWidth: '25rem',
            height: '14rem',
            borderRadius: '12px',
            position: 'absolute',
            top:'1rem',
            marginLeft: 'auto',
            marginRight: 'auto',
            left: '0',
            right: '0',
            zIndex: 1 ,
            backfaceVisibility: 'hidden',
            transform: `perspective(1800px) rotateY(${state.card.back}deg)`,
            transition: 'transform 0.8s ease-in-out',
        },
        black: {
            width: '100%',
            background: 'black',
            height: '2.2rem',
            marginTop: '2rem' 
        },
        cvv: {
            textAlign: 'right',
            color: 'white',
            marginBottom: '-2rem',
            fontSize: '1rem',
            paddingRight: '0.7rem'
        },
        num: {
            textAlign: 'right',
            padding: '0.8rem',
            fontSize: '0.9rem'
        },
        white: {
            width: '100%',
            background: 'white',
            height: '3rem',
            marginTop: '2rem' 
        },
        img: {
            padding: '1rem',
        },
        imgOuter: {
            display: 'flex',
            justifyContent: 'flex-end'
        }

    }
    return(
        <div style={card.main} onClick={() => dispatch({type: 'flop'})}>
            <div style={card.black}>Back</div>
            <div>
                <p style={card.cvv}>CVV</p>
                <div style={card.white}><p style={card.num}>{state.cvv}</p></div>
            </div>
            <div style={card.imgOuter}><img style={card.img} src={cards[Number(state.num[0]) || 0]} alt='chip' width='18%' ></img></div>
        </div>
    )
}

export default CardBack