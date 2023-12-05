import { useState } from 'react'
import React from 'react'
import OptionButton from '../OptionButton/OptionButton.jsx'
import CalcButtons from '../CalcButtons/CalcButtons.jsx'
const MAX_WIN_NUMBER = 10
let RangeRandom = () => Math.floor(Math.random() * MAX_WIN_NUMBER)
function Player(props) {
    const [steps, setsteps] = useState(0)
    const [number, setnumber] = useState(RangeRandom)
    let bb = (localStorage.getItem(props.user.userName) === null)
    let vv
   // if (props.user.games === null)
        vv = (bb) ? [] : JSON.parse(localStorage.getItem(props.user.userName))
  //  else vv = props.user.games
    const [games, setgames] = useState(vv)
    let getEnabled = () => {
        for (let i = 0; i < props.players.length; i++) {
            if (props.players[i].userName === props.user.userName)
                return props.players[i].enabled;
        }
    }
    function displayGames() {
        let display = "";
        games.map((game) => display = display + game + ',')
        return display
    }
    return (<>
        <div>gamer name:  {props.user.userName}</div>
        {!props.passive ? <><div>press buttons to reach 100: {number}</div><div> steps: {steps}</div></> : <div>press Start to start game!</div>}

        <div> Previous Game Steps: {displayGames()}</div>
        <div>
            {(!props.passive && getEnabled() == true) ? <CalcButtons updateWinners={props.updateWinners}changePlayerToPassive={props.changePlayerToPassive} name={props.user.userName} changeEnabeld={props.changeEnabeld} games={games} setgames={setgames} MAX_WIN_NUMBER={MAX_WIN_NUMBER} setplayers={props.setplayers} players={props.players} user={props.user} steps={steps} setsteps={setsteps}  number={number} setnumber={setnumber} /> : null}
            {props.passive ? <OptionButton removeItemFromPassivePlayers={props.removeItemFromPassivePlayers} passivePlayers={props.passivePlayers} setpassivePlayers={props.setpassivePlayers} changePlayerToActive={props.changePlayerToActive} RangeRandom={RangeRandom} name={props.user.userName} games={games} setnumber={setnumber} players={props.players} setsteps={setsteps} setplayers={props.setplayers} /> : null}
        </div>
    </>)
} export default Player