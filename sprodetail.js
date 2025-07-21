
  let prevScrollPos = window.pageYOffset;
const header = document.getElementById("header");

// Mobile pe bhi smooth kaam karega
window.addEventListener("scroll", function () {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos || currentScrollPos < 50) {
    // Scroll up or near top
    header.style.top = "0";
  } else {
    // Scroll down
    header.style.top = "-100px";
  }

  prevScrollPos = currentScrollPos;
});

document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuIcon = document.getElementById("mobile-menu-icon");
  const navbar = document.getElementById("navbar");
  const menuIcon = document.getElementById("menu-icon");

  mobileMenuIcon.addEventListener("click", function () {
    navbar.classList.toggle("active");

    if (navbar.classList.contains("active")) {
      menuIcon.classList.remove("bi-list");
      menuIcon.classList.add("bi-x");
      // Disable scroll
      document.body.style.overflow = "hidden";
    } else {
      menuIcon.classList.remove("bi-x");
      menuIcon.classList.add("bi-list");
      // Enable scroll
      document.body.style.overflow = "auto";
    }
  });
});


const items=[

    {
    id:"ch1", title:"home/Car Hoodies",
    name:"Bmw black hoodie",  price:"$120.00",
    description: "The car hoodie brings automotive passion to your wardrobe with a bold BMW-inspired design. Featuring the iconic BMW logo and sleek detailing, it’s perfect for car enthusiasts who love to make a statement. Made from 100% premium cotton, this hoodie offers exceptional comfort, durability, and a stylish fit for everyday wear.",
    image: "https://thepixelfashion.com/cdn/shop/files/hoodie_front_-_2024-12-22T174058.255_f5de1dd4-c68e-4ea3-ae1b-de588d9e2155.png?v=1735892017&width=360",
    guideimg:"https://cdn.shopify.com/s/files/1/0640/3168/6811/files/Untitled_Facebook_Cover_11_480x480.png?v=1729784748",
    link:"sproduct.html?id=ch1",
    },
    {
    id:"ch2", title:"home/Car Hoodies",
    name:"V12 blue hoodie",  price:"$120.00",
    description: "The car hoodie brings automotive passion to your wardrobe with a bold Ferrari-inspired design. Featuring the iconic Ferrari logo and sleek detailing, it’s perfect for car enthusiasts who love to make a statement. Made from 100% premium cotton, this hoodie offers exceptional comfort, durability, and a stylish fit for everyday wear.",
    image: "https://thepixelfashion.com/cdn/shop/files/navyhoodiefront_42.png?v=1734873821&width=360",
    guideimg:"https://cdn.shopify.com/s/files/1/0640/3168/6811/files/Untitled_Facebook_Cover_11_480x480.png?v=1729784748",
    link:"sproduct.html?id=ch2",
    },
    {
    id:"sh1", title:"home/Sport Hoodies",
    name:"B56 black hoodie", price:"$100.00",
    description: "The sports hoodie celebrates the spirit of cricket with a bold Babar 56-inspired design. Showcasing the iconic number and sleek detailing, it’s a must-have for fans of the legendary batsman. Made from 100% premium cotton, this hoodie combines style, comfort, and durability, making it perfect for everyday wear or cheering on your favorite cricketer.",
    image: "https://thepixelfashion.com/cdn/shop/files/hoodie_front_-_2024-12-15T115905.553.png?v=1734246069&width=360",
    guideimg:"https://cdn.shopify.com/s/files/1/0640/3168/6811/files/Untitled_Facebook_Cover_11_480x480.png?v=1729784748",
    link:"sproduct.html?id=sh1",
    },
    {
    id:"sh2", title:"home/Sport Hoodies",
    name:"V18 blue hoodie", price:"$100.00",
    description: "The sports hoodie celebrates the excellence of cricket superstar Virat Kohli with a bold V18-inspired design. Featuring his iconic number and sleek detailing, this hoodie is perfect for fans who admire Kohli’s unmatched skill and passion for the game. Made from 100% premium cotton, it combines comfort, durability, and style, making it ideal for everyday wear or showing support for the cricket legend.",
    image: "https://thepixelfashion.com/cdn/shop/files/navy_hoodie_front_49.png?v=1736605834&width=360",
    guideimg:"https://cdn.shopify.com/s/files/1/0640/3168/6811/files/Untitled_Facebook_Cover_11_480x480.png?v=1729784748",
    link:"sproduct.html?id=sh2",
    },
    {
    id:"sh3", title:"home/Sport Hoodies",
    name:"Cr7 black hoodie", price:"$100.00",
    description: "The sports hoodie pays tribute to one of football’s greatest icons, Cristiano Ronaldo, with a bold CR7-inspired design. Featuring his legendary number 7 and sleek CR7 branding, this hoodie embodies style, passion, and excellence on and off the pitch. Made from 100% premium cotton, it offers superior comfort, durability, and a perfect fit, making it ideal for fans who want to showcase their admiration for Ronaldo in their everyday wear.",
    image: "https://thepixelfashion.com/cdn/shop/files/hoodiefront_97.png?v=1732298342&width=360",
    guideimg:"https://cdn.shopify.com/s/files/1/0640/3168/6811/files/Untitled_Facebook_Cover_11_480x480.png?v=1729784748",
    link:"sproduct.html?id=sh3",
    },
    {
    id:"sh4", title:"home/Sport Hoodies",
    name:"M10 black hoodie", price:"$100.00",
    description: "The sports hoodie celebrates the unparalleled legacy of Lionel Messi with a bold Messi 10-inspired design. Adorned with the iconic number 10 and a striking Messi-themed style, it reflects the elegance and skill of the football maestro. Crafted from high-quality 100% cotton fabric, this hoodie ensures all-day comfort and long-lasting wear, making it a must-have for fans of the football genius and his incredible achievements.",
    image: "https://thepixelfashion.com/cdn/shop/files/hoodiefront-2024-11-22T202258.955.png?v=1732289105&width=360",
    guideimg:"https://cdn.shopify.com/s/files/1/0640/3168/6811/files/Untitled_Facebook_Cover_11_480x480.png?v=1729784748",
    link:"sproduct.html?id=sh4",
    },
    {
    id:"hh1", title:"home/Hero Hoodies",
    name:"Bat black hoodie", price:"$90.00",
    description: "The hero hoodie channels the power and mystery of Batman with a bold, iconic design. Featuring the legendary Bat symbol and sleek detailing, this hoodie is perfect for fans of the Dark Knight who want to carry his aura of strength and justice. Made from 100% premium cotton, it offers unmatched comfort, durability, and a stylish fit for everyday wear or heroic adventures.",
    image: "https://thepixelfashion.com/cdn/shop/files/hoodiefront_100.png?v=1728656052&width=360",
    guideimg:"https://cdn.shopify.com/s/files/1/0640/3168/6811/files/Untitled_Facebook_Cover_11_480x480.png?v=1729784748",
    link:"sproduct.html?id=hh1",
    },
    {
    id:"hh2", title:"home/Hero Hoodies",
    name:"Flash black hoodie", price:"$90.00",
    description: "The hero hoodie brings the electrifying speed and energy of The Flash to life with a striking design. Showcasing the iconic lightning bolt emblem, this hoodie is a must-have for fans of the Scarlet Speedster. Crafted from 100% high-quality cotton, it ensures superior comfort, long-lasting wear, and a perfect fit for those who love to embody the spirit of their favorite hero.",
    image: "https://thepixelfashion.com/cdn/shop/files/hoodiefront-2024-10-10T235931.261.png?v=1728656282&width=360",
    guideimg:"https://cdn.shopify.com/s/files/1/0640/3168/6811/files/Untitled_Facebook_Cover_11_480x480.png?v=1729784748",
    link:"sproduct.html?id=hh2",
    },

    {
    id:"ch3", title:"home/Car Hoodies",
    name:"Amg black hoodie",  price:"$120.00",
    description: "The sports hoodie brings luxury and performance together with a bold Mercedes-AMG-inspired design. Featuring the iconic AMG logo and sleek detailing, this hoodie is perfect for car enthusiasts who admire the power and precision of Mercedes engineering. Made from 100% premium cotton, it offers unmatched comfort, durability, and a stylish fit for everyday wear.",
    image: "https://thepixelfashion.com/cdn/shop/files/hoodiefront-2024-11-16T122040.984.png?v=1731741977&width=360",
    guideimg:"https://cdn.shopify.com/s/files/1/0640/3168/6811/files/Untitled_Facebook_Cover_11_480x480.png?v=1729784748",
    link:"sproduct.html?id=ch3",
  
    },
    {
    id:"ch4", title:"home/Car Hoodies",
    name:"Bugatti black hoodie",  price:"$120.00",
    description: "The sports hoodie takes inspiration from the legendary Bugatti Chiron, showcasing a sleek design that embodies speed and elegance. Featuring the iconic Bugatti logo and bold accents, it’s a must-have for fans of this automotive masterpiece. Crafted from 100% premium cotton, this hoodie ensures superior comfort, durability, and a stylish look, perfect for car lovers.",
    image: "https://thepixelfashion.com/cdn/shop/files/hoodieback_69.png?v=1734879279&width=360",
    guideimg:"https://cdn.shopify.com/s/files/1/0640/3168/6811/files/Untitled_Facebook_Cover_11_480x480.png?v=1729784748",
    link:"sproduct.html?id=ch4",
    },
    {
    id:"ch5", title:"home/Car Hoodies",
    name:"911 black hoodie",  price:"$120.00",
    description: "The sports hoodie brings the elegance and performance of the Porsche 911 to life with a sleek design featuring its iconic logo and refined detailing. Crafted for fans of this legendary sports car, it offers a perfect blend of style and comfort. Made from 100% premium cotton, this hoodie is ideal for showcasing your love for automotive excellence.",
    image: "https://thepixelfashion.com/cdn/shop/files/hoodieback_45.png?v=1732715433&width=360",
    guideimg:"https://cdn.shopify.com/s/files/1/0640/3168/6811/files/Untitled_Facebook_Cover_11_480x480.png?v=1729784748",
    link:"sproduct.html?id=ch5",
    },
    {
    id:"ch6", title:"home/Car Hoodies",
    name:"Mus black hoodie",  price:"$120.00",
    description: "The sports hoodie pays tribute to the iconic Ford Mustang with a bold design inspired by its legendary logo and powerful heritage. Perfect for car enthusiasts, this hoodie combines style and passion, showcasing the spirit of the Mustang. Made from 100% premium cotton, it ensures superior comfort, durability, and a sleek fit for everyday wear or car meets.",
    image: "https://thepixelfashion.com/cdn/shop/files/navyhoodieback_17.png?v=1734877244&width=360",
    guideimg:"https://cdn.shopify.com/s/files/1/0640/3168/6811/files/Untitled_Facebook_Cover_11_480x480.png?v=1729784748",
    link:"sproduct.html?id=ch6",
    },
    {
    id:"sh5", title:"home/Sport Hoodies",
    name:"Pak blue hoodie", price:"$100.00",
    description: "The sports hoodie of champions Pakistan is a tribute to the pride and glory of Pakistan cricket. Featuring a bold design with the iconic Pakistan logo and “Champions” detailing, it’s perfect for fans who celebrate their team’s victories. Made from 100% premium cotton, this hoodie offers unmatched comfort, durability, and a stylish fit, ideal for everyday wear or game day excitement.",
    image: "https://thepixelfashion.com/cdn/shop/files/navy_hoodie_front_47.png?v=1736255456&width=360",
    guideimg:"https://cdn.shopify.com/s/files/1/0640/3168/6811/files/Untitled_Facebook_Cover_11_480x480.png?v=1729784748",
    link:"sproduct.html?id=sh5",
    },
    {
    id:"sh6", title:"home/Sport Hoodies",
    name:"V18 black hoodie", price:"$100.00",
    description: "The sports hoodie celebrates the excellence of cricket superstar Virat Kohli with a bold V18-inspired design. Featuring his iconic number and sleek detailing, this hoodie is perfect for fans who admire Kohli’s unmatched skill and passion for the game. Made from 100% premium cotton, it combines comfort, durability, and style, making it ideal for everyday wear or showing support for the cricket legend.",
    image: "https://thepixelfashion.com/cdn/shop/files/hoodiefront-2024-11-27T185409.957.png?v=1732716068&width=360",
    guideimg:"https://cdn.shopify.com/s/files/1/0640/3168/6811/files/Untitled_Facebook_Cover_11_480x480.png?v=1729784748",
    link:"sproduct.html?id=sh6",
    },
    {
    id:"sh7", title:"home/Sport Hoodies",
    name:"Alnasr black hoodie", price:"$100.00",
    description: "The sports hoodie showcases the pride and passion of Al-Nassr with a bold, team-inspired design. Featuring the iconic logo and sleek detailing, it’s perfect for fans who support their team with unwavering loyalty. Made from 100% premium cotton, this hoodie offers exceptional comfort, durability, and a stylish fit for everyday wear or match day excitement.",
    image: "https://thepixelfashion.com/cdn/shop/files/hoodiefront-2024-11-10T153831.146.png?v=1731235262&width=360",
    guideimg:"https://cdn.shopify.com/s/files/1/0640/3168/6811/files/Untitled_Facebook_Cover_11_480x480.png?v=1729784748",
    link:"sproduct.html?id=sh7",
    },
    {
    id:"sh8", title:"home/Sport Hoodies",
    name:"Miami black hoodie", price:"$100.00",
    description: "The sports hoodie celebrates the energy and flair of Inter Miami with a bold design inspired by the club’s iconic colors and logo. Perfect for passionate supporters, this hoodie is crafted from 100% premium cotton, ensuring superior comfort, durability, and a sleek, stylish look for any occasion.",
    image: "https://thepixelfashion.com/cdn/shop/files/hoodiefront-2024-11-10T150713.001.png?v=1731235327&width=360",
    guideimg:"https://cdn.shopify.com/s/files/1/0640/3168/6811/files/Untitled_Facebook_Cover_11_480x480.png?v=1729784748",
    link:"sproduct.html?id=sh8",
    },
    {
    id:"hh3", title:"home/Hero Hoodies",
    name:"Iron black hoodie", price:"$90.00",
    description: "The hero hoodie channels the brilliance of Iron Man with a bold, futuristic design inspired by the legendary armor. Featuring sleek details and the iconic arc reactor symbol, it’s perfect for fans of Tony Stark’s genius and heroism. Made from 100% premium cotton, this hoodie combines style, comfort, and durability, making it ideal for everyday wear or heroic vibes.",
    image: "https://thepixelfashion.com/cdn/shop/files/hoodiefront-2024-10-11T000155.175.png?v=1728656418&width=360",
    guideimg:"https://cdn.shopify.com/s/files/1/0640/3168/6811/files/Untitled_Facebook_Cover_11_480x480.png?v=1729784748",
    link:"sproduct.html?id=hh3",
    },
    {
    id:"hh4", title:"home/Hero Hoodies",
    name:"Thor black hoodie", price:"$90.00",
    description: "The hero hoodie embodies the power and might of Thor with a bold design inspired by the God of Thunder. Featuring the iconic Mjölnir symbol and sleek detailing, it’s perfect for fans who admire Thor’s strength and courage. Made from 100% premium cotton, this hoodie combines exceptional comfort, durability, and a stylish fit, making it ideal for everyday wear or channeling your inner Asgardian.",
    image: "https://thepixelfashion.com/cdn/shop/files/hoodiefront-2024-10-11T000608.694.png?v=1728656855&width=360",
    guideimg:"https://cdn.shopify.com/s/files/1/0640/3168/6811/files/Untitled_Facebook_Cover_11_480x480.png?v=1729784748",
    link:"sproduct.html?id=hh4",
    },
    {
    id:"hh5", title:"home/Hero Hoodies",
    name:"Spider black hoodie", price:"$90.00",
    description: "The hero hoodie captures the spirit of Spider-Man with a striking design featuring the iconic web-slinger logo. Perfect for fans of the friendly neighborhood hero, it’s crafted from 100% premium cotton for unbeatable comfort, durability, and a stylish fit, ready to swing into action or chill in style.",
    image: "https://thepixelfashion.com/cdn/shop/files/hoodiefront-2024-10-10T235621.257.png?v=1728656532&width=360",
    guideimg:"https://cdn.shopify.com/s/files/1/0640/3168/6811/files/Untitled_Facebook_Cover_11_480x480.png?v=1729784748",
    link:"sproduct.html?id=hh5",
    },
    {
    id:"hh6", title:"home/Hero Hoodies",
    name:"Deadpool black hoodie", price:"$90.00",
    description: "The hero hoodie channels the wit and charm of Deadpool with a bold design inspired by his iconic logo and signature colors. Perfect for fans of the Merc with a Mouth, this hoodie combines humor, style, and comfort. Crafted from 100% premium cotton, it offers all-day coziness and durability for your everyday adventures.",
    image: "https://thepixelfashion.com/cdn/shop/files/hoodiefront-2024-10-10T235916.656.png?v=1728656175&width=360",
    guideimg:"https://cdn.shopify.com/s/files/1/0640/3168/6811/files/Untitled_Facebook_Cover_11_480x480.png?v=1729784748",
    link:"sproduct.html?id=hh6",
    },
    {
    id:"qs1", title:"home/Quote Shirt",
    name:"Drive black shirt", price:"$80.00",
    description: "The quote shirt Drive is designed for those who push forward with passion and determination. Featuring a bold typography design with an inspiring quote, it’s perfect for individuals who embrace ambition and a never-give-up attitude. Made from 100% premium cotton, this tee offers superior comfort, durability, and a stylish fit, making it an ideal choice for everyday motivation and streetwear fashion.",
    image: "https://thepixelfashion.com/cdn/shop/files/DriveCarHalfSleeveT-Shirt.png?v=1717066201&width=360",
    guideimg:"https://cdn.shopify.com/s/files/1/0640/3168/6811/files/Untitled_Facebook_Cover_10_480x480.png?v=1729690633",
    link:"sproduct.html?id=qs1",
    },
    {
    id:"qs2", title:"home/Quote Shirt",
    name:"Pyl black shirt", price:"$80.00",
    description: "The quote shirt Push Your Limit is a reminder to break boundaries and strive for greatness. Featuring a bold and motivating typography design, it’s perfect for those who believe in constant growth and perseverance. Made from 100% premium cotton, this tee ensures superior comfort, durability, and a stylish fit, making it an ideal choice for everyday wear and motivation.",
    image: "https://thepixelfashion.com/cdn/shop/files/PushYourLimitHalfSleeveT-Shirt.jpg?v=1722624048&width=360",
    guideimg:"https://cdn.shopify.com/s/files/1/0640/3168/6811/files/Untitled_Facebook_Cover_10_480x480.png?v=1729690633",
    link:"sproduct.html?id=qs2",
    },
    {
    id:"qs3", title:"home/Quote Shirt",
    name:"Kit black shirt", price:"$80.00",
    description: "The quote shirt Keep It Smile spreads positivity with a simple yet powerful message. Featuring a bold and uplifting typography design, it’s perfect for those who believe in the power of a smile and a positive mindset. Made from 100% premium cotton, this tee offers exceptional comfort, durability, and a stylish fit, making it an ideal choice for everyday wear and spreading good vibes.",
    image: "https://thepixelfashion.com/cdn/shop/files/KeepitSimpleHalfSleeveT-Shirt_png.png?v=1717414584&width=360",
    guideimg:"https://cdn.shopify.com/s/files/1/0640/3168/6811/files/Untitled_Facebook_Cover_10_480x480.png?v=1729690633",
    link:"sproduct.html?id=qs3",
    },
    {
    id:"qs4", title:"home/Quote Shirt",
    name:"pyl white shirt", price:"$80.00",
    description: "The quote shirt Push Your Limit is a reminder to break boundaries and strive for greatness. Featuring a bold and motivating typography design, it’s perfect for those who believe in constant growth and perseverance. Made from 100% premium cotton, this tee ensures superior comfort, durability, and a stylish fit, making it an ideal choice for everyday wear and motivation.",
    image: "https://thepixelfashion.com/cdn/shop/files/PushYourLimitHalfSleeveT-Shirt_png.png?v=1717416170&width=360",
    guideimg:"https://cdn.shopify.com/s/files/1/0640/3168/6811/files/Untitled_Facebook_Cover_10_480x480.png?v=1729690633",
    link:"sproduct.html?id=qs4",
    },
    {
    id:"qs5", title:"home/Quote Shirt",
    name:"Hope black Shirt", price:"$80.00",
    description: "The quote shirt Hope is a symbol of optimism and resilience. Featuring a bold and inspiring typography design, it’s perfect for those who believe in staying positive and never giving up. Made from 100% premium cotton, this tee offers exceptional comfort, durability, and a stylish fit, making it an ideal choice for everyday wear and a reminder to always hold onto hope.",
    image: "https://thepixelfashion.com/cdn/shop/files/HopeHalfSleeveT-Shirt_fd609103-fb64-414c-9e48-fe84186d64f9.png?v=1717068827&width=360",
    guideimg:"https://cdn.shopify.com/s/files/1/0640/3168/6811/files/Untitled_Facebook_Cover_10_480x480.png?v=1729690633",
    link:"sproduct.html?id=qs5",
    },
    {
    id:"qs6", title:"home/Quote Shirt",
    name:"Esr black shirt", price:"$80.00",
    description: "The quote shirt Eat Sleep Repeat is a tribute to the simple yet relentless grind of everyday life. Featuring a bold and minimalist typography design, it’s perfect for those who embrace routine, hustle, and dedication. Made from 100% premium cotton, this tee offers superior comfort, durability, and a stylish fit, making it an ideal choice for daily wear and motivation.",
    image: "https://thepixelfashion.com/cdn/shop/files/EatSleepRepeatHalfSleeveT-Shirt_png.png?v=1717413030&width=360",
    guideimg:"https://cdn.shopify.com/s/files/1/0640/3168/6811/files/Untitled_Facebook_Cover_10_480x480.png?v=1729690633",
    link:"sproduct.html?id=qs6",
    },
    {
    id:"hs1", title:"home/Hero Shirt",
    name:"Flash black shirt", price:"$80.00",
    description: "The hero shirt Flash captures the speed and power of the Scarlet Speedster with a bold lightning bolt emblem. Designed for fans of The Flash, this tee embodies energy, agility, and heroism. Made from 100% premium cotton, it offers superior comfort, durability, and a stylish fit, making it perfect for everyday wear or showcasing your love for the fastest hero alive.",
    image: "https://thepixelfashion.com/cdn/shop/files/Angular-2024-09-01T180627.810.png?v=1725196446&width=360",
    guideimg:"https://cdn.shopify.com/s/files/1/0640/3168/6811/files/Untitled_Facebook_Cover_10_480x480.png?v=1729690633",
    link:"sproduct.html?id=hs1",
    },
    {
    id:"hs2", title:"home/Hero Shirt",
    name:"Thor blue shirt", price:"$70.00",
    description: "The hero shirt Thor embodies the strength and might of the God of Thunder with a bold design featuring Mjölnir, his legendary hammer. Perfect for fans of Asgard’s protector, this tee is made from 100% premium cotton, offering superior comfort, durability, and a powerful style fit for everyday wear.",
    image: "https://thepixelfashion.com/cdn/shop/files/Angular-2024-09-01T192812.510.png?v=1725201197&width=360",
    guideimg:"https://cdn.shopify.com/s/files/1/0640/3168/6811/files/Untitled_Facebook_Cover_10_480x480.png?v=1729690633",
    link:"sproduct.html?id=hs2",
    },
    {
    id:"hs3", title:"home/Hero Shirt",
    name:"Bat black shirt", price:"$70.00",
    description: "The hero shirt Bat brings the mystery and power of the Dark Knight to life with a sleek, iconic bat emblem. Designed for true Batman fans, this tee is crafted from 100% premium cotton, ensuring all-day comfort, durability, and a timeless superhero look.",
    image: "https://thepixelfashion.com/cdn/shop/files/Angular_89_500b4de3-add5-484d-b3b8-e97e3a2e7131.png?v=1725193258&width=360",
    guideimg:"https://cdn.shopify.com/s/files/1/0640/3168/6811/files/Untitled_Facebook_Cover_10_480x480.png?v=1729690633",
    link:"sproduct.html?id=hs3",
    },
    {
    id:"hs4", title:"home/Hero Shirt",
    name:"Spider white shirt", price:"$70.00",
    description: "The hero shirt Spider captures the essence of the friendly neighborhood hero with a striking spider emblem. Perfect for fans of Spider-Man, this tee is made from 100% premium cotton, offering unbeatable comfort, durability, and a stylish fit, ready for action or casual wear.",
    image: "https://thepixelfashion.com/cdn/shop/files/Angular-2024-09-01T172720.328.png?v=1725194289&width=360",
    guideimg:"https://cdn.shopify.com/s/files/1/0640/3168/6811/files/Untitled_Facebook_Cover_10_480x480.png?v=1729690633",
    link:"sproduct.html?id=hs4",
    },
    {
    id:"hs5", title:"home/Hero Shirt",
    name:"Iron black shirt", price:"$70.00",
    description: "The hero shirt Iron channels the brilliance and charisma of Iron Man with a bold arc reactor design. Crafted for fans of Tony Stark’s legendary suit, this tee is made from 100% premium cotton, ensuring superior comfort, durability, and a sleek, heroic look for everyday wear.",
    image: "https://thepixelfashion.com/cdn/shop/files/Angular-2024-09-01T172519.284.png?v=1725194080&width=360",
    guideimg:"https://cdn.shopify.com/s/files/1/0640/3168/6811/files/Untitled_Facebook_Cover_10_480x480.png?v=1729690633",
    link:"sproduct.html?id=hs5",
    },
    {
    id:"gs1", title:"home/Geek Shirt",
    name:"Dev black shirt", price:"$60.00",
    description: "The geek shirt Developer is perfect for those who live and breathe coding. Featuring tech-inspired graphics and a design that celebrates the developer lifestyle, this tee is ideal for anyone who loves programming, problem-solving, and tech culture. Made from 100% premium cotton, it ensures exceptional comfort, durability, and a stylish fit for casual wear or coding sessions.",
    image: "https://thepixelfashion.com/cdn/shop/files/DeveloperHalfSleeveT-Shirt_04969473-29e1-4b86-bea2-b57a3cc4e666.png?v=1717066069&width=360",
    guideimg:"https://cdn.shopify.com/s/files/1/0640/3168/6811/files/Untitled_Facebook_Cover_10_480x480.png?v=1729690633",
    link:"sproduct.html?id=gs1",
    },
    {
    id:"gs2", title:"home/Geek Shirt",
    name:"Pro blue shirt", price:"$60.00",
    description: "The geek shirt Programmer is designed for those who embrace the world of coding and technology. Featuring a code-inspired design, this tee is perfect for programmers who take pride in their craft. Made from 100% premium cotton, it ensures exceptional comfort, durability, and a stylish fit, making it ideal for work, casual wear, or tech-related events.",
    image: "https://thepixelfashion.com/cdn/shop/files/Angular-2024-08-24T175752.925.png?v=1724504461&width=360",
    guideimg:"https://cdn.shopify.com/s/files/1/0640/3168/6811/files/Untitled_Facebook_Cover_10_480x480.png?v=1729690633",
    link:"sproduct.html?id=gs2",
    },
    {
    id:"gs3", title:"home/Geek Shirt",
    name:"Dev black shirt", price:"$60.00",
    description: "The geek shirt Developer is perfect for those who live and breathe coding. Featuring tech-inspired graphics and a design that celebrates the developer lifestyle, this tee is ideal for anyone who loves programming, problem-solving, and tech culture. Made from 100% premium cotton, it ensures exceptional comfort, durability, and a stylish fit for casual wear or coding sessions.",
    image: "https://thepixelfashion.com/cdn/shop/files/Angular-2024-08-24T140349.655.png?v=1724491139&width=360",
    guideimg:"https://cdn.shopify.com/s/files/1/0640/3168/6811/files/Untitled_Facebook_Cover_10_480x480.png?v=1729690633",
    link:"sproduct.html?id=gs3",
    },
    {
    id:"gs4", title:"home/Geek Shirt",
    name:"Vscode white shirt", price:"$60.00",
    description: "The geek shirt VS Code is designed for developers who love their favorite coding editor. Featuring a sleek design inspired by Visual Studio Code, this tee is perfect for those who spend hours crafting code in the editor. Made from 100% premium cotton, it offers exceptional comfort, durability, and a stylish fit, making it a must-have for every VS Code enthusiast.",
    image: "https://thepixelfashion.com/cdn/shop/files/VSCodeHalfSleeveT-Shirt.jpg?v=1717335493&width=360",
    guideimg:"https://cdn.shopify.com/s/files/1/0640/3168/6811/files/Untitled_Facebook_Cover_10_480x480.png?v=1729690633",
    link:"sproduct.html?id=gs4",
    },
    {
    id:"gs5", title:"home/Geek Shirt",
    name:"Ui/Ux blue shirt", price:"$60.00",
    description: "The geek shirt UI/UX Designer celebrates the art of user-centered design. Featuring a creative design that highlights the balance between aesthetics and functionality, this tee is perfect for UI/UX designers who focus on creating seamless and engaging experiences. Made from 100% premium cotton, it ensures comfort, durability, and a stylish fit for designers who want to showcase their passion for great user interfaces.",
    image: "https://thepixelfashion.com/cdn/shop/files/Angular-2024-09-02T184043.552.png?v=1725284664&width=360",
    guideimg:"https://cdn.shopify.com/s/files/1/0640/3168/6811/files/Untitled_Facebook_Cover_10_480x480.png?v=1729690633",
    link:"sproduct.html?id=gs5",
    },
    {
    id:"ss1", title:"home/Sweat Shirt",
    name:"Wavy Mustard shirt", price:"$100.00",
    description: "The plain sweatshirt is a timeless essential, perfect for a minimal yet stylish look. With a clean and simple design, it offers versatility for casual wear or layering. Made from high-quality fabric, including 100% cotton or a cotton-poly blend, it ensures superior comfort, warmth, and durability, making it an ideal choice for everyday wear.",
    image: "https://uniworthdress.com/uploads/product/TSS2416.jpg",
    guideimg:"https://files.oaiusercontent.com/file-Hzk2vLPcYw83ecKonwNnLi?se=2025-02-06T10%3A43%3A28Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D82c0ab04-ce9c-448e-8b32-c03aee115f9f.webp&sig=Cm%2B4QW0KxXGdswlvetbrL00b/B%2BtqFWQ/0irZ8G7p6g%3D",
    link:"sproduct.html?id=ss1",
    },
    {
    id:"ss2", title:"home/Sweat Shirt",
    name:"Texture green shirt", price:"$100.00",
    description: "The plain sweatshirt is a timeless essential, perfect for a minimal yet stylish look. With a clean and simple design, it offers versatility for casual wear or layering. Made from high-quality fabric, including 100% cotton or a cotton-poly blend, it ensures superior comfort, warmth, and durability, making it an ideal choice for everyday wear.",
    image: "https://uniworthdress.com/uploads/product/TSS2403-1.jpg",
    guideimg:"https://files.oaiusercontent.com/file-Hzk2vLPcYw83ecKonwNnLi?se=2025-02-06T10%3A43%3A28Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D82c0ab04-ce9c-448e-8b32-c03aee115f9f.webp&sig=Cm%2B4QW0KxXGdswlvetbrL00b/B%2BtqFWQ/0irZ8G7p6g%3D",
    link:"sproduct.html?id=ss2",
    },
    {
    id:"ss3", title:"home/Sweat Shirt",
    name:"Texture grey shirt", price:"$100.00",
    description: "The plain sweatshirt is a timeless essential, perfect for a minimal yet stylish look. With a clean and simple design, it offers versatility for casual wear or layering. Made from high-quality fabric, including 100% cotton or a cotton-poly blend, it ensures superior comfort, warmth, and durability, making it an ideal choice for everyday wear.",
    image: "https://uniworthdress.com/uploads/product/TSS2411.jpg",
    guideimg:"https://files.oaiusercontent.com/file-Hzk2vLPcYw83ecKonwNnLi?se=2025-02-06T10%3A43%3A28Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D82c0ab04-ce9c-448e-8b32-c03aee115f9f.webp&sig=Cm%2B4QW0KxXGdswlvetbrL00b/B%2BtqFWQ/0irZ8G7p6g%3D",
    link:"sproduct.html?id=ss3",
    },
    {
    id:"ss4", title:"home/Sweat Shirt",
    name:"Texture blue shirt", price:"$100.00",
    description: "The plain sweatshirt is a timeless essential, perfect for a minimal yet stylish look. With a clean and simple design, it offers versatility for casual wear or layering. Made from high-quality fabric, including 100% cotton or a cotton-poly blend, it ensures superior comfort, warmth, and durability, making it an ideal choice for everyday wear.",
    image: "https://uniworthdress.com/uploads/product/TSS2405-2.jpg",
    guideimg:"https://files.oaiusercontent.com/file-Hzk2vLPcYw83ecKonwNnLi?se=2025-02-06T10%3A43%3A28Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D82c0ab04-ce9c-448e-8b32-c03aee115f9f.webp&sig=Cm%2B4QW0KxXGdswlvetbrL00b/B%2BtqFWQ/0irZ8G7p6g%3D",
    link:"sproduct.html?id=ss4",
    },
    {
    id:"ss5", title:"home/Sweat Shirt",
    name:"Texture blue shirt", price:"$100.00",
    description: "The plain sweatshirt is a timeless essential, perfect for a minimal yet stylish look. With a clean and simple design, it offers versatility for casual wear or layering. Made from high-quality fabric, including 100% cotton or a cotton-poly blend, it ensures superior comfort, warmth, and durability, making it an ideal choice for everyday wear.",
    image: "https://uniworthdress.com/uploads/product/TSS2410..jpg",
    guideimg:"https://files.oaiusercontent.com/file-Hzk2vLPcYw83ecKonwNnLi?se=2025-02-06T10%3A43%3A28Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D82c0ab04-ce9c-448e-8b32-c03aee115f9f.webp&sig=Cm%2B4QW0KxXGdswlvetbrL00b/B%2BtqFWQ/0irZ8G7p6g%3D",
    link:"sproduct.html?id=ss5",
    },
    {
    id:"ss6", title:"home/Sweat Shirt",
    name:"Texture blue shirt", price:"$100.00",
    description: "The plain sweatshirt is a timeless essential, perfect for a minimal yet stylish look. With a clean and simple design, it offers versatility for casual wear or layering. Made from high-quality fabric, including 100% cotton or a cotton-poly blend, it ensures superior comfort, warmth, and durability, making it an ideal choice for everyday wear.",
    image: "https://uniworthdress.com/uploads/product/TSS2389.jpg",
    guideimg:"https://files.oaiusercontent.com/file-Hzk2vLPcYw83ecKonwNnLi?se=2025-02-06T10%3A43%3A28Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D82c0ab04-ce9c-448e-8b32-c03aee115f9f.webp&sig=Cm%2B4QW0KxXGdswlvetbrL00b/B%2BtqFWQ/0irZ8G7p6g%3D",
    link:"sproduct.html?id=ss6",
    },
    {
    id:"ss7", title:"home/Sweat Shirt",
    name:"Texture blue shirt", price:"$100.00",
    description: "The plain sweatshirt is a timeless essential, perfect for a minimal yet stylish look. With a clean and simple design, it offers versatility for casual wear or layering. Made from high-quality fabric, including 100% cotton or a cotton-poly blend, it ensures superior comfort, warmth, and durability, making it an ideal choice for everyday wear.",
    image: "https://uniworthdress.com/uploads/product/TSS2310.jpg",
    guideimg:"https://files.oaiusercontent.com/file-Hzk2vLPcYw83ecKonwNnLi?se=2025-02-06T10%3A43%3A28Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D82c0ab04-ce9c-448e-8b32-c03aee115f9f.webp&sig=Cm%2B4QW0KxXGdswlvetbrL00b/B%2BtqFWQ/0irZ8G7p6g%3D",
    link:"sproduct.html?id=ss7",
    },
    {
    id:"ss8", title:"home/Sweat Shirt",
    name:"Texture aqua shirt", price:"$100.00",
    description: "The plain sweatshirt is a timeless essential, perfect for a minimal yet stylish look. With a clean and simple design, it offers versatility for casual wear or layering. Made from high-quality fabric, including 100% cotton or a cotton-poly blend, it ensures superior comfort, warmth, and durability, making it an ideal choice for everyday wear.",
    image: "https://uniworthdress.com/uploads/product/5c23de5733ba8e9c529f839463647ac0.jpg",
    guideimg:"https://files.oaiusercontent.com/file-Hzk2vLPcYw83ecKonwNnLi?se=2025-02-06T10%3A43%3A28Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D82c0ab04-ce9c-448e-8b32-c03aee115f9f.webp&sig=Cm%2B4QW0KxXGdswlvetbrL00b/B%2BtqFWQ/0irZ8G7p6g%3D",
    link:"sproduct.html?id=ss8",
    },
    {
    id:"pss1", title:"home/Printed Sweat Shirt",
    name:"Pattern black shirt", price:"$120.00",
    description: "The printed sweatshirt brings personality and style to your wardrobe with eye-catching graphics, bold logos, or unique designs. Whether featuring artistic prints, brand logos, or statement quotes, it adds a trendy edge to casual fashion. Crafted from premium fabric, it offers a comfortable fit, durability, and a stylish look that stands out in any setting.",
    image: "https://uniworthdress.com/uploads/product/TSS2407.jpg",
    guideimg:"https://files.oaiusercontent.com/file-Hzk2vLPcYw83ecKonwNnLi?se=2025-02-06T10%3A43%3A28Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D82c0ab04-ce9c-448e-8b32-c03aee115f9f.webp&sig=Cm%2B4QW0KxXGdswlvetbrL00b/B%2BtqFWQ/0irZ8G7p6g%3D",
    link:"sproduct.html?id=pss1",
    },
    {
    id:"pss2", title:"home/Printed Sweat Shirt",
    name:"Captian black shirt", price:"$120.00",
    description: "The printed sweatshirt brings personality and style to your wardrobe with eye-catching graphics, bold logos, or unique designs. Whether featuring artistic prints, brand logos, or statement quotes, it adds a trendy edge to casual fashion. Crafted from premium fabric, it offers a comfortable fit, durability, and a stylish look that stands out in any setting.",
    image: "https://uniworthdress.com/uploads/product/275fb3ae12b22701d158b37fea7ea633.jpg",
    guideimg:"https://files.oaiusercontent.com/file-Hzk2vLPcYw83ecKonwNnLi?se=2025-02-06T10%3A43%3A28Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D82c0ab04-ce9c-448e-8b32-c03aee115f9f.webp&sig=Cm%2B4QW0KxXGdswlvetbrL00b/B%2BtqFWQ/0irZ8G7p6g%3D",
    link:"sproduct.html?id=pss2",
    },
    {
    id:"pss3", title:"home/Printed Sweat Shirt",
    name:"Texture navy shirt", price:"$120.00",
    description: "The printed sweatshirt brings personality and style to your wardrobe with eye-catching graphics, bold logos, or unique designs. Whether featuring artistic prints, brand logos, or statement quotes, it adds a trendy edge to casual fashion. Crafted from premium fabric, it offers a comfortable fit, durability, and a stylish look that stands out in any setting.",
    image: "https://uniworthdress.com/uploads/product/eb4e3506de52d13c8912f8e5b7b0c8dd.jpg",
    guideimg:"https://files.oaiusercontent.com/file-Hzk2vLPcYw83ecKonwNnLi?se=2025-02-06T10%3A43%3A28Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D82c0ab04-ce9c-448e-8b32-c03aee115f9f.webp&sig=Cm%2B4QW0KxXGdswlvetbrL00b/B%2BtqFWQ/0irZ8G7p6g%3D",
    link:"sproduct.html?id=pss3",
    },
    {
    id:"pss4", title:"home/Printed Sweat Shirt",
    name:"Captian rust shirt", price:"$120.00",
    description: "The printed sweatshirt brings personality and style to your wardrobe with eye-catching graphics, bold logos, or unique designs. Whether featuring artistic prints, brand logos, or statement quotes, it adds a trendy edge to casual fashion. Crafted from premium fabric, it offers a comfortable fit, durability, and a stylish look that stands out in any setting.",
    image: "https://uniworthdress.com/uploads/product/TSS2404-1.jpg",
    guideimg:"https://files.oaiusercontent.com/file-Hzk2vLPcYw83ecKonwNnLi?se=2025-02-06T10%3A43%3A28Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D82c0ab04-ce9c-448e-8b32-c03aee115f9f.webp&sig=Cm%2B4QW0KxXGdswlvetbrL00b/B%2BtqFWQ/0irZ8G7p6g%3D",
    link:"sproduct.html?id=pss4",
    },
    {
    id:"pss5", title:"home/Printed Sweat Shirt",
    name:"Baseball Camel shirt", price:"$120.00",
    description: "The printed sweatshirt brings personality and style to your wardrobe with eye-catching graphics, bold logos, or unique designs. Whether featuring artistic prints, brand logos, or statement quotes, it adds a trendy edge to casual fashion. Crafted from premium fabric, it offers a comfortable fit, durability, and a stylish look that stands out in any setting.",
    image: "https://uniworthdress.com/uploads/product/TSS2317..jpg",
    guideimg:"https://files.oaiusercontent.com/file-Hzk2vLPcYw83ecKonwNnLi?se=2025-02-06T10%3A43%3A28Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D82c0ab04-ce9c-448e-8b32-c03aee115f9f.webp&sig=Cm%2B4QW0KxXGdswlvetbrL00b/B%2BtqFWQ/0irZ8G7p6g%3D",
    link:"sproduct.html?id=pss5",
    },
    {
    id:"pss6", title:"home/Printed Sweat Shirt",
    name:"Explorer black shirt", price:"$120.00",
    description: "The printed sweatshirt brings personality and style to your wardrobe with eye-catching graphics, bold logos, or unique designs. Whether featuring artistic prints, brand logos, or statement quotes, it adds a trendy edge to casual fashion. Crafted from premium fabric, it offers a comfortable fit, durability, and a stylish look that stands out in any setting.",
    image: "https://uniworthdress.com/uploads/product/03719b9061c365968900e97e78cddf22.jpg",
    guideimg:"https://files.oaiusercontent.com/file-Hzk2vLPcYw83ecKonwNnLi?se=2025-02-06T10%3A43%3A28Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D82c0ab04-ce9c-448e-8b32-c03aee115f9f.webp&sig=Cm%2B4QW0KxXGdswlvetbrL00b/B%2BtqFWQ/0irZ8G7p6g%3D",
    link:"sproduct.html?id=pss6",
    },
    {
    id:"pss7", title:"home/Printed Sweat Shirt",
    name:"Lupin black shirt", price:"$120.00",
    description: "The printed sweatshirt brings personality and style to your wardrobe with eye-catching graphics, bold logos, or unique designs. Whether featuring artistic prints, brand logos, or statement quotes, it adds a trendy edge to casual fashion. Crafted from premium fabric, it offers a comfortable fit, durability, and a stylish look that stands out in any setting.",
    image: "https://uniworthdress.com/uploads/product/TSS2216..jpg",
    guideimg:"https://files.oaiusercontent.com/file-Hzk2vLPcYw83ecKonwNnLi?se=2025-02-06T10%3A43%3A28Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D82c0ab04-ce9c-448e-8b32-c03aee115f9f.webp&sig=Cm%2B4QW0KxXGdswlvetbrL00b/B%2BtqFWQ/0irZ8G7p6g%3D",
    link:"sproduct.html?id=pss7",
    },
    {
    id:"pss8", title:"home/Printed Sweat Shirt",
    name:"Rbpr white shirt", price:"$120.00",
    description: "The printed sweatshirt brings personality and style to your wardrobe with eye-catching graphics, bold logos, or unique designs. Whether featuring artistic prints, brand logos, or statement quotes, it adds a trendy edge to casual fashion. Crafted from premium fabric, it offers a comfortable fit, durability, and a stylish look that stands out in any setting.",
    image: "https://uniworthdress.com/uploads/product/TSS2209..jpg",
    guideimg:"https://files.oaiusercontent.com/file-Hzk2vLPcYw83ecKonwNnLi?se=2025-02-06T10%3A43%3A28Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D82c0ab04-ce9c-448e-8b32-c03aee115f9f.webp&sig=Cm%2B4QW0KxXGdswlvetbrL00b/B%2BtqFWQ/0irZ8G7p6g%3D",
    link:"sproduct.html?id=pss8",
    },
    {
    id:"fk1", title:"home/Formal Kurta",
    name:"Special black kurta", price:"$180.00",
    description: "The formal kurta is the perfect blend of sophistication and tradition, designed for elegant occasions and professional gatherings. With a sleek, minimalistic design, it features premium-quality fabric like cotton, linen, or blended silk for a refined look and all-day comfort. The tailored fit, subtle embroidery, or buttoned placket add a touch of class, making it ideal for formal dinners, cultural events, or even office wear. Whether paired with a shalwar, churidar, or trousers, the formal kurta exudes timeless elegance and effortless style.",
    image: "https://www.junaidjamshed.com/media/catalog/product/j/j/jjk-sp-a-48110_3_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds",
    guideimg:"https://www.junaidjamshed.com/media/wysiwyg/Men_Regular_Fit_Kurta..jpg",
    link:"sproduct.html?id=fk1",
    },
    {
    id:"fk2", title:"home/Formal Kurta",
    name:"Special Green kurta", price:"$180.00",
    description: "The formal kurta is the perfect blend of sophistication and tradition, designed for elegant occasions and professional gatherings. With a sleek, minimalistic design, it features premium-quality fabric like cotton, linen, or blended silk for a refined look and all-day comfort. The tailored fit, subtle embroidery, or buttoned placket add a touch of class, making it ideal for formal dinners, cultural events, or even office wear. Whether paired with a shalwar, churidar, or trousers, the formal kurta exudes timeless elegance and effortless style.",
    image: "https://www.junaidjamshed.com/media/catalog/product/4/8/48046jjksp_2_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds",
    guideimg:"https://www.junaidjamshed.com/media/wysiwyg/Men_Regular_Fit_Kurta..jpg",
    link:"sproduct.html?id=fk2",
    },
    {
    id:"fk3", title:"home/Formal Kurta",
    name:"Special brown kurta", price:"$180.00",
    description: "The formal kurta is the perfect blend of sophistication and tradition, designed for elegant occasions and professional gatherings. With a sleek, minimalistic design, it features premium-quality fabric like cotton, linen, or blended silk for a refined look and all-day comfort. The tailored fit, subtle embroidery, or buttoned placket add a touch of class, making it ideal for formal dinners, cultural events, or even office wear. Whether paired with a shalwar, churidar, or trousers, the formal kurta exudes timeless elegance and effortless style.",
    image: "https://www.junaidjamshed.com/media/catalog/product/s/p/sp-48001_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds",
    guideimg:"https://www.junaidjamshed.com/media/wysiwyg/Men_Regular_Fit_Kurta..jpg",
    link:"sproduct.html?id=fk3",
    },
    {
    id:"fk4", title:"home/Formal Kurta",
    name:"Special golden kurta", price:"$180.00",
    description: "The formal kurta is the perfect blend of sophistication and tradition, designed for elegant occasions and professional gatherings. With a sleek, minimalistic design, it features premium-quality fabric like cotton, linen, or blended silk for a refined look and all-day comfort. The tailored fit, subtle embroidery, or buttoned placket add a touch of class, making it ideal for formal dinners, cultural events, or even office wear. Whether paired with a shalwar, churidar, or trousers, the formal kurta exudes timeless elegance and effortless style.",
    image: "https://www.junaidjamshed.com/media/catalog/product/j/j/jjk-sp-a-48030_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds",
    guideimg:"https://www.junaidjamshed.com/media/wysiwyg/Men_Regular_Fit_Kurta..jpg",
    link:"sproduct.html?id=fk4",
    },
    {
    id:"fk5", title:"home/Formal Kurta",
    name:"Special brown kurta", price:"$180.00",
    description: "The formal kurta is the perfect blend of sophistication and tradition, designed for elegant occasions and professional gatherings. With a sleek, minimalistic design, it features premium-quality fabric like cotton, linen, or blended silk for a refined look and all-day comfort. The tailored fit, subtle embroidery, or buttoned placket add a touch of class, making it ideal for formal dinners, cultural events, or even office wear. Whether paired with a shalwar, churidar, or trousers, the formal kurta exudes timeless elegance and effortless style.",
    image: "https://www.junaidjamshed.com/media/catalog/product/4/8/48009jjksp_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds",
    guideimg:"https://www.junaidjamshed.com/media/wysiwyg/Men_Regular_Fit_Kurta..jpg",
    link:"sproduct.html?id=fk5",
    },
    {
    id:"sfk1", title:"home/Semi-Formal Kurta",
    name:"", price:"$150.00",
    description: "The semi-formal kurta strikes the perfect balance between elegance and comfort, making it ideal for both formal gatherings and casual outings. Designed with subtle embroidery, textured fabrics, or unique button details, it adds a refined touch without being overly traditional. Made from high-quality cotton, linen, or blended fabrics, it ensures breathability and comfort while maintaining a polished look. Paired with tailored trousers or a shalwar, the semi-formal kurta is perfect for family events, office gatherings, or festive occasions.",
    image: "https://www.junaidjamshed.com/media/catalog/product/3/3/33035_1__1.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds",
    guideimg:"https://www.junaidjamshed.com/media/wysiwyg/Men_Regular_Fit_Kurta..jpg",
    link:"sproduct.html?id=sfk1",
    },
    {
    id:"sfk2", title:"home/Semi-Formal Kurta",
    name:"Teal blue kurta", price:"$150.00",
    description: "The semi-formal kurta strikes the perfect balance between elegance and comfort, making it ideal for both formal gatherings and casual outings. Designed with subtle embroidery, textured fabrics, or unique button details, it adds a refined touch without being overly traditional. Made from high-quality cotton, linen, or blended fabrics, it ensures breathability and comfort while maintaining a polished look. Paired with tailored trousers or a shalwar, the semi-formal kurta is perfect for family events, office gatherings, or festive occasions.",
    image: "https://www.junaidjamshed.com/media/catalog/product/3/2/32984_2_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds",
    guideimg:"https://www.junaidjamshed.com/media/wysiwyg/Men_Regular_Fit_Kurta..jpg",
    link:"sproduct.html?id=sfk2",
    },
    {
    id:"sfk3", title:"home/Semi-Formal Kurta",
    name:"Navy blue kurta", price:"$150.00",
    description: "The semi-formal kurta strikes the perfect balance between elegance and comfort, making it ideal for both formal gatherings and casual outings. Designed with subtle embroidery, textured fabrics, or unique button details, it adds a refined touch without being overly traditional. Made from high-quality cotton, linen, or blended fabrics, it ensures breathability and comfort while maintaining a polished look. Paired with tailored trousers or a shalwar, the semi-formal kurta is perfect for family events, office gatherings, or festive occasions.",
    image: "https://www.junaidjamshed.com/media/catalog/product/3/3/33041_2_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds",
    guideimg:"https://www.junaidjamshed.com/media/wysiwyg/Men_Regular_Fit_Kurta..jpg",
    link:"sproduct.html?id=sfk3",
    },
    {
    id:"sfk4", title:"home/Semi-Formal Kurta",
    name:"Wavy brown kurta", price:"$150.00",
    description: "The semi-formal kurta strikes the perfect balance between elegance and comfort, making it ideal for both formal gatherings and casual outings. Designed with subtle embroidery, textured fabrics, or unique button details, it adds a refined touch without being overly traditional. Made from high-quality cotton, linen, or blended fabrics, it ensures breathability and comfort while maintaining a polished look. Paired with tailored trousers or a shalwar, the semi-formal kurta is perfect for family events, office gatherings, or festive occasions.",
    image: "https://www.junaidjamshed.com/media/catalog/product/9/0/90440_2_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds",
    guideimg:"https://www.junaidjamshed.com/media/wysiwyg/Men_Regular_Fit_Kurta..jpg",
    link:"sproduct.html?id=sfk4",
    },
    {
    id:"sfk5", title:"home/Semi-Formal Kurta",
    name:"Plain white kurta", price:"$150.00",
    description: "The semi-formal kurta strikes the perfect balance between elegance and comfort, making it ideal for both formal gatherings and casual outings. Designed with subtle embroidery, textured fabrics, or unique button details, it adds a refined touch without being overly traditional. Made from high-quality cotton, linen, or blended fabrics, it ensures breathability and comfort while maintaining a polished look. Paired with tailored trousers or a shalwar, the semi-formal kurta is perfect for family events, office gatherings, or festive occasions.",
    image: "https://www.junaidjamshed.com/media/catalog/product/3/2/32970-1_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds",
    guideimg:"https://www.junaidjamshed.com/media/wysiwyg/Men_Regular_Fit_Kurta..jpg",
    link:"sproduct.html?id=sfk5",
    },
    {
    id:"sfk6", title:"home/Semi-Formal Kurta",
    name:"Dark grey kurta", price:"$150.00",
    description: "The semi-formal kurta strikes the perfect balance between elegance and comfort, making it ideal for both formal gatherings and casual outings. Designed with subtle embroidery, textured fabrics, or unique button details, it adds a refined touch without being overly traditional. Made from high-quality cotton, linen, or blended fabrics, it ensures breathability and comfort while maintaining a polished look. Paired with tailored trousers or a shalwar, the semi-formal kurta is perfect for family events, office gatherings, or festive occasions.",
    image: "https://www.junaidjamshed.com/media/catalog/product/j/j/jjk-33140_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds",
    guideimg:"https://www.junaidjamshed.com/media/wysiwyg/Men_Regular_Fit_Kurta..jpg",
    link:"sproduct.html?id=sfk6",
    },
    {
    id:"ck1", title:"home/Casual Kurta",
    name:"Denim blue kurta", price:"$130.00",
    description: "The casual kurta is the go-to choice for everyday comfort with effortless style. Featuring lightweight fabrics like cotton or lawn, it offers maximum breathability and ease of movement. With relaxed fits, simple prints, or minimal detailing, the casual kurta is perfect for daily wear, casual meetups, or relaxed weekends. Whether paired with jeans, pajama pants, or chinos, it provides a laid-back yet stylish look for any casual setting.",
    image: "https://www.junaidjamshed.com/media/catalog/product/j/j/jjk-47217_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds",
    guideimg:"https://www.junaidjamshed.com/media/wysiwyg/Men_Regular_Fit_Kurta..jpg",
    link:"sproduct.html?id=ck1",
    },
    {
    id:"ck2", title:"home/Casual Kurta",
    name:"Denim blue kurta", price:"$130.00",
    description: "The casual kurta is the go-to choice for everyday comfort with effortless style. Featuring lightweight fabrics like cotton or lawn, it offers maximum breathability and ease of movement. With relaxed fits, simple prints, or minimal detailing, the casual kurta is perfect for daily wear, casual meetups, or relaxed weekends. Whether paired with jeans, pajama pants, or chinos, it provides a laid-back yet stylish look for any casual setting.",
    image: "https://www.junaidjamshed.com/media/catalog/product/3/3/33074_2__1.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds",
    guideimg:"https://www.junaidjamshed.com/media/wysiwyg/Men_Regular_Fit_Kurta..jpg",
    link:"sproduct.html?id=ck2",
    },
    {
    id:"ck3", title:"home/Casual Kurta",
    name:"Denim blue kurta", price:"$130.00",
    description: "The casual kurta is the go-to choice for everyday comfort with effortless style. Featuring lightweight fabrics like cotton or lawn, it offers maximum breathability and ease of movement. With relaxed fits, simple prints, or minimal detailing, the casual kurta is perfect for daily wear, casual meetups, or relaxed weekends. Whether paired with jeans, pajama pants, or chinos, it provides a laid-back yet stylish look for any casual setting.",
    image: "https://www.junaidjamshed.com/media/catalog/product/j/j/jjk-32969_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds",
    guideimg:"https://www.junaidjamshed.com/media/wysiwyg/Men_Regular_Fit_Kurta..jpg",
    link:"sproduct.html?id=ck3",
    },
    {
    id:"ck4", title:"home/Casual Kurta",
    name:"Navy blue kurta", price:"$130.00",
    description: "The casual kurta is the go-to choice for everyday comfort with effortless style. Featuring lightweight fabrics like cotton or lawn, it offers maximum breathability and ease of movement. With relaxed fits, simple prints, or minimal detailing, the casual kurta is perfect for daily wear, casual meetups, or relaxed weekends. Whether paired with jeans, pajama pants, or chinos, it provides a laid-back yet stylish look for any casual setting.",
    image: "https://www.junaidjamshed.com/media/catalog/product/3/3/33037_2_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds",
    guideimg:"https://www.junaidjamshed.com/media/wysiwyg/Men_Regular_Fit_Kurta..jpg",
    link:"sproduct.html?id=ck4",
    },
    {
    id:"ck5", title:"home/Casual Kurta",
    name:"Plain black kurta", price:"$130.00",
    description: "The casual kurta is the go-to choice for everyday comfort with effortless style. Featuring lightweight fabrics like cotton or lawn, it offers maximum breathability and ease of movement. With relaxed fits, simple prints, or minimal detailing, the casual kurta is perfect for daily wear, casual meetups, or relaxed weekends. Whether paired with jeans, pajama pants, or chinos, it provides a laid-back yet stylish look for any casual setting.",
    image: "https://www.junaidjamshed.com/media/catalog/product/j/j/jjk-47232_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds",
    guideimg:"https://www.junaidjamshed.com/media/wysiwyg/Men_Regular_Fit_Kurta..jpg",
    link:"sproduct.html?id=ck5",
    },

];


    const params = new URLSearchParams(window.location.search);
    const itemId = params.get("id");

