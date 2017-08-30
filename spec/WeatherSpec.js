describe('Weather', function() {

  beforeEach(function () {
    weather = new Weather();
  });

  it('is random', function() {
    weatherOptions = ['stormy', 'good']
    expect(weatherOptions).toContain(weather.current());
  });
});