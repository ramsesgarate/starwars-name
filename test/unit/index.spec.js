const starWars = require("../../src/index");
const isArrayOfStrings = require("../helpers").isArrayOfStrings;

describe("Testing starwars-names", () => {
  describe('all', () => {
    test("should be an array of strings", () => {
      expect(starWars.all).toSatisfy(isArrayOfStrings);
    });
  
    test("should contain `Luke Skywalker`", () => {
      expect(starWars.all).toInclude('Luke Skywalker')
    });
  })

  describe('random', () => {
    test('should return a random item from the starWars.all', () => {
      const randomName = starWars.random();

      expect(starWars.all).toInclude(randomName)
    })
  })
});
