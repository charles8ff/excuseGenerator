    function excuseGenerator(){

        const WHO = ['The dog','My grandma','His turtle','My bird'];
        const ACTION = ['ate','peed','crushed','broke'];
        const WHAT = ['my homework', 'the keys', 'the car'];
        const WHEN = ['before the class','right on time','when I finished','during my lunch','while I was praying'];
        const FULL_SENTENCE = [WHO, ACTION, WHAT, WHEN]
        let excuse="";

        for(let i=0;i<FULL_SENTENCE.length;i++){
            excuse.concat(FULL_SENTENCE[i][Math.floor(Math.random() * FULL_SENTENCE[i].length)]);
            excuse.concat(" ");
        }
        excuse.concat(". Un-believable!!")
        document.getElementById("excuse").innerHTML=excuse;
    }