// Help me generate a cart service for an angular e-commerce application.
// Using state functionality
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


// model for cart item
export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}



@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();
  constructor() { }

  getCartItems(): CartItem[] {
    return this.cartItemsSubject.getValue();
  }
  addToCart(item: CartItem): void {
    const currentItems = this.getCartItems();
    const itemIndex = currentItems.findIndex((i) => i.id === item.id);
    if (itemIndex > -1) {
      currentItems[itemIndex].quantity += item.quantity;
    } else {
      currentItems.push(item);
    }

    this.cartItemsSubject.next(currentItems);
  }

  removeFromCart(itemId: number): void {
    const currentItems = this.getCartItems().filter(
      (item) => item.id !== itemId
    );
    this.cartItemsSubject.next(currentItems);
  }
  clearCart(): void {
    this.cartItemsSubject.next([]);
  }
  getTotalPrice(): number {
    return this.getCartItems().reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }
}
