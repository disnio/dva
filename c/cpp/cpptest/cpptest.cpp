// cpptest.cpp : Defines the entry point for the console application.
//


//#include "stdafx.h"
#include <iostream>
#include <string>
#include <algorithm>

using namespace std;


int main(int argc, char* argv[])
{
	string str1 = "we are here!", str2 = str1;
	reverse(&str1[0], &str1[0]+12);
	cout << "str1:" + str1 << endl;

	copy(&str1[0], &str1[0]+12, &str2[0]);
	cout << "str2" + str2 << endl;

	reverse_copy(&str2[0], &str2[0]+12, ostream_iterator<char>(cout));

	cout << endl;
	return 0;
}

