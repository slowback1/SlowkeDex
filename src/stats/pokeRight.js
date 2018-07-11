import React from 'react';
//eslint-diable-next-linee
import ListME from './listME'; 
//eslint-disable-next-line

//eslint-disable-next-line
import MegaEvolutionDB from './megaEvolution.js';
import Pokemon from '../pokemon/Pokemon';
import Stats from './Stats';
import Types from '../types/types';
import TypeAverages from './typeAverages';
import './stats.css';



const PokeRight = ({ pokeID }) => {
    let name=Pokemon[pokeID-1].name.charAt(0).toUpperCase() + Pokemon[pokeID-1].name.slice(1);
    



if (pokeID == 3 || pokeID == 6 || pokeID == 9 || pokeID == 65 || pokeID == 94 || pokeID == 115 || pokeID == 127 || pokeID == 130 || pokeID == 142 || pokeID == 150 || pokeID == 181 || pokeID == 212 || pokeID == 214 || pokeID == 229 || pokeID == 248 || pokeID == 254 || pokeID == 257 || pokeID == 260 || pokeID == 282 || pokeID == 303 || pokeID == 306 || pokeID == 308 || pokeID == 310 || pokeID == 354 || pokeID == 359 || pokeID == 448 || pokeID == 445 || pokeID == 460 || pokeID == 15 || pokeID == 18 || pokeID == 80 || pokeID == 208 || pokeID == 302 || pokeID == 319 || pokeID == 323 || pokeID == 334 || pokeID == 362 || pokeID == 373 || pokeID == 376 || pokeID == 380 || pokeID == 381 || pokeID == 382 || pokeID == 383 || pokeID == 384 || pokeID == 428 || pokeID == 475 || pokeID == 531 || pokeID == 719) {
        console.log(pokeID + " can mega evolve");
        if (pokeID == 6 || pokeID == 150) {
            if(Types[pokeID-1].length > 1) {
        return (
                <div className="pokeRight">
         
                <div className="spriteScreen">

                    <div className="tint">
                                    <div className="pokeRightNameIDSection">

                                        <p className="pokeRightID">
                        <div className="emHashtag">#</div>{pokeID}
                    </p>
                    <div className="greenSpace"><div> V V</div>
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
                    <div className="greenSpace"><div> V V</div>
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
        }
        if(Types[pokeID-1].length > 1) {
        return (
                <div className="pokeRight">
         
                <div className="spriteScreen">

                    <div className="tint">
                                    <div className="pokeRightNameIDSection">

                                        <p className="pokeRightID">
                        <div className="emHashtag">#</div>{pokeID}
                    </p>
                    <div className="greenSpace"> <div>V</div>
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
                    <div className="greenSpace"> <div>V</div>
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
}


































else {
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
}
    };


export default PokeRight;