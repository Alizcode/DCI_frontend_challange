
const Button = ({state, dispatch}) => {
    const sendData = async () => {
        if(state.num.trim() === '' ||  state.name.trim() === '' || state.month.trim() === '' ||   state.year.trim() === '' ||   state.cvv.trim() === '') {
            dispatch({type: 'response', payLoad: 'Please fill out all the fields'})
        } else {
        let data = {
            cardNumber: state.num,
            name: state.name,
            month: state.month,
            year: state.year,
            cvv: state.cvv
        }
        console.log(data)
        const res = await fetch('http://localhost:3000/myapi', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        if(res) {
            const ans = await res.json();
            console.log(ans);
            dispatch({type: 'response', payLoad: ans.message})
            dispatch({type: 'clear'})
        }
    }
    }
    const button= {
        button: {
            width: '80%',
            padding: '0.5rem',
            color: 'white',
            backgroundColor: '#0055D4',
            borderRadius: '5px',
            boxShadow: '1px 2px 6px #D3D3D3'
            
        },
    }
return(
    <button style={button.button} onClick={sendData}>Submit</button>
)
}

export default Button