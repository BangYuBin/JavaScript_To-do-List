document.getElementById('inputButton').addEventListener('click',add_task);

//할 일 추가 함수
function add_task(){
    let task = document.querySelector('.input').value;
    if(!task){
        alert("내용을 입력해주세요.");
    }

    let tr = document.createElement('tr');
    //체크박스 생성
    let input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('class', 'btn-chk');

    //삭제 버튼 생성    
    let remove = document.createElement('button');
    let remove_Text = document.createTextNode("삭제");
    remove.setAttribute('class', 'btn-rem');
    remove.setAttribute('onclick', 'fun_remove()');
    remove.appendChild(remove_Text);

    //list만들기
    let td01 = document.createElement('td');
    td01.appendChild(input);
    tr.appendChild(td01);

    let td02 = document.createElement('td');
    td02.innerHTML = task;
    tr.appendChild(td02);

    let td03 = document.createElement('td');
    td03.appendChild(remove);
    tr.appendChild(td03);

    document.getElementById('listLayer').appendChild(tr);
    task = '';
}