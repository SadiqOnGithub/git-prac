// 1
// 2
// 3
// 4
// 5


// =======================
// COMMAND USED  |  GIT
// =======================
// git checkout (#hash)					-> checking out to particular hash but put head in detached mode
// git checkout HEAD						-> "
// git switch - 									->	shorthand to go bach to last branch while in detached HEAD mode
//																				restore the working directory

// git checkout (#hash)	path		-> bring the old changes to mentioned file but NO detached HEAD
// git reset --hard								-> this bring working directory to the last commit

// git reset --hard HEAD
// git reset --hard (#hash) 		-> 	will reset the working directory to particular commit
//																		and commit history are also restored to that particular
// git reset --hard HEAD~n   		-> 	where n refer to parent commit
// git reset --hard HEAD@{n}  	-> 	where n refer to reflog HEAD

// git reset HEAD		  					-> 	commit history are restored
// 																		but working directory changes are not lost

// git reset HEAD               ->  changes unstaged from working directory for all files
// git restore --staged .       ->  changes unstaged from working directory for all files
// git restore --staged <file>  ->  changes unstaged from working directory for a particular file

// git commit --amend           ->  edit last commit msg

// git config --global alias.graph "log --oneline --all --graph"
//															->	setting alias

// git remote add [origin/remote name you want to give] [link to remote repo]
//                              -> adding origin to local repo

// git push -u [origin/remote name you want to give] [branch you want to push]
//                              -> settign default remote location for a branch

// git push [remote repo name] -d [branch you want to delete]
//                              -> remove a branch form remote repo


/// =======================
// COMMAND USED  |  BASH
// =======================

// history										-> to get history
// history <n>								-> to get limited number of history
// history | grep <search_string>
//														-> to get limited number of history
// !<command_number>					-> to used the command 