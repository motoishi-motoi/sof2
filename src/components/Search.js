import React from 'react';

const Search = () => {
    return (
      <div className = 'searchBox'>
        <p>ここにチェックボックス式の絞り込み検索を用意する</p>
        <label>
          <input type = 'checkbox' />
          チェックテスト用
        </label>
      </div>
    );
  }

export default Search;