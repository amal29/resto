function openNav() {
  document.getElementById("myNav").style.width = "100%";
//   document.getElementById("myNav").style.visibility = "visible";

  document.getElementById("btnid").style.display = "none";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  window.location.reload();
}

$(".js-counter").countTo();
