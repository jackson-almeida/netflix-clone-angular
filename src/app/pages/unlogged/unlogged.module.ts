import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnloggedComponent } from './unlogged.component';
import { UnloggedRoutingModule } from './unlogged.routing';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    UnloggedComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    UnloggedRoutingModule,
  ],
})
export class UnloggedModule { }
