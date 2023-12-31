class User {
    constructor(obj){
        this.name = obj.name;
        this.age = obj.age;
        this.followers = obj.followers;
    }

    getInfo(){
        console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
    }
}

const poly = new User({
    name: 'Poly',
    age: 3,
    followers: 17,
  });

  poly.getInfo();