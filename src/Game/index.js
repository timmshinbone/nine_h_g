import React, { useState } from 'react';
import './index.css'
import Hand from '../Hand'
import Card from '../Card'
import cards from '../Card/cards.js'
// this.shuffle(cards.slice()),

export default function Game(){

	const [active, setActive] = useState(false)
	const [playerHands, setPlayerHands] = useState([])
	const [discardPile, setDiscardPile] = useState([])
	const [drawnCard, setDrawnCard] = useState(null)

	const shuffle = (arr) => {
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
	// const buildDeck = (arr) => {
	// 	let tripleDeck = []
	// 	for(let i = 0; i < 3; i++){
	// 		for(let k = 0; k < arr.length; k++){
	// 			tripleDeck.push(arr[k])
	// 		}
	// 	}
	// 	return shuffle(tripleDeck)
	// }

	const [deck, setDeck] = useState(shuffle(cards.slice()))

	const dealHand = () => {
		const pHand = []
		const discPile = []
		const newDeck = deck.slice()

		for(let i = 0; i < 10; i++){
			if(i < 9){
				let card = {name: newDeck[i].name, val:newDeck[i].val, suit: newDeck[i].suit, id: i, showing: newDeck[i].showing}
				pHand.push(card)
				newDeck.splice(i, 1)
			} else {
				let card = {name: newDeck[i].name, val:newDeck[i].val, suit: newDeck[i].suit, id: i, showing: true}
				discPile.push(card)
				newDeck.splice(i, 1)
			}
		}
		setDeck(newDeck)
		setPlayerHands(pHand)
		setActive(true)
		setDiscardPile(discPile)
	}

	const drawDeck = (card) => {
		if(drawnCard == null){
			console.log('this is the drawn card\n', card);
			card.showing = true
			let newDeck = deck.slice()
			newDeck.splice(0, 1)
			setDrawnCard(card)
			setDeck(newDeck)
		} else {
			console.log('you already got one');
		}
	}

	const drawDiscard = (card) => {
		if(drawnCard == null){
			let newDisc = discardPile.slice()
			console.log('this is the discard pile');
			console.log(newDisc);
			newDisc.splice(0, 1)
			setDrawnCard(card)
			setDiscardPile(newDisc)
		} else {
			console.log('you already got one');
		}
	}
	// const swapCard = (card) => {
	// 	console.log('the card clicked');
	// 	console.log(card);
	// 	console.log('discard pile\n', discardPile);
	// 	let drawn = drawnCard
	// 	let pHand = playerHands
	// 	pHand.splice(pHand.indexOf(card), 1, drawn);
	// 	setPlayerHands(pHand)
	// 	setDrawnCard(null)
	// 	const newDiscPile = [card].concat(discardPile)
	// 	setDiscardPile(newDiscPile)
	// 		// setRefresh(!refresh)
	// }

	const discardPick = () => {
		let newPile = discardPile
		newPile.unshift(drawnCard)
		console.log("discarded!");
		setDiscardPile(newPile)
		setDrawnCard(null)
	}

	return(
			<div className='game'>
				<div className='top-bar'>
					<h4>Nine Hole Golf</h4>
					<button onClick={() => dealHand()}>deal</button>
				</div>
				<div className='game-row'>
					{active
						?
					<div className='deck-and-disc'>
						<Card
							showing={deck[0].showing}
							name={deck[0].name}
							suit={deck[0].suit}
							onClick={() => drawDeck(deck[0])}/>
						<small>draw</small>
						<Card
							showing={true}
							name={
								discardPile.length > 0
								? discardPile[0].name : 'empty'}
							suit={
								discardPile.length > 0
								? discardPile[0].suit : null}
							onClick={
								drawnCard !== null
								? () => discardPick()
								: () => drawDiscard(discardPile[0])}
							drawnCard={drawnCard}
						/>
						<small>discard</small>
					</div>
					:
					null

					}
					{
						active
						? <Hand
							deck={playerHands}
							drawnCard={drawnCard}
							setDrawnCard={setDrawnCard}
							discardPile={discardPile}
							setDiscardPile={setDiscardPile}
							/>
						: null
					}

					<div className='card-selected'>
						{
							drawnCard
							? <Card
								showing={true}
								name={drawnCard.name}
								suit={drawnCard.suit}
								onClick={() => console.log(drawnCard)}
								drawnCard={drawnCard}
								/>
							: null
						}
					</div>
				</div>
			</div>
		)

}
// class Game extends Component {
// 	constructor(props){
// 		super(props)
// 		this.state = {
// 			round: 0,
// 			active: false,
// 			deck: this.buildDeck(cards.slice()),
// 			players:[],
// 			playerHands: [],
// 			discardPile: [],
// 			drawnCard: null
// 		}
// 	}
// 	buildDeck(arr){
// 		let tripleDeck = []
// 		for(let i = 0; i < 3; i++){
// 			for(let k = 0; k < arr.length; k++){
// 				tripleDeck.push(arr[k])
// 			}
// 		}
// 		return this.shuffle(tripleDeck)
// 	}
// 	shuffle(arr){
// 		//THIS IS FISCHER-YATES SHUFFLE
// 		//declare variables to use
// 		let m = arr.length
// 		let t = null
// 		let i = null
// 		//while there exist cards to shuffle
// 		while(m) {
// 			//pick a remaining card
// 			i = Math.floor(Math.random() * m--)
// 			//swap it with the current card
// 			t = arr[m]
// 			arr[m] = arr[i];
// 			arr[i] = t;
// 		}
// 		return arr
// 	}
// 	dealHand(){
// 		const pHand = []
// 		const discardPile = []
// 		const newDeck = this.buildDeck(cards.slice())
// 		// console.log('this is the deck before deal\n', newDeck);
// 		for(let i = 0; i < 10; i++){
// 			if(i < 9){
// 				let card = {name: newDeck[i].name, suit: newDeck[i].suit, id: i, showing: newDeck[i].showing}
// 				pHand.push(card)
// 				newDeck.splice(i, 1)
// 			} else {
// 				let card = {name: newDeck[i].name, suit: newDeck[i].suit, id: i, showing: true}
// 				discardPile.push(card)
// 				newDeck.splice(i, 1)
// 			}
// 		}
// 		this.setState({
// 			deck: newDeck,
// 			playerHands: pHand,
// 			active: true,
// 			discardPile: discardPile

// 		})
// 	}
// 	drawDeck(card){
// 		if(this.state.drawnCard == null){
// 			console.log('this is the drawn card\n', card);
// 			card.showing = true
// 			let newDeck = this.state.deck.slice()
// 			newDeck.splice(0, 1)
// 			this.setState({
// 				drawnCard: card,
// 				deck: newDeck
// 			})
// 		} else {
// 			console.log('you already got one');
// 		}
// 	}

// 	drawDiscard(card){
// 		if(this.state.drawnCard == null){
// 			let newDiscDeck = this.state.discardPile.slice()
// 			console.log('this is the discard pile deck');
// 			console.log(newDiscDeck);
// 			newDiscDeck.splice(0, 1)
// 			this.setState({
// 				drawnCard: card,
// 				discardPile: newDiscDeck
// 			})
// 		} else {
// 			console.log('you already got one');
// 		}

// 	}

// 	render(){
// 		console.log('length of the deck in state');
// 		console.log(this.state.deck.length)

// 		// console.log('this is playerHand\n', this.state.playerHand);
// 		// console.log('this is the discardPile\n', this.state.discardPile);
// 		// console.log('this is the deck\n', this.state.deck);
// 		return(
// 			<div className='game'>
// 				<div className='top-bar'>
// 					<h4>Nine Hole Golf</h4>
// 					<button onClick={() => this.dealHand()}>deal</button>
// 				</div>
// 				<div className='game-row'>
// 					{this.state.active
// 						?
// 					<div className='deck-and-disc'>
// 						<Card
// 							showing={this.state.deck[0].showing}
// 							name={this.state.deck[0].name}
// 							suit={this.state.deck[0].suit}
// 							onClick={() => this.drawDeck(this.state.deck[0])}/>
// 						<small>draw</small>
// 						<Card
// 							showing={true}
// 							name={this.state.discardPile.length > 0 ? this.state.discardPile[0].name : 'empty'}
// 							suit={this.state.discardPile.length > 0 ? this.state.discardPile[0].suit : null}
// 							onClick={() => this.drawDiscard(this.state.discardPile[0])}
// 							drawnCard={this.state.drawnCard}
// 						/>
// 						<small>discard</small>
// 					</div>
// 					:
// 					null

// 					}
// 					{
// 						this.state.active
// 						? <Hand
// 							deck={this.state.playerHands}
// 							drawnCard={this.state.drawnCard}
// 							/>
// 						: null
// 					}

// 					<div className='card-selected'>
// 						{
// 							this.state.drawnCard
// 							? <Card
// 								showing={true}
// 								name={this.state.drawnCard.name}
// 								suit={this.state.drawnCard.suit}
// 								onClick={() => console.log(this.state.drawnCard)}
// 								drawnCard={this.state.drawnCard}
// 								/>
// 							: null
// 						}
// 					</div>
// 				</div>
// 			</div>
// 		)
// 	}
// }

// export default Game
