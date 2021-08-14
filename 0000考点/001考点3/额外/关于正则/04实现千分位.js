

function format(number){
    let reg =/(\d{1,3})(?=(\d{3})+(\.\d*)?$)/g;
    return number.toString().replace(reg,'$&,');
}

console.log(format(122434343));