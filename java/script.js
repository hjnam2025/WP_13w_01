const gifElement = document.getElementById('Door');


const staticSrc = gifElement.src;


const animatedSrc = gifElement.dataset.animatedSrc;

let isPlaying = false; 

gifElement.addEventListener('click', function() {
   
    if (!isPlaying) {
       
        gifElement.src = animatedSrc;
        isPlaying = true; 

        
        const gifDurationInMs = 1500; 

        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        
        timeoutId = setTimeout(function() {
            
            isPlaying = false; 

            console.log("GIF 재생 완료 (타이머 기반), 페이지 이동 시작");

         
            window.location.href = "./room-01/room01.html";

            
        }, gifDurationInMs);

  
    }
});


window.onload = function() {
    timeoutId = null;
    isPlaying = false; 
};
    
