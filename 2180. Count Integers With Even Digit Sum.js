const countEven = (num) => {
    let count = 0;

    for(let i=2;i<=num;i++){
        let str = String(i);
        let sum = 0;
        for(let j=0;j<str.length;j++){
            sum += (+str[j]);
        }
        if(sum % 2 === 0) count++;
    }

    return count;
};