//creo array con lista di mail 
mailArray=['a@mail.com', 'b@mail.com', 'c@mail.com', 'd@mail.com'];
//prompt in cui l'utente inserisce l'email
let x = prompt('inserisci la tua mail');
console.log(x)
//booleana impostata a false 
let y = false ;

/*ciclo per controllare chi effettua l'accesso se: 
x(dati inseriti dall'utente dal prompt) == mailArray (lista email scritte da me)
 se la x è uguale ad una delle 4 mail qui sopra allora y è vera*/
for (let index = 0; index < mailArray.length; index++) {
    if(x==mailArray[index]){
        y = true;
    }
}
/* essendo che y= true solo nella condizione qui sopra, imposto
come si deve comportare il programma nel caso in cui sia vera e nel caso in cui sia
falsa*/
if (y) {
    alert("YOU JOINED THE COMPANY")
    console.log("LOGIN SUCCESSFULL")
}else{
    alert("Access Denied")
    console.log("YOU SHALL NOT PASS")
}
