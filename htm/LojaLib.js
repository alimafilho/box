// Modelo 1  //

//Guarda em variável a página atual
var sPag=document.location.href.toUpperCase();
var sPagAtual=document.location.href.toUpperCase();

// Menu do topo
function AtivaLinkMenu1(){ 
  var sActive="";
  if(sPag.indexOf('CADASTRO.ASP')>=0)sActive="LinkCadastro";
  else if(sPag.indexOf('NEWSLETTER.ASP')>=0)sActive="LinkNewsletter";
  else if(sPag.indexOf('TRACK.ASP')>=0)sActive="LinkTrack";
  else if(sPag.indexOf('INDIQUE.ASP')>=0)sActive="LinkIndique";
  else if(sPag.indexOf('FALECONOSCO.ASP')>=0)sActive="LinkContato";
  if(sActive!="")document.getElementById(sActive).className="FundoMenu1_On";
}

//Filtros
function AjustaFiltros(){ 
  var bTemPathQts=false;
  var oUlPathCatQt=document.getElementById("idUlPathCatQtFC");
  if(oUlPathCatQt){bTemPathQts=true;}else{document.getElementById('idListaProdCategoriasFC').style.display='none';}
  var oUlAdic1Qt=document.getElementById("idUlAdic1QtFC");
  if(oUlAdic1Qt){bTemPathQts=true;}else{document.getElementById('idListaProdAdicional1FC').style.display='none';}
  var oUlAdic2Qt=document.getElementById("idUlAdic2QtFC");
  if(oUlAdic2Qt){bTemPathQts=true;}else{document.getElementById('idListaProdAdicional2FC').style.display='none';}
  var oUlAdic3Qt=document.getElementById("idUlAdic3QtFC");
  if(oUlAdic3Qt){bTemPathQts=true;}else{document.getElementById('idListaProdAdicional3FC').style.display='none';}
  //Caso não tenha produtos em categorias/adicionais encontrados, remove div
  if(!bTemPathQts)document.getElementById("idDivPath").style.display='none';
  //Caso não tenha filtros de busca, remove div com filtros
  var oUlPathSearch=document.getElementById("idUlPathSearchFC");
  if(oUlPathSearch==null)document.getElementById("idDivSearch").style.display='none';
}

function OnMouseOutMenu1(ItemMenu){
  if(ItemMenu.className=='FundoMenu1_Hover')ItemMenu.className="FundoMenu1_Off";
}
function OnMouseOverMenu1(ItemMenu){
  if(ItemMenu.className=='FundoMenu1_Off')ItemMenu.className="FundoMenu1_Hover";
}

function AtivaLinkMenu2(){ 
  var sActive="";
  if(sPag.indexOf('HOME.ASP')>=0)sActive="LinkHome";
  else if(sPag.indexOf('CATEGORIAS.ASP')>=0)sActive="LinkCat";
  else if(sPag.indexOf('PROMOCAO')>=0)sActive="LinkProm";
  else if(sPag.indexOf('LANCAMENTO')>=0)sActive="LinkLanc";
  else if(sPag.indexOf('ADDPRODUTO.ASP')>=0 || sPag.indexOf('ADDMULT.ASP')>=0)sActive="LinkPedido";
  else if(sPag.indexOf('AJUDA.ASP')>=0)sActive="LinkAjuda";
  if(sActive!="")document.getElementById(sActive).className="FundoMenu2_On";
}

function OnMouseOutMenu2(ItemMenu){
  if(ItemMenu.className=='FundoMenu2_Hover')ItemMenu.className="FundoMenu2_Off";
}
function OnMouseOverMenu2(ItemMenu){
  if(ItemMenu.className=='FundoMenu2_Off')ItemMenu.className="FundoMenu2_Hover";
}

//Menu Rodapé
function AtivaLinkRodape(){ 
  var sActive="";
  if(sPag.indexOf('HOME.ASP')>=0)sActive="LinkRodHome";
  else if(sPag.indexOf('CATEGORIAS.ASP')>=0)sActive="LinkRodCat";
  else if(sPag.indexOf('PROMOCAO')>=0)sActive="LinkRodProm";
  else if(sPag.indexOf('LANCAMENTO')>=0)sActive="LinkRodLanc";
  else if(sPag.indexOf('ADDPRODUTO.ASP')>=0 || sPag.indexOf('ADDMULT.ASP')>=0)sActive="LinkRodPedido";
  else if(sPag.indexOf('AJUDA.ASP')>=0 && sPag.indexOf("ENTREGA")>=0)sActive="LinkRodEntrega";
  else if(sPag.indexOf('AJUDA.ASP')>=0 && sPag.indexOf("SEGURAN")>=0)sActive="LinkRodSeg";
  else if(sPag.indexOf('BUSCAAVANCADA.ASP')>=0)sActive="LinkRodBusca";
  else if(sPag.indexOf('/NEWS')>=0)sActive="LinkRodNoticias";
  else if(sPag.indexOf('AJUDA.ASP')>=0)sActive="LinkRodAjuda";
  if(sActive!="")document.getElementById(sActive).className="RodapeMenuAtual";
}

