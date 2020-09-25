import req from 'supertest'
import app from '../app'

test('[GET] /users', async () => {
  await req(app).get('/users', (res) => {
    expect(res.code).toBe(200)
  })
}, 30000)

test('[GET] /users/1', async () => {
  await req(app).get('/users/1', (res) => {
    expect(res.code).toBe(200)
  })
}, 30000)

test('[PUT] /users/create', async () => {
  await req(app).put('/users/create', (res) => {
    expect(res.code).toBe(200)
  })
}, 30000)