/*
*CartAjaxFC.js?1.0 
*FastCommerce 2014
*/

//alert("x")
var cartAjaxFC = function() {
  //variável privada
  var config = { 
         locationID: 'idCartTopBoxFC',
         contentID: 'idCartContentFC',
         className:'fc-cart-default',
         imgProd:false,
         itemAlign:'left',
         txtBotCart: 'Finalizar compra',
  };

  //Function le XML
  var readerXML = function(method, sURL, async){
    if (window.XMLHttpRequest){
      xmlhttp=new XMLHttpRequest(); // code for IE7+, Firefox, Chrome, Opera, Safari
    }
    else{// code for IE6, IE5
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open(method,sURL,async);
    xmlhttp.send();
    xmlCartFC=xmlhttp.responseXML; 

    return xmlCartFC;
  }

  //Function cria novo objeto com as novas configurações
  var mergeConfig = function(obj1, obj2){
    var result = {};
    for (name in obj1) 
      result[name] = obj1[name];        
    for (name in obj2) 
      result[name] = obj2[name];          
    return result;
  }

  //Function case
  var setOptHTML = function(otp, otpValue, optConfig){
    switch(otp)
    {
      case 'qtdItem':
        var sItem        
        otpValue > 1 ? sItem = 'itens' : sItem = 'item';
        return sItem
      break;
      default:
      return ""
    }
  }  

  //funcao privada
  var createCartAjaxFC = function(elemento, params){

    var newConfig = mergeConfig(config, params);

    //Obtem Objeto XMLPRODUTOS
    var nodesXMLCart = readerXML("GET", "XMLCart.asp?IDLoja="+FC$.IDLoja, false);

    var oCart=nodesXMLCart.getElementsByTagName("cart"), //XML Cart
        oItem=nodesXMLCart.getElementsByTagName("item"); //XML Item
        
        try{currencyProdCart=(oCart[0].getElementsByTagName("currency")[0].childNodes[0].nodeValue)}
          catch(e){currencyProdCart=""} //XML moeda         
        try{totalQtyProdCart=(oCart[0].getElementsByTagName("TotalQty")[0].childNodes[0].nodeValue)}
          catch(e){totalQtyProdCart="0"} //XML quantidade total
        try{subtotalProdCart=(oCart[0].getElementsByTagName("subtotal")[0].childNodes[0].nodeValue)}
          catch(e){subtotalProdCart="0"} //XML subtotal

    
    var QtdCesta=totalQtyProdCart;
    if(QtdCesta > 0)
    {
      //CRIA HTML HAEAD CART  
      var sCartHeader = "<ul class='cart-main-fc'><li>";
          var sItem; totalQtyProdCart > 1 ? sItem = 'itens' : sItem = 'item';
          //sCartHeader +=  "<div class='cart-header-fc cart-cursor'>Carrinho: <b>"+totalQtyProdCart+"</b> "+sItem+"  Subtotal: <b>"+currencyProdCart+"&nbsp"+subtotalProdCart+"</b></div>";
          sCartHeader +=  "<div class='cart-header-fc cart-cursor'>Carrinho: <b>("+totalQtyProdCart+")</b> Subtotal: <b>"+currencyProdCart+"&nbsp"+subtotalProdCart+"</b></div>";

      //CRIA HTML ITENS XMLPRODUTOS
      var sCartContent = "<ul class='cart-content-fc' id='"+newConfig.contentID+"'>";
      for (i=0;i<oItem.length;i++){ 

        var NomeProdCart=(oItem[i].getElementsByTagName("prod")[0].childNodes[0].nodeValue),
            IDProdCart=(oItem[i].getElementsByTagName("id")[0].childNodes[0].nodeValue),
            qtyProdCart=(oItem[i].getElementsByTagName("qty")[0].childNodes[0].nodeValue),
            priceProdCart=(oItem[i].getElementsByTagName("price")[0].childNodes[0].nodeValue),
            imageProdCart=(oItem[i].getElementsByTagName("image")[0].childNodes[0].nodeValue);
    
        sCartContent+= "<li class='cart-item-fc'><a class='cart-link-fc' href='/prod,IDLoja,"+FC$.IDLoja+",IDProduto,"+IDProdCart+"'>";
      
        //TEM IMG      
        //var iClass
        //newConfig.imgProd ? iClass=0 : iClass=1;
      
        //Tem imgProd
        if(newConfig.imgProd)
          {
            sCartContent+= "<div class='cart-img-fc col-2'><img src="+imageProdCart+" /></div>";
            var iClass=0;
          }else{
            var iClass=1;
          }
        sCartContent+=  "<div class='cart-nome-fc col-"+(7+iClass)+"'><span>"+ NomeProdCart + "&nbsp;<b>(" + qtyProdCart + ")</b></span></div>"; //NOME + QTDE
        sCartContent+=  "<div class='cart-price-fc col-"+(3+iClass)+"'><span>" + currencyProdCart + " " + priceProdCart + "</span></div>"; //PRECO
        sCartContent+="</a></li>";
      }
      sCartContent+="<li><a class='cart-bot-fc' href='/addproduto.asp?idloja="+FC$.IDLoja+"'>"+ newConfig.txtBotCart +"</a></li>";
      sCartContent+="</ul></ul>";
    }
    //Nao tem produtos na cesta
    else{
      var sCartHeader = "<ul class='cart-main-fc'><li><div class='cart-header-fc'><b>Cesta vazia</b></div></li></ul>";
      var sCartContent = "";
    }
    //inclui o HTML da cesta
    var getLocationID = document.getElementById(newConfig.locationID); //ADD CALSS NA DIV LOCATION
    getLocationID.classList.add(newConfig.className);
   
    getLocationID.innerHTML = sCartHeader+sCartContent; // innerHTML

    //ACAO MOUSEOUVER | MOUSEROUT
    getLocationID.onmouseover=function(){ 
      var contentID = document.getElementById(newConfig.contentID);
      contentID.style.display='block';       

      if(newConfig.itemAlign=='left')
      {
        //var mLef = this.offsetWidth-contentID.offsetWidth;        
        var borderLeftHeader = getComputedStyle(this, '').getPropertyValue('border-left-width');
        var borderRightHeader = getComputedStyle(this, '').getPropertyValue('border-right-width');        
        var borderLeftContent = getComputedStyle(contentID, '').getPropertyValue('border-left-width');
        var borderRightContent = getComputedStyle(contentID, '').getPropertyValue('border-right-width');

        var borderLeftHeader = parseInt(borderLeftHeader.replace('px', ''));
        var borderRightHeader = parseInt(borderRightHeader.replace('px', ''));        
        var borderLeftContent = parseInt(borderLeftContent.replace('px', ''));
        var borderRightContent = parseInt(borderRightContent.replace('px', ''));
             
        var mLef = (this.offsetWidth)-(contentID.offsetWidth+borderLeftContent);
        contentID.style.marginLeft= mLef +'px';  
      }    
    };
      
    getLocationID.onmouseout=function(){ 
      var contentID = document.getElementById(newConfig.contentID);
      contentID.style.display='none';     
    };
    
};
  return {
    //função pública com acesso privilegiado
    init:function(a, b){
        return createCartAjaxFC(a, b);
    }
  }
}();

//window.cartAjaxFC.init('div', { locationID: 'idCartTopBoxFC1'});

//getCartAjaxFCById

// document.getElementById("button" + (index++)).addEventListener("click", function() {alert("button clicked");});
// document.getElementById("button").addEventListener("click", function() {alert("button clicked");});