//Função que abre janela de chat
function MostraChatP(){
 popup=window.open('ChatLogin.asp?IDLoja='+IDLoja,'Chat','top=20,left=20,height=280,width=390,scrollbars=no,resizable=yes');
 popup.focus();return void(0);}

//Função que valida a busca  
function VerTexto(oNome){
 if (oNome.Texto.value=='' || oNome.Texto.value.length<2){
   alert('Busca inválida.');
   oNome.Texto.focus();
   return false;}
 else{return true;}
}

//Função que faz pré-load das imagens
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

//Função que mostra o máximo de parcela na home e na listagem principal de produtos
function MostraMaxParcela(PrecoProd,MaxParcelas){
  var ComSem;
  if(PrecoProd==0||MaxParcelas==1||Juros.length==0)return;
  if(MaxParcelas==0||MaxParcelas>Juros.length)MaxParcelas=Juros.length;
  if(Juros[MaxParcelas-1]>0)ComSem=""; else ComSem="<font color=#990000> sem juros</font>";
  document.write(" ou <b>"+MaxParcelas+"x</b>"+ComSem+" de <b>"+FormatPrecoReais(CalculaParcelaJurosCompostos(PrecoProd,MaxParcelas))+"</b>");
}

function MostraParcelas(PrecoProd,MaxParcelas){
  var ComSem,EstiloLinha;
  if(PrecoProd==0||MaxParcelas==1||Juros.length==0)return;
  if(MaxParcelas==0||MaxParcelas>Juros.length)MaxParcelas=Juros.length;
  document.write("<br><table align=center cellpadding=3 cellspacing=1 bgcolor=#CECECE width=270><tr bgcolor=#DCDCDC><td colspan=3 height=22 class=TitTabParc align=center><b>Opções de parcelamento</td></tr><tr bgcolor=#FFFFFF><td class=TitTabParc>Parcelas</td><td align=right class=TitTabParc>Valor</td><td align=right class=TitTabParc>Total</td></tr>");
  for(var i=0;i<MaxParcelas;i++){
    if(Juros[i]>0)ComSem="com juros"; else ComSem="<font color=#990000>sem&nbsp;juros</font>";
    if((i%2)==0)EstiloLinha='EstParcPar'; else EstiloLinha='EstParcImpar';
    document.write("<tr class="+EstiloLinha+"><td class="+EstiloLinha+">"+(i+1)+"x "+ComSem+"</td><td class="+EstiloLinha+" align=right>"+FormatPrecoReais(CalculaParcelaJurosCompostos(PrecoProd,i+1))+"</td><td class="+EstiloLinha+" align=right>"+FormatPrecoReais(CalculaParcelaJurosCompostos(PrecoProd,i+1)*(i+1))+"</td></tr>");
  }
  document.write("</table><br>");
}

//Função para mostrar valor economizado em produtos em promoção
//function MostraEconomia(PrecoProd,PrecoOri){
//if(PrecoProd!=PrecoOri)document.write("<br><font color=#6f9e45>Economize <b>"+FormatPrice(PrecoOri-PrecoProd,'R$')+"</b> ("+FormatNum(((PrecoOri-PrecoProd)/PrecoOri)*100)+"%)</font>");
//}

function FormatNum(num){
num=num.toString().replace(/\$|\,/g,'');
if(isNaN(num))num="0";
sign=(num==(num=Math.abs(num)));
num=Math.floor(num*100+0.50000000001);
num=Math.floor(num/100).toString();
for(var i=0;i<Math.floor((num.length-(1+i))/3);i++)num=num.substring(0,num.length-(4*i+3))+'.'+num.substring(num.length-(4*i+3));
return ((sign)?'':'-')+num;
}


