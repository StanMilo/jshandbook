class Animal {

    sound () {
        console.log('sound')
    }

}

// let animal = new Animal()
// animal.sound()



var cat = {
    sound: function(){
        console.log('miau')
    }
}

// cat.sound()


var Dog = function () {

}

Dog.prototype = {

    name: 'Djole',

    sound: function () {

        console.log(this.getName())
    },

    getName: function () {
        return this.name
    }

}

// var dog = new Dog()
// dog.sound()
// console.log(dog)


class User {

}


class UserRepository {

    add (user){

        if (!(user instanceof User)) {

            throw 'Nije user instanca';
            return false;
        }
        console.log(user, 'Save user to db')

        // todo save ot storage
    }
}



let userRepo = new UserRepository()
userRepo.add(new User())
userRepo.add('kurcina')


