import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent, NavigationEnd } from '@angular/router';
import { DatePipe, DecimalPipe, formatDate } from '@angular/common'
import { ToastrService } from 'ngx-toastr';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';

import { APIService } from '../components/services/api.service';
import { GvarsService } from '../services/G_vars/gvars.service';
import { DashboardRefreshService } from '../services/data/dashboard.service';
import { ClaimService } from '../services/claim/claim.service';
@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  data: any;
  cpaColumns: string[];
  //#region Chart 1
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartLabels: string[] = [];
  public barChartData: ChartDataSets[] = [{ data: [], label: 'Insurance' }, { data: [], label: 'Patient' }];
  //#endregion
  //#region Chart 2
  public barChartOptions2: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartType2: ChartType = 'bar';
  public barChartLegend2 = true;
  public barChartLabels2: string[] = [];
  public barChartData2: ChartDataSets[] = [];
  //#endregion
  //#region Chart 3
  public lineChartData: any[] = [];

  public lineChartLegend: boolean = true;

  public lineChartLabels: string[] = [];

  public lineChartType: string = 'line';

  public lineChartOptions: any = {
    responsive: true
  };

  public lineChartColors: any[] = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgb(66, 132, 244,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgb(244, 67, 54)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }];
  //#endregion
  //#endregion
  constructor(private route: ActivatedRoute,
    private router: Router,
    private toastService: ToastrService,
    private API: APIService,
    private _decimalPipe: DecimalPipe,
    private gv: GvarsService,
    private dashboardRefresh: DashboardRefreshService,
    private claimservice: ClaimService) {
    this.claimservice.GetUsersClaimNotifications(this.gv.currentUser.selectedPractice.PracticeCode, false);
    this.claimservice.GetUsersAccountNotifications(this.gv.currentUser.selectedPractice.PracticeCode, false);
    this.data = [];
  }

  ngOnInit() {

      //  //by HAMZA to get external practices..............
     //Dynamic external practices checking commented for now.
      //     this.API.getDataWithoutSpinner(`/Dashboard/GetExternalPractices`).subscribe(data => {
      //       this.gv.external_practices = data.Response;
      //     })


    this.getDashboardData();
    this.dashboardRefresh.refresh.subscribe((r) => {
      this.getDashboardData();
    })






  }

  getDashboardData() {

    this.API.getData(`/Dashboard/GetDashboardData?practiceCode=${this.gv.currentUser.selectedPractice.PracticeCode}`)
      .subscribe(res => {
        if (res.Status === 'success') {

          this.updateChart(res.Response);
          this.data = res.Response;

          
    //About notifications of claim and account level assignments
    this.claimservice.GetUsersClaimNotifications(this.gv.currentUser.selectedPractice.PracticeCode, false);
    this.claimservice.GetUsersAccountNotifications(this.gv.currentUser.selectedPractice.PracticeCode, false);
       
        }
        else {
          this.toastService.error(res.Response, 'Error');
        }
      });
  }

  updateChart(data) {
    // first chart
    const { agingDashboard, recentAgingSummary, recentChargesPayment } = data;
    if (agingDashboard) {
      this.barChartLabels = agingDashboard.map(d => d.AGINGSLOT);
      this.barChartData = [{ data: agingDashboard.map(d => d.INSURANCE), label: 'Insurance' }, { data: agingDashboard.map(d => d.PATIENT), label: 'Patient' }];
    }
    // second chart
    if (recentAgingSummary) {
      console.log(recentAgingSummary)
      this.barChartLabels2 = recentAgingSummary.map(r => r.Insurance);
      var d = [
        { data: recentAgingSummary.map(c => c.C_0_30__Days_Balance_by_Claim_Date), label: '0-30' },
        { data: recentAgingSummary.map(c => c.C_31_60__Days_Balance_by_Claim_Date), label: '31-60' },
        { data: recentAgingSummary.map(c => c.C_61_90__Days_Balance_by_Claim_Date), label: '61-90' },
        { data: recentAgingSummary.map(c => c.C_91_120__Days_Balance_by_Claim_Date), label: '91-120' },
        { data: recentAgingSummary.map(c => c.C_121_150__Days_Balance_by_Claim_Date), label: '121-150' },
        { data: recentAgingSummary.map(c => c.C_151_180__Days_Balance_by_Claim_Date), label: '151-180' },
        { data: recentAgingSummary.map(c => c.C___180__Days_Balance_by_Claim_Date), label: '180 Plus' },
        { data: recentAgingSummary.map(c => c.Total_Balance), label: 'Total' },
      ]
      this.barChartData2 = d;
    }
    // third chart
    if (recentChargesPayment && recentChargesPayment.length > 0) {
      console.log(recentChargesPayment)
      this.cpaColumns = Object.keys(recentChargesPayment[0]);
      this.lineChartLabels = this.cpaColumns.slice(1);
      if (recentChargesPayment.length === 1) {
        this.lineChartData = [
          { data: Object.values(recentChargesPayment[0]).slice(1), label: Object.values(recentChargesPayment[0])[0] }
        ];
      }
      if (recentChargesPayment.length > 1) {
        this.lineChartData = [
          { data: Object.values(recentChargesPayment[0]).slice(1), label: Object.values(recentChargesPayment[0])[0] },
          { data: Object.values(recentChargesPayment[1]).slice(1), label: Object.values(recentChargesPayment[1])[0] },
          { data: Object.values(recentChargesPayment[2]).slice(1), label: Object.values(recentChargesPayment[2])[0] }
        ];
      }
    }
  }

  getObjectValues(obj) {
    var values = Object.values(obj);
    return values.map((v, i) => i === 0 ? v : '$' + this._decimalPipe.transform((v || 0), '2.1-2'));
  }

  onClickAgingAnalysisRow() {
    this.router.navigate(['ReportSetup/AgingSummaryPat'], { queryParams: { PracticeCode: this.gv.currentUser.selectedPractice.PracticeCode } })
  }

  onClickCPAsRow() {
    let fromDate = formatDate(new Date(
      new Date().getFullYear(),
      new Date().getMonth() - 5,
      new Date().getDate()
    ), 'MM/dd/yyyy', 'en');
    let toDate = formatDate(new Date(), 'MM/dd/yyyy', 'en');
    this.router.navigate(['ReportSetup/payment-detail'], { queryParams: { PracticeCode: this.gv.currentUser.selectedPractice.PracticeCode, DateFrom: fromDate, DateTo: toDate } })
  }

  onClickAgingByInsRow() {
    this.router.navigate(['ReportSetup/AgingSummary'], { queryParams: { PracticeCode: this.gv.currentUser.selectedPractice.PracticeCode } })
  }
}
