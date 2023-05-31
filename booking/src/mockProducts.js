import coworkingImg from "./imgs/img2.jpg"

const mockProducts =[
    {
        product_id:1,
        url_image: coworkingImg,
        name:"coworking",
        description:"un espacio de coworking",
        price:100,
        availability:50,
        category_id:1,
        notAvailableStart: new Date(2021,1,1).getTime(),
        notAvailableEnd: new Date(2021,1,15).getTime(),
        address_id:1
    },
    {
        product_id:2,
        url_image: coworkingImg,
        name:"coworking",
        description:"un espacio de coworking",
        price:150,
        availability:50,
        category_id:1,
        notAvailableStart: new Date(2021,1,1).getTime(),
        notAvailableEnd: new Date(2021,1,15).getTime(),
        address_id:2
    },
    {
        product_id:3,
        url_image: coworkingImg,
        name:"coworking",
        description:"un espacio de coworking",
        price:200,
        availability:50,
        category_id:1,
        notAvailableStart: new Date(2021,1,1).getTime(),
        notAvailableEnd: new Date(2021,1,15).getTime(),
        address_id:3
    },
    {
        product_id:4,
        url_image: coworkingImg,
        name:"coworking",
        description:"un espacio de coworking",
        price:250,
        availability:50,
        category_id:2,
        notAvailableStart: new Date(2021,1,1).getTime(),
        notAvailableEnd: new Date(2021,1,15).getTime(),
        address_id:4
    },
    {
        product_id:5,
        url_image: coworkingImg,
        name:"coworking",
        description:"un espacio de coworking",
        price:300,
        availability:50,
        category_id:3,
        notAvailableStart: new Date(2021,1,1).getTime(),
        notAvailableEnd: new Date(2021,1,15).getTime(),
        address_id:5
    }
];

export const chips =[
    {key:0, label:"Categoria 1"},
    {key:1, label:"Categoria 2"},
    {key:2, label:"Categoria 3"},
    {key:3, label:"More filters"},
]

export default mockProducts;