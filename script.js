function makeTimeBlocks(hour, existingTodo = "") {

    var currentHour = new Date().getHours();
    var ppof = "future";
    if(currentHour > hour) ppof = "past";
    if(currentHour === hour) ppof = "present";


  $(".container").append(
    $(`<div class="row time-block">
    <div class="hour col-1">${hour}:00</div>
    <textarea name="" id="" cols="30" rows="3" class="description col-9 ${ppof}">${existingTodo}</textarea>
    <div class="btn saveBtn col-2"></div>
  </div>`)
  );
}

for (var i = 9; i < 18; i++){
    makeTimeBlocks(i);
}