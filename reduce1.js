const numbers = [175, 50, 25];

numbers.reduce(myfun);

function myfun(total,num){
    return total-num
}