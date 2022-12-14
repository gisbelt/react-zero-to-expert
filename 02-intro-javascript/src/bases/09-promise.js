import { getHeroeById } from './08-import-export'

//Promise
//resolve: will be executed when the promise is successful or everything is correct
//reject: we are going to execute it when the promise fails or something cannot be fulfilled
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const heroe = getHeroeById(2);
        resolve(heroe);
    }, 2000) //run after 2 seconds, then resolve
});
// Do something when promise finished 
promise.then((heroe) => {
    console.log('heroe', heroe);
})
.catch(err => console.warn(err));


/********************************************/


// It is better do promiseby this way, to can use id as parameter 
const getHeroeByIdAsync = (id) =>{
    //there is to return to can use the promise (then, catch, finally)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);
            if(heroe){
                resolve(heroe);
            }else{
                reject('The heroe is could not found');
            }            
        }, 2000) //run after 2 seconds, then resolve
    });
}
getHeroeByIdAsync(10)
.then(heroe => console.log('Heroe:', heroe))
.catch(err => console.warn(err)) 


/********************************************/


//then: promise is done correctly
//catch: error, or reject, or exception
//finally: something to execute after 'then' and 'catch'