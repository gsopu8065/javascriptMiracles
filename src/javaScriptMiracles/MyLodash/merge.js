const myMerge = (obj1, obj2) => {
    for(let key in obj2){
        if(obj2[key])
            obj1[key] = mergeValues(obj1[key], obj2[key]);
    }
    return obj1;
}

const mergeValues = (value1, value2) => {
    if(Array.isArray(value1) && Array.isArray(value2)){
       return value1.concat(value2);
    }
    else if(isObject(value1) && isObject(value2)){
        return myMerge(value1, value2);
    }
    return value2;
}

const isObject = (val) => val && typeof val === 'object';

const user1 = {
    name: "user1",
    age: 15,
    skills: ["js", "html", "ts"],
    books: [{name: "Css in depth"}],
    links: {
        'google': "https://google.com",
        'facebook': "https://fb.com"
    }
}

const user2 = {
    name: "user2",
    age: 25,
    skills: ["ml", "ai"],
    books: [{name: "atomic habits"}],
    links: {
        'twitter': "https://twitter.com"
    }
}

console.log(myMerge(user1, user2))