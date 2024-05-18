const items = [
  {
    id: 1,
    name: "menu-1",
    children: [
      {
        id: 11,
        name: "menu-11",
        children: [
          {
            id: 111,
            name: "menu-111",
          },
        ],
      },
      {
        id: 12,
        name: "menu-12",
        children: [
          {
            id: 121,
            name: "menu-121",
            children: [
              {
                id: 1211,
                name: "menu-1211",
                children: null,
              },
              {
                id: 1212,
                name: "menu-1212",
              },
              {
                id: 1213,
                name: "menu-1213",
                children: [
                  {
                    id: 12131,
                    name: "menu-12131",
                    children: null,
                  },
                  {
                    id: 12132,
                    name: "menu-12132",
                    children: [
                      {
                        id: 121321,
                        name: "menu-121321",
                        children: null,
                      },
                      {
                        id: 121322,
                        name: "menu-121322",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 13,
        name: "menu-13",
        children: [
          {
            id: 131,
            name: "menu-131",
            children: [
              {
                id: 1311,
                name: "menu-1311",
                children: null,
              },
              {
                id: 1312,
                name: "menu-1312",
              },
              {
                id: 1313,
                name: "menu-1313",
                children: [],
              },
            ],
          },
          {
            id: 132,
            name: "menu-132",
          },
          {
            id: 133,
            name: "menu-133",
          },
        ],
      },
    ],
  },
];


You can consider this as a input and write a function getPath of the input id to get 
console.log("path => ", getPaths(items, 1213));
output -  1->12->121->1213
