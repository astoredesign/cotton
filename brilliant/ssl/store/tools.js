/*coocies.js*/
function getCookieVal (offset) 
   {
   var endstr = document.cookie.indexOf (";", offset);
   if (endstr == -1)
      endstr = document.cookie.length;
   return unescape(document.cookie.substring(offset, endstr));
   }

function GetCookie (name) 
   {
   var arg = name + "=";
   var alen = arg.length;
   var clen = document.cookie.length;
   var i = 0;
   while (i < clen) 
      {
      var j = i + alen;
      if (document.cookie.substring(i, j) == arg)
         return getCookieVal (j);
      i = document.cookie.indexOf(" ", i) + 1;
      if (i == 0) break; 
      }
   return null;
   }

function SetCookie (name, value) 
   {
   var argv = SetCookie.arguments;
   var argc = SetCookie.arguments.length;
   var expires = (argc > 2) ? argv[2] : null;
   var path = (argc > 3) ? argv[3] : null;
   var domain = (argc > 4) ? argv[4] : null;
   var secure = (argc > 5) ? argv[5] : false;
   document.cookie = name + "=" + escape (value) +
        ((expires == null) ? "" : ("; expires=" + expires.toGMTString())) +
        ((path == null) ? "" : ("; path=" + path)) +
        ((domain == null) ? "" : ("; domain=" + domain)) +
        ((secure == true) ? "; secure" : "");
   }

function DeleteCookie (name) 
   {
   var exp = new Date();
   exp.setTime (exp.getTime() - 1000000000);  
   var cval = GetCookie (name);
   document.cookie = name + "=" + cval + "; expires=" + exp.toGMTString();
   }
function DisplayName()
   {
   if(GetCookie('DemoName') != null)
      alert("Welcome back "+GetCookie('DemoName'));
   else
      alert("You must set the cookie first.");
   }

function SetTheCookie()
   {
   if(document.forms[0].elements[0].value.length != 0)  
      {
      var expdate = new Date (); 
      expdate.setTime(expdate.getTime() + (24 * 60 * 60 * 1000 * 365)); 
      SetCookie('DemoName', document.forms[0].elements[0].value, expdate);  
      alert('Cookie has been set to ' + document.forms[0].elements[0].value + '.');
      document.forms[0].elements[0].value = " ";      
      return false;
      } 
   else 
      {
      alert('You must sign-in first.');
      return false;
      }
   }
function Help()
   {
   alert("INSTRUCTIONS"+"\n"+"\n"+"Step 1  Sign-in in the text box."+"\n"+"\n"+"Step 2  Click on Set The Cookie."+"\n"+"\n"+"Step 3  Click on Test The Cookie."+"\n"+"\n"+"Step 4  Reload page twice."+"\n"+"\n"+"Delete Cookie expires cookie.");
   }

   
/*item js*/   
   
   
var Currtop = '<table class="cur"><!--line--><tr>';
var CurrItema = '<td><div class="tbg"><div class="p1" style="background-image: url(';
var CurrItemab = ')">';
var CurrItemb = '</div><div class="marg">';
var CurrItemc = '<div class="pr">Price: <span>';
var CurrItemd = '</span></div></div></div>';
var Currbot = '</tr></table>';

   function pasteRelated() {
	var items_count=5;
    var asd=0;
    var Rell=false;
    for (var i=1;i<(items_count+1);i++) {
        ccc='rel_'+i;
        if (GetCookie(ccc)) {
            Rell=true;
            asd=asd+1;
            }
        }
    if (Rell) {
        document.write(Currtop);
    for (var i=1;i<(items_count+1);i++) {
        ccc='rel_'+i;
        if (GetCookie(ccc)) {
            tempvall=GetCookie(ccc).split('-||-');
            document.write(CurrItema);
            document.write(tempvall[0]);
            document.write(CurrItemab);
            document.write(tempvall[1]);
            document.write(CurrItemb);
			document.write(tempvall[2]);
            document.write(CurrItemc);
			document.write(tempvall[3]);
			document.write(CurrItemd);
            }
        }
        document.write(Currbot);
        }
    } 

function addtorel() {
	var items_count=5;
    related[CurrItemId]=CurrItem;
	rel_itms = new Array();
	inarr = false;
    for (i=1;i<=items_count;i++) {
    	cc='rel_'+i;
		if (!GetCookie(cc)) {
    	    SetCookie(cc, related[CurrItemId]);
        	break;
		} else {
			 if (GetCookie(cc)==related[CurrItemId]){
				 break;
			} else {
				for (i=0;i<items_count;i++) {
					ncc='rel_'+(i+1);
					if (GetCookie(ncc)==related[CurrItemId]) inarr=true;
					if (GetCookie(ncc))	rel_itms[i] = GetCookie(ncc);
				}
				if (!inarr){
					if (rel_itms.length == items_count) {
						rel_itms.splice(items_count-1,1);
					}
					rel_itms.unshift(related[CurrItemId]);
					for (i=1;i<=items_count;i++) {
						scc='rel_'+i;
						if (rel_itms[i-1]) SetCookie(scc, rel_itms[i-1]);
					}
				}
			}	
		}
	}
}	

