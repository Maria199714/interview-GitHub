function isValidate(str){
    let stack=[];
    let map=new Map();
    map.set('(',')');
    map.set('{','}');
    map.set('[',']');
    let kuohao='[]{}()';
    for(let i=0;i<str.length;i++){
        if(kuohao.includes(str[i])){
            if(map.has(str[i])){
                stack.push(map.get(str[i]));
            }else{
                let temp=stack.pop();
                if(temp!=str[i]){
                    return false;
                }
            }
        }
    }
    if(stack.length!==0){
        return false;
    }
    return true;
}


console.log(isValidate('()'));