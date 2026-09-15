// Same rotation as Config.dayNumber: whole UTC days since 1970, modulo the list.
document.addEventListener("DOMContentLoaded", function () {
  var days = document.querySelectorAll(".rr-day");
  if (!days.length) return;
  days[Math.floor(Date.now() / 86400000) % days.length].classList.add("is-today");
});
