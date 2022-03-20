export class User{

  id?: string;
  meno: string;
  priezvisko: string;

  constructor(osoba: User) {
    this.id = osoba.id;
    this.meno = osoba.meno;
    this.priezvisko = osoba.priezvisko;
  }
}
