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
    MatGridListModule,
    MatTabsModule
} from '@angular/material';

@NgModule({
    imports: [
        MatTabsModule,
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
        MatTabsModule,
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