//Personalização dos passos da compra com imagens
function ExibePassosCompra(){
  var TemPassosCompra=document.getElementById("PassosCompra"); 
  if(TemPassosCompra){
  var passo1=document.getElementById("idPasso1FC"); 
  var passo2=document.getElementById("idPasso2FC"); 
  var passo3=document.getElementById("idPasso3FC"); 
  var passo4=document.getElementById("idPasso4FC"); 
  var passo5=document.getElementById("idPasso5FC"); 
  if(passo1.className=='EstPassoCompraAtual')
  passo1.innerHTML="<img src='"+ sCaminhoImages +"Passo1Atual.png' alt='Cesta' width='120' height='49' />";
  else if(passo1.className=='EstPassoCompraPre')
  passo1.innerHTML="<img src='"+ sCaminhoImages +"Passo1Pre.png' alt='Cesta' width='120' height='49' />";

  if(passo2.className=='EstPassoCompraAtual')
  passo2.innerHTML="<img src='"+ sCaminhoImages +"Passo2Atual.png' alt='Frete' width='120' height='49' />";
  else if(passo2.className=='EstPassoCompraPre')
  passo2.innerHTML="<img src='"+ sCaminhoImages +"Passo2Pre.png' alt='Frete' width='120' height='49' />";
  else if(passo2.className=='EstPassoCompraPos')
  passo2.innerHTML="<img src='"+ sCaminhoImages +"Passo2Pos.png' alt='Frete' width='120' height='49' />";

  if(passo3.className=='EstPassoCompraAtual')
  passo3.innerHTML="<img src='"+ sCaminhoImages +"Passo3Atual.png' alt='Pagamento' width='120' height='49' />";
  else if(passo3.className=='EstPassoCompraPre')
  passo3.innerHTML="<img src='"+ sCaminhoImages +"Passo3Pre.png' alt='Pagamento' width='120' height='49' />";
  else if(passo3.className=='EstPassoCompraPos')
  passo3.innerHTML="<img src='"+ sCaminhoImages +"Passo3Pos.png' alt='Pagamento' width='120' height='49' />";

  if(passo4.className=='EstPassoCompraAtual')
  passo4.innerHTML="<img src='"+ sCaminhoImages +"Passo4Atual.png' alt='Cadastro' width='120' height='49' />";
  else if(passo4.className=='EstPassoCompraPre')
  passo4.innerHTML="<img src='"+ sCaminhoImages +"Passo4Pre.png' alt='Cadastro' width='120' height='49' />";
  else if(passo4.className=='EstPassoCompraPos')
  passo4.innerHTML="<img src='"+ sCaminhoImages +"Passo4Pos.png' alt='Cadastro' width='120' height='49' />";

  if(passo5.className=='EstPassoCompraAtual')
  passo5.innerHTML="<img src='"+ sCaminhoImages +"Passo5Atual.png' alt='Confirmação' width='46' height='49' />";
  else if(passo5.className=='EstPassoCompraPos')
  passo5.innerHTML="<img src='"+ sCaminhoImages +"Passo5Pos.png' alt='Confirmação' width='46' height='49' />";
  }
}

//Carrinho de compras | shopping cart
//------function MostraDadosCestaX(){
//------  var PosCarrinho=document.getElementById("idMostraDadosCestaX");
//------  PosCarrinho.innerHTML='<table width="290" border="0"><tr><td class="linkCart" align="left"><a href="AddProduto.asp?IDLoja='+ IDLoja +'"><b>Carrinho de compras: <span class="EstPrecoProdCesta">'+ QtdCesta +'</span> item(s)</b></a></td></tr><tr><td>&nbsp;</td></tr><tr><td class="linkCart" align="left"><a href="AddProduto.asp?IDLoja='+ IDLoja +'"><b>Sub-total: <span class="EstPrecoProdCesta">'+FormatPrecoReais(ValorCesta)+'</b></a></span></td></tr></table>';
//------}

//Personalização dos links Vakinha
function ExibeBotoesVakinha(){
  var oLinks=document.getElementsByTagName("a");
  if(oLinks){
    for(var i=0;i<oLinks.length;i++){
      if(oLinks[i].className=="EstVakinha")
        oLinks[i].innerHTML='<img src="'+ sCaminhoImages +'FazerVakinha.png" alt="Fazer Vakinha" width="152" vspace="10" height="36" border="0" />';
    }
  }
}

// Função para verificar se existe o cookie "h1"
function ReadCookie(cookieName) {
  var theCookie=""+document.cookie;
  var ind=theCookie.indexOf(cookieName);
  if (ind==-1 || cookieName=="") return ""; 
  var ind1=theCookie.indexOf(';',ind);
  if (ind1==-1) ind1=theCookie.length; 
  return unescape(theCookie.substring(ind+cookieName.length+1,ind1));
}

