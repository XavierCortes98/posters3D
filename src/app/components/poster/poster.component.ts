import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css'],
})
export class PosterComponent implements OnInit {
  posterForm: FormGroup;

  leftName: String = '';
  rightName: String = '';
  description: String = '';
  title: String = '';

  constructor(private formBuilder: FormBuilder) {
    this.posterForm = this.formBuilder.group({
      leftName: ['Anya Taylor-Joy'],
      rightName: ['Chris Hemsworth'],
      description: ['From mastermind George Miller'],
      title: ['FURIOSA'],
    });
    this.submit();
  }

  ngOnInit() {}

  submit() {
    this.leftName = this.posterForm.get('leftName')?.value;
    this.rightName = this.posterForm.get('rightName')?.value;
    this.description = this.posterForm.get('description')?.value;
    this.title = this.posterForm.get('title')?.value;
  }
}
