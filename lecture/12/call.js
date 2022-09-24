const mike = {
    name: 'Mike',
};

const tom = {
    name : 'Tom',
};

function showThisName() {
    console.log(this.name); //여기서 this는 윈도우를 가리킴. window.name
}

// showThisName();
// showThisName.call(mike);
// showThisName.call(tom);

function update(birthYear, occupation){
    this.birthYear = birthYear;
    this.occupation = occupation;
};

update.call(mike, 1999,'singer');

console.log(mike);