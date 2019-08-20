import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

enum ArticleSectionTypes {
  IMG = 'IMAGE',
  TEXT = 'TEXT'
}

@Component({
  selector: 'app-article-entry',
  templateUrl: './article-entry.component.html',
  styleUrls: ['./article-entry.component.scss']
})
export class ArticleEntryComponent implements OnInit {
  form: FormGroup;
  items: FormArray;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      items: fb.array([this.createItem()], Validators.required)
    });
  }

  ngOnInit() {}

  createItem(): FormGroup {
    return this.fb.group({
      label: '',
      type: ArticleSectionTypes.TEXT,
      value: '',
      imageUrl: ''
    });
  }

  addItem(): void {
    this.items = this.form.get('items') as FormArray;
    this.items.push(this.createItem());
  }
}
