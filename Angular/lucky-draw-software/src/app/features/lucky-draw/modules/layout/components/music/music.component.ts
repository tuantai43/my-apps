import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {
  hasSound = true;
  iconSound: 'music_note' | 'music_off' = 'music_note'

  ngOnInit(): void {
    this.hasSound = true;
  }

  toggleSound() {
    this.hasSound = !this.hasSound;
    this.iconSound = this.hasSound ? 'music_note' : 'music_off';
  }
}
