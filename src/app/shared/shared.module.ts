import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoaderComponent } from './components/loader/loader.component';
import { StatusColorPipe } from './pipes/status-color.pipe';
import { ModePipe } from './pipes/mode.pipe';
 
@NgModule({
  declarations: [NavbarComponent, LoaderComponent, StatusColorPipe, ModePipe],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, LoaderComponent, StatusColorPipe, ModePipe]
})
export class SharedModule {}
