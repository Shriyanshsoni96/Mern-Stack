int p;
    cout<<"Enter the no of Rows ";
    cin>>p;
    i=1;
    while(i<=p)
       {
         int space = p - i ;
               while(space){
                     cout<<" ";
                     space--;
               }
          j=1;
            while(j<=i)
            {     
               cout<<i<<"";                         
                     j++;               
            }
            
    cout<<endl;
    i++;
    }