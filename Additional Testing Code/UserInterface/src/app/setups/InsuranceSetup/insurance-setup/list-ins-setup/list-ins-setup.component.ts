import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { APIService } from '../../../../components/services/api.service';
import { InsModel } from '../../classes/insurance-setup-model';
import { SelectListViewModel } from '../../../../models/common/selectList.model';
import { Common } from '../../../../services/common/common';
import { isNullOrUndefined } from 'util';
import { Subscription } from 'rxjs';
import { TitleCasePipe, UpperCasePipe } from '@angular/common';
import { TableRefreshService } from '../../../../services/data/table-refresh.service';
declare var $: any;

@Component({
    selector: 'app-list-ins-setup',
    templateUrl: './list-ins-setup.component.html'
})
export class ListInsSetupComponent implements OnInit {
    insPayerList: SelectListViewModel[];
    dataTable: any;
    insModel: InsModel;
    subsSearch: Subscription;
    subsList: Subscription;
    insPayerId: number;
    constructor(
        private chRef: ChangeDetectorRef,
        public API: APIService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private titleCase: TitleCasePipe,
        private upperCase: UpperCasePipe,
        private tableRefreshService: TableRefreshService
    ) {
        this.insModel = new InsModel();
        this.insPayerList = [];
    }

    ngOnInit() {
        this.InitDatatable();
        this.tableRefreshService.refresh.subscribe(r => {
            if (r.type == 'insSetup') {
                this.insPayerId = r.value.Id;
                if (this.insPayerList == null) {
                    this.insPayerList = [];
                }
                if (this.insPayerList.find(i => i.Id == r.value.Id) == null) {
                    this.insPayerList.push(r.value);
                }
                this.GetInsurances(r.value.Id);
            }
        })
    }

    GetInsurances(InsPayer_Id: any) {
        if (!isNullOrUndefined(this.subsList)) {
            this.subsList.unsubscribe();
        }
        this.subsList = this.API.getData('/InsuranceSetup/GetInsuranceList?InsurancePayerId=' + InsPayer_Id).subscribe(
            d => {
                if (d.Status == "Sucess") {
                    if (this.dataTable) {
                        this.chRef.detectChanges();
                        this.dataTable.destroy();
                    }
                    this.insModel.Response = d.Response;
                    this.chRef.detectChanges();
                    const table: any = $('.tblInsSetup');
                    this.dataTable = table.DataTable({
                        columnDefs: [
                            {
                                className: 'control',
                                orderable: false,
                                targets: 0
                            },
                            {
                                orderable: false,
                                targets: 9
                            }
                        ],
                        language: {
                            emptyTable: "No data available"
                        },
                        responsive: {
                            details: {
                                type: 'column',
                                target: 0
                            }
                        },
                    });
                }
                else {
                    swal('Failed', d.Status, 'error');
                }
            })
    }

    onTypeInsurancePayer(value: any) {
        if (!Common.isNullOrEmpty(value) && value.length >= 3) {
            if (!isNullOrUndefined(this.subsSearch)) {
                this.subsSearch.unsubscribe();
            }
            this.subsSearch = this.API.getData(`/InsuranceSetup/GetSmartInsurancePayersList?searchText=${value}`).subscribe(
                res => {
                    if (res.Status == "Success") {
                        this.insPayerList = res.Response;
                    }
                    else {
                        swal('Failed', res.Status, 'error');
                    }
                });
        }
    }

    onSelectPayer(e: any) {
        if (!Common.isNullOrEmpty(e)) {
            this.GetInsurances(e);
        }
    }

    onRemovePayer(e: any) {
        if (this.dataTable) {
            this.dataTable.destroy();
        }
        this.insModel.Response = [];
        this.chRef.detectChanges();
        this.InitDatatable();
    }

    private InitDatatable() {
        this.dataTable = $('#tblInsSetup').DataTable({
            columnDefs: [
                {
                    className: 'control',
                    orderable: false,
                    targets: 0
                },
                {
                    orderable: false,
                    targets: 9
                }],
            language: {
                emptyTable: "No data available"
            },
            responsive: {
                details: {
                    type: 'column',
                    target: 0
                }
            },
            order: [1, 'asc']
        });
    }

    onDeleteClick(Insurance_Id: any) {
        if (isNullOrUndefined(Insurance_Id))
            return;
        this.API.confirmFun('Delete Insurance', 'Are you sure you want to delete this Insurance?', () => {
            this.API.getData('/InsuranceSetup/DeleteInsurance?InsuranceId=' + Insurance_Id + '&InsurancePayerId=' + this.insPayerId).subscribe(
                d => {
                    if (d.Status == "Sucess") {
                        this.router.navigate(['/InsuranceSetup/insSetup']);
                        swal('Delete Insurance', 'Insurance has been deleted successfully.', 'success');
                        if (this.dataTable) {
                            this.chRef.detectChanges();
                            this.dataTable.destroy();
                        }
                        this.insModel.Response = d.Response;
                        this.chRef.detectChanges();
                        const table: any = $('#tblInsSetup');
                        this.dataTable = table.DataTable({
                            columnDefs: [
                                {
                                    className: 'control',
                                    orderable: false,
                                    targets: 0
                                },
                                {
                                    orderable: false,
                                    targets: 9
                                }],
                            language: {
                                emptyTable: "No data available"
                            },
                            responsive: {
                                details: {
                                    type: 'column',
                                    target: 0
                                }
                            },
                        });
                    }
                    else {
                        swal('Failed', d.Status, 'error');
                    }
                })
        });
    }

    onEditClick(Insgroup_Id: any) {
        this.router.navigate(['edit', Insgroup_Id], { relativeTo: this.activatedRoute });
    }

    onViewClick(Insgroup_Id: any) {
        this.router.navigate(['detail', Insgroup_Id], { relativeTo: this.activatedRoute });
    }

    getFormattedAddress(StreetAddress: string = "", Zip: string = "", City: string = "", State: string = "") {
        let pipedCity = this.titleCase.transform(City);
        let maskedZip = (Common.isNullOrEmpty(Zip) ? '' : (Zip.length == 9 ? Zip.substring(0, 5) + '-' + Zip.substring(5, 9) : Zip));
        let pipedState = this.upperCase.transform(State);
        return `${StreetAddress} ${pipedCity}, ${pipedState} ${maskedZip}`;
    }
}
