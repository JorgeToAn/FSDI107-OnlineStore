const CATALOG = [
    {
        _id: "fhh0h0th430h2049h",
        title: "Wingspan",
        price: 59.99,
        image: "wingspan.jpg",
        category: "Card Game"
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
        category: "Board Game"
    },
    {
        _id: "aubfo823fuwbef982",
        title: "Stardew Valley: The Board Game",
        price: 88,
        image: "stardew_boardgame.jpg",
        category: "Board Game"
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
        category: "Party Game"
    },
    {
        _id: "finesoon0823ubofs9",
        title: "Lego Star Wars BD-1",
        price: 100,
        image: "lego_starwars_bd1.jpg",
        category: "Toys"
    },
    {
        _id: "gubsg8239ub44bgqbf",
        title: "Terraforming Mars",
        price: 34.89,
        image: "terraforming_mars.webp",
        category: "Board Game"
    },
    {
        _id: "fubefuiqf8912r93efwe7",
        title: "Betrayal at House on the Hill",
        price: 23.79,
        image: "Betrayal_at_House_on_the_Hill.jpg",
        category: "Board Game"
    },
    {
        _id: "bqfpbp34299938nfefi",
        title: "Lego Atari 2600",
        price: 239.99,
        image: "lego_atari.png",
        category: "Toys"
    },
    {
        _id: "rfbqfo387t378t13ef83",
        tile: "Catan",
        price: 59.99,
        image: "catan.webp",
        category: "Board Game"
    },
    {
        _id: "njvs2314ibfibwe782",
        title: "Codenames",
        price: 9.59,
        image: "codenames.webp",
        category: "Party Game"
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