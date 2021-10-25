Can They be Equal ?
Description

You are given two strings A and B of length n.

You can select any substring in the string A and reverse it. This operation can be performed as many times as you want.

For example - "abbbca" can be turned into "abcbba" if we select a substring from index 2 to index 4 (bbc).

You need to answer whether string A can be converted into string B using the above operation.

Print "Yes" if it is possible else "No".


Input
The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. Then t test cases follow.

The first line of each test case contains an integer n (1≤ n ≤ 1000) - The length of string A and B.

The second line of each test case contains a string A (1 ≤ |A| ≤ 1000).

The third line of each test case contains a string B (1 ≤ |B| ≤ 1000).


Output
For each test case, print the answer: "Yes" if it is possible else "No".


Sample Input 1 

2
2
ab
ac
3
aba
aab
Sample Output 1

No
Yes
Hint

In the first testcase, since the characters are different, no possible operation can make them equal.

In the second testcase, we can obtain B from A by reversing substring ba to ab.