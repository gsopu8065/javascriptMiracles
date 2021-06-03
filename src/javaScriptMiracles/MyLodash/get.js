const data = {
    movies: [
        {
            "title": "spider man"
        }
    ],
    user: {
        name: "srujan"
    }
}


const get = (obj, path, defaultVal) => {
    const levels = path.split(/[\.\[\]]/).filter(x => x);
    let root = obj;
    for(let level of levels){
        if(root){
            root = root[level];
        }
        else {
            return defaultVal;
        }
    }
    return root || defaultVal;
}


console.log(get(data, "movies[0].title") === "spider man")
console.log(get(data, "user.name") === "srujan")
console.log(get(data, "user['name']", 10) === 10)