import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ScrollProgressBarComponent } from './scroll-progress-bar/scroll-progress-bar.component';
@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ScrollProgressBarComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
