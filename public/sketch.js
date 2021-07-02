var input = document.getElementById('fileinput')
var teachers = [];
var m1 = [];
var m2 = [];
var d1 = [];
var d2 = [];
var d3 = [];

input.addEventListener('change', function () {

  let label = document.getElementById('label_alert');
  label.innerHTML = "Loaded records: ";

  readXlsxFile(input.files[0], { sheet: '教員一覧' }).then(function (rows, errors) {
    console.log(errors);
    for (row of rows) {
      teachers.push({
        name: row[0],
        count: {
          m1: {
            sup: 0,
            sub: 0
          },
          m2: {
            sup: 0,
            sub: 0
          },
          d1: {
            sup: 0,
            sub: 0
          },
          d2: {
            sup: 0,
            sub: 0
          },
          d3: {
            sup: 0,
            sub: 0
          }
        }
      });
    }

    console.log(teachers);
    // `rows` is an array of rows
    // each row being an array of cells.
  }, reason => {
    alert(reason);
    console.error(reason);
  });

  readXlsxFile(input.files[0], { sheet: 'M1' }).then(function (rows) {
    rows.shift();

    for (row of rows) {
      let number = row[0];
      let name_ja = row[1];
      let name_en = row[2];
      let title = row[3];
      let supervisor = row[4];
      m1.push({
        number: number,
        name_ja: name_ja,
        name_en: name_en,
        title: title,
        supervisor: supervisor
      })
    }
    label.innerHTML += "<li>M1: " + str(m1.length) + "</li>";
  });


  readXlsxFile(input.files[0], { sheet: 'M2' }).then(function (rows) {
    rows.shift();
    for (row of rows) {
      m2.push({
        number: row[0],
        name_ja: row[1],
        name_en: row[2],
        title: row[3],
        supervisor: row[4],
        sub1: row[5],
        sub2: row[6]
      })
    }
    label.innerHTML += "<li>M2: " + str(m2.length) + "</li>";

  }, reason => {
    alert(reason);
    console.error(reason);
  });

  readXlsxFile(input.files[0], { sheet: 'D1' }).then(function (rows) {
    rows.shift();
    for (row of rows) {
      d1.push({
        number: row[0],
        name_ja: row[1],
        name_en: row[2],
        title: row[3],
        supervisor: row[4],
        sub1: row[5],
        sub2: row[6]
      })
    }
    label.innerHTML += "<li>D1: " + str(d1.length) + "</li>";
  }, reason => {
    alert(reason);
    console.error(reason);
  });

  readXlsxFile(input.files[0], { sheet: 'D2' }).then(function (rows) {
    rows.shift();
    for (row of rows) {
      d2.push({
        number: row[0],
        name_ja: row[1],
        name_en: row[2],
        title: row[3],
        supervisor: row[4],
        sub1: row[5],
        sub2: row[6]
      })
    }
    label.innerHTML += "<li>D2: " + str(d2.length) + "</li>";
  }, reason => {
    alert(reason);
    console.error(reason);
  });

  readXlsxFile(input.files[0], { sheet: 'D3' }).then(function (rows) {
    rows.shift();
    for (row of rows) {
      d3.push({
        number: row[0],
        name_ja: row[1],
        name_en: row[2],
        title: row[3],
        supervisor: row[4],
        sub1: row[5],
        sub2: row[6]
      })
    }
    label.innerHTML += "<li>D3: " + str(d3.length) + "</li>";

  }, reason => {
    alert(reason);
    console.error(reason);
  });
  document.getElementById('button_calc').disabled = false;
});

