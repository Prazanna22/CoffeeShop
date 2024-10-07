import a from "../assets/all/1.jpg";
import b from "../assets/all/2.png";
import c from "../assets/all/3.png";
import d from "../assets/all/4.png";
import e from "../assets/all/5.jpg";
import f from "../assets/all/6.jpg";
import h from "../assets/all/8.jpg";
import i from "../assets/all/9.jpg";
import j from "../assets/all/10.jpg";
import k from "../assets/all/11.jpg";
import l from "../assets/all/12.jpg";
import m from "../assets/all/13.jpg";
import n from "../assets/all/14.jpg";
import o from "../assets/all/15.jpg";
import p from "../assets/all/16.jpg";
import q from "../assets/all/17.jpg";
import r from "../assets/all/18.jpg";
import s from "../assets/all/9.jpg";
import t from "../assets/all/20.jpg";
import u from "../assets/all/21.png";
import nonveg from '../assets/other/nonveg.png';
import veg from '../assets/other/veg.png';
import java from '../assets/all/java.jpg'
import caffee from '../assets/all/caffee americano.jpg'
export const Product = [
    {
        id: 1,
        image: a,
        name: "Iced Caffè Americano",
        price: 315, 
        veg: veg,
        discription:"Espresso shots are topped with water to produce a light layer of crema, then served over ice.",
        kcal: "TALL(354 mL) .0 kcal",
        slug: "BestSeller",
        isBestSeller:true
    },
    {
        id: 2,
        image: b,
        name: "Cookie Creme Latte",
        price: 435,
        discription:"Handcrafted espresso from the world's top 3% Arabica with steamed milk, hints of vanilla, and decadent java chip. Topped with an overload of whipped vanilla topping, crunchy cookie crumbs. The perfect indulgent treat.",
        veg: veg,
        kcal: "SHORT(237 mL) .344 Kcal",
        slug: "Drink"
    },
    {
        id: 3,
        image: c,
        name: "Pumpkin Spice Latte",
        price: 430,
        veg: veg,
        discription:"Our signature Pumpkin Spice Latte is back – combining handcrafted espresso from the world's top 3% Arabica, steamed milk flavored with pumpkin spice and dusted with pumpkin spice mix to perfectly capture the essence of fall.",
        kcal: "SHORT(Short Stardust Macchiato) .",
        slug: "Drink"
    },
    {
        id: 4,
        image: d,
        name: "Saffron Pistachio Latte",
        price: 456,
        veg: veg,
        discription:"Made from our handcrafted Diwali Blend espresso, a signature blonde roast topped with pistachio-flavored steamed milk and finished off with a delicious Saffron Flavoured cream foam with rose crumbs to reel in those Diwali feels.",
        kcal: "TALL(Iced Tall Stardust Macchiato) .",
        slug: "Drink"
    },
    {
        id: 5,
        image: e,
        name: "Caffè Americano",
        discription:"Rich, full-bodied espresso with hot water in true European style. Energy per Serving Size - Nil , Allergen - Nil.",
        price: 278,
        veg: veg,
        kcal: "SHORT() .",
        slug: "Drink"
    },
    {
        id: 6,
        image: f,
        name: "Cappuccino",
        price: 299,
        veg: veg,
        discription:"Dark, Rich in flavour espresso lies in wait under a smoothed and stretched layer of thick foam. It's truly the height of our baristas' craft.",
        kcal: "SHORT(237 ML) .104 Kcal",
        slug: "Drink"
    },
    {
        id: 7,
        image: h,
        name: "Caffe Latte",
        price: 304,
        veg: veg,
        discription:"Our dark, Rich in flavour espresso balanced with steamed milk and a light layer of foam. A perfect coffee warm up.",
        kcal: "SHORT(Short Latte) .104 kcal",
        slug: "Drink"
    },
    {
        id: 9,
        image: i,
        name: "Caffè Mocha",
        price: 341,
        veg: veg,
        discription:"We combine our Rich in flavour, full-bodied espresso with bittersweet mocha sauce and steamed milk- Contains Milk An average active adult requires 2000 kcal energy per day, however, calorie needs may vary.",
        kcal: "SHORT(237 ML) .232 kcal",
        slug: "Drink"
    },
    {
        id: 10,
        image: j,
        name: "Caramel Macchiato",
        price: 252,
        veg: veg,
        discription:"Freshly steamed milk with vanilla-flavored syrup is marked with espresso and topped with caramel drizzle.",
        kcal: "SHORT(237 ML) .162 kcal",
        slug: "Drink",
    },
    {
        id: 11,
        image: k,
        name: "Chocolate Cortado",
        price: 351,
        veg: veg,
        discription:"A perfect espresso shot and mocha sauce, topped with steamed milk.",
        kcal: "PER SERVE (120 ML) - 88 Kcal",
        slug: "Drink",
    },
    {
        id: 12,
        image: l,
        name: "Doppio Espresso",
        price: 278,
        veg: veg,
        discription:"Our smooth signature Espresso Roast and its caramelly sweetness is at the very heart of everything we do.",
        kcal: "PER SERVE (45 ML) - 0 Kcal",
        slug: "Drink",
    },
    {
        id: 13,
        image: m,
        name: "Tandoori Soya Chaap Wrap",
        price: 357,
        veg: veg,
        discription:"Soft succulent soya chaap in tandoori marinade, cooked to a juicy perfection. Encased in a spinach wrap with assorted bell peppers in makhni gravy.",
        kcal: "484Kcal",
        slug: "Food",
    },
    {
        id: 14,
        image: n,
        name: "BBQ Chicken Wrap",
        price: 367,
        veg: veg,
        discription:"Smoky Chicken with chopped aromatic vegetables tossed in our in house BBQ sauce come together with shredded lettuce wrapped in a soft tortilla.",
        kcal: "380Kcal",
        slug: "Food",
    },
    {
        id: 15,
        image: o,
        name: "Bake In Roast Chicken Baguette SW",
        price: 477,
        veg: nonveg,
        discription:"Roasted chicken meets assorted bell peppers and onions in brown sauce. Served in a freshly baked baguette",
        kcal: "210g/706kcal",
        slug: "Food",
    },
    {
        id: 16,
        image: p,
        name: "Bake In Mushroom Cheese Melt Baguette SW",
        price: 472,
        veg: nonveg,
        discription:"Hearty mushrooms topped with melted yellow cheddar cheese in a herbed aioli garnished with chopped parsley served in a freshly baked baguette",
        kcal: "210g/541kcal",
        slug: "Food",
    },
    {
        id: 17,
        image: q,
        name: "Almond Biscotti From StarBucks",
        price: 160,
        veg: veg,
        kcal: "PER SERVE (50 g) - 409 kCal",
        slug: "ReadyToEat",
    },
    {
        id: 18,
        image: java,
        name: "Java Chip Frappuccino",
        price: 388,
        discription:"Mocha sauce and Frappuccino® chips blended with with Frappuccino® roast coffee and milk and ice, then topped with whipped vanilla topping and mocha drizzle to bring you endless java joy.",
        veg: veg,
        kcal: "TALL(354 ML) .392 kcal",
        slug: "BestSeller",
        isBestSeller:true
    },
    {
        id: 19,
        image: caffee,
        name: "Caffee Americano",
        price: 348,
        discription:"Rich, full-bodied espresso with hot water in true European style. Energy per Serving Size - Nil , Allergen - Nil.",
        veg: veg,
        kcal: "MEDIUM(377 Ml) .0 kcal",
        slug: "BestSeller",
    },
    {
        id: 20,
        image: r,
        name: "Iced Velvet Vanilla Latte",
        price: 435,
        veg: veg,
        discription:"Rich in texture, smooth, and creamy latte elevated with vanilla and a dairy twist – Half and half, served over ice.",
        kcal: "TALL(354 mL) .383 kca",
        slug: "BestSeller",
        isBestSeller:true
    },
    {
        id: 21,
        image: u,
        name: "Basil Tomato Mozzarella Cheese Sandwich",
        price: 383,
        veg: veg,
        discription:"Tomato and mozzarella slices on a layer of basil sauce sandwiched in a multigrain bread",
        kcal: "PER SERVE (170 gm) - 484Kcal",
        slug: "Food",
        isBestSeller:true
    },
    {
        id: 22,
        image: s,
        name: "Iced Caffè Mocha",
        price: 378,
        veg: veg,
        discription:"Espresso combined with bittersweet mocha sauce and milk and served over ice. Topped with whipped vanilla topping.",
        kcal: "TALL(354 mL) .291 kcal",
        slug: "BestSeller",
    },
    {
        id: 23,
        image: t,
        name: "Flat White",
        price: 330,
        veg: veg,
        discription:"Expertly steamed milk poured over shots of ristretto and finished with a Starbucks signature dot",
        kcal: "SHORT(237 mL) .104 kcal",
        slug: "BestSeller",
    },
];
