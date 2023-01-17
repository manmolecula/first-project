let roadMines = [false, false, false, false, false, false, false, false, false, false];
let k=2;

for(let i = 0; i<roadMines.length;i++){
    console.log(`Танк переместился на ${parseInt(i) + 1}`);
    if(roadMines[i]) {
        k--;
        if(k==0){
            console.log('Танк уничтожен');
            break;
        }
        console.log('Танк поврежден');
    }   
}