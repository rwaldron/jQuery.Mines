# jQuery.Mines 


Simply put, it's a publisher/subscriber system that makes organizing and grouping logic execution fun and easy. 


[jQuery.Mines wiki](http://wiki.github.com/rwldrn/jQuery.Mines/ "jQuery.Mines wiki")



# Usage




## Setting Charges


	$.mines.charge(

	  //  NAME OF THIS CHARGE
	  '/fuse',

	  //  FUNCTION TO EXECUTE WHEN DETONATED
	  function() {
	    console.group('/fuse');
	    console.log(arguments);
	    console.groupEnd();
	  }
	);


### Examples:


	$.mines.charge(
	  '/fuse',
	  function() {
	    console.group('/fuse');
	    console.log(arguments);
	    console.groupEnd();
	  }
	);

	$.mines.charge(
	  '/fuse/a',
	  function() {
	    console.group('/fuse/a');
	    console.log(arguments);
	    console.groupEnd();
	  }
	);

	$.mines.charge(
	  '/fuse/b',
	  function() {
	    console.group('/fuse/b');
	    console.log(arguments);
	    console.groupEnd();

	  }
	);

	$.mines.charge(
	  '/fuse/c',
	  function(message, bool) {
	    console.group('/fuse/c');
	    console.log(message);
	    console.log(bool);
	    console.groupEnd();
	  }
	);




## Detonate Charges



	$.mines.detonate(

	  //  NAME OF CHARGE TO DETONATE
	  '/fuse',

	  //  ARRAY OF ARGUMENTS
	  [ (optional arguments) ]

	);


### Examples:

	$.mines.detonate('/fuse/c', ['message']);

	$.mines.detonate([

	  {
	    key: '/fuse/a',
	    args: ['message from fuse a', { foo: 'bar' }]
	  },
	  {
	    key: '/fuse/b',
	    args: ['message from fuse b', ['an', 'array'] ]
	  },
	  {
	    key: '/fuse/c',
	    args: ['message from fuse c', true]
	  }
	]);

git add . && git commit -m "message" && git push origin master