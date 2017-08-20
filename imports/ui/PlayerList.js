import React from 'react';
import Player from './Player';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';

export default class PlayerList extends React.Component{

  //Very common pattern used in development
  renderPlayers(){
    if(this.props.players.length === 0){
      return (
        <div className="item">
          <p className="item__message item__message--empty">Add a player to start</p>
        </div>
      );
    } else{
      return this.props.players.map((player) => {
        return <Player key={player._id} player={player}/>;
      });
    }
  }

  render(){
    return(
      <div>
        <FlipMove duration={250} easing="ease-out" maintainContainerHeight={true}>
          {this.renderPlayers()}
        </FlipMove>
      </div>
    );
  }
}

PlayerList.propTypes = {
  players: PropTypes.array.isRequired
}
