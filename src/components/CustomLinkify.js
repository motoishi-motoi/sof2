import React from 'react';
import { Link } from 'react-router-dom';
import Linkify from 'react-linkify';

// content: string (解析するテキスト)
const CustomLinkify = ({ content }) => {
  const url = 'https://sof.flaghistory.jp/';

  // サイト内のリンクかどうか判定
  const componentDecorator = (href, text, key) =>
    !text.indexOf(url) ? (
      <Link key={key} to={text.replace(url, '')}>
        {text}
      </Link>
    ) : (
      <a key={key} href={href} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    );

  return <Linkify componentDecorator={componentDecorator}>{content}</Linkify>;
};

export default CustomLinkify;