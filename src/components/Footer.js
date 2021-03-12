import React from 'react';

import logoFooter from '../assets/logo/logoHeader.svg';

const Footer = () =>{
	return (
		<footer>
			<div className ='footer-inner'>
				<img className='logoFooter' src={logoFooter} alt='Search of Flags' />
				<div className='footer-list'>
					<h4>旗・国旗サイト</h4>
					<ul>
						<li><a href = 'https://flaghistory.jp/' target='_blank' rel='noopener noreferrer'>FlagHistory</a></li>
						<li><a href = 'https://www.crwflags.com/fotw/flags/' target='_blank' rel='noopener noreferrer'>Flags of the World</a></li>
						<li><a href = 'https://flaghistory.jp/reference/' target='_blank' rel='noopener noreferrer'>参考文献</a></li>
					</ul>
				</div>
				<div className='footer-list'>
					<h4>サポート</h4>
					<ul>
						<li><a href = 'https://flaghistory.jp/privacy-policy/' target='_blank' rel='noopener noreferrer'>プライバシーポリシー</a></li>
						<li><a href = 'https://flaghistory.jp/contact/' target='_blank' rel='noopener noreferrer'>お問い合わせ</a></li>
					</ul>
				</div>
				<div className='footer-list'>
					<h4>作った人｜モトイシモトイ</h4>
					<ul>
						<li><a href = 'https://twitter.com/MotoiMotoishi' target='_blank' rel='noopener noreferrer'>Twitter</a></li>
						<li><a href = 'https://www.youtube.com/channel/UCWBxpTIzP9RRWe6b7uj-PMg' target='_blank' rel='noopener noreferrer'>Youtube</a></li>
						<li><a href = 'https://www.nicovideo.jp/user/2090155' target='_blank' rel='noopener noreferrer'>ニコニコ動画</a></li>
					</ul>
				</div>
			</div>
		</footer>
	);
}

export default Footer;