var express = require('express');
var router = express.Router();

const dummyJSON = {
  test: [
    {
      "_id": "65639e63cc46995d67e9cbc9",
      "index": 0,
      "guid": "df3f22d1-5e99-42b3-9852-a6493d40281f",
      "isActive": false,
      "balance": "$2,723.72",
      "picture": "http://placehold.it/32x32",
      "age": 35,
      "eyeColor": "blue",
      "name": "Roman Pate",
      "gender": "male",
      "company": "TALKALOT",
      "email": "romanpate@talkalot.com",
      "phone": "+1 (912) 439-2926",
      "address": "663 Schaefer Street, Fedora, New York, 8411",
      "about": "Aliqua consequat amet quis ullamco voluptate. Amet irure officia minim qui reprehenderit. Tempor quis mollit eu veniam consectetur esse laborum quis dolor. Dolore et qui nisi consequat id ipsum duis enim et commodo aliquip dolore.\r\n",
      "registered": "2022-02-06T12:58:02 -03:00",
      "latitude": 68.269697,
      "longitude": -4.828093,
      "tags": [
        "reprehenderit",
        "eu",
        "anim",
        "in",
        "enim",
        "commodo",
        "sunt"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Barber Wilkins"
        },
        {
          "id": 1,
          "name": "Willie Mathews"
        },
        {
          "id": 2,
          "name": "Jimmie Weeks"
        }
      ],
      "greeting": "Hello, Roman Pate! You have 3 unread messages.",
      "favoriteFruit": "banana"
    },
    {
      "_id": "65639e632aea73791d2c7c83",
      "index": 1,
      "guid": "6c56846b-9df5-4748-85b3-7445cd2d58b3",
      "isActive": true,
      "balance": "$3,787.28",
      "picture": "http://placehold.it/32x32",
      "age": 26,
      "eyeColor": "blue",
      "name": "Yates Mills",
      "gender": "male",
      "company": "ORBAXTER",
      "email": "yatesmills@orbaxter.com",
      "phone": "+1 (879) 584-3050",
      "address": "309 Greene Avenue, Bergoo, Puerto Rico, 4627",
      "about": "Occaecat incididunt eiusmod cupidatat aute incididunt excepteur sunt aliqua pariatur. Laborum sunt sint exercitation excepteur enim ex non. Ex deserunt ipsum cillum qui magna sunt excepteur reprehenderit consequat labore velit.\r\n",
      "registered": "2017-08-21T08:57:55 -03:00",
      "latitude": -15.475687,
      "longitude": 37.712832,
      "tags": [
        "ullamco",
        "laborum",
        "fugiat",
        "nostrud",
        "ut",
        "minim",
        "consequat"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Peggy Sloan"
        },
        {
          "id": 1,
          "name": "Giles Cohen"
        },
        {
          "id": 2,
          "name": "Browning Hickman"
        }
      ],
      "greeting": "Hello, Yates Mills! You have 8 unread messages.",
      "favoriteFruit": "apple"
    },
    {
      "_id": "65639e63e676e3bb805e0349",
      "index": 2,
      "guid": "3762cbf4-6ba1-4c1c-99f7-7b1797026d6d",
      "isActive": false,
      "balance": "$3,797.05",
      "picture": "http://placehold.it/32x32",
      "age": 24,
      "eyeColor": "blue",
      "name": "Hewitt Durham",
      "gender": "male",
      "company": "ZILLACOM",
      "email": "hewittdurham@zillacom.com",
      "phone": "+1 (971) 477-2644",
      "address": "426 Java Street, Herlong, Alabama, 9733",
      "about": "Dolore excepteur esse excepteur proident consectetur id ut in cupidatat consectetur officia. Cupidatat commodo commodo aute laboris aliquip do reprehenderit esse sit elit amet dolore. Anim adipisicing nisi do duis excepteur ad irure amet Lorem Lorem dolor sit exercitation pariatur. Qui magna id amet ea esse. Ullamco ad magna eu cillum nisi eu laborum fugiat.\r\n",
      "registered": "2023-03-07T02:58:44 -03:00",
      "latitude": -20.412063,
      "longitude": -78.702675,
      "tags": [
        "reprehenderit",
        "proident",
        "cupidatat",
        "qui",
        "aliqua",
        "cupidatat",
        "enim"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Tania Fitzpatrick"
        },
        {
          "id": 1,
          "name": "Maude Bailey"
        },
        {
          "id": 2,
          "name": "Eileen Willis"
        }
      ],
      "greeting": "Hello, Hewitt Durham! You have 9 unread messages.",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "65639e6323ef1fdfd23d5ec3",
      "index": 3,
      "guid": "2f0b192d-ce34-4b7f-830b-2e134516a7ca",
      "isActive": false,
      "balance": "$1,760.56",
      "picture": "http://placehold.it/32x32",
      "age": 32,
      "eyeColor": "brown",
      "name": "Alberta Thompson",
      "gender": "female",
      "company": "STRALOY",
      "email": "albertathompson@straloy.com",
      "phone": "+1 (923) 435-2569",
      "address": "644 Schroeders Avenue, Forestburg, Connecticut, 5058",
      "about": "Sint ex sunt sint excepteur cupidatat deserunt eiusmod deserunt eiusmod aliquip sit ipsum veniam voluptate. Ex officia irure in ad minim culpa culpa. Lorem nisi ea cillum adipisicing consectetur ullamco deserunt culpa est. Ex laboris ut est in officia.\r\n",
      "registered": "2021-01-05T04:12:42 -03:00",
      "latitude": 83.00024,
      "longitude": -167.203706,
      "tags": [
        "ullamco",
        "excepteur",
        "ex",
        "tempor",
        "et",
        "sint",
        "cupidatat"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Donovan Thomas"
        },
        {
          "id": 1,
          "name": "Dominique Nixon"
        },
        {
          "id": 2,
          "name": "Jacobs Bradley"
        }
      ],
      "greeting": "Hello, Alberta Thompson! You have 10 unread messages.",
      "favoriteFruit": "apple"
    },
    {
      "_id": "65639e63901f1673f6300cac",
      "index": 4,
      "guid": "9c3d3847-91b3-4660-81c7-6fde83ee5ec8",
      "isActive": false,
      "balance": "$1,443.73",
      "picture": "http://placehold.it/32x32",
      "age": 22,
      "eyeColor": "blue",
      "name": "Beatrice Nunez",
      "gender": "female",
      "company": "ZILENCIO",
      "email": "beatricenunez@zilencio.com",
      "phone": "+1 (887) 589-3805",
      "address": "678 Beadel Street, Belvoir, New Mexico, 6723",
      "about": "Tempor qui consectetur qui fugiat mollit pariatur ex commodo quis non in nostrud in. Id aute dolore commodo pariatur esse consequat. Cillum sunt nisi laboris officia laborum ullamco cupidatat ex. Consequat ex ullamco amet culpa reprehenderit.\r\n",
      "registered": "2018-07-19T12:53:01 -03:00",
      "latitude": -62.441666,
      "longitude": 76.999478,
      "tags": [
        "est",
        "reprehenderit",
        "quis",
        "magna",
        "reprehenderit",
        "est",
        "occaecat"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Aileen Atkinson"
        },
        {
          "id": 1,
          "name": "Cantu Daniels"
        },
        {
          "id": 2,
          "name": "Kemp Bird"
        }
      ],
      "greeting": "Hello, Beatrice Nunez! You have 8 unread messages.",
      "favoriteFruit": "strawberry"
    }
  ]
}

/* GET home page. */
router.get('/', function (req, res, next) {
  // res.render('index', { title: 'Express' });
    res.send(JSON.stringify(dummyJSON));
});

module.exports = router;
