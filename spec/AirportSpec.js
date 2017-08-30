describe('Airport', function() {


  beforeEach(function() {
    var airport = new Airport();
    var plane = "Boeing 747"
  });

  it('can land a plane', function() {

    expect(airport.landPlane(plane)).toBe(true)
  });

});