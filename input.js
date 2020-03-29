document.getElementById('inputButton').addEventListener('click',add_task);

//할 일 추가 함수
function add_task(){
    let task = document.querySelector('.input');
    if(!(task.value)){
        alert("내용을 입력해주세요.");
    }

    let tr = document.createElement('tr');
    //tr.setAttribute('class','table_tr');
    //체크박스 생성
    let input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('class', 'btn-chk custom-control-input');
    input.addEventListener('click', fun_checked);

    //삭제 버튼 생성    
    let remove = document.createElement('button');
    let remove_Text = document.createTextNode("삭제");
    remove.setAttribute('class', 'btn-rem btn btn-danger');
    //remove.setAttribute('onclick', 'fun_remove()'); -> 왜 제대로 작동안되는지 알아보기
    remove.addEventListener('click', fun_remove);
    remove.appendChild(remove_Text);

    //list만들기
    let td01 = document.createElement('td');
    td01.appendChild(input);
    tr.appendChild(td01);

    let td02 = document.createElement('td');
    td02.innerHTML = task.value;
    td02.setAttribute('class', 'content');
    tr.appendChild(td02);

    let td03 = document.createElement('td');
    td03.appendChild(remove);
    tr.appendChild(td03);

    document.getElementById('listLayer').appendChild(tr);
    task.value = '';
}
//할 일 삭제 함수
function fun_remove(){
    let text = this.parentNode.previousSibling;
    console.log(text);
    let content = text.innerText + "을(를) 정말 삭제하시겠습니까?"
    let re = confirm(content);
    if(re){
        let parent = document.getElementById('listLayer');
        let removeFac = this.parentNode.parentNode; 
        parent.removeChild(removeFac);
    }
    else{
        alert("삭제를 취소하였습니다.");
    }
}

//체크 시 이벤트??
function fun_checked(){
    let text = this.parentNode.nextSibling;
    console.log(text);
    if(this.checked){
        text.setAttribute('class', 'checked_task');
    }
    else{
        text.setAttribute('class', 'content');
    }
}