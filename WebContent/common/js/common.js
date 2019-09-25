oldNum = 0;
commonNum = 0;
plus = false;
minus = false;
multiply = false;
devide = false;

function input(n) {
    commonNum = (commonNum * 10) + n;
    this.screen1();
}
function screen1() {
    src = $(".screen");
    src.empty();
    src.html(commonNum);
}
function continues() {
    if(plus) oldNum = oldNum + commonNum;
    else if (minus) oldNum = oldNum - commonNum;
    else if (devide) oldNum = oldNum / commonNum;
    else if (multiply) oldNum = oldNum * commonNum;
    
    plus = false;
    minus = false;
    multiply = false;
    devide = false;
    commonNum = 0;
    
    src = $(".screen");
    src.empty();
    src.html(oldNum);
}
function plusFx() {
    plus = true;
    oldNum = commonNum;
    commonNum = 0;
}
function minusFx() {
    
}
function multiplyFx() {
    
}
function devideFx() {
    
}