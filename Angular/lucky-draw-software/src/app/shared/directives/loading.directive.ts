import { BaseLoadingComponent } from './../components/base-loading/base-loading.component';
const MAX_WIDTH = 100;
const PADDING = 5;
import {
  ApplicationRef,
  ComponentFactoryResolver,
  Directive,
  ElementRef,
  EmbeddedViewRef,
  Injector,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appLoading]',
})
export class LoadingDirective {
  domLoading: HTMLElement | undefined;
  @Input()
  set appLoading(value: boolean | null) {
    this.generateLoading(!!value);
  }

  constructor(
    private el: ElementRef,
    private injector: Injector,
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef
  ) {}

  private generateLoading(loading: boolean) {
    if (loading) {
      this.el.nativeElement.classList.add('loading', 'directives');
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(BaseLoadingComponent);
      const componentRef = componentFactory.create(this.injector);
      componentRef.instance.diameter = Math.max(
        Math.min(this.el.nativeElement.offsetHeight - PADDING * 2, MAX_WIDTH),
        0
      );
      this.appRef.attachView(componentRef.hostView);
      this.domLoading = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
      this.el.nativeElement.appendChild(this.domLoading);
    } else {
      this.el.nativeElement.classList.remove('loading', 'directives');
      if (this.domLoading) {
        this.el.nativeElement.appendChild(this.domLoading);
        this.domLoading.remove();
      }
    }
  }
}
