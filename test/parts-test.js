import { expect } from 'chai'
import supertest from 'supertest'
import {
  OK,
  CREATED,
  ACCEPTED,
} from 'http-status'
import app from '../src'

let partId
let storyId
let authHeader
let genreId

const URL = '/api/parts'
const agent = supertest.agent(app)

describe('#Part Api', () => {
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

  before((done) => {
    agent.post('/api/genres')
      .set('authorization', authHeader)
      .send({
        name: 'any',
      })
      .expect(CREATED)
      .end((err, { body }) => {
        if (err) return done(err)
        genreId = body._id
        return done()
      })
  })

  before((done) => {
    agent.post('/api/stories')
      .set('authorization', authHeader)
      .send({
        title: 'fake story title',
        description: 'fake story description',
        genre: genreId,
      })
      .expect(CREATED)
      .end((err, { body }) => {
        if (err) return done(err)
        storyId = body._id
        return done()
      })
  })

  it('should create new part', (done) => {
    agent.post(URL)
      .set('authorization', authHeader)
      .send({
        title: 'fake part title',
        content: '<div><p>My name is <span>Rashad Kokash</span></p></div>',
        storyId,
      })
      .expect(CREATED)
      .end((err, { body }) => {
        if (err) return done(err)
        expect(body.story).to.equal(storyId)
        partId = body._id
        return done()
      })
  })

  it('should get part by id', (done) => {
    agent.get(`${URL}/${partId}`)
      .expect(OK)
      .end((err, { body }) => {
        if (err) return done(err)
        expect(body._id).to.equal(partId)
        return done()
      })
  })

  it('should update a part', (done) => {
    agent.put(`${URL}/${partId}`)
      .set('authorization', authHeader)
      .send({
        title: 'fake part title updated',
      })
      .expect(ACCEPTED)
      .end((err, { body }) => {
        if (err) return done(err)
        expect(body.title).to.equal('fake part title updated')
        return done()
      })
  })

  it('should remove a part', (done) => {
    agent.delete(`${URL}/${partId}`)
      .set('authorization', authHeader)
      .expect(ACCEPTED)
      .end((err, { body }) => {
        if (err) return done(err)
        expect(body._id).to.equal(partId)
        return done()
      })
  })

  after((done) => {
    agent.delete(`/api/genres/${genreId}`)
      .set('authorization', authHeader)
      .expect(ACCEPTED)
      .end((err) => {
        if (err) return done(err)
        return done()
      })
  })
})
