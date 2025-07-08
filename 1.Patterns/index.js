function pattern1(n) {
  let str = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      str += "*";
    }
    str += "\n";
  }
  return str;
}
/* Output

*****
*****
*****
*****
*****

####################################################################################################### */

function pattern2(n) {
  let str = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      str += "*";
    }
    str += "\n";
  }

  return str;
}
/* Output

*
**
***
****
*****

####################################################################################################### */

function pattern3(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      str += j;
    }
    str += "\n";
  }
  return str;
}
/* Output

1
12
123
1234
12345

####################################################################################################### */

function pattern4(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      str += i;
    }
    str += "\n";
  }
  return str;
}
/* Output

1
22
333
4444
55555

####################################################################################################### */

function pattern5(n) {
  let str = "";
  for (let i = n; i > 0; i--) {
    for (let j = 1; j <= i; j++) {
      str += "*";
    }
    str += "\n";
  }
  return str;
}
/* Output

*****
****
***
**
*

####################################################################################################### */

function pattern6(n) {
  let str = "";
  for (let i = n; i > 0; i--) {
    for (let j = 1; j <= i; j++) {
      str += j;
    }
    str += "\n";
  }
  return str;
}
/* Output

12345
1234
123
12
1

####################################################################################################### */

function pattern7(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      str += " ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
      str += "*";
    }
    for (let j = 1; j < n - i; j++) {
      str += " ";
    }
    str += "\n";
  }
  return str;
}
/* Output

    *   
   ***
  *****
 *******
*********

####################################################################################################### */

function pattern8(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i - 1; j++) {
      str += " ";
    }
    for (let j = 1; j <= 2 * n - (2 * i - 1); j++) {
      str += "*";
    }
    for (let j = 1; j <= i - i; j++) {
      str += " ";
    }
    str += "\n";
  }
  return str;
}
/* Output

*********
 *******
  *****
   ***
    *

####################################################################################################### */

function pattern9(n) {
  let str = "";
  str += pattern7(n);
  str += pattern8(n);
  return str;
}
/* Output

    *   
   ***
  *****
 *******
*********
*********
 *******
  *****
   ***
    *

####################################################################################################### */

function pattern10(n) {
  let str = "";
  for (let i = 1; i <= 2 * n - 1; i++) {
    if (i <= n) {
      for (let j = 1; j <= i; j++) {
        str += "*";
      }
    } else {
      for (let j = 1; j <= 2 * n - i; j++) {
        str += "*";
      }
    }
    str += "\n";
  }
  return str;
}
/* Output

*    
**   
***  
**** 
*****
**** 
***  
**
*

####################################################################################################### */

function pattern11(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      if ((i + j) % 2 == 0) {
        str += "1";
      } else {
        str += "0";
      }
    }
    str += "\n";
  }
  return str;
}
/* Output

1    
01   
101  
0101 
10101

####################################################################################################### */

function pattern12(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      str += j;
    }
    for (let j = 1; j <= 2 * n - 2 * i; j++) {
      str += " ";
    }
    for (let j = i; j >= 1; j--) {
      str += j;
    }
    str += "\n";
  }
  return str;
}
/* Output

1      1
12    21
123  321
12344321

####################################################################################################### */

function pattern13(n) {
  let str = "";
  let cnt = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      str += cnt + " ";
      cnt++;
    }
    str += "\n";
  }
  return str;
}
/* Output

1 
2 3
4 5 6
7 8 9 10
11 12 13 14 15

####################################################################################################### */

function pattern14(n) {
  let str = "";
  let N = 64;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      str += String.fromCharCode(N + j);
    }
    str += "\n";
  }
  return str;
}
/* Output

A
AB
ABC
ABCD
ABCDE

####################################################################################################### */

function pattern15(n) {
  let str = "";
  let N = 64;
  for (let i = n; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      str += String.fromCharCode(N + j);
    }
    str += "\n";
  }
  return str;
}
/* Output

ABCDE
ABCD 
ABC  
AB   
A 

####################################################################################################### */

function pattern16(n) {
  let str = "";
  let N = 65;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      str += String.fromCharCode(N);
    }
    N++;
    str += "\n";
  }
  return str;
}
/* Output

A
BB
CCC
DDDD
EEEEE

####################################################################################################### */

function pattern17(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      str += " ";
    }
    let N = 64;
    for (let j = 1; j <= 2 * i - 1; j++) {
      if (j <= i) {
        str += String.fromCharCode(++N);
      } else {
        str += String.fromCharCode(--N);
      }
    }
    str += "\n";
  }
  return str;
}
/* Output

    A
   ABA
  ABCBA
 ABCDCBA
ABCDEDCBA

####################################################################################################### */

function pattern18(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    let N = 64;
    N = N + (n - i);
    for (let j = 1; j <= i; j++) {
      str += String.fromCharCode(N + j);
    }
    str += "\n";
  }
  return str;
}
/* Output

E
DE
CDE
BCDE
ABCDE

####################################################################################################### */

function pattern19(n) {
  let str = "";
  let N = 64;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i + 1; j++) {
      str += "*";
    }
    for (let j = 1; j <= 2 * (i - 1); j++) {
      str += " ";
    }
    for (let j = 1; j <= n - i + 1; j++) {
      str += "*";
    }
    str += "\n";
  }
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      str += "*";
    }
    for (let j = 1; j <= 2 * n - i * 2; j++) {
      str += " ";
    }
    for (let j = 1; j <= i; j++) {
      str += "*";
    }
    str += "\n";
  }
  return str;
}
/* Output

**********
****  ****
***    ***
**      **
*        *
*        *
**      **
***    ***
****  ****
**********

####################################################################################################### */

function pattern20(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      str += "*";
    }
    for (let j = 1; j <= 2 * n - i * 2; j++) {
      str += " ";
    }
    for (let j = 1; j <= i; j++) {
      str += "*";
    }
    str += "\n";
  }
  for (let i = 1; i <= n - 1; i++) {
    for (let j = 1; j <= n - i; j++) {
      str += "*";
    }
    for (let j = 1; j <= 2 * i; j++) {
      str += " ";
    }
    for (let j = 1; j <= n - i; j++) {
      str += "*";
    }
    str += "\n";
  }
  return str;
}
/* Output

*        *
**      **
***    ***
****  ****
**********
****  ****
***    ***
**      **
*        *

####################################################################################################### */

function fullStar(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    str += "*";
  }
  return str;
}

function partialStar(n) {
  let str = "";
  str += "*";
  for (let i = 1; i <= n - 2; i++) {
    str += " ";
  }
  str += "*";
  return str;
}

function pattern21(n) {
  let str = "";
  str += fullStar(n);
  str += "\n";
  for (let i = 1; i <= n - 2; i++) {
    str += partialStar(n);
    str += "\n";
  }
  str += fullStar(n);
  return str;
}

/* Output

*****
*   *
*   *
*   *
*****

####################################################################################################### */

function pattern22(n) {
  let str = "";
  for (let i = 1; i < 2 * n; i++) {
    for (let j = 1; j < 2 * n; j++) {
      str += Math.max(Math.abs(n - i) + 1, Math.abs(n - j) + 1);
    }
    str += "\n";
  }
  return str;
}

/* Output

555555555
544444445
543333345
543222345
543212345
543222345
543333345
544444445
555555555

####################################################################################################### */