//Exibe botões de continuar comprando, recalcular e comprar
function ExibeBotoesCesta(){
  try{
    var table=document.getElementById('TabItens');
    var row=table.insertRow(0);
    var cell=row.insertCell(-1);
    cell.colSpan=5;
    cell.innerHTML="";
    var row=table.insertRow(-1);
    var cell=row.insertCell(-1);
    cell.colSpan=5;
    cell.innerHTML='<table width="100%"><tr><td width="33%"><a href="home.asp?IDLoja='+ IDLoja +'"><img src="'+ sCaminhoImages +'BotContComprando.png" alt="Continuar comprando" width="138" height="43" border="0" /></a></td><td width="33%" align="center"><input name="Recalcular" value="Recalcular" type="image" title="Recalcular" border="0" onclick="document.Lista.submit()" src="'+ sCaminhoImages +'BotRecalcular.png" /></td><td width="33%" align="right"><input name="Comprar" value="Comprar" type="image" title="Comprar" border="0" src="'+ sCaminhoImages +'BotComprar.png" onclick="ComprarImg()" /></td></tr></table>';
  }catch(e){}
  try{document.getElementById("TabBotoes").style.display='none';}catch(e){}
}
function ComprarImg(){
  document.getElementsByName("Comprar")[0].click();
}

//Exibe botão confirma pedido
function ConfirmaPedido(botao){
  MostraAviso=false;
  botao.style.backgroundColor="gray";
  botao.style.color="#fcfcfc";
  botao.value='Confirmando...';
  botao.setAttribute('disabled','true');
  Valida(document.Form1);
}
function ExibeBotaoConfirmaPedido(){
  var ConteudoTopoPagConfirmar=document.getElementById("idTopoConfirmarFC"); 
  if(ConteudoTopoPagConfirmar){
    ConteudoTopoPagConfirmar.innerHTML="<br>&nbsp;<br><br><center><input type=button name=btConfirmarPedido class='BotConfPed' value='Confirmar pedido  >>' onclick='ConfirmaPedido(this);'></center><br>&nbsp;";
  }
}

//Histórico de navegação
function ConectXMLPageHistory(){
  // para conectar
  if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
    }
  else
    {// code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
  xmlhttp.open("GET","XMLPageHistory.asp?IDLoja="+IDLojaNum,false);
  xmlhttp.send();
  xmlDoc=xmlhttp.responseXML; 
  return(xmlDoc.getElementsByTagName("item"));
}

function ExibeHistoricoNaveg(x){
  try{MostrarBarra=(x[0].getElementsByTagName("title")[0].childNodes[0].nodeValue);}
  catch(e){MostrarBarra="";}
  
  if(MostrarBarra!=""){
  document.write("<table width=100% cellspacing=0 cellpadding=0 class=HistNav><tr height=20><td nowrap>&nbsp; &nbsp; <b>Histórico de navegação:</b></td></tr></table><table width=100% align=center border=0 bgcolor=#ffffff><tr>");
  }
  
  for (i=0;i<x.length;i++){
    titleProd=x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
    linkProd=x[i].getElementsByTagName("link")[0].childNodes[0].nodeValue;
    try{imageProd=x[i].getElementsByTagName("image")[0].childNodes[0].nodeValue;}
    catch(e){imageProd="images/shim.gif";}
    try{priceProd=(x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue);}
    catch(e){priceProd="";}
    titleProd=titleProd.substring(0,20);
  txt="<td width=190 align=center><table width=180 height=150 style='border-style:solid;border-width:1px;border-color:#a0a0a0'><tr><td align=center height=25 style='background:#EFEFEF;font-size:8pt;color:#333333;font-family:tahoma,verdana;font-weight:bold'><a href='"+ linkProd +"'>"+  titleProd +"</a></td></tr><tr><td height=120 align='center'><a href='"+ linkProd +"'><img src='" + imageProd + "' border=0 width=100 height=100 title='"+ titleProd +"'></a></td></tr><tr><td height=30 align='center' style='color:#C00;font-size:10pt;font-family:arial;font-weight:bold'>"+ priceProd +"</td></tr></table><br></td>";
  document.write(txt);
  }
  if(MostrarBarra!=""){
  document.write("</td></tr></table>");
  }
}

