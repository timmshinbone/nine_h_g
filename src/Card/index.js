import React, { useState } from 'react';
import './index.css'


function Card(props) {
	// const [showing, showCard] = useState(true)
	// console.log(showing);
	return(
			<div 
				className={props.showing ? 'face' : 'back'}
				onClick={() => props.onClick()}
			>
				<small>{props.name}{props.suit}</small>
				
			</div>
			
	)
}


export default Card