import req from 'supertest'

test('base', () => {
  req('BASE_URL').get('/', (res) => {
    expect(res.text).toBe('api working!!!')
  })
}, 30000)