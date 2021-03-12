import React from 'react';
import Relation from './Relation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'

const FlagDate = (props) => {

	const targetCountry = props.mainImage.find((v) => String(v.fullName) === props.name);
	
	return(
		<div className = 'flag-date'>
			<div className = {targetCountry.id + "-flag-date flag-date-name"}>
				<h2>{targetCountry.fullName}</h2>
				<p>{targetCountry.officialName}</p>
			</div>
			<div className = 'flag-date-column'>
				<div className = 'flag-date-image'>
					<a href = {targetCountry.image} target='_blank' rel='noopener noreferrer' >
						<img className = {targetCountry.id + 'Date flag-date-image-svg'} src ={targetCountry.image} alt = {targetCountry.name + 'の国旗'} />
					</a>
				</div>
				<div className = 'flag-date-location'>
					<img className = {targetCountry.id + 'Map flag-date-map-image'} src ={targetCountry.location} alt = {targetCountry.name + 'の場所'} />
				</div>
			</div>
			<div className = 'flag-date-info'>
				<div className = 'flag-date-intro'>
					<p className='flag-date-desc'>{targetCountry.desc[0]}</p>
					<p className='flag-date-desc'>{targetCountry.desc[1]}</p>
					<p className='flag-date-desc'>{targetCountry.desc[2]}</p>
				</div>
			</div>
			<div className = 'flag-date-button'>
				<button className = 'detail'><a href = {targetCountry.link} target = '_blank' rel = 'noreferrer noopener'>{targetCountry.name + '国旗の詳細'}<FontAwesomeIcon icon={faExternalLinkAlt} /></a></button>
				<Link to = '/' className = 'close-link'><button className = 'close'>ホームに戻る</button></Link>
			</div>
			<Relation mainImage = {props.mainImage} name = {props.name}/>
		</div>
	);

}

export default FlagDate