//Zip Code
function GetShippingValues(IDZip,IDProd){
  sCEP=document.getElementById("idZip"+ IDZip).value;
  if(sCEP==""){alert("Informe o CEP");return;}
  else if(IDProd)var sParamProd="&idproduto="+ IDProd;
  else var sParamProd="";
  AjaxExecFC("/XMLShippingCEP.asp","IDLoja="+ IDLojaNum +"&cep="+ sCEP + sParamProd,false,processXMLCEP,IDZip);
}

function processXMLCEP(obj,IDProd){
  var iErr=ReadXMLNode(obj,"err");if(iErr==null)return;
  if(iErr!="0"){
    alert(ReadXMLNode(obj,"msg"));
    return;
  }
  oShippingValues=document.getElementById("idShippingValues"+IDProd);
  oShippingValues.innerHTML="";
  var UseCart=ReadXMLNode(obj,"UseCart");
  if(UseCart=="False"){
    var ProdName=ReadXMLNode(obj,"ProdName");
    var ProdRef=ReadXMLNode(obj,"ProdRef");
    
  }
  var iOpt=ReadXMLNode(obj,"OptQt");
    var OptName=ReadXMLNode(obj,"Opt1Name");
    var OptValue=ReadXMLNode(obj,"Opt1Value");
    var OptImage=ReadXMLNode(obj,"Opt1Image");
    var OptObs=ReadXMLNode(obj,"Opt1Obs");
    if(OptImage==null)oShippingValues.innerHTML+="<table width='100%'><tr><td class='ZipName'>"+ OptName +"</td><td class='ZipObsVal'>"+ OptObs +"</td><td class='ZipValue'>"+ OptValue +"</td></tr></table>";
    else oShippingValues.innerHTML+="<table width='100%'><tr><td width='60'><img src='"+ OptImage +"'></td><td class='ZipObsVal'>"+ OptObs +"</td><td class='ZipValue'>"+ OptValue +"</td></tr></table>";
  oShippingValues.style.display="block";
}

//Função para mostrar valor economizado em produtos em promoção
function MostraEconomia(PrecoProd,PrecoOri){
if(PrecoProd!=PrecoOri)document.write("<br><font color=#6f9e45>Economize <b>"+FormatPrice(PrecoOri-PrecoProd,'R$')+"</b> ("+FormatNum(((PrecoOri-PrecoProd)/PrecoOri)*100)+"%)</font>");
}

