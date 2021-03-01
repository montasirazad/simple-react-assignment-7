import React from 'react';

const Player = (props) => {
    const {name , Age, role, Salary, Image} = props.player;
    const handleAddPlayer = props.handleAddPlayer;

    return (
        <div className='player-container'  >

            <div className="player-info">
            <img src={Image} alt=""/>
            <h2 className ='first-line'> {props.player.name} </h2>
            <h2 className ='first-line'><small>Age: {Age}</small></h2>
            <p className ='second-line'>  Playing role: {role}</p>
            <p className='second-line'>Salary: {Salary} BDT</p>
            </div>

            <div >
            <button onClick={() => handleAddPlayer(props.player)} className='add-player'>Add this player</button>
            </div>
 
        </div>
    );
};

export default Player;<h2>The player:</h2>