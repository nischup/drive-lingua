import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.page.html',
  styleUrls: ['./language.page.scss'],
})
export class LanguagePage implements OnInit {
  // List of languages with their flags
  languages = [
    { name: 'English', flag: 'assets/flags/english.png' },
    { name: 'Spanish', flag: 'assets/flags/spanish.jpg' },
    { name: 'French', flag: 'assets/flags/french.png' },
    { name: 'German', flag: 'assets/flags/german.png' },
    { name: 'Chinese', flag: 'assets/flags/chinese.png' },
    { name: 'Japanese', flag: 'assets/flags/japanese.jpg' },
    { name: 'Arabic', flag: 'assets/flags/arabic.png' },
    { name: 'Russian', flag: 'assets/flags/russian.jpg' },
    { name: 'Portuguese', flag: 'assets/flags/portuguese.png' },
  ];

  // Search term, filtered list, and selected language
  searchTerm: string = '';
  filteredLanguages: { name: string; flag: string }[] = [];
  selectedLanguage: string | null = null;

  constructor() {}

  ngOnInit(): void {
    // Initialize the filtered list with all languages
    this.filteredLanguages = [...this.languages];
  }

  // Filter languages based on the search term
  filterLanguages(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredLanguages = this.languages.filter((language) =>
      language.name.toLowerCase().includes(term)
    );
  }
}
