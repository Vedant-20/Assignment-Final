import { Component } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  isFormOpen = false;
  product = {
    id: '',
    title: '',
    description: '',
    imageLink: '',
    category: '',
    subcategory: '',
    price: 0
  };

  openForm() {
    this.isFormOpen = true;
  }

  closeForm() {
    this.isFormOpen = false;
  }

  onSubmit() {
    // Handle form submission here

    
    // Reset the form and close the popup
    this.product = {
      id: '',
      title: '',
      description: '',
      imageLink: '',
      category: '',
      subcategory: '',
      price: 0
    };
    this.isFormOpen = false;
  }
}
