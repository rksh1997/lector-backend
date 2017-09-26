import { expect } from 'chai'
import supertest from 'supertest'
import {
  OK,
  CREATED,
  ACCEPTED,
} from 'http-status'
import app from '../src'

let seriesId
let authHeader

const URL = '/api/series'
const agent = supertest.agent(app)

describe('Series CRUD API', () => {
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

  it('should create new series', (done) => {
    agent.post(URL)
      .set('authorization', authHeader)
      .send({
        title: 'Story Series',
        description: 'A little description about the series',
        category: 'Romance',
        picture: 'https://www.google.com/me.jpg',
      })
      .expect(CREATED)
      .end((err, { body }) => {
        if (err) return done(err)
        expect(body._id).to.be.a('string')
        expect(body.title).to.equal('Story Series')
        seriesId = body._id
        return done()
      })
  })

  it('should update a series', (done) => {
    agent.put(`${URL}/${seriesId}`)
      .set('authorization', authHeader)
      .send({
        title: 'series',
      })
      .expect(ACCEPTED)
      .end((err, { body }) => {
        if (err) return done(err)
        expect(body.title).to.equal('series')
        return done()
      })
  })

  it('should get a series by id', (done) => {
    agent.get(`${URL}/${seriesId}`)
      .expect(OK)
      .end((err, { body }) => {
        if (err) return done(err)
        expect(body._id).to.equal(seriesId)
        return done()
      })
  })

  it('should get serieses', (done) => {
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

  it('should remove a series', (done) => {
    agent.delete(`${URL}/${seriesId}`)
      .set('authorization', authHeader)
      .expect(ACCEPTED)
      .end((err, { body }) => {
        if (err) return done(err)
        expect(body._id).to.equal(seriesId)
        return done()
      })
  })
})
