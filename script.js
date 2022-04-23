//makes a function that creates blocks simultaneously and updates their class name
function makeTimeBlocks(hour, existingTodo = "") {

    var currentHour = new Date().getHours();
    var ppof = "future";
    if(currentHour > hour) ppof = "past";
    if(currentHour === hour) ppof = "present";

//this code works perfectly with jQuery 
  $(".container").append(
    $(`<div class="row time-block">
    <div class="hour col-1">${hour}:00</div>
    <textarea name="" id="" cols="30" rows="3" class="description col-9 ${ppof}">${existingTodo}</textarea>
    <div class="btn saveBtn col-2"></div>
  </div><div><pre id="msg"></pre></div>`)
  );
}

for (var i = 9; i < 18; i++){
    makeTimeBlocks(i);
}

let schedules = [];

const addSchedule = (ev)=>{
    ev.preventDefault();
    let schedule = {
        id: document.getElementsByClassName(".hour").value,
        key: document.getElementsByClassName(".description").value
    }
    schedules.push(schedule);
    document.querySelector('form').reset();

    console.warn('added', {schedules});
    let pre = document.getElementById('#msg.pre');
    pre.textContent = '\n' + JSON.stringify(schedules, '\t', 2);

        localStorage.setItem('scheduleTodos', JSON.stringify(schedule) )
}
    document.addEventListener('DOMContentLoaded', ()=>{
        document.getElementsByClassName(".btn").addEventListener('click', addSchedule);
    });


// var container = document.querySelector(".container"); // starting of a new code without Jquery
// var textArea = document.querySelector(".textArea");
// var button = document.querySelector(".button");
// var hour = document.querySelector("hour")
// var currentHour = new Date().getHours();
// var ppof = "future"

// if(currentHour < hour){
//     element.className = "past"
// }
// if(currentHour === hour){
//     element.className = "present"
// }

// var  divClone;
// for(var i=0;i<9;i++)
//  {
//    divClone = container.cloneNode(true); // the true is for deep cloning
//    document.body.appendChild(divClone);
//    hour.innerHTML = i + 9;
//  }
 