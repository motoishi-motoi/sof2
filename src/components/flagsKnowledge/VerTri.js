import React from 'react';
import TopicDate from './topicComp/TopicDate';
import Share from '../Share';
import ScrollTop from '../ScrollToTopOnMount';

const Unionjack = (props) => {

	const targetKnowledge = props.knowledge.find((v) => String(v.name) === '縦三色旗');

    return (
      <div className='flag-page'>
          
				<ScrollTop />
				<TopicDate mainImage = {props.mainImage} name = {targetKnowledge.name} knowledge = {props.knowledge}/>
				<Share url = {'https://sof.flaghistory.jp/' + targetKnowledge.url} title = {targetKnowledge.title} />
      </div>
    );
  }

export default Unionjack;