var totalrows = data.length;
var cellsInRow = 5;
var div1 = document.getElementById("bit_coins");
var tbl = document.createElement("table");


let switchboolean = true;
let asc = true;

function tableformat() {
  tbl.id = "tableForDisplay";
  var tablecreate = document.getElementById("tableForDisplay");
  var column = document.createElement("th");
  column.textContent = "ID";
  tbl.appendChild(column);
  div1.appendChild(tbl);
  var column = document.createElement("th");
  column.textContent = "Name";
  column.addEventListener('click',function(){sortTable(1)});
  tbl.appendChild(column);
  div1.appendChild(tbl);

  var column = document.createElement("th");
  column.addEventListener('click',function(){sortTable(2)});
  column.textContent = "Price";
  tbl.appendChild(column);
  div1.appendChild(tbl);
  
  var column = document.createElement("th");
  column.addEventListener('click',function(){sortByRank()});
  var faupdown='<i class="fa fa-caret-down" style="font-size:24px"></i>'
  
  if(!switchboolean)
  {
    faupdown='<i class="fa fa-caret-up" style="font-size:24px"></i>'
  }

  column.innerHTML= "Rank" + faupdown;


  tbl.appendChild(column);
  div1.appendChild(tbl);

  var column = document.createElement("th");
  column.textContent = "Symbol";
  tbl.appendChild(column);
  div1.appendChild(tbl);

  for (var i = 0; i < totalrows; i++) {
    var row = document.createElement("tr");
    var column1 = document.createElement("td");
    var column2 = document.createElement("td");
    var column3 = document.createElement("td");
    var column4 = document.createElement("td");
    var column5 = document.createElement("td");
    var column6 = document.createElement("td");
    var column7 = document.createElement("td");

    column1.textContent = i + 1;
    row.appendChild(column1);
    tbl.appendChild(row);
    div1.appendChild(tbl);
    column2.textContent = data[i].name;
    row.appendChild(column2);
    tbl.appendChild(row);
    div1.appendChild(tbl);

    column3.textContent = data[i].price_usd;
    row.appendChild(column3);
    tbl.appendChild(row);
    div1.appendChild(tbl);

    column4.textContent = data[i].rank;
    row.appendChild(column4);
    tbl.appendChild(row);
    div1.appendChild(tbl);

    column5.textContent = data[i].symbol;
    row.appendChild(column5);
    tbl.appendChild(row);
    div1.appendChild(tbl);
  }
}
// for(var i=0;i<totalrows;i++) {
//     tableformat(i);
// }
function myFunction(n) {
  var input, filter, table, tr, td, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table1 = document.getElementById("tableForDisplay");
  tr = table1.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function sortTable(n) {
  console.log('inside sorttable')
  var table, rows,
    switching,
    i,
    x,
    y,
    swap,
    shouldSwitch,
    dir,
    switchcount = 0;
  table = document.getElementById("tableForDisplay");
  switching = true;
  dir = "asc";
  while (switching) {
    switching = false;
    rows = table.getElementsByTagName("TR");
    for (i = 0; i < rows.length - 1; i++) {
      swap = false;

      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];

      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          swap = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          swap = true;
          break;
        }
      }
    }
    if (swap) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}


function sortByRank() {
  if (switchboolean) {
    data.sort((a, b) => Number(a.rank) - Number(b.rank));
    tbl.innerHTML = "";
    tableformat(data);
    switchboolean = false;
  } else {
    data.sort(compareNumbers);
    tableformat(data);
    tbl.innerHTML = " ";
    tableformat(data);
    switchboolean = false;
    switchboolean = true;
  }
}
function compareNumbers(a, b) {
  return b.rank - a.rank;
}

window.onload = tableformat();
function hello(){
  console.log('am in hello function')
}