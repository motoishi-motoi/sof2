import React from 'react';
import Relation from './Relation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import Share from '../../Share';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Page from '../../Page';

const FlagDate = (props) => {

	const targetCountry = props.mainImage.find((v) => String(v.fullName) === props.name);

	const browserBack = () => {
		window.history.back(-1);
	}

	return(
		<article className = 'flag-date'>
			<Page />
			<Helmet 
				title={targetCountry.fullName + 'の国旗 | SOF'}
				link={[{ rel: "canonical", href: 'https://sof.flaghistory.jp/' + targetCountry.url}]}
				meta={[
					{ name: 'description', content: targetCountry.fullName + '国旗の解説や、合わせて見ると面白い旗を一覧で掲載しました。' },
					{property: 'twitter:description', content: targetCountry.fullName + '国旗の解説や、合わせて見ると面白い旗を一覧で掲載しました。'},
					{property: 'twitter:title', content: targetCountry.fullName + 'の国旗 | SOF'},
					{property: 'twitter:url', content: 'https://sof.flaghistory.jp/' + targetCountry.url},
					{name: 'twitter:image', content: 'https://sof.flaghistory.jp/' + targetCountry.ogp},
					{property: 'og:type', content: 'article'},
					{property: 'og:title', content: targetCountry.fullName + 'の国旗 | SOF'},
					{property: 'og:url', content: 'https://sof.flaghistory.jp/' + targetCountry.url},
					{property: 'og:image', content: 'https://sof.flaghistory.jp/' + targetCountry.ogp},
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
					{targetCountry.desc.map((desc) => {
						return (
							<p className='flag-date-desc' key = {desc}>{desc}</p>
						);
					})}
				</div>
			</div>
			{targetCountry.topics.length !== 0 &&
				<div className ="topics-box">
					<div className = "topics-button">
						<p className = "topics-caption">Tips</p>
							<ul>
								{targetCountry.topicsUrl.map((url, i) => {
									return (
										<li key = {url}>
											<Link to = {'/' + url}>{targetCountry.topics[i]}</Link>
										</li>
									);
								})}
							</ul>
					</div>
				</div>
			}
			<div className = 'flag-date-button'>
				<button className = 'detail'><a href = {targetCountry.link} target = '_blank' rel = 'noreferrer noopener'>{targetCountry.name + '国旗の詳細'}<FontAwesomeIcon icon={faExternalLinkAlt} /></a></button>
				<span className='close-link' onClick={() => {browserBack()}}><button className = 'close'>前のページに戻る</button></span>
			</div>
			<div style={{marginTop:'14px' , marginBottom:'42px'}}>
				<Share url = {'https://sof.flaghistory.jp/' + targetCountry.url} title = {targetCountry.fullName + 'の国旗 | SOF'} />
			</div>
			<Relation mainImage = {props.mainImage} name = {props.name}/>
			<p>⇒ <Link to = '/'>旗・国旗一覧に戻る</Link></p>
		</article>
	);

}

export default FlagDate