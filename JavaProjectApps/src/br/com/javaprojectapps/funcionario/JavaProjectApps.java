/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.javaprojectapps.funcionario;

/**
 *
 * @author Antonio
 */
public class JavaProjectApps {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
Funcionario f1 = new Funcionario();
		//Funcionario f2 = new Funcionario();
		
		/***************************/
		Data data = new Data();
		f1.dataDeEntrada = data;
		
		data.dia = 8;
		data.mes = 1;
		data.ano = 2013;
		/***************************/
		
		
		f1.nome = "joão";
		f1.salario = 900;
		f1.departamento = "Técnico";
		f1.rg = "11.111.111-1";
		f1.recebeAumento(100);
		
		//imprime as informações do funcionário
		f1.mosta();
                
		
		/*System.out.println("nome:"+f1.nome
				+"\nSalario "+f1.salario
				+"\nGanho Anual "+f1.calculaGanhoAnual()				
				);
		*/
	}

}