// 各教員毎にスコアを計算し，ランダム副査の担当人数を算出する
function calc() {
  for (student of m1) {
    let t;
    t = teachers.filter(function (item) {
      return item.name == student.supervisor;
    });
    if (t.length > 1) alert("予期せぬエラーです．");
    t[0].count.m1.sup++;
  }

  for (student of m2) {
    let t;
    t = teachers.filter(function (item) {
      return item.name == student.supervisor;
    });
    if (t.length > 1) alert("予期せぬエラーです．");
    t[0].count.m2.sup++;

    t = teachers.filter(function (item) {
      return item.name == student.sub1;
    });
    if (t.length > 1) alert("予期せぬエラーです．");
    t[0].count.m2.sub++;

    t = teachers.filter(function (item) {
      return item.name == student.sub2;
    });
    if (t.length > 1) alert("予期せぬエラーです．");
    t[0].count.m2.sub++;
  }

  for (student of d1) {
    let t;
    t = teachers.filter(function (item) {
      return item.name == student.supervisor;
    });
    if (t.length > 1) alert("予期せぬエラーです．");
    console.log(t);
    t[0].count.d1.sup++;

    t = teachers.filter(function (item) {
      return item.name == student.sub1;
    });
    if (t.lendth > 0) t[0].count.d1.sub++;

    t = teachers.filter(function (item) {
      return item.name == student.sub2;
    });
    if (t.length > 0) t[0].count.d1.sub++;
  }


  for (student of d2) {
    let t;
    t = teachers.filter(function (item) {
      return item.name == student.supervisor;
    });
    if (t.length > 1) alert("予期せぬエラーです．");
    console.log(student);
    t[0].count.d2.sup++;

    t = teachers.filter(function (item) {
      return item.name == student.sub1;
    });
    if (t.length > 1) alert("予期せぬエラーです．");
    t[0].count.d2.sub++;

    t = teachers.filter(function (item) {
      return item.name == student.sub2;
    });
    if (t.length > 1) alert("予期せぬエラーです．");
    t[0].count.d2.sub++;
  }

  for (student of d3) {
    let t;
    t = teachers.filter(function (item) {
      return item.name == student.supervisor;
    });
    if (t.length > 1) alert("予期せぬエラーです．");
    t[0].count.d3.sup++;

    t = teachers.filter(function (item) {
      return item.name == student.sub1;
    });
    if (t.length > 1) alert("予期せぬエラーです．");
    t[0].count.d3.sub++;

    t = teachers.filter(function (item) {
      return item.name == student.sub2;
    });
    if (t.length > 1) alert("予期せぬエラーです．");
    t[0].count.d3.sub++;
  }

  let table = createElement('table');
  table.class("table table-hover table-sm");
  table.parent(select("#placehold_score_table"));

  let tr, th, td, thead;
  thead = createElement('thead');
  thead.parent(table);

  tr = createElement('tr');
  tr.parent(table);
  th = createElement('th');
  th.html("");
  th.parent(tr);
  th = createElement('th');
  th.html("主査");
  th.attribute("colspan", '5');
  th.parent(tr);
  th = createElement('th');
  th.html("副査");
  th.attribute("colspan", '5');
  th.parent(tr);

  thead = createElement('thead');
  thead.parent(table);


  tr = createElement('tr');
  tr.parent(thead)
  th = createElement('th');
  th.html("教員一覧");
  th.parent(tr);
  th = createElement('th');
  th.html("M1");
  th.parent(tr);
  th = createElement('th');
  th.html("M2");
  th.parent(tr);
  th = createElement('th');
  th.html("D1");
  th.parent(tr);
  th = createElement('th');
  th.html("D2");
  th.parent(tr);
  th = createElement('th');
  th.html("D3");
  th.parent(tr);
  th = createElement('th');
  th.html("M1");
  th.parent(tr);
  th = createElement('th');
  th.html("M2");
  th.parent(tr);
  th = createElement('th');
  th.html("D1");
  th.parent(tr);
  th = createElement('th');
  th.html("D2");
  th.parent(tr);
  th = createElement('th');
  th.html("D3");
  th.parent(tr);
  th = createElement('th');
  th.html("スコア");
  th.parent(tr);
  th = createElement('th');
  th.html("担当人数");
  th.parent(tr);


  // スコアの計算
  for (teacher of teachers) {
    let k = {
      sup: {
        m1: parseFloat(select('#m1_sup').value()),
        m2: parseFloat(select('#m2_sup').value()),
        d1: parseFloat(select('#d1_sup').value()),
        d2: parseFloat(select('#d2_sup').value()),
        d3: parseFloat(select('#d3_sup').value())
      },
      sub: {
        m1: parseFloat(select('#m1_sub').value()),
        m2: parseFloat(select('#m2_sub').value()),
        d1: parseFloat(select('#d1_sub').value()),
        d2: parseFloat(select('#d2_sub').value()),
        d3: parseFloat(select('#d3_sub').value())
      }
    }

    teacher.score =
      k.sup.m1 * teacher.count.m1.sup +
      k.sup.m2 * teacher.count.m2.sup +
      k.sup.d1 * teacher.count.d1.sup +
      k.sup.d2 * teacher.count.d2.sup +
      k.sup.d3 * teacher.count.d3.sup +
      k.sub.m1 * teacher.count.m1.sub +
      k.sub.m2 * teacher.count.m2.sub +
      k.sub.d1 * teacher.count.d1.sub +
      k.sub.d2 * teacher.count.d2.sub +
      k.sub.d3 * teacher.count.d3.sub;
  }

  let sum_score = 0.0;
  for (teacher of teachers) {
    sum_score += teacher.score;
  }

  let sum_score_inv = 0.0;
  for (teacher of teachers) {
    teacher.score_inv = sum_score / teacher.score;
  }

  for (teacher of teachers) {
    sum_score_inv += teacher.score_inv;
  }

  for (teacher of teachers) {
    teacher.capacity = Math.round(m1.length * (teacher.score_inv / sum_score_inv));
  }


  let tbody = createElement('tbody');
  tbody.parent(table);
  for (teacher of teachers) {
    tr = createElement('tr');
    tr.parent(tbody);
    td = createElement('td');
    td.html(teacher.name);
    td.parent(tr);
    td = createElement('td');
    td.html(teacher.count.m1.sup);
    td.parent(tr);
    td = createElement('td');
    td.html(teacher.count.m2.sup);
    td.parent(tr);
    td = createElement('td');
    td.html(teacher.count.d1.sup);
    td.parent(tr);
    td = createElement('td');
    td.html(teacher.count.d2.sup);
    td.parent(tr);
    td = createElement('td');
    td.html(teacher.count.d3.sup);
    td.parent(tr);

    td = createElement('td');
    td.html(teacher.count.m1.sub);
    td.parent(tr);
    td = createElement('td');
    td.html(teacher.count.m2.sub);
    td.parent(tr);
    td = createElement('td');
    td.html(teacher.count.d1.sub);
    td.parent(tr);
    td = createElement('td');
    td.html(teacher.count.d2.sub);
    td.parent(tr);
    td = createElement('td');
    td.html(teacher.count.d3.sub);
    td.parent(tr);

    td = createElement('td');
    td.html(teacher.score);
    td.parent(tr);

    td = createElement('td');
    td.html(teacher.capacity);
    td.parent(tr);

  }

  let tfoot = createElement('tfoot');
  tfoot.parent(table);
  tr = createElement('tr');
  tr.parent(tfoot);
  td = createElement('td');
  td.html('合計');
  td.parent(tr);

  td = createElement('td');
  let sum = 0;
  for (teacher of teachers) {
    sum += teacher.count.m1.sup;
  }
  td.html(sum);
  td.parent(tr);

  td = createElement('td');
  sum = 0;
  for (teacher of teachers) {
    sum += teacher.count.m2.sup;
  }
  td.html(sum);
  td.parent(tr);

  td = createElement('td');
  sum = 0;
  for (teacher of teachers) {
    sum += teacher.count.d1.sup;
  }
  td.html(sum);
  td.parent(tr);

  td = createElement('td');
  sum = 0;
  for (teacher of teachers) {
    sum += teacher.count.d2.sup;
  }
  td.html(sum);
  td.parent(tr);

  td = createElement('td');
  sum = 0;
  for (teacher of teachers) {
    sum += teacher.count.d3.sup;
  }
  td.html(sum);
  td.parent(tr);




  td = createElement('td');
  sum = 0;
  for (teacher of teachers) {
    sum += teacher.count.m1.sub;
  }
  td.html(sum);
  td.parent(tr);

  td = createElement('td');
  sum = 0;
  for (teacher of teachers) {
    sum += teacher.count.m2.sub;
  }
  td.html(sum);
  td.parent(tr);

  td = createElement('td');
  sum = 0;
  for (teacher of teachers) {
    sum += teacher.count.d1.sub;
  }
  td.html(sum);
  td.parent(tr);

  td = createElement('td');
  sum = 0;
  for (teacher of teachers) {
    sum += teacher.count.d2.sub;
  }
  td.html(sum);
  td.parent(tr);

  td = createElement('td');
  sum = 0;
  for (teacher of teachers) {
    sum += teacher.count.d3.sub;
  }
  td.html(sum);
  td.parent(tr);

  td = createElement('td');
  td.html('');
  td.parent(tr);


  td = createElement('td');
  sum = 0;
  for (teacher of teachers) {
    sum += teacher.capacity;
  }
  td.html(sum);
  td.parent(tr);



  document.getElementById("button_assign").disabled = false;
}


