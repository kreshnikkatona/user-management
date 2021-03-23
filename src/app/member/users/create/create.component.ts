import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User, UserService } from '../user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  @Input()
  user: User = {} as User;
  save: EventEmitter<User> = new EventEmitter();
  cancel: EventEmitter<void> = new EventEmitter();

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.params.id)
    if (id) {
      this.userService.getUser(id).subscribe(res => {
        if(res) {
          this.user = res
        } else {
          this.router.navigateByUrl('member/users')
        }
      })
    }
  }

  onSave(user: User) {
    this.userService.save(user);
    this.router.navigateByUrl('/member/users');
  }

  onCancel() {
    this.router.navigateByUrl('/member/users');
  }

}
