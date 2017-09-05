import { expect } from 'chai'
import supertest from 'supertest'
import {
  OK,
  CREATED,
  ACCEPTED,
} from 'http-status'
import app from '../src'

let series

const URL = '/api/series'
const agent = supertest.agent(app)

describe('Series CRUD API', () => {
  it('should create new series', (done) => {
    agent.post(URL).send({
 	    title: 'Story Series',
      description: 'A little description about the series',
      category: 'Romance',
    }).expect(CREATED).end((err, res) => {
    	if (err) return done(err)
      series = res.body
      return done()
    })
  })

  it('should update an series', (done) => {
    agent.put(`${URL}/${series._id}`).send({
      title: 'series',
      description: 'New Description',
      category: 'Action',

    }).expect(ACCEPTED).end((err, res) => {
      if (err) return done(err)
      return done()
    })
  })

  it('should get a series by id', (done) => {
    agent.get(`${URL}/${series._id}`).send().expect(OK).end((err, res) => {
      if (err) return done(err)
      return done()
    })
  })

  it('should get all series', (done) => {
    agent.get(URL).send().expect(OK).end((err, res) => {
      if (err) return done(err)
      return done()
    })
  })

  it('should remove a series', (done) => {
    agent.delete(`${URL}/${series._id}`).send().expect(OK).end((err, res) => {
      if (err) return done(err)
      return done()
    })
  })
})
