import { Component } from '@angular/core';
@Component({
  selector: 'app-lancamentos-cadastro',
  templateUrl: './lancamentos-cadastro.component.html',
  styleUrls: ['./lancamentos-cadastro.component.css']
})
export class LancamentosCadastroComponent {
  tipos = [
    {label: 'Receita', value: 'RECEITA'},
    {label: 'Despesa', value: 'DESPESA'},
  ];

  pessoas = [
    {label: 'Marinelson', value: 1},
    {label: 'João Arnaldo', value: 2},
    {label: 'Sebastião Rodrigues', value: 3},
    {label: 'Belarmina Maria', value: 4},
    {label: 'Joana Cruz', value: 5},
  ];

  categorias = [
    {label: 'Alimentação', value: 1},
    {label: 'Transporte', value: 2},
    {label: 'Segurança', value: 3},
    {label: 'Saúde', value: 4},
    {label: 'Educação', value: 5},
  ];
}