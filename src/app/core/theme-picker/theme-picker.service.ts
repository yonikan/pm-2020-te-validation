import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemePickerService {
  private themeWrapper = document.querySelector('body');
  private isDarkMode = false;

  constructor() { }

  setDefaultTheme() {
    const themeData = {
      navColor: '#000',
      navBackground: '#fff',
      cardColor: '#fff',
      cardBackground: '#353435 !important',
      buttonColor: '#9575cd',
      buttonBackground: '#4ccead',
      footerColor: null,
      footerBackground: null
    };
    this.globalOverride(themeData);
  }

  getIsDarkMode() {
    return this.isDarkMode;
  }

  setIsDarkMode(currentMode) {
    const themeData = {
      navColor: '#fff',
      navBackground: '#444',
      cardColor: '#fff',
      cardBackground: '#353435 !important',
      buttonColor: '#9575cd',
      buttonBackground: '#4ccead',
      footerColor: null,
      footerBackground: null
    };
    this.isDarkMode = currentMode;
    this.globalOverride(themeData);
  }

  globalOverride(stylesheet) {
    // Navigation Styles
    if (stylesheet.navColor) {
      this.themeWrapper.style.setProperty('--navColor', stylesheet.navColor);
    }
    if (stylesheet.navBackground) {
      this.themeWrapper.style.setProperty('--navBackground', stylesheet.navBackground);
    }
    // Card Styles
    if (stylesheet.cardColor) {
      this.themeWrapper.style.setProperty('--cardColor', stylesheet.cardColor);
    }
    if (stylesheet.navBackground) {
      this.themeWrapper.style.setProperty('--cardBackground', stylesheet.cardBackground);
    }
    // Footer Styles
    if (stylesheet.footerColor) {
      this.themeWrapper.style.setProperty('--footerColor', stylesheet.footerColor);
    }
    if (stylesheet.footerBackground) {
      this.themeWrapper.style.setProperty('--footerBackground', stylesheet.footerBackground);
    }
    if (stylesheet.footerAlignment) {
      this.themeWrapper.style.setProperty('--footerAlignment', stylesheet.footerAlignment);
    }
    // Button Styles
    if (stylesheet.buttonColor) {
      this.themeWrapper.style.setProperty('--buttonColor', stylesheet.buttonColor);
    }
    if (stylesheet.buttonBackground) {
      this.themeWrapper.style.setProperty('--buttonBackground', stylesheet.buttonBackground);
    }
  }}
