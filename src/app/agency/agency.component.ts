import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms'

export class Agency {
  public AgencyName: string;
  public ServerName: string;
  public IISUrl: string;
  public $key: string;
  constructor(agencyname: string, servername: string, iisurl: string) {
    this.AgencyName = agencyname;
    this.ServerName = servername;
    this.IISUrl = iisurl;
  }
}
@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.css']
})
export class AgencyComponent implements OnInit {
  private edit: boolean = false;
  @Input() agency: Agency;
  @Output() update: EventEmitter<any> = new EventEmitter();
  @Output() remove: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {

  }
  Edit() {
    this.edit = true;
  }
  Save(agencyname: string, servername: string, webservice: string) {
    this.agency.AgencyName = agencyname;
    this.agency.ServerName = servername;
    this.agency.IISUrl = webservice;
    this.update.emit(this.agency);
    this.edit = false;
  }
  Remove(agency: Agency) {
    this.remove.emit(agency);
  }
}
