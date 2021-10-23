import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './pages/home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import { AuthInterceptorProviders } from './service/auth.interceptor';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import {MatSelectModule} from '@angular/material/select';
import { ProfileComponent } from './pages/profile/profile.component';
import {MatListModule} from '@angular/material/list';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import {MatTableModule} from '@angular/material/table';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { UserSidebarComponent } from './pages/user/user-sidebar/user-sidebar.component';
import { UserProfileComponent } from './pages/user/user-profile/user-profile.component';
import { UserWelcomeComponent } from './pages/user/user-welcome/user-welcome.component';
import {MatStepperModule} from '@angular/material/stepper';
import {ReactiveFormsModule } from '@angular/forms';
import { StepperComponent } from './pages/user/stepper/stepper.component';
import { UserListComponent } from './pages/admin/user-list/user-list.component';
import { AgGridModule } from 'ag-grid-angular';
import { AddUserComponent } from './pages/admin/add-user/add-user.component';
import { UserDataComponent } from './pages/admin/user-data/user-data.component';
import { CropListComponent } from './pages/admin/crop-list/crop-list.component';
import { DataListComponent } from './pages/user/data-list/data-list.component';
import { UserSharedComponent } from './pages/admin/user-shared/user-shared.component';
import { EditUserInfoComponent } from './pages/user/edit-user-info/edit-user-info.component';
import {MatDatepickerModule} from '@angular/material/datepicker';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    UserDashboardComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    ViewCategoriesComponent,
    AddCategoryComponent,
    UserSidebarComponent,
    UserProfileComponent,
    UserWelcomeComponent,
    StepperComponent,
    UserListComponent,
    AddUserComponent,
    UserDataComponent,
    CropListComponent,
    DataListComponent,
    UserSharedComponent,
    EditUserInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatListModule,
    MatTableModule,
    MatStepperModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([UserListComponent]),
    MatDatepickerModule,
    
  ],
  providers: [AuthInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
