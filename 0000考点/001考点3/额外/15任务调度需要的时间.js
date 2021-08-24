

//这个题目的核心其实只需要得到依赖时间最长的那一组的时间总和即可，
// 这个时间就是所有任务都执行完的时间。
function getTimes(tasks) {
    // 执行完所有时间总和
    let sum=0;
    // 存储所有任务的对象
    let nameArr={};
    // 依赖关系任务
    let depen=[];
    for (let i=0;i<tasks.length;i++){
        if (depen.indexOf(tasks[i].name)===-1){
            // 无依赖则赋值为空数组
            nameArr[tasks[i].name]=[tasks[i].time];
            dfs(tasks[i].name,nameArr[tasks[i].name],tasks,depen);
        }
    }

    for (let prop in nameArr){
        let count=0;
        nameArr[prop].forEach(item=>{
            count+=item;
        });
        count>sum?sum=count:sum;
    }
}


function dfs(depenName,arr,tasks,depen) {
    for (let i=0;i<tasks.length;i++){
        if (tasks[i].dependency&&tasks[i].dependency===depenName){
            // 如果依赖是这个任务，则存进数组中
            arr.push(tasks[i].time);
            depen.push(tasks[i].name);
            // 继续递归
            dfs(tasks[i].name,arr,tasks,depen);
        }
    }

}

