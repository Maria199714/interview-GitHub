function myTrim1(str){
    return str.replace(/^\s+|\s+$/g,'')
}

console.log(myTrim1('   dfjdkj   mdkjf  '));



//不使用正则表达式
function myTrim2(str) {
    let head=0;
    let foot=str.length;
    for (let i=0;i<str.length;i++){
        if (str[i]===' ') head++;
        else break;
    }
    for (let i=str.length-1;i>0;i--){
        if (str[i]===' ') foot--;
        else break;
    }
    return str.substr(head,foot);
}