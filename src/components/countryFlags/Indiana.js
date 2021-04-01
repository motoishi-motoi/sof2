import React from 'react';
import FlagDate from './pageComp/FlagDate';
import Share from '../Share';
import ScrollTop from '../ScrollToTopOnMount';

const Indiana = (props) => {

	const targetCountry = props.mainImage.find((v) => String(v.fullName) === 'インディアナ州');

    return (
      <div className='flag-page'>
				<ScrollTop />
				<FlagDate mainImage = {props.mainImage} name = {targetCountry.fullName} />
				<Share url = {'https://sof.flaghistory.jp/' + targetCountry.url} title = {targetCountry.fullName + 'の州旗 | SOF'} />
      </div>
    );
  }

export default Indiana;