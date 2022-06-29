import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MemorybuttonComponent } from './memorybutton/memorybutton.component';
import { MemoryGridComponent } from './memory-grid/memory-grid.component';
import { HeaderInfoComponent } from './header-info/header-info.component';
import { InfoPanelComponent } from './info-panel/info-panel.component';
import { MemoryGameComponent } from './memory-game/memory-game.component';

@NgModule({
  declarations: [
    AppComponent,
    MemorybuttonComponent,
    MemoryGridComponent,
    HeaderInfoComponent,
    InfoPanelComponent,
    MemoryGameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
