import expressoImg from '../assets/coffees/expresso.png'
import americanoImg from '../assets/coffees/americano.png'
import expressoCremosoImg from '../assets/coffees/expresso_cremoso.png'
import cafeGeladoImg from '../assets/coffees/cafe_gelado.png'
import cafeLeiteImg from '../assets/coffees/cafe_com_leite.png'
import latteImg from '../assets/coffees/latte.png'
import capuccinoImg from '../assets/coffees/capuccino.png'
import macchiatoImg from '../assets/coffees/macchiato.png'
import mochaccinoImg from '../assets/coffees/mochaccino.png'
import chocolateQuenteImg from '../assets/coffees/chocolate_quente.png'
import cubanoImg from '../assets/coffees/cubano.png'
import havaianoImg from '../assets/coffees/havaiano.png'
import arabeImg from '../assets/coffees/arabe.png'
import irlandesImg from '../assets/coffees/irlandes.png'

export const data = [
    {
        id: 1,
        name: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        urlImage: expressoImg,
        tags: ['tradicional'],
        price: 4.90,
    },
    {
        id: 2,
        name: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        urlImage: americanoImg,
        tags: ['tradicional'],
        price: 5.90,
    },
    {
        id: 3,
        name: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa',
        urlImage: expressoCremosoImg,
        tags: ['tradicional'],
        price: 6.90,
    },
    {
        id: 4,
        name: 'Expresso Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        urlImage: cafeGeladoImg,
        tags: ['tradicional', 'gelado'],
        price: 5.90,
    },
    {
        id: 5,
        name: 'Café com Leite',
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        urlImage: cafeLeiteImg,
        tags: ['tradicional', 'com leite'],
        price: 9.90,
    },
    {
        id: 6,
        name: 'Latte',
        description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        urlImage: latteImg,
        tags: ['tradicional', 'com leite'],
        price: 9.90,
    },
    {
        id: 7,
        name: 'Capuccino',
        description: 'Bebida com canela feita com doses iguais de café, leite e espuma',
        urlImage: capuccinoImg,
        tags: ['tradicional', 'com leite'],
        price: 9.90,
    },
    {
        id: 8,
        name: 'Macchiato',
        description: 'Café expresso misturado com um pouco de leite quente e espuma',
        urlImage: macchiatoImg,
        tags: ['tradicional', 'com leite'],
        price: 9.90,
    },
    {
        id: 9,
        name: 'Mocaccino',
        description: 'Café expresso com calda de chocolate, pouco leite e espuma',
        urlImage: mochaccinoImg,
        tags: ['tradicional', 'com leite'],
        price: 9.90,
    },
    {
        id: 10,
        name: 'Chocolate Quente',
        description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        urlImage: chocolateQuenteImg,
        tags: ['especial', 'com leite'],
        price: 11.90,
    },
    {
        id: 11,
        name: 'Cubano',
        description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
        urlImage: cubanoImg,
        tags: ['especial', 'alcoólico', 'gelado'],
        price: 19.90,
    },
    {
        id: 12,
        name: 'Havaiano',
        description: 'Bebida adocicada preparada com café e leite de coco',
        urlImage: havaianoImg,
        tags: ['especial'],
        price: 14.90,
    },
    {
        id: 13,
        name: 'Árabe',
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        urlImage: arabeImg,
        tags: ['especial'],
        price: 14.90,
    },
    {
        id: 14,
        name: 'Irlandês',
        description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        urlImage: irlandesImg,
        tags: ['especial', 'alcoólico'],
        price: 17.90,
    },
]