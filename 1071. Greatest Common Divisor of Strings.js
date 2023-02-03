const gcdOfStrings = function(str1, str2) {
    if((str1 + str2) !== (str2 + str1)) return "";

    const gcd = (a, b) => {
        if (!b) return a;
        return gcd(b, a % b);
    }

    return str2.substring(0, gcd(str1.length, str2.length));
}


//one line
gcdOfStrings=(x,y)=>{if((x+y)!==(y+x))return"";v=(a,b)=>{if(!b)return a;return v(b,a%b);};return y.substring(0,v(x.length,y.length));}