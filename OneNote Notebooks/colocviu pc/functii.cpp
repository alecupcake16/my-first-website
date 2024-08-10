#include <stdio.h>
#include "functii.h"
int nrpim (int n)
{
    int s=0,i;
    for(i=0;i<n;i++)
    {
        if(n%i==0)
        {
            s=s+1;
        }
    }
    if(s==2)
        return 0;
    else
        return 1;

}
int cmmdc(int a, int b)
{
    while(a!=b)
    {
        if(a<b)
            a=a-b;
        else
            b=b-a;
    }
    return a;
}
int ridicaremodulara(int a,int b, int c)
{
    int p;
    p=((a%c)*(b%c))%c;
    return p;
}
int lungimesir(char s[256])
{
    int i,nr=0;
    for(i=0;s[i]!='/0';i++)
    {
        nr++;
    }
    return nr;
}
void codare(char *s[256], int E,int n)
{
    char *c;
    c=pow(*s,E)%n;
    printf("%s",c);

}
