 
//  function setASD(){
//     var opacity=10;
//         let notification = document.getElementById("notification");

//     let anThongBao=setInterval(()=>{
//         if(opacity<=0){
//             clearInterval(anThongBao);
//             notification.style.display='none';
//         }
//         else
//            { 
//             notification.style.opacity=opacity;
//             opacity-=1;
//         }
        
//     },100)
//  }


// // setTimeout(setASD,2000);
//         let notification = document.getElementById("notification");
//         notification.innerHTML="Nội dung mới";
let titles=document.querySelectorAll('.title');
titles.forEach(element=>element.style.color='blue');