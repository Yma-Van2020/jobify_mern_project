import Job from '../models/Job.js'
import { StatusCodes } from "http-status-codes"
import { BadRequestError, UnAuthenticatedError } from '../errors/index.js'

const createJob = async (req, res) => {
  const {position, company} = req.body

  if(!position || !company){
    throw new BadRequestError('Please provide all values')
  }
  req.body.createdBy = req.user.userId
  const job = await Job.create(req.body)
  res.status(StatusCodes.CREATED).json({job})

}
const getAllJobs = async (req, res) => {
  const jobs = await Job.find({createdBy: req.user.userId})
  res
    .status(StatusCodes.OK)
    .json({ jobs, totalJobs: jobs.length, numOfPages: 1}) //hard code for now, come back later
}
const deleteJob = async (req, res) => {
  res.send('dj')
}
const updateJob = async (req, res) => {
  res.send('uj')
}
const showStats = async (req, res) => {
  res.send('ss')
}

export { createJob, deleteJob, getAllJobs, updateJob, showStats}