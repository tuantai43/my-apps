import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { StoreCoreModule } from '@fa-management/store/core';
import { MatListModule } from '@angular/material/list';
import { DirectiveModule } from '@fa-management/directives';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, SidebarComponent, NavigationComponent],
  imports: [
    CommonModule,
    RouterModule,
    StoreCoreModule,
    MatListModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    DirectiveModule,
  ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
