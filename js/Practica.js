/**/
function standar(){
    let name_save = document.getElementById("user_name").value
    let lastname_save = document.getElementById("last_name").value
    console.log(name_save, lastname_save)

}

/* Funcion anonima o clousure */


const function_clousure = function (){
    console.log('Ejecutando la funcion anonima')
}

/*Funcion flecha*/

const function_arrow = () =>{console.log('Ejecutando arrow function')}

const age_validate = () => {
    let user_age = document.getElementById("user_age").value;
    if(user_age < 18 )
        console.log('User es menor de edad');
    else
        console.log('User es mayor de edad');
};

const age_validate2 = () => {
    document.getElementById("user_age").value < 18
    ? console.log('User es menor de edad') 
    : console.log ('User es mayor de esdad');
};











