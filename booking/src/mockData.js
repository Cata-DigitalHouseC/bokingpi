import coworkingImg from "./imgs/img2.jpg"

const mockData =[
    {
        url_image: coworkingImg,
        title: "Fincas",
        description:"espacio de coworking - Categoria 1"
    },
    {
        url_image: coworkingImg,
        title: "Salones",
        description:"espacio de coworking - Categoria 2"
    },
    {
        url_image: coworkingImg,
        title: "Oficinas",
        description:"espacio de coworking - Categoria 3"
    },
    {
        url_image: coworkingImg,
        name:"coworking",
        description:"un espacio de coworking",
        precio:1000,
        disponibilidad:50,
        notAvailableStart: new Date(2021,1,1).getTime(),
        notAvailableEnd: new Date(2021,1,15).getTime()
    },
    {
        url_image: coworkingImg,
        name:"coworking",
        description:"un espacio de coworking",
        precio:1000,
        disponibilidad:50,
        notAvailableStart: new Date(2021,1,1).getTime(),
        notAvailableEnd: new Date(2021,1,15).getTime()
    },
    {
        url_image: coworkingImg,
        name:"coworking",
        description:"un espacio de coworking",
        precio:1000,
        disponibilidad:50,
        notAvailableStart: new Date(2021,1,1).getTime(),
        notAvailableEnd: new Date(2021,1,15).getTime()
    },
    {
        url_image: coworkingImg,
        name:"coworking",
        description:"un espacio de coworking",
        precio:1000,
        disponibilidad:50,
        notAvailableStart: new Date(2021,1,1).getTime(),
        notAvailableEnd: new Date(2021,1,15).getTime()
    },
    {
        url_image: coworkingImg,
        name:"coworking",
        description:"un espacio de coworking",
        precio:1000,
        disponibilidad:50,
        notAvailableStart: new Date(2021,1,1).getTime(),
        notAvailableEnd: new Date(2021,1,15).getTime()
    }
];

export const chips =[
    {key:0, label:"Categoria 1"},
    {key:1, label:"Categoria 2"},
    {key:2, label:"Categoria 3"},
    {key:3, label:"More filters"},
]

export default mockData;