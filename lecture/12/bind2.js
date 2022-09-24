const user = {
    name: 'Mike',
    showName: function() {
        console.log(`hello, ${this.name}`);
    },
};

user.showName();

let fn = user.showName;

fn();
fn.call(user);
fn.apply(user);

let boundFn = fn.bind(user);
boundFn();