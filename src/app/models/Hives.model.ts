export interface Hive {
  id: number
  registration: number
  status: string
  size: number
  race: string
  queenYear: number
  temperature: number
  latitude: number
  longitude: number
}

export interface HiveResponse {
  apiary: {
    id: number
    name: string
  }
  hive: Hive
}

export interface HiveHistory {
  date: string
  title: string
  description: string
  idRuche: number
}

export interface Hives {
  id: number
  name: string
  apiary: string
  createdDate: string
  size: string
  disease: string
  queenYear: number
  status: string
  cleaning: string
}
