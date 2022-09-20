let user = { name : 'Mike'};
let info = { age: 30};
let fe = ['JS','React'];
let lang = ['Korean','English'];

user = Object.assign({}, 
    user,
    info,
    {
        skills : []
    });
    fe.forEach(item => {
        user.skills.push(item)
    })
    lang.forEach(item => {
        user.skills.push(item)
    })

console.log(user);


// user.skill = [...fe, ...lang]