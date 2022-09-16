var btn_add = document.getElementById("submit-data");
btn_add.onclick = function () {
  var usernamein = document.getElementById("input-username").value;
  var tabe = document.getElementById("tbody");
  var emailin = document.getElementById("input-email").value;
  var addressin = document.getElementById("input-address").value;
  var admin = document.getElementsByName("box")[0];
  var a = 0;
  for (var i = 0; i < tabe.rows.length; i++) {
    var cell = tabe.rows[i].cells[0].innerHTML;
    if (cell === usernamein) {
      tabe.rows[i].cells[1].innerHTML = emailin;
      tabe.rows[i].cells[2].innerHTML = addressin;
      if (admin.checked) {
        tabe.rows[i].cells[3].innerHTML = "X";
      } else {
        tabe.rows[i].cells[3].innerHTML = "-";
      }
      a++;
    }
  }
  if (a === 0) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var del = document.createElement("td");
    var adm = document.createElement("td");
    td1.innerHTML = usernamein;
    td2.innerHTML = emailin;
    del.innerHTML = addressin;
    if (admin.checked) {
      adm.innerHTML = "X";
    } else {
      adm.innerHTML = "-";
    }
    var tab = document.getElementById("tbody");
    tab.appendChild(tr);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(del);
    tr.appendChild(adm);
  }
};
var btn_empty = document.getElementById("empty-table");
btn_empty.onclick = function () {
  var artTable = document.getElementById("t");
  var artBody = artTable.tBodies[0];
  artBody.parentNode.outerHTML = artBody.parentNode.outerHTML.replace(
    artBody.innerHTML,
    ""
  );
};
var btn_image = document.getElementById("input-image");
btn_image.onclick = function () {
  var _td = document.getElementById("ima");
  var _img = document.createElement("img");
  _img.setAttribute("id", "floatImage");
  _img.setAttribute("src", "icon.png");
  _img.setAttribute("onclick", "clickImage()");
  _td.appendChild(_img);
};
