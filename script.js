//makes a function that creates blocks simultaneously and updates their class name
function makeTimeBlocks(hour, existingTodo = "") {
  var currentHour = new Date().getHours();
  var ppof = "future";
  if (currentHour > hour) ppof = "past";
  if (currentHour === hour) ppof = "present";

  //this code works perfectly with jQuery
  $(".container").append(
    $(`<div class="row time-block">
        <div class="hour col-1">${hour}:00</div>
        <textarea name="" id="" cols="30" rows="3" class="description col-9 ${ppof}" data-info="${`hour${hour}-des`}">${existingTodo}</textarea>
        <button class="btn saveBtn col-2" data-hour="${hour}"></button>
        </div><div><pre id="msg_${hour}"></pre></div>`)
  );
}

for (var i = 9; i < 18; i++) {
    var saveText = localStorage.getItem(i)
    console.log(saveText)
  makeTimeBlocks(i, saveText);
}

let saveBtns = $(".saveBtn");

let description = $(".description");
//  let time = target.getAttribute('data-hour')//how do i target the button?
for (var i = 0; i < saveBtns.length; i++) {
  saveBtns[i].addEventListener("click", (e) => {
     var hourTime = e.target.dataset.hour;
     var descriptionText = e.target.parentElement.children[1].value;
    if (descriptionText == "") {
      return alert("please type in a valid schedule");
    }
    localStorage.setItem(hourTime, descriptionText);

    showSchedule();
  });
}

function showSchedule() {}
