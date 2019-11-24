// Name: Khan Kimsrean ,Class ITE M1 G1 
// Date: 21-April-2019

#include <stdio.h>

float inputMoney(char str[]) {
	float money;
	printf("Enter %s:\n", str);
	scanf("%f", &money);
	return money;
}

void fromRielToDollar(){

	float a = inputMoney("money in riel");
	float result = a/4000;
	printf("$%.2f", result);

}
void fromDollarToRiel(){

	float dollar = inputMoney("money in dollar");
	float result = dollar*4000;
	printf(" %.0fRiel", result);

}
void fromRielToEuro(){

	float b = inputMoney("money in riel");
	float result = b/5000;
	printf("€ %.2f", result);

}
void fromEuroToRiel(){

	float euro = inputMoney("money in euro");
	float result = euro*5000;
	printf("%.0f Riel", result);

}

void fromRielToPound(){

	float c = inputMoney("money in Riel");
	float result = c/6500;
	printf("£ %.2f", result);

}
void fromPoundToRiel(){

	float pound = inputMoney("money in Pound");
	float result = pound*6500;
	printf("%.0f Riel", result);

}

int main(){

    int meun;


printf("      <<    Exchange Rates   >>       \n");

printf("Please input option bellow:\n");

printf("1). Press 1 for exchange from Riel to Dollar\n");
printf("2). Press 2 for exchange from Dollar to Riel\n");
printf("3). Press 3 for exchange from Riel to Euro\n");
printf("4). Press 4 for exchange from Euro to Riel\n");
printf("5). Press 5 for exchange from Riel to Pound \n");
printf("6). Press 6 for exchange from Pound to Riel \n");


 while(scanf("%d",&meun) != 1)
 {
        printf("Please enter an integer: ");
        while(getchar() != '\n');
 }
 printf("You entered: %d\n",meun);



switch(meun){

case 1:
	printf("**Exchange from Riel to Dollar**\n");
	fromRielToDollar();	
	break;
case 2:
	printf("**Exchange from Dollar to Riel**\n");
	fromDollarToRiel();
	break;
case 3:
	printf("**Exchange from Riel to Euro**\n");
	fromRielToEuro();
	break;
case 4:
	printf("**Exchange from Euro to Riel**\n");
	fromEuroToRiel();
	break;
case 5:
	printf("  Exchange from Riel to Pound  \n");
	fromRielToPound();
	break;
case 6:
	printf("  Exchange from Pound to Riel   \n");
	fromPoundToRiel();
	break;


}



	return 0;

}