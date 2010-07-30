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

/***********************/

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
});