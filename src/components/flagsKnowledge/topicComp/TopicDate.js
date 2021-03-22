import React from 'react';
import TopicRelation from './TopicRelation';
import Share from '../../Share';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Page from '../../Page';

const TopicDate = (props) => {

	const targetKnowledge = props.knowledge.find((v) => String(v.name) === props.name);


	return(
		<article className = 'flag-date'>
			<Page />
			<Helmet 
				title={targetKnowledge.name + 'の国旗一覧と解説 | SOF'}
				link={[{ rel: "canonical", href: 'https://sof.flaghistory.jp/' + targetKnowledge.url}]}
				meta={[
					{ name: 'description', content: targetKnowledge.name + 'の解説と国旗の一覧' },
					{property: 'twitter:description', content: targetKnowledge.name + 'の解説と国旗の一覧'},
					{property: 'twitter:title', content: targetKnowledge.name + 'の国旗一覧と解説 | SOF'},
					{property: 'twitter:url', content: 'https://sof.flaghistory.jp/' + targetKnowledge.url},
					{name: 'twitter:image', content: 'https://sof.flaghistory.jp/' + targetKnowledge.ogp},
					{property: 'og:type', content: 'article'},
					{property: 'og:title', content: targetKnowledge.name + 'の国旗一覧と解説 | SOF'},
					{property: 'og:url', content: 'https://sof.flaghistory.jp/' + targetKnowledge.url},
					{property: 'og:image', content: 'https://sof.flaghistory.jp/' + targetKnowledge.ogp},
					{property: 'og:description', content: targetKnowledge.name + 'の解説と国旗の一覧'},
				]}
			/>
			<div className = 'flag-date-name'>
				<h2>{targetKnowledge.name}</h2>
				<p>{targetKnowledge.englishName}</p>
			</div>
			{targetKnowledge.image !== '' &&
            <div className = 'topic-flag-image'>
                <img src = {targetKnowledge.image} alt = {targetKnowledge.name} />
            </div>
			}
			<div className = 'flag-date-info'>
				<div className = 'flag-date-intro'>
					{targetKnowledge.desc.map((desc) => {
						return (
							<p className='flag-date-desc' key = {desc}>{desc}</p>
						);
					})}
				</div>
			</div>
			<div style={{marginTop:'14px' , marginBottom:'42px'}}>
				<Share url = {'https://sof.flaghistory.jp/' + targetKnowledge.url} title = {targetKnowledge.name + 'の国旗一覧と解説 | SOF'} />
			</div>
			<TopicRelation mainImage = {props.mainImage} name = {props.name} knowledge = {props.knowledge}/>
			<p>⇒ <Link to = '/'>ホームに戻る</Link></p>
		</article>
	);

}

export default TopicDate