import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  constructor(private toastr: ToastrService) { }

  showSuccess(message: string | undefined, title: string | undefined){
    this.toastr.success(message, title);
}      
  showError(message: string | undefined, title: string | undefined){
    this.toastr.error(message, title);
} 
  showWaring(message: string | undefined, title: string | undefined){
    this.toastr.warning(message, title);
  }
}
