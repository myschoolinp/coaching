import { NgModule } from '@angular/core';
import { LoginRoutingModule } from './login.routing.module';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/modules/material.module';
import { LoginService } from 'src/app/services/login.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        LoginRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        MaterialModule,
        HttpClientModule
    ],
    providers: [LoginService],
    bootstrap: [LoginComponent]
})
export class LoginModule { }
