import { NgModule } from "@angular/core";
import { NgModel } from "@angular/forms";
import { MatButtonModule, MatIconButton } from "@angular/material/button";
import {MatCardModule} from '@angular/material/card';
import  {MatTableModule} from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
    exports:[
        MatCardModule,
        MatTableModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        

    ]
})



export class MaterialModule{}