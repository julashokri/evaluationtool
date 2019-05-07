$(document).ready(function () {
    $flag=1;
		var pickup = false;
		var dropoff = false;
		var date = false;
		var time = false;
		var name= false;
		var email =false;
		var phone =false;
		var journeytype = false;
		var pass = false;
		var pack= false;
		var seat =false;
		var coc =false;
    

//             tab 1                       //   	
    	$("#form-pickup").focusout(function(){
    		if($(this).val()===''){
        		$(this).css("border-color", "#FF0000");
        			$('#fwd1').attr('disabled',true);
        			 $("#error_from").text("Please select your pickup location");
        			 pickup=false;
        	}
        	else
        	{
        		$(this).css("border-color", "#2eb82e");
        		pickup=true;
        		$("#error_from").text("");
        		if(pickup===true && dropoff===true && date===true && time===true){
        		    $('#fwd1').attr('disabled',false);
        		}
        	}
       });
       $("#form-dropoff").focusout(function(){
    		if($(this).val()===''){
        		$(this).css("border-color", "#FF0000");
        		    $('#fwd1').attr('disabled',true);
        			$("#error_to").text("Please select your drop off location");
        			dropoff=false;
        	}
        	else
        	{
        		$(this).css("border-color", "#2eb82e");
        		dropoff=true;
        		$("#error_to").text("");
        		if(pickup===true && dropoff===true && date===true && time===true){
        		    $('#fwd1').attr('disabled',false);
        		}
        	}
       });
       $("#form-date").focusout(function(){
    		if($(this).val()===''){
        		$(this).css("border-color", "#FF0000");
        			$('#fwd1').attr('disabled',true);
        			$("#error_date").text("Please select your pickup date");
        			date=false;
        	}
        	else
        	{
        		$(this).css("border-color", "#2eb82e");
        		date=true;
        		$("#error_date").text("");
        		if(pickup===true && dropoff===true && date===true && time===true){
        		    $('#fwd1').attr('disabled',false);
        		}
        	}
       });
       $("#form-time").focusout(function(){
    		if($(this).val()===''){
        		$(this).css("border-color", "#FF0000");
        			$('#fwd1').attr('disabled',true);
        			$("#error_time").text("Please select your pickup time");
        			date=false;
        	}
        	else
        	{
        		$(this).css({"border-color":"#2eb82e"});
        		time=true;
        		$("#error_time").text("");
        		if(pickup===true && dropoff===true && date===true && time===true){
        		    $('#fwd1').attr('disabled',false);
        		}

        	}
        	});
        	
//             tab 2                      //   	
        
        $("#form-name").focusout(function(){
    		if($(this).val()===''){
        		$(this).css("border-color", "#FF0000");
        			$('#fwd2').attr('disabled',true);
        			$("#error_name").text("Please input your name");
        			name=false;
        	}
        	else
        	{
        		$(this).css({"border-color":"#2eb82e"});
        		name=true;
        		$("#error_name").text("");
        		if(name===true && email===true && phone===true){
        		    $('#fwd2').attr('disabled',false);
        		}

        	}
        	});
        	 $("#form-email").focusout(function(){
    		if($(this).val()===''){
        		$(this).css("border-color", "#FF0000");
        			$('#fwd2').attr('disabled',true);
        			$("#error_name").text("Please input your email");
        			email=false;
        	}
        	else
        	{
        		$(this).css({"border-color":"#2eb82e"});
        		email=true;
        		$("#error_email").text("");
        		if(name===true && email===true && phone===true){
        		    $('#fwd2').attr('disabled',false);
        		}

        	}
        	});
        $("#form-phone").focusout(function(){
            $pho =$("#form-phone").val();
    		if($(this).val()===''){
        		$(this).css("border-color", "#FF0000");
        			$('#fwd2').attr('disabled',true);
        			phone=false;
        			$("#error_phone").text("Please enter your telephone number");
        	}
        	else if ($pho.length<10)
        	{   
                    $(this).css("border-color", "#FF0000");
        			$('#fwd2').attr('disabled',true);
        			phone=false;
        			$("#error_phone").text("Phone number is too short. Please check");
        	}
        	else if(!$.isNumeric($pho))
        	{
        	        $(this).css("border-color", "#FF0000");
        			$('#fwd2').attr('disabled',true);
        			$("#error_phone").text("Phone number should only contain numbers. Please do not use the plus sign or spaces.");  
        	}
        	else{
        		$(this).css({"border-color":"#2eb82e"});
        		phone=true;
        		if(name===true && email===true && phone===true){
        		    $('#fwd2').attr('disabled',false);
        		}
            		$("#error_phone").text("");
        	}

    	});
    	
    	//             tab 3                      //   	
    	
    	
    	$("#form-journey-type").on('change', function() {
        	{
        		$(this).css("border-color", "#2eb82e");
        		journeytype=true;
        		$("#error_type").text("");
        		if(journeytype===true && pass===true && pack===true && seat ===true ){
        		    $('#fwd3').attr('disabled',false);
        		}
        	}
       });
    		$("#form-passanger-number").on('change', function() {
        	{
        		$(this).css("border-color", "#2eb82e");
        		pass=true;
        		$("#error_passanger").text("");
        		if(journeytype===true && pass===true && pack===true && seat ===true ){
        		    $('#fwd3').attr('disabled',false);
        		}
        	}
       });
     		$("#form-packages-number").on('change', function() {
        	{
        		$(this).css("border-color", "#2eb82e");
        		pack=true;
        		$("#error_case").text("");
        		if(journeytype===true && pass===true && pack===true && seat ===true ){
        		    $('#fwd3').attr('disabled',false);
        		}
        	}
       });
        $("#form-child-seat").on('change', function() {
        	{
        		$(this).css("border-color", "#2eb82e");
        		seat=true;
        		$("#error_case").text("");
        		if(journeytype===true && pass===true && pack===true && seat ===true ){
        		    $('#fwd3').attr('disabled',false);
        		}
        	}
       });
       
       
       $("#coc").on('click', function() {
    		  if ($(this).is(':checked')) {
        	$(this).css("border-color", "#2eb82e");
        		coc=true;
        		$("#error_coc").text("");
        	
        		    $('#submit').attr('disabled',false);
        	}
        	else
        	{
        		
        		    	$(this).css("border-color", "#FF0000");
        		    $('#submit').attr('disabled',true);
        			$("#error_coc").text("Please accept conditions of carriage");
        			coc=false;
        		}
        	
       });
