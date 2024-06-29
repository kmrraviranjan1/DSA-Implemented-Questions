Improve Score
Description
There are n students are taking an exam.
The highest possible score at this exam is m . You are given a array a .
Let a[i] be the score of the ith student.
Pavan has access to the school database which stores the results of al
l students.
Pavan can change each student's score as long as the following condit
ions are satisfied:
1. All scores of students integers
2. 0 ≤ a[i] ≤ m, score of each student is in range 0 to m.
3. The average score of the class doesn't change.
Pavan is student 1 (index 0 of score array) and he would like to maximi
se his own score.
Find the highest possible score he can assign to himself such that all c
onditions are satisfied.
Input
Input Format :
Each test contains multiple test cases.
The first line contains the number of test cases t . The description of t
he test cases follows.
The first line of each test case contains two integers n and m the numb
er of students and the highest possible score respectively.
The second line of each testcase contains n integers a1,a2,…,an (0 ≤
ai ≤ m) — scores of the students.
Constraints :
1 ≤ t ≤ 200
1 ≤ n ≤ 10^3
1 ≤ m ≤ 10^5
Output
For each test case, output one integer the highest possible score Pava
n can assign to himself such that both conditions are satisfied.

Sample Input 1 
2
4 10
1 2 3 4
4 5
1 2 3 4
Sample Output 1
10

Hint
1. In the first case, a =[1,2,3,4], with average of 2.5. You can change
array a to [10,0,0,0]. Average still remains 2.5. and all conditions ar
e satisfied.
2. In the second case,a = [1,2,3,4], with average of 2.5, but m = 5. Yo
u can change a to [5,1,1,3]. , 0 ≤ ai ≤ 5. You cannot increase furthe
r as it will violate condition 0 ≤ ai ≤ m., 0 ≤ ai ≤ 5\

Input
1
6 4
1 1 1 0 0 0
Expected Output
3
Output
3


Input
10
6 4
1 2 3 0 0 0
5 7
2 3 4 5 6
4 8
1 2 4 7
1 5
2
3 6
5 1 2
2 2
1 1
5 2
1 2 0 0 0
8 9
1 2 3 4 5 6 7 8
5 3
2 1 3 0 0
1 8
6
Expected Output
4
7
8
2
6
2
2
9
3
6