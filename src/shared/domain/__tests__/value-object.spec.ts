import { ValueObject } from "../value-object"

class StringValueObject extends ValueObject {
  constructor(readonly value:string) {
    super()
  }
}

class ComplexValueObject extends ValueObject {
  constructor(readonly prop1:string, readonly prop2:number) {
    super()
  }
}

describe('ValueObject Unit Test', () => {
  test('should compare two value objects', () => {
    const vo1 = new StringValueObject('test')
    const vo2 = new StringValueObject('test')

    expect(vo1.equals(vo2)).toBeTruthy()

    const complexvo1 = new ComplexValueObject('test',1)
    const complexvo2 = new ComplexValueObject('test',1)

    expect(complexvo1.equals(complexvo2)).toBeTruthy()
  })

  test('should not compare two different value objects', () => {
    const vo1 = new StringValueObject('test')
    const vo2 = new StringValueObject('test 2')

    expect(vo1.equals(vo2)).toBeFalsy()

    const complexvo1 = new ComplexValueObject('test 1',1)
    const complexvo2 = new ComplexValueObject('test 2',2)

    expect(complexvo1.equals(complexvo2)).toBeFalsy()
  })

})