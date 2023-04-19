import { NewDiaryEntry } from './types'
import { Weather, Visibility } from './enums'

const isString = (string: string): boolean => {
  return typeof string === 'string'
}

const parseComment = (commentFromReq: any): string => {
  if (!isString(commentFromReq)) {
    throw new Error('Incorrect or missing comment')
  }
  return commentFromReq
}

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}

const parseDate = (dateFromReq: any): string => {
  if (!isString(dateFromReq) || !isDate(dateFromReq)) {
    throw new Error('Incorrect or missing date')
  }
  return dateFromReq
}

const isWeather = (weather: any): boolean => {
  return Object.values(Weather).includes(weather)
}

const parseWeather = (weatherFromReq: any): Weather => {
  if (!isString(weatherFromReq) || !isWeather(weatherFromReq)) {
    throw new Error('Incorrect or missing weather')
  }
  return weatherFromReq
}

const isVisibility = (visibility: any): boolean => {
  return Object.values(Visibility).includes(visibility)
}

const parseVisibility = (visibilityFromReq: any): Visibility => {
  if (!isString(visibilityFromReq) || !isVisibility(visibilityFromReq)) {
    throw new Error('Incorrect or missing visibility')
  }
  return visibilityFromReq
}

const toNewDiaryEntry = (obj: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comment: parseComment(obj.comment),
    date: parseDate(obj.date),
    weather: parseWeather(obj.weather),
    visibility: parseVisibility(obj.visibility)
  }
  return newEntry
}

export default toNewDiaryEntry
