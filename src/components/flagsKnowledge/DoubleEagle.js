import React from 'react';
import TopicDate from './topicComp/TopicDate';
import Share from '../Share';
import ScrollTop from '../ScrollToTopOnMount';

const DoubleEagle = (props) => {

	const targetKnowledge = props.knowledge.find((v) => String(v.name) === '双頭の鷲');

    return (
      <div className='flag-page'>
          
				<ScrollTop />
				<TopicDate mainImage = {props.mainImage} name = {targetKnowledge.name} knowledge = {props.knowledge}/>
				<Share url = {'https://sof.flaghistory.jp/' + targetKnowledge.url} title = {targetKnowledge.title} />
      </div>
    );
  }

export default DoubleEagle;