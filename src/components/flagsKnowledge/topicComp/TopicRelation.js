import React, {useMemo} from 'react';
import { Link } from 'react-router-dom'

const TopicRelation = (props) => {

    const images = props.mainImage;

    const targetKnowledge = props.knowledge.find((v) => String(v.name) === props.name);


    const filteredImage = useMemo(() => {
        let tmpImages = images;


        tmpImages = tmpImages.filter(row =>{
    
    
            // 検索部分


          	  if(String(row.topics).indexOf(targetKnowledge.name) === -1){
                return false;
              }
            return row;


        
        
        });
    
        //indexOf()は引数と該当するものが配列内にあった場合、配列の位置に応じて数字を返す
        //当てはまらなかった場合-1を返す。
        //String型を対象としたものにしか出来ないので、String()を使うのが得策
    
        return tmpImages;
    
        //.mapはこういう書き方した関数を呼び出してもいけるみたい。
        //useMemoはなんか高速化するらしい。
    
      }, [targetKnowledge, images]);

 
    return (
        <div className='relation'>
            <h3>{targetKnowledge.name}の国旗・旗一覧</h3>
            {
            filteredImage.map((flagImage) => {
                return(
                    <Link to = {'/' + flagImage.url} key = {flagImage.id}>
                        <section className = 'relation-flag' key={flagImage.url}>
                            <div className = 'relation-flag-box'>
                                <img className = {flagImage.id + 'reFlag relation-flag-img'} src={flagImage.image} alt = {flagImage.fullName + 'の国旗'} />
                            </div>
                            <h4>{flagImage.name}</h4>
                        </section>
                    </Link>
                    );
                })
            }   
        </div>
    );
  }

export default TopicRelation;