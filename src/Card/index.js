import React from 'react';
import './index.css'


function Card(props) {
	console.log('this is props in Card');
	console.log(props);
	return(
		<div 
			className="card"
		>
			<p>{props.name}</p>
			<p>{props.suit}</p>
		</div>
	)
}


export default Card