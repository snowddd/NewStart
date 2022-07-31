import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    const clear = confirm('確定要清除訊息 LOG 嗎?');
    if (clear) {
      this.messages = [];
    }
  }

  clearTopFive() {
    const clear = confirm('確定要清除前五筆訊息 LOG 嗎?');
    if (clear) {
      if (this.messages.length > 5) {
        this.messages = this.messages.slice(5);
      } else {
        this.messages = [];
      }
    }
  }
}
