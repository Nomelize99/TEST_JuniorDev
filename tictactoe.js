/*
    - กระดาน Tic Tac Toe แทนด้วย Array 2 มิติ
	- ให้ค่า 0 แทนตำแหน่งว่าง ที่ยังไม่มีการวางตัวหมาก
	- ให้ค่า 1 แทนตัวหมาก X
	- ให้ค่า 2 แทนตัวหมาก O
	- ถ้า X ชนะ ให้ return “X Win”
	- ถ้า Y ชนะให้ return “Y Win”
	- ถ้าเสมอ ให้ return “Draw”
	- ถ้าเกมยังไม่จบให้ return null
Input: [ [1, 2, 0],
	[0, 1, 2],
	[0, 0, 1] ]
Output: X

*/ 

function tictactoe(arr){
        let check = 0;
        if((arr[0][0] == 1 && arr[0][1] == 1 && arr[0][2] == 1) || 
            (arr[1][0] == 1 && arr[1][1] == 1 && arr[1][2] == 1) || 
            (arr[2][0] == 1 && arr[2][1] == 1 && arr[2][2] == 1) ||
            (arr[0][0] == 1 && arr[1][0] == 1 && arr[2][0] == 1) ||
            (arr[0][1] == 1 && arr[1][1] == 1 && arr[2][1] == 1) ||
            (arr[0][2] == 1 && arr[1][2] == 1 && arr[2][2] == 1) ||
            (arr[0][0] == 1 && arr[1][1] == 1 && arr[2][2] == 1) ||
            (arr[2][0] == 1 && arr[1][1] == 1 && arr[0][2] == 1) ) {
            console.log("X")
            return "X Win"
        }
        else if((arr[0][0]  == 2 && arr[0][1]  == 2 && arr[0][2]  == 2) || 
                (arr[1][0]  == 2 && arr[1][1]  == 2 && arr[1][2]  == 2) ||
                (arr[2][0]  == 2 && arr[2][1]  == 2 && arr[2][2]  == 2) ||
                (arr[0][0]  == 2 && arr[1][0]  == 2 && arr[2][0]  == 2) ||
                (arr[0][1]  == 2 && arr[1][1]  == 2 && arr[2][1]  == 2) ||
                (arr[0][2]  == 2 && arr[1][1]  == 2 && arr[2][2]  == 2) ||
                (arr[0][0]  == 2 && arr[1][1]  == 2 && arr[2][2]  == 2) ||
                (arr[2][0]  == 2 && arr[1][1]  == 2 && arr[0][2]  == 2)){
            console.log("O")
            return "Y Win"
        }
        arr.forEach(num => { 
            num.forEach(ele => {
                if(ele == 0){
                    check += 1
                }
            })
        })       
        if(check == 0){
            console.log("Draw")
            return "Draw"
        }
        else{
            console.log("game is not end?")
            return null
        }
}

tictactoe([ [1, 2, 0],
	        [0, 1, 2],
	        [0, 0, 1] ])