function chprice(pr,num) {
if (document.forms['multiorder'].pricetxt){	
obj=eval("document.forms.multiorder.pricetxt");
}

		if (pr.toString().indexOf('.')!=-1) {
			pr=pr.toString().substring(0,pr.toString().indexOf('.')+3);
				if (pr.toString().split('.')[1].length==1) pr=pr+'0';
			}else{
			pr=pr+'.00';
			}
if (document.forms['multiorder'].pricetxt){	
obj.value='$'+pr;
}
		
		
				if (document.forms['email-send']){	
			document.forms['email-send'].elements['totalPrice'].value = pr;
			}	
		
}
function calcoptions(num) {
var optval=0;
len=eval("optionvalue"+num+".length");
for (i=1;i<len;i++) {
optcheck=eval("optionvalue"+num+"[i]");
if (optcheck.indexOf('(+')!=-1) {
	tmp=optcheck.split('(+')[1].split(')')[0];
	(tmp.indexOf('$')!=-1)?tmp=tmp.split('$')[1]:'';
    optval=optval+eval(tmp);
    }
    else {
        if (optcheck.indexOf('(-')!=-1) {
			tmp=optcheck.split('(-')[1].split(')')[0];
			(tmp.indexOf('$')!=-1)?tmp=tmp.split('$')[1]:'';
            optval=optval+eval('-'+tmp);
			
            }
            else {
            optval=optval+0;
            }
    }
}
return eval(optval);
}
function updateall(num) {
var totalprice;
calcq(num);
((eval("optionvalue"+num).length>0)?(totalprice=eval("qtyvalue"+num)*(eval("ipr"+num)+calcoptions(num))):(totalprice=eval("qtyvalue"+num)*eval("ipr"+num)));
chprice(totalprice,num);
}
function calcq(num) {
obj=eval("ranges"+num);
for (var i=0;i<obj.length;i++) {
    q=eval("qtyvalue"+num);
    ((obj[i]['q']<=q)?(eval("ipr"+num+"=obj[i]['pr']")):(''));
    }
}


function makeavailable(num,state) {
    obj=eval("document.forms.multiorder.vwquantity"+num);
    obj.disabled=!state;
    ((state)?(obj.value=1):(obj.value=0));
    obj2=eval("document.forms.multiorder.vwitem"+num);
    obj2.disabled=!state;
    ((state)?(obj.value=1):(obj.value=0));

for(i=0;i<document.forms.multiorder.elements.length; i++){
obj3 = document.forms.multiorder.elements[i];

	if(obj3.name.indexOf('vwattr'+num)!=-1){
		    obj3.disabled=!state;
    ((state)?(obj.value=1):(obj.value=0))
	}

}
	
}


function getEmailQuote() {
formObj = document.forms.multiorder;
sFormObj = document.forms['email-send'];
    sFormObj.elements['mailOptions'].value='';
	for(i=0;i<formObj.elements.length;i++){
		if (formObj.elements[i].checked){
		sValue = formObj.elements[i].value + "";
		sValue = sValue.replace(" ","_nbsp_");
		sValue = sValue.replace("“","_quot1_");
		sName = formObj.elements[i].name + "";
		sName = sName.replace(" ","_nbsp_");
		sFormObj.elements['mailOptions'].value += '&' + sName + '=' + sValue;
		
		}
	}
	
	sFormObj.elements['mailQty'].value = formObj.vwquantity0.value;
	updateall('0');

	
}

function submitEQ(dlocat) {
	formObj = document.forms.multiorder;
	formObj.vwquantity0.value = dlocat.substring(dlocat.indexOf('?')+5,dlocat.indexOf('&'));
	dlocat = dlocat.substring(dlocat.indexOf('&')+1,dlocat.length);

while(dlocat.indexOf('vwattr0')!=-1){
	sName = dlocat.substring(dlocat.indexOf('vwattr0'),dlocat.indexOf('='));
	sName = sName.replace("_nbsp_"," ");

	sValue = dlocat.substring(dlocat.indexOf('=')+1,dlocat.indexOf('&'));
	sValue = sValue.replace("_nbsp_"," ");
	sValue = sValue.replace("_quot1_","“");
	for(i=0;i<formObj.elements.length;i++){

		if (formObj.elements[i].name + "" == sName && formObj.elements[i].value + "" ==  sValue){
				formObj.elements[i].checked=true;
		}
	}
		
	dlocat = dlocat.substring(dlocat.indexOf('vwattr0')+1,dlocat.length);
	dlocat = dlocat.substring(dlocat.indexOf('vwattr0'),dlocat.length);
}

formObj.submit();

}

