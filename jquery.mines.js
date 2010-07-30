/*  
  jQuery.Mines.Charge/Detonate/Disarm()
*/  
;(function($){
  var _payloadCache = {};
  
  function blast(fuses, args) {
    $.each(_payloadCache[fuses], function(){
      this.apply($, args || []);
    });  
  }
  
  
  $.extend(jQuery, {
    mines: {
      detonate: function(fuse){
        if ( typeof fuse === 'string' ) {
          var args = arguments[1] ? arguments[1] : [];
          blast(fuse, args);
          return;
        }
        $.each(fuse, function (i, _fuse) {
          $.each(_payloadCache[_fuse.key], function(){
            this.apply($, _fuse.args || []);
          });
        });
      },
      charge: function(fuse, callback){

        if(!_payloadCache[fuse]){
          _payloadCache[fuse] = [];
        }
        _payloadCache[fuse].push(callback);
        return [fuse, callback];
      },
      disarm: function(fuse){
        delete _payloadCache[fuse];
      }    
    }      
  });
})(jQuery);