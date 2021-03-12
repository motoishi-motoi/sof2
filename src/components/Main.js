import React, { useState, useMemo } from 'react';
import Flags from './Flags.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import {Motion, spring } from 'react-motion';
import Share from './Share';
import { Link } from 'react-router-dom'

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
  
  // 色に関するカウント
  //  const[unspeColor, setUnspeColor] = useState(true);
  const[redcount, setRedcount] = useState(0);
  const[whitecount, setWhitecount] = useState(0);
  const[greencount, setGreencount] = useState(0);
  const[yellowcount, setYellowcount] = useState(0);
  const[bluecount, setBluecount] = useState(0);
  const[blackcount, setBlackcount] = useState(0);
  const[purplecount, setPurplecount] = useState(0);
  const[goldcount, setGoldcount] = useState(0);
  const[orangecount, setOrangecount] = useState(0);

  // 色の部分・完全・除外スイッチ
  const[partialColor, setPartialColor] = useState(true);
  const[perfectColor, setPerfectColor] = useState(false);
  const[exclusionColor, setExclusionColor] = useState(false);

  // 色のフルカラー・メインカラースイッチ
  const[mColorSwitch, setMColorSwitch] = useState(true);
  const[fColorSwitch, setFColorSwitch] = useState(false);


  // 模様に関するカウント
