import { TestBed } from '@angular/core/testing';

import { NotifyService } from './notify.service';
import { ToastrModule } from 'ngx-toastr';

describe('NotifyService', () => {
  let service: NotifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ToastrModule.forRoot()]
    });
    service = TestBed.inject(NotifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
