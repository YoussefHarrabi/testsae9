import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CampingService } from '../camping.service'; // Assurez-vous que le chemin est correct
import { Router } from '@angular/router'; // Importer Router pour la redirection
@Component({
  selector: 'app-add-camping',
  templateUrl: './add-camping.component.html',
  styleUrls: ['./add-camping.component.css']
})
export class AddCampingComponent {
  addForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private campingService: CampingService, // Injection du service
    private router: Router // Injection du routeur
  ) {
    this.addForm = this.fb.group({
      nbPlace: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  get nbPlace() {
    return this.addForm.get('nbPlace');
  }

  get description() {
    return this.addForm.get('description');
  }

  addCamping() {
    if (this.addForm.valid) {
      const campingData = this.addForm.value;

      // Save to json-server
      this.campingService.addCamping(campingData).subscribe({
        next: () => {
          console.log('Camping saved successfully.');
          // Redirect to the ListCampingComponent
          this.router.navigate(['/list-camping']);
        },
        error: (err) => {
          console.error('Error saving camping:', err);
        }
      });
    }
  }
}