(function () {
    var index=0;
    function fn() {
        if (index<100){
            index++;
            setTimeout(function () {
                fn();
            },5000)
        }
    }
    fn();
})();