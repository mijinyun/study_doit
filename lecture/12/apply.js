const mike = {
    name: 'Mike',
};

const tom = {
    name : 'Tom',
};

function showThisName() {
    console.log(this.name); 
}

function update(birthYear, occupation){
    this.birthYear = birthYear;
    this.occupation = occupation;
};

update.apply(mike, [1999,'singer']);
console.log(mike);