// By Elena Sosa
// 02/19/2018
// Course: CPNT-262-A - Web Client & Server Prog. (JavaScript)
// Instructor: Heather Tovey
// Assignment: FINAL PROJECT | This website wants to inform potential customers about available wine tours, what is included in each tour package, and how to book one.

// Mobile Menu

var button = document.querySelector("#hamburger-button");
var menu = document.querySelector("#menu");
var closeButton = document.querySelector("#close-button");

function openMenu() {
  menu.className = "menu";
}

function closeMenu() {
  menu.className = "menu closed";
}

button.addEventListener("click", openMenu);
closeButton.addEventListener("click", closeMenu);

// Footer Current Date
var date = new Date();
document.getElementById("currentDate").innerHTML =
  "You're visiting us on " + date;

// Form Validations

$(document).ready(function() {
  $("#error").hide();
  $("#registerBtn").on("click", function(event) {
    event.preventDefault();
    console.log("hey");

    var invalid = false;
    $("#user-register input").each(function() {
      if ($(this).val() === "") {
        invalid = true;
      }
    });

    if (invalid) {
      $("#error").fadeIn(500);
    }
    if (!invalid) {
      $("#error").hide();
    }
  });
});

// Contact Agents
const expertNames = [
  "Riian Coetzee",
  "Ana Buthelezi",
  "Armand Mabaso",
  "Esther Roodt"
];
const expertPhone = [
  "+27-55-555-5556",
  "+27-55-555-5557",
  "+27-55-555-5558",
  "+27-55-555-5559"
];
const expertEmail = [
  " r_coetzee@mondovino.com",
  " a_buthelezi@mondovino.com",
  " a_mabaso@mondovino.com",
  " a_roodt@mondovino.com"
];

$(expertNames).each(function(i) {
  $("h5")[i].append(expertNames[i]);
  $(".expert-box p")[i].append(expertPhone[i]);
  $(".expert-box span")[i].append(expertEmail[i]);
});

//Flying plane
$(document).ready(function() {
  let loopPlane = () => {
    $("#flying-plane").css({ left: 0 });
    $("#flying-plane").animate(
      {
        left: "+=1500"
      },
      10000,
      "swing",
      function() {
        loopPlane();
      }
    );
  };
  loopPlane();
});
