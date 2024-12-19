import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CampingService } from '../camping.service';

@Component({
  selector: 'app-camping-details',
  templateUrl: './camping-details.component.html',
  styleUrls: ['./camping-details.component.css']
})
export class CampingDetailsComponent implements OnInit {
  camping: any;

  constructor(
    private route: ActivatedRoute,
    private campingService: CampingService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getCampingDetails(id);
  }

  getCampingDetails(id: number): void {
    this.campingService.getCampingById(id).subscribe({
      next: (data) => {
        this.camping = data;
      },
      error: (err) => {
        console.error('Error fetching camping details:', err);
      }
    });
  }
}