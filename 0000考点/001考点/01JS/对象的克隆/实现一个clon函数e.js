Object.prototype.clone=function () {
    var o=this.constructor===Array?[]:{};
    for (let e in this){
        o[e]=typeof this[e]==='object'?this[e].clone():this[e];
    }
    return o;
};


console.log([1,2,3].clone());