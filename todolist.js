var a = document.getElementById('todoListBox');
var List = [];
var i = 0;
var no = 0;
var j = 0;


function showTodoList() {
    var tags = "";
    for (j = 0; j < List.length; j++) {
        tags += "<h1>" + (j + 1) + "." + " " + List[j] + "</h1>";

    }
    a.innerHTML = tags;

}

function plustodo() {

    List[i] = prompt("해야할일을 입력하시오");
    if (List[i] == '') {
        alert("삐!");
    }
    i++;
}

function deletetodo() {
    no = prompt("삭제할 번호를 누르시오")
    List.splice(no - 1, 1);     
    i--;
}

function fixtodo() {
    var fix = "";
    no = prompt("수정할 번호를 누르시오");
    List[no-1] = prompt('수정하시오');
        
}