import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DatatableService {

    constructor() {

    }

    getDom() {
        return "<'row'<'col-sm-4'l><'col-sm-4 d-flex-justify-center'B><'col-sm-4'f>>" +
            "<'row'<'col-sm-12'tr>>" +
            "<'row'<'col-sm-5'i><'col-sm-7'p>>";
    }

    generateTitle(title: string[]) {
        if (title && title.length > 0)
            return title.join(' - ')
    }

    getExportButtons(title: string[]) {
        var generatedName = this.generateTitle(title);
        return [{
            extend: 'excel',
            className: "btn-sm",
            text: '<i class="fa fa-file-excel-o" aria-hidden="true"></i> Excel',
            title: generatedName
        },
        {
            extend: 'print',
            className: "btn-sm",
            text: '<i class="fa fa-print" aria-hidden="true"></i> Print',
            title: generatedName
        },
        // {
        //     extend: 'csv',
        //     text: '<i class="fa fa-file"> </i> CSV',
        //     className: 'btn-sm',
        //     title: generatedName
        // },
        {
            text: '<i class="fa fa-clipboard"> </i> Copy',
            extend: 'copy',
            className: 'btn-sm',
            title: generatedName
        }]
    };
}
