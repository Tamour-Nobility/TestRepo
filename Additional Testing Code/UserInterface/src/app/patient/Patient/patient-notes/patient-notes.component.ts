import { Component, OnInit, ViewChild, ChangeDetectorRef, Input } from '@angular/core';
import { ModalWindow } from '../../../shared/modal-window/modal-window.component';
import { PatientNote } from '../../Classes/patientNotes';
import { Router, ActivatedRoute } from '@angular/router';
import { APIService } from '../../../components/services/api.service';
import { Common } from '../../../services/common/common';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'patient-notes',
  templateUrl: './patient-notes.component.html',
  styleUrls: ['./patient-notes.component.css']
})
export class PatientNotesComponent implements OnInit {
  @ViewChild(ModalWindow) private modalWindow: ModalWindow;
  @Input() private patientAccount: number = 0;
  @Input() viewOnly: boolean = false;
  noteForm: FormGroup;
  patientNotes: PatientNote[];
  dtpatientNotes: any;
  noteModel: PatientNote;
  numbtncheck: number = 0;

  constructor(private chRef: ChangeDetectorRef,
    public API: APIService,
    private toastService: ToastrService) {
    this.patientNotes = [];
    this.noteModel = new PatientNote();

  }

  ngOnInit() {
    this.noteForm = new FormGroup({
      note: new FormControl('', [Validators.required, Validators.maxLength(500)])
    })
  }

  get formControls() {
    return this.noteForm.controls;
  }

  getNotes() {
    this.API.getData(`/Demographic/GetPatientNotes?PatientAccount=${this.patientAccount}`)
      .subscribe((data) => {
        if (data.Status === 'Sucess') {
          if (this.dtpatientNotes) {
            this.chRef.detectChanges();
            this.dtpatientNotes.destroy();
          }
          this.patientNotes = data.Response;
          this.chRef.detectChanges();
          this.dtpatientNotes = $('.dtpatientNotes').DataTable({
            columnDefs: [
              {
                orderable: false,
                targets: -1,
              },
              { targets: 0, width: "60%" },
              { targets: [1, 2], className: 'text-center' }
            ],
            language: {
              emptyTable: "No data available"
            }
          });
        } else {
          this.toastService.error(data.Status, "Error");
        }
      });
  }

  AddPatientNotes() {
    this.numbtncheck = 1;
    if (!Common.isNullOrEmpty(this.patientAccount))
      this.noteModel.Patient_Account = this.patientAccount;
    else
      this.toastService.error("Patient account didn't provided.", "Note Save Failure.");
    if (this.noteModel.Ptn_Note_Content.trim().length !== 0) {
      this.API.PostData('/Demographic/SavePatientNotes/', this.noteModel, (d) => {
        if (d.Status == "Sucess") {
          this.checkStatus(0);
          this.toastService.success("Note has been saved successfully.", "Note Saved");
          this.noteForm.reset();
        }
        else
          this.toastService.error(d.Status, "Error");
      })
    }
    else {
      this.toastService.warning("No Content provided.", "Note Save Error");
      this.noteForm.reset();
    }
  }

  getPatientNote(notesId: any) {
    this.numbtncheck = 1;
    this.API.getData('/Demographic/GetPatientNote?PatientNotesId=' + notesId).subscribe(
      data => {
        this.noteModel = data.Response;
      }
    );
  }

  checkStatus(numCheck: number) {
    this.numbtncheck = numCheck;
    if (this.numbtncheck == 0) {
      this.getNotes();
    }
    else {
      this.noteModel = new PatientNote();
      this.noteForm.reset();
    }
  }

  show() {
    if (!Common.isNullOrEmpty(this.patientAccount))
      this.modalWindow.show();
    else
      this.toastService.warning('To manage patient notes, please save patient first.', 'Notes Management');
    return;
  }

  hide() {
    this.modalWindow.hide();
  }

  onHiddenModal(event) {
    this.numbtncheck = 0;
    this.noteModel = new PatientNote();
    this.noteForm.reset();
  }

  onShownModal(event) {
    this.checkStatus(this.numbtncheck);
  }
}