/*tools1*/

var go = true;
if (document.location.toString().indexOf('?refreshme=true')!=-1) {
SetCookie('refreshed','true');
go=false;
document.location=document.location.toString().split('?')[0];
}
if (GetCookie('refreshed')=='true' && go) {
SetCookie('refreshed','false');
document.location.reload();
}

var moretxtvalue='';
var nRec = 0;
var related = new Array();
var CurrItemId='addcook';
var ie = false;
var ns6 = false;
var ns = false;
var opera = false;

if (eval(document.layers)) { ns=true; }
else {
    if (eval(document.all)) { ie=true; if (navigator.userAgent.indexOf('Opera')!=-1) opera=true;}
        else {
            if (eval(document.getElementById)) { ns6=true;}
            }
    }

function Layer(layerName) {
return (ns)?(document.layers[layerName]):((ns6)?(document.getElementById(layerName)):(document.all(layerName)));
}



function TellToFriend() {
var NewPop = new Object();
	NewPop = window.open("https://p11.secure.hostingprod.com/@site.brilliantoutdoors.com/ssl/store/custom/ytellafriend.php?link="+pid.toLowerCase(),"tellafriend","HEIGHT=380,WIDTH=640,scrollbars=no,resizable=yes,top=50,left=50");
NewPop.window.focus();
}

function contactUs() {
var NewPopGuar = new Object();
	NewPopGuar = window.open("https://p11.secure.hostingprod.com/@site.brilliantoutdoors.com/ssl/store/custom/contactus.php?link="+pid.toLowerCase(),"pgar","HEIGHT=480,WIDTH=660,scrollbars=yes,resizable=yes,top=50,left=50");
NewPopGuar.window.focus();
}

function PriceGuarantee() {
var NewPopGuar = new Object();
	NewPopGuar = window.open("https://p11.secure.hostingprod.com/@site.brilliantoutdoors.com/ssl/store/custom/priceguarantee.php?link="+pid.toLowerCase(),"pgar","HEIGHT=685,WIDTH=660,scrollbars=yes,resizable=yes,top=50,left=50");
NewPopGuar.window.focus();
}

function Discount() {
var NewPopDis = new Object();
	NewPopDis = window.open("https://p11.secure.hostingprod.com/@site.brilliantoutdoors.com/ssl/store/custom/discount.php?link="+pid.toLowerCase(),"disc","HEIGHT=450,WIDTH=640,scrollbars=no,resizable=yes,top=50,left=50");
NewPopDis.window.focus();
}
   

function isValidEmail(address) {
        if (address != '' && address.search) {
      if (address.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) != -1) return true;
      else return false;
        }
}
function isValidEmailStrict(address) {
        if (isValidEmail(address) == false) return false;
        var domain = address.substring(address.indexOf('@') + 1);
        if (domain.indexOf('.') == -1) return false;
        if (domain.indexOf('.') == 0 || domain.indexOf('.') == domain.length - 1) return false;
        return true;
}
function FORMonSubmit()
{

formName = 'mqForm';
 
      if (document.forms[formName].elements['email'].value == '')
      {
        alert ('Please enter E-mail address');
        document.forms[formName].elements['email'].value();
        return false;
      }
      if (!isValidEmailStrict(document.forms[formName].elements['email'].value))
      {
        alert ('Please enter valid E-mail address');
        document.forms[formName].elements['email'].focus();
        return false;
      }
	  
	arrayPageSize = Lightbox.getPageSize();
	$('#overlayRev').css({width: arrayPageSize[0]+'px',height: arrayPageSize[1]+'px', opacity : '0.7'});
	$('#overlayRev').show();
	  
	document.forms[formName].submit();

	$('.mqIframeWrap').show();


  }
  
  $(document).ready(function(){
		$('.mqc3 a').click(function(){
			//overlayRev
			FORMonSubmit();	
		});	
		$('.mqIframeWrap .close').click(function(){
			$('#overlayRev').hide();
			$('.mqIframeWrap').hide();
			document.forms['mqForm'].elements['email'].value="";
		});				
		
		$('#overlayRev').click(function(){
			$('#overlayRev').hide();
			$('.mqIframeWrap').hide();
			document.forms['mqForm'].elements['email'].value="";
		});		


		$('.lNav .ttl').click(function () {
			var parent = $(this).parent();
			if ($(parent).hasClass('active')) {
				$(parent).removeClass('active');
			} else {
				$(parent).addClass('active');
			}
		});		
	
});

