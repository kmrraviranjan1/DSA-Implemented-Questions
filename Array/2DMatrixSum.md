Description
You are given an array of n rows and m columns which contains positiv
e integers and sum s
You need to find occurrences of the sum of three consecutive numbers
(i.e x,y, and z ) whose sum is equal to s appear horizontally, vertically a
nd diagonally in the given matrix.
1.xyz
2.x
  y
  x
3. x
     y
       z
4.    z
    y
  x

Input
Input Format
First line: Three integers n, m and s, where n denotes the number of ro
ws, m denotes the number of columns in the matrix and s is the sum.
Next n lines: Each line contains m characters which contain positive int
egers only.
Constraints
1 <= n,m < 10
1 <= s <= 50
Output
Print the number of times the sum s appear in the matrix.
Sample Input 1 
3 3 6
3 2 1
2 2 2
1 5 1
Sample Output 1
4


Input
4 4 11
1 2 1 8
2 2 8 6
8 1 2 5
2 5 8 6
Expected Output
7
Output
7


Input
5 5 10
3 2 5 3 2
5 2 5 5 3
2 2 2 4 5
3 3 4 7 3
5 2 5 3 2
Expected Output
17
Output
17

Input
8 8 8
4 4 2 2 4 1 4 4
3 4 1 1 1 3 4 5
3 3 5 1 3 1 5 1
2 3 1 4 3 4 4 5
2 3 1 5 1 1 5 5
2 2 2 1 4 2 3 2
1 2 4 3 5 3 1 5
2 5 2 5 3 3 2 4
Expected Output
22
Output
22