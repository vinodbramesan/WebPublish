import { Component, OnInit } from '@angular/core';
import { Agency } from '../agency/agency.component'
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
@Component({
  selector: 'app-agencylist',
  templateUrl: './agencylist.component.html',
  styleUrls: ['./agencylist.component.css']

})
export class AgencylistComponent implements OnInit {
  items: FirebaseListObservable<any[]>;
  agencies: Agency[] = [];
  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {    
    this.items = this.db.list('/Agencies');
  }
  addAgency() {
    this.items.push({ AgencyName: 'eVero', ServerName: 'ECLOUD', IISUrl: 'DevWeb' });
  }
  update(agency: Agency) {
    this.items.update(agency.$key,agency);
  }
  delete(agency:Agency){
    this.items.remove(agency.$key);
  }
}
