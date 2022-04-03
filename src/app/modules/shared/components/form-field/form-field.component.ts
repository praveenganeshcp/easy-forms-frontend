import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit {

  @Input() labelName: string;
  @Input() iconName: string;
  @Input() id: string;
  constructor() { }

  ngOnInit(): void {
  }

  getLabelName() {
    return this.labelName;
  }

  getIconName() {
    return this.iconName;
  }

  getId() {
    return this.id;
  }

}
