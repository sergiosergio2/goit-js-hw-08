
// const iframe = document.querySelector('iframe');
// const player = new Vimeo.Player(iframe);

// player.on('timeupdate', function(event) {
//     console.log(event);
//     let second = Math.floor(event.seconds);
//     if(second - window.localStorage.getItem('lastSecond') >= 1){
//         console.log(second);
//         window.localStorage.setItem('TimeStamp', event.seconds);
//         window.localStorage.setItem('lastSecond', second);
//     }
// });

// player.getVideoTitle().then(function(title) {
//     console.log('title:', title);
// });

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const player = new Player('vimeo-player', {
    id: "vimeo-player",
    width: 640
});
const onTimeUpDate = function(data){
    localStorage.setItem("videoplayer-current-time", data.seconds);
}
player.on('timeupdate', throttle(onTimeUpDate, 1000));

player.setCurrentTime(localStorage.getItem("videoplayer-current-time"))
.then().catch(
    function(error) {
    switch (error.name) {
        case 'RangeError':
           console.log('error-time')
            break;

        default:
            console.log('error')
        
            break;
    }
});