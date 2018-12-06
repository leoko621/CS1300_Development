import React, { Component } from 'react';
import "./App.css";
import FilteredList from './FilteredList';

const choices = [

  {name: "Odwalla", type: "Drink", choice: "Produce", cost: "4.50", img: "https://images.costcobusinessdelivery.com/ImageDelivery/imageService?profileId=12028466&imageId=915385__1&recipeName=350"},
  {name: "Vita Coco", type: "Drink", choice: "Produce", cost: "3.25", img: "https://i5.walmartimages.com/asr/d5e9e729-7551-4277-b892-a276bde48eed_1.9e621435ab223511d073b8eac4f08288.jpeg"},
  {name: "Dunkin Iced Coffee", type: "Drink", choice: "Dairy", cost: "3.50", img: "https://s3.amazonaws.com/cms.ipressroom.com/285/files/20171/589b159ba13835248f135236_RTD+lineup/RTD+lineup_8004ca8c-bd8b-4a0b-8c7f-9cf90e9be015-prv.jpg"},
  {name: "Rhody Fresh Milk", type: "Drink", choice: "Dairy", cost: "1.90", img: "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_ebcb82ce-c115-4f39-b22e-5a86a2cb3eb8.jpg"},
  {name: "Monster", type: "Drink", choice: "Sweet", cost: "4.00", img: "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_c3e4e98a-2daa-4084-9bf7-180da3200786.jpeg"},
  {name: "Lays", type: "Snack", choice: "Chips",  cost: "1.75", img: "https://www.dollargeneral.com/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/0/0/00028400420549_0.jpg"},
  {name: "Popcorners", type: "Snack", choice: "Chips",  cost: "2.20", img: "https://images-na.ssl-images-amazon.com/images/I/71TyNMRs3JL._SL1500_.jpg"},
  {name: "Uncrustables", type: "Snack", choice: "Sweet",  cost: "2.45", img: "http://www.3boysunprocessed.com/wp-content/uploads/2014/05/uncrustable.jpg"},
  {name: "Rice Krispies Treat", type: "Snack", choice: "Sweet",  cost: "1.85", img: "https://target.scene7.com/is/image/Target/GUEST_fad97405-e3f9-4fe4-b554-cc4ee516ccb1?wid=488&hei=488&fmt=pjpeg"},
  {name: "Ice Cream Sandwich", type: "Snack", choice: "Dairy",  cost: "2.85", img: "https://visualsonline.cancer.gov/retrieve.cfm?imageid=2690&dpi=300&fileformat=jpg"},
  {name: "Fresh Whole Fruit", type: "Snack", choice: "Produce",  cost: "1.50", img: "https://images-na.ssl-images-amazon.com/images/I/918YNa3bAaL._SL1500_.jpg"},
  {name: "Robert's Fruit Salad", type: "Snack", choice: "Produce",  cost: "4.00", img: "http://reviews.bargainbriana.com/wp-content/uploads/2009/09/Fruit-Bowl_07202009170850-300x294.jpg"}
  
];

class App extends Component {
  render() {
    return (
      <div className = "App">

        <FilteredList items = {choices}/>
      </div>
    );
  }
}

export default App;