//Show Shoppingcart
function MostraDadosCesta(){
  if (window.XMLHttpRequest){xmlhttp=new XMLHttpRequest();}
  else{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
  xmlhttp.open("GET","XMLCart.asp?IDLoja="+IDLojaNum+"",false);
  xmlhttp.send();
  xmlDoc=xmlhttp.responseXML; 
  var x=xmlDoc.getElementsByTagName("item");
  var z=xmlDoc.getElementsByTagName("cart");
  try{currencyProdCart=(z[0].getElementsByTagName("currency")[0].childNodes[0].nodeValue);}catch(e){currencyProdCart="R$"}
  try{TotalQtyProdCart=(z[0].getElementsByTagName("TotalQty")[0].childNodes[0].nodeValue);}catch(e){TotalQtyProdCart="0"}
  try{subtotalProdCart=(z[0].getElementsByTagName("subtotal")[0].childNodes[0].nodeValue);}catch(e){subtotalProdCart="0,00"}
  var iItensCesta=TotalQtyProdCart;
  if(iItensCesta==0){sItem="vazio"} 
  else if(iItensCesta==1){sItem="1 item"}
  else {sItem=iItensCesta+" itens"}
  try{document.getElementById("QtdItensCesta").innerHTML=sItem;}catch(e){}
  try{document.getElementById("ValorItensCesta").innerHTML=currencyProdCart + " " + subtotalProdCart;}catch(e){}
}
function FuncCartOnPage(IDLoja,iErr,sMsg,sCartText,sCheckoutText,este){
  if(iErr==0)MostraDadosCesta();
}

//Scroll to Top
var ns = (navigator.appName.indexOf("Netscape") != -1);
var d = document;
function JSFX_FloatDiv(id, sx, sy)
{
	var el=d.getElementById?d.getElementById(id):d.all?d.all[id]:d.layers[id];
	var px = document.layers ? "" : "px";
	window[id + "_obj"] = el;
	if(d.layers)el.style=el;
	el.cx = el.sx = sx;el.cy = el.sy = sy;
	el.sP=function(x,y){this.style.right=x+px;this.style.top=y+px;};

	el.floatIt=function()
	{
		var pX, pY;
		pX = (this.sx >= 0) ? 0 : ns ? innerWidth : 
		document.documentElement && document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body.clientWidth;
		pY = ns ? pageYOffset : document.documentElement && document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop;
		if(this.sy<0) 
		pY += ns ? innerHeight : document.documentElement && document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.clientHeight;
		this.cx += (pX + this.sx - this.cx)/1;this.cy += (pY + this.sy - this.cy)/1;
		this.sP(this.cx, this.cy);
		setTimeout(this.id + "_obj.floatIt()", 0);
	}
	return el;
}

/** **/


//ShowCartOnPage
var oDivShowCartOnPage=null;
var iLastCartOnPage=0;

function ShowCartOnPage(IDLoja,iErr,sMsg,sCartText,sCheckoutText,este){
  var oPos=getPos(este);
  if(oDivShowCartOnPage==null){
    var oNewElement=document.createElement("div");
    oNewElement.setAttribute("id","DivShowCartOnPage"); 
    oDivShowCartOnPage=este.parentNode.insertBefore(oNewElement,este);
  }
  oDivShowCartOnPage.style.backgroundColor="#dedede";
  oDivShowCartOnPage.style.borderColor="#ffffff";
  oDivShowCartOnPage.style.color="#555555";
  oDivShowCartOnPage.style.border="1px solid #b9b9b9";
  oDivShowCartOnPage.style.marginTop="-130px";
  oDivShowCartOnPage.style.marginLeft="-70px";
  oDivShowCartOnPage.style.position="absolute";
  oDivShowCartOnPage.style.zIndex="1";
  oDivShowCartOnPage.style.visibility="visible";
  if(iErr==0)sBackColor="67a54b"; else sBackColor="949494"
  var sHTML="<table width=270 height=100 cellpadding=3 cellspacing=3>";
     sHTML+="<tr><td colspan=5 align=center class=FC-ShowCartOnPageLinkCart style='background-color:#"+ sBackColor +";cursor:pointer;border-radius: 10px; -moz-border-radius: 10px; -webkit-border-radius: 10px;'><a href='addproduto.asp?idloja="+ IDLoja +"'>"+ sMsg +"</a></td></tr>";
     if(iErr==0){
       sHTML+="<tr height=50>";
       sHTML+="<td width=3>&nbsp;</td>";
       sHTML+="<td align=center class=FC-ShowCartOffPageLink><a href='addproduto.asp?idloja="+ IDLoja +"'>"+ sCartText +"</a></td>";
       sHTML+="<td width=3>&nbsp;</td>";
       sHTML+="<td align=center class=FC-ShowCartOnPageLink><a href='addproduto.asp?idloja="+ IDLoja +"'>"+ sCheckoutText +"</a></td>";
       sHTML+="<td align=right><img src='images/cancel_off.png' hspace=5 style='cursor:pointer' onclick=oDivShowCartOnPage.style.visibility='hidden'></td>";
       sHTML+="</tr>";
     }
     else{
       sHTML+="<tr height=20>";
       sHTML+="<td colspan=5 align=center><img src='images/cancel_off.png' hspace=5 style='cursor:pointer' onclick=oDivShowCartOnPage.style.visibility='hidden'></td>";
       sHTML+="</tr>";
     }
     sHTML+="</table>";
  oDivShowCartOnPage.style.top=oPos.y+"px";
  oDivShowCartOnPage.style.left=oPos.x+"px";
  oDivShowCartOnPage.innerHTML=sHTML;
  iLastCartOnPage++;
  setTimeout("if(iLastCartOnPage=="+ iLastCartOnPage +")oDivShowCartOnPage.style.visibility='hidden';",4000);
}


/****** 123 *****/
/*

function ConfirmaPedido(botao){
  MostraAviso=false;
  botao.style.backgroundImage="url(/images/shim.gif)"
  botao.style.backgroundColor="#e4e4e3";
  botao.style.borderColor="#888888";
  botao.style.color="#555555";
  botao.value='Confirmando...';
  botao.setAttribute('disabled','true');
  Valida(document.Form1);
}

function ExibeBotaoConfirmaPedido(){
  var ConteudoTopoPagConfirmar=document.getElementById("idTopoConfirmarFC"); 
  if(ConteudoTopoPagConfirmar){
    ConteudoTopoPagConfirmar.innerHTML="<br>&nbsp;<br><br><center><input type=button name=btConfirmarPedido class='BotConfPed' value='Confirmar pedido  >>' onclick='ConfirmaPedido(this);'></center>";
  }
}

*/