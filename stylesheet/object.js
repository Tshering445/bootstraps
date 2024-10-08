let cat = {name: "Tshering", color: "golden brown", age: 3};

let dog = new object();
dog.breed = "huskey";
dog.name = "jackey";
dog.isVaccinated = true;

document.getElementById("paral").innerHTML = "breed: " + dog.breed + "<br>name:" +dog["name"] + "<br>isVaccinated:" + dog.isVaccinated();

delete dog.isVaccinated;
console.log(dog);
dog.age = 5;
console.log(dog);


const person = {
    fname: "Tshering",
    lname: "Dorji",
    age: 21,
    fullname: function() {
        return this.frame + " " + this .lastname 
    }
}
document.getElementById("paral").innerHTML = person.fullname();