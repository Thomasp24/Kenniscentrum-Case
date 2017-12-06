import { NgModule } from '@angular/core';
import { MatCardModule, MatIconModule, MatToolbarModule, MatSidenavModule, MatInputModule, MatButtonModule, MatTableModule, MatDialogModule, MatListModule, MatStepperModule, MatCheckboxModule, MatChipsModule, MatMenuModule, MatSelectModule, MatDatepickerModule, MatProgressBarModule, MatTooltipModule, MatSnackBarModule, MatAutocompleteModule, MatRadioModule } from '@angular/material';

const MaterialModules = [
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatTooltipModule,
    MatMenuModule,
    MatProgressBarModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatTableModule,
    MatToolbarModule,
    MatStepperModule,
];

@NgModule({
    imports: MaterialModules,
    exports: MaterialModules,
    declarations: [],
    providers: [],
})
export class MaterialModule { }