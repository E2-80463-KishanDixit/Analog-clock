setInterval(() =>{
   d =new Date();
   htime = d.getHours();
   mtime = d.getMinutes();
   stime = d.getSeconds();
   hrotation =30*htime + mtime/2;
   mrotation =6*mtime;
   srotation =6*stime;
   
   hour.style.transform = `rotate(${hrotation}deg)`;
   minute.style.transform = `rotate(${mrotation}deg)`;
   seconds.style.transform = `rotate(${srotation}deg)`;
},1000);


// function run(){
//    document.body.style.background = "url('clock1.png') no-repeat ";
// }

// let change = document .getElementById('clockcontainar');
// change.addEventListener('onclick',function run(){
//    let btn = document.getElementById('dial-change');
//    // let change = document .getElementById('clockcontainar');
//    if(change.style.background == "url('clock.png') no-repeat"){
//       change.style.background ="url('clock1.png') no-repeat";
//    }
//    else {
//       change.style.background ="url('clock.png') no-repeat";
//    }

// });

function run(){
      let btn = document.getElementById('dial-change');
      let change = document .getElementById('clockcontainar');
      if(change.style.background == "url('clock1.png') no-repeat"){
        change.style.background = "url('clock1.png') no-repeat";
      }
      else {
          change.style.background = "url('clock1.png') no-repeat";
          

      }
}





















// let change = document.getElementById("dial-change")
// change.addEventListener("mousehover" ,function run(){
//    document.getElementById('clockcontainar').style.background = URL("clock1")
// });
