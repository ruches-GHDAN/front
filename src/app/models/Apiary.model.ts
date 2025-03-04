export interface Apiary {
  id: number
  name: string
  latitude: number
  longitude: number
  temperature: number
}

export interface ApiaryByUser {
  id: number
  name: string
  honeyQuantity: number
  location: {
    latitude: number
    longitude: number
  }
  nbRucheActives: number
}

export interface ApiaryDetails {
  apiary: {
    id: number
    user_id: number,
    name: string,
    latitude: number,
    longitude: number,
    temperature: number,
    created_at: string,
    updated_at: string
  },
  nbHives: number,
  honeyQuantity: number
}
