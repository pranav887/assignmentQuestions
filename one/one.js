var vectorList = [['195°', '11%', '12%'], ['37°', '13%', '76%'], ['15°', '11%', '12%']];


var newVector = [];


var firstIndex = 0


for (var i=0; i<vectorList.length;i++){



    var deg =0;
    if(i!=firstIndex){
        deg= parseInt(vectorList[firstIndex][0]) - parseInt(vectorList[i][0]);

    }


    if(deg==180){
        newVector.push(vectorList[firstIndex])
        newVector.push(vectorList[i])
    }

    if(i==vectorList.length-1){
        if(firstIndex ==vectorList.length-1){
            break;
        }
        i=0;
        firstIndex =firstIndex +1;
    }
}

console.log(newVector);