import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatTooltipModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatTooltipModule,
        MatCardModule,
        MatCheckboxModule,
        MatDialogModule,
        MatSnackBarModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule
    ],
    exports: [
        MatButtonModule,
        MatTooltipModule,
        MatCardModule,
        MatCheckboxModule,
        MatDialogModule,
        MatSnackBarModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule
    ]
})
export class MaterialModule { }
