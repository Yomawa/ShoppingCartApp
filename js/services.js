app.service("orderService",function(){
  var items = [];
  return{
    getItems: function(){
      return items;
    },
    addItem: function(tea){
      // for(var i=0; i<tea.qty; i++)
      while(tea.qty--){
        items.push(tea);
      }
      tea.qty = '';
    },
  };

});