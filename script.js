var names=new Array();
names[0]="George";
names[1]="Jasper";
names[2]="Jen";
names[3]="jason";
names[4]="Mary";
names[5]="frank";
names[6]="lance";
names[7]="paula";
names[8]="laura";
names[9]="Leah";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}