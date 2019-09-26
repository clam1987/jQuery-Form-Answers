$(document).ready(function() {
  // Select the form to append elements to the parent
  $("#form").append(
    // Creating Form div and adding <h1> and <p> tag in it.
    // You can append more then one element to a selector
    $("<h1/>").text("Contact Form"),
    $("<p/>").text("Form Exercise Answers"),
    //Create <form> tag and append to form
    $("<form/>", {
      //In place for Ajax calls * Do not worry about this for now.  
      action: "#",
      method: "#"
    }).append(
      //Creating Input Element and its Attributes
      //To do this create an object of the element
      $("<input/>", {
        type: "text",
        id: "firstName",
        name: "name",
        placeholder: "First Name"
      }),
      $("<input/>", {
        type: "text",
        id: "lastName",
        name: "name",
        placeholder: "Last Name"
      }),
      $("<input/>", {
        type: "text",
        id: "phone",
        name: "phone",
        placeholder: "Your Phone #"
      }),
      $("<input/>", {
        type: "text",
        id: "email",
        name: "email",
        placeholder: "Your Email"
      }),
      $("<input/>", {
        type: "text",
        id: "password",
        name: "password",
        placeholder: "Your Password"
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
      $("<input/>", {
        type: "submit",
        id: "submit",
        value: "Submit"
      })
    )
  );
});

//To Do: Impose conditions on elements
