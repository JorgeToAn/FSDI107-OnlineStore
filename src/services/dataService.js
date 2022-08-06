const CATALOG = [
    {
        _id: "fhh0h0th430h2049h",
        title: "Lenovo IdeaPad Laptop",
        price: 699.99,
        image: "lenovo_laptop.jpg",
        category: "Electronics"
    },
    {
        _id: "bfuiewb2rfh9fr9fg",
        title: "Lego Haunted House Set",
        price: 300,
        image: "lego_hauntedhouse.jpg",
        category: "Toys"
    },
    {
        _id: "adaw8f9a0tuhf279",
        title: "Azul Board Game",
        price: 32,
        image: "azul_boardgame.jpg",
        category: "Board Games"
    },
    {
        _id: "aubfo823fuwbef982",
        title: "Stardew Valley: The Board Game",
        price: 88,
        image: "stardew_boardgame.jpg",
        category: "Board Games"
    },
    {
        _id: "inipqw8f429fbf921",
        title: "Uno Family Card Game",
        price: 10.89,
        image: "uno.jpg",
        category: "Card Game"
    },
    {
        _id: "fuew872f3889043bg",
        title: "Yahtzee",
        price: 8.02,
        image: "yahtzee.jpg",
        category: "Board Game"
    }
];

class DataService{
    getCatalog(){
        //call the server
        //retrieve the list of products and return it

        return CATALOG;
    }
}

export default DataService;