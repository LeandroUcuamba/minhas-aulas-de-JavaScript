//Criação de promessas
const myPromise = new Promise((resolve, reject) => {
     
    const nome = "Leandro";//se mudar o nome imprime - reject;

    if(nome === "Leandro"){
       resolve('Usuario Leandro encontrado!');
    } else {
        reject('Usuario Leandro não encontrado!');
    }
})


//A promessa só executa quando encadeada um then();
myPromise.then((data) => {
    console.log(data);
})





//Encadeamento de then's;
const myPromise2 = new Promise((resolve, reject) => {
     
    const nome = "Leandro";

    if(nome === "Leandro"){
       resolve('Usuario Leandro encontrado!');
    } else {
        reject('Usuario Leandro não encontrado!');
    }
})


myPromise2.then((data) => {
    return (data).toLowerCase()
})
.then((stringModificada) => {
   console.log(stringModificada);
})




//Encadeamento do catch;
const myPromise3 = new Promise((resolve, reject) => {
     
    const nome = "Leandro";

    if(nome === "Leandro"){
       resolve('Usuario Leandro encontrado!');
    } else {
        reject('Usuario Leandro não encontrado!');
    }
})


myPromise3
.then((data) => {
    console.log(data);
})
.catch((erro) => {
    console.log("Aconteceu um erro: "+ erro);
})


//Resolver varias promessas;
const p1 = new Promise((resolve, reject) => {
    console.log("P1 ok");
})

const p2 = new Promise((resolve, reject) => {
    console.log("P2 ok");
})

const p3 = new Promise((resolve, reject) => {
    console.log("P3 ok");
})

const resolveAll = Promise.all([p1, p2, p3]).then((data) => {
    console.log(data);
})