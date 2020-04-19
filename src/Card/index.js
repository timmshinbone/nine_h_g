import React, { Component } from 'react';
import './index.css'
import cards from './cards.js'

function Card(props) {
	return(
		<div 
			className="card"
		>
			<p>{cards[1].name}</p>
			<p>{cards[1].suit}</p>
		</div>
	)
}


export default Card