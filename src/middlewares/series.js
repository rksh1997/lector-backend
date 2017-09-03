import { OK, CREATED, NOT_FOUND } from 'http-status'

import Series from '../models/Series'

export async function getSeries(req, res, next) {
	const { id } = req.params
	try {
		const series = await Series.findOne({ _id: id })
		res.status(OK).json(series)
	} catch (e) {
		next(e)
	}
}


export async function getSerieses(req, res, next) {
	try {
		const serieses = await Series.find()
		res.status(OK).json(serieses)
	} catch (e) {
		next(e)
	}
}


export async function createSeries(req, res, next) {
	try {
		const series = await Series.create(req.body)
		res.status(CREATED).json(series)
	} catch (e) {
		next(e)
	}
}

export async function updateSeries(req, res, next) {
	const { id } = req.params
	try {
		const series = await Series.findByIdAndUpdate(id, req.body)
		res.status(OK).json(series)
	} catch (e) {
		next(e)
	}
}

export async function deleteSeries(req, res, next) {
	const { id } = req.params
	try {
		const series = await Series.findOne({ _id: id })
		await series.remove()
		res.status(OK).json(series)
	} catch (e) {
		next(e)
	}
}

export async function findSeries(req, res, next) {
	const { id } = req.params
	try {
		const series = await Series.findOne({ _id: id })
		if (!series) {
			return res.status(NOT_FOUND).json({
				status: NOT_FOUND,
				message: '404 Not Found',
			})
		}
		req.series = id
		return next()
	} catch (e) {
		return next(e)
	}
}