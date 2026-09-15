// Same rotation as Config.dayNumber: whole UTC days since 1970, modulo the list.
document.addEventListener("DOMContentLoaded", function () {
  var rows = document.querySelectorAll("#daily-rotation tbody tr");
  if (!rows.length) return;
  var today = rows[Math.floor(Date.now() / 86400000) % rows.length];
  today.classList.add("daily-today");
  today.cells[1].insertAdjacentHTML("beforeend", '<span class="today-tag">Today</span>');
});
