const mike = {
    name : 'Mike',
};

function update(birthYear, occupation) {
    this.birthYear =birthYear;
    this.occupation = occupation;
}

const updateMike = update.bind(mike); // 이함수는 항상 mike를 this로 받음.

updateMike(1980,'police');
console.log(mike);