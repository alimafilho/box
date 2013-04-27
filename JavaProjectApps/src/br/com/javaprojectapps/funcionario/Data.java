/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.javaprojectapps.funcionario;

/**
 *
 * @author Antonio
 */
public class Data {
    
	public int dia;
	public int mes;
	public int ano;
	
	public String formataData(){
		String novaData = this.dia+"/"+this.mes+"/"+this.ano;		
		return novaData;
	}

}
