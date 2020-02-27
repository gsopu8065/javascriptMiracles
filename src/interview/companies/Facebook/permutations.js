var permute = function(nums) {



    var getPerms = function(a){

        if(a.length == 1)
            return a;

        var res = [];
        for(var i=0;i<a.length;i++){

            var prePerms = a.slice(0, i)
            console.log("pre",prePerms);
            var postPerms = a.slice(i+1)
            console.log("post",postPerms);

            var temp = getPerms(prePerms.concat(postPerms))
            console.log("temp",temp);

            for(var j=0;j<temp.length;j++){
                res.push([a[i]].concat(temp[j]))
            }
        }
        return res;
    }

    return getPerms(nums);

};


console.log(permute([1,2]))