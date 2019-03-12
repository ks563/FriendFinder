//holds data of friends to match input from survey to

var friendsArray = [
    {
        name: "Donna",
        photo: "https://vignette.wikia.nocookie.net/westwing/images/9/9c/Donna.jpg/revision/latest?cb=20160709170910",
        scores: [5, 2, 3, 4, 5, 5, 1, 5, 3, 2]
    }, {
        name: "Josh",
        photo: "https://i.pinimg.com/originals/dd/5d/2a/dd5d2af05ac4923b01cc1e002d4e7197.jpg",
        scores: [2, 5, 1, 2, 3, 5, 4, 3, 5, 5]
    }, {
        name: "Sam",
        photo: "https://i.pinimg.com/originals/34/9d/34/349d3425f33140630170c30bcdcf44e9.jpg",
        scores: [5, 5, 3, 5, 4, 5, 2, 4, 5, 5]
    }, {
        name: "CJ",
        photo: "https://i.kinja-img.com/gawker-media/image/upload/s--19lW3_Pc--/c_scale,f_auto,fl_progressive,q_80,w_800/odttahsdgl6ljfgqqysm.jpg",
        scores: [5, 5, 2, 3, 3, 5, 4, 3, 4, 3]
    }
];

//makes data available to other files
module.exports = friendsArray;