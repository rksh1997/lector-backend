import { expect } from 'chai'
import supertest from 'supertest'
import { OK, CREATED, ACCEPTED } from 'http-status'
import app from '../src'

const URL = '/api/genres'
const agent = supertest.agent(app)

let genreId

describe('#Genre api', () => {
  it('Creates a genre', (done) => {
    agent.post(URL)
      .send({
        name: 'Fake',
      })
      .expect(CREATED)
      .end((err, { body }) => {
        if (err) return done(err)
        expect(body.name).to.equal('Fake')
        genreId = body._id
        return done()
      })
  })

  it('Gets all genres', (done) => {
    agent.get(URL)
      .expect(OK)
      .end((err, { body }) => {
        if (err) return done(err)
        expect(body).to.be.a('array')
        return done()
      })
  })

  it('Updates a genre', (done) => {
    agent.put(`${URL}/${genreId}`)
      .send({
        name: 'FakeUpdated',
      })
      .expect(ACCEPTED)
      .end((err, { body }) => {
        if (err) return done(err)
        expect(body.name).to.equal('FakeUpdated')
        return done()
      })
  })

  it('Deletes a genre', (done) => {
    agent.delete(`${URL}/${genreId}`)
      .expect(ACCEPTED)
      .end((err, { body }) => {
        if (err) return done(err)
        expect(body.name).to.equal('FakeUpdated')
        return done()
      })
  })
})
