
	var inputDate = new Date();
	var actualMonth = inputDate.getMonth() + 1;
	var actualYear = inputDate.getFullYear();
	
	
		function fillCalendar(){
			
				var NumberDaysInMonth = howManyDays();
				var allBoxes="";
				
				for(var i=1;i<NumberDaysInMonth;i++){
					var box='<div class="box"><div class="day">'+i+'</div><div class="month">'+actualMonth+'</div><div class="year">'+actualYear+'</div></div>';
					allBoxes=allBoxes+box;
				}
				
				document.getElementById("calendar").innerHTML=allBoxes;
				
			}
		
		
		function howManyDays(){
			
			var TheNumberOfDays = 0;
			
			if(actualMonth==2){
				if(actualYear%4==0)	TheNumberOfDays=29;
				else TheNumberOfDays=28;
				
				if(actualYear%100==0) TheNumberOfDays--;
				if(actualYear%400==0) TheNumberOfDays++;
				
			}
			else{	
				if(actualMonth==1 || actualMonth==3 || actualMonth==5 || actualMonth==7 || actualMonth==8 || actualMonth==10 || actualMonth==12) TheNumberOfDays=31;
				if(actualMonth==4 || actualMonth==6 || actualMonth==9 || actualMonth==11) TheNumberOfDays=30;
			}
			
			return TheNumberOfDays;
		}
		