import React, { Component } from 'react';
import './index.css'
import Hand from '../Hand'
import Card from '../Card'
import cards from '../Card/cards.js'

class Game extends Component {
	constructor(props){
		super(props)
		this.state = {
			round: 0,
			active: false,
			deck: this.shuffle(cards.slice()),
			playerHand: [],
			discardPile: []
		}
	}
	shuffle(arr){
		//THIS IS FISCHER-YATES SHUFFLE
		//declare variables to use
		let m = arr.length 
		let t = null 
		let i = null
		//while there exist cards to shuffle
		while(m) {
			//pick a remaining card
			i = Math.floor(Math.random() * m--)
			//swap it with the current card
			t = arr[m]
			arr[m] = arr[i];
			arr[i] = t;
		}
		return arr
	}
	dealHand(){
		const pHand = []
		const discardPile = []
		const newDeck = this.state.deck.slice()
		for(let i = 0; i < 10; i++){
			if(i < 9){
				let card = newDeck[i]
				pHand.push(card)
				newDeck.splice(i, 1)
			} else {
				let card = newDeck[i]
				discardPile.push(card)
				newDeck.splice(i, 1)
			}
		}
		this.setState({
			deck: newDeck,
			playerHand: pHand,
			active: true,
			discardPile: discardPile

		})
		console.log('this is the deck');
		console.log(this.state.deck);
		console.log('this is the player hand');
		console.log(this.state.playerHand);
	}
	render(){
		console.log('this is playerHand\n', this.state.playerHand);
		console.log('this is the discardPile\n', this.state.discardPile);
		console.log('this is the deck\n', this.state.deck);
		return(
			<div className='game'>
				<div className='top-bar'>
					<h4>Nine Hole Golf</h4>
					<button onClick={() => this.dealHand()}>deal</button>
				</div>
				<div className='game-row'>
					{this.state.active
						?
					<div className='deck-and-disc'>
						<Card />
						<small>draw</small>
						<Card 
							showing={true} 
							name={this.state.discardPile[0].name}
							suit={this.state.discardPile[0].suit}
						/>
						<small>discard</small>
					</div>
					:
					null

					}
					{this.state.active ? <Hand deck={this.state.playerHand} showing={this.state.active}/> : null}
					
					<div className='other-hands'>
					</div>
				</div>
			</div>
		)
	}
}

export default Game