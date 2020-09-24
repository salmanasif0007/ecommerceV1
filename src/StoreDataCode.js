const { default: NewArrival } = require("./Component/NewArrival");


firestore.collection("teacher").add({

    Course:{
      teacherInfo:{
        teacherName:"Anik Mostafa",
        courseName:'Physics',
        courseDp:"https://scx2.b-cdn.net/gfx/news/hires/2019/physics.jpg",
        },
        lectureVideo: {
        name:"Anik Mostafa",
        subject:[
          'physics chapter 1',
          'physics chapter 2',
          'physics chapter 3',
          'physics chapter 4',
          'physics chapter 5',
          'physics chapter 6',
          ],
        url:[
          "https://www.youtube.com/embed/DWwhZvUxOns?list=PLtBe8lbPkDVNI2IdkIa6PvWsyCOW79mbG",
          "https://www.youtube.com/embed/KkidpuTIOhc?list=PLtBe8lbPkDVNI2IdkIa6PvWsyCOW79mbG",
          "https://www.youtube.com/embed/hcFTw6l-TIM?list=PLtBe8lbPkDVNI2IdkIa6PvWsyCOW79mbG",
          "https://www.youtube.com/embed/SocMvo3atGU?list=PLtBe8lbPkDVNI2IdkIa6PvWsyCOW79mbG",
          "https://www.youtube.com/embed/EQOCBc3oiQY?list=PLtBe8lbPkDVNI2IdkIa6PvWsyCOW79mbG",
          "https://www.youtube.com/embed/eYVxghwP5ss?list=PLtBe8lbPkDVNI2IdkIa6PvWsyCOW79mbG",
          ]
      },
  
  
      file:{
        file:["firebasestorage.googleapis.com/v0/b/stadolproject.appspot.com/o/PDF%2FShort-stories-from-100-Selected-Stories.pdf?alt=media&token=651963ed-d84c-4635-8970-75409fe8efb2","firebasestorage.googleapis.com/v0/b/stadolproject.appspot.com/o/PDF%2FShort-stories-from-100-Selected-Stories.pdf?alt=media&token=651963ed-d84c-4635-8970-75409fe8efb2","https://firebasestorage.googleapis.com/v0/b/stadolproject.appspot.com/o/PDF%2FPaperback-Top-View-Left-Right-Inside-Pages-PSD-Mockup.jpg?alt=media&token=638e3358-a651-4fc8-ac1f-5b24547e10c1"],
        date:["05/07/2020","08/05/2020","12/05/2020"],
        fileName:["physicsC1.pdf","physicsC3.pdf","physicsC4.jpg"]
      },
      exam:{
        nameOfExam:["Physics Chapter One","Physics Chapter five","Physics Chapter Six"],
        examDate:["09/07/13","12/07/13","15/07/13"],
        mark:["10","18",'34'],
        totalmark:["30","50","100"],
      },
      assignment:{
        nameOfAssignment:["Physics Chapter One","Physics Chapter five","Physics Chapter Six"],
        assignmentDate:["07/07/13","10/07/13","13/07/13"],
        assignmentFile:[
          "firebasestorage.googleapis.com/v0/b/stadolproject.appspot.com/o/PDF%2FShort-stories-from-100-Selected-Stories.pdf?alt=media&token=651963ed-d84c-4635-8970-75409fe8efb2",
          "firebasestorage.googleapis.com/v0/b/stadolproject.appspot.com/o/PDF%2FShort-stories-from-100-Selected-Stories.pdf?alt=media&token=651963ed-d84c-4635-8970-75409fe8efb2",
          "https://firebasestorage.googleapis.com/v0/b/stadolproject.appspot.com/o/PDF%2FPaperback-Top-View-Left-Right-Inside-Pages-PSD-Mockup.jpg?alt=media&token=638e3358-a651-4fc8-ac1f-5b24547e10c1"],
        assignmentInfo:["This is a assignment of physics chapter one","This is a assignment of physics chapter Five","This is a assignment of physics chapter Six"],
        assignmentName:["physicsC1.pdf","physicsC5.pdf","physicsC6.jpg"]
      },
      discussion:{
        commenterName:"Salman Asif",
        content:"That's really good",
        chapterName:"Physics Chapter One"
      },
      studentId:[],
      
    teacherConnect:{
      Notification:["How are you all ?","Math course will be started soon"],
      Qna:['Checking chapter 4'],
  }}
  })
  .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
  });
  
  








                                                //   product file       


