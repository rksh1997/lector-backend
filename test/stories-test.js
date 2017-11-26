import { expect } from 'chai'
import supertest from 'supertest'
import {
  OK,
  CREATED,
  ACCEPTED,
} from 'http-status'
import app from '../src'

let storyId
let authHeader
let genreId

const URL = '/api/stories'
const agent = supertest.agent(app)

describe('Story CRUD API', () => {
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

  it('should create new story', (done) => {
    agent.post(URL)
      .set('authorization', authHeader)
      .send({
        title: 'Story 1',
        description: 'A little description about the story',
        category: 'Romance',
        picture: 'https://www.google.com/me.jpg',
        genre: genreId,
      })
      .expect(CREATED)
      .end((err, { body }) => {
        if (err) return done(err)
        expect(body._id).to.be.a('string')
        expect(body.title).to.equal('Story 1')
        storyId = body._id
        return done()
      })
  })

  it('should update a story', (done) => {
    agent.put(`${URL}/${storyId}`)
      .set('authorization', authHeader)
      .send({
        title: 'story updated',
      })
      .expect(ACCEPTED)
      .end((err, { body }) => {
        if (err) return done(err)
        expect(body.title).to.equal('story updated')
        return done()
      })
  })

  it('should get a story by id', (done) => {
    agent.get(`${URL}/${storyId}`)
      .expect(OK)
      .end((err, { body }) => {
        if (err) return done(err)
        expect(body._id).to.equal(storyId)
        return done()
      })
  })

  it('should get page of stories', (done) => {
    agent.get(URL)
      .expect(OK)
      .end((err, { body }) => {
        if (err) return done(err)
        expect(body.data).to.be.a('array')
        expect(body.hasNextPage).to.be.a('boolean')
        expect(body.hasPrevPage).to.be.a('boolean')
        return done()
      })
  })

  it('should remove a story', (done) => {
    agent.delete(`${URL}/${storyId}`)
      .set('authorization', authHeader)
      .expect(ACCEPTED)
      .end((err, { body }) => {
        if (err) return done(err)
        expect(body._id).to.equal(storyId)
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
