import React from 'react';
//eslint-disable-next-line
import ListME from './listME'; 
//eslint-disable-next-line
import MoveSection from './moveSection.js';

//eslint-disable-next-line
import MegaEvolutionDB from './megaEvolution.js';
import Pokemon from '../pokemon/Pokemon';
import Stats from './Stats';
import Types from '../types/types';
import TypeAverages from './typeAverages';
import './stats.css';

const PokeRight = ({ pokeID }) => {
    let name=Pokemon[pokeID-1].name.charAt(0).toUpperCase() + Pokemon[pokeID-1].name.slice(1);
//eslint-disable-next-line
        if(Types[pokeID-1].length > 1) {
        return (
                <div className="pokeRight">
         
                <div className="spriteScreen">

                    <div className="tint">
                                    <div className="pokeRightNameIDSection">

                                        <p className="pokeRightID">
                        <div className="emHashtag">#</div>{pokeID}
                    </p>
                    <div className="greenSpace">
                    </div>
                                        <p className="pokeRightName">
                        {name}
                    </p>
                </div>
                        <img src={require(`./sprites/${pokeID}.png`)} className="pokeRightSprite" alt="img" />
                    <div className="typesSect">                
                        <p className={`types typesA ${Types[pokeID-1][0]}`}>{Types[pokeID-1][0]}</p>
                        <p className={`types typesB ${Types[pokeID-1][1]}`}>{Types[pokeID-1][1]}</p>
                    </div>
                    </div>
                                    
                </div>

                    <div className="infoPart">
                    <div className="wrapper">
                        <div className="n">
                            <p>hp {Stats[pokeID-1][0]}</p>
                            <div className="stats">
                                <div className={`stat_${Stats[pokeID-1][0]} stat hp`}>                <div className={`average1`} style={{width: TypeAverages[`${Types[pokeID-1][0]}`].hp}}><div className={`average2`} style={{width: TypeAverages[`${Types[pokeID-1][1]}`].hp}}></div></div></div>
                
                            </div>
                        </div>
                        <div className="n">
                            <p>attack {Stats[pokeID-1][1]}</p>
                            <div className="stats">
                                <div className={`stat_${Stats[pokeID-1][1]} stat attack`}>                <div className={`average1`} style={{width: TypeAverages[`${Types[pokeID-1][0]}`].attack}}><div className={`average2`} style={{width: TypeAverages[`${Types[pokeID-1][1]}`].attack}}></div></div></div>
                            </div>
                        </div>
                        <div className="n">
                            <p>defense {Stats[pokeID-1][2]}</p>
                            <div className="stats">
                                <div className={`stat_${Stats[pokeID-1][2]} stat defense`}>                <div className={`average1`} style={{width: TypeAverages[`${Types[pokeID-1][0]}`].defense}}><div className={`average2`} style={{width: TypeAverages[`${Types[pokeID-1][1]}`].defense}}></div></div></div>
                            </div>
                        </div>
                        <div className="n">
                            <p>special attack {Stats[pokeID-1][3]}</p>
                            <div className="stats">
                                <div className={`stat_${Stats[pokeID-1][3]} stat specialAttack`}>                <div className={`average1`} style={{width: TypeAverages[`${Types[pokeID-1][0]}`].specialAttack}}><div className={`average2`} style={{width: TypeAverages[`${Types[pokeID-1][1]}`].specialAttack}}></div></div></div>
                            </div>
                        </div>
                        <div className="n">
                            <p> special defense {Stats[pokeID-1][4]}</p>
                            <div className="stats">
                                <div className={`stat_${Stats[pokeID-1][4]} stat specialDefense`}>                <div className={`average1`} style={{width: TypeAverages[`${Types[pokeID-1][0]}`].specialDefense}}><div className={`average2`} style={{width: TypeAverages[`${Types[pokeID-1][1]}`].specialDefense}}></div></div></div>
                            </div>
                        </div>
                        <div className="nn">
                            <p> speed {Stats[pokeID-1][5]}</p>
                            <div className="stats">
                                <div className={`stat_${Stats[pokeID-1][5]} stat speed`}>                <div className={`average1`} style={{width: TypeAverages[`${Types[pokeID-1][0]}`].speed}}><div className={`average2`} style={{width: TypeAverages[`${Types[pokeID-1][1]}`].speed}}></div></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            );
    }
            else {
                return (
                        <div className="pokeRight">
         
                <div className="spriteScreen">

                    <div className="tint">
                                    <div className="pokeRightNameIDSection">

                                        <p className="pokeRightID">
                        <div className="emHashtag">#</div>{pokeID}
                    </p>
                    <div className="greenSpace">
                    </div>
                                        <p className="pokeRightName">
                        {name}
                    </p>
                </div>
                        <img src={require(`./sprites/${pokeID}.png`)} className="pokeRightSprite" alt="img" />
                    <div className="typesSect">                
                        <p className={`types typesA ${Types[pokeID-1][0]}`}>{Types[pokeID-1][0]}</p>
                    </div>
                    </div>
                </div>

                    <div className="infoPart">
                    <div className="wrapper">
                        <div className="n">
                            <p>hp {Stats[pokeID-1][0]}</p>
                            <div className="stats">
                                <div className={`stat_${Stats[pokeID-1][0]} stat hp`}><div className={`average1`} style={{width: TypeAverages[`${Types[pokeID-1][0]}`].hp}}></div></div>
                            </div>
                        </div>
                        <div className="n">
                            <p>attack {Stats[pokeID-1][1]}</p>
                            <div className="stats">
                                <div className={`stat_${Stats[pokeID-1][1]} stat attack`}><div className={`average1`} style={{width: TypeAverages[`${Types[pokeID-1][0]}`].attack}}></div></div>
                            </div>
                        </div>
                        <div className="n">
                            <p>defense {Stats[pokeID-1][2]}</p>
                            <div className="stats">
                                <div className={`stat_${Stats[pokeID-1][2]} stat defense`}><div className={`average1`} style={{width: TypeAverages[`${Types[pokeID-1][0]}`].defense}}></div></div>
                            </div>
                        </div>
                        <div className="n">
                            <p>special attack {Stats[pokeID-1][3]}</p>
                            <div className="stats">
                                <div className={`stat_${Stats[pokeID-1][3]} stat specialAttack`}><div className={`average1`} style={{width: TypeAverages[`${Types[pokeID-1][0]}`].specialAttack}}></div></div>
                            </div>
                        </div>
                        <div className="n">
                            <p> special defense {Stats[pokeID-1][4]}</p>
                            <div className="stats">
                                <div className={`stat_${Stats[pokeID-1][4]} stat specialDefense`}><div className={`average1`} style={{width: TypeAverages[`${Types[pokeID-1][0]}`].specialDefense}}></div></div>
                            </div>
                        </div>
                        <div className="nn">
                            <p> speed {Stats[pokeID-1][5]}</p>
                            <div className="stats">
                                <div className={`stat_${Stats[pokeID-1][5]} stat speed`}><div className={`average1`} style={{width: TypeAverages[`${Types[pokeID-1][0]}`].speed}}></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                    );
            }
    };
export default PokeRight;