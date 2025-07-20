import { Component } from '@angular/core';
import { Vehicle } from './Vehicle';


@Component({
  selector: 'app-automotive-list',
  standalone: false,
  templateUrl: './automotive-list.html',
  styleUrl: './automotive-list.scss'
})
export class AutomotiveList {
   vehicles: Vehicle[]= [
    {
    id:1,
    brand:'gol',
    version:'paa',
    year:2000,
    mileage: 100000000, 
    images: [
      'assets/img/auto-gol.jpg'
    ] },

    {
    id:2,
    brand:'gol',
   version:'paa',
    year:2000,
    mileage: 100000000, 
    images: ['assets/img/auto-gol.jpg'] },
    {
      id: 3,
    brand:'gol',
   version:'paa',
    year:2000,
    mileage: 100000000, 
    images: ['assets/img/auto-gol.jpg' ]},
    {
      id: 4,
    brand:'gol',
   version:'paa',
    year:2000,
    mileage: 100000000, 
    images: ['assets/img/auto-gol.jpg' ]}
  ]
 seeDetails(vehicle: Vehicle): void {
   console.log('Vehículo seleccionado:', vehicle);
}
}
