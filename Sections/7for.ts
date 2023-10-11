
export let limit = 20;

for ( let i = 0; i <= limit; i++) {

    if ( i === 5 ) {
        continue;
    }

    console.log ('let i:', i);

    if ( i=== 5 ) {
        break;
    }
}

console.log ('Fin del programa'); 