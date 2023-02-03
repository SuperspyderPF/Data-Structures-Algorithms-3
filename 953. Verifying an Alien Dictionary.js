
 isAlienSorted = (words, order)=> {
     hash = {};

     compare = (small, large) => {
         minLen = Math.min(small.length, large.length);
        
        for ( i = 0; i < minLen; i++) {
            if (hash[small[i]] > hash[large[i]]) return false;
            if (hash[small[i]] < hash[large[i]]) return true;
        }

        return large.length >= small.length ? true : false;
    };

    for ( i = 0; i < order.length; i++) {
        hash[order[i]] = i;
    }

    for ( i = 1; i < words.length; i++) {
        if (!compare(words[i - 1], words[i])) return false;
    }

    return true;
};