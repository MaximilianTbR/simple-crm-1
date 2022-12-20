import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../models/user.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent implements OnInit {
  user: User;
  birthDate: Date;
  loading = false;

  constructor(private firestore: AngularFirestore, public dialogRef: MatDialogRef<DialogEditUserComponent>) { }
  userId: string;

  ngOnInit(): void {
  }

  saveUser() {
    this.loading = true;
    //this.user.birthDate = this.birthDate.getTime();
    this.firestore
      .collection('users')
      .doc(this.userId)
      .update(this.user.toJSON())
      .then((result: any) => {
        console.log(result)
      })
    this.loading = false;
    this.dialogRef.close();
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
