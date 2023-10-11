export function heroesThatStartsWith ( nameList: string[], letter : string ){

    letter = letter.toUpperCase();
    let newNameList: string[] = []

    for ( let i =0; i < nameList.length; i++){
        let name= nameList[i];

        if (name.startsWith (letter) ) {
            newNameList.push (name)
        }
    }

    return newNameList;

}


//for ( let name of nameList ) {
  //  if (name.startsWith (letter)) {
    //    newNameList.push (name);
    //}
//}


let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel']; 
let herosWithLetterS = heroesThatStartsWith( heroes, 'S' ); 
console.log( herosWithLetterS ); // She Hulk, Spiderman