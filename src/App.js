import React from 'react';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import PreLoad from './components/PreLoad';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

// 国旗画像のimport
import afghanistan from './assets/flagImages/afghanistan.svg';
import albania from './assets/flagImages/albania.svg';
import algeria from './assets/flagImages/algeria.svg';
import andorra from './assets/flagImages/andorra.svg';
import angola from './assets/flagImages/angola.svg';
import antiguaBarbuda from './assets/flagImages/antiguaBarbuda.svg';
import arab from './assets/flagImages/arab.svg';
import argentina from './assets/flagImages/argentina.svg';
import armenia from './assets/flagImages/armenia.svg';
import australia from './assets/flagImages/australia.svg';
import austria from './assets/flagImages/austria.svg';
import azerbaijan from './assets/flagImages/azerbaijan.svg';
import bahamas from './assets/flagImages/bahamas.svg';
import bahrain from './assets/flagImages/bahrain.svg';
import bangladesh from './assets/flagImages/bangladesh.svg';
import barbados from './assets/flagImages/barbados.svg';
import belarus from './assets/flagImages/belarus.svg';
import belgium from './assets/flagImages/belgium.svg';
import belize from './assets/flagImages/belize.svg';
import benin from './assets/flagImages/benin.svg';
import bhutan from './assets/flagImages/bhutan.svg';
import bolivia from './assets/flagImages/bolivia.svg';
import bosniaHerzegovina from './assets/flagImages/bosniaHerzegovina.svg';
import botswana from './assets/flagImages/botswana.svg';
import brazil from './assets/flagImages/brazil.svg';
import brunei from './assets/flagImages/brunei.svg';
import bulgaria from './assets/flagImages/bulgaria.svg';
import burkinaFaso from './assets/flagImages/burkinaFaso.svg';
import burundi from './assets/flagImages/burundi.svg';
import caboVerde from './assets/flagImages/caboVerde.svg';
import cambodia from './assets/flagImages/cambodia.svg';
import cameroon from './assets/flagImages/cameroon.svg';
import canada from './assets/flagImages/canada.svg';
import centralAfrican from './assets/flagImages/centralAfrican.svg';
import chad from './assets/flagImages/chad.svg';
import chile from './assets/flagImages/chile.svg';
import china from './assets/flagImages/china.svg';
import colombia from './assets/flagImages/colombia.svg';
import comoros from './assets/flagImages/comoros.svg';
import congo from './assets/flagImages/congo.svg';
import costaRica from './assets/flagImages/costaRica.svg';
import cotod from './assets/flagImages/cotodIvoire.svg';
import croatia from './assets/flagImages/croatia.svg';
import cuba from './assets/flagImages/cuba.svg';
import cyprus from './assets/flagImages/cyprus.svg';
import czech from './assets/flagImages/czech.svg';
import denmark from './assets/flagImages/denmark.svg';
import djibouti from './assets/flagImages/djibouti.svg';
import dominica from './assets/flagImages/dominica.svg';
import dominicanRepublic from './assets/flagImages/dominicanRepublic.svg';
import eastTimor from './assets/flagImages/eastTimor.svg';
import ecuador from './assets/flagImages/ecuador.svg';
import egypt from './assets/flagImages/egypt.svg';
import elSalvador from './assets/flagImages/elSalvador.svg';
import equatorialGuinea from './assets/flagImages/equatorialGuinea.svg';
import eritrea from './assets/flagImages/eritrea.svg';
import estonia from './assets/flagImages/estonia.svg';
import eswatini from './assets/flagImages/eswatini.svg';
import ethiopia from './assets/flagImages/ethiopia.svg';
import fiji from './assets/flagImages/fiji.svg';
import finland from './assets/flagImages/finland.svg';
import france from './assets/flagImages/france.svg';
import gabon from './assets/flagImages/gabon.svg';
import gambia from './assets/flagImages/gambia.svg';
import georgia from './assets/flagImages/georgia.svg';
import germany from './assets/flagImages/germany.svg';
import ghana from './assets/flagImages/ghana.svg';
import greece from './assets/flagImages/greece.svg';
import grenada from './assets/flagImages/grenada.svg';
import guatemala from './assets/flagImages/guatemala.svg';
import guinea from './assets/flagImages/guinea.svg';
import guineaBissau from './assets/flagImages/guineaBissau.svg';
import guyana from './assets/flagImages/guyana.svg';
import haiti from './assets/flagImages/haiti.svg';
import honduras from './assets/flagImages/honduras.svg';
import hungary from './assets/flagImages/hungary.svg';
import iceland from './assets/flagImages/iceland.svg';
import india from './assets/flagImages/india.svg';
import indonesia from './assets/flagImages/indonesia.svg';
import iran from './assets/flagImages/iran.svg';
import iraq from './assets/flagImages/iraq.svg';
import ireland from './assets/flagImages/ireland.svg';
import israel from './assets/flagImages/israel.svg';
import italy from './assets/flagImages/italy.svg';
import jamaica from './assets/flagImages/jamaica.svg';
import japan from './assets/flagImages/japan.svg';
import jordan from './assets/flagImages/jordan.svg';
import kazakhstan from './assets/flagImages/kazakhstan.svg';
import kenya from './assets/flagImages/kenya.svg';
import kiribati from './assets/flagImages/kiribati.svg';
import kuwait from './assets/flagImages/kuwait.svg';
import kyrgyzstan from './assets/flagImages/kyrgyzstan.svg';
import laos from './assets/flagImages/laos.svg';
import latvia from './assets/flagImages/latvia.svg';
import lebanon from './assets/flagImages/lebanon.svg';
import lesotho from './assets/flagImages/lesotho.svg';
import liberia from './assets/flagImages/liberia.svg';
import libya from './assets/flagImages/libya.svg';
import liechtenstein from './assets/flagImages/liechtenstein.svg';
import lithuania from './assets/flagImages/lithuania.svg';
import luxembourg from './assets/flagImages/luxembourg.svg';
import madagascar from './assets/flagImages/madagascar.svg';
import malawi from './assets/flagImages/malawi.svg';
import malaysia from './assets/flagImages/malaysia.svg';
import maldives from './assets/flagImages/maldives.svg';
import mali from './assets/flagImages/mali.svg';
import malta from './assets/flagImages/malta.svg';
import marshallIslands from './assets/flagImages/marshallIslands.svg';
import mauritania from './assets/flagImages/mauritania.svg';
import mauritius from './assets/flagImages/mauritius.svg';
import mexico from './assets/flagImages/mexico.svg';
import micronesia from './assets/flagImages/micronesia.svg';
import moldova from './assets/flagImages/moldova.svg';
import monaco from './assets/flagImages/monaco.svg';
import mongolia from './assets/flagImages/mongolia.svg';
import montenegro from './assets/flagImages/montenegro.svg';
import morocco from './assets/flagImages/morocco.svg';
import mozambique from './assets/flagImages/mozambique.svg';
import myanmar from './assets/flagImages/myanmar.svg';
import namibia from './assets/flagImages/namibia.svg';
import nauru from './assets/flagImages/nauru.svg';
import nepal from './assets/flagImages/nepal.svg';
import Netherlands from './assets/flagImages/Netherlands.svg';
import newZealand from './assets/flagImages/newZealand.svg';
import nicaragua from './assets/flagImages/nicaragua.svg';
import niger from './assets/flagImages/niger.svg';
import nigeria from './assets/flagImages/nigeria.svg';
import niue from './assets/flagImages/niue.svg';
import northKorea from './assets/flagImages/northKorea.svg';
import northMacedonia from './assets/flagImages/northMacedonia.svg';
import norway from './assets/flagImages/norway.svg';
import oman from './assets/flagImages/oman.svg';
import pakistan from './assets/flagImages/pakistan.svg';
import palau from './assets/flagImages/palau.svg';
import panama from './assets/flagImages/panama.svg';
import papuaNewGuinea from './assets/flagImages/papuaNewGuinea.svg';
import paraguay from './assets/flagImages/paraguay.svg';
import peru from './assets/flagImages/peru.svg';
import philippines from './assets/flagImages/philippines.svg';
import poland from './assets/flagImages/poland.svg';
import portugal from './assets/flagImages/portugal.svg';
import qatar from './assets/flagImages/qatar.svg';
import republicCongo from './assets/flagImages/republicCongo.svg';
import romania from './assets/flagImages/romania.svg';
import russia from './assets/flagImages/russia.svg';
import rwanda from './assets/flagImages/rwanda.svg';
import saintChristopherNevis from './assets/flagImages/saintChristopherNevis.svg';
import saintLucia from './assets/flagImages/saintLucia.svg';
import saintVincent from './assets/flagImages/saintVincent.svg';
import samoa from './assets/flagImages/samoa.svg';
import sanMarino from './assets/flagImages/sanMarino.svg';
import saotomePrincipe from './assets/flagImages/saotomePrincipe.svg';
import saudiArabia from './assets/flagImages/saudiArabia.svg';
import senegal from './assets/flagImages/senegal.svg';
import serbia from './assets/flagImages/serbia.svg';
import seychelles from './assets/flagImages/seychelles.svg';
import sierraLeone from './assets/flagImages/sierraLeone.svg';
import singapore from './assets/flagImages/singapore.svg';
import slovakia from './assets/flagImages/slovakia.svg';
import slovenia from './assets/flagImages/slovenia.svg';
import solomonIslands from './assets/flagImages/solomonIslands.svg';
import somalia from './assets/flagImages/somalia.svg';
import southAfrica from './assets/flagImages/southAfrica.svg';
import southKorea from './assets/flagImages/southKorea.svg';
import southSudan from './assets/flagImages/southSudan.svg';
import spain from './assets/flagImages/spain.svg';
import sriLanka from './assets/flagImages/sriLanka.svg';
import sudan from './assets/flagImages/sudan.svg';
import suriname from './assets/flagImages/suriname.svg';
import sweden from './assets/flagImages/sweden.svg';
import switzerland from './assets/flagImages/switzerland.svg';
import syria from './assets/flagImages/syria.svg';
import tajikistan from './assets/flagImages/tajikistan.svg';
import tanzania from './assets/flagImages/tanzania.svg';
import thailand from './assets/flagImages/thailand.svg';
import togo from './assets/flagImages/togo.svg';
import tonga from './assets/flagImages/tonga.svg';
import trinidadTobago from './assets/flagImages/trinidadTobago.svg';
import tunisia from './assets/flagImages/tunisia.svg';
import turkey from './assets/flagImages/turkey.svg';
import turkmenistan from './assets/flagImages/turkmenistan.svg';
import tuvalu from './assets/flagImages/tuvalu.svg';
import uganda from './assets/flagImages/uganda.svg';
import ukraine from './assets/flagImages/ukraine.svg';
import unitedKingdom from './assets/flagImages/unitedKingdom.svg';
import unitedStates from './assets/flagImages/unitedStates.svg';
import uruguay from './assets/flagImages/uruguay.svg';
import uzbekistan from './assets/flagImages/uzbekistan.svg';
import vanuatu from './assets/flagImages/vanuatu.svg';
import venezuela from './assets/flagImages/venezuela.svg';
import vietnam from './assets/flagImages/vietnam.svg';
import yemen from './assets/flagImages/yemen.svg';
import zambia from './assets/flagImages/zambia.svg';
import zimbabwe from './assets/flagImages/zimbabwe.svg';
// 2021/03/10追加分
import abkhazia from './assets/flagImages/abkhazia.svg';
import artsakh from './assets/flagImages/artsakh.svg';
import cook from './assets/flagImages/cook.svg';
import donetsk from './assets/flagImages/donetsk.svg';
import kosovo from './assets/flagImages/kosovo.svg';
import northernCyprus from './assets/flagImages/northernCyprus.svg';
import palestine from './assets/flagImages/palestine.svg';
import sahrawi from './assets/flagImages/sahrawi.svg';
import somaliland from './assets/flagImages/somaliland.svg';
import sssetia from './assets/flagImages/sssetia.svg';
import taiwan from './assets/flagImages/taiwan.svg';
import transnistria from './assets/flagImages/transnistria.svg';
import vatican from './assets/flagImages/vatican.svg';
import luhansk from './assets/flagImages/luhansk.svg';
// 03/19追加分
import antarctica from './assets/flagImages/antarctica.svg';
import greenland from './assets/flagImages/greenland.svg';
import mann from './assets/flagImages/mann.svg';


// マップ画像のimport
import afghanistanMap from './assets/mapImages/afghanistanMap.svg';
import albaniaMap from './assets/mapImages/albaniaMap.svg';
import algeriaMap from './assets/mapImages/argeriaMap.svg';
import andorraMap from './assets/mapImages/andorraMap.svg';
import angolaMap from './assets/mapImages/angolaMap.svg';
import antiguaBarbudaMap from './assets/mapImages/antiguaMap.svg';
import arabMap from './assets/mapImages/arabMap.svg';
import argentinaMap from './assets/mapImages/argentineMap.svg';
import armeniaMap from './assets/mapImages/armeniaMap.svg';
import australiaMap from './assets/mapImages/australiaMap.svg';
import austriaMap from './assets/mapImages/austriaMap.svg';
import azerbaijanMap from './assets/mapImages/azerbaijanMap.svg';
import bahamasMap from './assets/mapImages/bahamasMap.svg';
import bahrainMap from './assets/mapImages/bharainMap.svg';
import bangladeshMap from './assets/mapImages/bangladeshMap.svg';
import barbadosMap from './assets/mapImages/barbadosMap.svg';
import belarusMap from './assets/mapImages/belarusMap.svg';
import belgiumMap from './assets/mapImages/belgiumMap.svg';
import belizeMap from './assets/mapImages/belizeMap.svg';
import beninMap from './assets/mapImages/beninMap.svg';
import bhutanMap from './assets/mapImages/bhutanMap.svg';
import boliviaMap from './assets/mapImages/boliviaMap.svg';
import bosniaHerzegovinaMap from './assets/mapImages/bosniaMap.svg';
import botswanaMap from './assets/mapImages/botswanaMap.svg';
import brazilMap from './assets/mapImages/brazilMap.svg';
import bruneiMap from './assets/mapImages/bruneiMap.svg';
import bulgariaMap from './assets/mapImages/bulgariaMap.svg';
import burkinaFasoMap from './assets/mapImages/burkinaMap.svg';
import burundiMap from './assets/mapImages/brundiMap.svg';
import caboVerdeMap from './assets/mapImages/caboverdeMap.svg';
import cambodiaMap from './assets/mapImages/cambodiaMap.svg';
import cameroonMap from './assets/mapImages/cameroonMap.svg';
import canadaMap from './assets/mapImages/canadaMap.svg';
import centralAfricanMap from './assets/mapImages/centralAfricanMap.svg';
import chadMap from './assets/mapImages/chadMap.svg';
import chileMap from './assets/mapImages/chileMap.svg';
import chinaMap from './assets/mapImages/chinaMap.svg';
import colombiaMap from './assets/mapImages/corombiaMap.svg';
import comorosMap from './assets/mapImages/comorosMap.svg';
import congoMap from './assets/mapImages/congoMap.svg';
import costaRicaMap from './assets/mapImages/costaricaMap.svg';
import cotodMap from './assets/mapImages/coteMap.svg';
import croatiaMap from './assets/mapImages/croatiaMap.svg';
import cubaMap from './assets/mapImages/cubaMap.svg';
import cyprusMap from './assets/mapImages/cyprusMap.svg';
import czechMap from './assets/mapImages/czechMap.svg';
import denmarkMap from './assets/mapImages/denmarkMap.svg';
import djiboutiMap from './assets/mapImages/djiboutiMap.svg';
import dominicaMap from './assets/mapImages/dominicaMap.svg';
import dominicanRepublicMap from './assets/mapImages/dominicanMap.svg';
import eastTimorMap from './assets/mapImages/timorMap.svg';
import ecuadorMap from './assets/mapImages/ecuadorMap.svg';
import egyptMap from './assets/mapImages/egyptMap.svg';
import elSalvadorMap from './assets/mapImages/elsalvadorMap.svg';
import equatorialGuineaMap from './assets/mapImages/eqguineaMap.svg';
import eritreaMap from './assets/mapImages/eritreaMap.svg';
import estoniaMap from './assets/mapImages/estoniaMap.svg';
import eswatiniMap from './assets/mapImages/eswatiniMap.svg';
import ethiopiaMap from './assets/mapImages/ethiopiaMap.svg';
import fijiMap from './assets/mapImages/fijiMap.svg';
import finlandMap from './assets/mapImages/finlandMap.svg';
import franceMap from './assets/mapImages/franceMap.svg';
import gabonMap from './assets/mapImages/gabonMap.svg';
import gambiaMap from './assets/mapImages/gumbiaMap.svg';
import georgiaMap from './assets/mapImages/georgiaMap.svg';
import germanyMap from './assets/mapImages/germanyMap.svg';
import ghanaMap from './assets/mapImages/ghanaMap.svg';
import greeceMap from './assets/mapImages/greeceMap.svg';
import grenadaMap from './assets/mapImages/grenadaMap.svg';
import guatemalaMap from './assets/mapImages/guatemalaMap.svg';
import guineaMap from './assets/mapImages/guineaMap.svg';
import guineaBissauMap from './assets/mapImages/guineabissauMap.svg';
import guyanaMap from './assets/mapImages/guyanaMap.svg';
import haitiMap from './assets/mapImages/haitiMap.svg';
import hondurasMap from './assets/mapImages/hondurasMap.svg';
import hungaryMap from './assets/mapImages/hungaryMap.svg';
import icelandMap from './assets/mapImages/icelandMap.svg';
import indiaMap from './assets/mapImages/indiaMap.svg';
import indonesiaMap from './assets/mapImages/indonesiaMap.svg';
import iranMap from './assets/mapImages/iranMap.svg';
import iraqMap from './assets/mapImages/iraqMap.svg';
import irelandMap from './assets/mapImages/irelandMap.svg';
import israelMap from './assets/mapImages/israelMap.svg';
import italyMap from './assets/mapImages/italyMap.svg';
import jamaicaMap from './assets/mapImages/jamaicaMap.svg';
import japanMap from './assets/mapImages/japanMap.svg';
import jordanMap from './assets/mapImages/jordanMap.svg';
import kazakhstanMap from './assets/mapImages/kazakhstanMap.svg';
import kenyaMap from './assets/mapImages/kenyaMap.svg';
import kiribatiMap from './assets/mapImages/kiribatiMap.svg';
import kuwaitMap from './assets/mapImages/kuwaitMap.svg';
import kyrgyzstanMap from './assets/mapImages/kyrgyzMap.svg';
import laosMap from './assets/mapImages/laosMap.svg';
import latviaMap from './assets/mapImages/latviaMap.svg';
import lebanonMap from './assets/mapImages/lebanonMap.svg';
import lesothoMap from './assets/mapImages/lesothoMap.svg';
import liberiaMap from './assets/mapImages/liberiaMap.svg';
import libyaMap from './assets/mapImages/libyaMap.svg';
import liechtensteinMap from './assets/mapImages/liechtensteinMap.svg';
import lithuaniaMap from './assets/mapImages/lithuaniaMap.svg';
import luxembourgMap from './assets/mapImages/luxembourgMap.svg';
import madagascarMap from './assets/mapImages/madagascarMap.svg';
import malawiMap from './assets/mapImages/malawiMap.svg';
import malaysiaMap from './assets/mapImages/malaysiaMap.svg';
import maldivesMap from './assets/mapImages/maldivesMap.svg';
import maliMap from './assets/mapImages/maliMap.svg';
import maltaMap from './assets/mapImages/maltaMap.svg';
import marshallIslandsMap from './assets/mapImages/marshallMap.svg';
import mauritaniaMap from './assets/mapImages/mauritaniaMap.svg';
import mauritiusMap from './assets/mapImages/mauritiusMap.svg';
import mexicoMap from './assets/mapImages/mexicoMap.svg';
import micronesiaMap from './assets/mapImages/micronesiaMap.svg';
import moldovaMap from './assets/mapImages/moldovaMap.svg';
import monacoMap from './assets/mapImages/monacoMap.svg';
import mongoliaMap from './assets/mapImages/mongoliaMap.svg';
import montenegroMap from './assets/mapImages/montenegroMap.svg';
import moroccoMap from './assets/mapImages/moroccoMap.svg';
import mozambiqueMap from './assets/mapImages/mozambiqueMap.svg';
import myanmarMap from './assets/mapImages/myanmarMap.svg';
import namibiaMap from './assets/mapImages/nambiaMap.svg';
import nauruMap from './assets/mapImages/nauruMap.svg';
import nepalMap from './assets/mapImages/nepalMap.svg';
import NetherlandsMap from './assets/mapImages/netherlandsMap.svg';
import newZealandMap from './assets/mapImages/newzealandMap.svg';
import nicaraguaMap from './assets/mapImages/nicaraguaMap.svg';
import nigerMap from './assets/mapImages/nigerMap.svg';
import nigeriaMap from './assets/mapImages/nigeriaMap.svg';
import niueMap from './assets/mapImages/niueMap.svg';
import northKoreaMap from './assets/mapImages/northkoreaMap.svg';
import northMacedoniaMap from './assets/mapImages/macedoniaMap.svg';
import norwayMap from './assets/mapImages/norwayMap.svg';
import omanMap from './assets/mapImages/omanMap.svg';
import pakistanMap from './assets/mapImages/pakistanMap.svg';
import palauMap from './assets/mapImages/palaoMap.svg';
import panamaMap from './assets/mapImages/panamaMap.svg';
import papuaNewGuineaMap from './assets/mapImages/papuaMap.svg';
import paraguayMap from './assets/mapImages/paraguayMap.svg';
import peruMap from './assets/mapImages/peruMap.svg';
import philippinesMap from './assets/mapImages/philippinesMap.svg';
import polandMap from './assets/mapImages/polandMap.svg';
import portugalMap from './assets/mapImages/portugalMap.svg';
import qatarMap from './assets/mapImages/qatarMap.svg';
import republicCongoMap from './assets/mapImages/congoRepublicMap.svg';
import romaniaMap from './assets/mapImages/romaniaMap.svg';
import russiaMap from './assets/mapImages/russiaMap.svg';
import rwandaMap from './assets/mapImages/rwandaMap.svg';
import saintChristopherNevisMap from './assets/mapImages/nevisMap.svg';
import saintLuciaMap from './assets/mapImages/saintluciaMap.svg';
import saintVincentMap from './assets/mapImages/vincentMap.svg';
import samoaMap from './assets/mapImages/samoaMap.svg';
import sanMarinoMap from './assets/mapImages/sanmarinoMap.svg';
import saotomePrincipeMap from './assets/mapImages/saotomeMap.svg';
import saudiArabiaMap from './assets/mapImages/saudiarabiaMap.svg';
import senegalMap from './assets/mapImages/senegalMap.svg';
import serbiaMap from './assets/mapImages/serbiaMap.svg';
import seychellesMap from './assets/mapImages/seychellesMap.svg';
import sierraLeoneMap from './assets/mapImages/sierraleoneMap.svg';
import singaporeMap from './assets/mapImages/syngaporeMap.svg';
import slovakiaMap from './assets/mapImages/slovakiaMap.svg';
import sloveniaMap from './assets/mapImages/sloveniaMap.svg';
import solomonIslandsMap from './assets/mapImages/solomonMap.svg';
import somaliaMap from './assets/mapImages/somaliaMap.svg';
import southAfricaMap from './assets/mapImages/southafricaMap.svg';
import southKoreaMap from './assets/mapImages/koreaMap.svg';
import southSudanMap from './assets/mapImages/southSudanMap.svg';
import spainMap from './assets/mapImages/spainMap.svg';
import sriLankaMap from './assets/mapImages/srilankaMap.svg';
import sudanMap from './assets/mapImages/sudanMap.svg';
import surinameMap from './assets/mapImages/surinameMap.svg';
import swedenMap from './assets/mapImages/swedenMap.svg';
import switzerlandMap from './assets/mapImages/switherlandMap.svg';
import syriaMap from './assets/mapImages/syriaMap.svg';
import tajikistanMap from './assets/mapImages/tajikistanMap.svg';
import tanzaniaMap from './assets/mapImages/tanzaniaMap.svg';
import thailandMap from './assets/mapImages/thailandMap.svg';
import togoMap from './assets/mapImages/togoMap.svg';
import tongaMap from './assets/mapImages/tongaMap.svg';
import trinidadTobagoMap from './assets/mapImages/trinidadMap.svg';
import tunisiaMap from './assets/mapImages/tunisiaMap.svg';
import turkeyMap from './assets/mapImages/turkeyMap.svg';
import turkmenistanMap from './assets/mapImages/turkmenistanMap.svg';
import tuvaluMap from './assets/mapImages/tuvaluMap.svg';
import ugandaMap from './assets/mapImages/ugandaMap.svg';
import ukraineMap from './assets/mapImages/ukraineMap.svg';
import unitedKingdomMap from './assets/mapImages/britainMap.svg';
import unitedStatesMap from './assets/mapImages/americaMap.svg';
import uruguayMap from './assets/mapImages/uruguayMap.svg';
import uzbekistanMap from './assets/mapImages/uzbekistanMap.svg';
import vanuatuMap from './assets/mapImages/vanuatuMap.svg';
import venezuelaMap from './assets/mapImages/venezuelaMap.svg';
import vietnamMap from './assets/mapImages/vietnamMap.svg';
import yemenMap from './assets/mapImages/yemenMap.svg';
import zambiaMap from './assets/mapImages/zambiaMap.svg';
import zimbabweMap from './assets/mapImages/zimbabweMap.svg';
// 2021/03/10追加分
import abkhaziaMap from './assets/mapImages/abkhaziaMap.svg';
import artsakhMap from './assets/mapImages/artsakhMap.svg';
import cookMap from './assets/mapImages/cookMap.svg';
import donetskMap from './assets/mapImages/donetskMap.svg';
import kosovoMap from './assets/mapImages/kosovoMap.svg';
import northernCyprusMap from './assets/mapImages/northernCyprusMap.svg';
import palestineMap from './assets/mapImages/palestineMap.svg';
import sahrawiMap from './assets/mapImages/saharawiMap.svg';
import somalilandMap from './assets/mapImages/somalilandMap.svg';
import sssetiaMap from './assets/mapImages/sssetiaMap.svg';
import taiwanMap from './assets/mapImages/taiwanMap.svg';
import transnistriaMap from './assets/mapImages/transnistriaMap.svg';
import vaticanMap from './assets/mapImages/vaticanMap.svg';
import luhanskMap from './assets/mapImages/luhanskMap.svg';
// 03/19追加分
import antarcticaMap from './assets/mapImages/antarcticaMap.svg';
import greenlandMap from './assets/mapImages/greenlandMap.svg';
import mannMap from './assets/mapImages/mannMap.svg';



