function creatingCatObjects(catsArray){

    class Cat{

        constructor (name,age){
            this.name = name,
            this.age = age
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }


    }
    for(let i = 0; i<catsArray.length; i++){
        let [name,age] = catsArray[i].split(' ');

        let currentCat = new Cat(name,age);
        currentCat.meow();

    }

}

creatingCatObjects(['Mellow 2', 'Tom 5']);