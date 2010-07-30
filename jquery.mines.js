/*  
  jQuery.Mines.Charge/Detonate/Disarm()
*/  
;(function($){
  var _payloadCache = {}, 
      _payloadkeys  = [];
  
  function blast(fuse, args) {
    for ( var i = 0; i < _payloadkeys.length; i++ ) {
      if ( _payloadkeys[i].indexOf(fuse) > -1 && _payloadCache[_payloadkeys[i]] ) {
        $.each(_payloadCache[_payloadkeys[i]], function(){
          this.apply($, args || []);
        }); 
      }
    }
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
          blast(_fuse.key, _fuse.args);
        });
      },
      charge: function(fuse, callback){
        
        _payloadkeys.push(fuse);
        
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