function checkDay {
  const month = document.getElementById("month");
  const year = document.getElementById("year");
  let days;
  if (month==2)
    if(year%400==0)
      days=29;
    else days=28;
  if (month==1)
    days=31;
  if (month==3)
    days=31;
   if (month ==4)
    days=30
  if (month==5)
    days=31;
   if (month ==6)
    days=30
  if (month==7)
    days=31;
   if (month ==8)
    days=30
  if (month==9)
    days=31;
  if (month==10)
    days=31;
   if (month ==11)
    days=30
  if (month==12)
    days=31;
  console.log(days);
}
