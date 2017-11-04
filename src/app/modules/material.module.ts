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
    MatListModule,
    MatInputModule
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
        MatListModule,
        MatInputModule
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
        MatListModule,
        MatInputModule
    ]
})
export class MaterialModule { }
