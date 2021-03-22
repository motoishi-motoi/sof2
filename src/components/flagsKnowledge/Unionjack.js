import React from 'react';
import TopicDate from './topicComp/TopicDate';
import Share from '../Share';
import ScrollTop from '../ScrollToTopOnMount';

const Unionjack = (props) => {

	const targetKnowledge = props.knowledge.find((v) => String(v.name) === 'ユニオン・ジャック');

    return (
      <div className='flag-page'>
          
				<ScrollTop />
				<TopicDate mainImage = {props.mainImage} name = {targetKnowledge.name} knowledge = {props.knowledge}/>
				<Share url = {'https://sof.flaghistory.jp/' + targetKnowledge.url} title = {targetKnowledge.name + 'の国旗一覧と解説 | SOF'} />
      </div>
    );
  }

export default Unionjack;