firebase.firestore().collection("product").add({
    productName:"",
    productDetails:"",
    productPrice:"",
    productImg:"",
    reatting:"",
    comment:[{
        userName:"Salman Asif",
        UserComment:"That's Rally good phone",
        userImg:"https://scontent.fdac90-1.fna.fbcdn.net/v/t1.0-9/109520832_2745896775697560_8499902460103558254_o.jpg?_nc_cat=100&_nc_sid=a4a2d7&_nc_eui2=AeFr1oxSmLXT6dlWZwj-rY6tZ40YsGFEMHxnjRiwYUQwfDPGX1zWjzoNFzpW5k_aRPF_kBpl-VJGQxuH3macH1_o&_nc_ohc=WpYC4nuj4_sAX_srsnz&_nc_ht=scontent.fdac90-1.fna&oh=a55836637fbdcb3e15e120ba12020d7f&oe=5F582DDD",
        userReatting:"5"
    }],
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });

                                            //    ALL DATA

    firebase.firestore().collection("data").add({
        Catagory:["Smart Phone","Computer","Furniture","Sports","T-shirt","more"],
        allProducts:[
            {
                productImg:"https://www.mobiledokan.com/wp-content/uploads/2020/04/Realme-6-white.jpg",
                type:"Smart Phone",
                productName:"Realme 6",
                productId:"AjDGEa5kuChlFnNr2V6a",
                productDetails:"Realme 6 comes with 6.5 inches",
                productPrice:"19000"
            },
            {
                productImg:"https://i.pinimg.com/236x/54/11/db/5411db700e6fc2a52a2984e975685da7--christian-school-christian-church.jpg",
                type:"T-shirt",
                productName:" CK",
                productId:"5C6Ucbzno3s0O3mvlK1J",
                productDetails:"We don't know when or if this item will be back in stock",
                productPrice:"550"
            },
            {
                productImg:"https://www.bhphotovideo.com/images/images2500x2500/apple_mvfj2ll_a_13_3_macbook_air_with_1492876.jpg",
                type:"Computer",
                productName:"Apple Macbook Pro 13.3 Inch Retina Display with Touch Bar, Core i5-1.4GHz, 8GB Ram, 128GB SSD (MUHN2) Space Gray (2019)",
                productId:"FDELkRLHAldkv7lUwd5i",
                productDetails:"Apple Macbook Pro (MUHN2) comes with 8th Generation Intel Quad-Core processor",
                productPrice:"129000"
            },
            {
                productImg:"https://i.pinimg.com/474x/5a/02/10/5a0210b93052c2514c1cd0ad0cc27a79.jpg",
                type:"Furniture",
                productName:"Luxury Bed 02",
                productId:"JfSahqLI4e9Szn3XqsdM",
                productDetails:"Product Details:BedCode: B27463798DFPlywoodLacqure polishSolid wood",
                productPrice:"179560"
            },
            {
                productImg:"https://cdn.sweatband.com/yonex_nanoray_3_badminton_racket_ss19_yonex_nanoray_3_badminton_racket_ss19_400x400.jpg",
                type:"Sports",
                productName:"Yonex Badminton Racket",
                productId:"MQiR60eQctN7zf8nwfj0",
                productDetails:"In order to cater the variegated demands of our clients, we are offering an excellent quality range of Yonex",
                productPrice:"17950"
            },
            {
                productImg:"https://www.startech.com.bd/image/cache/catalog/laptop/razer/blade-15/blade-15-1-500x500.jpg",
                type:"Computer",
                productName:"Razer Blade 15 Base Model Core i7 9th Gen GTX 1660 Ti 6GB Graphics 15.6″ FHD Gaming Laptop",
                productId:"O1ZiufeefCz5A1CXEcM4",
                productDetails:"Razer has finally brought a laptop that is truly is made for gamers. From the design to the intricate choice of components has made this laptop be the number one choice for any gamer. From sleek design a to the battery life this is the best portable gaming laptop in its generation.",
                productPrice:"155000"
            },
            {
                productImg:"https://www.mobiledokan.com/wp-content/uploads/2020/04/Samsung-Galaxy-A31-red.jpg",
                type:"Smart Phone",
                productName:"Samsung Galaxy A31",
                productId:"RBzyW4flBE3TLWmEnN2D",
                productDetails:"Samsung Galaxy A31 comes with 6.4 inches Super AMOLED Full HD+ screen. It has a Full-View waterdrop notch design.",
                productPrice:"20000"
            },
            {
                productImg:"https://i.pinimg.com/236x/71/d9/c1/71d9c185b8bc727028c99772e36cc61e--kids-shirts-t-shirt-designs.jpg",
                type:"T-shirt",
                productName:" Ylm Nolitka",
                productId:"Rdap8rDj80vqDiBym8rL",
                productDetails:"We don't know when or if this item will be back in stock",
                productPrice:"550"
            },
            {
                productImg:"https://www.startech.com.bd/image/cache/catalog/laptop/asus/ux433fn/ux433fa-main-500x500.jpeg",
                type:"Computer",
                productName:"Asus ZenBook UX433FA 8265U i5 8th Gen 14 Full HD Ultra-Slim Laptop With Genuine Windows 10",
                productId:"Vpx90buwWsPfI6IN2PMU",
                productDetails:"These are the qualities that define the elegant new ZenBook 14. Everything in this take-anywhere masterpiece",
                productPrice:"87500"
            },
            {
                productImg:"https://www.mobiledokan.com/wp-content/uploads/2020/02/Poco-X2-blue.jpg",
                type:"Smart Phone",
                productName:"Xiaomi Poco X2",
                productId:"YEuPZkxQ70vw0VQr3lIh",
                productDetails:"Poco X2 comes with 6.67 inches Full HD+ IPS LCD screen. It has a dual punch-hole front camera design.",
                productPrice:"24000"
            },
            {
                productId:"YI8I8bAlwabUwSrLmbBs",
                productImg:"https://images-na.ssl-images-amazon.com/images/I/91u3hs%2BIDZL._SX466_.jpg",
                type:"Sports",
                productName:" Nivia Trainer Football ",

                productDetails:"We don't know when or if this item will be back in stock",
                productPrice:"1950"
            },
            {
                productImg:"https://www.startech.com.bd/image/cache/catalog/laptop/acer/spin-5/spin-5-1-500x500.jpg",
                type:"Computer",
                productName:"Acer Spin 5 Core i5 8th Gen 13.3'' Full HD Multi-Touch Display Laptop with Windows 10",
                productId:"eMyl1KBpDvtsIvw87alx",
                productDetails:"The 360° hinge provides extra ventilation space under the device to provide more airflow ",
                productPrice:"77000"
            },
            {
                productImg:"https://www.startech.com.bd/image/cache/catalog/laptop/huawei/matebook-d15/matebook-d15-500x500.jpg",
                type:"Computer",
                productName:"Huawei MateBook D15 AMD Ryzen 5 3500U 256GB SSD 15.6-inch FHD Laptop",
                productId:"exPwlEfDMw17AuHgBFEn",
                productDetails:"Get lost in 15.6 inches of beautiful IPS FullView screen. Featuring an incredible 87% screen-to-body ratio",
                productPrice:"63999"
            },

            {
                productImg:"https://www.mobiledokan.com/wp-content/uploads/2019/09/Xiaomi-Mi-9T.jpg",
                type:"Smart Phone",
                productName:"Xiaomi Mi 9T",
                productId:"gbKIZUrFLvfoDI6WoQ97",
                productDetails:"Xiaomi Mi 9T comes with 6.39 inches Full HD+ AMOLED screen. It has a Max-View design with motorized pop-up camera. ",
                productPrice:"24000"
            },
            {
                productId:"gnCrOLI3fGghEJRXa7t8",
                productImg:"https://sc01.alicdn.com/kf/HTB1jr.NJFXXXXaOXpXXq6xXFXXXG.jpg",
                type:"T-shirt",
                productName:" Z-max ",

                productDetails:"We don't know when or if this item will be back in stock",
                productPrice:"950"
            },
            {
                productImg:"https://cdn3.volusion.com/wvvza.greqc/v/vspfiles/photos/PC-30-Blue-2.jpg",
                type:"Sports",
                productName:"Yonex Badminton Shoe",
                productId:"pbFqRJZOQV734f30rCVW",
                productDetails:"In order to cater the variegated demands of our clients, we are offering an excellent quality range of Yonex",
                productPrice:"12950"
            },
            {
                productId:"qNQDSbmkpcwrLe6CSDXi",
                productImg:"https://mellothings.com/wp-content/uploads/2019/05/mockup-1b20268f.jpg",
                type:"T-shirt",
                productName:"Japani Roll",

                productDetails:"We don't know when or if this item will be back in stock",
                productPrice:"1550"
            },
            {
                productImg:"https://www.mobiledokan.com/wp-content/uploads/2020/02/Xiaomi-Redmi-8A-Dual.jpg",
                type:"Smart Phone",
                productName:"Xiaomi Redmi 8A ",
                productId:"tXfuFcMBwFAf0nJiVeWI",
                productDetails:"Xiaomi Redmi 8A comes with 6.22 inches HD+ screen. It has a a Full-View waterdrop notch design",
                productPrice:"12999"
            },
            {
                productId:"uGKBcNLuabsfF7OtFuvI",
                productImg:"https://www.mobiledokan.com/wp-content/uploads/2020/05/Oppo-A52-new-green.jpg",
                type:"Smart Phone",
                productName:"Oppo A52",

                productDetails:"Oppo A52 comes with 6.5 inches Full HD+ LTPS IPS LCD screen",
                productPrice:"19990"
            },
            {
                productId:"zF2Q27uk0GhOgSO9WBmd",
                productImg:"https://5.imimg.com/data5/CQ/MT/FG/SELLER-45683410/luxury-bed-500x500.jpg",
                type:"Furniture",
                productName:"Luxury Bed 01",

                productDetails:"Product Details:BedCode: B273MDFPlywoodLacqure polishSolid wood",
                productPrice:"155999"
            },
        ],
        NewArrival:[
            {
                productImg:"https://www.mobiledokan.com/wp-content/uploads/2020/04/Realme-6-white.jpg",
                productId:'AjDGEa5kuChlFnNr2V6a'
            },
            {
                productImg:"https://i.pinimg.com/474x/5a/02/10/5a0210b93052c2514c1cd0ad0cc27a79.jpg",
                productId:"JfSahqLI4e9Szn3XqsdM",
            },
            {
                productImg:"https://www.startech.com.bd/image/cache/catalog/laptop/razer/blade-15/blade-15-1-500x500.jpg",
                productId:"O1ZiufeefCz5A1CXEcM4",
            },
            {
                productId:"uGKBcNLuabsfF7OtFuvI",
                productImg:"https://www.mobiledokan.com/wp-content/uploads/2020/05/Oppo-A52-new-green.jpg",
            },
            {
                productImg:"https://www.bhphotovideo.com/images/images2500x2500/apple_mvfj2ll_a_13_3_macbook_air_with_1492876.jpg",
                productId:"FDELkRLHAldkv7lUwd5i",
            },
            {
                productId:"YI8I8bAlwabUwSrLmbBs",
                productImg:"https://images-na.ssl-images-amazon.com/images/I/91u3hs%2BIDZL._SX466_.jpg",
            },
            {
                productId:"qNQDSbmkpcwrLe6CSDXi",
                productImg:"https://mellothings.com/wp-content/uploads/2019/05/mockup-1b20268f.jpg",
            },
        ],
        recomended:[

            {
                productImg:"https://cdn3.volusion.com/wvvza.greqc/v/vspfiles/photos/PC-30-Blue-2.jpg",
                type:"Sports",
                productName:"Yonex Badminton Shoe",
                productId:"pbFqRJZOQV734f30rCVW",
                productDetails:"In order to cater the variegated demands of our clients, we are offering an excellent quality range of Yonex",
                productPrice:"12950"
            },
            {
                productImg:"https://www.bhphotovideo.com/images/images2500x2500/apple_mvfj2ll_a_13_3_macbook_air_with_1492876.jpg",
                type:"Computer",
                productName:"Apple Macbook Pro 13.3 Inch Retina Display with Touch Bar, Core i5-1.4GHz, 8GB Ram, 128GB SSD (MUHN2) Space Gray (2019)",
                productId:"FDELkRLHAldkv7lUwd5i",
                productDetails:"Apple Macbook Pro (MUHN2) comes with 8th Generation Intel Quad-Core processor",
                productPrice:"129000"
            },
            {
                productImg:"https://i.pinimg.com/474x/5a/02/10/5a0210b93052c2514c1cd0ad0cc27a79.jpg",
                type:"Furniture",
                productName:"Luxury Bed 02",
                productId:"JfSahqLI4e9Szn3XqsdM",
                productDetails:"Product Details:BedCode: B27463798DFPlywoodLacqure polishSolid wood",
                productPrice:"179560"
            },
            {
                productId:"qNQDSbmkpcwrLe6CSDXi",
                productImg:"https://mellothings.com/wp-content/uploads/2019/05/mockup-1b20268f.jpg",
                type:"T-shirt",
                productName:"Japani Roll",

                productDetails:"We don't know when or if this item will be back in stock",
                productPrice:"1550"
            },
            {
                productId:"uGKBcNLuabsfF7OtFuvI",
                productImg:"https://www.mobiledokan.com/wp-content/uploads/2020/05/Oppo-A52-new-green.jpg",
                type:"Smart Phone",
                productName:"Oppo A52",

                productDetails:"Oppo A52 comes with 6.5 inches Full HD+ LTPS IPS LCD screen",
                productPrice:"19990"
            },
            {
                productImg:"https://www.startech.com.bd/image/cache/catalog/laptop/razer/blade-15/blade-15-1-500x500.jpg",
                type:"Computer",
                productName:"Razer Blade 15 Base Model Core i7 9th Gen GTX 1660 Ti 6GB Graphics 15.6″ FHD Gaming Laptop",
                productId:"O1ZiufeefCz5A1CXEcM4",
                productDetails:"Razer has finally brought a laptop that is truly is made for gamers. From the design to the intricate choice of components has made this laptop be the number one choice for any gamer. From sleek design a to the battery life this is the best portable gaming laptop in its generation.",
                productPrice:"155000"
            },
            
            // {
            //     productImg:"https://i.pinimg.com/236x/54/11/db/5411db700e6fc2a52a2984e975685da7--christian-school-christian-church.jpg",
            //     productId:'5C6Ucbzno3s0O3mvlK1J'
            // },
            // {
            //     productImg:"https://www.bhphotovideo.com/images/images2500x2500/apple_mvfj2ll_a_13_3_macbook_air_with_1492876.jpg",
            //     productId:"FDELkRLHAldkv7lUwd5i",
            // },
            // {
            //     productImg:"https://i.pinimg.com/474x/5a/02/10/5a0210b93052c2514c1cd0ad0cc27a79.jpg",
            //     productId:"JfSahqLI4e9Szn3XqsdM",
            // },
            // {
            //     productImg:"https://cdn.sweatband.com/yonex_nanoray_3_badminton_racket_ss19_yonex_nanoray_3_badminton_racket_ss19_400x400.jpg",
            //     productId:"MQiR60eQctN7zf8nwfj0",
            // },
            // {
            //     productId:"fBbE9b0D883H3emRasPe",
            //     productImg:"https://www.startech.com.bd/image/cache/catalog/laptop/msi/ge63-raider/ge63-raider-500x500.jpg",
            // },
            // {
            //     productId:"YI8I8bAlwabUwSrLmbBs",
            //     productImg:"https://images-na.ssl-images-amazon.com/images/I/91u3hs%2BIDZL._SX466_.jpg",
            // },
            // {
            //     productId:"uGKBcNLuabsfF7OtFuvI",
            //     productImg:"https://www.mobiledokan.com/wp-content/uploads/2020/05/Oppo-A52-new-green.jpg",
            // },
        ],
        topCollection:[
            {
                productImg:"https://www.mobiledokan.com/wp-content/uploads/2020/04/Realme-6-white.jpg",
                productId:'AjDGEa5kuChlFnNr2V6a'
            },
            {
                productId:"zF2Q27uk0GhOgSO9WBmd",
                productImg:"https://5.imimg.com/data5/CQ/MT/FG/SELLER-45683410/luxury-bed-500x500.jpg",
            },
            {
                productImg:"https://www.bhphotovideo.com/images/images2500x2500/apple_mvfj2ll_a_13_3_macbook_air_with_1492876.jpg",
                productId:"FDELkRLHAldkv7lUwd5i",
            },
            {
                productId:"fBbE9b0D883H3emRasPe",
                productImg:"https://www.startech.com.bd/image/cache/catalog/laptop/msi/ge63-raider/ge63-raider-500x500.jpg",
            },
            {
                productId:"gnCrOLI3fGghEJRXa7t8",
                productImg:"https://sc01.alicdn.com/kf/HTB1jr.NJFXXXXaOXpXXq6xXFXXXG.jpg",
            },
            {
                productId:"qNQDSbmkpcwrLe6CSDXi",
                productImg:"https://mellothings.com/wp-content/uploads/2019/05/mockup-1b20268f.jpg",
            },
            {
                productImg:"https://www.startech.com.bd/image/cache/catalog/laptop/razer/blade-15/blade-15-1-500x500.jpg",
                productId:"O1ZiufeefCz5A1CXEcM4",
            },
        ],
        topCatagory:["Smart Phone","Computer","Furniture","Sports","T-shirt","more"],
        })
    
    
    





    .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
    console.error("Error adding document: ", error);
    });
    
    