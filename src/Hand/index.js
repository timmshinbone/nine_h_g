import React, { useState } from 'react';
import './index.css'
import Card from '../Card'

export default function Hand(props){
	const [hand, setHand] = useState(props.deck)
	let [showingCount, setShowingCount] = useState(0)
	const [rowPick, setRowPick] = useState(true)
	const [handScore, setHandScore] = useState(0)

	const placeCards = (i) => {
		// const deck = this.state.deck
		//deck is the player's hand deck from Game State(switch to Round state)
		return(
			<Card
				index = {i}
				name={hand[i].name}
				suit={hand[i].suit}
				val={hand[i].val}
				showing={hand[i].showing}
				onClick={
							props.drawnCard == null
							?
								() => rowFlip(hand[i])
							:
								() => swapCard(hand[i])

						}
			/>
		)
	}
	const rowFlip = (card) => {
		const pHand = hand
		if(rowPick === true){
			//refactor this so that it changes when a round activates rowpick
			//rowpick is it's own three click function that gauges the placement
			//of the cards.
			if(showingCount < 2){
				console.log(hand);
				console.log(card);
				pHand[pHand.indexOf(card)].showing = true
				console.log(card);
				console.log(showingCount);
				setShowingCount(showingCount += 1)
				setHand(pHand)

			} else {
				console.log(hand);
				console.log(card);
				pHand[pHand.indexOf(card)].showing = true
				console.log(hand);
				setShowingCount(showingCount += 1)
				console.log(showingCount);
				setHand(pHand)
				setRowPick(false)
			}

		} else {
			console.log("It's not time yet!");
		}
	}

	const swapCard = (card) => {
		if(countShowing() !== 9){
			console.log('the card clicked');
			console.log(card);
			console.log('discard pile\n', props.discardPile);
			let drawn = props.drawnCard
			let pHand = hand
			drawn.showing = true
			pHand.splice(pHand.indexOf(card), 1, drawn);
			let newPile = props.discardPile.slice()
			newPile.unshift(card)
			setHand(pHand)
			props.setDrawnCard(null)
			props.setDiscardPile(newPile)
		} else {
			console.log("you've gone out!");
		}

		// setRefresh(!refresh)

	}
	const countShowing = () => {
		let total = 0
		for(let i = 0; i < hand.length; i++){
			if(hand[i].showing){
				total++
			} else {
				console.log('not showing');
			}
		}
		return total
	}
	const countScore = (cardArr) => {
		let scoreTotal = 0
		const deadRows = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8]
		]
		if(countShowing() !== 9){
			console.log('not ready to score cards yet');
		} else {
			for(let i = 0; i < deadRows.length; i++){
				const [a, b, c] = deadRows[i]
				if(cardArr[a].name && cardArr[a].name === cardArr[b].name && cardArr[a].name === cardArr[c].name){
					if(cardArr[a].name !== 'Joker' && cardArr[b].name !== 'Joker' && cardArr[c].name !== 'Joker') {
						cardArr[a].val = 0
						cardArr[b].val = 0
						cardArr[c].val = 0
					}
					console.log('This is cardArr: ', cardArr)
					console.log('cardArr values')
					cardArr.forEach(card => console.log(card.val))
					console.log('this is the hand', hand)
				}
			}
			for(let b = 0; b < cardArr.length; b++){
				scoreTotal += cardArr[b].val
			}
			console.log('this is the scoreTotal');
			console.log(scoreTotal);
		}
		// setHandScore(scoreTotal)
	}
	console.log('this is cards in hand', hand);
	let handCopy = hand.slice()
	console.log('this is countShowing func', countShowing())
	countScore(handCopy)
	return (
		<div className="player-hand">
			<div className="board-row">
				{placeCards(0)}
				{placeCards(1)}
				{placeCards(2)}
			</div>
			<div className="board-row">
				{placeCards(3)}
				{placeCards(4)}
				{placeCards(5)}
			</div>
			<div className="board-row">
				{placeCards(6)}
				{placeCards(7)}
				{placeCards(8)}
			</div>
			<small>Score: {handScore}</small>
		</div>

	)
}


// class Hand extends Component {
// 	constructor(props){
// 		super(props)
// 		this.state={
// 			deck: this.props.deck,
// 			players: [
// 				{name: 'timm', score: 0}
// 			],
// 			cardsInDeck: [],
// 			cardsInHands: [],
// 			showingCount: 0,
// 			rowPick: true,
// 		}
// 	}

// 	placeCards(i){
// 		const deck = this.state.deck
// 		//deck is the player's hand deck from Game State(switch to Round state)
// 		return(
// 			<Card
// 				index = {i}
// 				name={deck[i].name}
// 				suit={deck[i].suit}
// 				val={deck[i].val}
// 				showing={deck[i].showing}
// 				onClick={
// 							this.props.drawnCard == null
// 							?
// 								() => this.rowFlip(deck[i])
// 							:
// 								() => this.swapCard(deck[i])

// 						}
// 			/>
// 		)
// 	}

// 	rowFlip(card){
// 		const rowPick = this.state.rowPick
// 		let showingCount = this.state.showingCount
// 		const pHand = this.state.deck
// 		if(this.state.rowPick === true){
// 			//refactor this so that it changes when a round activates rowpick
// 			//rowpick is it's own three click function that gauges the placement
// 			//of the cards.
// 			if(showingCount < 2){
// 				console.log(card);
// 				pHand[pHand.indexOf(card)].showing = !card.showing
// 				console.log(showingCount);
// 				this.setState({
// 					deck: this.props.deck,
// 					showingCount: this.state.showingCount += 1
// 				})
// 			} else {
// 				console.log(card);
// 				pHand[pHand.indexOf(card)].showing = !card.showing
// 				console.log(showingCount);
// 				this.setState({
// 					deck: this.props.deck,
// 					showingCount: this.state.showingCount += 1,
// 					rowPick: false
// 				})
// 			}

// 		} else {
// 			console.log("It's not time yet!");
// 		}
// 	}

// 	swapCard(card){
// 		console.log('the card clicked');
// 		console.log(card);
// 		let drawn = this.props.drawnCard
// 		let pHand = this.state.deck
// 		console.log('this is the whole hand');
// 		console.log(pHand);
// 		console.log('this is the card clicked');
// 		console.log(pHand[pHand.indexOf(card)]);
// 		console.log('this is the card drawn');
// 		console.log(drawn);
// 		console.log('is the card showing');
// 		console.log(card.showing);

// 		pHand.splice(pHand.indexOf(card), 1, drawn);
// 		// console.log(pHand);
// 		this.setState({
// 			deck: pHand,
// 		})

// 	}

// 	render(){

// 		return (
// 			<div className="player-hand">
// 				<div className="board-row">
// 					{this.placeCards(0)}
// 					{this.placeCards(1)}
// 					{this.placeCards(2)}
// 				</div>
// 				<div className="board-row">
// 					{this.placeCards(3)}
// 					{this.placeCards(4)}
// 					{this.placeCards(5)}
// 				</div>
// 				<div className="board-row">
// 					{this.placeCards(6)}
// 					{this.placeCards(7)}
// 					{this.placeCards(8)}
// 				</div>
// 			</div>

// 		)
// 	}
// }

// export default Hand
