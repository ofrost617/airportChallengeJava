describe('Airport', function() {


  beforeEach(function() {
    airport = new Airport();
    plane = "Boeing 747"
  });

  it('can land a plane', function() {
    expect(airport.landPlane(plane)).toBe(true)
  });

  it('keeps landed planes in hangers', function() {
    airport.landPlane(plane);
    expect(airport.hanger).toContain(plane)
  });

  describe ('taking off', function() {

      beforeEach(function() {
         airport.landPlane(plane);
      });

      it('can takeoff a plane', function () {
          expect(airport.takeoffPlane(plane)).toBe(true)
      });

      it('removes plane from hanger after taking off', function () {
          airport.takeoffPlane(plane);
          expect(airport.hanger).not.toContain(plane)
      });
    });
});