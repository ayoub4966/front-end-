import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreComponent } from './core/core.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { SidenavComponent } from './core/sidenav/sidenav.component';
import { FormsModule } from '@angular/forms';
import { UserModule } from './user/user.module';
import { ClarityModule } from '@clr/angular';
import{BrowserAnimationsModule}from'@angular/platform-browser/animations';
import { AuthentModule } from './authent/authent.module';
import { HotModule } from './auth/hot.module';


@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UserModule,
    ClarityModule,
    BrowserAnimationsModule,
    AuthentModule,
    HotModule
  
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
