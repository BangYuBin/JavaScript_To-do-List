function printDate(){
    const date = new Date();
    const m = date.getMonth() + 1;
    const d = date.getDate();
    const week = new Array('일', '월','화','수','목','금','토');
    const dayOfWeek = week[date.getDay()];
    const html = document.getElementById("date");
    html.innerHTML = m +"월 "+d+"일 "+dayOfWeek+"요일";
}

setInterval(printDate, 1000);