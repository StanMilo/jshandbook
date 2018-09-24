class Http {

    get (url) {
        return fetch(url)
            .then(resp => resp.json())
            .catch(function(error) {
                console.log(error);
            });
    }

    post (url, data) {
        return fetch(url, {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(resp => resp.json())
            .catch(function(error) {
                console.log(error);
            });
    }

}


class UsersRepository {

    constructor (http) {
        this.url = 'https://jsonplaceholder.typicode.com/users'
        this.http = http
    }

    add (user) {
        return this.http
            .post(this.url, user)
            .then((res) => {
                console.log('Added user: ', res)
            })
    }

    findAll () {
        return this.http
            .get(this.url)
            .then((users) => {
                console.log(users)
            })
    }

}

let repo = new UsersRepository(new Http());

repo.add({
    user_id: 345345,
    first_name: 'John',
    last_name: 'Smith'
})

repo.findAll()
