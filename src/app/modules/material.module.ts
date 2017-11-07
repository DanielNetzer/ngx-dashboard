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
    MatInputModule,
    MatExpansionModule,
    MatGridListModule
} from '@angular/material';

@NgModule({
    imports: [
        MatGridListModule,
        MatExpansionModule,
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
        MatGridListModule,
        MatExpansionModule,
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
