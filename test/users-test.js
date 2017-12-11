import { expect } from 'chai'
import supertest from 'supertest'
import {
  OK,
} from 'http-status'
import app from '../src'

const agent = supertest.agent(app)
const URL = '/api/users'

let userId

describe('#User Api', () => {
  before((done) => {
    agent.post('/api/auth/login')
      .send({
        email: 'fakeemail@lector.com',
        password: 'fakepassword',
      })
      .expect(OK)
      .end((err, res) => {
        if (err) return done(err)
        userId = res.body.user._id
        return done()
      })
  })

  it('should get user profile', (done) => {
    agent.get(`${URL}/${userId}`)
      .expect(OK)
      .end((err, { body }) => {
        if (err) return done(err)
        expect(body._id).to.equal(userId)
        return done()
      })
  })
})
