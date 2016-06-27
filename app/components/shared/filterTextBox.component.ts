import { Component, Output, EventEmitter} from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';

@Component({
  selector: 'filter-textbox',
  templateUrl: 'app/components/shared/filterTextBox.component.html',
  directives: [ FORM_DIRECTIVES ]
})
export class FilterTextBoxComponent{
  
  model: { filter: string } = { filter: null };
    
  constructor(){
  }
  
  @Output()
  changed: EventEmitter<string> = new EventEmitter<string>();
       
  filterChanged(event: any){
    event.preventDefault();
    this.changed.emit(this.model.filter); 
  }
}