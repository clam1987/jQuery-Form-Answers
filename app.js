$(document).ready(function() {
  // Select the form to append elements to the parent
  $("#form").append(
    // Creating Form div and adding <h1> and <p> tag in it.
    $("<h1/>").text("Contact Form"),
    $("<p/>").text("Form Exercise Answers"),
    $("<form/>", {
      action: "#",
      method: "#"
    }).append(
      //Create <form tag and append to form
      $('<input/>', {
          type: "text",
          id: "name",
          name: "name",
          placeholder: "Your Name"
      }), // Creating Input Element and its Attributes
      $("<input/>", {
        type: "text",
        id: "email",
        name: "email",
        placeholder: "Your Email"
      }),
      $("<textarea/>", {
        rows: "5px",
        cols: "27px",
        type: "text",
        id: "msg",
        name: "msg",
        placeholder: "Message"
      }),
      $("<br/>"),
      $('<input/>', {
          type: "submit",
          id: "submit",
          value: "Submit"
      })
    )
  );
});