const item = items.find((i) => i.id === itemId);

    if(item){
        document.getElementById("item-title").textContent=item.title;
        document.getElementById("item-image").src=item.image;
        document.getElementById("item-name").textContent=item.name;
        document.getElementById("item-det").href=item.link;
        document.getElementById("item-price").textContent=item.price;
        document.getElementById("item-description").textContent=item.description;
        document.getElementById("product-size").src=item.guideimg;
    }
//     else {
//   document.getElementById("item-detail").innerHTML =
//     "<p>Item not found. <a href='shopping.html'>Go back</a></p>";
// }
    const currentProductId = params.get("id");

// Function to get relevant products based on the current product's category
function getRelevantProducts(currentProductId) {
    // Find the current product
    const currentProduct = items.find(product => product.id === currentProductId);
    if (!currentProduct) return [];

    // Filter products from the same category, excluding the current product
    const relevantProducts = items.filter(product => product.title === currentProduct.title && product.id !== currentProductId);

    // Return up to 4 relevant products
    return relevantProducts.slice(0, 6);
}

// Function to display relevant products
function displayRelevantProducts(currentProductId) {
    const relevantProducts = getRelevantProducts(currentProductId);

    relevantProducts.forEach((product, index) => {
        const imgElement = document.getElementById(`relitem${index + 1}`);
        if (imgElement) {
            imgElement.src = product.image;
            imgElement.alt = product.name;

            const linkElement = imgElement.parentElement;
            linkElement.href = `sproduct.html?id=${product.id}`;
        }
    });
}

