function FxF(f1, f2) {
    //将浮点数转换为字符串
    f1 += '';
    f2 += '';
    var f1Len = f1.split('.')[1].length,
        f2Len = f2.split('.')[1].length;
    if (f1Len) {
        f1 = f1.replace('.', '');//把小数转换为整数
    }
    if (f2Len) {
        f2 = f2.replace('.', '');
    }
    return f1 * f2 / Math.pow(10, f1Len + f2Len);
}
console.log(FxF(0.01, 0.3));