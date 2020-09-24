import req from 'supertest'

test('Users', () => {
  req('BASE_URL').get('/', (res) => {
    expect(res.text).toBe('api working!!!')
  })
}, 30000)