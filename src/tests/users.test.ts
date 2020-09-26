import req from 'supertest'
import app from '../app'
import auth from '../middlewares/authentication'

test('auth', async () => {

  jest.mock('../middlewares/authentication', () => jest.fn((req, res, next) => next()))

  await req(app).get('/users', (res) => {
    expect(res.code).toBe(200)
    expect(auth).toHaveBeenCalledTimes(1)
  })
}, 30000)

test('[POST] /users/login', async () => {
  await req(app).put('/users/login', (res) => {
    expect(res.code).toBe(200)
  })
}, 30000)


test('[GET] /users', async () => {
  await req(app).get('/users', (res) => {
    expect(res.code).toBe(200)
  })
}, 30000)

test('[GET] /users/:id?', async () => {
  await req(app).get('/users/1', (res) => {
    expect(res.code).toBe(200)
  })
}, 30000)

test('[PUT] /users/create', async () => {
  await req(app).put('/users/create', (res) => {
    expect(res.code).toBe(200)
  })
}, 30000)

test('[DELETE] /users/delete/:id', async () => {
  await req(app).put('/users/delete/18', (res) => {
    expect(res.code).toBe(200)
  })
}, 30000)