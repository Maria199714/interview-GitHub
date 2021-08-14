var newScript=document.createElement('script');
newScript.src='https://www.add.com?callback=fn';
document.body.appendChild(newScript);
function fn(data) {
    console.log(data);
}