function assign() {
  select("#result_tbody").remove();
  let tbody = createElement('tbody');
  tbody.id('result_tbody');
  tbody.parent('#result_table');

  for (teacher of teachers) {
    teacher.capacity_count = teacher.capacity;
  }
  for (student of m1) {
    teachers = shuffle(teachers);
    let ts = teachers.filter(function (item) {
      return item.capacity_count > 0 && item.name != student.supervisor && item.name != student.sub1;
    });
    if (ts.length > 0) {
      ts[0].capacity_count--;
      student.sub2 = ts[0].name;
    }
  }
  console.log("teachers", teachers);


  for (student of m1) {
    let tr, td;
    tr = createElement('tr');
    tr.parent('#result_tbody');
    td = createElement('td');
    td.html(student.number);
    td.parent(tr);
    td = createElement('td');
    td.html(student.name_ja);
    td.parent(tr);
    td = createElement('td');
    td.html(student.name_en);
    td.parent(tr);
    td = createElement('td');
    td.html(student.supervisor);
    td.parent(tr);
    td = createElement('td');
    td.html(student.sub1);
    td.parent(tr);
    td = createElement('td');
    td.html(student.sub2);
    td.parent(tr);
  }
}

function setup() {
  noCanvas();
  select("#button_calc").mouseClicked(calc);
  select("#button_assign").mouseClicked(assign);
}
