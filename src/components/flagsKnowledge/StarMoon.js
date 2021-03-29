import React from 'react';
import TopicDate from './topicComp/TopicDate';
import Share from '../Share';
import ScrollTop from '../ScrollToTopOnMount';

const StarMoon = (props) => {

	const targetKnowledge = props.knowledge.find((v) => String(v.name) === '三日月と星');

    return (
      <div className='flag-page'>
          
				<ScrollTop />
				<TopicDate mainImage = {props.mainImage} name = {targetKnowledge.name} knowledge = {props.knowledge}/>
				<Share url = {'https://sof.flaghistory.jp/' + targetKnowledge.url} title = {targetKnowledge.title} />
      </div>
    );
  }

export default StarMoon;