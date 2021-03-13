import React from 'react';
import FlagDate from './pageComp/FlagDate';
import Share from '../Share';
import ScrollTop from '../ScrollToTopOnMount';

const RepublicCongo = (props) => {

	const targetCountry = props.mainImage.find((v) => String(v.fullName) === 'コンゴ民主共和国');

    return (
      <div className='flag-page'>
				<ScrollTop />
				<FlagDate mainImage = {props.mainImage} name = {targetCountry.fullName} />
				<Share url = {'https://sof.flaghistory.jp/' + targetCountry.url} title = {targetCountry.fullName + 'の国旗 | SOF'} />
      </div>
    );
  }

export default RepublicCongo;