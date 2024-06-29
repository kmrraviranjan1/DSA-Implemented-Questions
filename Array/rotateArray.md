Rotate Array K Times
Description
Pavan is very fond of numbers.He made an array of numbers of length
N, and he wants to know the pattern after rotating it to the left by k time
s. He got confused in the middle since the array is very big can you hel
p him to find the rotated array?
Input
First line consists of two integers N and k separated by space,
Second line contains an array of N integers separated by space.
1 <= N,k <= 10^6
Output
Print output array after k rotations.
Sample Input 1 
6 4
1 2 5 4 0 6
Sample Output 1
0 6 1 2 5 4


let rotation = `1 2 5 4 0 6
2 5 4 0 6 1
5 4 0 6 1 2
4 0 6 1 2 5
0 6 1 2 5 4`


Input
8 62
2 1 6 4 3 3 6 3
Expected Output
6 3 2 1 6 4 3 3

Input
8 70
2 2 2 2 3 2 3 3
Expected Output
3 3 2 2 2 2 3 2

4 38
4 1 8 3
Expected Output
8 3 4 1