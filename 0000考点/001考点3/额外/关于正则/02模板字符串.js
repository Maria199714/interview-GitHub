function tpl( templateStr ,  arr ) {
    // write code here
    const reg=/\{\{\$(\w+)\}\}/;//模板字符串正则
    if(reg.test(templateStr)){//判断模板里是否有模板字符串
        const num=reg.exec(templateStr)[1];//查找当前模板里第一个模板字符串的字段
        templateStr=templateStr.replace(reg,arr[num]);//将第一个模板字符串渲染
        return tpl(templateStr,arr);//递归的渲染并返回渲染后的结构
    }
    return templateStr;//如果模板没有模板字符串直接返回
}

console.log(tpl("<div>{{$0}}({{$1}})</div>",["好未来", "TAL"]));