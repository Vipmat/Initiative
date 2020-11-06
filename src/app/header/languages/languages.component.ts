import { Component } from '@angular/core';

interface Language {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css'],
})
export class LanguagesComponent {
  constructor() {}

  languages: Language[] = [
    { value: 'french', viewValue: 'French' },
    { value: 'spanish', viewValue: 'Spanish' },
    { value: 'german', viewValue: 'German' },
    { value: 'italian', viewValue: 'Italian' },
  ];
}
