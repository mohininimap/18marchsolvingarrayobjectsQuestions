let groceryshop = [
    {
      title: "jbl speakers",
      price: 1000,
      status: "Available",
      soldQuantity: 20,
      comingSoon: "no",
      category: "electronics",
    },
    {
      title: "sparx shoes",
      price: 600,
      status: "Available",
      soldQuantity: 5,
      comingSoon: "no",
      category: "footwear",
    },
    {
      title: "tshirt",
      price: 350,
      status: "Unavailable",
      soldQuantity: 15,
      comingSoon: "yes",
      category: "clothing",
    },
    {
      title: "good day biscuit",
      price: 100,
      status: "Available",
      soldQuantity: 40,
      comingSoon: "no",
      category: "packaged food",
    },
    {
      title: "jeans pant",
      price: 500,
      status: "Available",
      soldQuantity: 30,
      comingSoon: "no",
      category: "clothing",
    },
    {
      title: "mac laptop",
      price: 80000,
      status: "Available",
      soldQuantity: 10,
      comingSoon: "no",
      category: "electronics",
    },
    {
      title: "hide and seek",
      price: 80,
      status: "Available",
      soldQuantity: 50,
      comingSoon: "no",
      category: "packaged food",
    },
    {
      title: "samsung tv",
      price: 30000,
      status: "Unavailable",
      soldQuantity: 20,
      comingSoon: "no",
      category: "electronics",
    },
    {
      title: "dining table",
      price: 10000,
      status: "Available",
      soldQuantity: 3,
      comingSoon: "no",
      category: "home",
    },
    {
      title: "dark fantasy",
      price: 300,
      status: "Unavailable",
      soldQuantity: 18,
      comingSoon: "yes",
      category: "packaged food",
    },
  ];
  
  class GloceryShop {
    constructor(element) {
      this.val = element;
    }
    readName() {
      this.val.filter((element)=>{

        return element.price>100;
      }).map((element)=>{
        document.getElementById("ans").className = " style2";
  
       document.getElementById("ans").innerHTML+=`Title : ${element.title} Price : ${element.price} Status : ${element.status} Sold Quantity : ${element.soldQuantity} Coming Soon : ${element.comingSoon} Category : ${element.category}<br>`
      
     
      })

  }
  }
  let glocerys = new GloceryShop(groceryshop);
  glocerys.readName();
  