app.service("orderService",function(){
  var items = [];

  return{
    getItems: function(){
      return items;
    },
    addItem: function(tea){
      // for(var i=0; i<tea.qty; i++)
      // while(tea.qty--){
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