// Display relevant products for the current product
displayRelevantProducts(itemId);

// Get elements
const sizeGuideText = document.getElementById('sizeguide');
const modal = document.getElementById('sizeGuideModal');
const closeModal = document.getElementById('closeModal');

// When the text is clicked, display the modal
sizeGuideText.addEventListener('click', function() {
  modal.style.display = 'block';
});

// When the close icon is clicked, hide the modal
closeModal.addEventListener('click', function() {
  modal.style.display = 'none';
});

// Optionally, clicking outside the modal content can also hide the modal
window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});


const qsub = document.getElementById("qminus");
const qvalue = document.getElementById("numinput");
const qadd = document.getElementById("qplus");

function checkValue() {
  let value = parseInt(qvalue.value);
  if (value <= 1) {
    qsub.style.opacity = "0.3";
    qsub.style.cursor = "not-allowed";
  } else {
    qsub.style.opacity = "1";
    qsub.style.cursor = "pointer";
  }
}

qvalue.addEventListener("input", checkValue);

qsub.addEventListener('click', function() {
  let value = parseInt(qvalue.value);
  if (value > 1) {  
    qvalue.value = value -1;
    checkValue();
  }
});
qadd.style.cursor="pointer"
qadd.addEventListener('click', function() {
  let value = parseInt(qvalue.value);
  qvalue.value = value +1;
  checkValue();
});

checkValue();

// Add to Cart button select karo
const addToCartBtn = document.getElementById("add-to-cart");

// Function jo cart mein item add karega
function addToCart() {
    const params = new URLSearchParams(window.location.search);
    const itemId = params.get("id");

    const item = items.find(i => i.id === itemId);
    if (!item) return;

    // Selected size & quantity le lo
    const selectedSize = document.querySelector("select").value;
    const quantity = parseInt(document.getElementById("numinput").value);

    if (selectedSize === "Select Size") {
        alert("Please select a size before adding to cart.");
        return;
    }

    // Cart ko local storage se load karo
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Dekho item pehle se exist karta hai?
    let existingItem = cart.find(cartItem => cartItem.id === itemId && cartItem.size === selectedSize);

    if (existingItem) {
        existingItem.quantity += quantity; // Agar item exist kare, toh sirf quantity increase karo
    } else {
        cart.push({
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.image,
            size: selectedSize,
            quantity: quantity
        });
    }

    // Cart ko local storage mein save karo
    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Item added to cart!");
}

// Button pe click event lagao
addToCartBtn.addEventListener("click", addToCart);

