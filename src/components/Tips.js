import React from 'react';
import { Link } from 'react-router-dom'
import Share from './Share';
import { Helmet } from 'react-helmet';
import Page from './Page';

const Tips = (props) => {


 
    return (
        <article className = 'flag-page'>
            <Page />
            <Helmet 
                title={'国旗のTIPS | SOF'}
                link={[{ rel: "canonical", href: 'https://sof.flaghistory.jp/tips'}]}
                meta={[
                    { name: 'description', content: '国旗のTIPS（豆知識的な何か）をまとめているページです' },
                    {property: 'twitter:description', content: '国旗のTIPS（豆知識的な何か）をまとめているページです'},
                    {property: 'twitter:title', content: '国旗のTIPS | SOF'},
                    {property: 'twitter:url', content: 'https://sof.flaghistory.jp/tips'},
                    {name: 'twitter:image', content: 'https://sof.flaghistory.jp/sof.png'},
                    {property: 'og:type', content: 'article'},
                    {property: 'og:title', content: '国旗のTIPS | SOF'},
                    {property: 'og:url', content: 'https://sof.flaghistory.jp/tips'},
                    {property: 'og:image', content: 'https://sof.flaghistory.jp/sof.png'},
                    {property: 'og:description', content: '国旗のTIPS（豆知識的な何か）をまとめているページです'},
                ]}
            />
            <div className='flag-date'>
                <div className = " flag-date-name">
                    <h2>国旗の小ネタ・豆知識</h2>
                    <p>TIPS</p>
                </div>
                <div className = 'flag-date-info'>
                    <div className = 'flag-date-intro'>
                        <p>ここには国旗や旗にまつわるTIPSへのリンクを掲載しています。</p>
                        <p>気になる単語をクリックorタップすれば詳細ページを確認可能です。</p>
                    </div>
                </div>
                <div className ="topics-box">
					<div className = "topics-button">
						<p className = "topics-caption">Tips</p>
							<ul>
                                {props.knowledge.map((know) => {
                                    return (
                                        <li key = {know.url}>
                                            <Link to = {'/' + know.url}>{know.name}</Link>
                                        </li>
                                    );
                                })}
							</ul>
					</div>
				</div>
                <div style={{marginTop:'42px' , marginBottom:'12px'}}>
                    <Share url = {'https://sof.flaghistory.jp/tips'} title = {'国旗のTIPS | SOF'} />
                </div>
            </div>
        </article>
    );
  }

export default Tips;