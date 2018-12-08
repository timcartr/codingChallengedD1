const { toggle, getUsers } = require('../logic/logic')

describe('Tests Show/Hide button', () => {
  test('can toggle button text from Show Users to Hide Users', () => {
    expect(toggle(false)).toBe(true)
  });
  test('Can toggle button text from Hide Users to Show Users', () => {
    expect(toggle(true)).toBe(false)
  })
})

describe('Can get user data from API', () => {
  test(`Gets status 200`, () => {
    return getUsers().then(res => {
      expect(res.status).toBe(200)
    })
  })

  test('res.data exists', () => {
    return getUsers().then(res => {
      expect(res.data).toBeDefined();
    });
  });

  test('gets back first name', () => {
    return getUsers().then(res => {
      expect(res.data[0].name).toBeDefined();
    });
  });

  test('gets back last name', () => {
    return getUsers().then(res => {
      expect(res.data[0].surname).toBeDefined();
    });
  });

  test('gets back avatar', () => {
    return getUsers().then(res => {
      expect(res.data[0].photo).toBeDefined();
    });
  });
})