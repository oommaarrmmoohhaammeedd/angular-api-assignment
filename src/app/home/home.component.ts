import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Istore } from '../istore';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private _ApiService: ApiService) {

  }

  storeData: Istore[] = []

  ngOnInit(): void {
    this._ApiService.getData().subscribe({
      next: (res) => {
        this.storeData = res
        console.log(this.storeData);
      },
      error: (err) => {
        console.log(err);
      },
    })
  }
}
