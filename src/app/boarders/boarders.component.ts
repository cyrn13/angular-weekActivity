import { Component, OnInit } from '@angular/core';
import { BoarderService } from '../boarder.service';

@Component({
  selector: 'boarders',
  templateUrl: './boarders.component.html',
  styleUrls: ['./boarders.component.css']
})
export class BoardersComponent implements OnInit {

  boarders;
  output:any;

  constructor(service: BoarderService) {
    this.boarders = service.getBoarders()
    this.output = service.getBoarders()
  }

  showFemale(){
    this.output = this.boarders
    this.output = this.boarders.filter(boarder => boarder.gender === 'Female')
  }
  showMale(){
    this.output = this.boarders
    this.output = this.boarders.filter(boarder => boarder.gender === 'Male')
  }
  showAll(){
    this.output = this.boarders
  }


  showDeluxe(){
    this.output = this.boarders
    this.output = this.boarders.filter(boarder => boarder.room === 'Deluxe')
  }
  showSuite(){
    this.output = this.boarders
    this.output = this.boarders.filter(boarder => boarder.room === 'Suite')
  }
  showSingle(){
    this.output = this.boarders
    this.output = this.boarders.filter(boarder => boarder.room === 'Single Bed')
  }
  showQueen(){
    this.output = this.boarders
    this.output = this.boarders.filter(boarder => boarder.room === 'Queen Size')
  }
  showMasters(){
    this.output = this.boarders
    this.output = this.boarders.filter(boarder => boarder.room === 'Masters Bedroom')
  }

  
  ngOnInit(): void {
  }

}
