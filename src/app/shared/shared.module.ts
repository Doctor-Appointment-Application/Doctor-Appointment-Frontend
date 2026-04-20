import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoaderComponent } from './components/loader/loader.component';
import { AlertComponent } from './components/alert/alert.component';
import { StatusColorPipe } from './pipes/status-color.pipe';
import { ModePipe } from './pipes/mode.pipe';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    LoaderComponent,
    AlertComponent,
    StatusColorPipe,
    ModePipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
