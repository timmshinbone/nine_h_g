import React from 'react';
import './index.css'


function Card(props) {

	return(
			<div 
				className={props.showing ? 'face' : 'back'}
				onClick={props.onClick}
			>
				<small>{props.name}</small>
				<small>{props.suit}</small>
			</div>
			
	)
}


export default Card