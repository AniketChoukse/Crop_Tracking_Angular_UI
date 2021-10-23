import { FullscreenOverlayContainer } from '@angular/cdk/overlay';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './service/admin.guard';
import { UserGuard } from './service/user.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { UserWelcomeComponent } from './pages/user/user-welcome/user-welcome.component';
import { UserProfileComponent } from './pages/user/user-profile/user-profile.component';
import { StepperComponent } from './pages/user/stepper/stepper.component';
import { UserListComponent } from './pages/admin/user-list/user-list.component';
import { AddUserComponent } from './pages/admin/add-user/add-user.component';
import { UserDataComponent } from './pages/admin/user-data/user-data.component';
import { CropListComponent } from './pages/admin/crop-list/crop-list.component';
import { UserSharedComponent } from './pages/admin/user-shared/user-shared.component';
import { DataListComponent } from './pages/user/data-list/data-list.component';
import { EditUserInfoComponent } from './pages/user/edit-user-info/edit-user-info.component';


const routes: Routes = [
  
  // { 
  //   path : '', 
  //   redirectTo : 'auth', 
  //   pathMatch : 'full'
  // },
  // {
  //   path:'auth',
  //   loadChildren:()=>import('./auth/auth.module').then(auth=>auth.AuthModule),
  // },
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full',
  },
  {
  path: 'register',
  component: RegisterComponent,
  pathMatch: 'full',
  },
  {
    path: 'login',
    component:LoginComponent,
    pathMatch:'full',
  },
  
  {
    path:'admin',
    component:DashboardComponent,
    canActivate:[AdminGuard],
    children:[
      {
        path: '',
       // component:WelcomeComponent,
       component:UserListComponent,
        
        },
        {
          path: 'usershare',
          component:UserSharedComponent,
        },
        {
          path: 'adduser',
          component:AddUserComponent,
          },
      {
        path: 'userlist',
          component:UserListComponent,
        },
        {
          path: 'userdata',
            component:UserDataComponent,
          },
      {
        path: 'croplist',
        component:CropListComponent,
      },
      {
      path: 'profile',
      component:ProfileComponent,
      },
      {
        path:'categories',
        component:ViewCategoriesComponent,
      },
    ],
  },
  {
    path:'user-dashboard',
    component:UserDashboardComponent,
    canActivate:[UserGuard],
    children:[
      {
        path: '',
        redirectTo:'datalist',
        pathMatch: 'full'
        },
        
        {
          path: 'edituser',
          component:EditUserInfoComponent,
          },
          {
            path: 'userwelcome',
            component:UserWelcomeComponent,
            },
      {
        path: 'datalist',
        component:DataListComponent,
        },
      {
      path: 'user-profile',
      component:UserProfileComponent,
      },
      {
       path: 'stepper',
       component:StepperComponent,
      },
      {
        path: 'datalist',
        component:DataListComponent,
       },
    ],
  },
  {
    path:'user-dashboard',
    component:UserDashboardComponent,
    pathMatch:'full',
    canActivate:[UserGuard],
  },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
