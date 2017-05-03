describe('Hamburger', function () {

  it('has a roll', () => {
    var burger = new Hamburger()
    expect(burger).to.have.property('roll', '')
  })
  it('has a meat', () => {
    var burger = new Hamburger()
    expect(burger).to.have.property('meat', '')
  })
  it('has a price', () => {
    var burger = new Hamburger()
    expect(burger).to.have.property('price', 0)
  })
  xit('has additions', () => {
    var burger = new Hamburger()
    expect(burger).to.have.property('additions', [])
  })

  // it('should take the first argument and set it as the "x" property of the instantiated object', function () {
  //   var hamburger = new Hamburger(15);
  //   assert.equal(hamburger.x, 15);
  // });
  //
  // it('should take take the second argument and set it as the "y" property of the instantiated object', function () {
  //   var hamburger = new Hamburger(15, 30);
  //   assert.equal(hamburger.y, 30);
  // });
  //
  // it('should take the third argument and set it as the "width" property of the instantiated object', function() {
  //   var hamburger = new Hamburger(15, 30, 10);
  //   assert.equal(hamburger.w, 10);
  // });
  //
  // it('should take the fourth argument and set it as the "height" property of the instantiated object', function() {
  //   var hamburger = new Hamburger(15, 30, 10, 20);
  //   assert.equal(hamburger.h, 20);
  // });
  //
  // describe('hamburger', function () {
  //
  //   it('should have a method called "moveRight()"', function () {
  //     var hamburger = new Hamburger(15, 30);
  //     assert.isFunction(hamburger.moveRight);
  //   });
  //
  //   it('"moveRight()" should increment the "x" property by 1', function () {
  //     var hamburger = new Hamburger(15, 30);
  //     hamburger.moveRight();
  //     assert.equal(hamburger.x, 16);
  //   });
  //
  //   it('should have a method called "moveLeft()"', function() {
  //     var hamburger = new Hamburger(15, 30);
  //     assert.isFunction(hamburger.moveLeft);
  //   });
  //
  //   it('"moveLeft()" should decrement the "x" property by 1', function() {
  //     var hamburger = new Hamburger(15, 30);
  //     hamburger.moveLeft();
  //     assert.equal(hamburger.x, 16)
  //   });
  //
  //   it('should have a method called "moveDown()', function() {
  //     var hamburger = new Hamburger(15, 30);
  //     assert.isFunction(hamburger.moveDown)
  //   });
  //
  //   it('"moveDown()" should decrement the "y" property by 1', function() {
  //     var hamburger = new Hamburger(15, 30);
  //     hamburger.moveDown();
  //     assert.equal(hamburger.y, 29)
  //
  //   });
  //
  //   it('should have a method called "moveUp()', function() {
  //     var hamburger = new Hamburger(15, 30);
  //     assert.isFunction(hamburger.moveUp)
  //   });
  //
  //   it('"moveUp()" should increment the "y" property by 1', function() {
  //     var hamburger = new Hamburger(15, 30);
  //     hamburger.moveUp();
  //     assert.equal(hamburger.y, 31)
  //   });
  //
  //   it('should have a method called "moveUpAndRight()" ', function() {
  //     var hamburger = new Hamburger(15, 30);
  //     assert.isFunction(hamburger.moveUpAndRight)
  //   })
  //
  //   it('"moveUpAndRight()" should increment x by 1 and decrease y by 1', function() {
  //     var hamburger = new Hamburger(15, 30);
  //     hamburger.moveUpAndRight();
  //     assert.equal(hamburger.x, 16);
  //     assert.equal(hamburger.y, 29);
  //   })
  //
  //   it('should have a method called "moveUpAndLeft()"', function() {
  //     var hamburger = new Hamburger(15, 30);
  //     assert.isFunction(hamburger.moveUpAndLeft)
  //   })
  //
  //   it('"moveUpAndLeft()" should decrease both x and y by 1 ', function() {
  //     var hamburger = new Hamburger(15, 30);
  //     hamburger.moveUpAndLeft();
  //     assert.equal(hamburger.x, 14);
  //     assert.equal(hamburger.y, 29);
  //   })
  //
  //   it('should have a method called "moveDownAndRight()"', function() {
  //     var hamburger = new Hamburger(15, 30);
  //     assert.isFunction(hamburger.moveDownAndRight)
  //   })
  //
  //   it('"moveDownAndRight()" should increase y by 1 and decrease x by 1', function() {
  //     var hamburger = new Hamburger(15, 30);
  //     hamburger.moveDownAndRight();
  //     assert.equal(hamburger.x, 14);
  //     assert.equal(hamburger.y, 31);
  //   })
  //
  //   it('should have a method called "moveDownAndLeft()"', function() {
  //     var hamburger = new Hamburger(15, 30);
  //     assert.isFunction(hamburger.moveDownAndLeft)
  //   })
  //
  //   it('"moveDownAndLeft()" should decrease both x and y by 1', function() {
  //     var hamburger = new Hamburger(15, 30);
  //     hamburger.moveDownAndLeft();
  //     assert.equal(hamburger.x, 16);
  //     assert.equal(hamburger.y, 31);
  //   })
  //
  //   it('should have a method called "getFatter()"', function() {
  //     var hamburger = new Hamburger(15, 30);
  //     assert.isFunction(hamburger.getFatter)
  //   });
  //
  //   it('"getFatter()" should increment its width by 1', function() {
  //     var hamburger = new Hamburger(15, 30, 10);
  //     hamburger.getFatter();
  //     assert.equal(hamburger.w, 11)
  //   });
  //
  //   it('should have a method called "getSkinnier()"', function() {
  //     var hamburger = new Hamburger(15, 30, 10);
  //     assert.isFunction(hamburger.getSkinnier)
  //   });
  //
  //   it('"getSkinnier()" should decrement its width by 1', function() {
  //     var hamburger = new Hamburger(15, 30, 10);
  //     hamburger.getSkinnier();
  //     assert.equal(hamburger.w, 9);
  //   });
  //
  //   it('should have a method called "getTaller()"', function() {
  //     var hamburger = new Hamburger(15, 30, 10, 20);
  //     assert.isFunction(hamburger.getTaller);
  //   });
  //
  //   it('"getTaller()" should increment its height by 1', function() {
  //     var hamburger = new Hamburger(15, 30, 10, 20);
  //     hamburger.getTaller();
  //     assert.equal(hamburger.h, 21)
  //   });
  //
  //   it('should have a method called "getShorter()"', function() {
  //     var hamburger = new Hamburger(15, 30, 10, 20);
  //     assert.isFunction(hamburger.getShorter);
  //   });
  //
  //   it('"getShorter()" should decrement its height by 1', function() {
  //     var hamburger = new Hamburger(15, 30, 10, 20);
  //     hamburger.getShorter();
  //     assert.equal(hamburger.h, 19);
  //   });
  //
  //   it('should have a method called "grow()"', function() {
  //     var hamburger = new Hamburger(15, 30, 10, 20);
  //     assert.isFunction(hamburger.grow);
  //   });
  //
  //   it('"grow()" should increment both its width and height by 1', function() {
  //     var hamburger = new Hamburger(15, 30, 10, 20);
  //     hamburger.grow();
  //     assert.equal(hamburger.w, 11);
  //     assert.equal(hamburger.h, 21);
  //   });
  //
  //   it('should have a method called "shrink()"', function() {
  //     var hamburger = new Hamburger(15, 30, 10, 20);
  //     assert.isFunction(hamburger.shrink);
  //   });
  //
  //   it('"shrink()" should decrement both its width and height by 1', function() {
  //     var hamburger = new Hamburger(15, 30, 10, 20);
  //     hamburger.shrink();
  //     assert.equal(hamburger.w, 9);
  //     assert.equal(hamburger.h, 19);
  //   });

    /*
    At any given point, hamburger should be able to find its top-left,
    top-right, bottom-left, and bottom-right corners. It'll need these
    methods later.

    Call these methods topRight(), topLeft(), bottomRight(), bottomLeft().

    Each should return an object with an "x" and a "y" property. For example:

    var hamburger = new Hamburger(5, 5, 10, 10);
    assert.equal(hamburger.bottomRight().x, 15);
    assert.equal(hamburger.bottomRight().y, 15);.

    (Hint: to find the bottom-right corner, just do x + width and y + height.)
    */

  // });

});
