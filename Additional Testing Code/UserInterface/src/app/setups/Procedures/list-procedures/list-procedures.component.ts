import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ProceduresSearchViewModel, ProcedureViewModel } from '../models/procedures.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { APIService } from '../../../components/services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ValidateWhiteSpace } from '../../../validators/validateWhiteSpace.validator';

@Component({
  selector: 'app-list-procedures',
  templateUrl: './list-procedures.component.html',
  styleUrls: ['./list-procedures.component.css']
})
export class ListProceduresComponent implements OnInit {
  proceduresSearchViewModel: ProceduresSearchViewModel;
  proceduresList: ProcedureViewModel[];
  searchForm: FormGroup;
  isSearchFormValid: boolean = false;
  dataTableProcedures: any;
  selectedProcedure: ProcedureViewModel;
  isSearchInitiated: boolean = false;
  constructor(private apiService: APIService,
    private chRef: ChangeDetectorRef,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.proceduresSearchViewModel = new ProceduresSearchViewModel();
    this.proceduresList = [];
    this.selectedProcedure = new ProcedureViewModel();
  }

  ngOnInit() {
    this.InitializeForms();
    this.onChanges();
  }

  onChanges(): any {
    this.searchForm.valueChanges.subscribe(() => {
      if (this.searchForm.get('procedureCode').valid || this.searchForm.get('description').valid) {
        this.isSearchFormValid = true;
      }
      else {
        this.isSearchFormValid = false;
      }
    });
  }

  InitializeForms(): any {
    this.searchForm = new FormGroup({
      procedureCode: new FormControl('', [Validators.required, ValidateWhiteSpace]),
      description: new FormControl('', [Validators.required, ValidateWhiteSpace])
    });
  }

  onSearchProcedures() {
    if (this.isSearchFormValid) {
      this.isSearchInitiated = true;
      this.apiService.PostData(`/Setup/SearchProcedures`, this.proceduresSearchViewModel, (data) => {
        if (data.Status == 'Success') {
          if (this.dataTableProcedures) {
            this.dataTableProcedures.destroy();
          }
          this.proceduresList = data.Response;
          this.chRef.detectChanges();
          this.dataTableProcedures = $('.dataTableProcedures').DataTable({
            columnDefs: [
              { orderable: false, targets: -1 }
            ],
            language: {
              emptyTable: "No data available"
            }
          });
        }
        else {

        }
      });
    } else {
      swal('Procedures Search', 'Please enter any search criteria.', 'warning');
    }
  }

  onEditClick(ndx: any) {
    this.router.navigate(['edit', this.proceduresList[ndx].ProcedureCode], { relativeTo: this.activatedRoute });
  }

  onDeleteClick(ndx: number) {
    this.apiService.confirmFun('Confirmation', 'Are you that you want to delete procedure?', () => {
      this.apiService.getData(`/Setup/DeleteProcedure?procedureCode=${this.proceduresList[ndx].ProcedureCode}`).subscribe(d => {
        if (d.Status == "Success") {
          this.onSearchProcedures();
          swal('Procedure', 'Procedure has been deleted', 'success');
        }
        else {
          swal('Procedure', d.Status, 'error');
        }
      });
    });
  }

  onClear() {
    if (this.dataTableProcedures) {
      this.dataTableProcedures.destroy();
    }
    this.proceduresList = [];
    this.chRef.detectChanges();
    this.dataTableProcedures = $('.dataTableProcedures').DataTable({
      columnDefs: [
        { orderable: false, targets: -1 }
      ],
      language: {
        emptyTable: "No data available"
      }
    });
  }
}
