(function(){

    var helloSpeaker ={};
    
    // DO NOT attach the speakkord variable to the helloSpeaker' object.
    
    var speakword = "Hello";
    
    helloSpeaker.speak =function (name) {
    
    console.log(speakWord +" " + name);
    }

 window.helloSpeaker =helloSpeaker;
    
    })();