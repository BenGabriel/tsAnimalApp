import { AnimalProps, Details } from "./types";

export const AnimalClasses: AnimalProps[] = [
    {
        id: 1,
        name: 'Cats',
        image: require('../assets/cat.png')
    },
    {
        id: 2,
        name: 'Dogs',
        image: require('../assets/dog.png')
    },
    {
        id: 3,
        name: 'Parrots',
        image: require('../assets/bird.png')
    },
    {
        id: 4,
        name: 'Bunnies',
        image: require('../assets/bunny.png')
    },
    {
        id: 5,
        name: 'Hen',
        image: require('../assets/hen.png')
    },
]

export const AnimalList: Details[] = [
    {
        id: 1,
        name: 'Sola',
        image: require('../assets/catb.png'),
        distance: 3.6,
        type: 'Abyssinian Cat',
        years: 7,
        color: "#c5d0d4"
    },
    {
        id: 2,
        name: 'Orion',
        image: require('../assets/catb.png'),
        distance: 7.6,
        type: 'Abyssinian Cat',
        years: 1.1,
        color: "#ebd3ad"
    },
]