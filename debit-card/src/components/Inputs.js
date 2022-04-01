const Inputs = ({state, dispatch}) =>{
   // console.log(cardNum)
    const inputs = { main: {
             backgroundColor: 'white',
            width: '95vw',
            maxWidth: '30rem',
            height: '25rem',
            position: 'absolute',
            top: '11rem',
            left: '0',
            right:'0',
            marginLeft: 'auto',
            marginRight: 'auto',
        },
        inputsDiv: {
            paddingTop: '5rem'
    },
    ii: {
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
        maxWidth: '25rem',
        margin: 'auto',
        padding: '1rem',
        
        
    },

    }
    
    return(
        <div style={inputs.main}>
            <div>

            </div>
            <div style={inputs.inputsDiv}>
            <div style={inputs.ii}>
                <label>Card Number</label>
                <input value={state.num}
                onFocus={() => dispatch({type: 'numberActive'})}
                onBlur={() => dispatch({type: 'numberDeactive'})}
                onChange={(e) => {
                    if(e.target.value.length === 17) return false;
                    dispatch({type: 'number', payLoad: e.target.value})
                }} type='number' maxLength='9999999999999999' style={{borderRadius: '4px', padding: '10px', border: '2px, solid, blue'}}></input>
            </div>
            <div style={inputs.ii}>
                <label>Card Holder</label>
                <input
                onChange={(e) => dispatch({type: 'name', payLoad: e.target.value})}
                onFocus={() => dispatch({type: 'nameActive'})}
                onBlur={() => dispatch({type: 'nameDeactive'})}
                maxLength='22'
                 style={{borderRadius: '4px', padding: '10px', border: '2px, solid, blue'}}></input>
            </div>
            <div style={{margin: 'auto', width: '80%', maxWidth: '25rem', display: 'flex', justifyContent: 'space-between'}}>
                <div style={{display: 'flex', flexDirection:'column', width: '31%', }}>
                <label>Expiration Date</label>
                <select
                onFocus={() => dispatch({type: 'expireActive'})}
                onBlur={() => dispatch({type: 'expireDeactive'})}
                onChange={(e) => dispatch({type: 'month', payLoad: e.target.value})}
                style={{borderRadius: '4px', backgroundColor: 'white', padding: '10px', border: '2px, solid, blue'}}>
    <option value=''>Month</option>
    <option value='01'>1</option>
    <option value='02'>2</option>
    <option value='03'>3</option>
    <option value='04'>4</option>
    <option value='05'>5</option>
    <option value='06'>6</option>
    <option value='07'>7</option>
    <option value='08'>8</option>
    <option value='09'>9</option>
    <option value='10'>10</option>
    <option value='11'>11</option>
    <option value='12'>12</option>
    </select> 
                </div>

                <div style={{width: '31%', display: 'flex', flexDirection: 'column'}}>
                    <label style={{visibility: 'hidden'}}>_</label>
                <select
                                onChange={(e) => dispatch({type: 'year', payLoad: e.target.value})}
                                onFocus={() => dispatch({type: 'expireActive'})}
                                onBlur={() => dispatch({type: 'expireDeactive'})}
                style={{borderRadius: '4px', backgroundColor: 'white', padding: '10px', border: '2px, solid, blue'}}>
    <option value=''>Year</option>
    <option value='2022'>2022</option>
    <option value='2023'>2023</option>
    <option value='2024'>2024</option>
    <option value='2025'>2025</option>
    <option value='2026'>2026</option>
    <option value='2027'>2027</option>
   
    </select> 

                </div>

                <div style={{display: 'flex', flexDirection:'column', width: '31%'}}>
                <label>CVV</label>
                <input
                onChange={(e) => dispatch({type: 'cvv', payLoad: e.target.value})}
                onFocus={() => dispatch({type: 'flip'})} onBlur={()=> dispatch({type: 'flop'})}
         type='number' style={{borderRadius: '4px', padding: '10px', border: '2px, solid, blue', WebkitAppearance: 'textfield'}}></input>

                </div>
            </div>

            </div>
        </div>
    )
}

export default Inputs