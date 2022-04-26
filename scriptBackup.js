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
        <textarea name="" id="" cols="30" rows="3" class="description col-9 ${ppof}" data-info="${existingTodo}">${existingTodo}</textarea>
        <button class="btn saveBtn col-2" data-hour="${hour}" onclick="addSchedule"></button>
        </div><div><pre id="msg_${hour}"></pre></div>`)
        );
    }
    
    for (var i = 9; i < 18; i++){
        makeTimeBlocks(i);
    }
    
    let schedules = [];
    console.log(schedules);
    console.log(Object.values(schedules));
    const addSchedule = (ev)=>{
        console.log("CLICKED",ev.target.getAttribute('data-hour'))
            saveHour = ev.target.getAttribute('data-hour');
            descInfo = ev.target.getAttribute('data-info');
            const saveData = localStorage.setItem(saveHour,descInfo);
        var scheduleText = document.querySelector(".description").textContent;
        Object.value(schedule);
        
    ev.preventDefault();
    scheduleText = localStorage.getItem(saveData);
    }
    const allBtns = document.querySelector(".btn");
        for(var i = 0; i< allBtns.length; i++ ){
            var btn = allBtns[i];
            // var key = document.getElementsByClassName("data-hour").value;
            // var obj = {};

            btn.addEventListener('click', addSchedule);
            $(".container") = localStorage.setItem(schedules);
            console.log(schedules);
        };
   function displayLocal(){
        localStorage.getItem(schedules)
    }


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
 