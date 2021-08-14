
//打印红绿灯: 打印red，停1s，打印yellow，停2s，打印 green 停 5s。
// 继续打印red，停10s...，以此类推循环5次。

let red=()=>{
    return new Promise((resolve, reject)=>{
        console.log('red');
        setTimeout(()=>{
            resolve();
        },1000)
    });
};

let yellow=()=>{
    return new Promise((resolve, reject)=>{
        console.log('yellow');
        setTimeout(()=>{
            resolve();
        },2000)
    });
};

let green=()=>{
    return new Promise((resolve, reject)=>{
        console.log('yellow');
        setTimeout(()=>{
            resolve();
        },5000)
    });
};

let main=(curr,count)=>{
    red().then(()=>{
        return yellow();
    }).then(()=>{
        return green();
    }).then(()=>{
        curr++;
        if(curr<count){
            main(curr,count);
        }
    })
};
main(0,5);


