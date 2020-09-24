import req from 'supertest'

test('base', () => {
  req('').get('/', (res) => {
    expect(res.text).toBe('api working!!!')
  })
}, 30000)