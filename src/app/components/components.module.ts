import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserDropdownComponent } from './user-dropdown/user-dropdown.component';
import { MainTableComponent } from './main-table/main-table.component';
import { ProfileEditComponent } from '../pages/user-profile/profile-edit/profile-edit.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    UserDropdownComponent,
    MainTableComponent,
    ProfileEditComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    UserDropdownComponent,
    MainTableComponent,
    ProfileEditComponent
  ]
})
export class ComponentsModule { }
