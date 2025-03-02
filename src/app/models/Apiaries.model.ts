export interface Apiary {
  id: number;
  name: string;
  location: string;
  hiveCount: number;
  creationDate: string;
  status: string;
  latitude: number;
  longitude: number;
  
}

export interface ApiaryHistory {
  idApiary: number;
  date: string;
  title: string;
  description: string;
}
