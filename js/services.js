app.service("orderService",function(){
  var items = [];

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
    }
  };

});