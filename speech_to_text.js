if ('webkitSpeechRecognition' in window){
	var recognition = new webkitSpeechRecognition();
	recognition.continous = true;
	recognition.interimResults = true;
	recognition.lang = "en-US";
	recognition.maxAlternatives = 1;
	
	
	document.body.onclick = function(){
		recognition.start();
		console.log("Recognition start is called");
	}
	recognition.onstart = function(){
		console.log("The Listening for input has started");
	}
	
	recognition.onresult = function(event){
		if (typeof(event.results) === 'undefined'){
			recognition.stop();
			console.log("Something went wrong when getting back the result");
			return;
		}
		
		for (var i = event.result.Index; i < event.results.length ; i++){
			if (event.results[i].isFinal){
				console.log("Final Result: " + event.results[i][0].transcript);
			}
			else{
				console.log("" + event.results[i][0].transcript);
			}
		}
	}  
}
else{
	
	console.log("Speech Recognition is not supported in this browser")
}