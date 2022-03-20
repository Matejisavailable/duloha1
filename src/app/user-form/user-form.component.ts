import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from "../models/user-model";
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent{
  @Input()
  set osoba(data: User | undefined) {
    if (data) {
      this.naplnForm(data);
    }
  }

  @Output()
  pridajOsobu = new EventEmitter<User>();

  @Output()
  upravOsobu = new EventEmitter<User>();

  form!: FormGroup;

  constructor() {
    this.vytvorForm();
  }

  private vytvorForm(): void {
    this.form = new FormGroup({
      id: new FormControl(null),
      meno: new FormControl(null),
      priezvisko: new FormControl(null)
    });
  }

  private naplnForm(osoba: User): void {
    /*
    treba zadat hodnoty pre vsetky formControls vo formGroup, ak nie, hodi error
    this.form.setValue({
      meno: osoba.meno,
      priezvisko: osoba.priezvisko
    });
    */

    /* netreba zadat vsetky hodnoty formControls vo formGroup
    this.form.patchValue({
      meno: osoba.meno,
      priezvisko: osoba.priezvisko
    });
     */

    /*
      treba zadat hodnoty pre vsetky formControls vo formGroup, ak nie, hodi error
      this.form.setValue({
        meno: osoba.meno,
        priezvisko: osoba.priezvisko
      });
      */
    /* netreba zadat vsetky hodnoty formControls vo formGroup
    this.form.patchValue({
      meno: osoba.meno,
      priezvisko: osoba.priezvisko
    });
     */
    this.form.controls['id'].setValue(osoba.id);
    this.form.controls['meno'].setValue(osoba.meno);
    this.form.controls['priezvisko'].setValue(osoba.priezvisko);
  }

  public pridaj(): void {
    this.pridajOsobu.emit({ id: Math.random().toString(), meno: this.form.value.meno, priezvisko: this.form.value.priezvisko});
    this.form.reset();
  }

  public uprav(): void {
    this.upravOsobu.emit(this.form.value);
    this.form.reset();
  }

  public zrus(): void {
    this.form.reset();
  }

}
