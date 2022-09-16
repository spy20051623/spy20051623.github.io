#include <bits/stdc++.h>

using namespace std;

struct dat {
	string word;
	string cha[4];
	string pro1[4];
	string pro2[4];
	string sou[4];
};

struct qry {
	int id;
	string s;
};

vector<dat> d;
vector<qry> q;

void init() {
	ifstream in("data.txt");
	while (!in.eof()) {
		dat x;
		in >> x.word;
		cout<<"new dat(\""<<x.word<<"\", [";
		for (int i = 0; i < 4; ++i) {
			in >> x.cha[i] >> x.pro1[i] >> x.pro2[i] >> x.sou[i];
			if(x.sou[i]=="\\")x.sou[i]="\\\\";
			cout<<"[\""<<x.cha[i]<<"\", \""<<x.pro1[i]<<"\", \""<<x.pro2[i]<<"\", \""<<x.sou[i]<<"\"]"<<",]"[i==3];
		}
		cout<<"),\n";
	}
}

int main() {
	init();
	return 0;
}
