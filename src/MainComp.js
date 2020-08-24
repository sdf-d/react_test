import React from 'react';
import './MainComp.css';


function MainComp(props)
{
	const [text, setText] = React.useState("mytext")

	return (
		<div className="App-Header">
			{text}
		</div>
		);



}




export default MainComp;
