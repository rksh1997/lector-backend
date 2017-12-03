import { expect } from 'chai'
import supertest from 'supertest'
import { OK, ACCEPTED, CREATED } from 'http-status'

import app from '../src/index'

const agent = supertest.agent(app)
let authHeader
let listId

describe('#List Api', () => {
  before((done) => {
    agent.post('/api/auth/login')
      .send({
        email: 'fakeemail@lector.com',
        password: 'fakepassword',
      })
      .expect(OK)
      .end((err, res) => {
        if (err) return done(err)
        authHeader = `Bearer ${res.body.token}`
        return done()
      })
  })

  it('should create new list', (done) => {
    agent.post('/api/lists')
      .set('authorization', authHeader)
      .send({
        name: 'Test',
      })
      .expect(CREATED)
      .end((err, { body }) => {
        if (err) return done(err)
        expect(body._id).to.be.a('string')
        listId = body._id
        return done()
      })
  })

  it('should get list', (done) => {
    agent.get(`/api/lists/${listId}`)
      .set('authorization', authHeader)
      .expect(OK)
      .end((err, { body }) => {
        if (err) return done(err)
        expect(body._id).to.equal(listId)
        return done()
      })
  })

  it('should delete list', (done) => {
    agent.delete(`/api/lists/${listId}`)
      .set('authorization', authHeader)
      .expect(ACCEPTED)
      .end((err, { body }) => {
        if (err) return done(err)
        expect(body._id).to.equal(listId)
        return done()
      })
  })
})
