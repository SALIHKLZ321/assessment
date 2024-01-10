import {  Component, OnInit, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-parent-component',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent-component.component.css'],
})
export class ParentComponentComponent implements OnInit {
    private fb = inject(FormBuilder)
    parentForm!: FormGroup;
    valuesArr = [];

  ngOnInit() {
    this.parentForm = this.fb.group({
      formArray: this.fb.array([]),
    });
  }

  get formArray() {
    return this.parentForm.get('formArray') as FormArray;
  }

  addControl(value: Event) {
    const val = value as unknown as string;
    const newControl = new FormGroup({
        control: new FormControl(val)
    });
    this.formArray.push(newControl);
    console.log(this.formArray);
  }
}
