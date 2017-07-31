/**
 * DEVICE GETUSERMEDIA
 */
//getUserMedia stream
function openSteam() {
   const config = {
      audio: false,
      video: true
   };

   // Older browsers might not implement mediaDevices at all, so we set an empty object first
   if (navigator.mediaDevices === undefined) {
      navigator.mediaDevices = {};
   }

   const getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

   return navigator.mediaDevices.getUserMedia(config);
}

//play video stream
function playStream(idVideoTag, stream) {
   const video = document.getElementById(idVideoTag);

   if (webrtc_detected_browser_webkit()) {
      video.srcObject = stream;
      video.play();
   } else {
      video.mozSrcObject = stream;
      video.play();
   };
}

// webrtc Detected Browser: true = chrome, false = firefox
function webrtc_detected_browser_webkit() {
   if (navigator.webkitGetUserMedia) {
      // console.log("chrome");
      return true;
   }

   if (navigator.mozGetUserMedia) {
      // console.log("firefox");
      return false;
   }
}



openSteam()
   .then(stream => {
      playStream('remoteStream', stream);
      console.log('remoteStream');
      console.log(stream);
   })
   .catch(err => console.log('Error: ', err));


openSteam()
   .then(stream => {
      playStream('localStream', stream);
      console.log('localStream');
      console.log(stream);
   })
   .catch(err => console.log('Error: ', err));



// // ---------- getUserMedia
// console.log(navigator.mediaDevices.getUserMedia({
//    audio: false,
//    video: true
// }));


// // ---------- webkitGetUserMedia
// console.log(navigator.mediaDevices.webkitGetUserMedia({
//    audio: false,
//    video: true
// }));


// // ---------- mozGetUserMedia
// console.log(navigator.mediaDevices.mozGetUserMedia({
//    audio: false,
//    video: true
// }));