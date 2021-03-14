import React from 'react';
import Relation from './Relation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'
import Share from '../../Share';
import { Helmet } from 'react-helmet';
import Page from '../../Page';

const FlagDate = (props) => {

	const targetCountry = props.mainImage.find((v) => String(v.fullName) === props.name);

	return(
		<div className = 'flag-date'>
			<Page />
			<Helmet 
				title={targetCountry.fullName + 'の国旗 | SOF'}
				link={[{ rel: "canonical", href: 'https://laughing-volhard-e0a9d7.netlify.app/' + targetCountry.url}]}
				meta={[
					{ name: 'description', content: targetCountry.fullName + '国旗の解説や、合わせて見ると面白い旗を一覧で掲載しました。' },
					{property: 'twitter:description', content: targetCountry.fullName + '国旗の解説や、合わせて見ると面白い旗を一覧で掲載しました。'},
					{property: 'twitter:title', content: targetCountry.fullName + 'の国旗 | SOF'},
					{property: 'twitter:url', content: 'https://laughing-volhard-e0a9d7.netlify.app/' + targetCountry.url},
					{name: 'twitter:image', content: 'https://laughing-volhard-e0a9d7.netlify.app/' + targetCountry.ogp},
					{property: 'og:type', content: 'article'},
					{property: 'og:title', content: targetCountry.fullName + 'の国旗 | SOF'},
					{property: 'og:url', content: 'https://laughing-volhard-e0a9d7.netlify.app/' + targetCountry.url},
					{property: 'og:image', content: 'https://laughing-volhard-e0a9d7.netlify.app/' + targetCountry.ogp},
					{property: 'og:description', content: targetCountry.fullName + '国旗の解説や、合わせて見ると面白い旗を一覧で掲載しました。'},
				]}
			/>
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
					<div className = 'areaBox'>
						<span className='areaName'>{targetCountry.area}</span>
						<span style={{'marginLeft': '12px'}} className={targetCountry.groupingCSS}>{targetCountry.kokuren}</span>                                        
					</div>
					<p className='flag-date-desc'>{targetCountry.desc[0]}</p>
					<p className='flag-date-desc'>{targetCountry.desc[1]}</p>
					<p className='flag-date-desc'>{targetCountry.desc[2]}</p>
				</div>
			</div>
			<div className = 'flag-date-button'>
				<button className = 'detail'><a href = {targetCountry.link} target = '_blank' rel = 'noreferrer noopener'>{targetCountry.name + '国旗の詳細'}<FontAwesomeIcon icon={faExternalLinkAlt} /></a></button>
				<Link to = '/' className = 'close-link'><button className = 'close'>ホームに戻る</button></Link>
			</div>
			<div style={{marginTop:'14px' , marginBottom:'42px'}}>
				<Share url = {'https://sof.flaghistory.jp/' + targetCountry.url} title = {targetCountry.fullName + 'の国旗 | SOF'} />
			</div>
			<Relation mainImage = {props.mainImage} name = {props.name}/>
		</div>
	);

}

export default FlagDate