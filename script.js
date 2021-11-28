console.log("Inside Script.js");

$("form").on("submit", (event) => {
  event.preventDefault();
  console.log("Add Clicked!");
  const title = $("input").val();
  const card = `
    <div class="card my-2">
        <div class="card-block ml-3">
            <button id="delete" type="button" class="btn btn-danger float-right my-2">Delete</button>
            <button id="done" type="button" class="btn btn-success float-right my-2 mr-2">Done</button>
            <p class="card-title lead my-2">${title}</p>
        </div>
    </div>
    `;
  $(".cards").append(card);

  // reset input
  $("form").trigger("reset");
});
