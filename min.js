let canvas = document.querySelector('#canvas');
//the next line is to get the canvas to 2d ...
let context = canvas.getContext('2d'); // make more research on the getContext

let videoPlay =document.querySelector('#video');

if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)
{
    // getUserMedia =>helps us to get the media we want use 
    navigator.mediaDevices.getUserMedia({video:true}).then(stream =>{
        videoPlay.srcObject =stream;
        videoPlay.play();
    })
}
//to capture the image but not saving it to
document.getElementById('snap').addEventListener('click',()=>
{
    context.drawImage(video ,0 ,0,310,160);
})