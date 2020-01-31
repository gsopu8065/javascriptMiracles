1. x & (x-1) will clear the lowest set (last bit) bit of x

  ex: x= 11 (1011) <br/>
      print(x & (x-1)) will display 10 (1010) changed last 1 to 0

2. x & ~(x-1) extracts the lowest set bit of x (all others are clear). 

ex: x= 11 (1011) <br/>
    print(x & ~(x-1)) will display 1 (0001) changed all zeros except first one from right
    
3. add 1 to a number <br/>

ex: x= 3 (0011) <br/> to (0100)
    step1: travel till you find 0 and change all 1's to 0
    step2: change zero to 1 
    
    int temp = 1;
    while((temp & n) >= 1)
    {
      n = n ^ temp;  
      temp = temp << 1;   
    }
    
    n = n ^ temp;
    
4. sub 1 to a number <br/>

ex: x= 12 (1100) <br/> to (1011)
    step1: travel till you find 1 and change all 0's to 1
    step2: change 1 to 0 
    
    int temp = 1;
    while((temp & n) >= 0)
    {
      n = n ^ temp;  
      temp = temp << 1;   
    }
    
    n = n ^ temp;