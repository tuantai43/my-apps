import {Component} from '@angular/core';

type Card = {
  title: string,
  src: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  list: Card[] = [
    {
      title: 'Vietnam',
      src: '/assets/images/carousel/vietnam.jpeg'
    },
    {
      title: 'China',
      src: '/assets/images/carousel/china.jpg'
    },
    {
      title: 'Japan',
      src: '/assets/images/carousel/japan.jpg'
    },
    {
      title: 'South Korea',
      src: '/assets/images/carousel/korean.jpeg'
    },
    {
      title: 'Thailand',
      src: '/assets/images/carousel/thailand.png'
    },
  ]
}
