let plusFive = (Number) =>{ // นำค่าเลขที่กรอก +อีก 5 ตามบรรทัดล่าง
    return Number + 5;
};

let f = plusFive;

console.log(plusFive(3)) //8
console.log(f(9)); //14