//個別ページのimport
import IcelandPage from './components/countryFlags/Iceland';
import IrelandPage from './components/countryFlags/Ireland';
import AzerbaijanPage from './components/countryFlags/Azerbaijan';
import AfghanistanPage from './components/countryFlags/Afghanistan';
import AbkhaziaPage from './components/countryFlags/Abkhazia';
import AmericaPage from './components/countryFlags/America';
import ArabPage from './components/countryFlags/Arab';
import AlgeriaPage from './components/countryFlags/Algeria';
import ArgentinePage from './components/countryFlags/Argentine';
import ArtsakhPage from './components/countryFlags/Artsakh';
import AlbaniaPage from './components/countryFlags/Albania';
import ArmeniaPage from './components/countryFlags/Armenia';
import AngolaPage from './components/countryFlags/Angola';
import AntiguaPage from './components/countryFlags/Antigua';
import AndorraPage from './components/countryFlags/Andorra';
import YemenPage from './components/countryFlags/Yemen';
import UnitedKingdomPage from './components/countryFlags/UnitedKingdom';
import IsraelPage from './components/countryFlags/Israel';
import ItalyPage from './components/countryFlags/Italy';
import IraqPage from './components/countryFlags/Iraq';
import IranPage from './components/countryFlags/Iran';
import IndiaPage from './components/countryFlags/India';
import IndonesiaPage from './components/countryFlags/Indonesia';
import UgandaPage from './components/countryFlags/Uganda';
import UkrainePage from './components/countryFlags/Ukraine';
import UzbekistanPage from './components/countryFlags/Uzbekistan';
import UruguayPage from './components/countryFlags/Uruguay';
import EcuadorPage from './components/countryFlags/Ecuador';
import EgyptPage from './components/countryFlags/Egypt';
import EstoniaPage from './components/countryFlags/Estonia';
import EswatiniPage from './components/countryFlags/Eswatini';
import EthiopiaPage from './components/countryFlags/Ethiopia';
import EritreaPage from './components/countryFlags/Eritrea';
import ElsalvadorPage from './components/countryFlags/Elsalvador';
import TransnistriaPage from './components/countryFlags/Transnistria';
import AustraliaPage from './components/countryFlags/Australia';
import AustriaPage from './components/countryFlags/Austria';
import OmanPage from './components/countryFlags/Oman';
import NetherlandsPage from './components/countryFlags/Netherlands';
import GuyanaPage from './components/countryFlags/Guyana';
import KazakhstanPage from './components/countryFlags/Kazakhstan';
import QatarPage from './components/countryFlags/Qatar';
import GhanaPage from './components/countryFlags/Ghana';
import CaboverdePage from './components/countryFlags/Caboverde';
import GabonPage from './components/countryFlags/Gabon';
import CanadaPage from './components/countryFlags/Canada';
import CameroonPage from './components/countryFlags/Cameroon';
import KoreaPage from './components/countryFlags/Korea';
import GambiaPage from './components/countryFlags/Gambia';
import CambodiaPage from './components/countryFlags/Cambodia';
import NorthernCyprusPage from './components/countryFlags/NorthernCyprus';
import NorthKoreaPage from './components/countryFlags/NorthKorea';
import NorthMacedoniaPage from './components/countryFlags/NorthMacedonia';
import GuineaPage from './components/countryFlags/Guinea';
import GuineaBissauPage from './components/countryFlags/GuineaBissau';
import CyprusPage from './components/countryFlags/Cyprus';
import CubaPage from './components/countryFlags/Cuba';
import GreecePage from './components/countryFlags/Greece';
import KiribatiPage from './components/countryFlags/Kiribati';
import KyrgyzPage from './components/countryFlags/Kyrgyz';
import GuatemalaPage from './components/countryFlags/Guatemala';
import KuwaitPage from './components/countryFlags/Kuwait';
import CookPage from './components/countryFlags/Cook';
import GrenadaPage from './components/countryFlags/Grenada';
import CroatiaPage from './components/countryFlags/Croatia';
import KenyaPage from './components/countryFlags/Kenya';
import CotedPage from './components/countryFlags/Coted';
import CostaricaPage from './components/countryFlags/Costarica';
import KosovoPage from './components/countryFlags/Kosovo';
import ComorosPage from './components/countryFlags/Comoros';
import ColombiaPage from './components/countryFlags/Colombia';
import CongoPage from './components/countryFlags/Congo';
import RepublicCongoPage from './components/countryFlags/RepublicCongo';
import SaudiarabiaPage from './components/countryFlags/Saudiarabia';
import SahrawiPage from './components/countryFlags/Sahrawi';
import SamoaPage from './components/countryFlags/Samoa';
import SaotomePage from './components/countryFlags/Saotome';
import ZambiaPage from './components/countryFlags/Zambia';
import SanmarinoPage from './components/countryFlags/Sanmarino';
import SierraleonePage from './components/countryFlags/Sierraleone';
import DjiboutiPage from './components/countryFlags/Djibouti';
import JamaicaPage from './components/countryFlags/Jamaica';
import GeorgiaPage from './components/countryFlags/Georgia';
import SyriaPage from './components/countryFlags/Syria';
import SingaporePage from './components/countryFlags/Singapore';
import ZimbabwePage from './components/countryFlags/Zimbabwe';
import SwissPage from './components/countryFlags/Swiss';
import SwedenPage from './components/countryFlags/Sweden';
import SudanPage from './components/countryFlags/Sudan';
import SpainPage from './components/countryFlags/Spain';
import SurinamePage from './components/countryFlags/Suriname';
import SrilankaPage from './components/countryFlags/Srilanka';
import SlovakiaPage from './components/countryFlags/Slovakia';
import SloveniaPage from './components/countryFlags/Slovenia';
import SeychellesPage from './components/countryFlags/Seychelles';
import EqGuineaPage from './components/countryFlags/EqGuinea';
import SenegalPage from './components/countryFlags/Senegal';
import SerbiaPage from './components/countryFlags/Serbia';
import NevisPage from './components/countryFlags/Nevis';
import VincentPage from './components/countryFlags/Vincent';
import SaintluciaPage from './components/countryFlags/Saintlucia';
import SomaliaPage from './components/countryFlags/Somalia';
import SomalilandPage from './components/countryFlags/Somaliland';
import SolomonPage from './components/countryFlags/Solomon';
import ThailandPage from './components/countryFlags/Thailand';
import TaiwanPage from './components/countryFlags/Taiwan';
import TajikistanPage from './components/countryFlags/Tajikistan';
import TanzaniaPage from './components/countryFlags/Tanzania';
import CzechPage from './components/countryFlags/Czech';
import ChadPage from './components/countryFlags/Chad';
import CentralAfricanPage from './components/countryFlags/CentralAfrican';
import ChinaPage from './components/countryFlags/China';
import TunisiaPage from './components/countryFlags/Tunisia';
import ChilePage from './components/countryFlags/Chile';
import TuvaluPage from './components/countryFlags/Tuvalu';
import DenmarkPage from './components/countryFlags/Denmark';
import GermanyPage from './components/countryFlags/Germany';
import TogoPage from './components/countryFlags/Togo';
import DonetskPage from './components/countryFlags/Donetsk';
import DominicanPage from './components/countryFlags/Dominican';
import DominicaPage from './components/countryFlags/Dominica';
import TrinidadPage from './components/countryFlags/Trinidad';
import TurkmenistanPage from './components/countryFlags/Turkmenistan';
import TurkeyPage from './components/countryFlags/Turkey';
import TongaPage from './components/countryFlags/Tonga';
import NigeriaPage from './components/countryFlags/Nigeria';
import NauruPage from './components/countryFlags/Nauru';
import NamibiaPage from './components/countryFlags/Namibia';
import NiuePage from './components/countryFlags/Niue';
import NicaraguaPage from './components/countryFlags/Nicaragua';
import NigerPage from './components/countryFlags/Niger';
import JapanPage from './components/countryFlags/Japan';
import NewzealandPage from './components/countryFlags/Newzealand';
import NepalPage from './components/countryFlags/Nepal';
import NorwayPage from './components/countryFlags/Norway';
import BahrainPage from './components/countryFlags/Bahrain';
import HaitiPage from './components/countryFlags/Haiti';
import PakistanPage from './components/countryFlags/Pakistan';
import VaticanPage from './components/countryFlags/Vatican';
import PanamaPage from './components/countryFlags/Panama';
import VanuatuPage from './components/countryFlags/Vanuatu';
import BahamasPage from './components/countryFlags/Bahamas';
import PapuaPage from './components/countryFlags/Papua';
import PalauPage from './components/countryFlags/Palau';
import ParaguayPage from './components/countryFlags/Paraguay';
import BarbadosPage from './components/countryFlags/Barbados';
import PalestinePage from './components/countryFlags/Palestine';
import HungaryPage from './components/countryFlags/Hungary';
import BangladeshPage from './components/countryFlags/Bangladesh';
import TimorPage from './components/countryFlags/Timor';
import FijiPage from './components/countryFlags/Fiji';
import PhilippinesPage from './components/countryFlags/Philippines';
import FinlandPage from './components/countryFlags/Finland';
import BhutanPage from './components/countryFlags/Bhutan';
import BrazilPage from './components/countryFlags/Brazil';
import FrancePage from './components/countryFlags/France';
import BulgariaPage from './components/countryFlags/Bulgaria';
import BurkinafasoPage from './components/countryFlags/Burkinafaso';
import BruneiPage from './components/countryFlags/Brunei';
import BurundiPage from './components/countryFlags/Burundi';
import VietnamPage from './components/countryFlags/Vietnam';
import BeninPage from './components/countryFlags/Benin';
import VenezuelaPage from './components/countryFlags/Venezuela';
import BelarusPage from './components/countryFlags/Belarus';
import BelizePage from './components/countryFlags/Belize';
import PeruPage from './components/countryFlags/Peru';
import BelgiumPage from './components/countryFlags/Belgium';
import PolandPage from './components/countryFlags/Poland';
import BosniaPage from './components/countryFlags/Bosnia';
import BotswanaPage from './components/countryFlags/Botswana';
import BoliviaPage from './components/countryFlags/Bolivia';
import PortugalPage from './components/countryFlags/Portugal';
import HondurasPage from './components/countryFlags/Honduras';
import MarshallPage from './components/countryFlags/Marshall';
import MadagascarPage from './components/countryFlags/Madagascar';
import MalawiPage from './components/countryFlags/Malawi';
import MaliPage from './components/countryFlags/Mali';
import MaltaPage from './components/countryFlags/Malta';
import MalaysiaPage from './components/countryFlags/Malaysia';
import MicronesiaPage from './components/countryFlags/Micronesia';
import SouthAfricaPage from './components/countryFlags/SouthAfrica';
import SouthOssetiaPage from './components/countryFlags/SouthOssetia';
import SouthSudanPage from './components/countryFlags/SouthSudan';
import MyanmarPage from './components/countryFlags/Myanmar';
import MexicoPage from './components/countryFlags/Mexico';
import MauritiusPage from './components/countryFlags/Mauritius';
import MauritaniaPage from './components/countryFlags/Mauritania';
import MozambiquePage from './components/countryFlags/Mozambique';
import MonacoPage from './components/countryFlags/Monaco';
import MaldivesPage from './components/countryFlags/Maldives';
import MoldovaPage from './components/countryFlags/Moldova';
import MoroccoPage from './components/countryFlags/Morocco';
import MongoliaPage from './components/countryFlags/Mongolia';
import MontenegroPage from './components/countryFlags/Montenegro';
import JordanPage from './components/countryFlags/Jordan';
import LaosPage from './components/countryFlags/Laos';
import LatviaPage from './components/countryFlags/Latvia';
import LithuaniaPage from './components/countryFlags/Lithuania';
import LibyaPage from './components/countryFlags/Libya';
import LiechtensteinPage from './components/countryFlags/Liechtenstein';
import LiberiaPage from './components/countryFlags/Liberia';
import RomaniaPage from './components/countryFlags/Romania';
import LuhanskPage from './components/countryFlags/Luhansk';
import LuxembourgPage from './components/countryFlags/Luxembourg';
import RwandaPage from './components/countryFlags/Rwanda';
import LesothoPage from './components/countryFlags/Lesotho';
import LebanonPage from './components/countryFlags/Lebanon';
import RussiaPage from './components/countryFlags/Russia';
// 03/19追加分
import AntarcticaPage from './components/countryFlags/Antarctica';
import GreenlandPage from './components/countryFlags/Greenland';
import MannPage from './components/countryFlags/Mann';

