import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { NavMenuComponent} from './components/navmenu/navmenu.component';
import { OverzichtComponent } from './components/overzicht/overzicht.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core/src/metadata/ng_module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    OverzichtComponent,
    SidenavComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MaterialModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'overzicht', pathMatch: 'full' },
      { path: 'overzicht', component: OverzichtComponent },
      { path: '**', redirectTo: 'overzicht' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
