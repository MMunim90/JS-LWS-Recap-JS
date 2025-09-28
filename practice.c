/*#include<stdio.h>

int main()
{
    int a;

    a = 1000;
    printf("value of a is %d\n", a);

    a = -21000;
    printf("value of a is %d\n", a);

    a = 10000000;
    printf("value of a is %d\n", a);

    a = -10000000;
    printf("value of a is %d\n", a);

    a = 100020004000503;
    printf("value of a is %d\n", a);

    a = -4325987632;
    printf("value of a is %d\n", a);

    return 0;
}
*/


/*#include<stdio.h>
int main()
{
    double a, b, sum;

    printf("Enter first number: ");
    scanf("%lf", &a);
    printf("Enter second number: ");
    scanf("%lf", &b);

    sum = a + b;
    printf("sum is: %lf\n", sum);

    return 0;
}
*/


/*#include<stdio.h>
int main()
{
    char ch;

    printf("Enter the first latter of your name: ");
    //scanf("%c", &ch);
    ch = getchar();
    printf("the first letter of your name is: %c\n", ch);

    return 0;
}
*/


/*#include<stdio.h>
int main()
{
    int num1, num2;

    printf("Please enter a number: ");
    scanf("%d", &num1);
    printf("please enter another number: ");
    scanf("%d", &num2);

    printf("%d + %d = %d\n", num1, num2, num1 + num2);
    printf("%d - %d = %d\n", num1, num2, num1-num2);
    printf("%d * %d = %d\n", num1, num2, num1*num2);
    printf("%d / %d = %d\n", num1, num2, num1/num2);

    return 0;
}
*/


// check a number is even or odd with infinite input

/*#include<stdio.h>
int main()
{
    int n;
    while(1)
    {
        printf("Enter a number: ");
        scanf("%d", &n);

        if(n % 2 == 0)
        {
            printf("The number is even\n");
        }
        else
        {
            printf("The number is odd\n");
        }

        if(n == 0){
            return;
        }
    }

    return 0;
}*/


//print fibonacci

/*#include<stdio.h>
int main()
{
    int n, a = 0, b = 1, next;

    printf("Enter a number: ");
    scanf("%d", &n);

    printf("Fibonacci series: ");
    for(int i=0; i<n; i++)
    {
        printf("%d", a);
        next = a + b;
        a = b;
        b = next;
    }

    return 0;
}
*/


// find factorial of a number
/*#include<stdio.h>
int main()
{
    int n;
    long long fact = 1;
    printf("Enter a number: ");
    scanf("%d", &n);

    for(int i=1; i<=n; i++){
        fact = fact * i;
    }

    printf("Factorial = %lld\n", fact);
    return 0;
}
*/


// check a number is prime or not
/*#include<stdio.h>
int main()
{
    int n, isPrime = 1;

    printf("enter a number: ");
    scanf("%d", &n);

    if(n <= 1)
    {
        isPrime = 0;
    }
    else
    {
        for(int i=2; i<=n/2; i++)
        {
            if(n % i == 0)
            {
                isPrime = 0;
                break;
            }
        }
    }

    if(isPrime)
    {
        printf("the number is a prime number");
    }
    else
    {
        printf("the number is not a prime number");
    }

    return 0;
}
*/


// reversed a number
#include<stdio.h>
int main()
{
    int n, rev = 0;
    printf("enter a number: ");
    scanf("%d", &n);

    while(n != 0)
    {
        rev = rev * 10 + n % 10;
        n = n / 10;
    }

    printf("reversed number: %d\n", rev);
    return 0;
}
