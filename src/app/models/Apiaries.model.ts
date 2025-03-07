export interface Apiary {
  id: number
  name: string
  location: string
  hiveCount: number
  creationDate: string
  status: string
  latitude: number
  longitude: number
}

export interface ApiaryHistory {
  id: number
  date: string
  title: string
  description: string
}

export interface HivesLocation {
  latitude: number
  longitude: number
}

export interface ApiariesHistory {
  title: string
  description: string
  date: string
  apiary_id: number
}

export interface Harvest {
  date: string
  quantity: number
  apiary_id: number
}
