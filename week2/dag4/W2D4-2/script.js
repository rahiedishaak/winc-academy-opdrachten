// =============================
// // Opdracht 2a
// const car = {
//     brand: "Nissan",
//     getBrand: function(){
//         console.log(this.brand);
//     }
// };
   
// const getCarBrand = car.getBrand;

// getCarBrand();   
// // verwachte output: undefined, window is namelijk het object dat de function aanroept
// // output: undefined


// =============================
// // Opdracht 2b

// const car = {
//     brand: "Nissan",
//     getBrand: function(){
//         console.log(this.brand);
//     }
// };

// const getCarBrand = car.getBrand.bind(car);

// getCarBrand();
// // verwachte output: Nissan, via bind geven we aan dat this naar het car object moet verwijzen
// // output: Nissan


// =============================
// // Opdracht 2c
// const car = {
//     brand: "Nissan",
//     getBrand: function(){
//         console.log(this.brand);
//     }
// };
  
// const el = document.getElementById("btn");
// el.addEventListener("click", car.getBrand);

// Verwachte output: undefined, want niet car maar de button is de aanroepende function. cat.getBrand is dus als een variabele voor de addEventListener van de button
// Output: undefined


// =============================
// Opdracht 2d
// const car = {
//     brand: "Nissan",
//     getBrand: function(){
//         const printBrandName = function(){
//             console.log(this.brand);
//         };
//         return printBrandName();
//     }
// };

// car.getBrand();

// Verwachte output: undefined, want printBrandName is officieel geen method binnen het object car
// Output: undefined

// Vragen:
// - Waarnaar refereert het this keyword nu? 
// naar het car object, dankzij de bind function / het opslaan van this in een variable self
// - Hoe kan het dat je nu wel access hebt tot het **brand "Nissan"**?
// omdat je nu self.brand gebruikt. Self is een variabele met this als inhoud. Op het moment dat de self variabele werd gecreëerd verwees this naar het car object, dus eigenlijk is het car object de inhoud van self. Daarom dat het nu wel gaat werken, want self.brand === car.brand.

// const car = {
//     brand: "Nissan",
//     getBrand: function(){
//         const self = this;
//         // naast self kun je deze variable noemen zoals je wilt. 
//         // Je ziet ook vaak : that, _this, me, context, etc
//         const printBrandName = function(){
//             console.log(self.brand);
//         };
//         return printBrandName();
//     }
// };
   
// car.getBrand();
// Verwachte output: Nissan
// Output: Nissan


// =============================
// Opdracht 2e
const car = {
    brand: "Nissan",
    getBrand: function(){
        // the arrow function keeps the scope of "this" lexical
        const printBrandName = () => {   
            console.log(this.brand);
        };
        return printBrandName();
    }
};
   
car.getBrand();
// Output: Nissan, 