import React, {useMemo} from 'react';
import { Link } from 'react-router-dom'

const Relation = (props) => {

    const images = props.mainImage;

    const targetCountry = images.find((v) => String(v.fullName) === props.name);

    const redSwitch = String(targetCountry.mainColor).indexOf('赤色');
    const greenSwitch = String(targetCountry.mainColor).indexOf('緑色');
    const blueSwitch = String(targetCountry.mainColor).indexOf('青色');
    const yellowSwitch = String(targetCountry.mainColor).indexOf('黄色');
    const whiteSwitch = String(targetCountry.mainColor).indexOf('白色');
    const blackSwitch = String(targetCountry.mainColor).indexOf('黒色');
    const orangeSwitch = String(targetCountry.mainColor).indexOf('橙色');
    const goldSwitch = String(targetCountry.mainColor).indexOf('金色');
    const purpleSwitch = String(targetCountry.mainColor).indexOf('紫色');


    const sun = String(targetCountry.tag).indexOf('太陽');
    const moon = String(targetCountry.tag).indexOf('月');
    const star = String(targetCountry.tag).indexOf('星');
    const cross = String(targetCountry.tag).indexOf('十字');
    const creature = String(targetCountry.tag).indexOf('生物');
    const plant = String(targetCountry.tag).indexOf('植物');


    const filteredImage = useMemo(() => {
        let tmpImages = images;


        tmpImages = tmpImages.filter(row =>{
    
    
            // 色の完全一致検索

            if(String(row.fullName) === targetCountry.fullName){
                return false;
            }

          	  if(String(row.fullColor).indexOf('赤色') === -1 && redSwitch !== -1){
                return false;
              }else if(String(row.fullColor).indexOf('赤色') >= 0 && redSwitch === -1){
                return false;
              }else if(String(row.fullColor).indexOf('緑色') === -1 && greenSwitch !== -1){
                return false;
              }else if(String(row.fullColor).indexOf('緑色') >= 0 && greenSwitch === -1){
                return false;
              }else if(String(row.fullColor).indexOf('青色') === -1 && blueSwitch !== -1){
                return false;
              }else if(String(row.fullColor).indexOf('青色') >= 0 && blueSwitch === -1){
                return false;
              }else if(String(row.fullColor).indexOf('黄色') === -1 && yellowSwitch !== -1){
                return false;
              }else if(String(row.fullColor).indexOf('黄色') >= 0 && yellowSwitch === -1){
                return false;
              }else if(String(row.fullColor).indexOf('白色') === -1 && whiteSwitch !== -1){
                return false;
              }else if(String(row.fullColor).indexOf('白色') >= 0 && whiteSwitch === -1){
                return false;
              }else if(String(row.fullColor).indexOf('黒色') === -1 && blackSwitch !== -1){
                return false;
              }else if(String(row.fullColor).indexOf('黒色') >= 0 && blackSwitch === -1){
                return false;
              }else if(String(row.fullColor).indexOf('橙色') === -1 && orangeSwitch !== -1){
                return false;
              }else if(String(row.fullColor).indexOf('橙色') >= 0 && orangeSwitch === -1){
                return false;
              }else if(String(row.fullColor).indexOf('金色') === -1 && goldSwitch !== -1){
                return false;
              }else if(String(row.fullColor).indexOf('金色') >= 0 && goldSwitch === -1){
                return false;
              }else if(String(row.fullColor).indexOf('紫色') === -1 && purpleSwitch !== -1){
                return false;
              }else if(String(row.fullColor).indexOf('紫色') >= 0 && purpleSwitch === -1){
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
    
      }, [targetCountry.fullName, blackSwitch, blueSwitch, goldSwitch, greenSwitch, orangeSwitch, purpleSwitch, redSwitch, whiteSwitch, yellowSwitch, images]);

      const filteredImageLocal = useMemo(() => {
        let tmpImages = images;


        tmpImages = tmpImages.filter(row =>{
    
            // 関連する旗の検索

            if(String(row.fullName) === targetCountry.fullName){
                return false;
            }
            if(targetCountry.kanrenTag === undefined){
              return false;
            }
            if(row.kokuren === '過去の旗'){
              return false;
            }
            if(row.kanrenTag !== undefined){
              if(String(row.kanrenTag).indexOf('国家タグ') !== -1){
                return false;
              }
            }
            if(String(row.kanrenTag).indexOf(targetCountry.kanrenTag[0]) !== -1 && targetCountry.kanrenTag[0] !== undefined){
              return row;
            }else if(String(row.kanrenTag).indexOf(targetCountry.kanrenTag[1]) !== -1 && targetCountry.kanrenTag[1] !== undefined){
              return row;
            }else if(String(row.kanrenTag).indexOf(targetCountry.kanrenTag[2]) !== -1 && targetCountry.kanrenTag[2] !== undefined){
              return row;
            }

            return false;


        
        
        });
    
        //indexOf()は引数と該当するものが配列内にあった場合、配列の位置に応じて数字を返す
        //当てはまらなかった場合-1を返す。
        //String型を対象としたものにしか出来ないので、String()を使うのが得策
    
        return tmpImages;
    
        //.mapはこういう書き方した関数を呼び出してもいけるみたい。
        //useMemoはなんか高速化するらしい。
    
      }, [targetCountry.kanrenTag, targetCountry.fullName, images]);

      const filteredImageOld = useMemo(() => {
        let tmpImages = images;


        tmpImages = tmpImages.filter(row =>{
    
            // 関連する旗の検索

            if(String(row.fullName) === targetCountry.fullName){
                return false;
            }
            if(targetCountry.kanrenTag === undefined){
              return false;
            }
            if(row.kokuren === '地方旗'){
              return false;
            }
            if(row.kanrenTag !== undefined){
              if(String(row.kanrenTag).indexOf('国家タグ') !== -1){
                return false;
              }
            }
            if(String(row.kanrenTag).indexOf(targetCountry.kanrenTag[0]) !== -1 && targetCountry.kanrenTag[0] !== undefined){
              return row;
            }else if(String(row.kanrenTag).indexOf(targetCountry.kanrenTag[1]) !== -1 && targetCountry.kanrenTag[1] !== undefined){
              return row;
            }else if(String(row.kanrenTag).indexOf(targetCountry.kanrenTag[2]) !== -1 && targetCountry.kanrenTag[2] !== undefined){
              return row;
            }

            return false;

        
        
        });
    
        //indexOf()は引数と該当するものが配列内にあった場合、配列の位置に応じて数字を返す
        //当てはまらなかった場合-1を返す。
        //String型を対象としたものにしか出来ないので、String()を使うのが得策
        

        return tmpImages;
    
        //.mapはこういう書き方した関数を呼び出してもいけるみたい。
        //useMemoはなんか高速化するらしい。
    
      }, [targetCountry.kanrenTag, targetCountry.fullName, images]);

        //降順にソートする
        filteredImageOld.sort(function (a, b){
          if(a.age !== undefined && b.age !== undefined){
            if(a.age < b.age){
              return -1;
            }
            if(a.age > b.age){
              return 1
            }
          }
          return 0;
        });


      const filteredImageCountry = useMemo(() => {
        let tmpImages = images;


        tmpImages = tmpImages.filter(row =>{
    
            // 地方旗が属する国の検索

            if(String(row.fullName) === targetCountry.fullName){
                return false;
            }
            if(targetCountry.kanrenTag === undefined){
              return false;
            }

            //国家の場合は表示したくない
            if(String(targetCountry.kanrenTag).indexOf('国家タグ') !== -1 && targetCountry.kanrenTag !== undefined){
              return false;
            }
            //地方旗は一つしか持たないはずなので、0のみ。
            if(String(row.kanrenTag).indexOf(targetCountry.kanrenTag[0]) !== -1 && targetCountry.kanrenTag[0] !== undefined){
             
              //要素に国家タグが含まれるものはメインの国旗しか無い
              if(row.kanrenTag !== undefined){
              if(String(row.kanrenTag).indexOf('国家タグ') !== -1){
                return row;
              }
              }
            }

            return false;


        
        
        });
    
        //indexOf()は引数と該当するものが配列内にあった場合、配列の位置に応じて数字を返す
        //当てはまらなかった場合-1を返す。
        //String型を対象としたものにしか出来ないので、String()を使うのが得策
    

        return tmpImages;
    
        //.mapはこういう書き方した関数を呼び出してもいけるみたい。
        //useMemoはなんか高速化するらしい。
    
      }, [targetCountry.kanrenTag, targetCountry.fullName, images]);

      const filteredImage2 = useMemo(() => {
        let tmpImages = images;


        tmpImages = tmpImages.filter(row =>{
    
    
            // 模様の検索

            if(String(row.fullName) === targetCountry.fullName){
                return false;
            }

          	  if(String(row.tag).indexOf('太陽') === -1 && sun !== -1){
                return false;
              }else if(String(row.tag).indexOf('月') === -1 && moon !== -1){
                return false;
              }else if(String(row.tag).indexOf('星') === -1 && star !== -1){
                return false;
              }else if(String(row.tag).indexOf('十字') === -1 && cross !== -1){
                return false;
              }else if(String(row.tag).indexOf('生物') === -1 && creature !== -1){
                return false;
              }else if(String(row.tag).indexOf('植物') === -1 && plant !== -1){
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
    
      }, [creature, cross, moon, plant, star, sun, targetCountry.fullName, images]);

      const flagSwitch = (flag) => {
        if(flag.kokuren !== '地方旗' || flag.kanrenTag[0] === 'イギリスの地方旗'){
          return '国旗';
        }else if(flag.fullName !== 'ワシントンD.C.'){
          return '州旗';
        }else{
          return '旗';
        }
      }

      const checkRelation = () =>{
        let value = filteredImageOld.length + filteredImageLocal.length;
        return value;
      }

    return (
        <div className='relation'>
            {checkRelation() !== 0 &&
            <div>
              <h2>{targetCountry.name + flagSwitch(targetCountry)}と関連する旗一覧</h2>
                {filteredImageCountry.length !== 0 && filteredImageCountry !== undefined &&
                <h3>{targetCountry.fullName + 'が属する国'}</h3>}

                  {filteredImageCountry.length !== 0 && filteredImageCountry !== undefined &&
                  <div className = 'grid-relation-margin'>
                  {filteredImageCountry.map((flagImage) => {
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
                  })}
                  </div>}
                  {filteredImageCountry.length > 0 && filteredImageLocal.length !== 0 ?
                  filteredImageCountry.map((flagImage) => {
                    return(
                      <h3 key = {flagImage.name}>{flagImage.name + 'の地方旗'}</h3>
                    );
                  })
                  :filteredImageLocal.length !== 0 && <h3>{targetCountry.name + 'の地方旗'}</h3>
                  }
                  {filteredImageLocal.length !== 0 &&
                  <div className = 'grid-relation'>
                  {filteredImageLocal.map((flagImage) => {
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
                  })}
                  </div>}
                  {filteredImageCountry.length > 0 && filteredImageOld.length > 0 ?
                  filteredImageCountry.map((flagImage) => {
                    return(
                      <h3 key = {flagImage.name}>{flagImage.name + 'の過去の旗'}</h3>
                    );
                  })
                  :filteredImageOld.length !== 0 &&<h3>{targetCountry.name + 'の過去の旗'}</h3>
                  }
                  {filteredImageOld.length !== 0 &&
                  <div className = 'grid-relation'>
                  {filteredImageOld.map((flagImage) => {
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
                  })}
                  </div>}
            </div>}
            <h2>{targetCountry.name + flagSwitch(targetCountry)}と同じ色だけを使っている旗一覧</h2>
            <div className = 'grid-relation'>
            {filteredImage.length !== 0 ?
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
            :<p>Not Found</p>}   
            </div>
            <h2>{targetCountry.name + flagSwitch(targetCountry)}と同じ模様が全てある旗一覧</h2>
            <div className = 'grid-relation'>
            {filteredImage2.length !== 0 && targetCountry.tag.length !== 0 ?
                filteredImage2.map((flagImage) => {
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
            :<p>Not Found</p>}
            </div>
        </div>
    );
  }

export default Relation;