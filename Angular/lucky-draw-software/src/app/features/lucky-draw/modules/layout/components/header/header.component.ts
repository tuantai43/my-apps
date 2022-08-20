import { Component } from '@angular/core';
import { AuthFacade } from '@app/features/lucky-draw/libs/store/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isLogged$ = this.authFacade.isLogged$;
  fullName$ = this.authFacade.fullName$;

  constructor(private authFacade: AuthFacade) {}
}
