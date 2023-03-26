function addAndSubtract(first,second,third){



    function sum(first,second){

        return first + second;
    }

    function subtract(sum,third){

        return sum - third;
    }



    console.log(subtract(sum(first,second),third));
}

addAndSubtract(23,6,10);