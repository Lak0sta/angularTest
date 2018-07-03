import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is simply a test', 'http://www.artistshelpingchildren.org/kidscraftsactivitiesblog/wp-content/uploads/2010/03/square-recipe-file-book.png'),
    new Recipe('A test Recipe', 'This is simply a test', 'http://www.artistshelpingchildren.org/kidscraftsactivitiesblog/wp-content/uploads/2010/03/square-recipe-file-book.png')
  ];

  constructor() { }

  ngOnInit() {
  }

}
