let email = document.getElementById("Email")
let password = document.getElementById("Password")
let submit557 = document.getElementById("LOL")

submit557.onclick = function() {
  let emailValue = email.value;
  let passwordValue = password.value;
  if (emailValue === "aliopiilz123@gmail.com" && passwordValue === "657") {
    console.log("welcome buss");
    window.location.href = "/storage🪪";
  } else {
    console.log("no");
    document.getElementById("h77").innerHTML = "password or email is not correct"
  }
  if (emailValue === "mohammed" && passwordValue === "50054") {
        window.location.href = "/mohammed-profile/profile-page(1).html"
}
}