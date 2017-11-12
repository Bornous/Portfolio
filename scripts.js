
	var inputDate = new Date();
	var actualMonth = inputDate.getMonth() + 1;
	var actualYear = inputDate.getFullYear();
	var nextMonth;
	var nextMonthYear;
	
	if(actualMonth<12)	{
			nextMonth=actualMonth+1;
			nextMonthYear=actualYear;
		}
	else {
			nextMonth=1;
			nextMonthYear=actualYear+1;
		}

	
	
	
		function fillCalendar(){
			
				var NumberDaysInActualMonth = howManyDays(actualMonth,actualYear);
				
				var NumberDaysInNextMonth =howManyDays(nextMonth,nextMonthYear);
				var allBoxesCode="";
				var actualMonthInWords = whatMonthToday(actualMonth);
				var nextMonthInWords = whatMonthToday(nextMonth);
				
				for(var i=1;i<NumberDaysInActualMonth;i++){
					var box='<div class="box w3-firstmonth w3-button " ><div class="day">'+i+'</div><div class="month">'+actualMonthInWords+'</div><div class="year">'+actualYear+'</div></div>';
					allBoxesCode=allBoxesCode+box;
				}
				
				for(var i=1;i<NumberDaysInNextMonth;i++){
					var box='<div class="box w3-secondmonth  w3-button" ><div class="day">'+i+'</div><div class="month">'+nextMonthInWords+'</div><div class="year">'+nextMonthYear+'</div></div>';
					allBoxesCode=allBoxesCode+box;
				}
				
				document.getElementById("calendar").innerHTML=allBoxesCode;
				var allBoxesElements=document.getElementsByClassName("box");
				
				allBoxesElements[17].style="background-color: #E68181 !important;cursor:auto;";
				allBoxesElements[18].style="background-color: #E68181 !important;cursor:auto;";
				allBoxesElements[19].style="background-color: #E68181 !important;cursor:auto;";
				allBoxesElements[1].style="background-color: #E68181 !important;cursor:auto;";
				allBoxesElements[2].style="background-color: #E68181 !important;cursor:auto;";
				allBoxesElements[3].style="background-color: #E68181 !important;cursor:auto;";
				allBoxesElements[4].style="background-color: #E68181 !important;cursor:auto;";
				allBoxesElements[5].style="background-color: #E68181 !important;cursor:auto;";
				allBoxesElements[50].style="background-color: #E68181 !important;cursor:auto;";
				
			}
		
		
		function howManyDays(month,year){
			
			var TheNumberOfDays = 0;
			
			if(month==2){
				if(year%4==0)	TheNumberOfDays=29;
				else TheNumberOfDays=28;
				
				if(year%100==0) TheNumberOfDays--;
				if(year%400==0) TheNumberOfDays++;
				
			}
			else{	
				if(month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12) TheNumberOfDays=31;
				if(month==4 || month==6 || month==9 || month==11) TheNumberOfDays=30;
			}
			
			return TheNumberOfDays;
		}

		function whatMonthToday(month){
			
			if(month==1) return "January";
			if(month==2) return "February";
			if(month==3) return "March";
			if(month==4) return "April";
			if(month==5) return "May";
			if(month==6) return "June";
			if(month==7) return "July";
			if(month==8) return "August";
			if(month==9) return "September";
			if(month==10) return "October";
			if(month==11) return "November";
			if(month==12) return "December";
			if(month<1 || month>12) return "ERROR!!! Incorrect month number."
			
		}