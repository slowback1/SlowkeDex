import React, { Component } from 'react';
import Stats from './Stats';
import Types from '../types/types';

const typesGuidelines = ['normal','grass','fire','water','poison','flying','ice','bug','electric','ground','rock','fairy','fighting','psychic','dark','dragon','steel'];


function typesBuilder(array, type) {
    var result = [];
    for(var i=0; i < array.length-1; i++) {
        if(array[i][0] == type || array[i][1] == type) {
            result.push[i];
        }
    }
    return result;
}
var resultStageTwo = [];
for(var j=0; j < typesGuidelines.length-1; j++) {
    resultStageTwo.push(typesBuilder(Types,typesGuidelines[j]));
}
var TypeAverages = [];
var hpArr = [];
var atkArr = [];
var defArr = [];
var spaArr = [];
var spedArr = [];
var spdArr = [];
for(var k=0; k<resultStageTwo.length-1; k++) {
    hpArr.push([]);
    atkArr.push([]);
    defArr.push([]);
    spaArr.push([]);
    spedArr.push([]);
    spdArr.push([]);
    for(var l=0; l<resultStageTwo[k].length-1;l++) {
        hpArr[k].push(resultStageTwo[k][l][0]);
        atkArr[k].push(resultStageTwo[k][l][1]);
        defArr[k].push(resultStageTwo[k][l][2]);
        spaArr[k].push(resultStageTwo[k][l][3]);
        spedArr.push(resultStageTwo[k][l][4]);
        spdArr.push(resultStageTwo[k][l][5]);
}
for(var m=0; m<typesGuidelines.length-1; m++) {
    TypeAverages.push([]);
    var hpTotal = 0;
    for(var n=0; n < hpArr[m].length; n++) {
        hpTotal += hpArr[m][n];
    }
    hpTotal = hpTotal / hpArr[m].length;
    TypeAverages[m].push(hpTotal);
    var atkTotal = 0;
    for(n=0; n < atkArr[m].length; n++) {
        atkTotal += atkArr[m][n];
    }
    atkTotal = atkTotal / atkArr[m].length;
    TypeAverages[m].push(atkTotal);
    var defTotal = 0;
    for(n=0; n < defArr[m].length; n++) {
        defTotal += defArr[m][n];
    }
    defTotal = defTotal / defArr[m].length;
    TypeAverages[m].push(defTotal);
    var spaTotal = 0;
    for(n=0; n < spaArr[m].length; n++) {
        spaTotal += spaArr[m][n];
    }
    spaTotal = spaTotal / spaArr[m].length;
    TypeAverages[m].push(spaTotal);
    var spedTotal = 0;
    for(n=0; n < spedArr[m].length; n++) {
        spedTotal += spedArr[m][n];
    }
    spedTotal = spedTotal / spedArr[m].length;
    TypeAverages[m].push(spedTotal);
    
    var spdTotal = 0;
    for(n=0; n < spdArr[m].length; n++) {
        spdTotal += spdArr[m][n];
    }
    spdTotal = spdTotal / spdArr[m].length;
    TypeAverages[m].push(spdTotal);
}
//resultStageTwo = [[normalStats],[grassStats]....]
var output0 = TypeAverages[0].join(" ");
var output1 = TypeAverages[1].join(" ");
var output2 = TypeAverages[2].join(" ");
var output3 = TypeAverages[3].join(" ");
var output4 = TypeAverages[4].join(" ");
var output5 = TypeAverages[5].join(" ");
var output6 = TypeAverages[6].join(" ");
var output7 = TypeAverages[7].join(" ");
var output8 = TypeAverages[8].join(" ");
var output9 = TypeAverages[9].join(" ");
var output10 = TypeAverages[10].join(" ");
var output11 = TypeAverages[11].join(" ");
var output12 = TypeAverages[12].join(" ");
var output13 = TypeAverages[13].join(" ");
var output14 = TypeAverages[14].join(" ");
var output15 = TypeAverages[15].join(" ");
class StatsCompose extends Component {
    render() {
        return(
                <div>
                    <p>hp atk def spa sped spd</p>
                    <p>{typesGuidelines[0]} {output0}</p>
                    <p>{typesGuidelines[1]} {output1}</p>
                    <p>{typesGuidelines[2]} {output2}</p>
                    <p>{typesGuidelines[3]} {output3}</p>
                    <p>{typesGuidelines[4]} {output4}</p>
                    <p>{typesGuidelines[5]} {output5}</p>
                    <p>{typesGuidelines[6]} {output6}</p>
                    <p>{typesGuidelines[7]} {output7}</p>
                    <p>{typesGuidelines[8]} {output8}</p>
                    <p>{typesGuidelines[9]} {output9}</p>
                    <p>{typesGuidelines[10]} {output10}</p>
                    <p>{typesGuidelines[11]} {output11}</p>
                    <p>{typesGuidelines[12]} {output12}</p>
                    <p>{typesGuidelines[13]} {output13}</p>
                    <p>{typesGuidelines[14]} {output14}</p>
                    <p>{typesGuidelines[15]} {output15}</p>
                </div>
            );
    }       
}}

export default StatsCompose;