import { expect } from 'chai'
import supertest from 'supertest'
import {
  OK,
  CREATED,
  ACCEPTED,
} from 'http-status'
import app from '../src'

let seriesId

const URL = '/api/series'
const agent = supertest.agent(app)

describe('Series CRUD API', () => {
  it('should create new series', (done) => {
    agent.post(URL)
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

  it('should get all serieses', (done) => {
    agent.get(URL)
      .expect(OK)
      .end((err, { body }) => {
        if (err) return done(err)
        expect(body).to.be.a('array')
        return done()
      })
  })

  it('should remove a series', (done) => {
    agent.delete(`${URL}/${seriesId}`)
      .expect(ACCEPTED)
      .end((err, { body }) => {
        if (err) return done(err)
        expect(body._id).to.equal(seriesId)
        return done()
      })
  })
})
