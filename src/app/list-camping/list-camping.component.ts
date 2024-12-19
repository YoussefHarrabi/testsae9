import { Component, OnInit } from '@angular/core';
import { camping } from '../core/models/camping';
import { CampingService } from '../camping.service';

@Component({
  selector: 'app-list-camping',
  templateUrl: './list-camping.component.html',
  styleUrls: ['./list-camping.component.css']
})
export class ListCampingComponent implements OnInit {
  campings: any[] = [];

  constructor(private campingService: CampingService) {}

  ngOnInit(): void {
    this.campingService.getCampings().subscribe({
      next: (data) => {
        this.campings = data;
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des campings :', err);
      }
    });
  }

    // Load campings from json-server
    loadCampings(): void {
      this.campingService.getCampings().subscribe({
        next: (data) => {
          this.campings = data;
        },
        error: (err) => {
          console.error('Error fetching campings:', err);
        }
      });
    }

   // Delete a camping
   deleteCamping(id: number): void {
    this.campingService.deleteCamping(id).subscribe({
      next: () => {
        console.log(`Camping with ID ${id} deleted.`);
        // Reload the list after deletion
        this.loadCampings();
      },
      error: (err) => {
        console.error('Error deleting camping:', err);
      }
    });
  }
}
