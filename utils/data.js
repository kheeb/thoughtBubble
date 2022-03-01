const ObjectId = require('mongodb').ObjectId;

const userData = [
    {
    "_id": ObjectId('621c6291416b91b3b69818ff'),
    "username": "ladyWhistledown",
    "email": "bookworm03@gmail.com"
    },
    {
    "_id": ObjectId("621c6306416b91b3b6981901"),
    "username": "theduke",
    "email": "dukeofhastings@gmail.com"
    },
    {
    "_id": ObjectId("621c64c5416b91b3b6981908"),
    "username": "duchessdaphne",
    "email":"theduchessofhasatings@gmail.com"
    },
    {
    "_id": ObjectId("621c642d416b91b3b6981906"),
    "username":"theQueen",
    "email":"HRHQueenCharlote@uk.gov"
    },
    {
    "_id": ObjectId("621c6505416b91b3b698190a"),
    "username":"EBridgerton",
    "email":"eloisebridgerton@gmail.com"
    },
];

const thoughtData = [
    {
    "_id": ObjectId("621c76b9416b91b3b6981910"),
    "thoughtText": "If you desire the sun and the moon, all you have to do is go out and shoot at the sky.",
    "username": "EBridgerton"
    },
    {
    "_id": ObjectId("621c7721416b91b3b6981912"),
    "thoughtText": "Just becuase something is not perfect, does not make it any less worthy of love.",
    "username": "duchessdaphne"
    },
    {
    "_id": ObjectId("621c7787416b91b3b6981914"),
    "thoughtText": "All's fair in love and war.",
    "username": "ladyWhistledown"
    },
    {
    "_id": ObjectId("621c77db416b91b3b6981916"),
    "thoughtText": "I wish to be entertained.",
    "username": "theQueen"
    },
    {
    "_id": ObjectId(),
    "thoughtText": "",
    "username": ""
    },
    {
    "_id": ObjectId(),
    "thoughtText": "",
    "username": ""
    },
]

module.exports = { userData, thoughtData }