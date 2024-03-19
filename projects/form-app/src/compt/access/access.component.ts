import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'isdi-access',
  standalone: true,
  imports: [RouterModule, FormsModule, JsonPipe],
  templateUrl: './access.component.html',
  styles: ``,
})
export default class AccessComponent implements OnInit {
  userData:
    | {
        accountType: string;
        password: string;
        repeatPassword: string;
        username: string;
      }
    | undefined;
  @ViewChild('form', {
    static: true,
  })
  form!: ElementRef;
  @ViewChild('accessForm', {
    static: true,
  })
  accessForm!: NgForm;

  ngOnInit() {
    console.dir(this.form.nativeElement);
    console.dir(this.accessForm);
  }

  onSubmit(ev: Event) {
    console.log(ev);
    console.log(this.accessForm.value);
    this.userData = this.accessForm.value;
  }
}
