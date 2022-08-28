import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { observable, Observable } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-custom-multiselect',
  templateUrl: './custom-multiselect.component.html',
  styleUrls: ['./custom-multiselect.component.css']
})
export class CustomMultiselectComponent implements OnInit {
  people: any;
  selectedPeople = [{ item_text: 'Karyn Wright' }];
  dropdownSettings: {};
  constructor(private dataService: DataService) {
    this.dropdownSettings = {};
  }

  ngOnInit(): void {
    this.dataService.getPeople().subscribe((data) => {
      this.people = data;
    });
    // this.dropdownList = [
    //   { item_id: 1, item_text: 'Mumbai' },
    //   { item_id: 2, item_text: 'Bangaluru' },
    //   { item_id: 3, item_text: 'Pune' },
    //   { item_id: 4, item_text: 'Navsari' },
    //   { item_id: 5, item_text: 'New Delhi' }
    // ];
    // this.selectedItem = [
    //   //  { item_id: 3, item_text: 'Pune' },
    //   // { item_id: 4, item_text: 'Navsari' }
    // ]
    this.dropdownSettings = {

      idField: 'item_id',
      textField: 'item_text',
      singleSelection: false,
      enableCheckAll: true,
      selectAllText: 'all',
      unSelectAllText: 'Unselect all',
      allowSearchFilter: true,
      limitSelection: -1,
      clearSearchFilter: true,
      maxHeight: 197,
      itemsShowLimit: 0,
      closeDropDownOnSelection: false,
      showSelectedItemsAtTop: false,
      defaultOpen: false,
    };
  }
  public onItemSelect(item: any) {
    console.log(item);
  }
  public onDeSelect(item: any) {
    console.log(item);
  }

  public onSelectAll(items: any) {
    console.log(items);
  }
  public onDeSelectAll(items: any) {
    console.log(items);
  }

  close(multi: any) {
    debugger
    console.log(multi)
  }
  removeItem(item: any) {
    debugger

    this.selectedPeople = this.selectedPeople.filter((x: any) => x.item_text !== item.item_text);
  }

}
