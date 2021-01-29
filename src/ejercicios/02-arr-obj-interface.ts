let habiliadades: String[] = ['Bash','Counter','Healing'];

interface Personaje {
    nombre: String;
    hp: number;
    habilidades: String[];
    puebloNatal?: String;
}

const personaje: Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bash','Counter','Healing']
}

personaje.puebloNatal = 'Pueblo natal';

console.table(personaje);