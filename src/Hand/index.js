import React, { Component } from 'react';
import './index.css'
import Card from '../Card'
import cards from '../Card/cards.js'

class Hand extends Component {
	constructor(props){
		super(props)
	}

	deal(i){
		return(
			<Card 
				name={this.props.deck[i].name}
				suit={this.props.deck[i].suit}
				val={this.props.deck[i].val}
				showing={this.props.showing}
				onClick={() => this.handleClick(this.props.deck[i])}
			/>
		)
	}
	handleClick(card){
		console.log(card);
		card.showing = !card.showing
	}

	render(){

		return (
			<div className="player-hand">
				<div className="board-row">
					{this.deal(0)}
					{this.deal(1)}
					{this.deal(2)}
				</div>
				<div className="board-row">
					{this.deal(3)}
					{this.deal(4)}
					{this.deal(5)}
				</div>
				<div className="board-row">
					{this.deal(6)}
					{this.deal(7)}
					{this.deal(8)}
				</div>
			</div>

		)
	}
}

export default Hand