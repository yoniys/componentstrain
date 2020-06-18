import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JirafComponent } from './comps/jiraf/jiraf.component';
import { H1jirafComponent } from './comps/jiraf/h1jiraf/h1jiraf.component';
import { UljirafComponent } from './comps/jiraf/uljiraf/uljiraf.component';
import { FooterjirafComponent } from './comps/jiraf/footerjiraf/footerjiraf.component';
import { RebbitComponent } from './comps/rebbit/rebbit.component';
import { H1rebbitComponent } from './comps/rebbit/h1rebbit/h1rebbit.component';
import { UlrebbitComponent } from './comps/rebbit/ulrebbit/ulrebbit.component';
import { FoterrebbitComponent } from './comps/rebbit/foterrebbit/foterrebbit.component';
import { TigerComponent } from './comps/tiger/tiger.component';
import { H1tigerComponent } from './comps/tiger/h1tiger/h1tiger.component';
import { UltigerComponent } from './comps/tiger/ultiger/ultiger.component';
import { FotertigerComponent } from './comps/tiger/fotertiger/fotertiger.component';

@NgModule({
  declarations: [
    AppComponent,
    JirafComponent,
    H1jirafComponent,
    UljirafComponent,
    FooterjirafComponent,
    RebbitComponent,
    H1rebbitComponent,
    UlrebbitComponent,
    FoterrebbitComponent,
    TigerComponent,
    H1tigerComponent,
    UltigerComponent,
    FotertigerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
