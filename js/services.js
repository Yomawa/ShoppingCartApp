app.service("orderService",function(){
  var items = [{
        "_id": "55c8ee82152165d244b98300",
        "name": "Bayard stew",
        "ingredients": "concentrated gluten, jewelry, dill, beetle nut, toast",
        "caffeineScale": "244",
        "price": "1540",
        "inStock": "true",
        "rating": "1",
        "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/32664_d?$cimg$",
        "__v": "0",
        "categories": [ "dark", "cold"],
        "qty": 5
    }];

  return{
    getItems: function(){
      return items;
    },
    addItem: function(tea){
      // for(var i=0; i<tea.qty; i++)
      // while(tea.qty--){
        //if string !== "string"
        if(typeof(tea.qty) !== "string") {
          tea.qty = 1;
        } else {
          tea.qty = parseInt(tea.qty);
        }
        for(var i=0; i<items.length; i++) {
          if(items[i]._id === tea._id) {
            items.splice(i,1,tea);
            return;  //if there is a match will never get to line 21, return means exit or retruning nothing your are done         
          }
        }
        items.push(tea);
      // }
    },
    getQty: function() {
      var qty = 0;
      for(var i = 0; i < items.length; i++) {
        qty += Number(items[i].qty);
      }
      return qty;
    },
    getOrderTotal: function() {
      var total = 0;
      for(var i = 0; i < items.length; i++) {
        total += Number(items[i].qty) * Number(items[i].price);
      }
      return total;
    },
    removeItem: function(index){
      items.splice(index,1);
    },
    editItem: function(index,item){
      items[index].qty = item.qty;
      items[index].editFormShowing = false;
      }
  };
});