const App = () => {

  //色タグ
  const red = '赤色';
  const green = '緑色';
  const blue = '青色';
  const yellow = '黄色';
  const white = '白色';
  const black = '黒色';
  const orange = '橙色';
  const gold = '金色';
  const purple = '紫色';

  //模様タグ
  const sun = '太陽';
  const moon = '月';
  const star = '星'
  const cross = '十字';
  const creature　= '生物';
  const plant = '植物';

  //特殊タグ
  const scCross = 'スカンジナビア十字';

  //エリアカテゴリ
  const worldArea = {
    asia: 'アジア',
    eu: 'ヨーロッパ',
    africa: 'アフリカ',
    oceania: 'オセアニア',
    ncAmerica: '北中央アメリカ',
    sAmerica: '南アメリカ',
  };

/*
.descの処理
desc: [
  'ここには国旗の縦横比率を記述する',
  'ここには国旗の意味を記述する',
  'ここには国旗のトリビアを記述する',
]
*/

  const intialState ={
    imageList : [
        {
          mainColor: [red, blue, white],
          fullColor: [red, blue, white],
          tag: [cross, scCross],
          area: worldArea.eu,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'iceland',
          url: 'iceland',
          name: 'アイスランド',
          fullName: 'アイスランド共和国',
          firstLetter: 'あ',
          officialName: 'Republic of Iceland',
          image: iceland,
          location: icelandMap,
          link: 'https://flaghistory.jp/iceland/',
          ogp: 'ogpFlagImages/iceland.png',
          desc: [
            '縦横比率は【18:25】',
            '青色は古くからアイスランドで親しまれてきた国民的な色。赤は国内に多く存在する火山、白は氷河と雪原を表します。旗竿側に交点が少し寄っている十字はスカンジナビア十字と呼ばれるものです。',
            '過去使われていた国旗の中には、重要な輸出品であった干しタラの描かれたものがありました。',
          ],
        },
        {
          mainColor: [green, white, orange],
          fullColor: [green, white, orange],
          tag: [],
          area: worldArea.eu,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'ireland',
          url: 'ireland',
          name: 'アイルランド',
          fullName: 'アイルランド共和国',
          firstLetter: 'あ',
          officialName: 'Republic of Ireland',
          image: ireland,
          location: irelandMap,
          link: 'https://flaghistory.jp/ireland/',
          ogp: 'ogpFlagImages/ireland.png',
          desc: [
            '縦横比率は【1:2】',
            '緑色はケルトの伝統とカトリック、オレンジ色はウィリアム3世の支持者とプロテスタント、白色はその両者の平和を表します。',
            'こうした色の意味はあくまで通説であり、国の憲法として公式に定められたものではありません。',
          ],
        },
        {
          mainColor: [red, green, blue, white],
          fullColor: [red, green, blue, white],
          tag: [moon, star],
          area: worldArea.asia,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'azerbaijan',
          url: 'azerbaijan',
          name: 'アゼルバイジャン',
          fullName: 'アゼルバイジャン共和国',
          firstLetter: 'あ',
          officialName: 'Republic of Azerbaijan',
          image: azerbaijan,
          location: azerbaijanMap,
          link: 'https://flaghistory.jp/azerbaijan/',
          ogp: 'ogpFlagImages/azerbaijan.png',
          desc: [
            '縦横比率は【1:2】',
            '青色はトルコ系民族、赤色は近代化への決意、緑はイスラム、八角星は8つのトルコ系民族を表します。また三日月と星の組み合わせはイスラム教の象徴です。',
            '現国旗を作ったのは『Ali Bey Hussein Zade』という哲学者（1864 - 1940）。ナショナリストのリーダーでもありました。',
          ],
        },
        {
          mainColor: [red, green, white, black],
          fullColor: [red, green, white, black],
          tag: [],
          area: worldArea.asia,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'afghanisntan',
          url: 'afghanistan',
          name: 'アフガニスタン',
          fullName: 'アフガニスタン・イスラム共和国',
          firstLetter: 'あ',
          officialName: 'Islamic Republic of Afghanistan',
          image: afghanistan,
          location: afghanistanMap,
          link: 'https://flaghistory.jp/afghanistan/',
          ogp: 'ogpFlagImages/afghanistan.png',
          desc: [
            '縦横比率は【2:3】',
            '黒は外国に支配されていた暗い過去、赤はイギリスからの独立を目指した戦いで流された血、緑は達成した独立と平和・イスラムを表します。中央に描かれているのはモスク（イスラム教の礼拝堂）やシャハーダ（信仰告白）が描かれた国章です。',
            '19世紀のイギリス保護国時代に黒一色の旗を、1996年のアフガニスタン・イスラム首長国時代には白一色の旗を使っていたことがありました。',
          ],
        },
        {
          mainColor: [red, green, white],
          fullColor: [red, green, white],
          tag: [star],
          area: worldArea.asia,
          kokuren: '国連非加盟国',
          groupingCSS: 'not-kokuren',
          id: 'abkhazia',
          url: 'abkhazia',
          name: 'アブハジア',
          fullName: 'アブハジア共和国',
          firstLetter: 'あ',
          officialName: 'Republic of Abkhazia',
          image: abkhazia,
          location: abkhaziaMap,
          link: 'https://flaghistory.jp/abkhazia/',
          ogp: 'ogpFlagImages/abkhazia.png',
          desc: [
            '縦横比率は【1:2】',
            'カントン（左上）に描かれている手はアブハジアの集団を、7つの星はアブハジアの7つの地域を、緑と白の7つの縞はキリスト教とイスラム教の共生を表しています。また7という数字は神聖さの象徴です。',
            '似たような手の描かれている旗として、現在の北アイルランドで使われているものが挙げられます（アルスター・フラッグ）',
          ],
        },
        {
          mainColor: [red, blue, white],
          fullColor: [red, blue, white],
          tag: [star],
          area: worldArea.ncAmerica,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'unitedStates',
          url: 'america',
          name: 'アメリカ',
          fullName: 'アメリカ合衆国',
          firstLetter: 'あ',
          officialName: 'United States of America',
          image: unitedStates,
          location: unitedStatesMap,
          link: 'https://flaghistory.jp/america/',
          ogp: 'ogpFlagImages/unitedStates.png',
          desc: [
            '縦横比率は【10:19】',
            '青は正義と忍耐、赤は勇気と耐久力、白は純粋さと純血を表します。50個の星はアメリカを構成する50の州を、13の赤白の縞は独立宣言した独立当初の13州を示したものです。',
            '新たに州が加わるたびに星の数を増やしてきたため、世界で最も国旗の変更回数が多い国となりました。',
          ],
        },
        {
          mainColor: [red, green, white, black],
          fullColor: [red, green, white, black],
          tag: [],
          area: worldArea.asia,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'arab',
          url: 'arab',
          name: 'アラブ首長国連邦',
          fullName: 'アラブ首長国連邦',
          firstLetter: 'あ',
          officialName: 'United Arab Emirates',
          image: arab,
          location: arabMap,
          link: 'https://flaghistory.jp/arab/',
          ogp: 'ogpFlagImages/arab.png',
          desc: [
            '縦横比率は【1:2】',
            '赤は犠牲者の血、緑は肥沃な黒土、白は平和と純粋さ、黒は国に近代化をもたらす石油を表します。これら4色の組み合わせは汎アラブ色と呼ばれるものです。',
            '設計したのは『Abdullah Mohammed Al Maainah』氏で、当時19歳でした。',
          ],
        },
        {
          mainColor: [red, green, white],
          fullColor: [red, green, white],
          tag: [moon, star],
          area: worldArea.africa,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'algeria',
          url: 'algeria',
          name: 'アルジェリア',
          fullName: 'アルジェリア民主人民共和国',
          firstLetter: 'あ',
          officialName: 'People\'s Democratic Republic of Algeria',
          image: algeria,
          location: algeriaMap,
          link: 'https://flaghistory.jp/algeria/',
          ogp: 'ogpFlagImages/algeria.png',
          desc: [
            '縦横比率は【2:3】',
            '緑は自然の美しさ、白は平和、赤はアルジェリア独立戦争の際に流された血を表します。また、星と三日月の組み合わせはイスラム教の象徴です。',
            '過去フランスに支配されていたアルジェリアでは、1926年メサーリー・ハージュによる抵抗運動が始まりました。その時使われた民族運動の旗が現国旗の原型となっています。',
          ],
        },
        {
          mainColor: [blue, yellow, white],
          fullColor: [blue, yellow, white],
          tag: [sun],
          area: worldArea.sAmerica,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'argentina',
          url: 'argentine',
          name: 'アルゼンチン',
          fullName: 'アルゼンチン共和国',
          firstLetter: 'あ',
          officialName: 'Argentine Republic',
          image: argentina,
          location: argentinaMap,
          link: 'https://flaghistory.jp/argentine/',
          ogp: 'ogpFlagImages/argentina.png',
          desc: [
            '縦横比率は【9:14】',
            '青は青空、白はラプラタ川を表しています。中央に描かれているのは5月の太陽と呼ばれるものです。',
            '5月の太陽とは独立運動のきっかけとなった５月革命、その時悪天候が一転して晴天になった史実をもとに、その時の太陽を描いたというもので、顔が描かれているのは太陽神インティをモチーフにしたためです。モチーフにした理由は明言された文献がないため推測になりますが、インティがインカ帝国において独立の象徴として扱われていたことからデザインに取り入れられた、と考えるのが自然と判断しています。',
          ],
        },
        {
          mainColor: [red, blue, white, orange],
          fullColor: [red, blue, white, orange],
          tag: [],
          area: worldArea.asia,
          kokuren: '国連非加盟国',
          groupingCSS: 'not-kokuren',
          id: 'artsakh',
          url: 'artsakh',
          name: 'アルツァフ',
          fullName: 'アルツァフ共和国',
          firstLetter: 'あ',
          officialName: 'Republic of Artsakh',
          image: artsakh,
          location: artsakhMap,
          link: 'https://flaghistory.jp/artsakh/',
          ogp: 'ogpFlagImages/artsakh.png',
          desc: [
            '縦横比率は【1:2】',
            '白線はアルメニアの伝統と地域の人口を表し、アルツァフがアルメニアから切り離された地域であることを示します。また白線の模様はアルメニアの絨毯に使われるデザインとも類似しています。',
            '国旗の意味からも察することができるかもしれませんが、アルメニア国旗をモデルとしたデザインになっています。（縦横比率や白線を除く配色が同一です。）',
          ],
        },
        {
          mainColor: [red, black],
          fullColor: [red, black],
          tag: [creature],
          area: worldArea.eu,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'albania',
          url: 'albania',
          name: 'アルバニア',
          fullName: 'アルバニア共和国',
          firstLetter: 'あ',
          officialName: 'Republic of Albania',
          image: albania,
          location: albaniaMap,
          link: 'https://flaghistory.jp/albania/',
          ogp: 'ogpFlagImages/albania.png',
          desc: [
            '縦横比率は【5:7】（法律では1:1.4と表記）',
            '中央に描かれた双頭の鷲は『この国が東洋と西洋の間にあり文化の中心であること』を表しています。なお鷲はアルバニアで古くから評価されている生き物で、その影響もありこの国は『Land of the Eagles』（鷲の土地）とも呼ばれているとか。',
            'ちなみに国旗に描かれている鷲は法律で『双頭のカザノワシ』と定められています。',
          ],
        },
        {
          mainColor: [red, blue, orange],
          fullColor: [red, blue, orange],
          tag: [],
          area: worldArea.asia,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'armenia',
          url: 'armenia',
          name: 'アルメニア',
          fullName: 'アルメニア共和国',
          firstLetter: 'あ',
          officialName: 'Republic of Armenia',
          image: armenia,
          location: armeniaMap,
          link: 'https://flaghistory.jp/armenia/',
          ogp: 'ogpFlagImages/armenia.png',
          desc: [
            '縦横比率は【1:2】',
            '赤はアルメニアの高地と独立・自由・キリスト教を守る戦い、青は平和を求める国民の意志、オレンジは勤勉で創造的な国民を表します。',
            'またこの3色は、アルメニア人の多くが居住してきた大アルメニアの中心にある『アララト山（標高5,137m）』、そこにかかる虹をモチーフにしたとも言われています。',
          ],
        },
        {
          mainColor: [red, yellow, black],
          fullColor: [red, yellow, black],
          tag: [star],
          area: worldArea.africa,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'angola',
          url: 'angola',
          name: 'アンゴラ',
          fullName: 'アンゴラ共和国',
          firstLetter: 'あ',
          officialName: 'Republic of Angola',
          image: angola,
          location: angolaMap,
          link: 'https://flaghistory.jp/angola/',
          ogp: 'ogpFlagImages/angola.png',
          desc: [
            '縦横比率は【2:3】',
            '国際連帯と進歩を表す黄色い五角星。農民、農業、闘争武器を表すナタ。労働者、工業を表す歯車が描かれています。また赤は独立闘争中に流されたアンゴラ人の血、黒はアフリカ大陸、黄色は豊かな資源を表します。',
            'ナタと歯車は、社会主義の象徴である鎌と槌をモチーフにしたものです。これは独立当初社会主義国として独立したためで、現在は複数政党制になっていることから国の運営方針と合致していないデザインになっています。',
          ],
        },
        {
          mainColor: [red, blue, yellow, white, black],
          fullColor: [red, blue, yellow, white, black],
          tag: [sun],
          area: worldArea.ncAmerica,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'antiguaBarbuda',
          url: 'antigua',
          name: 'アンティグア・バーブーダ',
          fullName: 'アンティグア・バーブーダ',
          firstLetter: 'あ',
          officialName: 'Antigua and Barbuda',
          image: antiguaBarbuda,
          location: antiguaBarbudaMap,
          link: 'https://flaghistory.jp/antigua/',
          ogp: 'ogpFlagImages/antiguaBarbuda.png',
          desc: [
            '縦横比率は【2:3】',
            '赤は国民の活力、黒は国民と祖先のアフリカ人、青は希望とカリブ海、白は砂浜を表します。黄色で描かれているのは太陽で、意味は新時代の夜明けです。',
            '国旗のデザインは1966年に公募され、アンティグア高校の美術教師であった『Reginald Samuel』氏がわずか30分程で作成したデザインで最優秀賞を獲得、実際に国旗となり、氏は500ドルの賞金を得ました。（当時の1ドルは360円、また当時の円は現在換算すると2~4倍の価値があるとされる）',
          ],
        },
        {
          mainColor: [red, blue, yellow],
          fullColor: [red, blue, yellow],
          tag: [],
          area: worldArea.eu,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'andorra',
          url: 'andorra',
          name: 'アンドラ',
          fullName: 'アンドラ公国',
          firstLetter: 'あ',
          officialName: 'Principality of Andorra',
          image: andorra,
          location: andorraMap,
          link: 'https://flaghistory.jp/andorra/',
          ogp: 'ogpFlagImages/andorra.png',
          desc: [
            '縦横比率は【7:10】',
            'フランス・スペインの影響下にある国。その影響で青色フランス国旗から、黄色はスペイン国旗から、赤色はフランス・スペインに共通する色として国旗に採用されています。中心に描かれているのはアンドラの国章です。',
            '青黄赤の3色は均等のように見えて、実は8:9:8と黄色の幅が大きくなっています。',
          ],
        },
        {
          mainColor: [red, white, black],
          fullColor: [red, white, black],
          tag: [],
          area: worldArea.asia,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'yemen',
          url: 'yemen',
          name: 'イエメン',
          fullName: 'イエメン共和国',
          firstLetter: 'い',
          officialName: 'Republic of Yemen',
          image: yemen,
          location: yemenMap,
          link: 'https://flaghistory.jp/yemen/',
          ogp: 'ogpFlagImages/yemen.png',
          desc: [
            '縦横比率は【2:3】',
            '赤は自由と統一のために流された血、白は輝ける未来、黒は植民地時代を表します。',
            'アラブ解放旗と同一のデザインで、その影響を受けた国旗です。汎アラブ色には赤白黒緑の4色と、イエメン国旗のような赤白黒も含まれます。（ただしアラブ諸国に属する場合のみ、それ以外の場所での同一カラーは汎アラブ色とは呼ばない）',
          ],
        },
        {
          mainColor: [red, blue, white],
          fullColor: [red, blue, white],
          tag: [cross],
          area: worldArea.eu,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'unitedKingdom',
          url: 'united-kingdom',
          name: 'イギリス',
          fullName: 'グレートブリテン及び北アイルランド連合王国',
          firstLetter: 'い',
          officialName: 'United Kingdom of Great Britain and Northern Ireland',
          image: unitedKingdom,
          location: unitedKingdomMap,
          link: 'https://flaghistory.jp/england/',
          ogp: 'ogpFlagImages/unitedKingdom.png',
          desc: [
            '縦横比率は【1:2】',
            '構成地域であるイングランドの聖ジョージ旗、スコットランドの聖アンドリュース旗、アイルランドの聖パトリック旗を組み合わせた旗。通称『ユニオン・ジャック』、『ユニオン・フラッグ』。',
            '構成地域には他にウェールズが存在しますが、その地域を示す旗のみ現在の国旗に含まれていません。',
          ],
        },
        {
          mainColor: [blue, white],
          fullColor: [blue, white],
          tag: [star],
          area: worldArea.asia,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'israel',
          url: 'israel',
          name: 'イスラエル',
          fullName: 'イスラエル国',
          firstLetter: 'い',
          officialName: 'State of Israel',
          image: israel,
          location: israelMap,
          link: 'https://flaghistory.jp/israel/',
          ogp: 'ogpFlagImages/israel.png',
          desc: [
            '縦横比率は【8:11】',
            '青はパレスチナの空、白はシオニストの清い心、中央の青い六芒星は『ダビデの盾』と呼ばれるユダヤ教徒のシンボルです。また青と白はユダヤ教の祈祷用肩掛けの色から採られています。',
            '別名『六芒星旗』とも呼ばれる国旗です。',
          ],
        },
        {
          mainColor: [red, green, white],
          fullColor: [red, green, white],
          tag: [],
          area: worldArea.eu,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'italy',
          url: 'italy',
          name: 'イタリア',
          fullName: 'イタリア共和国',
          firstLetter: 'い',
          officialName: 'Italian Republic',
          image: italy,
          location: italyMap,
          link: 'https://flaghistory.jp/italy/',
          ogp: 'ogpFlagImages/italy.png',
          desc: [
            '縦横比率は【2:3】',
            '緑は美しい国土、白は雪、赤は熱血を表しています。',
            '緑白赤が使われるようになったのは、イタリアの前身であるチスパダーナ及びトランスパダーナをナポレオンが建国する際（1796年）、フランス国旗の青を緑に変えた配色を国旗として採用したためです。',
          ],
        },
        {
          mainColor: [red, green, white, black],
          fullColor: [red, green, white, black],
          tag: [],
          area: worldArea.asia,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'iraq',
          url: 'iraq',
          name: 'イラク',
          fullName: 'イラク共和国',
          firstLetter: 'い',
          officialName: 'Republic of Iraq',
          image: iraq,
          location: iraqMap,
          link: 'https://flaghistory.jp/iraq/',
          ogp: 'ogpFlagImages/iraq.png',
          desc: [
            '縦横比率は【2:3】',
            '赤は闘争で流した血、白は明るい未来、黒は過去の抑圧、緑はイスラムを表します。また中央に描かれているのは「アッラーフ・アクバル（神は偉大なり）」という言葉です。',
            '国旗に使われている赤白黒緑の4色は汎アラブ色と呼ばれています。',
          ],
        },
        {
          mainColor: [red, green, white],
          fullColor: [red, green, white],
          tag: [moon],
          area: worldArea.asia,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'iran',
          url: 'iran',
          name: 'イラン',
          fullName: 'イラン・イスラム共和国',
          firstLetter: 'い',
          officialName: 'Islamic Republic of Iran',
          image: iran,
          location: iranMap,
          link: 'https://flaghistory.jp/iran/',
          ogp: 'ogpFlagImages/iran.png',
          desc: [
            '縦横比率は【4:7】',
            '緑はイスラム、白は平和、赤は勇気を表しており、白の境界線に描かれている模様は「神は偉大なり」を意味するアラビア語です。上下11回ずつ、計22回書かれています。これは11と22という数で、イラン暦1357年11月22日にイラン・イスラム革命が帝政を打倒したことを表すためです。',
            '中央に描かれているのは国章で、チューリップに似せて作られました（実際は4つの三日月と1つの剣）。イランにおいて若い兵士が愛国心を持って死ぬと、赤いチューリップが墓に生えるという考えに基づくもので、近年では転じて殉教の象徴ともみなされています。',
          ],
        },
        {
          mainColor: [green, blue, yellow, white],
          fullColor: [green, blue, yellow, white],
          tag: [],
          area: worldArea.asia,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'india',
          url: 'india',
          name: 'インド',
          fullName: 'インド共和国',
          firstLetter: 'い',
          officialName: 'Republic of India',
          image: india,
          location: indiaMap,
          link: 'https://flaghistory.jp/india/',
          ogp: 'ogpFlagImages/india.png',
          desc: [
            '縦横比率は【2:3】',
            'サフラン色は勇気と犠牲、白は平和と真理、緑は忠誠と礼節、青は空と海を表します。',
            '中央に描かれているのはアショカ王が立てた柱頭に由来するチャクラで、24本の軸は一日が24時間であること、また終わりなき人生と進歩を表すものです。『アショーカ・チャクラ』とも呼ばれます。',
          ],
        },
        {
          mainColor: [red, white],
          fullColor: [red, white],
          tag: [],
          area: worldArea.asia,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'indonesia',
          url: 'indonesia',
          name: 'インドネシア',
          fullName: 'インドネシア共和国',
          firstLetter: 'い',
          officialName: 'Republic of Indonesia',
          image: indonesia,
          location: indonesiaMap,
          link: 'https://flaghistory.jp/indonesia/',
          ogp: 'ogpFlagImages/indonesia.png',
          desc: [
            '縦横比率は【2:3】',
            '赤は勇気、白は純血を表します。',
            'ヨーロッパに位置するモナコの国旗と縦横比率以外同じデザインで、それもありモナコより制定年が新しいことからデザイン変更を求められたことがありますが、過去より赤と白を伝統的色として使っていることを根拠に拒否した、という出来事がありました。',
          ],
        },
        {
          mainColor: [red, yellow, white, black],
          fullColor: [red, yellow, white, black],
          tag: [creature],
          area: worldArea.africa,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'uganda',
          url: 'uganda',
          name: 'ウガンダ',
          fullName: 'ウガンダ共和国',
          firstLetter: 'う',
          officialName: 'Republic of Uganda',
          image: uganda,
          location: ugandaMap,
          link: 'https://flaghistory.jp/uganda/',
          ogp: 'ogpFlagImages/uganda.png',
          desc: [
            '縦横比率は【2:3】',
            '黒はアフリカ人、黄色は太陽、赤は他のアフリカ諸国との兄弟愛を表します。中央に描かれているのは国鳥に指定されているカンムリヅル。',
            'FOTWに寄せられた情報によれば、イディ・アミン・ダダ大統領は反体制派による攻撃で失脚し、サウジアラビアに亡命する際、ウガンダの国旗・国章・紋章の原本を盗み出しサウジアラビアに持ち込んだとのこと。それは現在も返還されておらず、2003年にイディ・アミンが亡くなったことで子どもたちが売却したと言われています。',
          ],
        },
        {
          mainColor: [blue, yellow],
          fullColor: [blue, yellow],
          tag: [],
          area: worldArea.eu,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'ukraine',
          url: 'ukraine',
          name: 'ウクライナ',
          fullName: 'ウクライナ',
          firstLetter: 'う',
          officialName: 'Ukraine',
          image: ukraine,
          location: ukraineMap,
          link: 'https://flaghistory.jp/ukraine/',
          ogp: 'ogpFlagImages/ukraine.png',
          desc: [
            '縦横比率は【2:3】',
            '青は空、黄色は小麦を表します。（ウクライナはヨーロッパの穀倉地帯と言われるほど、耕作地に恵まれた国）',
            'ウクライナ国内に存在するクリミア自治共和国で使われている域旗は縦横比率が1:3と非常に横に長い特徴的デザインをしています。（国旗だと11:28のカタール国旗が最も長い）',
          ],
        },
        {
          mainColor: [red, green, blue, white],
          fullColor: [red, green, blue, white],
          tag: [moon, star],
          area: worldArea.asia,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'uzbekistan',
          url: 'uzbekistan',
          name: 'ウズベキスタン',
          fullName: 'ウズベキスタン共和国',
          firstLetter: 'う',
          officialName: 'Republic of Uzbekistan',
          image: uzbekistan,
          location: uzbekistanMap,
          link: 'https://flaghistory.jp/uzbekistan/',
          ogp: 'ogpFlagImages/uzbekistan.png',
          desc: [
            '縦横比率は【1:2】',
            '青は水と空、白は平和、緑は新しい生活と自然。赤は民衆の生命力を表します。三日月はイスラムと独立の象徴で、12個の星は1年を構成する12ヶ月や12星座、もしくは国内12の地区を示します。',
            '三日月と星はイスラム教を示す組み合わせとしてよく使われるものです。',
          ],
        },
        {
          mainColor: [blue, yellow, white],
          fullColor: [blue, yellow, white],
          tag: [sun],
          area: worldArea.sAmerica,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'uruguay',
          url: 'uruguay',
          name: 'ウルグアイ',
          fullName: 'ウルグアイ東方共和国',
          firstLetter: 'う',
          officialName: 'Oriental Republic of Uruguay',
          image: uruguay,
          location: uruguayMap,
          link: 'https://flaghistory.jp/uruguay/',
          ogp: 'ogpFlagImages/uruguay.png',
          desc: [
            '縦横比率は【2:3】',
            '青白9つの縞は独立宣言当時の9州を表します。',
            '左上（カントン部分）に描かれているのは5月の太陽と呼ばれるもので、アルゼンチン国旗の太陽と同一のものです。独立を支援してくれたアルゼンチンに敬意を表するためにデザインに取り入れられました。',
          ],
        },
        {
          mainColor: [red, blue, yellow],
          fullColor: [red, green, blue, yellow, white, black],
          tag: [sun, creature],
          area: worldArea.sAmerica,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'ecuador',
          url: 'ecuador',
          name: 'エクアドル',
          fullName: 'エクアドル共和国',
          firstLetter: 'え',
          officialName: 'Republic of Ecuador',
          image: ecuador,
          location: ecuadorMap,
          link: 'https://flaghistory.jp/ecuador/',
          ogp: 'ogpFlagImages/ecuador.png',
          desc: [
            '縦横比率は【2:3】',
            '黄色は国土の豊かさ、青は海と空、赤は独立戦争で流した犠牲者の地を表します。',
            '用いられる色が最も多いと言われる国旗です。',
          ],
        },
        {
          mainColor: [red, white, black, gold],
          fullColor: [red, white, black, gold],
          tag: [creature],
          area: worldArea.africa,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'egypt',
          url: 'egypt',
          name: 'エジプト',
          fullName: 'エジプト・アラブ共和国',
          firstLetter: 'え',
          officialName: 'Arab Republic of Egypt',
          image: egypt,
          location: egyptMap,
          link: 'https://flaghistory.jp/egypt/',
          ogp: 'ogpFlagImages/egypt.png',
          desc: [
            '縦横比率は【2:3】',
            '赤は1952年革命以前の王政時代、白は1952年の無血革命の到来、黒はイギリス植民地時代と王政時代の抑圧を表します。中央に描かれているのは金色のサラディンの鷲。',
            'エジプト地域に存在したアイユーブ朝の初代スルタン（皇帝）がサラディンであり、サラディンの鷲は彼を象徴するシンボルです。',
          ],
        },
        {
          mainColor: [blue, white, black],
          fullColor: [blue, white, black],
          tag: [],
          area: worldArea.eu,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'estonia',
          url: 'estonia',
          name: 'エストニア',
          fullName: 'エストニア共和国',
          firstLetter: 'え',
          officialName: 'Republic of Estonia',
          image: estonia,
          location: estoniaMap,
          link: 'https://flaghistory.jp/estonia/',
          ogp: 'ogpFlagImages/estonia.png',
          desc: [
            '縦横比率は【7:11】（セブンイレブン！）',
            '青は空、黒は国土、白は自由への願望を表します。',
            '日本人には親しみ深い文房具、MONO消しゴムと配色が似ていると評判です。なおMONO消しゴムとより似ている旗としては過去存在したザールラントのものが挙げられます。',
          ],
        },
        {
          mainColor: [red, blue, yellow, white, black],
          fullColor: [red, blue, yellow, white, black],
          tag: [],
          area: worldArea.africa,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'eswatini',
          url: 'eswatini',
          name: 'エスワティニ',
          fullName: 'エスワティニ王国',
          firstLetter: 'え',
          officialName: 'Kingdom of Eswatini',
          image: eswatini,
          location: eswatiniMap,
          link: 'https://flaghistory.jp/eswatini/',
          ogp: 'ogpFlagImages/eswatini.png',
          desc: [
            '縦横比率は【2:3】',
            '青平和と安定、黄色は国の天然資源、赤は過去の戦いで流した血を表します。また中央に描かれた盾と武器は国の防衛を示しています。',
            '2018年に国名をスワジランド王国からエスワティニ王国に変更しました。エスワティニは地元の言葉で『スワジ人の土地』という意味があります。',
          ],
        },
        {
          mainColor: [red, green, blue, yellow],
          fullColor: [red, green, blue, yellow],
          tag: [star],
          area: worldArea.africa,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'ethiopia',
          url: 'ethiopia',
          name: 'エチオピア',
          fullName: 'エチオピア連邦民主共和国',
          firstLetter: 'え',
          officialName: 'Federal Democratic Republic of Ethiopia',
          image: ethiopia,
          location: ethiopiaMap,
          link: 'https://flaghistory.jp/ethiopia/',
          ogp: 'ogpFlagImages/ethiopia.png',
          desc: [
            '縦横比率は【1:2】',
            '緑は労働・肥沃さ・発展、黄色は希望・正義・平等、赤は自由と平等を求めた犠牲を表します。また中央に描かれているのは国章で、青は平和、星は国民の団結、光線は輝ける繁栄を表します。また光線が等間隔に並んでいるのは民族と宗教上の平等を示すためです。',
            '国章はソロモン王の印象をモチーフとしたもので、モチーフとした理由はソロモン王が旧エチオピアの皇族の先祖だったからだと言われています。',
          ],
        },
        {
          mainColor: [red, green, blue, yellow],
          fullColor: [red, green, blue, yellow],
          tag: [plant],
          area: worldArea.africa,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'eritrea',
          url: 'eritrea',
          name: 'エリトリア',
          fullName: 'エリトリア国',
          firstLetter: 'え',
          officialName: 'State of Eritrea',
          image: eritrea,
          location: eritreaMap,
          link: 'https://flaghistory.jp/eritrea/',
          ogp: 'ogpFlagImages/eritrea.png',
          desc: [
            '縦横比率は【1:2】',
            '緑は肥沃な国土と農業、青は紅海、黄色は鉱物資源と豊かさ、赤は独立闘争で流された血を表します。また左部に描かれた黄色いオリーブのリースは独立闘争の勝利と明るい未来への希望を表します。',
            '基本的なレイアウトはエリトリア人民解放戦線で用いられた旗がベースとなっています。',
          ],
        },
        {
          mainColor: [blue, white],
          fullColor: [red, green, blue, white, gold, purple],
          tag: [plant],
          area: worldArea.ncAmerica,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'elSalvador',
          url: 'elsalvador',
          name: 'エルサルバドル',
          fullName: 'エルサルバドル共和国',
          firstLetter: 'え',
          officialName: 'Republic of El Salvador',
          image: elSalvador,
          location: elSalvadorMap,
          link: 'https://flaghistory.jp/elsalvador/',
          ogp: 'ogpFlagImages/elSalvador.png',
          desc: [
            '縦横比率は【189:335】',
            '青はカリブ海と太平洋、白は二つの海に囲まれた国土と平和を表します。中央に描かれているのはエルサルバドルの国章。',
            '縦横比率【189:335】は世界で最も細かいと言える数字、ただし一般的に流通する旗は【3:5】になっています。',
          ],
        },
        {
          mainColor: [red, green, yellow],
          fullColor: [red, green, yellow],
          tag: [star],
          area: worldArea.eu,
          kokuren: '国連非加盟国',
          groupingCSS: 'not-kokuren',
          id: 'transnistria',
          url: 'transnistria',
          name: '沿ドニエストル',
          fullName: '沿ドニエストル・モルドバ共和国',
          firstLetter: 'え',
          officialName: 'Pridnestrovian Moldavian Republic',
          image: transnistria,
          location: transnistriaMap,
          link: 'https://flaghistory.jp/transnistria/',
          ogp: 'ogpFlagImages/transnistria.png',
          desc: [
            '縦横比率は【1：2】',
            '鎌は農民、槌はプロレタリアート（資本主義社会における、賃金労働者階級全体のこと）の象徴、農業労働者と工業労働者の団結を表しています。',
            'モルドバが過去、モルダビア・ソビエト社会主義共和国だった時、1952年から1990年に使用していた国旗と同じデザインのものが使われています。',
          ],
        },
        {
          mainColor: [red, blue, white],
          fullColor: [red, blue, white],
          tag: [cross],
          area: worldArea.oceania,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'austrarlia',
          url: 'australia',
          name: 'オーストラリア',
          fullName: 'オーストラリア連邦',
          firstLetter: 'お',
          officialName: 'Commonwealth of Australia',
          image: australia,
          location: australiaMap,
          link: 'https://flaghistory.jp/australia/',
          ogp: 'ogpFlagImages/australia.png',
          desc: [
            '縦横比率は【1:2】',
            '右側に描かれているのは国土が南半球にあることを示す南十字星、左側にはイギリス国旗とその下に連邦星と呼ばれる、オーストラリアを構成した6箇所の植民地とパプア地域、そして将来加わるであろう地域を示す七角星が描かれています。',
            'ニュージーランドの国旗と似ており、2018年にはニュージーランドの首相代行にテレビ番組上で「オーストラリアはニュージーランドの国旗を真似た、変更すべきだ」と述べました。',
          ],
        },
        {
          mainColor: [red, white],
          fullColor: [red, white],
          tag: [],
          area: worldArea.eu,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'austria',
          url: 'austria',
          name: 'オーストリア',
          fullName: 'オーストリア共和国',
          firstLetter: 'お',
          officialName: 'Republic of Austria',
          image: austria,
          location: austriaMap,
          link: 'https://flaghistory.jp/austria/',
          ogp: 'ogpFlagImages/austria.png',
          desc: [
            '縦横比率は【2:3】',
            '赤白赤の3色は、第三回十字軍にて敵の返り血に染まったレオポルト5世がベルト部分だけ白く残ったという故事から来たとされています。',
            '1156年には現在使われている国旗と同一のデザインのものが登場しているため、世界最古から存在する国旗の一つと言われています。',
          ],
        },
        {
          mainColor: [red, green, white],
          fullColor: [red, green, white],
          tag: [],
          area: worldArea.asia,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'oman',
          url: 'oman',
          name: 'オマーン',
          fullName: 'オマーン国',
          firstLetter: 'お',
          officialName: 'Sultanate of Oman',
          image: oman,
          location: omanMap,
          link: 'https://flaghistory.jp/oman/',
          ogp: 'ogpFlagImages/oman.png',
          desc: [
            '縦横比率は【1:2】',
            '赤は外部からの侵略者との戦い、白は繁栄と平和、緑は肥沃な国土を表します。左上（カントン部分）に描かれているのはカンジャルと呼ばれる短剣と太刀を組み合わせたもので、スルタンの権威を示しています。',
            'なおスルタンとはイスラム教国の君主を指す言葉です。',
          ],
        },
        {
          mainColor: [red, blue, white],
          fullColor: [red, blue, white],
          tag: [],
          area: worldArea.eu,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'Netherlands',
          url: 'netherlands',
          name: 'オランダ',
          fullName: 'オランダ王国',
          firstLetter: 'お',
          officialName: 'Kingdom of the Netherlands',
          image: Netherlands,
          location: NetherlandsMap,
          link: 'https://flaghistory.jp/netherlands/',
          ogp: 'ogpFlagImages/Netherlands.png',
          desc: [
            '縦横比率は【2:3】',
            '赤は国民が持つ勇気、白は信仰心、青は忠誠心を表しています。',
            '世界で最初に三色旗を使った国がオランダと言われており、1581年当時のものは赤がオレンジ色でした。赤に変更されたのは海上での識別がオレンジだと難しかったためと言われています。',
          ],
        },
        {
          mainColor: [red, green, white, black, gold],
          fullColor: [red, green, white, black, gold],
          tag: [],
          area: worldArea.sAmerica,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'guyana',
          url: 'guyana',
          name: 'ガイアナ',
          fullName: 'ガイアナ共和国',
          firstLetter: 'か',
          officialName: 'Republic of Guyana',
          image: guyana,
          location: guyanaMap,
          link: 'https://flaghistory.jp/guyana/',
          ogp: 'ogpFlagImages/guyana.png',
          desc: [
            '縦横比率は【3:5】',
            '緑は農業と森林資源、白は川と水資源、黄色は鉱物資源、黒は国民の忍耐力、赤は国家建設への熱意を表します。',
            '別名『ゴールデンアロー旗』とも呼ばれる国旗です。',
          ],
        },
        {
          mainColor: [blue, yellow],
          fullColor: [blue, yellow],
          tag: [sun, creature],
          area: worldArea.asia,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'kazakhstan',
          url: 'kazakhstan',
          name: 'カザフスタン',
          fullName: 'カザフスタン共和国',
          firstLetter: 'か',
          officialName: 'Republic of Kazakhstan',
          image: kazakhstan,
          location: kazakhstanMap,
          link: 'https://flaghistory.jp/kazakhstan/',
          ogp: 'ogpFlagImages/kazakhstan.png',
          desc: [
            '縦横比率は【1:2】',
            '青色は空と自由を、黄色い太陽は気高い理想を、翼を広げて飛ぶ鷲はカザフスタン人の誇りを表しています。旗竿側（左側）に描かれている文様は民族の伝統的なイスラム教独特の幾何学文様（アラベスク模様）です。',
            '1992年に制定された比較的新しい国旗。',
          ],
        },
        {
          mainColor: [red, white],
          fullColor: [red, white],
          tag: [],
          area: worldArea.asia,
          groupingCSS: 'kokuren',
          kokuren: '国連加盟国',
          id: 'qatar',
          url: 'qatar',
          name: 'カタール',
          fullName: 'カタール国',
          firstLetter: 'か',
          officialName: 'State of Qatar',
          image: qatar,
          location: qatarMap,
          link: 'https://flaghistory.jp/qatar/',
          ogp: 'ogpFlagImages/qatar.png',
          desc: [
            '縦横比率は【11:28】',
            '白は平和、海老茶色は過去の戦いで流した血を表します。また境界線のジグザグは9個あり、これによって1916年にイギリスと保護条約を締結した時点で、カタールが9番目の海岸首長国であったことを表しています。',
            '縦横比率【11:28】は縦より横の長さが2倍以上で、世界で最も横に長い国旗です。なお一般的に流通する旗は【3:5】となっています。',
          ],
        },
        {
          mainColor: [red, green, yellow, black],
          fullColor: [red, green, yellow, black],
          tag: [star],
          area: worldArea.africa,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'ghana',
          url: 'ghana',
          name: 'ガーナ',
          fullName: 'ガーナ共和国',
          firstLetter: 'か',
          officialName: 'Republic of Ghana',
          image: ghana,
          location: ghanaMap,
          link: 'https://flaghistory.jp/ghana/',
          ogp: 'ogpFlagImages/ghana.png',
          desc: [
            '縦横比率は【2:3】',
            '赤は独立闘争で流れた血、黄色は鉱物資源、緑は豊かな森林を表しています。中央の黒い星はアフリカの自由を示します。',
            '赤黄緑の3色は汎アフリカ色と呼ばれ、この色はアフリカで最初に独立した当時のエチオピア国旗から来ています。ガーナはそのエチオピアの次に独立した国で、ガーナが同じく赤黄緑を使ったことで汎アフリカ色を使う流れができました。',
          ],
        },
        {
          mainColor: [red, blue, yellow, white],
          fullColor: [red, blue, yellow, white],
          tag: [star],
          area: worldArea.africa,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'caboVerde',
          url: 'caboverde',
          name: 'カーボベルデ',
          fullName: 'カーボベルデ共和国',
          firstLetter: 'か',
          officialName: 'Republic of Cabo Verde',
          image: caboVerde,
          location: caboVerdeMap,
          link: 'https://flaghistory.jp/caboverde/',
          ogp: 'ogpFlagImages/caboVerde.png',
          desc: [
            '縦横比率は【10:17】',
            '青は海と空、白は平和、赤は国民の努力、10個の黄色い星は国を構成する島々、輪を描くように配置することで国の統一を示します。また横縞は国家建設への道筋を表します。',
            '縦横比率は【10:17】となっていますが、一般的に流通する旗は【2:3】になっている場合が多いです。',
          ],
        },
        {
          mainColor: [green, blue, yellow],
          fullColor: [green, blue, yellow],
          tag: [],
          area: worldArea.africa,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'gabon',
          url: 'gabon',
          name: 'ガボン',
          fullName: 'ガボン共和国',
          firstLetter: 'か',
          officialName: 'Gabonese Republic',
          image: gabon,
          location: gabonMap,
          link: 'https://flaghistory.jp/gabonese/',
          ogp: 'ogpFlagImages/gabon.png',
          desc: [
            '縦横比率は【3:4】',
            '緑は森林、黄色は赤道と太陽、青は大西洋を表します。',
            'ガボン国旗の色は1952年にノーベル平和賞を受賞した、シュヴァイツァー博士の『水と原生林のはざまで』という本をもとに考えたと言われています。シュヴァイツァー博士はガボンで数十年間医療活動をしてきた方です。',
          ],
        },
        {
          mainColor: [red, white],
          fullColor: [red, white],
          tag: [plant],
          area: worldArea.ncAmerica,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'canada',
          url: 'canada',
          name: 'カナダ',
          fullName: 'カナダ',
          firstLetter: 'か',
          officialName: 'Canada',
          image: canada,
          location: canadaMap,
          link: 'https://flaghistory.jp/canada/',
          ogp: 'ogpFlagImages/canada.png',
          desc: [
            '縦横比率は【1:2】',
            '左の赤は太平洋、右の赤は大西洋、中央の白は雪と個の国の位置を示します。中央に描かれているのはサトウカエデで、建国以来の国のシンボルです。',
            '海の色を赤色で表現している珍しい国旗。',
          ],
        },
        {
          mainColor: [red, green, yellow],
          fullColor: [red, green, yellow],
          tag: [star],
          area: worldArea.africa,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'cameroon',
          url: 'cameroon',
          name: 'カメルーン',
          fullName: 'カメルーン共和国',
          firstLetter: 'か',
          officialName: 'Republic of Cameroon',
          image: cameroon,
          location: cameroonMap,
          link: 'https://flaghistory.jp/cameroon/',
          ogp: 'ogpFlagImages/cameroon.png',
          desc: [
            '縦横比率は【2:3】',
            '緑は南部の森林地帯、赤は南北の団結、黄色は北部のサバンナ地帯を表します。',
            '汎アフリカ色を使う国旗の一つ、中央の星は昔は2つありそれで『南北カメルーン』を表していましたが、現在は一つとなり統一の象徴となりました。',
          ],
        },
        {
          mainColor: [red, blue, white, black],
          fullColor: [red, blue, white, black],
          tag: [],
          area: worldArea.asia,
          groupingCSS: 'kokuren',
          kokuren: '国連加盟国',
          id: 'southKorea',
          url: 'korea',
          name: '韓国',
          fullName: '大韓民国',
          firstLetter: 'か',
          officialName: 'Republic of Korea',
          image: southKorea,
          location: southKoreaMap,
          link: 'https://flaghistory.jp/korea/',
          ogp: 'ogpFlagImages/southKorea.png',
          desc: [
            '縦横比率は【2:3】',
            '中央の赤青の太極は陰陽・善悪と言った万物が相反するものからなるという中国古来の思想に由来するものです。四隅の卦と呼ばれるものは四季や方角、天地火水など。白地で国土や平和、太極で国民、4つの卦で政府を表してもいます。',
            '※韓国人は白衣民族と呼ばれるほど白い服を好んでおり、そのため白は韓国にとって関連性の深い色。また青と赤も同じく伝統的な色。',
          ],
        },
        {
          mainColor: [red, blue, green, white],
          fullColor: [red, blue, green, white],
          tag: [],
          area: worldArea.africa,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'gambia',
          url: 'gambia',
          name: 'ガンビア',
          fullName: 'ガンビア共和国',
          firstLetter: 'か',
          officialName: 'Republic of The Gambia',
          image: gambia,
          location: gambiaMap,
          link: 'https://flaghistory.jp/gambia/',
          ogp: 'ogpFlagImages/gambia.png',
          desc: [
            '縦横比率は【2:3】',
            '赤は太陽とサバンナ、青はガンビア川、緑は森林、白は平和と純粋さを表します。',
            '地図でガンビアを見てみると、北部がサバンナ、中間に川、南部に森林と国旗の色の配置と似たような地理になっており、国旗からガンビアの国土をイメージしやすいです。',
          ],
        },
        {
          mainColor: [red, blue, white],
          fullColor: [red, blue, white],
          tag: [],
          area: worldArea.asia,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'cambodia',
          url: 'cambodia',
          name: 'カンボジア',
          fullName: 'カンボジア王国',
          firstLetter: 'か',
          officialName: 'Kingdom of Cambodia',
          image: cambodia,
          location: cambodiaMap,
          link: 'https://flaghistory.jp/cambodia/',
          ogp: 'ogpFlagImages/cambodia.png',
          desc: [
            '縦横比率は【2:3】',
            '青は王室、赤は国家、白は仏教を表します。中央に描かれているのはアンコールワットで、カンボジアの象徴的存在です。',
            'カンボジアは7度の国旗変更において、全てにアンコール・ワットを描きました。',
          ],
        },
        {
          mainColor: [red, white],
          fullColor: [red, white],
          tag: [star, moon],
          area: worldArea.asia,
          kokuren: '国連非加盟国',
          groupingCSS: 'not-kokuren',
          id: 'northernCyprus',
          url: 'northern-cyprus',
          name: '北キプロス',
          fullName: '北キプロス・トルコ共和国',
          firstLetter: 'き',
          officialName: 'Turkish Republic of Northern Cyprus',
          image: northernCyprus,
          location: northernCyprusMap,
          link: 'https://flaghistory.jp/northerncyprus/',
          ogp: 'ogpFlagImages/northernCyprus.png',
          desc: [
            '縦横比率は【2:3】',
            'トルコ国旗の赤と白を反転させ、さらに上下に白い水平の線を加えたデザインをしています。',
            '北キプロス・トルコ共和国は、キプロス国内にてギリシャ系住民とトルコ系住民が反発する中で、トルコが介入しキプロス北部に建てられた国です。（ただし承認しているのはトルコのみ）そのためトルコ国旗をモチーフにしたものが使われています。',
          ],
        },
        {
          mainColor: [red, blue, white],
          fullColor: [red, blue, white],
          tag: [star],
          area: worldArea.asia,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'northKorea',
          url: 'north-korea',
          name: '北朝鮮',
          fullName: '朝鮮民主主義人民共和国',
          firstLetter: 'き',
          officialName: 'Democratic People\'s Republic of Korea',
          image: northKorea,
          location: northKoreaMap,
          link: 'https://flaghistory.jp/northkorea/',
          ogp: 'ogpFlagImages/northKorea.png',
          desc: [
            '縦横比率は【1:2】',
            '青は自主と平和、白は輝ける歴史的文化を持つ朝鮮民族、赤は革命で流された血を意味します。また星は社会主義社会の建設と明るい未来を示しています。',
            '旗章学者の吹浦氏いわく優れたデザインの国旗とのこと。しかし国旗製作者は何らかの理由で粛清されこの世を去りました。',
          ],
        },
        {
          mainColor: [red, yellow],
          fullColor: [red, yellow],
          tag: [sun],
          area: worldArea.eu,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'northMacedonia',
          url: 'north-macedonia',
          name: '北マケドニア',
          fullName: '北マケドニア共和国',
          firstLetter: 'き',
          officialName: 'Republic of North Macedonia',
          image: northMacedonia,
          location: northMacedoniaMap,
          link: 'https://flaghistory.jp/macedonia/',
          ogp: 'ogpFlagImages/northMacedonia.png',
          desc: [
            '縦横比率は【1:2】',
            '赤は自由と進歩を求める戦い、黄色で描かれた太陽は背名と喜びを表します。',
            '現国旗の前はヴェルギナの星と呼ばれるものが描かれていましたが、ギリシャからの批判を受けて現在の形に落ち着きました。',
          ],
        },
        {
          mainColor: [red, green, yellow],
          fullColor: [red, green, yellow],
          tag: [],
          area: worldArea.africa,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'guinea',
          url: 'guinea',
          name: 'ギニア',
          fullName: 'ギニア共和国',
          firstLetter: 'き',
          officialName: 'Republic of Guinea',
          image: guinea,
          location: guineaMap,
          link: 'https://flaghistory.jp/guinea/',
          ogp: 'ogpFlagImages/guinea.png',
          desc: [
            '縦横比率は【2:3】',
            '赤は反植民地闘争で流した血、黄色は太陽と鉱物資源、緑は農業と繁栄を表します。',
            '汎アフリカ色の国旗の一つ。',
          ],
        },
        {
          mainColor: [red, green, yellow, black],
          fullColor: [red, green, yellow, black],
          tag: [star],
          area: worldArea.africa,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'guineaBissau',
          url: 'guinea-bissau',
          name: 'ギニアビサウ',
          fullName: 'ギニアビサウ共和国',
          firstLetter: 'き',
          officialName: 'Republic of Guinea-Bissau',
          image: guineaBissau,
          location: guineaBissauMap,
          link: 'https://flaghistory.jp/guineabissau/',
          ogp: 'ogpFlagImages/guineaBissau.png',
          desc: [
            '縦横比率は【1:2】',
            '赤は独立闘争で流した血、黄色は太陽と鉱物資源、緑は農作物、黒い星はアフリカの自由と尊厳を表します。',
            'デザインのもととなったのは、ギニア・カーボベルデ独立アフリカ党の旗。',
          ],
        },
        {
          mainColor: [green, yellow, white],
          fullColor: [green, yellow, white],
          tag: [plant],
          area: worldArea.asia,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'cyprus',
          url: 'cyprus',
          name: 'キプロス',
          fullName: 'キプロス共和国',
          firstLetter: 'き',
          officialName: 'Republic of Cyprus',
          image: cyprus,
          location: cyprusMap,
          link: 'https://flaghistory.jp/cyprus/',
          ogp: 'ogpFlagImages/cyprus.png',
          desc: [
            '縦横比率は【2:3】',
            'オリーブの枝は平和、金色は銅の産地であるキプロスの富を表します。また金で描かれているのはキプロスの地形です。',
            'キプロスはギリシャ系住民とトルコ系住民の衝突の激しい国で、そこでギリシャ国旗の青・トルコ国旗の赤どちらも使わないことで両国への友好姿勢を示しています。',
          ],
        },
        {
          mainColor: [red, blue, white],
          fullColor: [red, blue, white],
          tag: [star],
          area: worldArea.ncAmerica,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'cuba',
          url: 'cuba',
          name: 'キューバ',
          fullName: 'キューバ共和国',
          firstLetter: 'き',
          officialName: 'Republic of Cuba',
          image: cuba,
          location: cubaMap,
          link: 'https://flaghistory.jp/cuba/',
          ogp: 'ogpFlagImages/cuba.png',
          desc: [
            '縦横比率は【1:2】',
            '青い3縞は独立戦争時の東部・中央部・西部キューバの3地方、白い2本の縞は純粋な愛国心、赤い三角形は独立の自由を勝ち取ったときに流された血、白い星は独立を表しています。',
            'キューバ解放運動のときにロペス将軍が使っていたものがそのまま国旗として残りました。',
          ],
        },
        {
          mainColor: [blue, white],
          fullColor: [blue, white],
          tag: [cross],
          area: worldArea.eu,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'greece',
          url: 'greece',
          name: 'ギリシャ',
          fullName: 'ギリシャ共和国',
          firstLetter: 'き',
          officialName: 'Hellenic Republic',
          image: greece,
          location: greeceMap,
          link: 'https://flaghistory.jp/greece/',
          ogp: 'ogpFlagImages/greece.png',
          desc: [
            '縦横比率は【2:3】',
            '青は海と空、白は自由と独立を求めて戦う国民の純粋さを意味しています。またカントン部分の白十字は東方教会的キリスト教信仰を示します。',
            '9本の縞はギリシャ独立戦争時の勝どき「自由か死か（エレフセリア・イ・タナトス）」や、ムーサの9姉妹を表しています。',
          ],
        },
        {
          mainColor: [red, blue, white, yellow],
          fullColor: [red, blue, white, black, yellow],
          tag: [sun, creature],
          area: worldArea.oceania,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'kiribati',
          url: 'kiribati',
          name: 'キリバス',
          fullName: 'キリバス共和国',
          firstLetter: 'き',
          officialName: 'Republic of Kiribati',
          image: kiribati,
          location: kiribatiMap,
          link: 'https://flaghistory.jp/kiribati/',
          ogp: 'ogpFlagImages/kiribati.png',
          desc: [
            '縦横比率は【1:2】',
            '青は太平洋、その上を飛ぶのはグンカンドリで自由と力を表します。',
            '国章を横に引き伸ばして国旗にしていて、これは珍しいケースです。',
          ],
        },
        {
          mainColor: [red, yellow],
          fullColor: [red, yellow],
          tag: [sun],
          area: worldArea.asia,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'kyrgyzstan',
          url: 'kyrgyz',
          name: 'キルギス',
          fullName: 'キルギス共和国',
          firstLetter: 'き',
          officialName: 'Kyrgyz Republic',
          image: kyrgyzstan,
          location: kyrgyzstanMap,
          link: 'https://flaghistory.jp/kyrgyz/',
          ogp: 'ogpFlagImages/kyrgyzstan.png',
          desc: [
            '縦横比率は【3:5】',
            '中央に黄色い太陽と、キルギス人が使うユルトという移動式テントを真上から見た形を描いた赤い国旗。赤は勇敢さと勇気、黄色は平和と豊かさを表します。',
            '太陽の光の数は40本あり、これは一つの州に統合されたキルギスの部族の数を表しています。',
          ],
        },
        {
          mainColor: [blue, white],
          fullColor: [red, blue, green, white],
          tag: [creature, plant],
          area: worldArea.ncAmerica,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'guatemala',
          url: 'guatemala',
          name: 'グアテマラ',
          fullName: 'グアテマラ共和国',
          firstLetter: 'く',
          officialName: 'Republic of Guatemala',
          image: guatemala,
          location: guatemalaMap,
          link: 'https://flaghistory.jp/guatemala/',
          ogp: 'ogpFlagImages/guatemala.png',
          desc: [
            '縦横比率は【5:8】',
            '青は太平洋とカリブ海、白は平和と純粋さを表します。中央に描かれているのは国章です。',
            '銃が描かれている国旗は国連加盟国のうちハイチ・ボリビア・モザンビーク・グアテマラの4カ国だけ。',
          ],
        },
        {
          mainColor: [red, green, white, black],
          fullColor: [red, green, white, black],
          tag: [],
          area: worldArea.asia,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'kuwait',
          url: 'kuwait',
          name: 'クウェート',
          fullName: 'クウェート国',
          firstLetter: 'く',
          officialName: 'State of Kuwait',
          image: kuwait,
          location: kuwaitMap,
          link: 'https://flaghistory.jp/kuwait/',
          ogp: 'ogpFlagImages/kuwait.png',
          desc: [
            '縦横比率は【1:2】',
            '黒は洗浄、緑はアラブの土地、白は戦士の純粋さ、赤は敵の血を表します。',
            '赤緑白黒の4色、つまりは汎アラブ色が用いられた国旗の一つです。',
          ],
        },
        {
          mainColor: [red, blue, white],
          fullColor: [red, blue, white],
          tag: [star],
          area: worldArea.oceania,
          kokuren: '国連非加盟国',
          groupingCSS: 'not-kokuren',
          id: 'cook',
          url: 'cook',
          name: 'クック諸島',
          fullName: 'クック諸島',
          firstLetter: 'く',
          officialName: 'Cook Islands',
          image: cook,
          location: cookMap,
          link: 'https://flaghistory.jp/cook/',
          ogp: 'ogpFlagImages/cook.png',
          desc: [
            '縦横比率は【1:2】',
            '15個の星はクック諸島を構成する島々、青は太平洋と島民の穏やかな気質を表します。またカントンのイギリス国旗は、イギリスとの歴史的繋がりを示しています。',
            '15個の星が同じ大きさで輪になっていることで、主要15の島々の平等と統一を表現しています。',
          ],
        },
        {
          mainColor: [red, white],
          fullColor: [red, white],
          tag: [sun],
          area: worldArea.ncAmerica,
          kokuren: '海外領土・自治領',
          groupingCSS: 'other',
          id: 'greenland',
          url: 'greenland',
          name: 'グリーンランド',
          fullName: 'グリーンランド',
          firstLetter: 'く',
          officialName: 'Greenland',
          image: greenland,
          location: greenlandMap,
          link: 'https://flaghistory.jp/greenland/',
          ogp: 'ogpFlagImages/greenland.png',
          desc: [
            '縦横比率は【2:3】',
            '大きな白の部分は氷帽（陸地を覆う5万km2未満の氷河の塊のこと）、大きな赤の部分は海洋、円の白い部分は氷山と流氷、円の赤い部分はフィヨルド（氷河による浸食作用で形成された海岸にできる複雑な地形のこと）を表しています。',
            '上記の意味は旗のデザイナーであるトゥエ・クリスチャンセンによって示されたものですが、他の解釈として円は昇る太陽と沈む太陽を表したものという見方も存在します。',
          ],
        },
        {
          mainColor: [red, green, yellow],
          fullColor: [red, green, yellow],
          tag: [star, plant],
          area: worldArea.ncAmerica,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'grenada',
          url: 'grenada',
          name: 'グレナダ',
          fullName: 'グレナダ',
          firstLetter: 'く',
          officialName: 'Grenada',
          image: grenada,
          location: grenadaMap,
          link: 'https://flaghistory.jp/grenada/',
          ogp: 'ogpFlagImages/grenada.png',
          desc: [
            '縦横比率は【3:5】',
            '赤は勇気と活力、黄色は知恵と国民の友情、緑は植物と農業、ホイスト（左部）に描かれているのはナツメグで国の特産物です。また7つの星は中央の大きなものが首都セントジョージズを他6つの星は6地区を表します。',
            'グレナダは別名『スパイス諸島』とも呼ばれる国で、その中でもナツメグ（スパイスの一種）は主要産物となっています。',
          ],
        },
        {
          mainColor: [red, blue, white],
          fullColor: [red, blue, yellow, white],
          tag: [moon, star, creature],
          area: worldArea.eu,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'croatia',
          url: 'croatia',
          name: 'クロアチア',
          fullName: 'クロアチア共和国',
          firstLetter: 'く',
          officialName: 'Republic of Croatia',
          image: croatia,
          location: croatiaMap,
          link: 'https://flaghistory.jp/croatia/',
          ogp: 'ogpFlagImages/croatia.png',
          desc: [
            '縦横比率は【1:2】',
            'クロアチア王国の赤白、スロベニア王国の青白、そして部分的にダルマチア王国の青と黄色を組み合わせた国旗です。',
            '中央に描かれているのは国章で、市松模様の赤は海岸部、白は内陸部を表しています。',
          ],
        },
        {
          mainColor: [red, green, white, black],
          fullColor: [red, green, white, black],
          tag: [],
          area: worldArea.africa,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'kenya',
          url: 'kenya',
          name: 'ケニア',
          fullName: 'ケニア共和国',
          firstLetter: 'け',
          officialName: 'Republic of Kenya',
          image: kenya,
          location: kenyaMap,
          link: 'https://flaghistory.jp/kenya/',
          ogp: 'ogpFlagImages/kenya.png',
          desc: [
            '縦横比率は【2:3】',
            '黒は国民、赤は独立闘争で流した血、緑は自然の豊かさ、白は平和と統一を表します。槍と盾は自由防衛を表す、マサイ族の伝統的な交差した槍と盾です。',
            'ケニアの国章にも同じく盾と槍が描かれており、それだけこれがケニアを象徴するシンボルであることがわかります。',
          ],
        },
        {
          mainColor: [green, orange, white],
          fullColor: [green, orange, white],
          tag: [],
          area: worldArea.africa,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'cotod',
          url: 'coted',
          name: 'コートジボワール',
          fullName: 'コートジボワール共和国',
          firstLetter: 'こ',
          officialName: 'Republic of Cote d\'Ivoire',
          image: cotod,
          location: cotodMap,
          link: 'https://flaghistory.jp/cote_d/',
          ogp: 'ogpFlagImages/cotodIvoire.png',
          desc: [
            '縦横比率は【2:3】',
            'オレンジは国土と北部にある肥沃なサバンナ、白は平和、緑は希望と南部の森林を表しています。',
            '国旗のデザインはフランス国旗から影響を受けており、配色はニジェール国旗から影響を受けています。',
          ],
        },
        {
          mainColor: [red, blue, white],
          fullColor: [red, green, blue, yellow, white],
          tag: [sun, star],
          area: worldArea.ncAmerica,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'costaRica',
          url: 'costarica',
          name: 'コスタリカ',
          fullName: 'コスタリカ共和国',
          firstLetter: 'こ',
          officialName: 'Republic of Costa Rica',
          image: costaRica,
          location: costaRicaMap,
          link: 'https://flaghistory.jp/costarica/',
          ogp: 'ogpFlagImages/costaRica.png',
          desc: [
            '縦横比率は【3:5】',
            '青は空と理想、白は平和と知恵、赤は犠牲者の血と国民の温かさを表します。',
            'コスタリカ国旗のデザイナーはコスタリカの初代大統領『Pacífica Fernández（パシフィカ・フェルナンデス）』。女性の大統領でした。',
          ],
        },
        {
          mainColor: [blue, white, yellow],
          fullColor: [blue, white, yellow],
          tag: [star],
          area: worldArea.eu,
          kokuren: '国連非加盟国',
          groupingCSS: 'not-kokuren',
          id: 'kosovo',
          url: 'kosovo',
          name: 'コソボ',
          fullName: 'コソボ共和国',
          firstLetter: 'こ',
          officialName: 'Republic of Kosovo',
          image: kosovo,
          location: kosovoMap,
          link: 'https://flaghistory.jp/kosovo/',
          ogp: 'ogpFlagImages/kosovo.png',
          desc: [
            '縦横比率は【2:3】',
            '青は欧州連合と同じ色で欧州との協調を、白は平和、黄色は湯田中国土を表しています。',
            'なお星の下に黄色系統で描かれているのは、コソボの地図であり、国土の形は絵そのままです。',
          ],
        },
        {
          mainColor: [red, green, blue, yellow, white],
          fullColor: [red, green, blue, yellow, white],
          tag: [moon, star],
          area: worldArea.africa,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'comoros',
          url: 'comoros',
          name: 'コモロ',
          fullName: 'コモロ連合',
          firstLetter: 'こ',
          officialName: 'Union of Comoros',
          image: comoros,
          location: comorosMap,
          link: 'https://flaghistory.jp/comoros/',
          ogp: 'ogpFlagImages/comoros.png',
          desc: [
            '縦横比率は【3:5】',
            '緑と三日月はイスラム教を示し、4つの星と黄白赤青の4色はコモロを構成する4島を表しています。',
            'なお4色はそれぞれ黄色がモヘリ島、白がマヨット島、赤がアンジュアン島、青がグランコモル島を表しており、この4島が使っている旗にはそれぞれの色が含まれています。',
          ],
        },
        {
          mainColor: [red, blue, yellow],
          fullColor: [red, blue, yellow],
          tag: [],
          area: worldArea.sAmerica,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'colombia',
          url: 'colombia',
          name: 'コロンビア',
          fullName: 'コロンビア共和国',
          firstLetter: 'こ',
          officialName: 'Republic of Colombia',
          image: colombia,
          location: colombiaMap,
          link: 'https://flaghistory.jp/colombia/',
          ogp: 'ogpFlagImages/colombia.png',
          desc: [
            '縦横比率は【2:3】',
            '黄色は金、青は太平洋とカリブ海、赤は独立戦争で流した血を表します',
            '大コロンビアを構成していたエクアドル、ベネズエラの国旗とよく似ています。',
          ],
        },
        {
          mainColor: [red, green, yellow],
          fullColor: [red, green, yellow],
          tag: [],
          area: worldArea.africa,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'congo',
          url: 'congo',
          name: 'コンゴ共和国',
          fullName: 'コンゴ共和国',
          firstLetter: 'こ',
          officialName: 'Republic of Congo',
          image: congo,
          location: congoMap,
          link: 'https://flaghistory.jp/congo/',
          ogp: 'ogpFlagImages/congo.png',
          desc: [
            '縦横比率は【2:3】',
            '緑は農業と森林、黄色は友情と国民の誇り、赤は独立闘争で流した血を表します。',
            '汎アフリカ色（赤緑黄）を使った国旗の一つです。※なお汎アフリカ色は赤緑黄黒を含む考え方が一般的',
          ],
        },
        {
          mainColor: [red, blue, yellow],
          fullColor: [red, blue, yellow],
          tag: [star],
          area: worldArea.africa,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'republicCongo',
          url: 'republic-congo',
          name: 'コンゴ民主共和国',
          fullName: 'コンゴ民主共和国',
          firstLetter: 'こ',
          officialName: 'Democratic Republic of the Congo',
          image: republicCongo,
          location: republicCongoMap,
          link: 'https://flaghistory.jp/congo_d/',
          ogp: 'ogpFlagImages/republicCongo.png',
          desc: [
            '縦横比率は【3:4】',
            '青は平和、赤は国のために流した犠牲の血、黄色は国の富、星は光り輝く国の未来を表しています。',
            '1967年に制定された国旗の青色が薄くなったデザイン。当時の濃い青の頃は希望を、現在は平和を表すようになりました。一般的に白が平和を表すことから、推測ですが青に白を混ぜることで水色とし平和の意味をもたせたのではと考えています。',
          ],
        },
        {
          mainColor: [green, white],
          fullColor: [green, white],
          tag: [],
          area: worldArea.asia,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'saudiArabia',
          url: 'saudiarabia',
          name: 'サウジアラビア',
          fullName: 'サウジアラビア王国',
          firstLetter: 'さ',
          officialName: 'Kingdom of Saudi Arabia',
          image: saudiArabia,
          location: saudiArabiaMap,
          link: 'https://flaghistory.jp/saudiarabia/',
          ogp: 'ogpFlagImages/saudiArabia.png',
          desc: [
            '縦横比率は【2:3】',
            '中央には「アッラーの他に神はなく、ムハンマドはアッラーの使徒なり」という信仰告白（シャハーダ）が書かれており、その下の件はイスラムの力と聖地メッカの守護を表します。緑はムハンマドの娘ファティマに由来する色、もしくはムハンマドのターバンの色であり、イスラムを象徴する色です。',
            '一般的な国旗は旗竿が左側に来るように掲揚しますが、サウジアラビアの国旗は文字が読めるよう右側に竿を置きます。また国内で不幸があった場合、竿の中間に掲揚しますが（半旗）、イスラム教の信仰の証を下げることは冒涜的とされるためサウジアラビア国旗は半旗を行いません。',
          ],
        },
        {
          mainColor: [red, green, white, black],
          fullColor: [red, green, white, black],
          tag: [star, moon],
          area: worldArea.africa,
          kokuren: '国連非加盟国',
          groupingCSS: 'not-kokuren',
          id: 'sahrawi',
          url: 'sahrawi',
          name: 'サハラ・アラブ',
          fullName: 'サハラ・アラブ民主共和国',
          firstLetter: 'さ',
          officialName: 'Sahrawi Arab Democratic Republic',
          image: sahrawi,
          location: sahrawiMap,
          link: 'https://flaghistory.jp/sahrawi/',
          ogp: 'ogpFlagImages/sahrawi.png',
          desc: [
            '縦横比率は【1:2】',
            '旗に用いられている赤緑白黒は汎アラブ色で、三日月と星の組み合わせはイスラム教を表しています。黒は死を、緑は生命を、白は平和を表すと言われています。',
            'また色の意味に関しては緑は富を、赤は殉教者の血を、白は希望を、黒は植民地主義と抑圧を表すとも言われています。',
          ],
        },
        {
          mainColor: [red, blue, white],
          fullColor: [red, blue, white],
          tag: [star],
          area: worldArea.oceania,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'samoa',
          url: 'samoa',
          name: 'サモア',
          fullName: 'サモア独立国',
          firstLetter: 'さ',
          officialName: 'Independent State of Samoa',
          image: samoa,
          location: samoaMap,
          link: 'https://flaghistory.jp/samoa/',
          ogp: 'ogpFlagImages/samoa.png',
          desc: [
            '縦横比率は【1:2】',
            '赤は勇気とサモアの伝統色、白は純粋さ、青は自由を表します。',
            'カントン部分（左上）の星はニュージーランドの信託統治領時代につけられたもので、これはニュージーランド国旗に描かれている南十字星を表す4つの星から来ています。',
          ],
        },
        {
          mainColor: [red, green, yellow, black],
          fullColor: [red, green, yellow, black],
          tag: [star],
          area: worldArea.africa,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'saotomePrincipe',
          url: 'saotome',
          name: 'サントメ・プリンシペ',
          fullName: 'サントメ・プリンシペ民主共和国',
          firstLetter: 'さ',
          officialName: 'Democratic Republic of São Tomé and Príncipe',
          image: saotomePrincipe,
          location: saotomePrincipeMap,
          link: 'https://flaghistory.jp/saotome/',
          ogp: 'ogpFlagImages/saotomePrincipe.png',
          desc: [
            '縦横比率は【1:2】',
            '緑は農業、黄色は太陽と主要産物のカカオ、赤は独立闘争で流された血、黒い２つの星はサントメ島とプリンシペ島を表します。',
            '独立運動本格化の要因となった、サントメ・プリンシペ独立運動党の結成、そこで使われた旗が現在の国旗のモデルとなっています。',
          ],
        },
        {
          mainColor: [red, green, black, orange],
          fullColor: [red, green, black, orange],
          tag: [creature],
          area: worldArea.africa,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'zambia',
          url: 'zambia',
          name: 'ザンビア',
          fullName: 'ザンビア共和国',
          firstLetter: 'さ',
          officialName: 'Republic of Zambia',
          image: zambia,
          location: zambiaMap,
          link: 'https://flaghistory.jp/zambia/',
          ogp: 'ogpFlagImages/zambia.png',
          desc: [
            '縦横比率は【2:3】',
            '緑は農業と森林資源、赤は独立闘争で流した血、黒は国民、オレンジは銅を表します。右上に描かれているのはサンショクウミワシで、自由と困難に打ち勝つ力を示しています。',
            '1964年の東京オリンピック閉会式で現在の国旗が初めて掲揚されました。そのため当時のオリンピック運営委員は国旗変更に伴い大変だったと聞きます。',
          ],
        },
        {
          mainColor: [blue, white],
          fullColor: [blue, green, yellow, white],
          tag: [plant],
          area: worldArea.eu,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'sanMarino',
          url: 'sanmarino',
          name: 'サンマリノ',
          fullName: 'サンマリノ共和国',
          firstLetter: 'さ',
          officialName: 'Most Serene Republic of San Marino',
          image: sanMarino,
          location: sanMarinoMap,
          link: 'https://flaghistory.jp/sanmarino/',
          ogp: 'ogpFlagImages/sanMarino.png',
          desc: [
            '縦横比率は【3:4】',
            '白はティタノ山にかかる雲、青は空を表します。中央に描かれているのは国章です。',
            '冠が描かれている国は王国であることが多いですが、サンマリノの冠は主権の象徴であり、王国ではありません。',
          ],
        },
        {
          mainColor: [blue, green, white],
          fullColor: [blue, green, white],
          tag: [],
          area: worldArea.africa,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'sierraLeone',
          url: 'sierraleone',
          name: 'シエラレオネ',
          fullName: 'シエラレオネ共和国',
          firstLetter: 'し',
          officialName: 'Republic of Sierra Leone',
          image: sierraLeone,
          location: sierraLeoneMap,
          link: 'https://flaghistory.jp/sierraleone/',
          ogp: 'ogpFlagImages/sierraLeone.png',
          desc: [
            '縦横比率は【2:3】',
            '緑は農業と山々、白は正義と団結、青は良港フリータウンを表します。',
            '日本ではコンビニのファミリーマートと似ているとよく言われている国旗です。',
          ],
        },
        {
          mainColor: [red, green, blue, white],
          fullColor: [red, green, blue, white],
          tag: [star],
          area: worldArea.africa,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'djibouti',
          url: 'djibouti',
          name: 'ジブチ',
          fullName: 'ジブチ共和国',
          firstLetter: 'し',
          officialName: 'Republic of Djibouti',
          image: djibouti,
          location: djiboutiMap,
          link: 'https://flaghistory.jp/djibouti/',
          ogp: 'ogpFlagImages/djibouti.png',
          desc: [
            '縦横比率は【2:3】',
            '青はイッサ人、緑はアファール人、白は平和、赤は独立闘争、星は統合を表します。',
            '国旗をデザインしたのはマフムード・ハルビ氏、後年飛行機事故で亡くなったと言われますが、真相は定かではないそうです。',
          ],
        },
        {
          mainColor: [green, yellow, black],
          fullColor: [green, yellow, black],
          tag: [cross],
          area: worldArea.ncAmerica,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'jamaica',
          url: 'jamaica',
          name: 'ジャマイカ',
          fullName: 'ジャマイカ',
          firstLetter: 'し',
          officialName: 'Jamaica',
          image: jamaica,
          location: jamaicaMap,
          link: 'https://flaghistory.jp/jamaica/',
          ogp: 'ogpFlagImages/jamaica.png',
          desc: [
            '縦横比率は【1:2】',
            '黄色は太陽と天然資源、緑は農業と将来の希望、黒は国民が克服すべき困難を表します。',
            '国連加盟国のうち、唯一国旗でよく使われる赤青白のいずれの色も使われていない国旗です。',
          ],
        },
        {
          mainColor: [red, white],
          fullColor: [red, white],
          tag: [cross],
          area: worldArea.asia,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'georgia',
          url: 'georgia',
          name: 'ジョージア',
          fullName: 'ジョージア',
          firstLetter: 'し',
          officialName: 'Georgia',
          image: georgia,
          location: georgiaMap,
          link: 'https://flaghistory.jp/georgia/',
          ogp: 'ogpFlagImages/georgia.png',
          desc: [
            '縦横比率は【2:3】',
            '国旗に描かれているのはエルサレム十字と呼ばれるもので、これは十字軍に由来するシンボルです。',
            '12世紀から14世紀にかけて存在したグルジア王国で使われていた国旗がもととなっています。',
          ],
        },
        {
          mainColor: [red, green, white, black],
          fullColor: [red, green, white, black],
          tag: [star],
          area: worldArea.asia,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'syria',
          url: 'syria',
          name: 'シリア',
          fullName: 'シリア・アラブ共和国',
          firstLetter: 'し',
          officialName: 'Syrian Arab Republic',
          image: syria,
          location: syriaMap,
          link: 'https://flaghistory.jp/syria/',
          ogp: 'ogpFlagImages/syria.png',
          desc: [
            '縦横比率は【2:3】',
            '赤は自由への戦い、白は平和、黒は暗い植民地時代を表します。2個の緑の星は美しいアラブの大地と統一を意味します。',
            '汎アラブ色が用いられている国旗の一つです。',
          ],
        },
        {
          mainColor: [red, white],
          fullColor: [red, white],
          tag: [moon, star],
          area: worldArea.asia,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'singapore',
          url: 'singapore',
          name: 'シンガポール',
          fullName: 'シンガポール共和国',
          firstLetter: 'し',
          officialName: 'Republic of Singapore',
          image: singapore,
          location: singaporeMap,
          link: 'https://flaghistory.jp/singapore/',
          ogp: 'ogpFlagImages/singapore.png',
          desc: [
            '縦横比率は【2:3】',
            '赤は全人類の平等と融和、白は美徳と純潔、5つの星は民主主義・平和・平等・進歩・正義、三日月はイスラム教の象徴であり5つの星が示す5募りそうと新興国家の発展を支える決意を表しています。',
            '中国系が中国国旗をモデルとした5つの星を、イスラム教徒が三日月を求めたことから現在の国旗のデザインが出来上がりました。',
          ],
        },
        {
          mainColor: [red, green, yellow, white, black],
          fullColor: [red, green, yellow, white, black],
          tag: [star, creature],
          area: worldArea.africa,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'zimbabwe',
          url: 'zimbabwe',
          name: 'ジンバブエ',
          fullName: 'ジンバブエ共和国',
          firstLetter: 'し',
          officialName: 'Republic of Zimbabwe',
          image: zimbabwe,
          location: zimbabweMap,
          link: 'https://flaghistory.jp/zimbabwe/',
          ogp: 'ogpFlagImages/zimbabwe.png',
          desc: [
            '縦横比率は【1:2】',
            '緑は農業、黄色は好物資源、赤は武力闘争で流れた血、黒は黒人、白は平和、星は希望、鳥はジンバブエのシンボルで過去の栄光を表します。',
            '国旗のデザインをしたのは当時の公共事業大臣のリチャード・ホーブ氏。当時の与党ジンバブエ・アフリカ民族同盟愛国戦線党旗がモデルとなっています。',
          ],
        },
        {
          mainColor: [red, white],
          fullColor: [red, white],
          tag: [cross],
          area: worldArea.eu,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'switzerland',
          url: 'swiss',
          name: 'スイス',
          fullName: 'スイス連邦',
          firstLetter: 'す',
          officialName: 'Swiss Confederation',
          image: switzerland,
          location: switzerlandMap,
          link: 'https://flaghistory.jp/switzerland/',
          ogp: 'ogpFlagImages/switzerland.png',
          desc: [
            '縦横比率は【1:1】',
            '白はキリスト教精神を、赤は主権を表します。',
            '比率が正方形になっている国旗です。正方形となっているのは昔から軍隊の旗が正方形となっていることからそこが由来しているという説や、ローマ帝国の国旗が正方形であったことからという説があります。',
          ],
        },
        {
          mainColor: [blue, yellow],
          fullColor: [blue, yellow],
          tag: [cross, scCross],
          area: worldArea.eu,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'sweden',
          url: 'sweden',
          name: 'スウェーデン',
          fullName: 'スウェーデン王国',
          firstLetter: 'す',
          officialName: 'Kingdom of Sweden',
          image: sweden,
          location: swedenMap,
          link: 'https://flaghistory.jp/sweden/',
          ogp: 'ogpFlagImages/sweden.png',
          desc: [
            '縦横比率は【5:8】',
            '青は澄み切った空、黄色は国教のキリスト教徒と同時に自由と独立を表します。',
            '交点が左にずれた十字はスカンジナビア十字と呼ばれるデザインです。',
          ],
        },
        {
          mainColor: [red, green, white, black],
          fullColor: [red, green, white, black],
          tag: [],
          area: worldArea.africa,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'sudan',
          url: 'sudan',
          name: 'スーダン',
          fullName: 'スーダン共和国',
          firstLetter: 'す',
          officialName: 'The Republic of the Sudan',
          image: sudan,
          location: sudanMap,
          link: 'https://flaghistory.jp/sudan/',
          ogp: 'ogpFlagImages/sudan.png',
          desc: [
            '縦横比率は【1:2】',
            '緑は繁栄と農業、赤は闘争と犠牲者、白は平和や光・愛、黒はスーダンを表します。',
            'なおスーダンとはアラビア語で『黒い』を意味しています。',
          ],
        },
        {
          mainColor: [red, yellow],
          fullColor: [red, yellow],
          tag: [creature],
          area: worldArea.eu,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'spain',
          url: 'spain',
          name: 'スペイン',
          fullName: 'スペイン王国',
          firstLetter: 'す',
          officialName: 'Kingdom of Spain',
          image: spain,
          location: spainMap,
          link: 'https://flaghistory.jp/spain/',
          ogp: 'ogpFlagImages/spain.png',
          desc: [
            '縦横比率は【2:3】',
            '赤は祖先の勇気、黄色は新大陸で発見した富を表します。',
            '国旗左部に描かれているのは国章で、リボンにはラテン語で『PLVS VLTRA（より彼方の世界へ）』と書かれています。',
          ],
        },
        {
          mainColor: [red, green, yellow, white],
          fullColor: [red, green, yellow, white],
          tag: [star],
          area: worldArea.sAmerica,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'suriname',
          url: 'suriname',
          name: 'スリナム',
          fullName: 'スリナム共和国',
          firstLetter: 'す',
          officialName: 'Republic of Suriname',
          image: suriname,
          location: surinameMap,
          link: 'https://flaghistory.jp/suriname/',
          ogp: 'ogpFlagImages/suriname.png',
          desc: [
            '縦横比率は【2:3】',
            '緑は肥沃さと希望、白は正義と自由、赤は進歩、黄色は犠牲、星は国の統一と輝ける未来を表します。',
            'スリナム国旗はジャック・ハーマン・ピナス氏によってデザインされました。しかし彼いわく、デザインを勝手に変更されたため、自分は実質的にはデザイナーではないと主張しました。',
          ],
        },
        {
          mainColor: [red, green, yellow, orange],
          fullColor: [red, green, yellow, black, orange],
          tag: [creature],
          area: worldArea.asia,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'sriLanka',
          url: 'srilanka',
          name: 'スリランカ',
          fullName: 'スリランカ民主社会主義共和国',
          firstLetter: 'す',
          officialName: 'Democratic Socialist Republic of Sri Lanka',
          image: sriLanka,
          location: sriLankaMap,
          link: 'https://flaghistory.jp/srilanka/',
          ogp: 'ogpFlagImages/sriLanka.png',
          desc: [
            '縦横比率は【1:2】',
            '緑はイスラム教徒を、オレンジはヒンドゥー教徒タミル人を、4枚の菩薩樹の葉は仏教を、黄色は仏教による国家と国民の加護を表します。',
            '剣を握ったライオンはシンハラ人（スリランカの民族）のシンボルです。',
          ],
        },
        {
          mainColor: [red, blue, white],
          fullColor: [red, blue, white],
          tag: [cross],
          area: worldArea.eu,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'slovakia',
          url: 'slovakia',
          name: 'スロバキア',
          fullName: 'スロバキア共和国',
          firstLetter: 'す',
          officialName: 'Slovak Republic',
          image: slovakia,
          location: slovakiaMap,
          link: 'https://flaghistory.jp/slovakia/',
          ogp: 'ogpFlagImages/slovakia.png',
          desc: [
            '縦横比率は【2:3】',
            '青白赤はチェコスロバキア時代より使われている色です。左部に描かれているのは国章でダブルクロスと呼ばれる、正教会のシンボルと、その下には実在する3つの山を表すものが描かれています。',
            'なお3つの山とはタトラ山、ファトラ山、マートラ山のことで、このうちマートラ山はハンガリーにあります。またダブルクロスと３つの山はハンガリーの国章にも使われています。',
          ],
        },
        {
          mainColor: [red, blue, white],
          fullColor: [red, blue, yellow, white],
          tag: [star],
          area: worldArea.eu,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'slovenia',
          url: 'slovenia',
          name: 'スロベニア',
          fullName: 'スロベニア共和国',
          firstLetter: 'す',
          officialName: 'Republic of Slovenia',
          image: slovenia,
          location: sloveniaMap,
          link: 'https://flaghistory.jp/slovenia/',
          ogp: 'ogpFlagImages/slovenia.png',
          desc: [
            '縦横比率は【1:2】',
            '青白赤の3色はユーゴスラビア王国時代から続く色合い。カントン（左上）に描かれているのは国章です。',
            '独立当時に上げられた国旗は縦横比率1:4もしくは1:5だったとのことで、非常に横に長いものだったのだとか。',
          ],
        },
        {
          mainColor: [red, green, blue, yellow, white],
          fullColor: [red, green, blue, yellow, white],
          tag: [],
          area: worldArea.africa,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'seychelles',
          url: 'seychelles',
          name: 'セーシェル',
          fullName: 'セーシェル共和国',
          firstLetter: 'せ',
          officialName: 'Republic of Seychelles',
          image: seychelles,
          location: seychellesMap,
          link: 'https://flaghistory.jp/seychelles/',
          ogp: 'ogpFlagImages/seychelles.png',
          desc: [
            '縦横比率は【1:2】',
            '青は空と海、黄色は光と生命を与える太陽、赤は国民と統一を目指しともに働く決意、白は社会正義と調和、緑は国土と自然環境を表します。',
            'また5つの斜線を用いたデザインは、新しい未来へと向かう国家としての姿勢を示します。',
          ],
        },
        {
          mainColor: [red, green, blue, white],
          fullColor: [red, green, blue, yellow, white, black],
          tag: [star, plant],
          area: worldArea.africa,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'equatorialGuinea',
          url: 'eq-guinea',
          name: '赤道ギニア',
          fullName: '赤道ギニア共和国',
          firstLetter: 'せ',
          officialName: 'Republic of Equatorial Guinea',
          image: equatorialGuinea,
          location: equatorialGuineaMap,
          link: 'https://flaghistory.jp/eq-guinea/',
          ogp: 'ogpFlagImages/equatorialGuinea.png',
          desc: [
            '縦横比率は【2:3】',
            '青は大陸部と島々を結ぶ海、緑は農業と天然資源・ジャングル、白は平和、赤は独立戦争を表します。中央に描かれているのは国章です。',
            'リボンには「UNIDAD PAZ JUSTICIA（統一、平和、正義）」と書かれています。',
          ],
        },
        {
          mainColor: [red, green, yellow],
          fullColor: [red, green, yellow],
          tag: [star],
          area: worldArea.africa,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'senegal',
          url: 'senegal',
          name: 'セネガル',
          fullName: 'セネガル共和国',
          firstLetter: 'せ',
          officialName: 'Republic of Senegal',
          image: senegal,
          location: senegalMap,
          link: 'https://flaghistory.jp/senegal/',
          ogp: 'ogpFlagImages/senegal.png',
          desc: [
            '縦横比率は【2:3】',
            '緑は発展への希望、黄色は国の富、赤は独立闘争で流した血、緑の星は希望と統一を表します。',
            '汎アフリカ色（赤黄緑）を用いた国旗の一つ。',
          ],
        },
        {
          mainColor: [red, blue, white],
          fullColor: [red, blue, yellow, white, black],
          tag: [cross, creature],
          area: worldArea.eu,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'serbia',
          url: 'serbia',
          name: 'セルビア',
          fullName: 'セルビア共和国',
          firstLetter: 'せ',
          officialName: 'Republic of Serbia',
          image: serbia,
          location: serbiaMap,
          link: 'https://flaghistory.jp/serbia/',
          ogp: 'ogpFlagImages/serbia.png',
          desc: [
            '縦横比率は【2:3】',
            '赤青白の3色は、オスマン帝国よりセルビア王国として独立を果たしたときから使っている色です。',
            '鷲の紋章はセルビアの国章で、双頭の鷲は東ローマ帝国から来ています。',
          ],
        },
        {
          mainColor: [red, green, yellow, white, black],
          fullColor: [red, green, yellow, white, black],
          tag: [star],
          area: worldArea.ncAmerica,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'saintChristopherNevis',
          url: 'nevis',
          name: 'セントクリストファー・ネイビス',
          fullName: 'セントクリストファー・ネイビス',
          firstLetter: 'せ',
          officialName: 'Saint Christopher and Nevis',
          image: saintChristopherNevis,
          location: saintChristopherNevisMap,
          link: 'https://flaghistory.jp/nevis/',
          ogp: 'ogpFlagImages/saintChristopherNevis.png',
          desc: [
            '縦横比率は【2:3】',
            '緑は肥沃な国土、黄色は太陽、黒はアフリカからの伝統、赤は独立闘争で流された血、２つの星は希望と自由、また国を構成する2つの島を表します。',
            'なお２つの島とはセントクリストファー島とネイビス島のことです。',
          ],
        },
        {
          mainColor: [green, blue, yellow],
          fullColor: [green, blue, yellow],
          tag: [],
          area: worldArea.ncAmerica,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'saintVincent',
          url: 'vincent',
          name: 'セントビンセント',
          fullName: 'セントビンセントおよびグレナディーン諸島',
          firstLetter: 'せ',
          officialName: 'Saint Vincent and the Grenadines',
          image: saintVincent,
          location: saintVincentMap,
          link: 'https://flaghistory.jp/saintvincent/',
          ogp: 'ogpFlagImages/saintVincent.png',
          desc: [
            '縦横比率は【2:3】',
            '青は空と海、黄色は陽光と国民の明るい気質・輝く砂浜、緑は豊かな植物と農業・国民の活気を表します。',
            'この国は『アンティル諸島の宝石』とも呼ばれており、国旗中央の３つのひし形はその呼び名を表しています。',
          ],
        },
        {
          mainColor: [blue, yellow, white, black],
          fullColor: [blue, yellow, white, black],
          tag: [],
          area: worldArea.ncAmerica,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'saintLucia',
          url: 'saintlucia',
          name: 'セントルシア',
          fullName: 'セントルシア',
          firstLetter: 'せ',
          officialName: 'Saint Lucia',
          image: saintLucia,
          location: saintLuciaMap,
          link: 'https://flaghistory.jp/saintlucia/',
          ogp: 'ogpFlagImages/saintLucia.png',
          desc: [
            '縦横比率は【1:2】',
            '青は忠誠と空・カリブ海・大西洋、黄色は陽光と繁栄、黒と白は黒人と白人の文化的影響と調和を表します。また2つの三角形は2つのピトン火山で、国民の希望と大志を示します。',
            '国旗のデザイナーはセントルシアの芸術家ダンスタン・セント・オマー氏。2007年には国民の文化的英雄と呼ばれるようになりました。',
          ],
        },
        {
          mainColor: [blue, white],
          fullColor: [blue, white],
          tag: [star],
          area: worldArea.africa,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'somalia',
          url: 'somalia',
          name: 'ソマリア',
          fullName: 'ソマリア連邦共和国',
          firstLetter: 'そ',
          officialName: 'Federal Republic of Somalia',
          image: somalia,
          location: somaliaMap,
          link: 'https://flaghistory.jp/somalia/',
          ogp: 'ogpFlagImages/somalia.png',
          desc: [
            '縦横比率は【2:3】',
            '青と白は国連の旗に因んだ色で、平和を表します。五角の星はソマリ人が住む5つの地域を示しています。',
            '国旗のデザイナーはモハメッド・アウェール・リバン氏（Mohammed Awale Liban）、「翌日国旗の議論をする」と述べられ、翌朝には自発的に現在のソマリア国旗を完成させ審議会に持ち込み、美しい旗と採用されることとなります。',
          ],
        },
        {
          mainColor: [red, green, white, black],
          fullColor: [red, green, white, black],
          tag: [star],
          area: worldArea.africa,
          kokuren: '国連非加盟国',
          groupingCSS: 'not-kokuren',
          id: 'somaliland',
          url: 'somaliland',
          name: 'ソマリランド',
          fullName: 'ソマリランド共和国',
          firstLetter: 'そ',
          officialName: 'Republic of Somaliland',
          image: somaliland,
          location: somalilandMap,
          link: 'https://flaghistory.jp/somaliland/',
          ogp: 'ogpFlagImages/somaliland.png',
          desc: [
            '縦横比率は【1:2】',
            '緑は繁栄、白は平和、赤は英雄の血、黒は大ソマリア主義の夢の終焉、五角星はソマリランドの5つの地域、上部に描かれている文字はシャハーダでイスラム教を表します。',
            'サウジアラビア国旗と同じく、半旗（弔意を示すために掲揚する旗を半分の位置まで下げること）が禁止されています。破った場合、それは刑事犯罪とみなされます。これはシャハーダが描かれているため、それを下げるのは不敬に当たると考えられているためです。',
          ],
        },
        {
          mainColor: [green, blue, yellow, white],
          fullColor: [green, blue, yellow, white],
          tag: [star],
          area: worldArea.oceania,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'solomonIslands',
          url: 'solomon',
          name: 'ソロモン諸島',
          fullName: 'ソロモン諸島',
          firstLetter: 'そ',
          officialName: 'Solomon Islands',
          image: solomonIslands,
          location: solomonIslandsMap,
          link: 'https://flaghistory.jp/solomon/',
          ogp: 'ogpFlagImages/solomonIslands.png',
          desc: [
            '縦横比率は【1:2】',
            '青は空と海、緑は肥沃な大地、黄色は太陽と砂浜、5つの星は独立当時の5地区を表します。',
            'なお5つの地区とはマライタ、西部、中部、東部、東部諸島のことです。',
          ],
        },
        {
          mainColor: [red, blue, white],
          fullColor: [red, blue, white],
          tag: [],
          area: worldArea.asia,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'thailand',
          url: 'thailand',
          name: 'タイ',
          fullName: 'タイ王国',
          firstLetter: 'た',
          officialName: 'Kingdom of Thailand',
          image: thailand,
          location: thailandMap,
          link: 'https://flaghistory.jp/thailand/',
          ogp: 'ogpFlagImages/thailand.png',
          desc: [
            '縦横比率は【2:3】',
            '赤は国民の血、白は信仰に守られた国民の純粋さ、青はタイ王室を表します。',
            'かつて象の描かれた国旗を使っていましたが、逆さまに掲揚されているのを見た王が心を痛め（象はタイで神聖な生き物）、その結果逆さまにしても見た目の変わらない国旗が制定されました。',
          ],
        },
        {
          mainColor: [red, blue, white],
          fullColor: [red, blue, white],
          tag: [sun],
          area: worldArea.asia,
          kokuren: '国連非加盟国',
          groupingCSS: 'not-kokuren',
          id: 'taiwan',
          url: 'taiwan',
          name: '台湾',
          fullName: '中華民国',
          firstLetter: 'た',
          officialName: 'Republic of China',
          image: taiwan,
          location: taiwanMap,
          link: 'https://flaghistory.jp/taiwan/',
          ogp: 'ogpFlagImages/taiwan.png',
          desc: [
            '縦横比率は【2:3】',
            '青は民権主義と自由、白は民主主義と平等、赤は民族主義と革命に身を捧げた人の血を表します。また太陽が放つ12本の光は十二支を表し、絶え間ない進歩を意味しています。',
            '別名『青天白日満地紅旗（せいてんはくじつまんじこうき）』と呼ばれます。',
          ],
        },
        {
          mainColor: [red, green, yellow, white],
          fullColor: [red, green, yellow, white],
          tag: [star],
          area: worldArea.asia,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'tajikistan',
          url: 'tajikistan',
          name: 'タジキスタン',
          fullName: 'タジキスタン共和国',
          firstLetter: 'た',
          officialName: 'Republic of Tajikistan',
          image: tajikistan,
          location: tajikistanMap,
          link: 'https://flaghistory.jp/tajikistan/',
          ogp: 'ogpFlagImages/tajikistan.png',
          desc: [
            '縦横比率は【1:2】',
            '赤は国家主権、白は主要産業である綿花、緑はその他農作物を表します。また7つの星は天国にあると伝えられる7つの果樹園、冠は国民を表しています。',
            'タジク人はイラン系民族であるため、イラン国旗の3色を国旗に使用しています。ちなみに世界一高い国旗掲揚台を持っている国です。',
          ],
        },
        {
          mainColor: [green, blue, yellow, black],
          fullColor: [green, blue, yellow, black],
          tag: [],
          area: worldArea.africa,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'tanzania',
          url: 'tanzania',
          name: 'タンザニア',
          fullName: 'タンザニア連合共和国',
          firstLetter: 'た',
          officialName: 'United Republic of Tanzania',
          image: tanzania,
          location: tanzaniaMap,
          link: 'https://flaghistory.jp/tanzania/',
          ogp: 'ogpFlagImages/tanzania.png',
          desc: [
            '縦横比率は【2:3】',
            '緑は国土、黄色は鉱物資源、黒は国民、青は海を表します。',
            'タンザニアはタンガニーカとザンジバルが合邦し出来た国で、国旗はそのタンガニーカとザンジバルで使われていたものを合わせたデザインとなっています。',
          ],
        },
        {
          mainColor: [red, blue, white],
          fullColor: [red, blue, white],
          tag: [],
          area: worldArea.eu,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'czech',
          url: 'czech',
          name: 'チェコ',
          fullName: 'チェコ共和国',
          firstLetter: 'ち',
          officialName: 'Czech Republic',
          image: czech,
          location: czechMap,
          link: 'https://flaghistory.jp/czech/',
          ogp: 'ogpFlagImages/czech.png',
          desc: [
            '縦横比率は【2:3】',
            'ボヘミア紋章由来の白赤の二色と、スロバキアとモラヴィアを表す青い三角形を描いている国旗です。',
            '1918~1920にかけて白赤の二色旗を使っていましたが、ポーランド国旗と被ることを理由の一つとして現在のデザインの国旗が誕生します。',
          ],
        },
        {
          mainColor: [red, blue, yellow],
          fullColor: [red, blue, yellow],
          tag: [],
          area: worldArea.africa,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'chad',
          url: 'chad',
          name: 'チャド',
          fullName: 'チャド共和国',
          firstLetter: 'ち',
          officialName: 'Republic of Chad',
          image: chad,
          location: chadMap,
          link: 'https://flaghistory.jp/chad/',
          ogp: 'ogpFlagImages/chad.png',
          desc: [
            '縦横比率は【2:3】',
            '青は空・希望・水、黄色は太陽と砂漠、赤は進歩と統一・犠牲者を表します。',
            'ルーマニア国旗と縦横比率、デザインが全く同じで、この２つは世界一似ている国旗です。なお青の色が若干チャド国旗のほうが濃いので、そこで見分けることが出来ます。',
          ],
        },
        {
          mainColor: [red, green, blue, yellow, white],
          fullColor: [red, green, blue, yellow, white],
          tag: [star],
          area: worldArea.africa,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'centralAfrican',
          url: 'central-african',
          name: '中央アフリカ',
          fullName: '中央アフリカ共和国',
          firstLetter: 'ち',
          officialName: 'Central African Republic',
          image: centralAfrican,
          location: centralAfricanMap,
          link: 'https://flaghistory.jp/car/',
          ogp: 'ogpFlagImages/centralAfrican.png',
          desc: [
            '縦横比率は【2:3】',
            '赤は独立闘争で流した血、青は空と自由、白は平和と尊厳、緑は希望と新年、黄色は忍耐、星は未来への願望を表します。',
            'フランスとアフリカの融合を理想としていたボガンダ自治国首相により考案されたもので、フランス国旗（青白赤）と汎アフリカ色（赤黄緑）を組み合わせた国旗です。',
          ],
        },
        {
          mainColor: [red, yellow],
          fullColor: [red, yellow],
          tag: [star],
          area: worldArea.asia,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'china',
          url: 'china',
          name: '中国',
          fullName: '中華人民共和国',
          firstLetter: 'ち',
          officialName: 'People\'s Republic of China',
          image: china,
          location: chinaMap,
          link: 'https://flaghistory.jp/china/',
          ogp: 'ogpFlagImages/china.png',
          desc: [
            '縦横比率は【2:3】',
            '赤は共産主義の象徴であり、漢民族の伝統色、黄色は光明を表します。カントン（左上）に描かれている大きな星は中国共産党の指導力、小さな4個の星は中国人民の団結を示しています。',
            '中国国旗には『五星紅旗』という呼び名があります。',
          ],
        },
        {
          mainColor: [red, white],
          fullColor: [red, white],
          tag: [sun, moon, star],
          area: worldArea.africa,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'tunisia',
          url: 'tunisia',
          name: 'チュニジア',
          fullName: 'チュニジア共和国',
          firstLetter: 'ち',
          officialName: 'Republic of Tunisia',
          image: tunisia,
          location: tunisiaMap,
          link: 'https://flaghistory.jp/tunisia/',
          ogp: 'ogpFlagImages/tunisia.png',
          desc: [
            '縦横比率は【2:3】',
            '白は平和、赤は犠牲者の血を表します。また白い円は太陽、三日月はカルタゴを建設したフェニキアの女神タニスのシンボル、幸福を表しています。',
            '三日月と星の組み合わせはイスラムのシンボルです。',
          ],
        },
        {
          mainColor: [red, blue, white],
          fullColor: [red, blue, white],
          tag: [star],
          area: worldArea.sAmerica,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'chile',
          url: 'chile',
          name: 'チリ',
          fullName: 'チリ共和国',
          firstLetter: 'ち',
          officialName: 'Republic of Chile',
          image: chile,
          location: chileMap,
          link: 'https://flaghistory.jp/chile/',
          ogp: 'ogpFlagImages/chile.png',
          desc: [
            '縦横比率は【2:3】',
            '青は空と太平洋、白はアンデス山脈の雪、赤は独立のために流された血、星は進歩と名誉を表します。',
            '1818年に最初に使われて以降、チリの国旗はデザインが変わっていません。これは継続的に使用されている中で最も古いモノの一つと言えます。',
          ],
        },
        {
          mainColor: [red, blue, yellow, white],
          fullColor: [red, blue, yellow, white],
          tag: [star, cross],
          area: worldArea.oceania,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'tuvalu',
          url: 'tuvalu',
          name: 'ツバル',
          fullName: 'ツバル',
          firstLetter: 'つ',
          officialName: 'Tuvalu',
          image: tuvalu,
          location: tuvaluMap,
          link: 'https://flaghistory.jp/tuvalu/',
          ogp: 'ogpFlagImages/tuvalu.png',
          desc: [
            '縦横比率は【1:2】',
            '9個の星は無人島を含めたこの国の島の数を表しています。またカントン（左上）に描かれているのはイギリスの国旗です。イギリスとの歴史的関係性を示します。',
            '一時は有人島の数に合わせて星の数が8個に変更されていましたが、1997年に星の数が9つに戻りました。',
          ],
        },
        {
          mainColor: [red, white],
          fullColor: [red, white],
          tag: [cross, scCross],
          area: worldArea.eu,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'denmark',
          url: 'denmark',
          name: 'デンマーク',
          fullName: 'デンマーク王国',
          firstLetter: 'て',
          officialName: 'Kingdom of Denmark',
          image: denmark,
          location: denmarkMap,
          link: 'https://flaghistory.jp/denmark/',
          ogp: 'ogpFlagImages/denmark.png',
          desc: [
            '縦横比率は【28:37】',
            '赤は神聖ローマ帝国群旗の色で、白い十字はキリスト教を表します。別名『ダンネブロ』',
            '世界最古の国旗と呼ばれるもので、1219年よりデンマークの国旗として掲げられています。（ただしナチスドイツ支配下だったときはハーケンクロイツの国旗が使われた）',
          ],
        },
        {
          mainColor: [red, black, gold],
          fullColor: [red, black, gold],
          tag: [],
          area: worldArea.eu,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'germany',
          url: 'germany',
          name: 'ドイツ',
          fullName: 'ドイツ連邦共和国',
          firstLetter: 'と',
          officialName: 'Federal Republic of Germany',
          image: germany,
          location: germanyMap,
          link: 'https://flaghistory.jp/germany/',
          ogp: 'ogpFlagImages/germany.png',
          desc: [
            '縦横比率は【3:5】',
            '黒は勤勉と力、赤は熱血、黄色（金色）は名誉を表しています。',
            'ドイツ国旗の配色には『シュヴァルツ・ロート・ゴルト』という愛称があります。',
          ],
        },
        {
          mainColor: [red, green, yellow, white],
          fullColor: [red, green, yellow, white],
          tag: [star],
          area: worldArea.africa,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'togo',
          url: 'togo',
          name: 'トーゴ',
          fullName: 'トーゴ共和国',
          firstLetter: 'と',
          officialName: 'Republic of Togo',
          image: togo,
          location: togoMap,
          link: 'https://flaghistory.jp/togo/',
          ogp: 'ogpFlagImages/togo.png',
          desc: [
            '縦横比率は【1:1.618】（または【3:5】）',
            '緑は希望や農業・森林、黄色は国民の団結と鉱物資源、赤は独立のために流した血、白は平和と尊厳・知恵、星は自由と生命を表します。また5つの縞は海岸、プラトー、カラ、サバンナ、中部の国を構成する5地区を示します。',
            '縦横比率を黄金比にいしている唯一の国旗です。',
          ],
        },
        {
          mainColor: [red, blue, black],
          fullColor: [red, blue, black],
          tag: [],
          area: worldArea.eu,
          kokuren: '国連非加盟国',
          groupingCSS: 'not-kokuren',
          id: 'donetsk',
          url: 'donetsk',
          name: 'ドネツク',
          fullName: 'ドネツク人民共和国',
          firstLetter: 'と',
          officialName: 'Donetsk People\'s Republic',
          image: donetsk,
          location: donetskMap,
          link: 'https://flaghistory.jp/donetsk/',
          ogp: 'ogpFlagImages/donetsk.png',
          desc: [
            '縦横比率は【2:3】',
            '黒は黒海や石炭産業、青は水、赤は自由を表します。',
            'ドネツクは2014年にウクライナから独立宣言をした国で、また人民共和国が資本主義からの解放として赤を用いることから、赤は自由を表すと考えられていますが、意味として断言できるかと言われると情報が不足しています。',
          ],
        },
        {
          mainColor: [red, blue, white],
          fullColor: [red, green, blue, yellow, white, black],
          tag: [cross, plant],
          area: worldArea.ncAmerica,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'dominicanRepublic',
          url: 'dominican',
          name: 'ドミニカ共和国',
          fullName: 'ドミニカ共和国',
          firstLetter: 'と',
          officialName: 'Dominican Republic',
          image: dominicanRepublic,
          location: dominicanRepublicMap,
          link: 'https://flaghistory.jp/dominican/',
          ogp: 'ogpFlagImages/dominicanRepublic.png',
          desc: [
            '縦横比率は【2:3】',
            '青は自由、赤は愛国者の血、白は平和と尊厳を表します。中央には国章が描かれています。',
            '国章のリボンにはスペイン語で「DIOS PATRIA LIBERTAD（神、祖国、自由）」という標語が書かれています。',
          ],
        },
        {
          mainColor: [red, green, yellow, white, black, purple],
          fullColor: [red, green, yellow, white, black, purple],
          tag: [star, cross, creature],
          area: worldArea.ncAmerica,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'dominica',
          url: 'dominica',
          name: 'ドミニカ国',
          fullName: 'ドミニカ国',
          firstLetter: 'と',
          officialName: 'Commonwealth of Dominica',
          image: dominica,
          location: dominicaMap,
          link: 'https://flaghistory.jp/dominica/',
          ogp: 'ogpFlagImages/dominica.png',
          desc: [
            '縦横比率は【1:2】',
            '緑は豊かな森林、赤は社会主義、黄色は陽光、白は国民の純粋さ、黒は豊かな土壌とアフリカからの伝統を表します。10個の星は国を構成する10地区、3本の縞はキリスト教の三位一体を示します。',
            '中央に描かれている鳥は国鳥に指定されているミカドボウシインコで、高く志向する国民の願望を表します。',
          ],
        },
        {
          mainColor: [red, white, black],
          fullColor: [red, white, black],
          tag: [],
          area: worldArea.ncAmerica,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'trinidadTobago',
          url: 'trinidad',
          name: 'トリニダード・トバゴ',
          fullName: 'トリニダード・トバゴ共和国',
          firstLetter: 'と',
          officialName: 'Republic of Trinidad and Tobago',
          image: trinidadTobago,
          location: trinidadTobagoMap,
          link: 'https://flaghistory.jp/trinidad/',
          ogp: 'ogpFlagImages/trinidadTobago.png',
          desc: [
            '縦横比率は【3:5】',
            '赤は国民の寛容さと太陽のエネルギー、白は海と平等、黒は国民の統一への努力と天然資源を表します。',
            '国旗の基本的比率は【3:5】ですが、海上で掲揚される場合は【1:2】でなければならないという決まりがあるようです。',
          ],
        },
        {
          mainColor: [red, green, yellow, white],
          fullColor: [red, green, yellow, white, black],
          tag: [moon, star],
          area: worldArea.asia,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'turkmenistan',
          url: 'turkmenistan',
          name: 'トルクメニスタン',
          fullName: 'トルクメニスタン',
          firstLetter: 'と',
          officialName: 'Turkmenistan',
          image: turkmenistan,
          location: turkmenistanMap,
          link: 'https://flaghistory.jp/turkmenistan/',
          ogp: 'ogpFlagImages/turkmenistan.png',
          desc: [
            '縦横比率は【2:3】',
            '緑はイスラムの色、三日月は明るい未来、5つの星は5州、ホイスト（左部）に描かれているのは主要5部族のグルという伝統的な絨毯模様です。',
            '複雑な絨毯模様が描かれていることから、世界で最も複雑な国旗と言われています。',
          ],
        },
        {
          mainColor: [red, white],
          fullColor: [red, white],
          tag: [moon, star],
          area: worldArea.asia,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'turkey',
          url: 'turkey',
          name: 'トルコ',
          fullName: 'トルコ共和国',
          firstLetter: 'と',
          officialName: 'Republic of Turkey',
          image: turkey,
          location: turkeyMap,
          link: 'https://flaghistory.jp/turkey/',
          ogp: 'ogpFlagImages/turkey.png',
          desc: [
            '縦横比率は【2:3】',
            '赤は勇気を表し、三日月と星はイスラムのシンボルであり、月の女神ディアナの三日月と聖母マリアの明けの明星を示したものでもあります。',
            'クロワッサンはトルコ国旗の三日月をモチーフとして誕生しました。',
          ],
        },
        {
          mainColor: [red, white],
          fullColor: [red, white],
          tag: [cross],
          area: worldArea.oceania,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'tonga',
          url: 'tonga',
          name: 'トンガ',
          fullName: 'トンガ王国',
          firstLetter: 'と',
          officialName: 'Kingdom of Tonga',
          image: tonga,
          location: tongaMap,
          link: 'https://flaghistory.jp/tonga/',
          ogp: 'ogpFlagImages/tonga.png',
          desc: [
            '縦横比率は【1:2】',
            '赤はキリストの血、白は純潔、十字はキリスト教を表します。',
            '1862年に現在の赤十字マークと同じ国旗を制定しましたが、1864年に国際赤十字旗が誕生したのをきっかけに現在の国旗へと変更せざるを得なくなりました。現在は憲法にて今後一切国旗のデザインを変更しないことを定めています。',
          ],
        },
        {
          mainColor: [green, white],
          fullColor: [green, white],
          tag: [],
          area: worldArea.africa,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'nigeria',
          url: 'nigeria',
          name: 'ナイジェリア',
          fullName: 'ナイジェリア連邦共和国',
          firstLetter: 'な',
          officialName: 'Federal Republic of Nigeria',
          image: nigeria,
          location: nigeriaMap,
          link: 'https://flaghistory.jp/nigeria/',
          ogp: 'ogpFlagImages/nigeria.png',
          desc: [
            '縦横比率は【1:2】',
            '緑は農業と森林、白は平和と統一を表します。',
            'かつてナイジェリアの地域に存在したベニン王国の国旗は首を切断する様子が描かれていて、インパクトが強いです。',
          ],
        },
        {
          mainColor: [blue, yellow, white],
          fullColor: [blue, yellow, white],
          tag: [star],
          area: worldArea.oceania,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'nauru',
          url: 'nauru',
          name: 'ナウル',
          fullName: 'ナウル共和国',
          firstLetter: 'な',
          officialName: 'Republic of Nauru',
          image: nauru,
          location: nauruMap,
          link: 'https://flaghistory.jp/nauru/',
          ogp: 'ogpFlagImages/nauru.png',
          desc: [
            '縦横比率は【1:2】',
            '黄色い横線は赤道を、白い星は赤道より42km南に位置するナウル自体を表しています。また12角星で12部族を示します。',
            'また星の白でナウルの主要な天然資源であるリン酸塩（リン鉱石）を表していますが、リン鉱石が一時枯渇したことで財政的に厳しい状況に追い込まれたことがありました。',
          ],
        },
        {
          mainColor: [red, green, blue, yellow, white],
          fullColor: [red, green, blue, yellow, white],
          tag: [sun],
          area: worldArea.africa,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'namibia',
          url: 'namibia',
          name: 'ナミビア',
          fullName: 'ナミビア共和国',
          firstLetter: 'な',
          officialName: 'Republic of Namibia',
          image: namibia,
          location: namibiaMap,
          link: 'https://flaghistory.jp/namibia/',
          ogp: 'ogpFlagImages/namibia.png',
          desc: [
            '縦横比率は【2:3】',
            '青は大西洋と重要な水、白は平和と統一、赤は国民と平等な社会を建設する決意、緑は農業と天然資源、黄色い太陽は生命と活力を表します。',
            '当時の与党の南西アフリカ人民機構党旗がモデルの国旗です。',
          ],
        },
        {
          mainColor: [blue, white],
          fullColor: [blue, white],
          tag: [],
          area: '---',
          kokuren: '海外領土・自治領',
          groupingCSS: 'other',
          id: 'antarctica',
          url: 'antarctica',
          name: '南極',
          fullName: '南極',
          firstLetter: 'な',
          officialName: 'Antarctica',
          image: antarctica,
          location: antarcticaMap,
          link: 'https://flaghistory.jp/antarctic/',
          ogp: 'ogpFlagImages/antarctica.png',
          desc: [
            '縦横比率は【2:3】',
            '青い背景に、南極大陸の真っ白な地図を描いた国旗です。これにより中立性を象徴していますが、なぜかといえば国際連合の旗が同じ用に青い背景に白色を組み合わせたもののためです。',
            'なお南極には公式に認定された旗は存在しておらず、ここで紹介しているのは旗章学者のグラハム・バートラムが提案した旗です。',
          ],
        },
        {
          mainColor: [red, blue, yellow, white],
          fullColor: [red, blue, yellow, white],
          tag: [star, cross],
          area: worldArea.oceania,
          kokuren: '国連非加盟国',
          groupingCSS: 'not-kokuren',
          id: 'niue',
          url: 'niue',
          name: 'ニウエ',
          fullName: 'ニウエ',
          firstLetter: 'に',
          officialName: 'Niue',
          image: niue,
          location: niueMap,
          link: 'https://flaghistory.jp/niue/',
          ogp: 'ogpFlagImages/niue.png',
          desc: [
            '縦横比率は【1:2】',
            '黄色はニウエを照らす明るい太陽と、ニウエ国民がニュージーランドとその国民に抱く暖かい気持ちを表します',
            'カントン（左上）に描かれているイギリス国旗に星を加えてアレンジしています。',
          ],
        },
        {
          mainColor: [blue, white],
          fullColor: [green, blue, yellow, white, purple],
          tag: [],
          area: worldArea.ncAmerica,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'nicaragua',
          url: 'nicaragua',
          name: 'ニカラグア',
          fullName: 'ニカラグア共和国',
          firstLetter: 'に',
          officialName: 'Republic of Nicaragua',
          image: nicaragua,
          location: nicaraguaMap,
          link: 'https://flaghistory.jp/nicaragua/',
          ogp: 'ogpFlagImages/nicaragua.png',
          desc: [
            '縦横比率は【3:5】',
            '青はカリブ海と太平洋、白は二つの海に挟まれた国土を表します。また中央に描かれているのはニカラグアの国章です。',
            'ニカラグア国旗はドミニカ国と並び、珍しい紫色を使っています。（中央国章の一部に紫色が使われている）',
          ],
        },
        {
          mainColor: [green, white, orange],
          fullColor: [green, white, orange],
          tag: [sun],
          area: worldArea.africa,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'niger',
          url: 'niger',
          name: 'ニジェール',
          fullName: 'ニジェール共和国',
          firstLetter: 'に',
          officialName: 'Republic of Niger',
          image: niger,
          location: nigerMap,
          link: 'https://flaghistory.jp/niger/',
          ogp: 'ogpFlagImages/niger.png',
          desc: [
            '縦横比率は【6:7】',
            'オレンジは北部のサハラ砂漠、白は希望と純粋さ、緑はニジェール川に接する南西部の草地、中央のオレンジの円は太陽を表しています。',
            'オレンジ白緑の配色は隣接する国家のコートジボワールでも見られ、この国はどちらもフランスと関係性の深い国でした。そのためフランス国旗がモデルとして採用されていると言われます。',
          ],
        },
        {
          mainColor: [red, white],
          fullColor: [red, white],
          tag: [sun],
          area: worldArea.asia,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'japan',
          url: 'japan',
          name: '日本',
          fullName: '日本',
          firstLetter: 'に',
          officialName: 'Japan',
          image: japan,
          location: japanMap,
          link: 'https://flaghistory.jp/japan/',
          ogp: 'ogpFlagImages/japan.png',
          desc: [
            '縦横比率は【2:3】',
            '赤丸は太陽、白は純粋さや正直さ、赤は情熱や忠誠心を表しています。',
            '1999年以前は憲法によって厳密に国旗として定められていたわけではなく、1999年に国旗国歌法が制定され法的に国旗となりました。その際比率が【7:10】から【2:3】に変更され、赤丸の位置が中央に変更されます。（以前は1/100左にずれていた）',
          ],
        },
        {
          mainColor: [red, blue, white],
          fullColor: [red, blue, white],
          tag: [star, cross],
          area: worldArea.oceania,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'newZealand',
          url: 'newzealand',
          name: 'ニュージーランド',
          fullName: 'ニュージーランド',
          firstLetter: 'に',
          officialName: 'New Zealand',
          image: newZealand,
          location: newZealandMap,
          link: 'https://flaghistory.jp/newzealand/',
          ogp: 'ogpFlagImages/newZealand.png',
          desc: [
            '縦横比率は【1:2】',
            '4つの赤い星は南十字星、カントン（左上）のイギリス国旗はイギリス支配下にあった頃からの関係性を示します。',
            '2016年には国旗を変更する提案も上がりましたが、国民投票の結果現在の国旗を継続することとなりました。',
          ],
        },
        {
          mainColor: [red, blue, white],
          fullColor: [red, blue, white],
          tag: [sun, moon],
          area: worldArea.asia,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'nepal',
          url: 'nepal',
          name: 'ネパール',
          fullName: 'ネパール連邦民主共和国',
          firstLetter: 'ね',
          officialName: 'Federal Democratic Republic of Nepal',
          image: nepal,
          location: nepalMap,
          link: 'https://flaghistory.jp/nepal/',
          ogp: 'ogpFlagImages/nepal.png',
          desc: [
            '縦横比率は【11:9】',
            '青は平和と調和、赤は勇気、2つの三角形はヒマラヤ山脈、太陽と月は国家の長期間にわたる繁栄を表します。',
            'なお上部が月、下部が太陽です。過去の国旗ではこの月と太陽に顔が描かれていました。',
          ],
        },
        {
          mainColor: [red, blue, white],
          fullColor: [red, blue, white],
          tag: [cross, scCross],
          area: worldArea.eu,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'norway',
          url: 'norway',
          name: 'ノルウェー',
          fullName: 'ノルウェー王国',
          firstLetter: 'の',
          officialName: 'Kingdom of Norway',
          image: norway,
          location: norwayMap,
          link: 'https://flaghistory.jp/norway/',
          ogp: 'ogpFlagImages/norway.png',
          desc: [
            '縦横比率は【8:11】',
            '赤は国民の情熱、青は海と国土、白は雪を表します。',
            '交点が左によっている十字はスカンジナビア十字と呼ばれます。',
          ],
        },
        {
          mainColor: [red, white],
          fullColor: [red, white],
          tag: [red, white],
          area: worldArea.asia,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'bahrain',
          url: 'bahrain',
          name: 'バーレーン',
          fullName: 'バーレーン王国',
          firstLetter: 'は',
          officialName: 'Kingdom of Bahrain',
          image: bahrain,
          location: bahrainMap,
          link: 'https://flaghistory.jp/bahrain/',
          ogp: 'ogpFlagImages/bahrain.png',
          desc: [
            '縦横比率は【3:5】',
            '白は純粋さと気品、赤は自由、5つのジグザグはイスラムの5行に基づいたものです。',
            '世界で最も長い国旗であるカタールとデザインが似ています。',
          ],
        },
        {
          mainColor: [red, blue, white],
          fullColor: [red, green, blue, yellow, white, black],
          tag: [plant],
          area: worldArea.ncAmerica,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'haiti',
          url: 'haiti',
          name: 'ハイチ',
          fullName: 'ハイチ共和国',
          firstLetter: 'は',
          officialName: 'Republic of Haiti',
          image: haiti,
          location: haitiMap,
          link: 'https://flaghistory.jp/haiti/',
          ogp: 'ogpFlagImages/haiti.png',
          desc: [
            '縦横比率は【3:5】',
            '青は黒人、赤は白人と黒人の混血のムラートを表します。中央に描かれているのは国章です。',
            '過去オリンピックにてリヒテンシュタインと同じ旗を使ったことで関係者を困惑させました。',
          ],
        },
        {
          mainColor: [green, white],
          fullColor: [green, white],
          tag: [moon, star],
          area: worldArea.asia,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'pakistan',
          url: 'pakistan',
          name: 'パキスタン',
          fullName: 'パキスタン・イスラム共和国',
          firstLetter: 'は',
          officialName: 'Islamic Republic of Pakistan',
          image: pakistan,
          location: pakistanMap,
          link: 'https://flaghistory.jp/pakistan/',
          ogp: 'ogpFlagImages/pakistan.png',
          desc: [
            '縦横比率は【2:3】',
            '緑は国の繁栄、白は平和、三日月は進歩、星は光明と知識を表します。',
            '旗のデザイナーは『Amir-uddin Kedwaii』氏、ただしアルタフ・フサイン氏が旗の設計者であるという主張をメディアでは取り扱っているようです。',
          ],
        },
        {
          mainColor: [yellow, white],
          fullColor: [red, yellow, white],
          tag: [],
          area: worldArea.eu,
          kokuren: '国連非加盟国',
          groupingCSS: 'not-kokuren',
          id: 'vatican',
          url: 'vatican',
          name: 'バチカン',
          fullName: 'バチカン市国',
          firstLetter: 'は',
          officialName: 'Vatican City',
          image: vatican,
          location: vaticanMap,
          link: 'https://flaghistory.jp/vatican/',
          ogp: 'ogpFlagImages/vatican.png',
          desc: [
            '縦横比率は【1:1】',
            '右側に描かれている金銀の鍵はペテロの鍵と呼ばれるもので、イエスが弟子ペテロに言った言葉「あなたに天の国の鍵を授ける」に由来するものです。聖俗両面の支配権を象徴しており、その上の3段の法王冠は立法・司法・行政の三権力を表しています。',
            'flag of the Holy See（聖座の旗）とも呼ばれます。また縦横比率1:1（正方形）の国旗はバチカンとスイスだけです。',
          ],
        },
        {
          mainColor: [red, blue, white],
          fullColor: [red, blue, white],
          tag: [star],
          area: worldArea.ncAmerica,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'panama',
          url: 'panama',
          name: 'パナマ',
          fullName: 'パナマ共和国',
          firstLetter: 'は',
          officialName: 'Republic of Panama',
          image: panama,
          location: panamaMap,
          link: 'https://flaghistory.jp/panama/',
          ogp: 'ogpFlagImages/panama.png',
          desc: [
            '縦横比率は【2:3】',
            '赤は自由党、青は保守党、白は両党の協力と平和、青い星は国民の誠実さと純粋さ、赤い星は法律と権威を表します。',
            '1903年の11月に殆ど同じデザインの国旗が制定されており、わずか1ヶ月後に現在の国旗に修正されました。',
          ],
        },
        {
          mainColor: [red, green, yellow, black],
          fullColor: [red, green, yellow, black],
          tag: [],
          area: worldArea.oceania,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'vanuatu',
          url: 'vanuatu',
          name: 'バヌアツ',
          fullName: 'バヌアツ共和国',
          firstLetter: 'は',
          officialName: 'Republic of Vanuatu',
          image: vanuatu,
          location: vanuatuMap,
          link: 'https://flaghistory.jp/vanuatu/',
          ogp: 'ogpFlagImages/vanuatu.png',
          desc: [
            '縦横比率は【3:5】',
            '黒は国民のメラネシア人、黄色は太陽とキリスト教、赤は豚と人間の血、緑は国土の豊かさを表します。',
            '左部に描かれているのは豚の牙とシダ、豚の牙は宗教上の飾りで力と富、シダは39の刻みがあり議員数を示します。またY字は国の形を表しています。',
          ],
        },
        {
          mainColor: [blue, yellow, black],
          fullColor: [blue, yellow, black],
          tag: [],
          area: worldArea.ncAmerica,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'bahamas',
          url: 'bahamas',
          name: 'バハマ',
          fullName: 'バハマ国',
          firstLetter: 'は',
          officialName: 'Commonwealth of The Bahamas',
          image: bahamas,
          location: bahamasMap,
          link: 'https://flaghistory.jp/bahamas/',
          ogp: 'ogpFlagImages/bahamas.png',
          desc: [
            '縦横比率は【1:2】',
            '黒は国民の活力と団結、青はカリブ海、黄色は2つの海に囲まれたバハマの美しい砂浜を表します。',
            'また三角形は豊かな天然資源を開発する国民の決意を表しています。',
          ],
        },
        {
          mainColor: [red, yellow, white, black],
          fullColor: [red, yellow, white, black],
          tag: [star, creature],
          area: worldArea.oceania,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'papuaNewGuinea',
          url: 'papua',
          name: 'パプアニューギニア',
          fullName: 'パプアニューギニア独立国',
          firstLetter: 'は',
          officialName: 'Independent State of Papua New Guinea',
          image: papuaNewGuinea,
          location: papuaNewGuineaMap,
          link: 'https://flaghistory.jp/papua/',
          ogp: 'ogpFlagImages/papuaNewGuinea.png',
          desc: [
            '縦横比率は【3:4】',
            '黄色い鳥はゴクラクチョウで自由や統合、飛躍を表し、南十字星は南半球に位置することとオーストラリアとの関係を示します。',
            'ちなみにオーストラリア国旗に描かれている南十字星は5つで、ニュージーランド国旗に描かれている南十字星は4つとなっています。',
          ],
        },
        {
          mainColor: [blue, yellow],
          fullColor: [blue, yellow],
          tag: [moon],
          area: worldArea.oceania,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'palau',
          url: 'palau',
          name: 'パラオ',
          fullName: 'パラオ共和国',
          firstLetter: 'は',
          officialName: 'Republic of Palau',
          image: palau,
          location: palauMap,
          link: 'https://flaghistory.jp/palau/',
          ogp: 'ogpFlagImages/palau.png',
          desc: [
            '縦横比率は【5:8】',
            '黄色い満月は主権と統一、青は太平洋と独立を表しています。',
            '黄色い円が左によっているのは掲揚した際見栄えが良くなるという理由からです。',
          ],
        },
        {
          mainColor: [red, blue, white],
          fullColor: [red, green, blue, yellow, white, black],
          tag: [star, plant],
          area: worldArea.sAmerica,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'paraguay',
          url: 'paraguay',
          name: 'パラグアイ',
          fullName: 'パラグアイ共和国',
          firstLetter: 'は',
          officialName: 'Republic of Paraguay',
          image: paraguay,
          location: paraguayMap,
          link: 'https://flaghistory.jp/paraguay/',
          ogp: 'ogpFlagImages/paraguay.png',
          desc: [
            '縦横比率は【3:5】',
            '赤は祖国愛、白は団結と平和、青は自由と寛大さを表します。',
            '中央に描かれているのは国章ですが、裏面は国庫印章に変わります。このため表と裏でデザインの違う、非常に珍しい国旗になっています。',
          ],
        },
        {
          mainColor: [blue, yellow, black],
          fullColor: [blue, yellow, black],
          tag: [],
          area: worldArea.ncAmerica,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'barbados',
          url: 'barbados',
          name: 'バルバドス',
          fullName: 'バルバドス',
          firstLetter: 'は',
          officialName: 'Barbados',
          image: barbados,
          location: barbadosMap,
          link: 'https://flaghistory.jp/barbados/',
          ogp: 'ogpFlagImages/barbados.png',
          desc: [
            '縦横比率は【2:3】',
            '青は空と海、黄色は砂浜、中央の鉾は民主主義の三原理を表します。',
            '鉾の柄がないことにも理由があり、これは植民地からの決別を表すためのデザインです。',
          ],
        },
        {
          mainColor: [red, green, white, black],
          fullColor: [red, green, white, black],
          tag: [],
          area: worldArea.asia,
          kokuren: '国連非加盟国',
          groupingCSS: 'not-kokuren',
          id: 'palestine',
          url: 'palestine',
          name: 'パレスチナ',
          fullName: 'パレスチナ国',
          firstLetter: 'は',
          officialName: 'State of Palestine',
          image: palestine,
          location: palestineMap,
          link: 'https://flaghistory.jp/palestine/',
          ogp: 'ogpFlagImages/palestine.png',
          desc: [
            '縦横比率は【1:2】',
            '赤は勇気、黒は暗い過去、白は純潔、緑はイスラム教を表しています。',
            'ヨルダン国旗と非常によく似ています。また赤緑白黒の組み合わせは汎アラブ色と呼ばれるものです。',
          ],
        },
        {
          mainColor: [red, green, white],
          fullColor: [red, green, white],
          tag: [],
          area: worldArea.eu,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'hungary',
          url: 'hungary',
          name: 'ハンガリー',
          fullName: 'ハンガリー',
          firstLetter: 'は',
          officialName: 'Hungary',
          image: hungary,
          location: hungaryMap,
          link: 'https://flaghistory.jp/hungary/',
          ogp: 'ogpFlagImages/hungary.png',
          desc: [
            '縦横比率は【1:2】',
            '赤は強さ、白は忠誠心、緑は希望を表します。',
            'ハンガリーにおいて赤白緑の横三色旗が初めて使われたのは1848年のオーストリアから独立を目指した際の革命旗です。',
          ],
        },
        {
          mainColor: [red, green],
          fullColor: [red, green],
          tag: [sun],
          area: worldArea.asia,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'bangladesh',
          url: 'bangladesh',
          name: 'バングラデシュ',
          fullName: 'バングラデシュ人民共和国',
          firstLetter: 'は',
          officialName: 'People\'s Republic of Bangladesh',
          image: bangladesh,
          location: bangladeshMap,
          link: 'https://flaghistory.jp/bangladesh/',
          ogp: 'ogpFlagImages/bangladesh.png',
          desc: [
            '縦横比率は【3:5】',
            '緑は国の若さと活力、赤い円はパキスタン支配時代に終止符を打つこと、また独立日の夜明けに昇った太陽を表します。',
            '円が若干左によっているのは掲揚した際見栄えが良くなるためです。',
          ],
        },
        {
          mainColor: [red, yellow, white, black],
          fullColor: [red, yellow, white, black],
          tag: [star],
          area: worldArea.asia,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'eastTimor',
          url: 'timor',
          name: '東ティモール',
          fullName: '東ティモール民主共和国',
          firstLetter: 'ひ',
          officialName: 'The Democratic Republic of Timor-Leste',
          image: eastTimor,
          location: eastTimorMap,
          link: 'https://flaghistory.jp/timor/',
          ogp: 'ogpFlagImages/eastTimor.png',
          desc: [
            '縦横比率は【1:2】',
            '黒い三角形は克服すべき困難、黄色は植民地時代の痕跡、赤は独立戦争、星は平和を表します。',
            '現地の言葉のテトゥン語だと、この国はティモールロロサエ（昇る太陽のティモール）と呼ばれます。',
          ],
        },
        {
          mainColor: [red, blue, white],
          fullColor: [red, green, blue, yellow, white, black],
          tag: [cross, creature, plant],
          area: worldArea.oceania,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'fiji',
          url: 'fiji',
          name: 'フィジー',
          fullName: 'フィジー共和国',
          firstLetter: 'ふ',
          officialName: 'Republic of Fiji',
          image: fiji,
          location: fijiMap,
          link: 'https://flaghistory.jp/fiji/',
          ogp: 'ogpFlagImages/fiji.png',
          desc: [
            '縦横比率は【1:2】',
            'フライ（右側）に国章を配置し、イギリスとの関係性を示すイギリス国旗をカントン（左上）に描いた国旗です。',
            'ロビ・ウィルコック氏とマレー・マッケンジー夫人が国旗のデザイナー、二人は別々にデザインを作りましたが、偶然どちらも同じデザインを作っており、国旗のコンテストは二人の共同優勝という形になりました。',
          ],
        },
        {
          mainColor: [red, blue, yellow, white],
          fullColor: [red, blue, yellow, white],
          tag: [sun, star],
          area: worldArea.asia,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'philippines',
          url: 'philippines',
          name: 'フィリピン',
          fullName: 'フィリピン共和国',
          firstLetter: 'ふ',
          officialName: 'Republic of the Philippines',
          image: philippines,
          location: philippinesMap,
          link: 'https://flaghistory.jp/philippines/',
          ogp: 'ogpFlagImages/philippines.png',
          desc: [
            '縦横比率は【1:2】',
            '青は平和と正義、赤は勇気、白は平等、白い三角形は自由の象徴です。太陽から出る8つの光は1898年にスペインに反乱を起こした8州、3つの黄色い星は主要3島を表します。',
            '戦争時になると上下を逆にして、勇気を示す赤色を上にします。',
          ],
        },
        {
          mainColor: [blue, white],
          fullColor: [blue, white],
          tag: [cross, scCross],
          area: worldArea.eu,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'finland',
          url: 'finland',
          name: 'フィンランド',
          fullName: 'フィンランド共和国',
          firstLetter: 'ふ',
          officialName: 'Republic of Finlnad',
          image: finland,
          location: finlandMap,
          link: 'https://flaghistory.jp/finland/',
          ogp: 'ogpFlagImages/finland.png',
          desc: [
            '縦横比率は【11:18】',
            '白は雪、青は湖を表します。',
            '交点が左にずれているスカンジナビア十字と呼ばれるモノを描いた国旗、発案者は19世紀の詩人ザクリス・トペリウス。',
          ],
        },
        {
          mainColor: [yellow, white, orange],
          fullColor: [yellow, white, black, orange],
          tag: [creature],
          area: worldArea.asia,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'bhutan',
          url: 'bhutan',
          name: 'ブータン',
          fullName: 'ブータン王国',
          firstLetter: 'ふ',
          officialName: 'Kingdom of Bhutan',
          image: bhutan,
          location: bhutanMap,
          link: 'https://flaghistory.jp/bhutan/',
          ogp: 'ogpFlagImages/bhutan.png',
          desc: [
            '縦横比率は【2:3】',
            '黄色は国王の指導力、オレンジは仏教、白は純粋さと忠誠心を表します。',
            'ブータンという国名は『雷龍の国』を意味しており、そのため龍が描かれています。龍が掴んでいる玉は国の富と成熟を示します。',
          ],
        },
        {
          mainColor: [green, blue, yellow, white],
          fullColor: [green, blue, yellow, white],
          tag: [star],
          area: worldArea.sAmerica,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'brazil',
          url: 'brazil',
          name: 'ブラジル',
          fullName: 'ブラジル連邦共和国',
          firstLetter: 'ふ',
          officialName: 'Federative Republic of Brazil',
          image: brazil,
          location: brazilMap,
          link: 'https://flaghistory.jp/brazil/',
          ogp: 'ogpFlagImages/brazil.png',
          desc: [
            '縦横比率は【7:10】',
            '緑は森林、黄色は鉱物資源、青い天球にはブラジルの州と連邦直轄地を示す27個の星が描かれています。',
            '天球は共和制樹立日である1889年11月15日の朝8時30分のリオデジャネイロの空を外側から見た様子を描いたものです。',
          ],
        },
        {
          mainColor: [red, blue, white],
          fullColor: [red, blue, white],
          tag: [],
          area: worldArea.eu,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'france',
          url: 'france',
          name: 'フランス',
          fullName: 'フランス共和国',
          firstLetter: 'ふ',
          officialName: 'French Republic',
          image: france,
          location: franceMap,
          link: 'https://flaghistory.jp/france/',
          ogp: 'ogpFlagImages/france.png',
          desc: [
            '縦横比率は【2:3】',
            '白はブルボン王家の色、青と赤はパリ市の色。また青は自由、白は平等、赤は博愛を表すというのが通説です。',
            '1814年に制定された国旗は白一色のものでした。',
          ],
        },
        {
          mainColor: [red, green, white],
          fullColor: [red, green, white],
          tag: [],
          area: worldArea.eu,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'bulgaria',
          url: 'bulgaria',
          name: 'ブルガリア',
          fullName: 'ブルガリア共和国',
          firstLetter: 'ふ',
          officialName: 'Republic of Bulgaria',
          image: bulgaria,
          location: bulgariaMap,
          link: 'https://flaghistory.jp/bulgaria/',
          ogp: 'ogpFlagImages/bulgaria.png',
          desc: [
            '縦横比率は【3:5】',
            '白は平等と自由、緑は農業と森林、赤は軍隊の勇気と闘争を表します。',
            'ロシア国旗の白青赤の青を緑に替えた国旗です。',
          ],
        },
        {
          mainColor: [red, green, yellow],
          fullColor: [red, green, yellow],
          tag: [star],
          area: worldArea.africa,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'brukinaFaso',
          url: 'burkinafaso',
          name: 'ブルキナファソ',
          fullName: 'ブルキナファソ',
          firstLetter: 'ふ',
          officialName: 'Burkina Faso',
          image: burkinaFaso,
          location: burkinaFasoMap,
          link: 'https://flaghistory.jp/burkinafaso/',
          ogp: 'ogpFlagImages/burkinaFaso.png',
          desc: [
            '縦横比率は【2:3】',
            '赤は革命、緑は農業と豊かな天然資源、黄色は国の富、星は革命を導く光を表します。',
            '汎アフリカ色（赤黄緑）を用いた国旗の一つ。',
          ],
        },
        {
          mainColor: [red, yellow, white, black],
          fullColor: [red, yellow, white, black],
          tag: [moon],
          area: worldArea.asia,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'brunei',
          url: 'brunei',
          name: 'ブルネイ',
          fullName: 'ブルネイ・ダルサラーム国',
          firstLetter: 'ふ',
          officialName: 'Brunei Darussalam',
          image: brunei,
          location: bruneiMap,
          link: 'https://flaghistory.jp/brunei/',
          ogp: 'ogpFlagImages/brunei.png',
          desc: [
            '縦横比率は【1:2】',
            '黄色は国王、白は総理大臣、黒はその他の大臣を表します。また中央に描かれているのは国章です。',
            '国章にはジャウイ文字マレー語で「常に神の道武器に従え」という標語が書かれています。',
          ],
        },
        {
          mainColor: [red, green, white],
          fullColor: [red, green, white],
          tag: [star, cross],
          area: worldArea.africa,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'burundi',
          url: 'burundi',
          name: 'ブルンジ',
          fullName: 'ブルンジ共和国',
          firstLetter: 'ふ',
          officialName: 'Republic of Burundi',
          image: burundi,
          location: burundiMap,
          link: 'https://flaghistory.jp/burundi/',
          ogp: 'ogpFlagImages/burundi.png',
          desc: [
            '縦横比率は【3:5】',
            '赤は独立闘争、緑は希望、白は平和を表します。',
            '3つの星は主要民族であるフツ族・ツチ族・トゥワ族と国の標語である統一・労働・進歩を示しています。',
          ],
        },
        {
          mainColor: [red, yellow],
          fullColor: [red, yellow],
          tag: [star],
          area: worldArea.asia,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'vietnam',
          url: 'vietnam',
          name: 'ベトナム',
          fullName: 'ベトナム社会主義共和国',
          firstLetter: 'へ',
          officialName: 'Socialist Republic of Viet Nam',
          image: vietnam,
          location: vietnamMap,
          link: 'https://flaghistory.jp/vietnam/',
          ogp: 'ogpFlagImages/vietnam.png',
          desc: [
            '縦横比率は【2:3】',
            '赤は独立闘争で流れた血、黄色は革命を表します。',
            '星は労働者・農民・兵士・知識人・商人を示しています。',
          ],
        },
        {
          mainColor: [red, green, yellow],
          fullColor: [red, green, yellow],
          tag: [],
          area: worldArea.africa,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'benin',
          url: 'benin',
          name: 'ベナン',
          fullName: 'ベナン共和国',
          firstLetter: 'へ',
          officialName: 'Republic of Benin',
          image: benin,
          location: beninMap,
          link: 'https://flaghistory.jp/benin/',
          ogp: 'ogpFlagImages/benin.png',
          desc: [
            '縦横比率は【2:3】',
            '緑は希望と再生、黄色は国の富、赤は祖先の勇気を表します。',
            '汎アフリカ色（赤黄緑）が用いられている国旗の一つ。',
          ],
        },
        {
          mainColor: [red, blue, yellow, white],
          fullColor: [red, blue, yellow, white],
          tag: [star],
          area: worldArea.sAmerica,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'venezuela',
          url: 'venezuela',
          name: 'ベネズエラ',
          fullName: 'ベネズエラ・ボリバル共和国',
          firstLetter: 'へ',
          officialName: 'Bolivarian Republic of Venezuela',
          image: venezuela,
          location: venezuelaMap,
          link: 'https://flaghistory.jp/venezuela/',
          ogp: 'ogpFlagImages/venezuela.png',
          desc: [
            '縦横比率は【2:3】',
            '黄色は国の豊かさ、青は勇気とベネズエラとスペインを隔てる海、赤は独立戦争で流された血を表します。',
            '元となったのはフランシスコ・デ・ミランダが考案したベネズエラ独立運動旗。',
          ],
        },
        {
          mainColor: [red, green, white],
          fullColor: [red, green, white],
          tag: [],
          area: worldArea.eu,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'belarus',
          url: 'belarus',
          name: 'ベラルーシ',
          fullName: 'ベラルーシ共和国',
          firstLetter: 'へ',
          officialName: 'Republic of Belarus',
          image: belarus,
          location: belarusMap,
          link: 'https://flaghistory.jp/belarus/',
          ogp: 'ogpFlagImages/belarus.png',
          desc: [
            '縦横比率は【1:2】',
            '赤は過去の戦い、緑は希望と森林を表します。',
            'ホイスト（左側）に描かれている模様は、ベラルーシの民族衣装に使われる伝統的な模様です。',
          ],
        },
        {
          mainColor: [red, blue, white],
          fullColor: [red, green, blue, yellow, white, black],
          tag: [creature, plant],
          area: worldArea.ncAmerica,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'belize',
          url: 'belize',
          name: 'ベリーズ',
          fullName: 'ベリーズ',
          firstLetter: 'へ',
          officialName: 'Belize',
          image: belize,
          location: belizeMap,
          link: 'https://flaghistory.jp/belize/',
          ogp: 'ogpFlagImages/belize.png',
          desc: [
            '縦横比率は【2:3】',
            '青は人民連合党、赤は民主連合党の党旗の色から取られています。また青は隣国との友好、赤は独立を守る決意を意味しています。',
            '中央に描かれているのは国章で、黒人と黒人と白人の混血であるメスティーソが描かれています。人を描いている国旗はベリーズだけです。（人体の一部であればブルネイ国旗に手が、ウルグアイ・アルゼンチンの国旗には顔がある）',
          ],
        },
        {
          mainColor: [red, white],
          fullColor: [red, green, blue, yellow, white],
          tag: [creature, plant],
          area: worldArea.sAmerica,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'peru',
          url: 'peru',
          name: 'ペルー',
          fullName: 'ペルー共和国',
          firstLetter: 'へ',
          officialName: 'Republic of Peru',
          image: peru,
          location: peruMap,
          link: 'https://flaghistory.jp/peru/',
          ogp: 'ogpFlagImages/peru.png',
          desc: [
            '縦横比率は【2:3】',
            '赤は勇気と愛国心、白は平和を表します。中央に描かれているのは国章です。',
            'ここで紹介しているのは政府旗（国家が掲揚する旗）で、市民旗の場合は中央の国章がなくなります。私が知る限り、FOTWを始めとする海外のウェブサイトでは国章がないものを国旗として紹介していることが多いようです。',
          ],
        },
        {
          mainColor: [red, yellow, black],
          fullColor: [red, yellow, black],
          tag: [],
          area: worldArea.eu,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'belgium',
          url: 'belgium',
          name: 'ベルギー',
          fullName: 'ベルギー王国',
          firstLetter: 'へ',
          officialName: 'Kingdom of Belgium',
          image: belgium,
          location: belgiumMap,
          link: 'https://flaghistory.jp/belgium/',
          ogp: 'ogpFlagImages/belgium.png',
          desc: [
            '縦横比率は【13:15】',
            '黒は力、黄色は充実、赤は勝利を表します。',
            '隣国のドイツ国旗と似た配色をしていますが、由来となっているものはそれぞれ別のものであるため、偶然の一致と言えます。',
          ],
        },
        {
          mainColor: [red, white],
          fullColor: [red, white],
          tag: [],
          area: worldArea.eu,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'poland',
          url: 'poland',
          name: 'ポーランド',
          fullName: 'ポーランド共和国',
          firstLetter: 'ほ',
          officialName: 'Republic of Poland',
          image: poland,
          location: polandMap,
          link: 'https://flaghistory.jp/poland/',
          ogp: 'ogpFlagImages/poland.png',
          desc: [
            '縦横比率は【5:8】',
            '白は喜び、赤は独立のために流された血を表します。',
            'ポーランドを建国したレヒが見た夢「赤い夕日を背景に白い鷲が飛んでいるのを見たらそこに都を築け」という伝説を元に作られた国旗です。そのため赤は夕日、白は白い鷲から来ていると言えます。',
          ],
        },
        {
          mainColor: [blue, yellow, white],
          fullColor: [blue, yellow, white],
          tag: [star],
          area: worldArea.eu,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'bosniaHerzegovina',
          url: 'bosnia',
          name: 'ボスニア・ヘルツェゴビナ',
          fullName: 'ボスニア・ヘルツェゴビナ',
          firstLetter: 'ほ',
          officialName: 'Bosnia and Herzegovina',
          image: bosniaHerzegovina,
          location: bosniaHerzegovinaMap,
          link: 'https://flaghistory.jp/bosnia/',
          ogp: 'ogpFlagImages/bosniaHerzegovina.png',
          desc: [
            '縦横比率は【1:2】',
            '三角形は国土と3民族の融和・共存を意味し、黄色は希望を表しています。',
            'ヨーロッパでは珍しい、国旗に星を組み込んだデザイン。（星はイスラム教徒の関連性があるため、ヨーロッパでは避けられる傾向にあった）',
          ],
        },
        {
          mainColor: [blue, white, black],
          fullColor: [blue, white, black],
          tag: [],
          area: worldArea.africa,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'botswana',
          url: 'botswana',
          name: 'ボツワナ',
          fullName: 'ボツワナ共和国',
          firstLetter: 'ほ',
          officialName: 'Republic of Botswana',
          image: botswana,
          location: botswanaMap,
          link: 'https://flaghistory.jp/botswana/',
          ogp: 'ogpFlagImages/botswana.png',
          desc: [
            '縦横比率は【2:3】',
            '青は水と雨、黒と白は人種の融合を表します。',
            'また青は国のモットーである「雨よ降れ（Pula）」という意味もあります。（ボツワナは水の少ない国）',
          ],
        },
        {
          mainColor: [red, green, yellow],
          fullColor: [red, green, blue, yellow, white, black],
          tag: [creature, sun, plant],
          area: worldArea.sAmerica,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'blivia',
          url: 'bolivia',
          name: 'ボリビア',
          fullName: 'ボリビア多民族国',
          firstLetter: 'ほ',
          officialName: 'Plurinational State of Bolivia',
          image: bolivia,
          location: boliviaMap,
          link: 'https://flaghistory.jp/bolivia/',
          ogp: 'ogpFlagImages/bolivia.png',
          desc: [
            '縦横比率は【2:3】',
            '赤は勇気と独立闘争で流れた血、黄色は国の資源、緑は肥沃な国土を表します。中央に描かれているのは国章です。',
            '国章を除けば汎アフリカ色（赤黄緑）を使った国旗ですが、特に汎アフリカ色とは関係性のない国旗です。そのため汎アフリカ色を使っているとは言いません。',
          ],
        },
        {
          mainColor: [red, blue, yellow, white],
          fullColor: [red, green, blue, yellow, white, black],
          tag: [],
          area: worldArea.eu,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'portugal',
          url: 'portugal',
          name: 'ポルトガル',
          fullName: 'ポルトガル共和国',
          firstLetter: 'ほ',
          officialName: 'Portuguese Republic',
          image: portugal,
          location: portugalMap,
          link: 'https://flaghistory.jp/portugal/',
          ogp: 'ogpFlagImages/portugal.png',
          desc: [
            '縦横比率は【2:3】',
            '緑は未来への希望、赤は大海原に乗り出した勇気あるポルトガル英雄の血を表します。赤と緑の境界線に描かれているのはポルトガルの国章です。',
            '王国時代は青や白を使っていたのに対し、共和国となった1911年より緑と赤が使われるようになりました。これは緑と赤が愛国的な色であると共和党によって広まったためと言われます。',
          ],
        },
        {
          mainColor: [blue, white],
          fullColor: [blue, white],
          tag: [star],
          area: worldArea.ncAmerica,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'honduras',
          url: 'honduras',
          name: 'ホンジュラス',
          fullName: 'ホンジュラス共和国',
          firstLetter: 'ほ',
          officialName: 'Republic of Honduras',
          image: honduras,
          location: hondurasMap,
          link: 'https://flaghistory.jp/honduras/',
          ogp: 'ogpFlagImages/honduras.png',
          desc: [
            '縦横比率は【1:2】',
            '青はカリブ海と太平洋、白は平和と繁栄、中央5つの星はアメリカ連邦構成5カ国を表しています。',
            'また5つの星はそれぞれ、中央がホンジュラス、左上がグアテマラ、左下がエルサルバドル、右上がニカラグア、右下がコスタリカを示しており、またこれらの再統一への願いが込められています。',
          ],
        },
        {
          mainColor: [blue, white, orange],
          fullColor: [blue, white, orange],
          tag: [star],
          area: worldArea.oceania,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'marshallIslands',
          url: 'marshall',
          name: 'マーシャル諸島',
          fullName: 'マーシャル諸島共和国',
          firstLetter: 'ま',
          officialName: 'Republic of the Marshall Islands',
          image: marshallIslands,
          location: marshallIslandsMap,
          link: 'https://flaghistory.jp/marshall/',
          ogp: 'ogpFlagImages/marshallIslands.png',
          desc: [
            '縦横比率は【10:19】',
            '青は太平洋、白は平和、オレンジ色は勇気を表しています。これら星や2本の帯にも細かく意味が込められています。',
            '国旗は当時の大統領の妻であるEmlain Kabuaによってデザインされたものです。',
          ],
        },
        {
          mainColor: [red, green, white],
          fullColor: [red, green, white],
          tag: [],
          area: worldArea.africa,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'madagascar',
          url: 'madagascar',
          name: 'マダガスカル',
          fullName: 'マダガスカル共和国',
          firstLetter: 'ま',
          officialName: 'Republic of Madagascar',
          image: madagascar,
          location: madagascarMap,
          link: 'https://flaghistory.jp/madagascar/',
          ogp: 'ogpFlagImages/madagascar.png',
          desc: [
            '縦横比率は【2:3】',
            '白は純粋さ、赤は主権、緑は希望を表します。',
            '白と赤はメリナ王国（かつてマダガスカルの地域にあった国）の国旗の色から、緑は海岸地方に暮らすホヴァ市民を表す色として組み合わせられ出来た国旗です。',
          ],
        },
        {
          mainColor: [red, green, black],
          fullColor: [red, green, black],
          tag: [sun],
          area: worldArea.africa,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'malawi',
          url: 'malawi',
          name: 'マラウイ',
          fullName: 'マラウイ共和国',
          firstLetter: 'ま',
          officialName: 'Republic of Malawi',
          image: malawi,
          location: malawiMap,
          link: 'https://flaghistory.jp/malawi/',
          ogp: 'ogpFlagImages/malawi.png',
          desc: [
            '縦横比率は【2:3】',
            '赤は独立のために流された血、黒はアフリカ人、緑は国土の風景を意味しています。また上部にはアフリカの自由と希望の夜明けを意味する、赤い太陽が描かれています。',
            '2010~2012にかけては中央に白い太陽が描かれ、独立後の国の発展という意味が込められていました。',
          ],
        },
        {
          mainColor: [red, green, yellow],
          fullColor: [red, green, yellow],
          tag: [],
          area: worldArea.africa,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'mali',
          url: 'mali',
          name: 'マリ',
          fullName: 'マリ共和国',
          firstLetter: 'ま',
          officialName: 'Republic of Mali',
          image: mali,
          location: maliMap,
          link: 'https://flaghistory.jp/mali/',
          ogp: 'ogpFlagImages/mali.png',
          desc: [
            '縦横比率は【2:3】',
            '緑は肥沃な土地、黄色は鉱物資源、赤は独立戦争で流された血。',
            '過去マリ連邦で使われていた国旗にはカナガと呼ばれる人像が描かれています。これが棒人間のようでユニークと言われます。',
          ],
        },
        {
          mainColor: [red, white],
          fullColor: [red, white, black],
          tag: [cross],
          area: worldArea.eu,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'malta',
          url: 'malta',
          name: 'マルタ',
          fullName: 'マルタ共和国',
          firstLetter: 'ま',
          officialName: 'Republic of Malta',
          image: malta,
          location: maltaMap,
          link: 'https://flaghistory.jp/malta/',
          ogp:'ogpFlagImages/malta.png',
          desc: [
            '縦横比率は【2:3】',
            '白は信仰心、赤は国民の純粋さを表します。',
            'カントン（左上）に描かれているのは聖ジョージ勲章で、第二次世界大戦でマルタ国民がドイツと勇敢に戦った栄誉をたたえ、1942年にイギリス国王ジョージ6世から授かったものです。',
          ],
        },
        {
          mainColor: [red, blue, yellow, white],
          fullColor: [red, blue, yellow, white],
          tag: [moon, star],
          area: worldArea.asia,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'malaysia',
          url: 'malaysia',
          name: 'マレーシア',
          fullName: 'マレーシア',
          firstLetter: 'ま',
          officialName: 'Malaysia',
          image: malaysia,
          location: malaysiaMap,
          link: 'https://flaghistory.jp/malaysia/',
          ogp: 'ogpFlagImages/malaysia.png',
          desc: [
            '縦横比率は【1:2】',
            '黄色はスルタン（イスラム教国の君主）、赤白青の3色はイギリスを表します。また星と縞は14と関係があり、これはマレーシアを構成する14州を示しています。',
            'なお当時14州の中にはシンガポールが含まれていましたが、独立に伴い13州と首都クアラルンプールを表すと変更されました。',
          ],
        },
        {
          mainColor: [red, yellow, white],
          fullColor: [red, yellow, white, black],
          tag: [star],
          area: worldArea.eu,
          kokuren: '海外領土・自治領',
          groupingCSS: 'other',
          id: 'mann',
          url: 'mann',
          name: 'マン島',
          fullName: 'マン島',
          firstLetter: 'ま',
          officialName: 'Isle of Mann',
          image: mann,
          location: mannMap,
          link: 'https://flaghistory.jp/man/',
          ogp: 'ogpFlagImages/mann.png',
          desc: [
            '縦横比率は【1:2】',
            '中央に三脚巴紋、もしくはトリスケリオンと呼ばれる紋章があしらわれています。このマン島の旗はマグヌス3世（1252 - 1265）の紋章に基づくと言われています。',
            'またシチリア島にも似たデザインの紋章が描かれており、トリナクリアと呼ばれるそれとの関連性があるのではと考えられています。（トリナクリア（三角という意味）はイタリア南部に位置するシチリア島が三角形であることを示している）',
          ],
        },
        {
          mainColor: [blue, white],
          fullColor: [blue, white],
          tag: [star],
          area: worldArea.oceania,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'micronesia',
          url: 'micronesia',
          name: 'ミクロネシア',
          fullName: 'ミクロネシア連邦',
          firstLetter: 'み',
          officialName: 'Federated States of Micronesia',
          image: micronesia,
          location: micronesiaMap,
          link: 'https://flaghistory.jp/micronesia/',
          ogp: 'ogpFlagImages/micronesia.png',
          desc: [
            '縦横比率は【10:19】',
            '青は太平洋と自由、白は平和を表します。また4つの星は連邦を構成する4州と、4つの星を結ぶことで十字替えが変えることから、これによって南十字星とキリスト教を表しています。',
            'なお4州はヤップ、ポンペイ、チューク、コスラエのことです。',
          ],
        },
        {
          mainColor: [red, green, blue, yellow, white, black],
          fullColor: [red, green, blue, yellow, white, black],
          tag: [],
          area: worldArea.africa,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'soutuAfrica',
          url: 'south-africa',
          name: '南アフリカ',
          fullName: '南アフリカ共和国',
          firstLetter: 'み',
          officialName: 'Republic of South Africa',
          image: southAfrica,
          location: southAfricaMap,
          link: 'https://flaghistory.jp/south-africa/',
          ogp: 'ogpFlagImages/southAfrica.png',
          desc: [
            '縦横比率は【2;3】',
            '色自体の意味はありませんが、Y字のレイアウトには多様なアフリカ社会の統一と過去及び現在の勢力を結集させることで国家を前進させることという意味があります。',
            'これらの色が採用された背景にはアフリカ人民族会議で使われた党旗や、イギリスオランダの影響を反映した結果青白赤緑が採用された、ということなどが言われています。',
          ],
        },
        {
          mainColor: [red, yellow, white],
          fullColor: [red, yellow, white],
          tag: [],
          area: worldArea.asia,
          kokuren: '国連非加盟国',
          groupingCSS: 'not-kokuren',
          id: 'sssetia',
          url: 'south-ossetia',
          name: '南オセチア',
          fullName: '南オセチア共和国',
          firstLetter: 'み',
          officialName: 'Republic of South Ossetia',
          image: sssetia,
          location: sssetiaMap,
          link: 'https://flaghistory.jp/sssetia/',
          ogp: 'ogpFlagImages/sssetia.png',
          desc: [
            '縦横比率【1:2】',
            '白は知恵と知的生活・道徳と清潔さを、赤は軍人の勇気を、黄色は人々の幸せと富・繁栄を表しています。',
            '北オセチア共和国も存在しており、そこで使われている国旗はほぼ同一デザインです。（色が少しだけ異なります。）',
          ],
        },
        {
          mainColor: [red, green, blue, yellow, white, black],
          fullColor: [red, green, blue, yellow, white, black],
          tag: [star],
          area: worldArea.africa,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'southSudan',
          url: 'south-sudan',
          name: '南スーダン',
          fullName: '南スーダン共和国',
          firstLetter: 'み',
          officialName: 'The Republic of South Sudan',
          image: southSudan,
          location: southSudanMap,
          link: 'https://flaghistory.jp/south-sudan/',
          ogp: 'ogpFlagImages/southSudan.png',
          desc: [
            '縦横比率は【1:2】',
            '黒は国民、赤は自由のために流された血、白は独立闘争で勝ち取った自由、緑は国土、青はナイル川、黄色は国家と国民を導く星を表します。',
            '主要なデザイン（国章などを除いて）に6色を使っている国旗は南スーダンと南アフリカだけです。',
          ],
        },
        {
          mainColor: [red, green, yellow, white],
          fullColor: [red, green, yellow, white],
          tag: [star],
          area: worldArea.asia,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'myanmar',
          url: 'myanmar',
          name: 'ミャンマー',
          fullName: 'ミャンマー連邦共和国',
          firstLetter: 'み',
          officialName: 'Republic of the Union of Myanmar',
          image: myanmar,
          location: myanmarMap,
          link: 'https://flaghistory.jp/myanmar/',
          ogp: 'ogpFlagImages/myanmar.png',
          desc: [
            '縦横比率は【2:3】',
            '黄色は団結、緑は平和お茶すら傘、赤は勇気と決意、白い星は永続する連邦を表します。',
            '2010年に国旗が変更したため、年齢によっては学習した国旗が別のデザインであるがあるかもしれません。',
          ],
        },
        {
          mainColor: [red, green, white],
          fullColor: [red, green, blue, white],
          tag: [creature, plant],
          area: worldArea.ncAmerica,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'mexico',
          url: 'mexico',
          name: 'メキシコ',
          fullName: 'メキシコ合衆国',
          firstLetter: 'め',
          officialName: 'United Mexican States',
          image: mexico,
          location: mexicoMap,
          link: 'https://flaghistory.jp/mexico/',
          ogp: 'ogpFlagImages/mexico.png',
          desc: [
            '縦横比率は【4:7】',
            '緑は国民の希望、白は統一と純粋さ、赤は愛国者の血を表します。中央に描かれているのは国章です。',
            'イタリア国旗と配色が同じですが、縦横比率が異なります。',
          ],
        },
        {
          mainColor: [red, green, blue, yellow],
          fullColor: [red, green, blue, yellow],
          tag: [],
          area: worldArea.africa,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'mauritius',
          url: 'mauritius',
          name: 'モーリシャス',
          fullName: 'モーリシャス共和国',
          firstLetter: 'も',
          officialName: 'Republic of Mauritius',
          image: mauritius,
          location: mauritiusMap,
          link: 'https://flaghistory.jp/mauritius/',
          ogp: 'ogpFlagImages/mauritius.png',
          desc: [
            '縦横比率は【2:3】',
            '赤は独立闘争、青はインド洋、黄色は独立による新しい光、緑は農業を表します。',
            'グルドゥット・モハー氏がデザインしたものが国旗として採用されています。氏は2017年10月7日に心臓発作で亡くなりました（93歳）。死後彼の貢献が認められインド洋の星と鍵のメンバーという国家称号が送られました。',
          ],
        },
        {
          mainColor: [red, green, yellow],
          fullColor: [red, green, yellow],
          tag: [moon, star],
          area: worldArea.africa,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'mauritania',
          url: 'mauritania',
          name: 'モーリタニア',
          fullName: 'モーリタニア・イスラム共和国',
          firstLetter: 'も',
          officialName: 'Islamic Republic of Mauritania',
          image: mauritania,
          location: mauritaniaMap,
          link: 'https://flaghistory.jp/mauritania/',
          ogp: 'ogpFlagImages/mauritania.png',
          desc: [
            '縦横比率は【2:3】',
            '赤は独立闘争で流した血、緑は明るい未来への希望、黄色はサハラ砂漠を表します。また三日月と星はイスラムのシンボルです。',
            '2017年に国旗が変更され、現在のデザインになりました。',
          ],
        },
        {
          mainColor: [red, green, yellow, white, black],
          fullColor: [red, green, yellow, white, black],
          tag: [star],
          area: worldArea.africa,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'mozambique',
          url: 'mozambique',
          name: 'モザンビーク',
          fullName: 'モザンビーク共和国',
          firstLetter: 'も',
          officialName: 'Republic of Mozambique',
          image: mozambique,
          location: mozambiqueMap,
          link: 'https://flaghistory.jp/mozambique/',
          ogp: 'ogpFlagImages/mozambique.png',
          desc: [
            '縦横比率は【2:3】',
            '緑は肥沃な国土、白は平和、黒はアフリカ大陸、黄色は鉱物資源、赤は独立闘争、ライフル銃は防御や警戒、書籍は教育の重要性、クワは農業、星はマルクス主義と社会主義インターナショナルを表しています。',
            'なおライフル銃は銃剣のついたAK-47です。',
          ],
        },
        {
          mainColor: [red, white],
          fullColor: [red, white],
          tag: [],
          area: worldArea.eu,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'monaco',
          url: 'monaco',
          name: 'モナコ',
          fullName: 'モナコ公国',
          firstLetter: 'も',
          officialName: 'Principality of Monaco',
          image: monaco,
          location: monacoMap,
          link: 'https://flaghistory.jp/monaco/',
          ogp: 'ogpFlagImages/monaco.png',
          desc: [
            '縦横比率は【4:5】',
            '赤と白の二色はグリマルディ家（アラゴン王国からモナコを購入した家）の紋章から来ています。',
            'インドネシア国旗と配色が同じでよく似ています。（縦横比率が異なる）',
          ],
        },
        {
          mainColor: [red, green, white],
          fullColor: [red, green, white],
          tag: [moon],
          area: worldArea.asia,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'maldives',
          url: 'maldives',
          name: 'モルディブ',
          fullName: 'モルディブ共和国',
          firstLetter: 'も',
          officialName: 'Republic of Maldives',
          image: maldives,
          location: maldivesMap,
          link: 'https://flaghistory.jp/maldives/',
          ogp: 'ogpFlagImages/maldives.png',
          desc: [
            '縦横比率は【2:3】',
            '赤は自由のために流された血、緑は平和と繁栄、白い三日月はイスラムを表しています。',
            'スルタン旗（スルタンはイスラム教国の君主のこと）には国旗にさらに星が描かれたものが使われています。なお三日月と星の組み合わせはイスラム教のシンボルとしてよく使われています。',
          ],
        },
        {
          mainColor: [red, blue, yellow],
          fullColor: [red, green, blue, yellow, black],
          tag: [moon, star, cross, creature],
          area: worldArea.eu,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'moldova',
          url: 'moldova',
          name: 'モルドバ',
          fullName: 'モルドバ共和国',
          firstLetter: 'も',
          officialName: 'Republic of Moldova',
          image: moldova,
          location: moldovaMap,
          link: 'https://flaghistory.jp/moldova/',
          ogp: 'ogpFlagImages/moldova.png',
          desc: [
            '縦横比率は【1:2】',
            '青は過去と民主主義、黄色は現在と伝統、赤は未来と平等を表します。中央に描かれているのは国章です。',
            '青黄赤はルーマニアとの関連性を示しています。（ルーマニア国旗もモルドバ国旗と同じ配色）',
          ],
        },
        {
          mainColor: [red, green],
          fullColor: [red, green],
          tag: [star],
          area: worldArea.africa,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'morocco',
          url: 'morocco',
          name: 'モロッコ',
          fullName: 'モロッコ王国',
          firstLetter: 'も',
          officialName: 'Kingdom of Morocco',
          image: morocco,
          location: moroccoMap,
          link: 'https://flaghistory.jp/morocco/',
          ogp: 'ogpFlagImages/morocco.png',
          desc: [
            '縦横比率は【2:3】',
            '緑はイスラム教を象徴する色で、赤色は忍耐や夕刊という意味が込められています。中央に描かれているのはスレイマン（ソロモン）の印章です。',
            '1912年まで赤一色のものが国旗として使われていましたが、1915年に現在のデザインの国旗へと変更されました。',
          ],
        },
        {
          mainColor: [red, blue, yellow],
          fullColor: [red, blue, yellow],
          tag: [sun, moon],
          area: worldArea.asia,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'mongolia',
          url: 'mongolia',
          name: 'モンゴル',
          fullName: 'モンゴル国',
          firstLetter: 'も',
          officialName: 'Mongolia',
          image: mongolia,
          location: mongoliaMap,
          link: 'https://flaghistory.jp/mongolia/',
          ogp: 'ogpFlagImages/mongolia.png',
          desc: [
            '縦横比率は【1:2】',
            '赤は進歩と繁栄、黄色は永遠の友情、青はモンゴルの伝統色で国民を表します。',
            'ホイスト（左側）に描かれているのはソヨンボと呼ばれるもので、太陽や三日月といったパーツから出来ている文字です。',
          ],
        },
        {
          mainColor: [red, gold],
          fullColor: [red, green, blue, gold],
          tag: [cross, creature],
          area: worldArea.eu,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'montenegro',
          url: 'montenegro',
          name: 'モンテネグロ',
          fullName: 'モンテネグロ',
          firstLetter: 'も',
          officialName: 'Montenegro',
          image: montenegro,
          location: montenegroMap,
          link: 'https://flaghistory.jp/montenegro/',
          ogp: 'ogpFlagImages/montenegro.png',
          desc: [
            '縦横比率は【1:2】',
            '19世紀にオスマン帝国との戦いで用いられた赤い旗が基となっている国旗で、それに金色の縁取りがなされています。',
            '中央に描かれているのは国章です。',
          ],
        },
        {
          mainColor: [red, green, white, black],
          fullColor: [red, green, white, black],
          tag: [star],
          area: worldArea.asia,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'jordan',
          url: 'jordan',
          name: 'ヨルダン',
          fullName: 'ヨルダン・ハシェミット王国',
          firstLetter: 'よ',
          officialName: 'Hashemite Kingdom of Jordan',
          image: jordan,
          location: jordanMap,
          link: 'https://flaghistory.jp/jordan/',
          ogp: 'ogpFlagImages/jordan.png',
          desc: [
            '縦横比率は【1:2】',
            '赤はハシェミット朝、黒はアッバース朝、白はウマイヤ朝、緑はファーティマ朝を表します。また7角星はコーラン第一章の1節から7節を意味しています。',
            '汎アラブ色が用いられている国旗の一つです。',
          ],
        },
        {
          mainColor: [red, blue, white],
          fullColor: [red, blue, white],
          tag: [moon],
          area: worldArea.asia,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'laos',
          url: 'laos',
          name: 'ラオス',
          fullName: 'ラオス人民民主共和国',
          firstLetter: 'ら',
          officialName: 'Las People\'s Democratic Republic',
          image: laos,
          location: laosMap,
          link: 'https://flaghistory.jp/laos/',
          ogp: 'ogpFlagImages/laos.png',
          desc: [
            '縦横比率は【2:3】',
            '赤は自由と独立を求めて戦った国民の血、青は国の繁栄とメコン川、白い円はメコン川の上に出る満月を表します。',
            '共産党政権では星が用いられがちですが、ラオスでは珍しく月が描かれています。',
          ],
        },
        {
          mainColor: [red, white],
          fullColor: [red, white],
          tag: [],
          area: worldArea.eu,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'latvia',
          url: 'latvia',
          name: 'ラトビア',
          fullName: 'ラトビア共和国',
          firstLetter: 'ら',
          officialName: 'Republic of Latvia',
          image: latvia,
          location: latviaMap,
          link: 'https://flaghistory.jp/latvia/',
          ogp: 'ogpFlagImages/latvia.png',
          desc: [
            '縦横比率は【1:2】',
            '暗い赤色は国を守る国民の血、白は誠実さとバルト海を表しています。',
            'エストニア人と戦ったあるラトビア兵士が瀕死の傷を受け、白い布に包まれた際、その布の両端が血で染まったことに由来しています。',
          ],
        },
        {
          mainColor: [red, green, yellow],
          fullColor: [red, green, yellow],
          tag: [],
          area: worldArea.eu,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'lithuania',
          url: 'lithuania',
          name: 'リトアニア',
          fullName: 'リトアニア共和国',
          firstLetter: 'り',
          officialName: 'Republic of Lithuania',
          image: lithuania,
          location: lithuaniaMap,
          link: 'https://flaghistory.jp/lithuania/',
          ogp: 'ogpFlagImages/lithuania.png',
          desc: [
            '縦横比率は【3:5】',
            '黄色は太陽と繁栄、緑は希望と森林、赤は勇気と愛国心を表します。',
            '赤黄緑がどこから来たのかは不明ですが、民族衣装に頻出する色とされ、そこから来ているのではという節があります。',
          ],
        },
        {
          mainColor: [red, green, white, black],
          fullColor: [red, green, white, black],
          tag: [moon, star],
          area: worldArea.africa,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'libya',
          url: 'libya',
          name: 'リビア',
          fullName: 'リビア国',
          firstLetter: 'り',
          officialName: 'State of Libya',
          image: libya,
          location: libyaMap,
          link: 'https://flaghistory.jp/libya/',
          ogp: 'ogpFlagImages/libya.png',
          desc: [
            '縦横比率は【1:2】',
            '赤は自由のために流された血、黒はイタリア植民地だった頃の暗黒時代、緑は富と農業と将来の繁栄を表しています。また三日月と星はイスラム教のシンボルです。',
            '2011年に現在の国旗が制定されるまでは緑一色の国旗が使われていました。',
          ],
        },
        {
          mainColor: [red, blue, yellow],
          fullColor: [red, blue, yellow, black],
          tag: [cross],
          area: worldArea.eu,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'liechtenstein',
          url: 'liechtenstein',
          name: 'リヒテンシュタイン',
          fullName: 'リヒテンシュタイン公国',
          firstLetter: 'り',
          officialName: 'Principality of Liechtenstein',
          image: liechtenstein,
          location: liechtensteinMap,
          link: 'https://flaghistory.jp/liechtenstein/',
          ogp: 'ogpFlagImages/liechtenstein.png',
          desc: [
            '縦横比率は【3:5】',
            '青は空、赤は家庭の暖炉、黄色い冠は公国と国民との一体感を表しています。',
            '過去は冠のないモノを国旗として使っていましたが、ベルリンオリンピックにてハイチの市民旗と区別がつかなかったことから、翌年冠を国旗に加えました。',
          ],
        },
        {
          mainColor: [red, blue, white],
          fullColor: [red, blue, white],
          tag: [star],
          area: worldArea.africa,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'liberia',
          url: 'liberia',
          name: 'リベリア',
          fullName: 'リベリア共和国',
          firstLetter: 'り',
          officialName: 'Republic of Liberia',
          image: liberia,
          location: liberiaMap,
          link: 'https://flaghistory.jp/liberia/',
          ogp: 'ogpFlagImages/liberia.png',
          desc: [
            '縦横比率は【10:19】',
            '青はアフリカ大陸、赤は勇気、白は純粋さ、星は独立を表しています。',
            'アメリカの国旗がモデルとなっています。',
          ],
        },
        {
          mainColor: [red, blue, yellow],
          fullColor: [red, blue, yellow],
          tag: [],
          area: worldArea.eu,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'romania',
          url: 'romania',
          name: 'ルーマニア',
          fullName: 'ルーマニア',
          firstLetter: 'る',
          officialName: 'Romania',
          image: romania,
          location: romaniaMap,
          link: 'https://flaghistory.jp/romania/',
          ogp: 'ogpFlagImages/romania.png',
          desc: [
            '縦横比率は【2:3】',
            '青は澄んだ空、黄色は鉱物資源、赤は国民の勇気を表しています。',
            'アフリカに位置するチャドの国旗と非常に似ています。（ルーマニア国旗の青色が少し薄い）',
          ],
        },
        {
          mainColor: [red, blue],
          fullColor: [red, blue],
          tag: [],
          area: worldArea.eu,
          kokuren: '国連非加盟国',
          groupingCSS: 'not-kokuren',
          id: 'luhansk',
          url: 'luhansk',
          name: 'ルガンスク',
          fullName: 'ルガンスク人民共和国',
          firstLetter: 'る',
          officialName: 'Luhansk People\'s Republic',
          image: luhansk,
          location: luhanskMap,
          link: 'https://flaghistory.jp/luhansk/',
          ogp: 'ogpFlagImages/luhansk.png',
          desc: [
            '縦横比率は【2:3】',
            '国旗としては珍しい、水色と青色が隣接している国旗。',
            'ドネツクで使われている国旗とよく似ています（ドネツク国旗の黒部分が、ルガンスクだと水色）。ルガンスクはドネツクとともに、連邦国家ノヴォロシア人民共和国連邦を結成しています。',
          ],
        },
        {
          mainColor: [red, blue, white],
          fullColor: [red, blue, white],
          tag: [],
          area: worldArea.eu,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'luxembourg',
          url: 'luxembourg',
          name: 'ルクセンブルク',
          fullName: 'ルクセンブルク大公国',
          firstLetter: 'る',
          officialName: 'Grand Duchy of Luxembourg',
          image: luxembourg,
          location: luxembourgMap,
          link: 'https://flaghistory.jp/luxembourg/',
          ogp: 'ogpFlagImages/luxembourg.png',
          desc: [
            '縦横比率は【3:5】',
            '赤白水色は、赤いライオンの描かれた紋章に由来しています。',
            'オランダ国旗とよく似ていますが、これは偶然の一致です。',
          ],
        },
        {
          mainColor: [green, blue, yellow],
          fullColor: [green, blue, yellow],
          tag: [sun],
          area: worldArea.africa,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'rwanda',
          url: 'rwanda',
          name: 'ルワンダ',
          fullName: 'ルワンダ共和国',
          firstLetter: 'る',
          officialName: 'Republic of Rwanda',
          image: rwanda,
          location: rwandaMap,
          link: 'https://flaghistory.jp/rwanda/',
          ogp: 'ogpFlagImages/rwanda.png',
          desc: [
            '縦横比率は【2:3】',
            '青は幸福と平和、黄色は労働による経済成長、緑は繁栄への希望、太陽は統一を表しています。',
            'ルワンダ虐殺という出来事があったため、国旗から虐殺を連想させる赤色が排除され、現在の国旗が出来上がっています。',
          ],
        },
        {
          mainColor: [green, blue, white, black],
          fullColor: [green, blue, white, black],
          tag: [],
          area: worldArea.africa,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'lesotho',
          url: 'lesotho',
          name: 'レソト',
          fullName: 'レソト王国',
          firstLetter: 'れ',
          officialName: 'Kingdom of Lesotho',
          image: lesotho,
          location: lesothoMap,
          link: 'https://flaghistory.jp/lesotho/',
          ogp: 'ogpFlagImages/lesotho.png',
          desc: [
            '縦横比率は【2:3】',
            '青は雨、白は平和、緑は繁栄、黒はアフリカ大陸を表しています。中央に描かれているのはバソト帽です。',
            'なおこのバソト帽は、レソトに存在するモコロトロという伝説的な円錐形の山が元になっています。',
          ],
        },
        {
          mainColor: [red, green, white],
          fullColor: [red, green, white],
          tag: [plant],
          area: worldArea.asia,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'lebanon',
          url: 'lebanon',
          name: 'レバノン',
          fullName: 'レバノン共和国',
          firstLetter: 'れ',
          officialName: 'Lebanese Republic',
          image: lebanon,
          location: lebanonMap,
          link: 'https://flaghistory.jp/lebanon/',
          ogp: 'ogpFlagImages/lebanon.png',
          desc: [
            '縦横比率は【2:3】',
            '赤は犠牲心と勇気・独立のために流された血、白は平和と純粋さ、中央に描かれているのはレバノン杉で富と力を表しています。',
            '過去のレバノン杉は複数の色が使われたイラストでしたが、1990年初頭に緑一色のシルエットになりました。',
          ],
        },
        {
          mainColor: [red, blue, white],
          fullColor: [red, blue, white],
          tag: [],
          area: worldArea.eu,
          kokuren: '国連加盟国',
          groupingCSS: 'kokuren',
          id: 'russia',
          url: 'russia',
          name: 'ロシア',
          fullName: 'ロシア連邦',
          firstLetter: 'ろ',
          officialName: 'Russian Federation',
          image: russia,
          location: russiaMap,
          link: 'https://flaghistory.jp/russia/',
          ogp: 'ogpFlagImages/russia.png',
          desc: [
            '縦横比率は【2:3】',
            '白は高潔と素直さ、青は名誉と純粋さ、赤は勇気と寛大さを表しています。',
            'ピョートル大帝が近代国家の模範としたオランダの国旗を元にデザインされたと言われています。',
          ],
        },
    ],
  }

  return (
    <div className = 'main-wrapper'>

      
      
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' render={ () => <Main mainImage = {intialState.imageList}/>} />
          <Route path='/iceland' render={ () => <IcelandPage mainImage = {intialState.imageList}/>} />
          <Route path='/ireland' render={ () => <IrelandPage mainImage = {intialState.imageList}/>} />
          <Route path='/azerbaijan' render={ () => <AzerbaijanPage mainImage = {intialState.imageList}/>} />
          <Route path='/afghanistan' render={ () => <AfghanistanPage mainImage = {intialState.imageList}/>} />
          <Route path='/abkhazia' render={ () => <AbkhaziaPage mainImage = {intialState.imageList}/>} />
          <Route path='/america' render={ () => <AmericaPage mainImage = {intialState.imageList}/>} />
          <Route path='/arab' render={ () => <ArabPage mainImage = {intialState.imageList}/>} />
          <Route path='/algeria' render={ () => <AlgeriaPage mainImage = {intialState.imageList}/>} />
          <Route path='/argentine' render={ () => <ArgentinePage mainImage = {intialState.imageList}/>} />
          <Route path='/artsakh' render={ () => <ArtsakhPage mainImage = {intialState.imageList}/>} />
          <Route path='/albania' render={ () => <AlbaniaPage mainImage = {intialState.imageList}/>} />
          <Route path='/armenia' render={ () => <ArmeniaPage mainImage = {intialState.imageList}/>} />
          <Route path='/angola' render={ () => <AngolaPage mainImage = {intialState.imageList}/>} />
          <Route path='/antigua' render={ () => <AntiguaPage mainImage = {intialState.imageList}/>} />
          <Route path='/andorra' render={ () => <AndorraPage mainImage = {intialState.imageList}/>} />
          <Route path='/yemen' render={ () => <YemenPage mainImage = {intialState.imageList}/>} />
          <Route path='/united-kingdom' render={ () => <UnitedKingdomPage mainImage = {intialState.imageList}/>} />
          <Route path='/israel' render={ () => <IsraelPage mainImage = {intialState.imageList}/>} />
          <Route path='/italy' render={ () => <ItalyPage mainImage = {intialState.imageList}/>} />
          <Route path='/iraq' render={ () => <IraqPage mainImage = {intialState.imageList}/>} />
          <Route path='/iran' render={ () => <IranPage mainImage = {intialState.imageList}/>} />
          <Route path='/india' render={ () => <IndiaPage mainImage = {intialState.imageList}/>} />
          <Route path='/indonesia' render={ () => <IndonesiaPage mainImage = {intialState.imageList}/>} />
          <Route path='/uganda' render={ () => <UgandaPage mainImage = {intialState.imageList}/>} />
          <Route path='/ukraine' render={ () => <UkrainePage mainImage = {intialState.imageList}/>} />
          <Route path='/uzbekistan' render={ () => <UzbekistanPage mainImage = {intialState.imageList}/>} />
          <Route path='/uruguay' render={ () => <UruguayPage mainImage = {intialState.imageList}/>} />
          <Route path='/ecuador' render={ () => <EcuadorPage mainImage = {intialState.imageList}/>} />
          <Route path='/egypt' render={ () => <EgyptPage mainImage = {intialState.imageList}/>} />
          <Route path='/estonia' render={ () => <EstoniaPage mainImage = {intialState.imageList}/>} />
          <Route path='/eswatini' render={ () => <EswatiniPage mainImage = {intialState.imageList}/>} />
          <Route path='/ethiopia' render={ () => <EthiopiaPage mainImage = {intialState.imageList}/>} />
          <Route path='/eritrea' render={ () => <EritreaPage mainImage = {intialState.imageList}/>} />
          <Route path='/elsalvador' render={ () => <ElsalvadorPage mainImage = {intialState.imageList}/>} />
          <Route path='/transnistria' render={ () => <TransnistriaPage mainImage = {intialState.imageList}/>} />
          <Route path='/australia' render={ () => <AustraliaPage mainImage = {intialState.imageList}/>} />
          <Route path='/austria' render={ () => <AustriaPage mainImage = {intialState.imageList}/>} />
          <Route path='/oman' render={ () => <OmanPage mainImage = {intialState.imageList}/>} />
          <Route path='/netherlands' render={ () => <NetherlandsPage mainImage = {intialState.imageList}/>} />
          <Route path='/guyana' render={ () => <GuyanaPage mainImage = {intialState.imageList}/>} />
          <Route path='/kazakhstan' render={ () => <KazakhstanPage mainImage = {intialState.imageList}/>} />
          <Route path='/qatar' render={ () => <QatarPage mainImage = {intialState.imageList}/>} />
          <Route path='/ghana' render={ () => <GhanaPage mainImage = {intialState.imageList}/>} />
          <Route path='/caboverde' render={ () => <CaboverdePage mainImage = {intialState.imageList}/>} />
          <Route path='/gabon' render={ () => <GabonPage mainImage = {intialState.imageList}/>} />
          <Route path='/canada' render={ () => <CanadaPage mainImage = {intialState.imageList}/>} />
          <Route path='/cameroon' render={ () => <CameroonPage mainImage = {intialState.imageList}/>} />
          <Route path='/korea' render={ () => <KoreaPage mainImage = {intialState.imageList}/>} />
          <Route path='/gambia' render={ () => <GambiaPage mainImage = {intialState.imageList}/>} />
          <Route path='/cambodia' render={ () => <CambodiaPage mainImage = {intialState.imageList}/>} />
          <Route path='/northern-cyprus' render={ () => <NorthernCyprusPage mainImage = {intialState.imageList}/>} />
          <Route path='/north-korea' render={ () => <NorthKoreaPage mainImage = {intialState.imageList}/>} />
          <Route path='/north-macedonia' render={ () => <NorthMacedoniaPage mainImage = {intialState.imageList}/>} />
          <Route path='/guinea' render={ () => <GuineaPage mainImage = {intialState.imageList}/>} />
          <Route path='/guinea-bissau' render={ () => <GuineaBissauPage mainImage = {intialState.imageList}/>} />
          <Route path='/cyprus' render={ () => <CyprusPage mainImage = {intialState.imageList}/>} />
          <Route path='/cuba' render={ () => <CubaPage mainImage = {intialState.imageList}/>} />
          <Route path='/greece' render={ () => <GreecePage mainImage = {intialState.imageList}/>} />
          <Route path='/kiribati' render={ () => <KiribatiPage mainImage = {intialState.imageList}/>} />
          <Route path='/kyrgyz' render={ () => <KyrgyzPage mainImage = {intialState.imageList}/>} />
          <Route path='/guatemala' render={ () => <GuatemalaPage mainImage = {intialState.imageList}/>} />
          <Route path='/kuwait' render={ () => <KuwaitPage mainImage = {intialState.imageList}/>} />
          <Route path='/cook' render={ () => <CookPage mainImage = {intialState.imageList}/>} />
          <Route path='/grenada' render={ () => <GrenadaPage mainImage = {intialState.imageList}/>} />
          <Route path='/croatia' render={ () => <CroatiaPage mainImage = {intialState.imageList}/>} />
          <Route path='/kenya' render={ () => <KenyaPage mainImage = {intialState.imageList}/>} />
          <Route path='/coted' render={ () => <CotedPage mainImage = {intialState.imageList}/>} />
          <Route path='/costarica' render={ () => <CostaricaPage mainImage = {intialState.imageList}/>} />
          <Route path='/kosovo' render={ () => <KosovoPage mainImage = {intialState.imageList}/>} />
          <Route path='/comoros' render={ () => <ComorosPage mainImage = {intialState.imageList}/>} />
          <Route path='/colombia' render={ () => <ColombiaPage mainImage = {intialState.imageList}/>} />
          <Route path='/congo' render={ () => <CongoPage mainImage = {intialState.imageList}/>} />
          <Route path='/republic-congo' render={ () => <RepublicCongoPage mainImage = {intialState.imageList}/>} />
          <Route path='/saudiarabia' render={ () => <SaudiarabiaPage mainImage = {intialState.imageList}/>} />
          <Route path='/sahrawi' render={ () => <SahrawiPage mainImage = {intialState.imageList}/>} />
          <Route path='/samoa' render={ () => <SamoaPage mainImage = {intialState.imageList}/>} />
          <Route path='/saotome' render={ () => <SaotomePage mainImage = {intialState.imageList}/>} />
          <Route path='/zambia' render={ () => <ZambiaPage mainImage = {intialState.imageList}/>} />
          <Route path='/sanmarino' render={ () => <SanmarinoPage mainImage = {intialState.imageList}/>} />
          <Route path='/sierraleone' render={ () => <SierraleonePage mainImage = {intialState.imageList}/>} />
          <Route path='/djibouti' render={ () => <DjiboutiPage mainImage = {intialState.imageList}/>} />
          <Route path='/jamaica' render={ () => <JamaicaPage mainImage = {intialState.imageList}/>} />
          <Route path='/georgia' render={ () => <GeorgiaPage mainImage = {intialState.imageList}/>} />
          <Route path='/syria' render={ () => <SyriaPage mainImage = {intialState.imageList}/>} />
          <Route path='/singapore' render={ () => <SingaporePage mainImage = {intialState.imageList}/>} />
          <Route path='/zimbabwe' render={ () => <ZimbabwePage mainImage = {intialState.imageList}/>} />
          <Route path='/swiss' render={ () => <SwissPage mainImage = {intialState.imageList}/>} />
          <Route path='/sweden' render={ () => <SwedenPage mainImage = {intialState.imageList}/>} />
          <Route path='/sudan' render={ () => <SudanPage mainImage = {intialState.imageList}/>} />
          <Route path='/spain' render={ () => <SpainPage mainImage = {intialState.imageList}/>} />
          <Route path='/suriname' render={ () => <SurinamePage mainImage = {intialState.imageList}/>} />
          <Route path='/srilanka' render={ () => <SrilankaPage mainImage = {intialState.imageList}/>} />
          <Route path='/slovakia' render={ () => <SlovakiaPage mainImage = {intialState.imageList}/>} />
          <Route path='/slovenia' render={ () => <SloveniaPage mainImage = {intialState.imageList}/>} />
          <Route path='/seychelles' render={ () => <SeychellesPage mainImage = {intialState.imageList}/>} />
          <Route path='/eq-guinea' render={ () => <EqGuineaPage mainImage = {intialState.imageList}/>} />
          <Route path='/senegal' render={ () => <SenegalPage mainImage = {intialState.imageList}/>} />
          <Route path='/serbia' render={ () => <SerbiaPage mainImage = {intialState.imageList}/>} />
          <Route path='/nevis' render={ () => <NevisPage mainImage = {intialState.imageList}/>} />
          <Route path='/vincent' render={ () => <VincentPage mainImage = {intialState.imageList}/>} />
          <Route path='/saintlucia' render={ () => <SaintluciaPage mainImage = {intialState.imageList}/>} />
          <Route path='/somalia' render={ () => <SomaliaPage mainImage = {intialState.imageList}/>} />
          <Route path='/somaliland' render={ () => <SomalilandPage mainImage = {intialState.imageList}/>} />
          <Route path='/solomon' render={ () => <SolomonPage mainImage = {intialState.imageList}/>} />
          <Route path='/thailand' render={ () => <ThailandPage mainImage = {intialState.imageList}/>} />
          <Route path='/taiwan' render={ () => <TaiwanPage mainImage = {intialState.imageList}/>} />
          <Route path='/tajikistan' render={ () => <TajikistanPage mainImage = {intialState.imageList}/>} />
          <Route path='/tanzania' render={ () => <TanzaniaPage mainImage = {intialState.imageList}/>} />
          <Route path='/czech' render={ () => <CzechPage mainImage = {intialState.imageList}/>} />
          <Route path='/chad' render={ () => <ChadPage mainImage = {intialState.imageList}/>} />
          <Route path='/central-african' render={ () => <CentralAfricanPage mainImage = {intialState.imageList}/>} />
          <Route path='/china' render={ () => <ChinaPage mainImage = {intialState.imageList}/>} />
          <Route path='/tunisia' render={ () => <TunisiaPage mainImage = {intialState.imageList}/>} />
          <Route path='/chile' render={ () => <ChilePage mainImage = {intialState.imageList}/>} />
          <Route path='/tuvalu' render={ () => <TuvaluPage mainImage = {intialState.imageList}/>} />
          <Route path='/denmark' render={ () => <DenmarkPage mainImage = {intialState.imageList}/>} />
          <Route path='/germany' render={ () => <GermanyPage mainImage = {intialState.imageList}/>} />
          <Route path='/togo' render={ () => <TogoPage mainImage = {intialState.imageList}/>} />
          <Route path='/donetsk' render={ () => <DonetskPage mainImage = {intialState.imageList}/>} />
          <Route path='/dominican' render={ () => <DominicanPage mainImage = {intialState.imageList}/>} />
          <Route path='/dominica' render={ () => <DominicaPage mainImage = {intialState.imageList}/>} />
          <Route path='/trinidad' render={ () => <TrinidadPage mainImage = {intialState.imageList}/>} />
          <Route path='/turkmenistan' render={ () => <TurkmenistanPage mainImage = {intialState.imageList}/>} />
          <Route path='/turkey' render={ () => <TurkeyPage mainImage = {intialState.imageList}/>} />
          <Route path='/tonga' render={ () => <TongaPage mainImage = {intialState.imageList}/>} />
          <Route path='/nigeria' render={ () => <NigeriaPage mainImage = {intialState.imageList}/>} />
          <Route path='/nauru' render={ () => <NauruPage mainImage = {intialState.imageList}/>} />
          <Route path='/namibia' render={ () => <NamibiaPage mainImage = {intialState.imageList}/>} />
          <Route path='/niue' render={ () => <NiuePage mainImage = {intialState.imageList}/>} />
          <Route path='/nicaragua' render={ () => <NicaraguaPage mainImage = {intialState.imageList}/>} />
          <Route path='/niger' render={ () => <NigerPage mainImage = {intialState.imageList}/>} />
          <Route path='/japan' render={ () => <JapanPage mainImage = {intialState.imageList}/>} />
          <Route path='/newzealand' render={ () => <NewzealandPage mainImage = {intialState.imageList}/>} />
          <Route path='/nepal' render={ () => <NepalPage mainImage = {intialState.imageList}/>} />
          <Route path='/norway' render={ () => <NorwayPage mainImage = {intialState.imageList}/>} />
          <Route path='/bahrain' render={ () => <BahrainPage mainImage = {intialState.imageList}/>} />
          <Route path='/haiti' render={ () => <HaitiPage mainImage = {intialState.imageList}/>} />
          <Route path='/pakistan' render={ () => <PakistanPage mainImage = {intialState.imageList}/>} />
          <Route path='/vatican' render={ () => <VaticanPage mainImage = {intialState.imageList}/>} />
          <Route path='/panama' render={ () => <PanamaPage mainImage = {intialState.imageList}/>} />
          <Route path='/vanuatu' render={ () => <VanuatuPage mainImage = {intialState.imageList}/>} />
          <Route path='/bahamas' render={ () => <BahamasPage mainImage = {intialState.imageList}/>} />
          <Route path='/papua' render={ () => <PapuaPage mainImage = {intialState.imageList}/>} />
          <Route path='/palau' render={ () => <PalauPage mainImage = {intialState.imageList}/>} />
          <Route path='/paraguay' render={ () => <ParaguayPage mainImage = {intialState.imageList}/>} />
          <Route path='/barbados' render={ () => <BarbadosPage mainImage = {intialState.imageList}/>} />
          <Route path='/palestine' render={ () => <PalestinePage mainImage = {intialState.imageList}/>} />
          <Route path='/hungary' render={ () => <HungaryPage mainImage = {intialState.imageList}/>} />
          <Route path='/bangladesh' render={ () => <BangladeshPage mainImage = {intialState.imageList}/>} />
          <Route path='/timor' render={ () => <TimorPage mainImage = {intialState.imageList}/>} />
          <Route path='/fiji' render={ () => <FijiPage mainImage = {intialState.imageList}/>} />
          <Route path='/philippines' render={ () => <PhilippinesPage mainImage = {intialState.imageList}/>} />
          <Route path='/finland' render={ () => <FinlandPage mainImage = {intialState.imageList}/>} />
          <Route path='/bhutan' render={ () => <BhutanPage mainImage = {intialState.imageList}/>} />
          <Route path='/brazil' render={ () => <BrazilPage mainImage = {intialState.imageList}/>} />
          <Route path='/france' render={ () => <FrancePage mainImage = {intialState.imageList}/>} />
          <Route path='/bulgaria' render={ () => <BulgariaPage mainImage = {intialState.imageList}/>} />
          <Route path='/burkinafaso' render={ () => <BurkinafasoPage mainImage = {intialState.imageList}/>} />
          <Route path='/brunei' render={ () => <BruneiPage mainImage = {intialState.imageList}/>} />
          <Route path='/burundi' render={ () => <BurundiPage mainImage = {intialState.imageList}/>} />
          <Route path='/vietnam' render={ () => <VietnamPage mainImage = {intialState.imageList}/>} />
          <Route path='/benin' render={ () => <BeninPage mainImage = {intialState.imageList}/>} />
          <Route path='/venezuela' render={ () => <VenezuelaPage mainImage = {intialState.imageList}/>} />
          <Route path='/belarus' render={ () => <BelarusPage mainImage = {intialState.imageList}/>} />
          <Route path='/belize' render={ () => <BelizePage mainImage = {intialState.imageList}/>} />
          <Route path='/peru' render={ () => <PeruPage mainImage = {intialState.imageList}/>} />
          <Route path='/belgium' render={ () => <BelgiumPage mainImage = {intialState.imageList}/>} />
          <Route path='/poland' render={ () => <PolandPage mainImage = {intialState.imageList}/>} />
          <Route path='/bosnia' render={ () => <BosniaPage mainImage = {intialState.imageList}/>} />
          <Route path='/botswana' render={ () => <BotswanaPage mainImage = {intialState.imageList}/>} />
          <Route path='/bolivia' render={ () => <BoliviaPage mainImage = {intialState.imageList}/>} />
          <Route path='/portugal' render={ () => <PortugalPage mainImage = {intialState.imageList}/>} />
          <Route path='/honduras' render={ () => <HondurasPage mainImage = {intialState.imageList}/>} />
          <Route path='/marshall' render={ () => <MarshallPage mainImage = {intialState.imageList}/>} />
          <Route path='/madagascar' render={ () => <MadagascarPage mainImage = {intialState.imageList}/>} />
          <Route path='/malawi' render={ () => <MalawiPage mainImage = {intialState.imageList}/>} />
          <Route path='/mali' render={ () => <MaliPage mainImage = {intialState.imageList}/>} />
          <Route path='/malta' render={ () => <MaltaPage mainImage = {intialState.imageList}/>} />
          <Route path='/malaysia' render={ () => <MalaysiaPage mainImage = {intialState.imageList}/>} />
          <Route path='/micronesia' render={ () => <MicronesiaPage mainImage = {intialState.imageList}/>} />
          <Route path='/south-africa' render={ () => <SouthAfricaPage mainImage = {intialState.imageList}/>} />
          <Route path='/south-ossetia' render={ () => <SouthOssetiaPage mainImage = {intialState.imageList}/>} />
          <Route path='/south-sudan' render={ () => <SouthSudanPage mainImage = {intialState.imageList}/>} />
          <Route path='/myanmar' render={ () => <MyanmarPage mainImage = {intialState.imageList}/>} />
          <Route path='/mexico' render={ () => <MexicoPage mainImage = {intialState.imageList}/>} />
          <Route path='/mauritius' render={ () => <MauritiusPage mainImage = {intialState.imageList}/>} />
          <Route path='/mauritania' render={ () => <MauritaniaPage mainImage = {intialState.imageList}/>} />
          <Route path='/mozambique' render={ () => <MozambiquePage mainImage = {intialState.imageList}/>} />
          <Route path='/monaco' render={ () => <MonacoPage mainImage = {intialState.imageList}/>} />
          <Route path='/maldives' render={ () => <MaldivesPage mainImage = {intialState.imageList}/>} />
          <Route path='/moldova' render={ () => <MoldovaPage mainImage = {intialState.imageList}/>} />
          <Route path='/morocco' render={ () => <MoroccoPage mainImage = {intialState.imageList}/>} />
          <Route path='/mongolia' render={ () => <MongoliaPage mainImage = {intialState.imageList}/>} />
          <Route path='/montenegro' render={ () => <MontenegroPage mainImage = {intialState.imageList}/>} />
          <Route path='/jordan' render={ () => <JordanPage mainImage = {intialState.imageList}/>} />
          <Route path='/laos' render={ () => <LaosPage mainImage = {intialState.imageList}/>} />
          <Route path='/latvia' render={ () => <LatviaPage mainImage = {intialState.imageList}/>} />
          <Route path='/lithuania' render={ () => <LithuaniaPage mainImage = {intialState.imageList}/>} />
          <Route path='/libya' render={ () => <LibyaPage mainImage = {intialState.imageList}/>} />
          <Route path='/liechtenstein' render={ () => <LiechtensteinPage mainImage = {intialState.imageList}/>} />
          <Route path='/liberia' render={ () => <LiberiaPage mainImage = {intialState.imageList}/>} />
          <Route path='/romania' render={ () => <RomaniaPage mainImage = {intialState.imageList}/>} />
          <Route path='/luhansk' render={ () => <LuhanskPage mainImage = {intialState.imageList}/>} />
          <Route path='/luxembourg' render={ () => <LuxembourgPage mainImage = {intialState.imageList}/>} />
          <Route path='/rwanda' render={ () => <RwandaPage mainImage = {intialState.imageList}/>} />
          <Route path='/lesotho' render={ () => <LesothoPage mainImage = {intialState.imageList}/>} />
          <Route path='/lebanon' render={ () => <LebanonPage mainImage = {intialState.imageList}/>} />
          <Route path='/russia' render={ () => <RussiaPage mainImage = {intialState.imageList}/>} />
          <Route path='/antarctica' render={ () => <AntarcticaPage mainImage = {intialState.imageList}/>} />
          <Route path='/greenland' render={ () => <GreenlandPage mainImage = {intialState.imageList}/>} />
          <Route path='/Mann' render={ () => <MannPage mainImage = {intialState.imageList}/>} />
        </Switch>
      </Router>



      <Footer />
      <PreLoad preloadImage = {intialState.imageList}/>
    </div>
  );
}

export default App;
