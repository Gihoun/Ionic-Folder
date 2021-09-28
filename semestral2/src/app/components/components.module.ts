import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { StandarFooterComponent } from './standar-footer/standar-footer.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { StandarHeaderComponent } from './standar-header/standar-header.component';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeHeaderComponent,StandarFooterComponent,LoginModalComponent,StandarHeaderComponent,ProfileHeaderComponent],
  imports: [
    CommonModule,IonicModule,RouterModule
  ],
  exports: [HomeHeaderComponent,StandarFooterComponent,LoginModalComponent,StandarHeaderComponent,ProfileHeaderComponent]
})
export class ComponentsModule { }
