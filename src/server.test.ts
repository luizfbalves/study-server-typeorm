import req from 'supertest'
import app from './app'

test('base', async () => {
  await req(app).get('/', (res) => {
    expect(res.text).toBe('api working!!!')
  })
}, 30000)