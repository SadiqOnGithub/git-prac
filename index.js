// 1
// 2
// 3
// 4
// 5


// =======================
// COMMAND USED
// =======================
// git checkout (#hash)					->	checking out
// git reset --hard HEAD
// git reset --hard (#hash) 		-> 	will reset the working directory to particular commit
//																		and commit history are also restored to that particular
// git reset --hard HEAD~n   		-> 	where n refer to parent commit
// git reset --hard HEAD@{n}  	-> 	where n refer to reflog HEAD

// git reset HEAD		  					-> 	commit history are restored 
// 																		but working directory changes are not lost

// git switch - 								->	shorthand to go bach to last branch while in detached HEAD mode

// git config --global alias.graph "log --oneline --all --graph"			
//															->	setting alias
