import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})

export class AppComponent {
    titulo: string = 'Contador App';
    numero: number = 10;
    base : number = 5;
    nombre: string = 'Facu';
    title: string = ''

    acumulador(valor:number){
        this.numero += valor;
    }
}