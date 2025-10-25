# Tootle's Kofi


## Quickstart:

**import the css from the module itself in your react project, :**

```import 'tootles-kofi/dist/tootles-kofi.css';```

**prepare shop item data, e.g.:**

```
{
    "items": [
        {
            "Alias": "97fc12061b",
            "Name": "Autumn Colors Bucket Hat",
            "Price": 20.0,
            "ThumbnailUrls": [
                "1676cc93-f491-49ea-8c6f-b9cca3544722_50816.png",
                "7cbd00f3-5375-4a25-8a12-a4c7d815813b_50814.png" 
            ], 
            "Description": "Hand-crocheted cotton bucket hat that’s lightweight, breathable, and stylish. Perfect for sunny days..." 
        },
        {
            "Alias": "92c87bf833",
            "Name": "Black w/ Glow-In-The-Dark Ghost Cat Ear Beanie",
            "Price": 25.0,
            "ThumbnailUrls": [
                "0d424630-a20b-4988-b6a1-1cedef76973f_50868.png",
                "5962b092-c526-4f6e-b72e-5b11a4251199_50866.png" 
            ],
            "Description": "Hand-crocheted black cat ear beanie featuring a glow-in-the-dark ghost applique. Cozy, spooky, and p..." 
        } 
    ]
}
```

**import the KofiShopGrid component and pass the list of shop items data to the 'inventory' prop**:

```
import 'tootles-kofi/dist/tootles-kofi.css'
import { KofiShopGrid } from 'tootles-kofi'
....
const MyCustomComponent = ({shop_items_data}) => {
    return (
        <>
        ....
        <!-- this will create a clone of the kofi shop page's search/filter results -->
        <KofiShopGrid inventory={shop_items_data} />
        </>
    )
}
```


**alternatively, you can use the KofiShopCard component to display just one item, e.g.**

```
import 'tootles-kofi/dist/tootles-kofi.css'
import { KofiShopCard } from 'tootles-kofi'
... 
const MyCustomComponent = ({shop_items_data}) => {
    return (
        <>
        ....
        <!-- this will create a clone of a single item from the kofi shop  search/filter results -->
        <KofiShopCard 
          Alias={"97fc12061b"}
          Name={"Autumn Colors Bucket Hat"}
          Price={20.0}
          ThumbnailUrls={[ "1676cc93-f491-49ea-8c6f-b9cca3544722_50816.png" ]}
          Description={"Hand-crocheted cotton bucket hat that’s lightweight, breathable, and stylish. Perfect for sunny days..."} />
        </>
    )
}

```

## Community:

contribute on [issues](https://github.com/huntercbuxton/tootles-kofi/issues)


## development notes: 

referenced this medium tutorial for building the library https://medium.com/simform-engineering/building-a-component-library-with-react-typescript-and-storybook-a-comprehensive-guide-ba189accdaf5 

referenced this medium tutorial for publishing to npm https://medium.com/@irekrog/quick-and-simple-create-and-publish-react-component-on-npm-df528cd26b0



