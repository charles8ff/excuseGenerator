    function excuseGenerator(){

        let who = ['The dog','My grandma','His turtle','My bird'];
        let action = ['ate','peed','crushed','broke'];
        let what = ['my homework', 'the keys', 'the car'];
        let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];
        let fullSentence = [who, action, what, when]
        let excuse="";

        for(var i=0;i<fullSentence.length;i++){
            excuse.concat(fullSentence[i][Math.floor(Math.random() * fullSentence[i].length)]);
            excuse.concat(" ");
        }
        excuse.concat(".")

        // excuse = who[Math.floor((Math.random() * who.length) )] + " " + action[Math.floor((Math.random() * action.length))] + 
        // " " + what[Math.floor((Math.random() * what.length) )] + " " + when[Math.floor((Math.random() * when.length))]+".";

        document.getElementById("excuse").innerHTML=excuse;
    }