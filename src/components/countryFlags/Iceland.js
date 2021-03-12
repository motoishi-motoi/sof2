import React from 'react';
import FlagDate from './pageComp/FlagDate';
import Share from '../Share';
import ScrollTop from '../ScrollToTopOnMount';

const Iceland = (props) => {

    return (
      <div className='flag-page'>
				<ScrollTop />
				<FlagDate mainImage = {props.mainImage} name = 'アイスランド共和国' />
				<Share url='https://sof.flaghistory.jp/iceland' title = 'アイスランド共和国の国旗 | SOF' />
      </div>
    );
  }

export default Iceland;