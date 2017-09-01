import { expect } from 'chai'
import supertest from 'supertest'
import {
  OK,
  UNPROCESSABLE_ENTITY,
  UNAUTHORIZED,
} from 'http-status'

import app from '../src'
import User from '../src/models/User'

const agent = supertest.agent(app)
const authUrl = '/api/auth'

describe('#User Authentication', () => {
  before((done) => {
    User.remove({
      username: 'fakeusername',
    }).then(() => done())
  })

  it('should register new user', (done) => {
    agent.post(`${authUrl}/register`)
      .send({
        username: 'fakeusername',
        email: 'fakeemail@lector.com',
        name: {
          first: 'fakename',
          last: 'fakename',
        },
        password: 'fakepassword',
      })
      .expect(OK)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.body.token).to.be.a('string')
        expect(res.body.user.email).to.equal('fakeemail@lector.com')
        return done()
      })
  })

  it('should not register dublicate username or email', (done) => {
    agent.post(`${authUrl}/register`)
      .send({
        username: 'fakeusername',
        email: 'fakeemail@lector.com',
      })
      .expect(UNPROCESSABLE_ENTITY)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.body.message).to.be.a('string')
        return done()
      })
  })

  it('should login user', (done) => {
    agent.post(`${authUrl}/login`)
      .send({
        email: 'fakeemail@lector.com',
        password: 'fakepassword',
      })
      .expect(OK)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.body.token).to.be.a('string')
        expect(res.body.user.email).to.equal('fakeemail@lector.com')
        return done()
      })
  })

  it('should not login user with wrong email or password', (done) => {
    agent.post(`${authUrl}/login`)
      .send({
        email: 'somethingelse@lector.com',
        password: 'fakepassword2',
      })
      .expect(UNAUTHORIZED)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.body.message).to.be.a('string')
        return done()
      })
  })
})
