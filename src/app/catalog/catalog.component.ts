import { Component } from '@angular/core';
import { CartService, CartItem } from '../service/cart.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent {

  // JSON array of products
  availableProducts = [
    { id: 1, name: 'Wireless Mouse', price: 29.99, category: 'Peripherals' },
    { id: 2, name: 'Mechanical Keyboard', price: 89.99, category: 'Peripherals' },
    { id: 3, name: 'USB-C Cable (3-pack)', price: 19.99, category: 'Cables' },
    { id: 4, name: '4K Monitor Stand', price: 49.99, category: 'Accessories' },
    { id: 5, name: 'Laptop Stand', price: 39.99, category: 'Accessories' },
    { id: 6, name: 'Desk Lamp (LED)', price: 34.99, category: 'Lighting' },
    { id: 7, name: 'Phone Screen Protector', price: 12.99, category: 'Protection' },
    { id: 8, name: 'HDMI Cable 2.1', price: 14.99, category: 'Cables' },
    { id: 9, name: 'Wireless Charger', price: 24.99, category: 'Charging' },
    { id: 10, name: 'USB Hub (7-port)', price: 44.99, category: 'Accessories' },
    { id: 11, name: 'Cable Organizer Set', price: 9.99, category: 'Organization' },
    { id: 12, name: 'Webcam 1080p', price: 59.99, category: 'Peripherals' },
  ];

  constructor(private cartService: CartService) { }

  addToCart(product: any): void {
    const cartItem: CartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    };
    this.cartService.addToCart(cartItem);
  }
}
