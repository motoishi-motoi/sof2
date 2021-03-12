import React from 'react';


const Flags = (props) =>{


	return(

		<div className = {props.mainFlagImage.id + 'Box flagBox'} >
			<div className ='flagImageBox'>
				<img className = {props.mainFlagImage.id + ' countryFlag'} src ={props.mainFlagImage.image} alt = {props.mainFlagImage.name + 'の国旗'} />
			</div>
			<div className = 'countryName'>{props.mainFlagImage.name}</div>
			<div className = 'attributeBox'>
				<div className = 'areaBox'>
					<span className='areaName'>{props.mainFlagImage.area}</span>                    
				</div>
				<div className = 'unitedBox'>
					<span className={props.mainFlagImage.groupingCSS}>{props.mainFlagImage.kokuren}</span>                    
				</div>
			</div>
		</div>
	);

}

export default Flags;