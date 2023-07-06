import React from 'react';
var contacts = [{
  _id: "013a6414-9727-4a4e-8b35-d3b9946a17c6",
  _type: "io.cozy.contacts",
  email: [{
    address: "isabelle.durand@cozycloud.cc",
    primary: true
  }]
}, {
  _id: "013a6413-9726-4a4d-8b34-d3b9946a17c5",
  _type: "io.cozy.contacts",
  address: [{
    city: "Greenville",
    country: "Bolivia, Plurinational State of",
    postcode: "12198",
    primary: true,
    street: "85 Paxton Street"
  }],
  birthday: "1981-11-23",
  email: [{
    address: "alexis.bickers@logico.club",
    primary: true
  }],
  metadata: {
    version: 1
  },
  fullname: "Alexis Bickers",
  phone: [{
    number: "+33 (9)7 58 16 92 55",
    primary: true
  }],
  relationships: {
    groups: {
      data: [{
        _id: "group_id_work",
        _type: "io.cozy.contacts.groups"
      }]
    }
  }
}, {
  _id: "0409957b-36c1-4a66-b4f7-316e1a06e8b8",
  _type: "io.cozy.contacts",
  address: [{
    city: "Fargo",
    country: "Oman",
    postcode: "81957",
    primary: true,
    street: "54 Willow Avenue"
  }],
  birthday: "1965-03-05",
  email: [{
    address: "alexa.luck@grafixmedia.name",
    primary: true
  }],
  name: {
    familyName: "Luck",
    givenName: "Alexa"
  },
  phone: [{
    number: "+33 (3)1 80 76 59 62",
    primary: true
  }]
}, {
  _id: "07719549-2087-412e-8da2-e5c0b55fe7b8",
  _type: "io.cozy.contacts",
  address: [{
    city: "Norfolk",
    country: "Tunisia",
    postcode: "33109",
    primary: true,
    street: "24 Blakeley Street"
  }],
  birthday: "1970-04-07",
  email: [{
    address: "rosanne.leath@conixco.name",
    primary: true
  }],
  metadata: {
    version: 1
  },
  name: {
    familyName: "Leath",
    givenName: "Rosanne"
  },
  phone: [{
    number: "+33 (9)4 11 94 93 17",
    primary: true
  }],
  relationships: {
    groups: {
      data: [{
        _id: "group_id_work",
        _type: "io.cozy.contacts.groups"
      }]
    }
  }
}, {
  _id: "083bf60c-287b-45e9-b3d6-0e64ee2eee2d",
  _type: "io.cozy.contacts",
  address: [{
    city: "Hobart",
    country: "Liechtenstein",
    postcode: "42424",
    primary: true,
    street: "47 Blakeley Street"
  }],
  birthday: "1974-12-13",
  email: [{
    address: "rosanne.lenihan@corerobotics.info",
    primary: true
  }],
  name: {
    familyName: "Lenihan",
    givenName: "Rosanne"
  },
  phone: [{
    number: "+33 (3)3 86 10 59 74",
    primary: true
  }]
}, {
  _id: "0c647009-9785-4d09-b18a-0f22d3bff233",
  _type: "io.cozy.contacts",
  address: [{
    city: "Pheonix",
    country: "French Southern Territories",
    postcode: "60317",
    primary: true,
    street: "89 Haredale Road"
  }],
  birthday: "1950-04-28",
  email: [{
    address: "mitch.woodrum@opticast.org",
    primary: true
  }, {
    address: "liza.bryd@multilingua.club",
    primary: false
  }],
  metadata: {
    version: 1
  },
  name: {
    familyName: "Woodrum",
    givenName: "Mitch"
  },
  phone: [{
    number: "+33 (9)7 70 95 95 36",
    primary: true
  }, {
    number: "+33 (2)0 18 10 93 80",
    primary: false
  }],
  relationships: {
    groups: {
      data: [{
        _id: "group_id_family",
        _type: "io.cozy.contacts.groups"
      }]
    }
  }
}, {
  _id: "0ea42f4a-28f1-432e-934a-68f9c50fe38e",
  _type: "io.cozy.contacts",
  address: [{
    city: "Youngstown",
    country: "Chad",
    postcode: "38300",
    primary: true,
    street: "78 Bushey Crescent"
  }],
  birthday: "1959-04-20",
  email: [{
    address: "haydee.tindel@galcom.com",
    primary: true
  }],
  name: {
    familyName: "Tindel",
    givenName: "Haydee"
  },
  phone: [{
    number: "+33 (8)7 11 08 64 48",
    primary: true
  }]
}, {
  _id: "0ffe83ef-10cf-4be6-bf6c-a189f907e65a",
  _type: "io.cozy.contacts",
  address: [{
    city: "Halifax",
    country: "New Caledonia",
    postcode: "87206",
    primary: true,
    street: "5 Mercer Street"
  }],
  birthday: "1956-06-06",
  email: [{
    address: "shea.brier@logico.club",
    primary: true
  }],
  metadata: {
    version: 1
  },
  name: {
    familyName: "Brier",
    givenName: "Shea"
  },
  phone: [{
    number: "+33 (0)8 43 39 94 21",
    primary: true
  }],
  relationships: {
    groups: {
      data: [{
        _id: "group_id_work",
        _type: "io.cozy.contacts.groups"
      }]
    }
  }
}, {
  _id: "155e4c33-f6ad-45ee-816d-5eb0874225f2",
  _type: "io.cozy.contacts",
  address: [{
    city: "Greenville",
    country: "Guadeloupe",
    postcode: "59663",
    primary: true,
    street: "87 Pitman Street"
  }],
  email: [{
    address: "neida.backer@hivemind.biz",
    primary: true
  }],
  metadata: {
    version: 1
  },
  name: {
    givenName: "Hivemind"
  },
  phone: [{
    number: "+33 (1)6 74 60 61 23",
    primary: true
  }],
  relationships: {
    groups: {
      data: [{
        _id: "group_id_work",
        _type: "io.cozy.contacts.groups"
      }, {
        _id: "group_id_family",
        _type: "io.cozy.contacts.groups"
      }]
    }
  }
}, {
  _id: "1816abd3-d371-482c-ae9d-33385fb8780d",
  _type: "io.cozy.contacts",
  address: [{
    city: "Northampton",
    country: "Montenegro",
    postcode: "65005",
    primary: true,
    street: "96 Hinton Road"
  }],
  email: [{
    address: "edward.carter@tomiatech.com",
    primary: true
  }],
  metadata: {
    version: 1
  },
  name: {
    givenName: "Tomiatech"
  },
  phone: [{
    number: "+33 (4)8 48 86 77 17",
    primary: true
  }],
  relationships: {
    groups: {
      data: [{
        _id: "group_id_work",
        _type: "io.cozy.contacts.groups"
      }, {
        _id: "group_id_family",
        _type: "io.cozy.contacts.groups"
      }]
    }
  }
}, {
  _id: "1be291a9-0836-4c94-876b-5269fa901ed4",
  _type: "io.cozy.contacts",
  address: [{
    city: "Northampton",
    country: "Tokelau",
    postcode: "56285",
    primary: true,
    street: "14 Faraday Street"
  }],
  birthday: "1955-09-21",
  email: [{
    address: "katelin.bourquin@unilogic.biz",
    primary: true
  }],
  metadata: {
    version: 1
  },
  name: {
    familyName: "Bourquin",
    givenName: "Katelin"
  },
  phone: [{
    number: "+33 (9)3 52 45 98 35",
    primary: true
  }],
  relationships: {
    groups: {
      data: [{
        _id: "group_id_work",
        _type: "io.cozy.contacts.groups"
      }]
    }
  }
}, {
  _id: "23d3d724-d869-4def-841f-c85b499aa6a6",
  _type: "io.cozy.contacts",
  address: [{
    city: "Waterbury",
    country: "Iceland",
    postcode: "69639",
    primary: true,
    street: "65 Faraday Street"
  }],
  birthday: "1957-02-23",
  email: [{
    address: "cory.verde@peersys.xyz",
    primary: true
  }],
  metadata: {
    version: 1
  },
  name: {
    familyName: "Verde",
    givenName: "Cory"
  },
  phone: [{
    number: "+33 (2)3 15 97 52 48",
    primary: true
  }],
  relationships: {
    groups: {
      data: [{
        _id: "group_id_work",
        _type: "io.cozy.contacts.groups"
      }]
    }
  }
}, {
  _id: "24e83428-df51-46fd-97ed-1f7d94064548",
  _type: "io.cozy.contacts",
  address: [{
    city: "Bangor",
    country: "Lesotho",
    postcode: "15002",
    primary: true,
    street: "93 Alexander Avenue"
  }],
  birthday: "1952-12-29",
  email: [{
    address: "aiden.bryd@citisys.info",
    primary: true
  }],
  metadata: {
    version: 1
  },
  name: {
    familyName: "Bryd",
    givenName: "Aiden"
  },
  phone: [{
    number: "+33 (1)4 80 11 59 28",
    primary: true
  }],
  relationships: {
    groups: {
      data: [{
        _id: "group_id_work",
        _type: "io.cozy.contacts.groups"
      }]
    }
  }
}, {
  _id: "289a814a-0d7d-4c6d-aa6c-be8bd28456dd",
  _type: "io.cozy.contacts",
  address: [{
    city: "Charleston",
    country: "South Georgia and the South Sandwich Islands",
    postcode: "79336",
    primary: true,
    street: "72 Walford Way"
  }],
  birthday: "1988-04-29",
  email: [{
    address: "maisha.kilmer@nitrosystems.eu",
    primary: true
  }],
  metadata: {
    version: 1
  },
  name: {
    familyName: "Kilmer",
    givenName: "Maisha"
  },
  phone: [{
    number: "+33 (0)5 89 50 15 43",
    primary: true
  }],
  relationships: {
    groups: {
      data: [{
        _id: "group_id_work",
        _type: "io.cozy.contacts.groups"
      }]
    }
  }
}, {
  _id: "29fdda84-d786-4890-9fd6-842fed02d193",
  _type: "io.cozy.contacts",
  address: [{
    city: "Melbourne",
    country: "French Polynesia",
    postcode: "47415",
    primary: true,
    street: "74 Orchard Road"
  }],
  birthday: "1986-10-10",
  email: [{
    address: "danny.stine@celmax.club",
    primary: true
  }],
  name: {
    familyName: "Stine",
    givenName: "Danny"
  },
  phone: [{
    number: "+33 (3)8 94 64 96 17",
    primary: true
  }]
}, {
  _id: "2a75a0e5-cc4b-4fdc-be4d-2ac24a802368",
  _type: "io.cozy.contacts",
  address: [{
    city: "Charleston",
    country: "Madagascar",
    postcode: "18247",
    primary: true,
    street: "67 Hunt Street"
  }],
  email: [{
    address: "ivan.bryd@strategyline.eu",
    primary: true
  }],
  metadata: {
    version: 1
  },
  name: {
    givenName: "StrategyLine"
  },
  phone: [{
    number: "+33 (3)8 15 32 28 30",
    primary: true
  }],
  relationships: {
    groups: {
      data: [{
        _id: "group_id_work",
        _type: "io.cozy.contacts.groups"
      }, {
        _id: "group_id_family",
        _type: "io.cozy.contacts.groups"
      }]
    }
  }
}, {
  _id: "3043b044-072b-464f-b301-46df3ae99aee",
  _type: "io.cozy.contacts",
  address: [{
    city: "Albany",
    country: "Niger",
    postcode: "60266",
    primary: true,
    street: "92 Canal Street"
  }],
  birthday: "1974-05-17",
  email: [{
    address: "raylene.bourne@tecomix.name",
    primary: true
  }],
  metadata: {
    version: 1
  },
  name: {
    familyName: "Bourne",
    givenName: "Raylene"
  },
  phone: [{
    number: "+33 (3)5 71 20 15 93",
    primary: true
  }],
  relationships: {
    groups: {
      data: [{
        _id: "group_id_work",
        _type: "io.cozy.contacts.groups"
      }]
    }
  }
}, {
  _id: "307c4e16-70b8-4328-af1c-1d762f788e16",
  _type: "io.cozy.contacts",
  address: [{
    city: "Tacoma",
    country: "Bermuda",
    postcode: "05692",
    primary: true,
    street: "69 Elm Street"
  }],
  birthday: "1994-02-21",
  email: [{
    address: "max.higgins@maxcast.com",
    primary: true
  }],
  name: {
    familyName: "Higgins",
    givenName: "Max"
  },
  phone: [{
    number: "+33 (4)5 39 48 09 09",
    primary: true
  }]
}, {
  _id: "309067e3-81a5-45a4-8125-179185dc37da",
  _type: "io.cozy.contacts",
  address: [{
    city: "Northampton",
    country: "India",
    postcode: "39596",
    primary: true,
    street: "49 Blakeley Street"
  }],
  birthday: "1976-02-18",
  email: [{
    address: "raymond.muldoon@thermolock.info",
    primary: true
  }, {
    address: "jason.hundt@citisys.name",
    primary: false
  }],
  metadata: {
    version: 1
  },
  name: {
    familyName: "Muldoon",
    givenName: "Raymond"
  },
  phone: [{
    number: "+33 (7)2 68 87 05 72",
    primary: true
  }, {
    number: "+33 (4)5 23 05 63 86",
    primary: false
  }],
  relationships: {
    groups: {
      data: [{
        _id: "group_id_family",
        _type: "io.cozy.contacts.groups"
      }]
    }
  }
}, {
  _id: "328b1bb6-8234-4efd-b18f-1aafd58dc83e",
  _type: "io.cozy.contacts",
  address: [{
    city: "Walkerville",
    country: "Nigeria",
    postcode: "34344",
    primary: true,
    street: "92 Berkeley Street"
  }],
  birthday: "1994-02-23",
  email: [{
    address: "rosanne.stine@infracom.edu",
    primary: true
  }],
  name: {
    familyName: "Stine",
    givenName: "Rosanne"
  },
  phone: [{
    number: "+33 (9)0 11 98 31 70",
    primary: true
  }]
}, {
  _id: "366f3eec-aaa0-4c82-9f27-80ad305ecec8",
  _type: "io.cozy.contacts",
  address: [{
    city: "Oakland",
    country: "China",
    postcode: "61059",
    primary: true,
    street: "85 Winston Road"
  }],
  birthday: "1991-12-23",
  email: [{
    address: "andy.keesee@fortyfour.mobi",
    primary: true
  }],
  name: {
    familyName: "Keesee",
    givenName: "Andy"
  },
  phone: [{
    number: "+33 (0)5 64 21 84 37",
    primary: true
  }]
}, {
  _id: "398e8336-de18-43c8-8b5a-86ab72005c41",
  _type: "io.cozy.contacts",
  address: [{
    city: "Frankston",
    country: "Micronesia, Federated States of",
    postcode: "15368",
    primary: true,
    street: "9 Robinson Street"
  }],
  birthday: "1983-09-13",
  email: [{
    address: "kirstie.mercer@tomiatech.eu",
    primary: true
  }],
  name: {
    familyName: "Mercer",
    givenName: "Kirstie"
  },
  phone: [{
    number: "+33 (6)8 99 21 10 92",
    primary: true
  }]
}, {
  _id: "3e540ae7-4605-4f05-82c9-8cb901a0c34d",
  _type: "io.cozy.contacts",
  address: [{
    city: "Norfolk",
    country: "Peru",
    postcode: "27382",
    primary: true,
    street: "32 Foster Walk"
  }],
  birthday: "1987-04-29",
  email: [{
    address: "michelle.jensen@pancast.club",
    primary: true
  }],
  name: {
    familyName: "Jensen",
    givenName: "Michelle"
  },
  phone: [{
    number: "+33 (9)4 55 02 64 05",
    primary: true
  }]
}, {
  _id: "3f6007f9-9284-4bfd-9350-1cbf294bd39b",
  _type: "io.cozy.contacts",
  address: [{
    city: "Greenville",
    country: "Austria",
    postcode: "32426",
    primary: true,
    street: "77 Fairmont Avenue"
  }],
  birthday: "1981-04-29",
  metadata: {
    version: 1
  },
  name: {
    familyName: "Okainmayle",
    givenName: "Jay"
  },
  phone: [{
    number: "+33 (3)0 31 26 10 64",
    primary: true
  }],
  relationships: {
    groups: {
      data: []
    }
  }
}, {
  _id: "3fe82c80-9da3-4a42-bab5-8274df1316e6",
  _type: "io.cozy.contacts",
  address: [{
    city: "Rochester",
    country: "Uganda",
    postcode: "27943",
    primary: true,
    street: "31 Maple Street"
  }],
  birthday: "1983-05-03",
  email: [{
    address: "chloe.leath@iridimax.org",
    primary: true
  }],
  metadata: {
    version: 1
  },
  name: {
    familyName: "Leath",
    givenName: "Chloe"
  },
  phone: [{
    number: "+33 (3)7 91 15 42 39",
    primary: true
  }],
  relationships: {
    groups: {
      data: [{
        _id: "group_id_work",
        _type: "io.cozy.contacts.groups"
      }]
    }
  }
}, {
  _id: "42a330ca-a30c-489f-8939-4c1b137f84e9",
  _type: "io.cozy.contacts",
  address: [{
    city: "Nottingham",
    country: "Saint Pierre and Miquelon",
    postcode: "16585",
    primary: true,
    street: "21 Berkeley Street"
  }],
  birthday: "1992-11-15",
  email: [{
    address: "eleanore.hottle@tomiatech.edu",
    primary: true
  }],
  name: {
    familyName: "Hottle",
    givenName: "Eleanore"
  },
  phone: [{
    number: "+33 (3)6 44 88 19 04",
    primary: true
  }]
}, {
  _id: "44bae7a3-04ed-4cc3-80f8-e15fc9b2399d",
  _type: "io.cozy.contacts",
  address: [{
    city: "Redmond",
    country: "Bosnia and Herzegovina",
    postcode: "87880",
    primary: true,
    street: "24 Seaside Drive"
  }],
  birthday: "1977-08-09",
  email: [{
    address: "kurt.rohloff@corexts.org",
    primary: true
  }],
  metadata: {
    version: 1
  },
  name: {
    familyName: "Rohloff",
    givenName: "Kurt"
  },
  phone: [{
    number: "+33 (9)8 32 78 45 41",
    primary: true
  }],
  relationships: {
    groups: {
      data: [{
        _id: "group_id_work",
        _type: "io.cozy.contacts.groups"
      }]
    }
  }
}, {
  _id: "4bb1f622-5383-449e-a2d2-fc9e14006903",
  _type: "io.cozy.contacts",
  address: [{
    city: "Sacramento",
    country: "Angola",
    postcode: "12833",
    primary: true,
    street: "31 Faraday Street"
  }],
  birthday: "1998-12-10",
  email: [{
    address: "travis.paquette@zatheon.co",
    primary: true
  }],
  name: {
    familyName: "Paquette",
    givenName: "Travis"
  },
  phone: [{
    number: "+33 (2)7 21 10 25 88",
    primary: true
  }]
}, {
  _id: "507fcc3d-1423-46da-b5f9-8fbcfd3f3fe4",
  _type: "io.cozy.contacts",
  address: [{
    city: "Christchurch",
    country: "Netherlands",
    postcode: "21910",
    primary: true,
    street: "46 Walford Way"
  }],
  birthday: "1978-11-03",
  email: [{
    address: "lorelei.cadena@dalserve.club",
    primary: true
  }, {
    address: "juliana.oldman@thermatek.name",
    primary: false
  }],
  metadata: {
    version: 1
  },
  name: {
    familyName: "Cadena",
    givenName: "Lorelei"
  },
  phone: [{
    number: "+33 (4)4 72 27 49 64",
    primary: true
  }, {
    number: "+33 (0)3 15 05 94 03",
    primary: false
  }],
  relationships: {
    groups: {
      data: [{
        _id: "group_id_family",
        _type: "io.cozy.contacts.groups"
      }]
    }
  }
}, {
  _id: "53c75e29-5c9b-4c4f-b802-e4a152551b23",
  _type: "io.cozy.contacts",
  address: [{
    city: "Southampton",
    country: "Afghanistan",
    postcode: "72082",
    primary: true,
    street: "6 Prospect Place"
  }],
  birthday: "1976-03-29",
  email: [{
    address: "jay.padeutell@noemail.net",
    primary: true
  }],
  metadata: {
    version: 1
  },
  name: {
    familyName: "Padeutell",
    givenName: "Jay"
  },
  relationships: {
    groups: {
      data: []
    }
  }
}, {
  _id: "5c21e9fa-18a5-4999-b704-59b902db8542",
  _type: "io.cozy.contacts",
  address: [{
    city: "Stanford",
    country: "Isle of Man",
    postcode: "26162",
    primary: true,
    street: "83 Canal Street"
  }],
  birthday: "1996-08-03",
  email: [{
    address: "travis.sprowl@vtgrafix.name",
    primary: true
  }],
  metadata: {
    version: 1
  },
  name: {
    familyName: "Sprowl",
    givenName: "Travis"
  },
  phone: [{
    number: "+33 (8)9 22 15 20 68",
    primary: true
  }],
  relationships: {
    groups: {
      data: [{
        _id: "group_id_work",
        _type: "io.cozy.contacts.groups"
      }]
    }
  }
}, {
  _id: "627ba975-1314-4813-8366-cea7ac4734bf",
  _type: "io.cozy.contacts",
  address: [{
    city: "Norfolk",
    country: "Trinidad and Tobago",
    postcode: "50716",
    primary: true,
    street: "14 Maple Street"
  }],
  birthday: "1960-11-17",
  email: [{
    address: "jetta.neal@multiserv.net",
    primary: true
  }],
  name: {
    familyName: "Neal",
    givenName: "Jetta"
  },
  phone: [{
    number: "+33 (2)1 88 04 40 79",
    primary: true
  }]
}, {
  _id: "63d70d1a-838b-4eb4-b9ca-c3ea15937d51",
  _type: "io.cozy.contacts",
  address: [{
    city: "Charleston",
    country: "Turks and Caicos Islands",
    postcode: "74804",
    primary: true,
    street: "50 Hunt Street"
  }],
  email: [{
    address: "selma.keesee@westgate.net",
    primary: true
  }],
  metadata: {
    version: 1
  },
  name: {
    givenName: "WestGate"
  },
  phone: [{
    number: "+33 (7)6 39 42 48 60",
    primary: true
  }],
  relationships: {
    groups: {
      data: [{
        _id: "group_id_work",
        _type: "io.cozy.contacts.groups"
      }, {
        _id: "group_id_family",
        _type: "io.cozy.contacts.groups"
      }]
    }
  }
}, {
  _id: "6e109549-bbb7-4b23-a95e-794407001cd1",
  _type: "io.cozy.contacts",
  address: [{
    city: "Halifax",
    country: "Cook Islands",
    postcode: "94609",
    primary: true,
    street: "93 Stockton Lane"
  }],
  birthday: "1992-06-16",
  email: [{
    address: "edward.kelsey@hivemind.co",
    primary: true
  }],
  metadata: {
    version: 1
  },
  name: {
    familyName: "Kelsey",
    givenName: "Edward"
  },
  phone: [{
    number: "+33 (6)6 35 56 75 23",
    primary: true
  }],
  relationships: {
    groups: {
      data: [{
        _id: "group_id_work",
        _type: "io.cozy.contacts.groups"
      }]
    }
  }
}, {
  _id: "6ed104be-083e-4991-bacb-78e18f815210",
  _type: "io.cozy.contacts",
  address: [{
    city: "Seattle",
    country: "Marshall Islands",
    postcode: "79310",
    primary: true,
    street: "36 Albion Place"
  }],
  birthday: "1951-07-03",
  email: [{
    address: "madelyn.woodrum@airconix.xyz",
    primary: true
  }],
  metadata: {
    version: 1
  },
  name: {
    familyName: "Woodrum",
    givenName: "Madelyn"
  },
  phone: [{
    number: "+33 (8)4 54 36 85 66",
    primary: true
  }],
  relationships: {
    groups: {
      data: [{
        _id: "group_id_work",
        _type: "io.cozy.contacts.groups"
      }]
    }
  }
}, {
  _id: "6f767688-7118-4837-818f-610d0565ce83",
  _type: "io.cozy.contacts",
  address: [{
    city: "Denver",
    country: "Cayman Islands",
    postcode: "49200",
    primary: true,
    street: "20 Winston Road"
  }],
  birthday: "1967-06-25",
  email: [{
    address: "vaughn.friedrich@seelogic.co",
    primary: true
  }, {
    address: "dannielle.seabury@corptek.name",
    primary: false
  }],
  metadata: {
    version: 1
  },
  name: {
    familyName: "Friedrich",
    givenName: "Vaughn"
  },
  phone: [{
    number: "+33 (1)8 68 41 49 83",
    primary: true
  }, {
    number: "+33 (7)5 60 23 43 55",
    primary: false
  }],
  relationships: {
    groups: {
      data: [{
        _id: "group_id_family",
        _type: "io.cozy.contacts.groups"
      }]
    }
  }
}, {
  _id: "706364ef-f84c-4d84-896a-f96c1c6a554c",
  _type: "io.cozy.contacts",
  address: [{
    city: "Cardiff",
    country: "Ukraine",
    postcode: "21604",
    primary: true,
    street: "43 Berkeley Street"
  }],
  birthday: "1962-07-12",
  email: [{
    address: "raylene.pullman@viewtopia.me",
    primary: true
  }],
  name: {
    familyName: "Pullman",
    givenName: "Raylene"
  },
  phone: [{
    number: "+33 (0)7 90 41 79 27",
    primary: true
  }]
}, {
  _id: "71967809-8e54-4413-aa8e-35b2b945e816",
  _type: "io.cozy.contacts",
  address: [{
    city: "Newark",
    country: "Norway",
    postcode: "84101",
    primary: true,
    street: "58 Longford Crescent"
  }],
  email: [{
    address: "cecilia.latshaw@xenosys.club",
    primary: true
  }],
  metadata: {
    version: 1
  },
  name: {
    givenName: "Xenosys"
  },
  phone: [{
    number: "+33 (3)2 00 61 89 63",
    primary: true
  }],
  relationships: {
    groups: {
      data: [{
        _id: "group_id_work",
        _type: "io.cozy.contacts.groups"
      }, {
        _id: "group_id_family",
        _type: "io.cozy.contacts.groups"
      }]
    }
  }
}, {
  _id: "799b0f99-3ad7-4f07-a689-9765b4e239c9",
  _type: "io.cozy.contacts",
  address: [{
    city: "Bradford",
    country: "Aruba",
    postcode: "69222",
    primary: true,
    street: "18 Pearl Street"
  }],
  email: [{
    address: "tyler.rhymer@baramax.eu",
    primary: true
  }],
  metadata: {
    version: 1
  },
  name: {
    givenName: "Baramax"
  },
  phone: [{
    number: "+33 (3)2 38 88 00 99",
    primary: true
  }],
  relationships: {
    groups: {
      data: [{
        _id: "group_id_work",
        _type: "io.cozy.contacts.groups"
      }, {
        _id: "group_id_family",
        _type: "io.cozy.contacts.groups"
      }]
    }
  }
}, {
  _id: "7a8b0143-ed8a-4e28-85ec-37c16d1904b6",
  _type: "io.cozy.contacts",
  address: [{
    city: "Rochester",
    country: "Colombia",
    postcode: "18722",
    primary: true,
    street: "91 Chestnut Walk"
  }],
  email: [{
    address: "vernon.leath@vtgrafix.co",
    primary: true
  }],
  metadata: {
    version: 1
  },
  name: {
    givenName: "VTGrafix"
  },
  phone: [{
    number: "+33 (6)7 92 54 15 17",
    primary: true
  }],
  relationships: {
    groups: {
      data: [{
        _id: "group_id_work",
        _type: "io.cozy.contacts.groups"
      }, {
        _id: "group_id_family",
        _type: "io.cozy.contacts.groups"
      }]
    }
  }
}, {
  _id: "7acdab81-52cb-46f6-9e81-42032e9843ae",
  _type: "io.cozy.contacts",
  address: [{
    city: "Richmond",
    country: "Finland",
    postcode: "60992",
    primary: true,
    street: "90 Crawford Street"
  }],
  birthday: "1969-06-06",
  email: [{
    address: "francis.flinn@fortyfour.xyz",
    primary: true
  }, {
    address: "stan.lenihan@hassifix.mobi",
    primary: false
  }],
  metadata: {
    version: 1
  },
  name: {
    familyName: "Flinn",
    givenName: "Francis"
  },
  phone: [{
    number: "+33 (2)1 24 07 51 43",
    primary: true
  }, {
    number: "+33 (4)9 32 20 32 87",
    primary: false
  }],
  relationships: {
    groups: {
      data: [{
        _id: "group_id_family",
        _type: "io.cozy.contacts.groups"
      }]
    }
  }
}, {
  _id: "7cb3822f-3a2b-4978-9791-a1e19e792828",
  _type: "io.cozy.contacts",
  address: [{
    city: "Albany",
    country: "Singapore",
    postcode: "21285",
    primary: true,
    street: "51 Crawford Street"
  }],
  birthday: "1989-10-31",
  email: [{
    address: "raisa.cappel@zatheon.eu",
    primary: true
  }],
  metadata: {
    version: 1
  },
  name: {
    familyName: "Cappel",
    givenName: "Raisa"
  },
  phone: [{
    number: "+33 (2)3 69 80 63 05",
    primary: true
  }],
  relationships: {
    groups: {
      data: [{
        _id: "group_id_work",
        _type: "io.cozy.contacts.groups"
      }]
    }
  }
}, {
  _id: "814f6f67-bcc0-498f-bb91-cab5ed315a12",
  _type: "io.cozy.contacts",
  address: [{
    city: "Nottingham",
    country: "Mauritania",
    postcode: "96737",
    primary: true,
    street: "41 Elton Way"
  }],
  birthday: "1988-03-07",
  email: [{
    address: "hannah.sager@haltheon.eu",
    primary: true
  }],
  name: {
    familyName: "Sager",
    givenName: "Hannah"
  },
  phone: [{
    number: "+33 (0)0 16 15 45 65",
    primary: true
  }]
}, {
  _id: "823d1ca9-4b10-456f-a603-231e3de5a774",
  _type: "io.cozy.contacts",
  address: [{
    city: "Kingston",
    country: "Guatemala",
    postcode: "44220",
    primary: true,
    street: "5 Buckley Street"
  }],
  birthday: "1961-02-02",
  email: [{
    address: "aiden.smit@tomiatech.co",
    primary: true
  }],
  name: {
    familyName: "Smit",
    givenName: "Aiden"
  },
  phone: [{
    number: "+33 (6)9 42 00 67 88",
    primary: true
  }]
}, {
  _id: "857a0db5-84ff-4efe-a16e-9fa6b6a843eb",
  _type: "io.cozy.contacts",
  address: [{
    city: "Birmingham",
    country: "Bouvet Island",
    postcode: "41090",
    primary: true,
    street: "88 Baker Street"
  }],
  birthday: "1999-11-12",
  email: [{
    address: "jenette.bourne@dynaair.mobi",
    primary: true
  }, {
    address: "darrell.zobel@anaplex.name",
    primary: false
  }],
  metadata: {
    version: 1
  },
  name: {
    familyName: "Bourne",
    givenName: "Jenette"
  },
  phone: [{
    number: "+33 (0)8 05 76 45 70",
    primary: true
  }, {
    number: "+33 (9)9 35 66 28 54",
    primary: false
  }],
  relationships: {
    groups: {
      data: [{
        _id: "group_id_family",
        _type: "io.cozy.contacts.groups"
      }]
    }
  }
}, {
  _id: "8ba82505-25c3-4821-88df-2e11becc21e8",
  _type: "io.cozy.contacts",
  address: [{
    city: "Hartford",
    country: "Nepal",
    postcode: "73991",
    primary: true,
    street: "60 Buckley Street"
  }],
  birthday: "1985-12-20",
  email: [{
    address: "kurt.goudy@amsquare.edu",
    primary: true
  }],
  metadata: {
    version: 1
  },
  name: {
    familyName: "Goudy",
    givenName: "Kurt"
  },
  phone: [{
    number: "+33 (6)3 54 74 20 62",
    primary: true
  }],
  relationships: {
    groups: {
      data: [{
        _id: "group_id_work",
        _type: "io.cozy.contacts.groups"
      }]
    }
  }
}, {
  _id: "8cbefa6a-41c9-4065-ad33-87618dfee702",
  _type: "io.cozy.contacts",
  address: [{
    city: "York",
    country: "Antigua and Barbuda",
    postcode: "67153",
    primary: true,
    street: "91 Grosvenor Square"
  }],
  birthday: "1998-11-21",
  email: [{
    address: "madeleine.verde@tomiatech.me",
    primary: true
  }, {
    address: "jenette.hyder@helixicon.edu",
    primary: false
  }],
  metadata: {
    version: 1
  },
  name: {
    familyName: "Verde",
    givenName: "Madeleine"
  },
  phone: [{
    number: "+33 (4)0 94 18 19 04",
    primary: true
  }, {
    number: "+33 (7)2 66 13 89 19",
    primary: false
  }],
  relationships: {
    groups: {
      data: [{
        _id: "group_id_family",
        _type: "io.cozy.contacts.groups"
      }]
    }
  }
}, {
  _id: "9393e04d-90eb-4f47-b0d1-7cfd88ca9a3f",
  _type: "io.cozy.contacts",
  address: [{
    city: "Frankston",
    country: "Martinique",
    postcode: "29212",
    primary: true,
    street: "63 Dunstable Street"
  }],
  birthday: "1976-12-15",
  email: [{
    address: "madeleine.milling@acousticom.gov",
    primary: true
  }, {
    address: "cecilia.pullman@polycore.edu",
    primary: false
  }],
  metadata: {
    version: 1
  },
  name: {
    familyName: "Milling",
    givenName: "Madeleine"
  },
  phone: [{
    number: "+33 (4)0 61 39 16 43",
    primary: true
  }, {
    number: "+33 (9)7 54 31 00 91",
    primary: false
  }],
  relationships: {
    groups: {
      data: [{
        _id: "group_id_family",
        _type: "io.cozy.contacts.groups"
      }]
    }
  }
}, {
  _id: "9b05f823-53fd-48b7-ba50-e2abf7aa20bc",
  _type: "io.cozy.contacts",
  address: [{
    city: "Lancaster",
    country: "Viet Nam",
    postcode: "32405",
    primary: true,
    street: "33 Wandle Street"
  }],
  birthday: "1961-08-01",
  email: [{
    address: "rosanne.chapman@peersys.gov",
    primary: true
  }],
  name: {
    familyName: "Chapman",
    givenName: "Rosanne"
  },
  phone: [{
    number: "+33 (8)1 50 82 04 53",
    primary: true
  }]
}, {
  _id: "a68a9b3c-f3f7-4f94-b3f2-f2d0363895a5",
  _type: "io.cozy.contacts",
  address: [{
    city: "Sudbury",
    country: "Aruba",
    postcode: "34465",
    primary: true,
    street: "64 Glenn Drive"
  }],
  birthday: "1989-01-26",
  email: [{
    address: "isabelle.muldoon@fastmart.co",
    primary: true
  }],
  metadata: {
    version: 1
  },
  name: {
    familyName: "Muldoon",
    givenName: "Isabelle"
  },
  phone: [{
    number: "+33 (4)6 38 04 02 44",
    primary: true
  }],
  relationships: {
    groups: {
      data: [{
        _id: "group_id_work",
        _type: "io.cozy.contacts.groups"
      }]
    }
  }
}, {
  _id: "a749ffad-068e-4772-9060-4cb9bd7e8039",
  _type: "io.cozy.contacts",
  address: [{
    city: "Melbourne",
    country: "Malawi",
    postcode: "16693",
    primary: true,
    street: "70 Glenn Drive"
  }],
  birthday: "1960-08-28",
  email: [{
    address: "warren.tindel@fortyfour.info",
    primary: true
  }],
  name: {
    familyName: "Tindel",
    givenName: "Warren"
  },
  phone: [{
    number: "+33 (6)7 00 31 47 81",
    primary: true
  }]
}, {
  _id: "a83989ca-041d-4615-87e0-7d41f86acc5d",
  _type: "io.cozy.contacts",
  address: [{
    city: "Seattle",
    country: "Niue",
    postcode: "87611",
    primary: true,
    street: "42 Brook Street"
  }],
  birthday: "1954-07-26",
  email: [{
    address: "jamie.paschall@acousticom.me",
    primary: true
  }],
  name: {
    familyName: "Paschall",
    givenName: "Jamie"
  },
  phone: [{
    number: "+33 (4)9 34 94 87 29",
    primary: true
  }]
}, {
  _id: "a9d28cf8-43a6-4fff-81a1-4a09048edf71",
  _type: "io.cozy.contacts",
  address: [{
    city: "Vancouver",
    country: "Armenia",
    postcode: "27393",
    primary: true,
    street: "62 Marsham Street"
  }],
  birthday: "1955-09-22",
  email: [{
    address: "rico.bourne@citisys.org",
    primary: true
  }],
  metadata: {
    version: 1
  },
  name: {
    familyName: "Bourne",
    givenName: "Rico"
  },
  phone: [{
    number: "+33 (1)4 84 34 52 44",
    primary: true
  }],
  relationships: {
    groups: {
      data: [{
        _id: "group_id_work",
        _type: "io.cozy.contacts.groups"
      }]
    }
  }
}, {
  _id: "b21e4b4b-1df9-4992-b39b-cf844df864d5",
  _type: "io.cozy.contacts",
  address: [{
    city: "Cleveland",
    country: "United States of America",
    postcode: "15748",
    primary: true,
    street: "85 Grosvenor Square"
  }],
  email: [{
    address: "rico.murphy@triosys.info",
    primary: true
  }],
  metadata: {
    version: 1
  },
  name: {
    givenName: "TrioSys"
  },
  phone: [{
    number: "+33 (6)3 45 36 56 40",
    primary: true
  }],
  relationships: {
    groups: {
      data: [{
        _id: "group_id_work",
        _type: "io.cozy.contacts.groups"
      }, {
        _id: "group_id_family",
        _type: "io.cozy.contacts.groups"
      }]
    }
  }
}, {
  _id: "b6f5fc43-4199-4cca-8372-d1fe4e75a168",
  _type: "io.cozy.contacts",
  address: [{
    city: "Boston",
    country: "Saint Pierre and Miquelon",
    postcode: "23731",
    primary: true,
    street: "70 Beechmont Parkway"
  }],
  birthday: "1989-08-11",
  email: [{
    address: "gavin.wallis@infratouch.biz",
    primary: true
  }],
  metadata: {
    version: 1
  },
  name: {
    familyName: "Wallis",
    givenName: "Gavin"
  },
  phone: [{
    number: "+33 (2)4 15 56 27 30",
    primary: true
  }],
  relationships: {
    groups: {
      data: [{
        _id: "group_id_work",
        _type: "io.cozy.contacts.groups"
      }]
    }
  }
}, {
  _id: "c55c831a-9869-4e14-b3aa-d004bced41b0",
  _type: "io.cozy.contacts",
  address: [{
    city: "Cleveland",
    country: "Liechtenstein",
    postcode: "61719",
    primary: true,
    street: "50 Green Street"
  }],
  birthday: "1963-10-08",
  email: [{
    address: "neida.remus@dynalab.club",
    primary: true
  }],
  name: {
    familyName: "Remus",
    givenName: "Neida"
  },
  phone: [{
    number: "+33 (5)6 42 50 42 12",
    primary: true
  }]
}, {
  _id: "d0c565de-f440-4d2f-83db-0e3d75f49d23",
  _type: "io.cozy.contacts",
  address: [{
    city: "Waterbury",
    country: "British Indian Ocean Territory",
    postcode: "29412",
    primary: true,
    street: "68 Rutland Drive"
  }],
  birthday: "1972-07-31",
  email: [{
    address: "rosanne.bourne@creatonix.xyz",
    primary: true
  }],
  name: {
    familyName: "Bourne",
    givenName: "Rosanne"
  },
  phone: [{
    number: "+33 (1)3 93 75 09 69",
    primary: true
  }]
}, {
  _id: "d2bda580-4df6-473e-89db-2af41364c44e",
  _type: "io.cozy.contacts",
  address: [{
    city: "Hobart",
    country: "Romania",
    postcode: "79805",
    primary: true,
    street: "1 Mount Street"
  }],
  email: [{
    address: "anton.brandt@westercom.me",
    primary: true
  }],
  metadata: {
    version: 1
  },
  name: {
    givenName: "Westercom"
  },
  phone: [{
    number: "+33 (2)6 47 62 10 86",
    primary: true
  }],
  relationships: {
    groups: {
      data: [{
        _id: "group_id_work",
        _type: "io.cozy.contacts.groups"
      }, {
        _id: "group_id_family",
        _type: "io.cozy.contacts.groups"
      }]
    }
  }
}, {
  _id: "d50b7eea-6e71-4348-ad75-fc791d7a82d4",
  _type: "io.cozy.contacts",
  address: [{
    city: "Fargo",
    country: "Angola",
    postcode: "52889",
    primary: true,
    street: "34 Paxton Street"
  }],
  birthday: "1979-05-07",
  email: [{
    address: "rico.magby@freecast.eu",
    primary: true
  }, {
    address: "myong.brandt@lexiconlabs.org",
    primary: false
  }],
  metadata: {
    version: 1
  },
  name: {
    familyName: "Magby",
    givenName: "Rico"
  },
  phone: [{
    number: "+33 (3)4 20 14 07 04",
    primary: true
  }, {
    number: "+33 (9)4 63 79 76 97",
    primary: false
  }],
  relationships: {
    groups: {
      data: [{
        _id: "group_id_family",
        _type: "io.cozy.contacts.groups"
      }]
    }
  }
}, {
  _id: "e93c6abd-4819-4873-b7fb-ea46e02816a2",
  _type: "io.cozy.contacts",
  address: [{
    city: "Plymouth",
    country: "Mongolia",
    postcode: "18222",
    primary: true,
    street: "66 Orchard Road"
  }],
  birthday: "1978-04-22",
  email: [{
    address: "raylene.wallis@corerobotics.name",
    primary: true
  }],
  metadata: {
    version: 1
  },
  name: {
    familyName: "Wallis",
    givenName: "Raylene"
  },
  phone: [{
    number: "+33 (8)2 20 49 87 28",
    primary: true
  }],
  relationships: {
    groups: {
      data: [{
        _id: "group_id_work",
        _type: "io.cozy.contacts.groups"
      }]
    }
  }
}, {
  _id: "f330db30-2c2b-4621-b40f-25bb737e2eba",
  _type: "io.cozy.contacts",
  address: [{
    city: "Boston",
    country: "Saint Pierre and Miquelon",
    postcode: "04284",
    primary: true,
    street: "19 Mount Street"
  }],
  birthday: "1950-01-18",
  email: [{
    address: "lyn.hollis@citisys.biz",
    primary: true
  }, {
    address: "edward.pace@mediadime.net",
    primary: false
  }],
  metadata: {
    version: 1
  },
  name: {
    familyName: "Hollis",
    givenName: "Lyn"
  },
  phone: [{
    number: "+33 (8)8 32 79 16 61",
    primary: true
  }, {
    number: "+33 (7)9 69 80 25 08",
    primary: false
  }],
  relationships: {
    groups: {
      data: [{
        _id: "group_id_family",
        _type: "io.cozy.contacts.groups"
      }]
    }
  }
}, {
  _id: "f87951a3-f887-498c-b683-efbf59221da0",
  _type: "io.cozy.contacts",
  address: [{
    city: "Pheonix",
    country: "Madagascar",
    postcode: "83764",
    primary: true,
    street: "5 Harvard Avenue"
  }],
  birthday: "1975-04-11",
  email: [{
    address: "marcus.milligan@fortyfour.me",
    primary: true
  }],
  metadata: {
    version: 1
  },
  name: {
    familyName: "Milligan",
    givenName: "Marcus"
  },
  phone: [{
    number: "+33 (6)8 38 98 96 07",
    primary: true
  }],
  relationships: {
    groups: {
      data: [{
        _id: "group_id_work",
        _type: "io.cozy.contacts.groups"
      }]
    }
  }
}, {
  _id: "fc1f5295-a7e9-431c-a3cb-70259edd81e0",
  _type: "io.cozy.contacts",
  address: [{
    city: "Portsmouth",
    country: "Bonaire, Sint Eustatius and Saba",
    postcode: "52481",
    primary: true,
    street: "44 Prospect Place"
  }],
  email: [{
    address: "grace.muldoon@coremax.xyz",
    primary: true
  }],
  metadata: {
    version: 1
  },
  name: {
    givenName: "CoreMax"
  },
  phone: [{
    number: "+33 (8)1 17 99 91 53",
    primary: true
  }],
  relationships: {
    groups: {
      data: [{
        _id: "group_id_work",
        _type: "io.cozy.contacts.groups"
      }, {
        _id: "group_id_family",
        _type: "io.cozy.contacts.groups"
      }]
    }
  }
}];
import CozyClient, { CozyProvider } from 'cozy-client';
var mockClient = new CozyClient({
  uri: 'http://cozy.tools:8080',
  token: 'faketoken'
});

mockClient.__proto__.requestQuery = function (_ref) {
  var doctype = _ref.doctype;

  if (doctype === 'io.cozy.contacts') {
    return Promise.resolve({
      fetchStatus: 'loaded',
      data: contacts
    });
  }

  if (doctype === 'io.cozy.apps') {
    return Promise.resolve({
      fetchStatus: 'loaded',
      data: [{
        _id: 'io.cozy.apps/contacts',
        _type: 'io.cozy.apps',
        attributes: {
          slug: 'contacts'
        },
        links: {
          related: 'http://contacts.cozy.tools:8080/'
        }
      }]
    });
  }
};

mockClient.plugins = {
  realtime: {
    subscribe: function subscribe() {},
    unsubscribe: function unsubscribe() {},
    unsubscribeAll: function unsubscribeAll() {}
  }
};

mockClient.save = function () {
  return {
    data: contacts[0]
  };
};

var Wrapper = function Wrapper(_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/React.createElement(CozyProvider, {
    client: mockClient
  }, children);
};

export default Wrapper;