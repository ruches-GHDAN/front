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

export interface HiveHistory {
  date: string
  title: string
  description: string
  idRuche: number
}