//  const[unspePattern, setUnspePattern] = useState(true);
  const[suncount, setSuncount] = useState(0);
  const[mooncount, setMooncount] = useState(0);
  const[starcount, setStarcount] = useState(0);
  const[crosscount, setCrosscount] = useState(0);
  const[creaturecount, setCreaturecount] = useState(0);
  const[plantcount, setPlantcount] = useState(0);

  // エリアに関するカウント
  const[unspeArea, setUnspeArea] = useState(true);
  const[asiacount, setAsiacount] = useState(0);
  const[eucount, setEucount] = useState(0);
  const[africacount, setAfricacount] = useState(0);
  const[ncAmericacount, setNcAmericacount] = useState(0);
  const[sAmericacount, setSAmericacount] = useState(0);
  const[oceaniacount, setOceaniacount] = useState(0);

 // その他に関するカウント
  const[unspeKokuren, setUnspeKokuren] = useState(false);
  const[kokurencount, setKokurencount] = useState(1);
  const[notKokurencount, setNotKokurencount] = useState(false);

  // useState()を使う場合は、必ずconst[x1, x2]のようにやらないといけないらしい。
  // １つ目が初期値になって、２つ目が例えば"setCount(count + 1)"みたいに
  // 引数としてcount（初期値）を渡すことで中身をいじくれるっぽい。


  const [filterQuery, setFilterQuery] = useState({});
  const [filterHiragana, setFilterHiragana] = useState('');

  // 絞り込み機能
  const filteredImage = useMemo(() => {
    let tmpImages = images;

    const filterTitle = filterQuery.title && filterQuery.title.toLowerCase();
    const hiraganaTitle = filterHiragana;

    tmpImages = tmpImages.filter(row =>{

      // フルカラーでの検索
      if(fColorSwitch){
        // 部分一致
        if(partialColor){
          if(String(row.fullColor).indexOf('赤色') === -1 && redcount === 1){
            return false;
          }else if(String(row.fullColor).indexOf('緑色') === -1 && greencount === 1){
            return false;
          }else if(String(row.fullColor).indexOf('青色') === -1 && bluecount === 1){
            return false;
          }else if(String(row.fullColor).indexOf('黄色') === -1 && yellowcount === 1){
            return false;
          }else if(String(row.fullColor).indexOf('白色') === -1 && whitecount === 1){
            return false;
          }else if(String(row.fullColor).indexOf('黒色') === -1 && blackcount === 1){
            return false;
          }else if(String(row.fullColor).indexOf('橙色') === -1 && orangecount === 1){
            return false;
          }else if(String(row.fullColor).indexOf('金色') === -1 && goldcount === 1){
            return false;
          }else if(String(row.fullColor).indexOf('紫色') === -1 && purplecount === 1){
            return false;
          }
        }
        
        // 色の完全一致検索
        else if(perfectColor){
          if(String(row.fullColor).indexOf('赤色') === -1 && redcount === 1){
            return false;
          }else if(String(row.fullColor).indexOf('赤色') >= 0 && redcount === 0){
            return false;
          }else if(String(row.fullColor).indexOf('緑色') === -1 && greencount === 1){
            return false;
          }else if(String(row.fullColor).indexOf('緑色') >= 0 && greencount === 0){
            return false;
          }else if(String(row.fullColor).indexOf('青色') === -1 && bluecount === 1){
            return false;
          }else if(String(row.fullColor).indexOf('青色') >= 0 && bluecount === 0){
            return false;
          }else if(String(row.fullColor).indexOf('黄色') === -1 && yellowcount === 1){
            return false;
          }else if(String(row.fullColor).indexOf('黄色') >= 0 && yellowcount === 0){
            return false;
          }else if(String(row.fullColor).indexOf('白色') === -1 && whitecount === 1){
            return false;
          }else if(String(row.fullColor).indexOf('白色') >= 0 && whitecount === 0){
            return false;
          }else if(String(row.fullColor).indexOf('黒色') === -1 && blackcount === 1){
            return false;
          }else if(String(row.fullColor).indexOf('黒色') >= 0 && blackcount === 0){
            return false;
          }else if(String(row.fullColor).indexOf('橙色') === -1 && orangecount === 1){
            return false;
          }else if(String(row.fullColor).indexOf('橙色') >= 0 && orangecount === 0){
            return false;
          }else if(String(row.fullColor).indexOf('金色') === -1 && goldcount === 1){
            return false;
          }else if(String(row.fullColor).indexOf('金色') >= 0 && goldcount === 0){
            return false;
          }else if(String(row.fullColor).indexOf('紫色') === -1 && purplecount === 1){
            return false;
          }else if(String(row.fullColor).indexOf('紫色') >= 0 && purplecount === 0){
            return false;
          }
        }

        // 色の除外検索
        else if(exclusionColor){
          if(String(row.fullColor).indexOf('赤色') >= 0 && redcount === 1){
            return false;
          }else if(String(row.fullColor).indexOf('緑色') >= 0 && greencount === 1){
            return false;
          }else if(String(row.fullColor).indexOf('青色') >= 0 && bluecount === 1){
            return false;
          }else if(String(row.fullColor).indexOf('黄色') >= 0 && yellowcount === 1){
            return false;
          }else if(String(row.fullColor).indexOf('白色') >= 0 && whitecount === 1){
            return false;
          }else if(String(row.fullColor).indexOf('黒色') >= 0 && blackcount === 1){
            return false;
          }else if(String(row.fullColor).indexOf('橙色') >= 0 && orangecount === 1){
            return false;
          }else if(String(row.fullColor).indexOf('金色') >= 0 && goldcount === 1){
            return false;
          }else if(String(row.fullColor).indexOf('紫色') >= 0 && purplecount === 1){
            return false;
          }
        }
      }

      // メインカラーでの検索
      if(mColorSwitch){
        // 部分一致
        if(partialColor){
          if(String(row.mainColor).indexOf('赤色') === -1 && redcount === 1){
            return false;
          }else if(String(row.mainColor).indexOf('緑色') === -1 && greencount === 1){
            return false;
          }else if(String(row.mainColor).indexOf('青色') === -1 && bluecount === 1){
            return false;
          }else if(String(row.mainColor).indexOf('黄色') === -1 && yellowcount === 1){
            return false;
          }else if(String(row.mainColor).indexOf('白色') === -1 && whitecount === 1){
            return false;
          }else if(String(row.mainColor).indexOf('黒色') === -1 && blackcount === 1){
            return false;
          }else if(String(row.mainColor).indexOf('橙色') === -1 && orangecount === 1){
            return false;
          }else if(String(row.mainColor).indexOf('金色') === -1 && goldcount === 1){
            return false;
          }else if(String(row.mainColor).indexOf('紫色') === -1 && purplecount === 1){
            return false;
          }
        }
        
        // 色の完全一致検索
        else if(perfectColor){
          if(String(row.mainColor).indexOf('赤色') === -1 && redcount === 1){
            return false;
          }else if(String(row.mainColor).indexOf('赤色') >= 0 && redcount === 0){
            return false;
          }else if(String(row.mainColor).indexOf('緑色') === -1 && greencount === 1){
            return false;
          }else if(String(row.mainColor).indexOf('緑色') >= 0 && greencount === 0){
            return false;
          }else if(String(row.mainColor).indexOf('青色') === -1 && bluecount === 1){
            return false;
          }else if(String(row.mainColor).indexOf('青色') >= 0 && bluecount === 0){
            return false;
          }else if(String(row.mainColor).indexOf('黄色') === -1 && yellowcount === 1){
            return false;
          }else if(String(row.mainColor).indexOf('黄色') >= 0 && yellowcount === 0){
            return false;
          }else if(String(row.mainColor).indexOf('白色') === -1 && whitecount === 1){
            return false;
          }else if(String(row.mainColor).indexOf('白色') >= 0 && whitecount === 0){
            return false;
          }else if(String(row.mainColor).indexOf('黒色') === -1 && blackcount === 1){
            return false;
          }else if(String(row.mainColor).indexOf('黒色') >= 0 && blackcount === 0){
            return false;
          }else if(String(row.mainColor).indexOf('橙色') === -1 && orangecount === 1){
            return false;
          }else if(String(row.mainColor).indexOf('橙色') >= 0 && orangecount === 0){
            return false;
          }else if(String(row.mainColor).indexOf('金色') === -1 && goldcount === 1){
            return false;
          }else if(String(row.mainColor).indexOf('金色') >= 0 && goldcount === 0){
            return false;
          }else if(String(row.mainColor).indexOf('紫色') === -1 && purplecount === 1){
            return false;
          }else if(String(row.mainColor).indexOf('紫色') >= 0 && purplecount === 0){
            return false;
          }
        }

        // 色の除外検索
        else if(exclusionColor){
          if(String(row.mainColor).indexOf('赤色') >= 0 && redcount === 1){
            return false;
          }else if(String(row.mainColor).indexOf('緑色') >= 0 && greencount === 1){
            return false;
          }else if(String(row.mainColor).indexOf('青色') >= 0 && bluecount === 1){
            return false;
          }else if(String(row.mainColor).indexOf('黄色') >= 0 && yellowcount === 1){
            return false;
          }else if(String(row.mainColor).indexOf('白色') >= 0 && whitecount === 1){
            return false;
          }else if(String(row.mainColor).indexOf('黒色') >= 0 && blackcount === 1){
            return false;
          }else if(String(row.mainColor).indexOf('橙色') >= 0 && orangecount === 1){
            return false;
          }else if(String(row.mainColor).indexOf('金色') >= 0 && goldcount === 1){
            return false;
          }else if(String(row.mainColor).indexOf('紫色') >= 0 && purplecount === 1){
            return false;
          }
        }
      }

      if(String(row.tag).indexOf('太陽') === -1 && suncount === 1){
        return false;
      }else if(String(row.tag).indexOf('月') === -1 && mooncount === 1){
        return false;
      }else if(String(row.tag).indexOf('星') === -1 && starcount === 1){
        return false;
      }else if(String(row.tag).indexOf('十字') === -1 && crosscount === 1){
        return false;
      }else if(String(row.tag).indexOf('生物') === -1 && creaturecount === 1){
        return false;
      }else if(String(row.tag).indexOf('植物') === -1 && plantcount === 1){
        return false;
      }
      
      if(!unspeArea){
        if(String(row.area).indexOf('アジア') === -1 && asiacount === 1){
          return false;
        }else if(String(row.area).indexOf('ヨーロッパ') === -1 && eucount === 1){
          return false;
        }else if(String(row.area).indexOf('アフリカ') === -1 && africacount === 1){
          return false;
        }else if(String(row.area).indexOf('北中央アメリカ') === -1 && ncAmericacount === 1){
          return false;
        }else if(String(row.area).indexOf('南アメリカ') === -1 && sAmericacount === 1){
          return false;
        }else if(String(row.area).indexOf('オセアニア') === -1 && oceaniacount === 1){
          return false;
        }
      }

        if(String(row.kokuren).indexOf('国連加盟国') === -1 && kokurencount === 1){
          return false;
        }else if(String(row.kokuren).indexOf('国連非加盟国') === -1 && notKokurencount){
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

  }, [filterHiragana, unspeArea, filterQuery.title, notKokurencount, plantcount, exclusionColor, fColorSwitch, mColorSwitch, partialColor, perfectColor, africacount, asiacount, blackcount, bluecount, creaturecount, crosscount, eucount, goldcount, greencount, kokurencount, mooncount, ncAmericacount, oceaniacount, orangecount, purplecount, redcount, sAmericacount, starcount, suncount, whitecount, yellowcount, images]);


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
    }else {
      setFilterHiragana('');
    }
  }

  // --------------------------------- 
  // 色の検索モードスイッチ
  const handleMColorSwitch = e => {
    if(!mColorSwitch){
      setMColorSwitch(true);
      setFColorSwitch(false);
    }
  };

  const handleFColorSwitch = e => {
    if(!fColorSwitch){
      setMColorSwitch(false);
      setFColorSwitch(true);
    }
  };

  // 部分一致検索が押された
  const handleColorPartial = e => {
    if(!partialColor){
      setPartialColor(true);
      setPerfectColor(false);
      setExclusionColor(false);
    }
  };

  // 完全一致検索が押された
  const handleColorPerfect = e => {
    if(!perfectColor){
      setPartialColor(false);
      setPerfectColor(true);
      setExclusionColor(false);
    }
  };

  // 除外検索が押された
  const handleColorExclusion = e => {
    if(!exclusionColor){
      setPartialColor(false);
      setPerfectColor(false);
      setExclusionColor(true);
    }
  };

  // 色のカウントを引いたり足したりする
  const handleFilterRed = e => {
    if(redcount === 0){
      setRedcount(redcount + 1);
    }else{
      setRedcount(redcount - 1);
    }
  };

  const handleFilterWhite = e => {
    if(whitecount === 0){
      setWhitecount(whitecount + 1);
    }else{
      setWhitecount(whitecount - 1);
    }
  };

  const handleFilterBlue = e => {
    if(bluecount === 0){
      setBluecount(bluecount + 1);
    }else{
      setBluecount(bluecount - 1);
    }
  };

  const handleFilterGreen = e => {
    if(greencount === 0){
      setGreencount(greencount + 1);
    }else{
      setGreencount(greencount - 1);
    }
  };
  
  const handleFilterYellow = e => {
    if(yellowcount === 0){
      setYellowcount(yellowcount + 1);
    }else{
      setYellowcount(yellowcount - 1);
    }
  };

  const handleFilterBlack = e => {
    if(blackcount === 0){
      setBlackcount(blackcount + 1);
    }else{
      setBlackcount(blackcount - 1);
    }
  };

  const handleFilterGold = e => {
    if(goldcount === 0){
      setGoldcount(goldcount + 1);
    }else{
      setGoldcount(goldcount - 1);
    }
  };

  const handleFilterPurple = e => {
    if(purplecount === 0){
      setPurplecount(purplecount + 1);
    }else{
      setPurplecount(purplecount - 1);
    }
  };

  const handleFilterOrange = e => {
    if(orangecount === 0){
      setOrangecount(orangecount + 1);
    }else{
      setOrangecount(orangecount - 1);
    }
  };

  // エリアのカウントを足したり引いたりする

  const areaReset = () => {
    setAsiacount(asiacount - asiacount);
    setEucount(eucount - eucount);
    setAfricacount(africacount - africacount);
    setNcAmericacount(ncAmericacount - ncAmericacount);
    setSAmericacount(sAmericacount - sAmericacount);
    setOceaniacount(oceaniacount - oceaniacount);
    setUnspeArea(Number(unspeArea) - Number(unspeArea));
  };

  const handleUnspeArea = e => {
    if(!unspeArea){
      areaReset();
      setUnspeArea(true);
    }
  };

  const handleFilterAsia = e => {
    if(asiacount === 0){
      areaReset();
      setAsiacount(asiacount + 1);
    }
  };

  const handleFilterEu = e => {
    if(eucount === 0){
      areaReset();
      setEucount(eucount + 1);
    }
  };

  const handleFilterAfrica = e => {
    if(africacount === 0){
      areaReset();
      setAfricacount(africacount + 1);
    }
  };

  const handleFilterNcAmerica = e => {
    if(ncAmericacount === 0){
      areaReset();
      setNcAmericacount(ncAmericacount + 1);
    }
  };

  const handleFilterSAmerica = e => {
    if(sAmericacount === 0){
      areaReset();
      setSAmericacount(sAmericacount + 1);
    }
  };

  const handleFilterOceania = e => {
    if(oceaniacount === 0){
      areaReset();
      setOceaniacount(oceaniacount + 1);
    }
  };

  // 模様のカウントを足したり引いたりする

  const handleFilterSun = e => {
    if(suncount === 0){
      setSuncount(suncount + 1);
    }else{
      setSuncount(suncount - 1);
    }
  };

  const handleFilterMoon = e => {
    if(mooncount === 0){
      setMooncount(mooncount + 1);
    }else{
      setMooncount(mooncount - 1);
    }
  };

  const handleFilterStar = e => {
    if(starcount === 0){
      setStarcount(starcount + 1);
    }else{
      setStarcount(starcount - 1);
    }
  };

  const handleFilterCross = e => {
    if(crosscount === 0){
      setCrosscount(crosscount + 1);
    }else{
      setCrosscount(crosscount - 1);
    }
  };

  const handleFilterCreature = e => {
    if(creaturecount === 0){
      setCreaturecount(creaturecount + 1);
    }else{
      setCreaturecount(creaturecount - 1);
    }
  };

  const handleFilterPlant = e => {
    if(plantcount === 0){
      setPlantcount(plantcount + 1);
    }else{
      setPlantcount(plantcount - 1);
    }
  };

  // 国連に関するカウント

  const kokurenReset = () => {
    setUnspeKokuren(Number(unspeKokuren) - Number(unspeKokuren));
    setKokurencount(Number(kokurencount) - Number(kokurencount));
    setNotKokurencount(Number(notKokurencount) - Number(notKokurencount));
  };

  const handleFilterKokuren = e => {
    if(kokurencount === 0){
      kokurenReset();
      setKokurencount(kokurencount + 1);
    }else{
      kokurenReset();
      setUnspeKokuren(true);
    }
  };

  const handleFilterUnspeKokuren = e => {
    if(!unspeKokuren){
      kokurenReset();
      setUnspeKokuren(true);
    }else{
      kokurenReset();
      setUnspeKokuren(true);
    }
  };

  const handleFilterNotKokuren = e => {
    if(!notKokurencount){
      kokurenReset();
      setNotKokurencount(true);
    }else{
      kokurenReset();
      setUnspeKokuren(true);
    }
  };

  // 詳細検索の表示切り替え
  const[isDetailOpen, setIsDetailOpen] = useState(false); 
  const[firIsDetailOpen, setFirIsDetailOpen] = useState(false);
  const handleDetailSearchMode = e =>{
    if(!isDetailOpen){
      setIsDetailOpen(true);
    }else{
      setIsDetailOpen(false);
    }
    if(!firIsDetailOpen){
      setFirIsDetailOpen(true);
    }
  };

  // howtoの開く閉じる
  const [isHowToOpen, setIsHowToOpen] = useState(false);
  const [fIsHowToOpen, setfIsHowToOpen] = useState(false);
  const howtoOpen = e => {
    if(!isHowToOpen){
      setIsHowToOpen(true);
    }else{
      setIsHowToOpen(false);
    }
    if(!fIsHowToOpen){
      setfIsHowToOpen(true);
    }
  };

  // 色検索モードの切替
  const [issmOpen, setIssmOpen] = useState(false);
  const [fIssmOpen, setfIssmOpen] = useState(false);
  const smOpen = e => {
    if(!issmOpen){
      setIssmOpen(true);
    }else{
      setIssmOpen(false);
    }
    if(!fIssmOpen){
      setfIssmOpen(true);
    }
  };


  // 使い方説明3つ
  const SofDescOpen = () => {
    return(
      <Motion defaultStyle={{y:0}} style={{y:spring(700,{ stiffness: 50 })}}>
        {interpolatingStyle => 
          <div className="sof-desc" style = {{'maxHeight':`${interpolatingStyle.y}px`, overflow:'hidden',}}>
            <ol>
              <li>チェックボックスにチェックを入れます</li>
              <li>候補が絞り込まれます</li>
              <li>国旗をタップorクリックすると詳細が見れます</li>
            </ol>
            <h4>検索モードについて</h4>
            <ul>
              <li>部分一致：その色が含まれる旗を抽出します</li>
              <li>完全一致：その色を持つ旗だけを抽出します</li>
              <li>除外：その色を持たない旗だけを抽出します</li>
              <li>メインカラー：旗に一定以上含まれる色だけを対象にします</li>
              <li>フルカラー：旗に含まれる全ての色を対象にします</li>
            </ul>
          </div>
        }
      </Motion>
    );
  };

  const SofDescClose = () => {
    return(
      <Motion defaultStyle={{y:700}} style={{y:spring(0,{ stiffness: 170 })}}>
        {interpolatingStyle => 
          <div className="sof-desc" style = {{'maxHeight':`${interpolatingStyle.y}px`, overflow:'hidden',}}>
            <ol>
              <li>チェックボックスにチェックを入れます</li>
              <li>候補が絞り込まれます</li>
              <li>国旗をタップorクリックすると詳細が見れます</li>
            </ol>
            <h4>検索モードについて</h4>
            <ul>
              <li>部分一致：その色が含まれる旗を抽出します</li>
              <li>完全一致：その色を持つ旗だけを抽出します</li>
              <li>除外：その色を持たない旗だけを抽出します</li>
              <li>メインカラー：旗に一定以上含まれる色だけを対象にします</li>
              <li>フルカラー：旗に含まれる全ての色を対象にします</li>
            </ul>
          </div>
        }
      </Motion>
    );
  };

  const FirstSofDesc = () => {
    return(
          <div className="sof-desc" style = {{'maxHeight':'0px', overflow:'hidden',}}>
          </div>
    );
  };


  // 詳細検索3つ
  const SearchDetailSearchOpen = () => {
    return(
      <Motion defaultStyle={{y:0}} style={{y:spring(720,{ stiffness: 60 })}}>
        {interpolatingStyle => 
          <div className="detail-scb" style = {{'maxHeight':`${interpolatingStyle.y}px`, overflow:'hidden', position:'relative',}}>
            <div className="designBox scb">
              <h3>模様</h3>
              <div className ="mBox">
                <div className = 'button' onClick={() => {handleFilterSun()}}>
                  <span className = {'checkbox' + suncount}></span>
                  <span className ='searchButton'>太陽</span>
                </div>
                <div className = 'button' onClick={() => {handleFilterMoon()}}>
                  <span className = {'checkbox' + mooncount}></span>
                  <span className ='searchButton'>月</span>
                </div>
                <div className = 'button' onClick={() => {handleFilterStar()}}>
                  <span className = {'checkbox' + starcount}></span>
                  <span className ='searchButton'>星</span>
                </div>
                <div className = 'button' onClick={() => {handleFilterCross()}}>
                  <span className = {'checkbox' + crosscount}></span>
                  <span className ='searchButton'>十字</span>
                </div>
                <div className = 'button' onClick={() => {handleFilterCreature()}}>
                  <span className = {'checkbox' + creaturecount}></span>
                  <span className ='searchButton'>動物</span>
                </div>
                <div className = 'button' onClick={() => {handleFilterPlant()}}>
                  <span className = {'checkbox' + plantcount}></span>
                  <span className ='searchButton'>植物</span>
                </div>
              </div>
              </div>
              <div className = "areaBox scb">
              <h3>エリア</h3>
              <div className ="mBox">
              <div className = 'button' onClick={() => {handleUnspeArea()}}>
                  <span className = {'checkbox' + Number(unspeArea)}></span>
                  <span className ='searchButton'>指定なし</span>
                </div>
                <div className = 'button' onClick={() => {handleFilterAsia()}}>
                  <span className = {'checkbox' + asiacount}></span>
                  <span className ='searchButton'>アジア</span>
                </div>
                <div className = 'button' onClick={() => {handleFilterEu()}}>
                  <span className = {'checkbox' + eucount}></span>
                  <span className ='searchButton'>ヨーロッパ</span>
                </div>
                <div className = 'button' onClick={() => {handleFilterAfrica()}}>
                  <span className = {'checkbox' + africacount}></span>
                  <span className ='searchButton'>アフリカ</span>
                </div>
                <div className = 'button' onClick={() => {handleFilterNcAmerica()}}>
                  <span className = {'checkbox' + ncAmericacount}></span>
                  <span className ='searchButton'>北中央アメリカ</span>
                </div>
                <div className = 'button' onClick={() => {handleFilterSAmerica()}}>
                  <span className = {'checkbox' + sAmericacount}></span>
                  <span className ='searchButton'>南アメリカ</span>
                </div>
                <div className = 'button' onClick={() => {handleFilterOceania()}}>
                  <span className = {'checkbox' + oceaniacount}></span>
                  <span className ='searchButton'>オセアニア</span>
                </div>
              </div>
              </div>
              <div className = "firstletterBox scb">
              <h3>一文字目検索</h3>
              <div className="select-hiragana">
                <select value={filterHiragana} onChange={firLetterFilter}>
                  <option value=''>指定なし</option>
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
          </div>
        }
      </Motion>
    );
  }
  const SearchDetailSearchClose = () => {
    return(
      <Motion defaultStyle={{y:650}} style={{y:spring(0,{ stiffness: 170 })}}>
        {interpolatingStyle => 
         <div className="detail-scb" style = {{'maxHeight':`${interpolatingStyle.y}px`, overflow:'hidden', position:'relative',}}>
           <div className="designBox scb">
             <h3>模様</h3>
             <div className ="mBox">
               <div className = 'button' onClick={() => {handleFilterSun()}}>
                 <span className = {'checkbox' + suncount}></span>
                 <span className ='searchButton'>太陽</span>
               </div>
               <div className = 'button' onClick={() => {handleFilterMoon()}}>
                 <span className = {'checkbox' + mooncount}></span>
                 <span className ='searchButton'>月</span>
               </div>
               <div className = 'button' onClick={() => {handleFilterStar()}}>
                 <span className = {'checkbox' + starcount}></span>
                 <span className ='searchButton'>星</span>
               </div>
               <div className = 'button' onClick={() => {handleFilterCross()}}>
                 <span className = {'checkbox' + crosscount}></span>
                 <span className ='searchButton'>十字</span>
               </div>
               <div className = 'button' onClick={() => {handleFilterCreature()}}>
                 <span className = {'checkbox' + creaturecount}></span>
                 <span className ='searchButton'>動物</span>
               </div>
               <div className = 'button' onClick={() => {handleFilterPlant()}}>
                 <span className = {'checkbox' + plantcount}></span>
                 <span className ='searchButton'>植物</span>
               </div>
             </div>
             </div>
             <div className = "areaBox scb">
             <h3>エリア</h3>
             <div className ="mBox">
             <div className = 'button' onClick={() => {handleUnspeArea()}}>
                 <span className = {'checkbox' + Number(unspeArea)}></span>
                 <span className ='searchButton'>指定なし</span>
               </div>
               <div className = 'button' onClick={() => {handleFilterAsia()}}>
                 <span className = {'checkbox' + asiacount}></span>
                 <span className ='searchButton'>アジア</span>
               </div>
               <div className = 'button' onClick={() => {handleFilterEu()}}>
                 <span className = {'checkbox' + eucount}></span>
                 <span className ='searchButton'>ヨーロッパ</span>
               </div>
               <div className = 'button' onClick={() => {handleFilterAfrica()}}>
                 <span className = {'checkbox' + africacount}></span>
                 <span className ='searchButton'>アフリカ</span>
               </div>
               <div className = 'button' onClick={() => {handleFilterNcAmerica()}}>
                 <span className = {'checkbox' + ncAmericacount}></span>
                 <span className ='searchButton'>北中央アメリカ</span>
               </div>
               <div className = 'button' onClick={() => {handleFilterSAmerica()}}>
                 <span className = {'checkbox' + sAmericacount}></span>
                 <span className ='searchButton'>南アメリカ</span>
               </div>
               <div className = 'button' onClick={() => {handleFilterOceania()}}>
                 <span className = {'checkbox' + oceaniacount}></span>
                 <span className ='searchButton'>オセアニア</span>
               </div>
            </div>
            </div>
              <div className = "firstletterBox scb">
              <h3>一文字目検索</h3>
              <div className="select-hiragana">
                <select value={filterHiragana} onChange={firLetterFilter}>
                  <option value=''>指定なし</option>
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
          </div>
        }
      </Motion>
    );
  };

  const FirstDetailSearch = () => {
    return(
      <div className ="detail-scb" style = {{'maxHeight':'0px', overflow:'hidden', position:'relative',}}>
      </div>
    );
  };

  // 検索モード切替3つ
  const smhtmlOpen = () => {
    return(
      <Motion defaultStyle={{y:0}} style={{y:spring(370,{ stiffness: 60 })}}>
        {interpolatingStyle => 
            <div className ="mBox searchMode" style = {{'maxHeight':`${interpolatingStyle.y}px`, overflow:'hidden', position:'relative',}}>
            <div className = "mode">
              <div className = 'button' onClick={() => {handleColorPartial()}}>
                <span className = {'checkbox' + Number(partialColor)}></span>
                <span className ='searchButton'>部分一致</span>
              </div>
              <div className = 'button' onClick={() => {handleColorPerfect()}}>
                <span className = {'checkbox' + Number(perfectColor)}></span>
                <span className ='searchButton'>完全一致</span>
              </div>
              <div className = 'button' onClick={() => {handleColorExclusion()}}>
                <span className = {'checkbox' + Number(exclusionColor)}></span>
                <span className ='searchButton'>除外</span>
              </div>
            </div>
            <div className = "mode">
              <div className = 'button' onClick={() => {handleMColorSwitch()}}>
                <span className = {'checkbox' + Number(mColorSwitch)}></span>
                <span className ='searchButton'>メインカラー</span>
              </div>
              <div className = 'button' onClick={() => {handleFColorSwitch()}}>
                <span className = {'checkbox' + Number(fColorSwitch)}></span>
                <span className ='searchButton'>フルカラー</span>
              </div>
            </div>
          </div>
        }
      </Motion>
    );
  };

  const smhtmlClose = () => {
    return(
      <Motion defaultStyle={{y:230}} style={{y:spring(0,{ stiffness: 170 })}}>
        {interpolatingStyle => 
            <div className ="mBox searchMode" style = {{'maxHeight':`${interpolatingStyle.y}px`, overflow:'hidden', position:'relative',}}>
            <div className = "mode">
              <div className = 'button' onClick={() => {handleColorPartial()}}>
                <span className = {'checkbox' + Number(partialColor)}></span>
                <span className ='searchButton'>部分一致</span>
              </div>
              <div className = 'button' onClick={() => {handleColorPerfect()}}>
                <span className = {'checkbox' + Number(perfectColor)}></span>
                <span className ='searchButton'>完全一致</span>
              </div>
              <div className = 'button' onClick={() => {handleColorExclusion()}}>
                <span className = {'checkbox' + Number(exclusionColor)}></span>
                <span className ='searchButton'>除外</span>
              </div>
            </div>
            <div className = "mode">
              <div className = 'button' onClick={() => {handleMColorSwitch()}}>
                <span className = {'checkbox' + Number(mColorSwitch)}></span>
                <span className ='searchButton'>メインカラー</span>
              </div>
              <div className = 'button' onClick={() => {handleFColorSwitch()}}>
                <span className = {'checkbox' + Number(fColorSwitch)}></span>
                <span className ='searchButton'>フルカラー</span>
              </div>
            </div>
          </div>
        }
      </Motion>
    );
  };

  const Firstsmhtml = () => {
    return(
      <div className ="mBox searchMode" style = {{'maxHeight':'0px', overflow:'hidden', position:'relative',}}>
      </div>
    );
  };

  //検索する機構と、国旗を表示する部分。
  return (
    <div className ='flags'>
      <div className = 'howto'>
        <h3 onClick = {() => {howtoOpen()}}>
          SOFの使い方
          {isHowToOpen ? <FontAwesomeIcon icon={faCaretUp} /> : <FontAwesomeIcon icon={faCaretDown} />}
        </h3>
        {fIsHowToOpen ?
        isHowToOpen ? SofDescOpen() : SofDescClose()
        : FirstSofDesc()}
        <p>※”<FontAwesomeIcon icon={faCaretDown} />”をタップorクリックで開きます</p>
      </div>
      <div className ='searchBox'>
        <div className = "colorBox scb">
          <h3>色</h3>
          <h4 className = "search-mode">
            <span onClick={() => {smOpen()}}>
            検索モード切替
            {issmOpen ? <FontAwesomeIcon icon={faCaretUp} /> : <FontAwesomeIcon icon={faCaretDown} />}
            </span>
          </h4>
          {fIssmOpen ? 
          issmOpen ? smhtmlOpen() : smhtmlClose()
          : Firstsmhtml()}
          <div className ="mBox">
            <div className = 'button' onClick={() => {handleFilterRed()}}>
              <span className = {'checkbox' + redcount}></span>
              <span className ='searchButton'>赤色</span>
            </div>
            <div className = 'button' onClick={() => {handleFilterBlue()}}>
              <span className = {'checkbox' + bluecount}></span>
              <span className ='searchButton'>青色</span>
            </div>
            <div className = 'button' onClick={() => {handleFilterGreen()}}>
              <span className = {'checkbox' + greencount}></span>
              <span className ='searchButton'>緑色</span>
            </div>
            <div className = 'button' onClick={() => {handleFilterYellow()}}>
              <span className = {'checkbox' + yellowcount}></span>
              <span className ='searchButton'>黄色</span>
            </div>
            <div className = 'button' onClick={() => {handleFilterWhite()}}>
              <span className = {'checkbox' + whitecount}></span>
              <span className ='searchButton'>白色</span>
            </div>
            <div className = 'button' onClick={() => {handleFilterBlack()}}>
              <span className = {'checkbox' + blackcount}></span>
              <span className ='searchButton'>黒色</span>
            </div>
            <div className = 'button' onClick={() => {handleFilterGold()}}>
              <span className = {'checkbox' + goldcount}></span>
              <span className ='searchButton'>金色</span>
            </div>
            <div className = 'button' onClick={() => {handleFilterPurple()}}>
              <span className = {'checkbox' + purplecount}></span>
              <span className ='searchButton'>紫色</span>
            </div>
            <div className = 'button' onClick={() => {handleFilterOrange()}}>
              <span className = {'checkbox' + orangecount}></span>
              <span className ='searchButton'>橙色</span>
            </div>
          </div>
        </div>
        <div className = "sonotaBox scb">
          <h3>国連加盟</h3>
          <div className ="mBox">
            <div className = 'button' onClick={() => {handleFilterUnspeKokuren()}}>
              <span className = {'checkbox' + Number(unspeKokuren)}></span>
              <span className ='searchButton'>指定なし</span>
            </div>
            <div className = 'button' onClick={() => {handleFilterKokuren()}}>
              <span className = {'checkbox' + kokurencount}></span>
              <span className ='searchButton'>国連加盟国</span>
            </div>
            <div className = 'button' onClick={() => {handleFilterNotKokuren()}}>
              <span className = {'checkbox' + Number(notKokurencount)}></span>
              <span className ='searchButton'>国連非加盟国</span>
            </div>
          </div>
        </div>
        <div className = "keywordBox scb">
          <h3>キーワード検索</h3>
          <div className="inputgroup">
            <input type="text" name="title" className="formInput" placeholder="国名" autoComplete="off"
              value={filterQuery.title || ''}
              onChange={handleFilter}
            />
          </div>
        </div>
        <h3 className = "detail-search">
          <span onClick={() => {handleDetailSearchMode()}}>
          詳細検索表示
          {isDetailOpen ? <FontAwesomeIcon icon={faCaretUp} /> : <FontAwesomeIcon icon={faCaretDown} />}
          </span>
        </h3>
        {firIsDetailOpen ? 
        isDetailOpen ? SearchDetailSearchOpen() : SearchDetailSearchClose()
        : FirstDetailSearch()}
        <div className='result'>
          <span>{'表示件数：' + filteredImage.length + ' / ' + props.mainImage.length}</span>
        </div>
      </div>
      <div className = 'flagArea'>
        {
          filteredImage.map((flagImage) => {
            return(
              <Link to = {'/' + flagImage.url}>
                <Flags key = {flagImage.id} mainFlagImage = {flagImage}/>
              </Link>
            );
          })
        }
      </div>
      <Share url='https://sof.flagshitory.jp/' title='Search of Flags | 絞り込み検索可能な『旗・国旗一覧』' />
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