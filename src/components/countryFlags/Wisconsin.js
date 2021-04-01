import React from 'react';
import FlagDate from './pageComp/FlagDate';
import Share from '../Share';
import ScrollTop from '../ScrollToTopOnMount';

const Wisconsin = (props) => {

	const targetCountry = props.mainImage.find((v) => String(v.fullName) === 'ウィスコンシン州');

    return (
      <div className='flag-page'>
				<ScrollTop />
				<FlagDate mainImage = {props.mainImage} name = {targetCountry.fullName} />
				<Share url = {'https://sof.flaghistory.jp/' + targetCountry.url} title = {targetCountry.fullName + 'の州旗 | SOF'} />
      </div>
    );
  }

export default Wisconsin;