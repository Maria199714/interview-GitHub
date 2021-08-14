const fs=require('fs');
function myFs(fileName) {
    return new Promise((resolve,reject)=>{
        fs.readFile(fileName,'utf-8',(err,data)=>{
            if (err) reject(err);
            resolve(data);
        });
    });
}