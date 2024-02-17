export interface IQuery {
  city?: string;
  lat?: number;
  lon?: number;
  // [key: string]: string | number; // описує фільтр по якому хоче забрати користувачів, сюди попадає будь - яке значення
}
