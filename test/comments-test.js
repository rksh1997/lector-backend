import { expect } from 'chai'
import supertest from 'supertest'
import { OK, ACCEPTED, CREATED } from 'http-status'

import app from '../src/index'

const agent = supertest.agent(app)
const partId = '5a2eabc7344a9207a03ad8b8'
const commentApi = `/api/parts/${partId}/comments`
let authHeader
let commentId

describe('#Comments Api', () => {
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

  it('should create new comment', (done) => {
    agent.post(commentApi)
      .set('authorization', authHeader)
      .send({
        content: 'this is a comment',
      })
      .expect(CREATED)
      .end((err, { body }) => {
        if (err) return done(err)
        expect(body.content).to.be.a('string')
        expect(body.author._id).to.be.a('string')
        commentId = body._id
        return done()
      })
  })

  it('get part comments', (done) => {
    agent.get(commentApi)
      .expect(OK)
      .end((err, { body }) => {
        if (err) return done(err)
        expect(body).to.be.a('array')
        return done()
      })
  })

  it('should get a comment', (done) => {
    agent.get(`${commentApi}/${commentId}`)
      .expect(OK)
      .end((err, { body }) => {
        if (err) return done(err)
        expect(body.content).to.be.a('string')
        return done()
      })
  })

  it('should update a comment', (done) => {
    agent.put(`${commentApi}/${commentId}`)
      .set('authorization', authHeader)
      .send({
        content: 'this is an updated comment',
      })
      .expect(ACCEPTED)
      .end((err, { body }) => {
        if (err) return done(err)
        expect(body.content).to.equal('this is an updated comment')
        return done()
      })
  })

  it('should delete a comment', (done) => {
    agent.delete(`${commentApi}/${commentId}`)
      .set('authorization', authHeader)
      .expect(ACCEPTED)
      .end((err, { body }) => {
        if (err) return done(err)
        expect(body.content).to.equal('this is an updated comment')
        return done()
      })
  })
})
