//Home screen
import crown from '../img/crown.png'
import hadidja from '../img/hadidja.png'
import v1 from '../video/VID_1.mp4';
import v2 from '../video/VID_2.mp4';
import v3 from '../video/VID_3.mp4';
//products
import img_1 from '../img/img_1.jpg'
import img_2 from '../img/img_2.jpg'
import img_3 from '../img/img_3.jpg'
import img_4 from '../img/img_4.jpg'
import img_5 from '../img/img_5.jpg'
import img_6 from '../img/img_6.jpg'
import img_7 from '../img/img_7.jpg'
import img_8 from '../img/img_8.jpg'
import img_9 from '../img/img_9.jpg'
import img_10 from '../img/img_10.jpg'
import img_11 from '../img/img_11.jpg'
import img_12 from '../img/img_12.jpg'
import img_13 from '../img/img_13.jpg'
import img_14 from '../img/img_14.jpg'
import img_15 from '../img/img_15.jpg'
import img_16 from '../img/img_16.jpg'
import img_17 from '../img/img_17.jpg'
import img_18 from '../img/img_18.jpg'
import img_19 from '../img/img_19.jpg'
import img_20 from '../img/img_20.jpg'
import img_21 from '../img/img_21.jpg'



export const initialState = {
    screen: {
        crown: crown,
        hadidja: hadidja,
        v1: v1,
        v2: v2,
        v3: v3
    },
    cartItems: [
    ],
    products: [
        {
            id: 1,
            amount : 1,
            category: "Lorem ipsum dolor", 
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            image: img_1,
            price: 300,
            title: "Lorem ipsum dolor",
            buttonActive: false
        },
        {
            id: 2,
            amount : 1,
            category: "Lorem ipsum dolor", 
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            image: img_2,
            price: 300,
            title: "Lorem ipsum dolor",
            buttonActive: false
        },
        {
            id: 3,
            amount : 1,
            category: "Lorem ipsum dolor", 
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            image: img_3,
            price: 300,
            title: "Lorem ipsum dolor",
            buttonActive: false
        },
        {
            id: 4,
            amount : 1,
            category: "Lorem ipsum dolor", 
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            image: img_4,
            price: 300,
            title: "Lorem ipsum dolor",
            buttonActive: false
        },
        {
            id: 5,
            amount : 1,
            category: "Lorem ipsum dolor", 
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            image: img_5,
            price: 300,
            title: "Lorem ipsum dolor",
            buttonActive: false
        },
        {
            id: 6,
            amount : 1,
            category: "Lorem ipsum dolor", 
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            image: img_6,
            price: 300,
            title: "Lorem ipsum dolor",
            buttonActive: false
        },
        {
            id: 7,
            amount : 1,
            category: "Lorem ipsum dolor", 
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            image: img_7,
            price: 300,
            title: "Lorem ipsum dolor",
            buttonActive: false
        },
        {
            id: 8,
            amount : 1,
            category: "Lorem ipsum dolor", 
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            image: img_8,
            price: 300,
            title: "Lorem ipsum dolor",
            buttonActive: false
        },
        {
            id: 9,
            amount : 1,
            category: "Lorem ipsum dolor", 
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            image: img_9,
            price: 300,
            title: "Lorem ipsum dolor",
            buttonActive: false
        },
        {
            id: 10,
            amount : 1,
            category: "Lorem ipsum dolor", 
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            image: img_10,
            price: 300,
            title: "Lorem ipsum dolor",
            buttonActive: false
        },
        {
            id: 11,
            amount : 1,
            category: "Lorem ipsum dolor", 
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            image: img_11,
            price: 300,
            title: "Lorem ipsum dolor",
            buttonActive: false
        },
        {
            id: 12,
            amount : 1,
            category: "Lorem ipsum dolor", 
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            image: img_12,
            price: 300,
            title: "Lorem ipsum dolor",
            buttonActive: false
        },
        {
            id: 13,
            amount : 1,
            category: "Lorem ipsum dolor", 
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            image: img_13,
            price: 300,
            title: "Lorem ipsum dolor",
            buttonActive: false
        },
        {
            id: 14,
            amount : 1,
            category: "Lorem ipsum dolor", 
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            image: img_14,
            price: 300,
            title: "Lorem ipsum dolor",
            buttonActive: false
        },
        {
            id: 15,
            amount : 1,
            category: "Lorem ipsum dolor", 
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            image: img_15,
            price: 300,
            title: "Lorem ipsum dolor",
            buttonActive: false
        },
        {
            id: 16,
            amount : 1,
            category: "Lorem ipsum dolor", 
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            image: img_16,
            price: 300,
            title: "Lorem ipsum dolor",
            buttonActive: false
        },
        {
            id: 17,
            amount : 1,
            category: "Lorem ipsum dolor", 
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            image: img_17,
            price: 300,
            title: "Lorem ipsum dolor",
            buttonActive: false
        },
        {
            id: 18,
            amount : 1,
            category: "Lorem ipsum dolor", 
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            image: img_18,
            price: 300,
            title: "Lorem ipsum dolor",
            buttonActive: false
        },
        {
            id: 19,
            amount : 1,
            category: "Lorem ipsum dolor", 
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            image: img_19,
            price: 300,
            title: "Lorem ipsum dolor",
            buttonActive: false
        },
        {
            id: 20,
            amount : 1,
            category: "Lorem ipsum dolor",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            image: img_20,
            price: 300,
            title: "Lorem ipsum dolor",
            buttonActive: false
        },
        {
            id: 21,
            amount : 1,
            category: "Lorem ipsum dolor", 
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            image: img_21,
            price: 300,
            title: "Lorem ipsum dolor",
            buttonActive: false
        }
    ]
}

