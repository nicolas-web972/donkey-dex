import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-loader',
  templateUrl: './list-loader.component.html',
  styleUrls: ['./list-loader.component.scss']
})
export class ListLoaderComponent implements OnInit {

  @Input() isLoading = false;
  @Input() isEmpty = false;
  @Input() emptyMessage = 'Aucun élément';

  constructor() { }

  ngOnInit(): void {
  }

}
