import React, { useState, useMemo } from 'react';
import Flags from './Flags.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Share from './Share';
import { Link } from 'react-router-dom'
import ScrollTop from './ScrollToTopOnMount';
import Page from './Page';
import Helmet from 'react-helmet';

const Main = (props) =>{

  const images = props.mainImage;

  // ひらがな
  const hiragana = [
    'あ', 'い', 'う', 'え', 'お','-------',
    'か', 'き', 'く', 'け', 'こ','-------',
    'さ', 'し', 'す', 'せ', 'そ','-------',
    'た', 'ち', 'つ', 'て', 'と','-------',
    'な', 'に', 'ぬ', 'ね', 'の','-------',
    'は', 'ひ', 'ふ', 'へ', 'ほ','-------',
    'ま', 'み', 'む', 'め', 'も','-------',
    'や', 'ゆ', 'よ','-------',
    'ら', 'り', 'る', 'れ', 'ろ','-------',
    'わ', 'を', 'ん'];
  

  // ※sessionStorageがStringのみ対応しているので、'ON','OFF'で検索機能を実装するように変更 2021/03/14

  // 色に関するカウント
  //  const[unspeColor, setUnspeColor] = useState(true);
  const[redcount, setRedcount] = useState('OFF');
  const[whitecount, setWhitecount] = useState('OFF');
  const[greencount, setGreencount] = useState('OFF');
  const[yellowcount, setYellowcount] = useState('OFF');
  const[bluecount, setBluecount] = useState('OFF');
  const[blackcount, setBlackcount] = useState('OFF');
  const[purplecount, setPurplecount] = useState('OFF');
  const[goldcount, setGoldcount] = useState('OFF');
  const[orangecount, setOrangecount] = useState('OFF');

  // 色の部分・完全・除外スイッチ
  const[partialColor, setPartialColor] = useState('ON');
  const[perfectColor, setPerfectColor] = useState('OFF');
  const[exclusionColor, setExclusionColor] = useState('OFF');

  // 色のフルカラー・メインカラースイッチ
  const[mColorSwitch, setMColorSwitch] = useState('ON');
  const[fColorSwitch, setFColorSwitch] = useState('OFF');


  // 模様に関するカウント
//  const[unspePattern, setUnspePattern] = useState(true);
  const[suncount, setSuncount] = useState('OFF');
  const[mooncount, setMooncount] = useState('OFF');
  const[starcount, setStarcount] = useState('OFF');
  const[crosscount, setCrosscount] = useState('OFF');
  const[creaturecount, setCreaturecount] = useState('OFF');
  const[plantcount, setPlantcount] = useState('OFF');

  // エリアに関するカウント
  const[unspeArea, setUnspeArea] = useState('ON');
  const[asiacount, setAsiacount] = useState('OFF');
  const[eucount, setEucount] = useState('OFF');
  const[africacount, setAfricacount] = useState('OFF');
  const[ncAmericacount, setNcAmericacount] = useState('OFF');
  const[sAmericacount, setSAmericacount] = useState('OFF');
  const[oceaniacount, setOceaniacount] = useState('OFF');

 // その他に関するカウント
  const[unspeKokuren, setUnspeKokuren] = useState('OFF');
  const[kokurencount, setKokurencount] = useState('ON');
  const[notKokurencount, setNotKokurencount] = useState('OFF');
  const[othercount, setOthercount] = useState('OFF');
  const[localcount, setLocalcount] = useState('OFF');
  const[oldcount, setOldcount] = useState('OFF');

  // useState()を使う場合は、必ずconst[x1, x2]のようにやらないといけないらしい。
  // １つ目が初期値になって、２つ目が例えば"setCount(count + 1)"みたいに
  // 引数としてcount（初期値）を渡すことで中身をいじくれるっぽい。


  const [filterQuery, setFilterQuery] = useState({});
  const [filterHiragana, setFilterHiragana] = useState('');

  //sessionStorageに値があったら取得する
  // 最初の一度だけ処理する。
  const [onlyone, setOnlyone] = useState(true);
  if(onlyone){

    //値がnullじゃないときに取得する
    //色のスイッチの値取得
    if(sessionStorage.redcount){
      setRedcount(sessionStorage.getItem('redcount'));
    }
    if(sessionStorage.whitecount){
      setWhitecount(sessionStorage.getItem('whitecount'));
    }
    if(sessionStorage.greencount){
      setGreencount(sessionStorage.getItem('greencount'));
    }
    if(sessionStorage.yellowcount){
      setYellowcount(sessionStorage.getItem('yellowcount'));
    }
    if(sessionStorage.bluecount){
      setBluecount(sessionStorage.getItem('bluecount'));
    }
    if(sessionStorage.Blackcount){
      setBlackcount(sessionStorage.getItem('Blackcount'));
    }
    if(sessionStorage.purplecount){
      setPurplecount(sessionStorage.getItem('purplecount'));
    }
    if(sessionStorage.goldcount){
      setGoldcount(sessionStorage.getItem('goldcount'));
    }
    if(sessionStorage.orangecount){
      setOrangecount(sessionStorage.getItem('orangecount'));
    }


    //色の部分・完全・除外スイッチの取得
    if(sessionStorage.partialColor){
      setPartialColor(sessionStorage.getItem('partialColor'));
    }
    if(sessionStorage.perfectColor){
      setPerfectColor(sessionStorage.getItem('perfectColor'));
    }
    if(sessionStorage.exclusionColor){
      setExclusionColor(sessionStorage.getItem('exclusionColor'));
    }


    //色のフルカラー・メインカラースイッチ
    if(sessionStorage.mColorSwitch){
      setMColorSwitch(sessionStorage.getItem('mColorSwitch'));
    }
    if(sessionStorage.fColorSwitch){
      setFColorSwitch(sessionStorage.getItem('fColorSwitch'));
    }


    //模様に関するスイッチの取得
    if(sessionStorage.suncount){
      setSuncount(sessionStorage.getItem('suncount'));
    }
    if(sessionStorage.mooncount){
      setMooncount(sessionStorage.getItem('mooncount'));
    }
    if(sessionStorage.starcount){
      setStarcount(sessionStorage.getItem('starcount'));
    }
    if(sessionStorage.crosscount){
      setCrosscount(sessionStorage.getItem('crosscount'));
    }
    if(sessionStorage.creaturecount){
      setCreaturecount(sessionStorage.getItem('creaturecount'));
    }
    if(sessionStorage.plantcount){
      setPlantcount(sessionStorage.getItem('plantcount'));
    }


    //エリアに関するカウントの値を取得
    if(sessionStorage.unspeArea){
      setUnspeArea(sessionStorage.getItem('unspeArea'));
    }
    if(sessionStorage.asiacount){
      setAsiacount(sessionStorage.getItem('asiacount'));
    }
    if(sessionStorage.eucount){
      setEucount(sessionStorage.getItem('eucount'));
    }
    if(sessionStorage.africacount){
      setAfricacount(sessionStorage.getItem('africacount'));
    }
    if(sessionStorage.ncAmericacount){
      setNcAmericacount(sessionStorage.getItem('ncAmericacount'));
    }
    if(sessionStorage.sAmericacount){
      setSAmericacount(sessionStorage.getItem('sAmericacount'));
    }
    if(sessionStorage.oceaniacount){
      setOceaniacount(sessionStorage.getItem('oceaniacount'));
    }


    //その他に関するカウントの値を取得
    if(sessionStorage.unspeKokuren){
      setUnspeKokuren(sessionStorage.getItem('unspeKokuren'));
    }
    if(sessionStorage.kokurencount){
      setKokurencount(sessionStorage.getItem('kokurencount'));
    }
    if(sessionStorage.notKokurencount){
      setNotKokurencount(sessionStorage.getItem('notKokurencount'));
    }
    if(sessionStorage.othercount){
      setOthercount(sessionStorage.getItem('othercount'));
    }
    if(sessionStorage.localcount){
      setLocalcount(sessionStorage.getItem('localcount'));
    }
    if(sessionStorage.oldcount){
      setOldcount(sessionStorage.getItem('oldcount'));
    }

    //一文字目検索の値を取得
    if(sessionStorage.hiragana){
      setFilterHiragana(sessionStorage.getItem('hiragana'));
    }

    // 一度だけなので次の処理までfalseにする。
    setOnlyone(false);
  }

  // 絞り込み機能
  const filteredImage = useMemo(() => {
    let tmpImages = images;

    const filterTitle = filterQuery.title && filterQuery.title.toLowerCase();
    const hiraganaTitle = filterHiragana;

    tmpImages = tmpImages.filter(row =>{

      // フルカラーでの検索
      if(fColorSwitch === String('ON')){
        // 部分一致
        if(partialColor === String('ON')){
          if(String(row.fullColor).indexOf('赤色') === -1 && redcount === String('ON')){
            return false;
          }else if(String(row.fullColor).indexOf('緑色') === -1 && greencount === String('ON')){
            return false;
          }else if(String(row.fullColor).indexOf('青色') === -1 && bluecount === String('ON')){
            return false;
          }else if(String(row.fullColor).indexOf('黄色') === -1 && yellowcount === String('ON')){
            return false;
          }else if(String(row.fullColor).indexOf('白色') === -1 && whitecount === String('ON')){
            return false;
          }else if(String(row.fullColor).indexOf('黒色') === -1 && blackcount === String('ON')){
            return false;
          }else if(String(row.fullColor).indexOf('橙色') === -1 && orangecount === String('ON')){
            return false;
          }else if(String(row.fullColor).indexOf('金色') === -1 && goldcount === String('ON')){
            return false;
          }else if(String(row.fullColor).indexOf('紫色') === -1 && purplecount === String('ON')){
            return false;
          }
        }
        
        // 色の完全一致検索
        else if(perfectColor === String('ON')){
          if(String(row.fullColor).indexOf('赤色') === -1 && redcount === String('ON')){
            return false;
          }else if(String(row.fullColor).indexOf('赤色') >= 0 && redcount === String('OFF')){
            return false;
          }else if(String(row.fullColor).indexOf('緑色') === -1 && greencount === String('ON')){
            return false;
          }else if(String(row.fullColor).indexOf('緑色') >= 0 && greencount === String('OFF')){
            return false;
          }else if(String(row.fullColor).indexOf('青色') === -1 && bluecount === String('ON')){
            return false;
          }else if(String(row.fullColor).indexOf('青色') >= 0 && bluecount === String('OFF')){
            return false;
          }else if(String(row.fullColor).indexOf('黄色') === -1 && yellowcount === String('ON')){
            return false;
          }else if(String(row.fullColor).indexOf('黄色') >= 0 && yellowcount === String('OFF')){
            return false;
          }else if(String(row.fullColor).indexOf('白色') === -1 && whitecount === String('ON')){
            return false;
          }else if(String(row.fullColor).indexOf('白色') >= 0 && whitecount === String('OFF')){
            return false;
          }else if(String(row.fullColor).indexOf('黒色') === -1 && blackcount === String('ON')){
            return false;
          }else if(String(row.fullColor).indexOf('黒色') >= 0 && blackcount === String('OFF')){
            return false;
          }else if(String(row.fullColor).indexOf('橙色') === -1 && orangecount === String('ON')){
            return false;
          }else if(String(row.fullColor).indexOf('橙色') >= 0 && orangecount === String('OFF')){
            return false;
          }else if(String(row.fullColor).indexOf('金色') === -1 && goldcount === String('ON')){
            return false;
          }else if(String(row.fullColor).indexOf('金色') >= 0 && goldcount === String('OFF')){
            return false;
          }else if(String(row.fullColor).indexOf('紫色') === -1 && purplecount === String('ON')){
            return false;
          }else if(String(row.fullColor).indexOf('紫色') >= 0 && purplecount === String('OFF')){
            return false;
          }
        }

        // 色の除外検索
        else if(exclusionColor === String('ON')){
          if(String(row.fullColor).indexOf('赤色') >= 0 && redcount === String('ON')){
            return false;
          }else if(String(row.fullColor).indexOf('緑色') >= 0 && greencount === String('ON')){
            return false;
          }else if(String(row.fullColor).indexOf('青色') >= 0 && bluecount === String('ON')){
            return false;
          }else if(String(row.fullColor).indexOf('黄色') >= 0 && yellowcount === String('ON')){
            return false;
          }else if(String(row.fullColor).indexOf('白色') >= 0 && whitecount === String('ON')){
            return false;
          }else if(String(row.fullColor).indexOf('黒色') >= 0 && blackcount === String('ON')){
            return false;
          }else if(String(row.fullColor).indexOf('橙色') >= 0 && orangecount === String('ON')){
            return false;
          }else if(String(row.fullColor).indexOf('金色') >= 0 && goldcount === String('ON')){
            return false;
          }else if(String(row.fullColor).indexOf('紫色') >= 0 && purplecount === String('ON')){
            return false;
          }
        }
      }

      // メインカラーでの検索
      if(mColorSwitch === String('ON')){
        // 部分一致
        if(partialColor === String('ON')){
          if(String(row.mainColor).indexOf('赤色') === -1 && redcount === String('ON')){
            return false;
          }else if(String(row.mainColor).indexOf('緑色') === -1 && greencount === String('ON')){
            return false;
          }else if(String(row.mainColor).indexOf('青色') === -1 && bluecount === String('ON')){
            return false;
          }else if(String(row.mainColor).indexOf('黄色') === -1 && yellowcount === String('ON')){
            return false;
          }else if(String(row.mainColor).indexOf('白色') === -1 && whitecount === String('ON')){
            return false;
          }else if(String(row.mainColor).indexOf('黒色') === -1 && blackcount === String('ON')){
            return false;
          }else if(String(row.mainColor).indexOf('橙色') === -1 && orangecount === String('ON')){
            return false;
          }else if(String(row.mainColor).indexOf('金色') === -1 && goldcount === String('ON')){
            return false;
          }else if(String(row.mainColor).indexOf('紫色') === -1 && purplecount === String('ON')){
            return false;
          }
        }
        
        // 色の完全一致検索
        else if(perfectColor === String('ON')){
          if(String(row.mainColor).indexOf('赤色') === -1 && redcount === String('ON')){
            return false;
          }else if(String(row.mainColor).indexOf('赤色') >= 0 && redcount === String('OFF')){
            return false;
          }else if(String(row.mainColor).indexOf('緑色') === -1 && greencount === String('ON')){
            return false;
          }else if(String(row.mainColor).indexOf('緑色') >= 0 && greencount === String('OFF')){
            return false;
          }else if(String(row.mainColor).indexOf('青色') === -1 && bluecount === String('ON')){
            return false;
          }else if(String(row.mainColor).indexOf('青色') >= 0 && bluecount === String('OFF')){
            return false;
          }else if(String(row.mainColor).indexOf('黄色') === -1 && yellowcount === String('ON')){
            return false;
          }else if(String(row.mainColor).indexOf('黄色') >= 0 && yellowcount === String('OFF')){
            return false;
          }else if(String(row.mainColor).indexOf('白色') === -1 && whitecount === String('ON')){
            return false;
          }else if(String(row.mainColor).indexOf('白色') >= 0 && whitecount === String('OFF')){
            return false;
          }else if(String(row.mainColor).indexOf('黒色') === -1 && blackcount === String('ON')){
            return false;
          }else if(String(row.mainColor).indexOf('黒色') >= 0 && blackcount === String('OFF')){
            return false;
          }else if(String(row.mainColor).indexOf('橙色') === -1 && orangecount === String('ON')){
            return false;
          }else if(String(row.mainColor).indexOf('橙色') >= 0 && orangecount === String('OFF')){
            return false;
          }else if(String(row.mainColor).indexOf('金色') === -1 && goldcount === String('ON')){
            return false;
          }else if(String(row.mainColor).indexOf('金色') >= 0 && goldcount === String('OFF')){
            return false;
          }else if(String(row.mainColor).indexOf('紫色') === -1 && purplecount === String('ON')){
            return false;
          }else if(String(row.mainColor).indexOf('紫色') >= 0 && purplecount === String('OFF')){
            return false;
          }
        }

        // 色の除外検索
        else if(exclusionColor === String('ON')){
          if(String(row.mainColor).indexOf('赤色') >= 0 && redcount === String('ON')){
            return false;
          }else if(String(row.mainColor).indexOf('緑色') >= 0 && greencount === String('ON')){
            return false;
          }else if(String(row.mainColor).indexOf('青色') >= 0 && bluecount === String('ON')){
            return false;
          }else if(String(row.mainColor).indexOf('黄色') >= 0 && yellowcount === String('ON')){
            return false;
          }else if(String(row.mainColor).indexOf('白色') >= 0 && whitecount === String('ON')){
            return false;
          }else if(String(row.mainColor).indexOf('黒色') >= 0 && blackcount === String('ON')){
            return false;
          }else if(String(row.mainColor).indexOf('橙色') >= 0 && orangecount === String('ON')){
            return false;
          }else if(String(row.mainColor).indexOf('金色') >= 0 && goldcount === String('ON')){
            return false;
          }else if(String(row.mainColor).indexOf('紫色') >= 0 && purplecount === String('ON')){
            return false;
          }
        }
      }

      if(String(row.tag).indexOf('太陽') === -1 && suncount === String('ON')){
        return false;
      }else if(String(row.tag).indexOf('月') === -1 && mooncount === String('ON')){
        return false;
      }else if(String(row.tag).indexOf('星') === -1 && starcount === String('ON')){
        return false;
      }else if(String(row.tag).indexOf('十字') === -1 && crosscount === String('ON')){
        return false;
      }else if(String(row.tag).indexOf('生物') === -1 && creaturecount === String('ON')){
        return false;
      }else if(String(row.tag).indexOf('植物') === -1 && plantcount === String('ON')){
        return false;
      }
      
      if(unspeArea === String('OFF')){
        if(String(row.area).indexOf('アジア') === -1 && asiacount === String('ON')){
          return false;
        }else if(String(row.area).indexOf('ヨーロッパ') === -1 && eucount === String('ON')){
          return false;
        }else if(String(row.area).indexOf('アフリカ') === -1 && africacount === String('ON')){
          return false;
        }else if(String(row.area).indexOf('北中央アメリカ') === -1 && ncAmericacount === String('ON')){
          return false;
        }else if(String(row.area).indexOf('南アメリカ') === -1 && sAmericacount === String('ON')){
          return false;
        }else if(String(row.area).indexOf('オセアニア') === -1 && oceaniacount === String('ON')){
          return false;
        }
      }

      if(String(row.kokuren).indexOf('国連加盟国') === -1 && kokurencount === String('ON')){
        return false;
      }else if(String(row.kokuren).indexOf('国連非加盟国') === -1 && notKokurencount === String('ON')){
        return false;
      }else if(String(row.kokuren).indexOf('海外領土・自治領') === -1 && othercount === String('ON')){
        return false;
      }else if(String(row.kokuren).indexOf('地方旗') === -1 && localcount === String('ON')){
        return false;
      }else if(String(row.kokuren).indexOf('過去の旗') === -1 && oldcount === String('ON')){
        return false;
      }

      // ひらがな検索
      if (hiraganaTitle && String(row.firstLetter).indexOf(hiraganaTitle) === -1) {
        return false;
      }

      // キーワード検索
      if (filterQuery.title && String(row.fullName).toLowerCase().indexOf(filterTitle) === -1) {
        if (String(row.name).toLowerCase().indexOf(filterTitle) !== -1) {
          return row;
        }
        if (String(row.officialName).toLowerCase().indexOf(filterTitle) !== -1) {
          return row;
        }
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

  }, [oldcount, localcount, othercount, filterHiragana, unspeArea, filterQuery.title, notKokurencount, plantcount, exclusionColor, fColorSwitch, mColorSwitch, partialColor, perfectColor, africacount, asiacount, blackcount, bluecount, creaturecount, crosscount, eucount, goldcount, greencount, kokurencount, mooncount, ncAmericacount, oceaniacount, orangecount, purplecount, redcount, sAmericacount, starcount, suncount, whitecount, yellowcount, images]);


  //onClickで呼び出す関数たち。
  //配列系とかループ系でまとめて処理できそうだけどやり方が分からん。

  // キーワード検索欄に入力された言葉を渡す
  const handleFilter = e => {
    const { name, value } = e.target;
    setFilterQuery({ ...filterQuery, [name]: value });  
  };

  // チェックボックスの文字を取得
  const firLetterFilter = e => {
    if(e.target.value !== '-------'){
      setFilterHiragana(e.target.value);
      sessionStorage.setItem('hiragana', e.target.value);
    }else {
      setFilterHiragana('');
      sessionStorage.setItem('hiragana', '');
    }
  }

  // --------------------------------- 
  // 色の検索モードスイッチ
  const handleMColorSwitch = e => {
    if(mColorSwitch === String('OFF')){
      setMColorSwitch(String('ON'));
      sessionStorage.setItem('mColorSwitch', String('ON'));
      setFColorSwitch(String('OFF'));
      sessionStorage.setItem('fColorSwitch', String('OFF'));
    }
  };

  const handleFColorSwitch = e => {
    if(fColorSwitch === String('OFF')){
      setMColorSwitch(String('OFF'));
      sessionStorage.setItem('mColorSwitch', String('OFF'));
      setFColorSwitch(String('ON'));
      sessionStorage.setItem('fColorSwitch', String('ON'));
    }
  };

  const colorSearchModeReset = () => {
    setPartialColor(String('OFF'));
    sessionStorage.setItem('partialColor', String('OFF'));
    setPerfectColor(String('OFF'));
    sessionStorage.setItem('perfectColor', String('OFF'));
    setExclusionColor(String('OFF'));
    sessionStorage.setItem('exclusionColor', String('OFF'));
  }

  // 部分一致検索が押された
  const handleColorPartial = e => {
    if(partialColor === String('OFF')){
      colorSearchModeReset();
      setPartialColor(String('ON'));
      sessionStorage.setItem('partialColor', String('ON'));
    }
  };

  // 完全一致検索が押された
  const handleColorPerfect = e => {
    if(perfectColor === String('OFF')){
      colorSearchModeReset();
      setPerfectColor(String('ON'));
      sessionStorage.setItem('perfectColor', String('ON'));
    }
  };

  // 除外検索が押された
  const handleColorExclusion = e => {
    if(exclusionColor === String('OFF')){
      colorSearchModeReset();
      setExclusionColor(String('ON'));
      sessionStorage.setItem('exclusionColor', String('ON'));
    }
  };

  // 色のカウントを引いたり足したりする
  const handleFilterRed = e => {
    if(redcount === String('OFF')){
      setRedcount(String('ON'));
      sessionStorage.setItem('redcount', 'ON');
    }else{
      setRedcount(String('OFF'));
      sessionStorage.setItem('redcount', 'OFF');
    }
  };

  const handleFilterWhite = e => {
    if(whitecount === String('OFF')){
      setWhitecount(String('ON'));
      sessionStorage.setItem('whitecount', 'ON');
    }else{
      setWhitecount(String('OFF'));
      sessionStorage.setItem('whitecount', 'OFF');
    }
  };

  const handleFilterBlue = e => {
    if(bluecount === String('OFF')){
      setBluecount(String('ON'));
      sessionStorage.setItem('bluecount', 'ON');
    }else{
      setBluecount(String('OFF'));
      sessionStorage.setItem('bluecount', 'OFF');
    }
  };

  const handleFilterGreen = e => {
    if(greencount === String('OFF')){
      setGreencount(String('ON'));
      sessionStorage.setItem('greencount', 'ON');
    }else{
      setGreencount(String('OFF'));
      sessionStorage.setItem('greencount', 'OFF');
    }
  };
  
  const handleFilterYellow = e => {
    if(yellowcount === String('OFF')){
      setYellowcount(String('ON'));
      sessionStorage.setItem('yellowcount', 'ON');
    }else{
      setYellowcount(String('OFF'));
      sessionStorage.setItem('yellowcount', 'OFF');
    }
  };

  const handleFilterBlack = e => {
    if(blackcount === String('OFF')){
      setBlackcount(String('ON'));
      sessionStorage.setItem('blackcount', 'ON');
    }else{
      setBlackcount(String('OFF'));
      sessionStorage.setItem('blackcount', 'OFF');
    }
  };

  const handleFilterGold = e => {
    if(goldcount === String('OFF')){
      setGoldcount(String('ON'));
      sessionStorage.setItem('goldcount', 'ON');
    }else{
      setGoldcount(String('OFF'));
      sessionStorage.setItem('goldcount', 'OFF');
    }
  };

  const handleFilterPurple = e => {
    if(purplecount === String('OFF')){
      setPurplecount(String('ON'));
      sessionStorage.setItem('purplecount', 'ON');
    }else{
      setPurplecount(String('OFF'));
      sessionStorage.setItem('purplecount', 'OFF');
    }
  };

  const handleFilterOrange = e => {
    if(orangecount === String('OFF')){
      setOrangecount(String('ON'));
      sessionStorage.setItem('orangecount', 'ON');
    }else{
      setOrangecount(String('OFF'));
      sessionStorage.setItem('orangecount', 'OFF');
    }
  };

  // エリアのカウントを足したり引いたりする

  const areaReset = () => {
    setAsiacount(String('OFF'));
    setEucount(String('OFF'));
    setAfricacount(String('OFF'));
    setNcAmericacount(String('OFF'));
    setSAmericacount(String('OFF'));
    setOceaniacount(String('OFF'));
    setUnspeArea(String('OFF'));
    sessionStorage.setItem('asiacount', 'OFF');
    sessionStorage.setItem('eucount', 'OFF');
    sessionStorage.setItem('africacount', 'OFF');
    sessionStorage.setItem('ncAmericacount', 'OFF');
    sessionStorage.setItem('sAmericacount', 'OFF');
    sessionStorage.setItem('oceaniacount', 'OFF');
    sessionStorage.setItem('unspeArea', 'OFF');
  };

  const handleUnspeArea = e => {
    if(unspeArea === String('OFF')){
      areaReset();
      setUnspeArea(String('ON'));
      sessionStorage.setItem('unspeArea', 'ON');
    }
  };

  const handleFilterAsia = e => {
    if(asiacount === String('OFF')){
      areaReset();
      setAsiacount(String('ON'));
      sessionStorage.setItem('asiacount', 'ON');
    }
  };

  const handleFilterEu = e => {
    if(eucount === String('OFF')){
      areaReset();
      setEucount(String('ON'));
      sessionStorage.setItem('eucount', 'ON');
    }
  };

  const handleFilterAfrica = e => {
    if(africacount === String('OFF')){
      areaReset();
      setAfricacount(String('ON'));
      sessionStorage.setItem('africacount', 'ON');
    }
  };

  const handleFilterNcAmerica = e => {
    if(ncAmericacount === String('OFF')){
      areaReset();
      setNcAmericacount(String('ON'));
      sessionStorage.setItem('ncAmericacount', 'ON');
    }
  };

  const handleFilterSAmerica = e => {
    if(sAmericacount === String('OFF')){
      areaReset();
      setSAmericacount(String('ON'));
      sessionStorage.setItem('sAmericacount', 'ON');
    }
  };

  const handleFilterOceania = e => {
    if(oceaniacount === String('OFF')){
      areaReset();
      setOceaniacount(String('ON'));
      sessionStorage.setItem('oceaniacount', 'ON');
    }
  };

  // 模様のカウントを足したり引いたりする

  const handleFilterSun = e => {
    if(suncount === String('OFF')){
      setSuncount(String('ON'));
      sessionStorage.setItem('suncount', 'ON');
    }else{
      setSuncount(String('OFF'));
      sessionStorage.setItem('suncount', 'OFF');
    }
  };

  const handleFilterMoon = e => {
    if(mooncount === String('OFF')){
      setMooncount(String('ON'));
      sessionStorage.setItem('mooncount', 'ON');
    }else{
      setMooncount(String('OFF'));
      sessionStorage.setItem('mooncount', 'OFF');
    }
  };

  const handleFilterStar = e => {
    if(starcount === String('OFF')){
      setStarcount(String('ON'));
      sessionStorage.setItem('starcount', 'ON');
    }else{
      setStarcount(String('OFF'));
      sessionStorage.setItem('starcount', 'OFF');
    }
  };

  const handleFilterCross = e => {
    if(crosscount === String('OFF')){
      setCrosscount(String('ON'));
      sessionStorage.setItem('crosscount', 'ON');
    }else{
      setCrosscount(String('OFF'));
      sessionStorage.setItem('crosscount', 'OFF');
    }
  };

  const handleFilterCreature = e => {
    if(creaturecount === String('OFF')){
      setCreaturecount(String('ON'));
      sessionStorage.setItem('creaturecount', 'ON');
    }else{
      setCreaturecount(String('OFF'));
      sessionStorage.setItem('creaturecount', 'OFF');
    }
  };

  const handleFilterPlant = e => {
    if(plantcount === String('OFF')){
      setPlantcount(String('ON'));
      sessionStorage.setItem('plantcount', 'ON');
    }else{
      setPlantcount(String('OFF'));
      sessionStorage.setItem('plantcount', 'OFF');
    }
  };

  // 国連に関するカウント

  const kokurenReset = () => {
    setUnspeKokuren(String('OFF'));
    setKokurencount(String('OFF'));
    setNotKokurencount(String('OFF'));
    setOthercount(String('OFF'));
    setLocalcount(String('OFF'));
    setOldcount(String('OFF'));
    sessionStorage.setItem('unspeKokuren', 'OFF');
    sessionStorage.setItem('kokurencount', 'OFF');
    sessionStorage.setItem('notKokurencount', 'OFF');
    sessionStorage.setItem('othercount', 'OFF');
    sessionStorage.setItem('localcount', 'OFF');
    sessionStorage.setItem('oldcount', 'OFF');
  };

  const handleFilterKokuren = e => {
    if(kokurencount === String('OFF')){
      kokurenReset();
      setKokurencount(String('ON'));
      sessionStorage.setItem('Kokurencount', 'ON');
    }else{
      kokurenReset();
      setUnspeKokuren(String('ON'));
      sessionStorage.setItem('unspeKokuren', 'ON');
    }
  };

  const handleFilterUnspeKokuren = e => {
    if(unspeKokuren === String('OFF')){
      kokurenReset();
      setUnspeKokuren(String('ON'));
      sessionStorage.setItem('unspeKokuren', 'ON');
    }
  };

  const handleFilterNotKokuren = e => {
    if(notKokurencount === String('OFF')){
      kokurenReset();
      setNotKokurencount(String('ON'));
      sessionStorage.setItem('notKokurencount', 'ON');
    }else{
      kokurenReset();
      setUnspeKokuren(String('ON'));
      sessionStorage.setItem('unspeKokuren', 'ON');
    }
  };

  const handleFilterOther = e => {
    if(othercount === String('OFF')){
      kokurenReset();
      setOthercount(String('ON'));
      sessionStorage.setItem('othercount', 'ON');
    }else{
      kokurenReset();
      setUnspeKokuren(String('ON'));
      sessionStorage.setItem('unspeKokuren', 'ON');
    }
  };

  const handleFilterLocal = e => {
    if(localcount === String('OFF')){
      kokurenReset();
      setLocalcount(String('ON'));
      sessionStorage.setItem('localcount', 'ON');
    }else{
      kokurenReset();
      setUnspeKokuren(String('ON'));
      sessionStorage.setItem('unspeKokuren', 'ON');
    }
  };

  const handleFilterOld = e => {
    if(oldcount === String('OFF')){
      kokurenReset();
      setOldcount(String('ON'));
      sessionStorage.setItem('oldcount', 'ON');
    }else{
      kokurenReset();
      setUnspeKokuren(String('ON'));
      sessionStorage.setItem('unspeKokuren', 'ON');
    }
  };


  //検索する機構と、国旗を表示する部分。
  return (
    <div className ='flags'>
      <Page />
      <ScrollTop />
      <Helmet 
				title={'Search of Flags | 絞り込み検索可能な『旗・国旗一覧』'}
				link={[{ rel: "canonical", href: 'https://sof.flaghistory.jp/'}]}
				meta={[
					{ name: 'description', content: 'SOF(Search of Flags)は、世界の旗・国旗一覧をサクサク絞り込み検索できるウェブサイト。' },
					{property: 'twitter:description', content: 'SOF(Search of Flags)は、世界の旗・国旗一覧をサクサク絞り込み検索できるウェブサイト。'},
					{property: 'twitter:title', content: 'Search of Flags | 絞り込み検索可能な『旗・国旗一覧』'},
					{property: 'twitter:url', content: 'https://sof.flaghistory.jp/'},
					{name: 'twitter:image', content: 'https://sof.flaghistory.jp/sof.png'},
					{property: 'og:type', content: 'article'},
					{property: 'og:title', content: 'Search of Flags | 絞り込み検索可能な『旗・国旗一覧』'},
					{property: 'og:url', content: 'https://sof.flaghistory.jp/'},
					{property: 'og:image', content: 'https://sof.flaghistory.jp/sof.png'},
					{property: 'og:description', content: 'SOF(Search of Flags)は、世界の旗・国旗一覧をサクサク絞り込み検索できるウェブサイト。'},
				]}
			/>
      <div className = 'search-bg'>
      <div className ='searchBox'>
        <div className = "keywordBox scb">
          <div className="inputgroup">
            <form className = 'keywordSearch'>
              <input type="text" name="title" className="formInput" placeholder="国名を入力…" autoComplete="off"
                value={filterQuery.title || ''}
                onChange={handleFilter}
              />
              <FontAwesomeIcon icon={faSearch} />
            </form>
          </div>
        </div>
        <div className = "firstletterBox scb">
          <div className="select-hiragana">
            <select value={filterHiragana} onChange={firLetterFilter}>
              <option value=''>一文字目検索</option>
              <option value={hiragana[0]}>{hiragana[0]}</option>
              <option value={hiragana[1]}>{hiragana[1]}</option>
              <option value={hiragana[2]}>{hiragana[2]}</option>
              <option value={hiragana[3]}>{hiragana[3]}</option>
              <option value={hiragana[4]}>{hiragana[4]}</option>
              <option value={hiragana[5]}>{hiragana[5]}</option>
              <option value={hiragana[6]}>{hiragana[6]}</option>
              <option value={hiragana[7]}>{hiragana[7]}</option>
              <option value={hiragana[8]}>{hiragana[8]}</option>
              <option value={hiragana[9]}>{hiragana[9]}</option>
              <option value={hiragana[10]}>{hiragana[10]}</option>
              <option value={hiragana[11]}>{hiragana[11]}</option>
              <option value={hiragana[12]}>{hiragana[12]}</option>
              <option value={hiragana[13]}>{hiragana[13]}</option>
              <option value={hiragana[14]}>{hiragana[14]}</option>
              <option value={hiragana[15]}>{hiragana[15]}</option>
              <option value={hiragana[16]}>{hiragana[16]}</option>
              <option value={hiragana[17]}>{hiragana[17]}</option>
              <option value={hiragana[18]}>{hiragana[18]}</option>
              <option value={hiragana[19]}>{hiragana[19]}</option>
              <option value={hiragana[20]}>{hiragana[20]}</option>
              <option value={hiragana[21]}>{hiragana[21]}</option>
              <option value={hiragana[22]}>{hiragana[22]}</option>
              <option value={hiragana[23]}>{hiragana[23]}</option>
              <option value={hiragana[24]}>{hiragana[24]}</option>
              <option value={hiragana[25]}>{hiragana[25]}</option>
              <option value={hiragana[26]}>{hiragana[26]}</option>
              <option value={hiragana[27]}>{hiragana[27]}</option>
              <option value={hiragana[28]}>{hiragana[28]}</option>
              <option value={hiragana[29]}>{hiragana[29]}</option>
              <option value={hiragana[30]}>{hiragana[30]}</option>
              <option value={hiragana[31]}>{hiragana[31]}</option>
              <option value={hiragana[32]}>{hiragana[32]}</option>
              <option value={hiragana[33]}>{hiragana[33]}</option>
              <option value={hiragana[34]}>{hiragana[34]}</option>
              <option value={hiragana[35]}>{hiragana[35]}</option>
              <option value={hiragana[36]}>{hiragana[36]}</option>
              <option value={hiragana[37]}>{hiragana[37]}</option>
              <option value={hiragana[38]}>{hiragana[38]}</option>
              <option value={hiragana[39]}>{hiragana[39]}</option>
              <option value={hiragana[40]}>{hiragana[40]}</option>
              <option value={hiragana[41]}>{hiragana[41]}</option>
              <option value={hiragana[42]}>{hiragana[42]}</option>
              <option value={hiragana[43]}>{hiragana[43]}</option>
              <option value={hiragana[44]}>{hiragana[44]}</option>
              <option value={hiragana[45]}>{hiragana[45]}</option>
              <option value={hiragana[46]}>{hiragana[46]}</option>
              <option value={hiragana[47]}>{hiragana[47]}</option>
              <option value={hiragana[48]}>{hiragana[48]}</option>
              <option value={hiragana[49]}>{hiragana[49]}</option>
              <option value={hiragana[50]}>{hiragana[50]}</option>
              <option value={hiragana[51]}>{hiragana[51]}</option>
              <option value={hiragana[52]}>{hiragana[52]}</option>
              <option value={hiragana[53]}>{hiragana[53]}</option>
              <option value={hiragana[54]}>{hiragana[54]}</option>
            </select>
          </div>
        </div>
        <div className = "colorBox scb">
          <div className ="mBox searchMode" >
            <div className = "mode">
              <div className = {'button button' + partialColor} onClick={() => {handleColorPartial()}}>
                <span className ='searchButton'>部分一致</span>
              </div>
              <div className = {'button button' + perfectColor} onClick={() => {handleColorPerfect()}}>
                <span className ='searchButton'>完全一致</span>
              </div>
              <div className = {'button button' + exclusionColor} onClick={() => {handleColorExclusion()}}>
                <span className ='searchButton'>除外</span>
              </div>
            </div>
            <div className = "mode">
              <div className = {'button button' + mColorSwitch} onClick={() => {handleMColorSwitch()}}>
                <span className ='searchButton'>メインカラー</span>
              </div>
              <div className = {'button button' + fColorSwitch} onClick={() => {handleFColorSwitch()}}>
                <span className ='searchButton'>フルカラー</span>
              </div>
            </div>
          </div>
          <div className ="mBox">
            <div className = {'button button' + redcount} onClick={() => {handleFilterRed()}}>
              <span className ='searchButton'>赤色</span>
            </div>
            <div className = {'button button' + bluecount} onClick={() => {handleFilterBlue()}}>
              <span className ='searchButton'>青色</span>
            </div>
            <div className = {'button button' + greencount} onClick={() => {handleFilterGreen()}}>
              <span className ='searchButton'>緑色</span>
            </div>
            <div className = {'button button' + yellowcount} onClick={() => {handleFilterYellow()}}>
              <span className ='searchButton'>黄色</span>
            </div>
            <div className = {'button button' + whitecount} onClick={() => {handleFilterWhite()}}>
              <span className = {'checkbox' + whitecount}></span>
              <span className ='searchButton'>白色</span>
            </div>
            <div className = {'button button' + blackcount} onClick={() => {handleFilterBlack()}}>
              <span className ='searchButton'>黒色</span>
            </div>
            <div className = {'button button' + goldcount} onClick={() => {handleFilterGold()}}>
              <span className ='searchButton'>金色</span>
            </div>
            <div className = {'button button' + purplecount} onClick={() => {handleFilterPurple()}}>
              <span className ='searchButton'>紫色</span>
            </div>
            <div className = {'button button' + orangecount} onClick={() => {handleFilterOrange()}}>
              <span className ='searchButton'>橙色</span>
            </div>
          </div>
        </div>
            <div className="designBox scb">
              <div className ="mBox">
                <div className = {'button button' + suncount} onClick={() => {handleFilterSun()}}>
                  <span className ='searchButton'>太陽</span>
                </div>
                <div className = {'button button' + mooncount} onClick={() => {handleFilterMoon()}}>
                  <span className ='searchButton'>月</span>
                </div>
                <div className = {'button button' + starcount} onClick={() => {handleFilterStar()}}>
                  <span className ='searchButton'>星</span>
                </div>
                <div className = {'button button' + crosscount} onClick={() => {handleFilterCross()}}>
                  <span className ='searchButton'>十字</span>
                </div>
                <div className = {'button button' + creaturecount} onClick={() => {handleFilterCreature()}}>
                  <span className ='searchButton'>動物</span>
                </div>
                <div className = {'button button' + plantcount} onClick={() => {handleFilterPlant()}}>
                  <span className ='searchButton'>植物</span>
                </div>
              </div>
            </div>
            <div className = "areaBox scb">
              <div className ="mBox">
                <div className = {'button button' + unspeArea} onClick={() => {handleUnspeArea()}}>
                  <span className ='searchButton'>全地域</span>
                </div>
                <div className = {'button button' + asiacount} onClick={() => {handleFilterAsia()}}>
                  <span className ='searchButton'>アジア</span>
                </div>
                <div className = {'button button' + eucount} onClick={() => {handleFilterEu()}}>
                  <span className ='searchButton'>ヨーロッパ</span>
                </div>
                <div className = {'button button' + africacount} onClick={() => {handleFilterAfrica()}}>
                  <span className ='searchButton'>アフリカ</span>
                </div>
                <div className = {'button button' + ncAmericacount} onClick={() => {handleFilterNcAmerica()}}>
                  <span className ='searchButton'>北中央アメリカ</span>
                </div>
                <div className = {'button button' + sAmericacount} onClick={() => {handleFilterSAmerica()}}>
                  <span className ='searchButton'>南アメリカ</span>
                </div>
                <div className = {'button button' + oceaniacount} onClick={() => {handleFilterOceania()}}>
                  <span className ='searchButton'>オセアニア</span>
                </div>
              </div>
            </div>
            <div className = "sonotaBox scb">
              <div className ="mBox">
                <div className = {'button button' + unspeKokuren} onClick={() => {handleFilterUnspeKokuren()}}>
                  <span className ='searchButton'>全ての旗</span>
                </div>
                <div className = {'button button' + kokurencount} onClick={() => {handleFilterKokuren()}}>
                  <span className ='searchButton'>国連加盟国</span>
                </div>
                <div className = {'button button' + notKokurencount} onClick={() => {handleFilterNotKokuren()}}>
                  <span className ='searchButton'>国連非加盟国</span>
                </div>
                <div className = {'button button' + othercount} onClick={() => {handleFilterOther()}}>
                  <span className ='searchButton'>海外領土・自治領</span>
                </div>
                <div className = {'button button' + localcount} onClick={() => {handleFilterLocal()}}>
                  <span className ='searchButton'>地方旗</span>
                </div>
                <div className = {'button button' + oldcount} onClick={() => {handleFilterOld()}}>
                  <span className ='searchButton'>過去の旗</span>
                </div>
              </div>
            </div>            
          <div className='result'>
            <span>{'表示件数：' + filteredImage.length + ' / ' + props.mainImage.length}</span>
          </div>
        </div>
        </div>
        <div className = 'flag-bg'>
          <div className = 'flagArea'>
            {
              filteredImage.map((flagImage) => {
                return(
                  <Link key = {flagImage.id} to = {'/' + flagImage.url}>
                    <Flags mainFlagImage = {flagImage}/>
                  </Link>
                );
              })
            }
          </div>
        <Share url='https://sof.flagshitory.jp/' title='Search of Flags | 絞り込み検索可能な『旗・国旗一覧』' />
      </div>
    </div>
  );
}

export default Main;

  //ifの中に関数を入れたい場合即時関数（！functionの中に入れる）
  //!functionだと出なかった。アロー関数の書き方だと出る
  //(() => {})()っていう書き方
  //アロー関数で動かしても、if文の中でmapを使えないっぽい
  //三項演算子を使った場合は表示ができた。（これでif文の中で使えた！）

  //mapの入れ子構造は普通にできる。