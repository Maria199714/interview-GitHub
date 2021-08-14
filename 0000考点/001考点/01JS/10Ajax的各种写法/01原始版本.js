//版本1
function ajax1(url) {
    let xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function () {
        if(xhr.readyState==4){
            if(xhr.status>=200&&xhr.status<300){
                let string=xhr.responseText;
                let object=JSON.parse(string);
            }
        }
    };
    xhr.open('get',url);
    xhr.send();
}