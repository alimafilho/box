/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.javaprojectapps.funcionario;

/**
 *
 * @author Antonio
 */
public class Funcionario {
    
  public String nome;
	public String departamento;
	public double salario;
	public Data dataDeEntrada;
	public String rg;
	
	
	//aumenta o salário
	
	public void recebeAumento(double aumento){
		this.salario += aumento; 
	}
	
	public double calculaGanhoAnual(){
		
		double salarioAnual = this.salario * 12;
		
		return salarioAnual;
		
	}
	
	public void mosta(){
		System.out.println(
				"Funcionário"
				+"\nNome: "+this.nome
				+"\nDepartamento: "+this.departamento
				+"\nSalário: "+this.salario
				+"\nData de entrada: "+this.dataDeEntrada.formataData()				
				+"\nRG: "+this.rg
				+"\nGanho anual: "+ this.calculaGanhoAnual()
				);
		
	}


}
