/*
    ===== Código de TypeScript =====
*/
interface Reproductor {
    volumen: number;    
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}


const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: ' Mess',
    detalles: {
        autor: 'Ed sheeran',
        anio: 2015
    }
}

//const {volumen, segundo, cancion, detalles: {autor, anio} } = reproductor;
const {volumen, segundo, cancion, detalles } = reproductor;
const { autor, anio} = detalles;

/* console.log('EL volumen actual es de: ', volumen);
console.log('EL segundo actual es de: ', segundo);
console.log('EL cancion actual es de: ', cancion);
console.log('EL autor es: ', autor); */

const dbz: string[] =['Goku','Vegeta','Truks'];
const [ p1, p2, p3] = dbz;

console.log('Personaje 1:', p1);
console.log('Personaje 2:', p2);
console.log('Personaje 3:', p3);