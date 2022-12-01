
function Parent(){
    this.name = 'Kim';
  }
  var a = new Parent();
  
  a.__proto__.name = 'Park'; // { name: 'Park'}을 추가하라는 뜻.
  console.log(a.name); // kim
