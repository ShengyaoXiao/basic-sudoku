var startingConfigs = [
    [
        [0,9,6, 0,0,0, 8,0,0],
        [5,0,1, 6,7,0, 9,3,0],
        [0,0,0, 1,0,0, 0,5,2],
        [0,0,2, 0,0,4, 5,0,0],
        [4,0,0, 8,9,7, 0,0,3],
        [0,0,3, 2,0,0, 4,0,0],
        [2,7,0, 0,0,1, 0,0,0],
        [0,3,9, 0,2,5, 7,0,6],
        [0,0,4, 0,0,0, 2,1,0]
    ],
    /*1*/
    [
        [8,7,0, 0,0,0, 0,1,2],
        [0,0,9, 0,4,0, 6,0,0],
        [0,0,0, 0,0,0, 0,0,0],
        [6,0,0, 7,0,1, 0,0,4],
        [0,1,3, 0,2,0, 9,6,0],
        [5,0,0, 6,0,8, 0,0,1],
        [0,0,0, 0,0,0, 0,0,0],
        [0,0,7, 0,5,0, 2,0,0],
        [4,2,0, 0,0,0, 0,3,7]
    ],
    /*2*/
    [
        [8,0,0, 0,1,0, 0,0,6],
        [0,7,0, 0,8,0, 0,3,0],
        [0,0,0, 2,0,4, 0,0,0],
        [0,0,2, 0,9,0, 6,0,0],
        [9,3,0, 7,0,1, 0,8,4],
        [0,0,1, 0,4,0, 5,0,0],
        [0,0,0, 6,0,8, 0,0,0],
        [0,9,0, 0,3,0, 0,6,0],
        [5,0,0, 0,2,0, 0,0,8]
    ],
    /*3*/
    [
        [0,0,6, 5,0,9, 4,0,0],
        [0,8,0, 0,0,0, 0,2,0],
        [1,0,0, 0,0,0, 0,0,5],
        [2,0,0, 1,0,8, 0,0,9],
        [0,0,0, 0,0,0, 0,0,0],
        [8,0,0, 3,0,7, 0,0,2],
        [6,0,0, 0,0,0, 0,0,1],
        [0,7,0, 0,0,0, 0,5,0],
        [0,0,5, 4,0,6, 9,0,0]
    ],
    /*4*/
    [
        [8,0,5, 0,0,9, 0,0,0],
        [0,9,7, 0,0,4, 0,0,0],
        [0,0,0, 1,5,0, 3,0,0],
        [0,4,0, 0,0,8, 0,0,1],
        [0,0,2, 0,0,0, 8,0,0],
        [6,0,0, 2,0,0, 0,3,0],
        [0,0,1, 0,7,5, 0,0,0],
        [0,0,0, 4,0,0, 5,2,0],
        [0,0,0, 8,0,0, 7,0,6]
    ],
    /*5*/
    [
        [0,6,0, 0,2,0, 1,0,0],
        [9,0,0, 0,8,0, 0,0,6],
        [0,5,8, 0,0,0, 0,7,0],
        [0,0,0, 5,0,0, 0,0,3],
        [0,7,0, 2,0,6, 0,9,0],
        [2,0,0, 0,0,8, 0,0,0],
        [0,1,0, 0,0,0, 6,4,0],
        [3,0,0, 0,4,0, 0,0,1],
        [0,0,2, 0,5,0, 0,8,0]
    ],
    /*6*/
    [
        [0,2,7, 0,5,0, 0,1,8],
        [9,6,5, 1,0,0, 7,0,0],
        [0,0,0, 9,0,0, 4,6,0],
        [0,0,0, 4,0,0, 2,8,6],
        [7,0,0, 0,0,0, 0,0,4],
        [8,4,2, 0,0,5, 0,0,0],
        [0,8,9, 0,0,6, 0,0,0],
        [0,0,4, 0,0,9, 6,2,3],
        [6,1,0, 0,2,0, 8,9,0]
    ],
    /*7*/
    [
        [7,0,0, 4,9,5, 0,2,1],
        [0,0,9, 0,0,3, 0,6,4],
        [0,1,0, 0,0,2, 9,0,0],
        [0,0,0, 2,0,9, 6,0,0],
        [2,0,6, 0,0,0, 4,0,5],
        [0,0,7, 5,0,8, 0,0,0],
        [0,0,2, 8,0,0, 0,4,0],
        [3,8,0, 9,0,0, 2,0,0],
        [9,4,0, 7,2,6, 0,0,8]
    ],
    /*8*/
    [
        [9,8,3, 4,0,0, 1,0,0],
        [0,2,0, 0,0,3, 0,7,8],
        [4,0,7, 2,8,0, 0,0,0],
        [0,0,0, 0,9,2, 0,8,0],
        [2,6,0, 0,0,0, 0,3,5],
        [0,5,0, 7,3,0, 0,0,0],
        [0,0,0, 0,7,9, 8,0,6],
        [7,9,0, 1,0,0, 0,4,0],
        [0,0,1, 0,0,4, 2,9,7]
    ],
    /*9*/
    [
        [9,0,7, 6,0,0, 8,0,0],
        [2,0,3, 0,4,0, 0,0,7],
        [0,8,6, 5,0,2, 3,1,0],
        [0,4,0, 0,0,6, 0,7,0],
        [0,0,8, 0,0,0, 4,0,0],
        [0,2,0, 7,0,0, 0,9,0],
        [0,3,1, 2,0,9, 7,4,0],
        [7,0,0, 0,5,0, 2,0,3],
        [0,0,0, 0,0,7, 9,0,1]
    ],
    /*10*/
    [
        [5,0,0, 3,0,0, 6,0,0],
        [9,0,0, 0,0,6, 0,1,0],
        [0,0,8, 0,0,0, 4,0,3],
        [1,0,0, 0,3,0, 2,0,0],
        [4,0,5, 0,0,0, 3,0,1],
        [0,0,2, 0,1,0, 0,0,8],
        [8,0,9, 0,0,0, 1,0,0],
        [0,4,0, 9,0,0, 0,0,2],
        [0,0,7, 0,0,2, 0,0,6]
    ],
    /*11*/
    [
        [1,0,0, 6,0,0, 0,0,5],
        [0,2,0, 0,7,0, 0,0,0],
        [0,0,9, 3,0,0, 2,6,0],
        [0,0,0, 0,2,7, 4,0,0],
        [0,0,0, 8,0,3, 0,0,0],
        [0,0,8, 9,1,0, 0,0,0],
        [0,5,7, 0,0,8, 6,0,0],
        [0,0,0, 0,4,0, 0,3,0],
        [3,0,0, 0,0,6, 0,0,9]
    ],
    /*12*/
    [
        [0,0,2, 0,0,3, 0,0,0],
        [0,0,6, 4,0,5, 7,0,2],
        [0,0,3, 0,0,0, 9,5,0],
        [0,0,5, 0,0,0, 0,0,8],
        [0,6,0, 0,4,0, 0,7,0],
        [1,0,0, 0,0,0, 4,0,0],
        [0,8,1, 0,0,0, 3,0,0],
        [7,0,4, 1,0,2, 8,0,0],
        [0,0,0, 7,0,0, 6,0,0]
    ],
    /*13*/
    [
        [0,6,0, 4,0,0, 8,0,0],
        [2,0,8, 7,0,0, 0,1,0],
        [0,7,0, 0,0,3, 0,5,0],
        [0,0,0, 0,0,0, 2,0,8],
        [0,1,0, 0,3,0, 0,6,0],
        [7,0,3, 0,0,0, 0,0,0],
        [0,3,0, 6,0,0, 0,4,0],
        [0,9,0, 0,0,1, 3,0,6],
        [0,0,6, 0,0,5, 0,2,0]
    ],
    /*14*/
    [
        [0,2,0, 0,0,4, 6,0,0],
        [0,7,1, 0,0,0, 0,2,3],
        [9,0,0, 0,0,3, 0,0,0],
        [0,0,0, 2,1,0, 0,9,0],
        [7,0,0, 0,0,0, 0,0,5],
        [0,1,0, 0,6,8, 0,0,0],
        [0,0,0, 4,0,0, 0,0,7],
        [3,4,0, 0,0,0, 5,8,0],
        [0,0,2, 7,0,0, 0,4,0]
    ],
    /*15*/
    [
        [9,8,0, 6,0,1, 0,0,7],
        [0,0,0, 2,0,0, 0,0,8],
        [5,0,6, 0,0,0, 0,0,2],
        [0,3,0, 0,0,0, 0,0,6],
        [0,0,9, 0,1,0, 7,0,0],
        [1,0,0, 0,0,0, 0,4,0],
        [2,0,0, 0,0,0, 3,0,4],
        [7,0,0, 0,0,9, 0,0,0],
        [3,0,0, 8,0,4, 0,9,1]
    ],
    /*16*/
    [
        [0,0,0, 0,0,0, 0,8,5],
        [0,0,9, 7,0,8, 6,0,0],
        [1,3,0, 0,0,0, 4,0,7],
        [7,0,0, 0,3,0, 1,0,0],
        [0,8,0, 1,6,7, 0,2,0],
        [0,0,6, 0,2,0, 0,0,8],
        [8,0,5, 0,0,0, 0,3,1],
        [0,0,1, 6,0,5, 8,0,0],
        [4,9,0, 0,0,0, 0,0,0]
    ],
    /*17*/
    [
        [0,7,2, 1,0,6, 0,0,8],
        [0,4,0, 0,0,3, 0,0,7],
        [0,0,0, 0,0,7, 2,3,0],
        [5,1,0, 0,0,2, 0,0,0],
        [9,0,0, 0,0,0, 0,0,6],
        [0,0,0, 9,0,0, 0,7,1],
        [0,3,5, 7,0,0, 0,0,0],
        [4,0,0, 2,0,0, 0,6,0],
        [7,0,0, 4,0,5, 9,8,0]
    ],
    /*18*/
    [
        [2,5,0, 7,0,0, 0,0,0],
        [0,0,4, 3,5,0, 0,0,2],
        [8,7,0, 0,9,0, 0,0,3],
        [3,2,0, 0,0,0, 5,8,0],
        [0,6,0, 0,0,0, 0,4,0],
        [0,1,5, 0,0,0, 0,2,9],
        [9,0,0, 0,8,0, 0,1,7],
        [5,0,0, 0,7,3, 2,0,0],
        [0,0,0, 0,0,4, 0,3,5]
    ],
    /*19*/
    [
        [0,0,0, 0,0,9, 4,5,7],
        [0,0,1, 0,0,0, 6,0,0],
        [6,0,0, 0,3,0, 0,0,0],
        [0,6,0, 3,1,0, 9,0,4],
        [0,1,9, 0,0,0, 7,8,0],
        [4,0,2, 0,9,7, 0,6,0],
        [0,0,0, 0,4,0, 0,0,1],
        [0,0,4, 0,0,0, 2,0,0],
        [8,2,7, 9,0,0, 0,0,0]
    ]
];

// model 
var defaultIndex = {i: -1, j: -1};
var currIndex = defaultIndex;
var prevIndex = defaultIndex; 
var collisions = [];
var startConfig;
var newData = false; 

var cells, startingConfig, n, nSqrd, emptyCellsCount; 

// view 
var camera, scene, renderer;
var controls;

var objects = [];

var targets = {board: [], boardUp:[], boardDown:[]}; 

var startNewBtn = document.getElementById('start');
startNewBtn.addEventListener('click', startNewBoard);
var resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', resetStartConfig);

// control temporay hack...
var canEnter = true;
var canClick = true;

initModel(); 
initView();
animate();

function initModel() {
    n = 3;
    nSqrd = n * n;

    cells = new Utils.MultiArray(nSqrd, nSqrd);
    for(let i = 0; i < nSqrd; i++) {
        for(let j = 0; j < nSqrd; j++ ) {
                cells[i][j] = {
                    value: 0,
                    isStarting: false
                };
        }
    }

    emptyCellsCount = nSqrd * nSqrd;
    var rand = Math.floor(Math.random()*startingConfigs.length);
    startConfig = startingConfigs[rand];
    loadingStartingConfiguration(startConfig);
}

function loadingStartingConfiguration(sc) {
    let batch = [];
    for(let i = 0; i < nSqrd; i++) {
        for(let j = 0; j < nSqrd; j++) {
            let isStarting = false;
            if(sc[i][j] !== 0) {
                isStarting = true;
            }
            batch.push({i:i, j:j, value:sc[i][j], isStarting: isStarting});
        }
    }
    batchEnterValue(batch);
}

function batchEnterValue(batch) {
    batch.forEach(
        function(element, index, array) {
            cells[element.i][element.j].value = element.value;
            cells[element.i][element.j].isStarting = element.isStarting;
            if(element.isStarting) {
                emptyCellsCount--; 
            }
        }
    );
}

// function setToStartingConfiguration() {
    
// }

function checkCollision(i, j, value) {
    let valid = true; 
    // if(value === '') {
    //     return valid;
    // }
    
    for(let c = 0; c < nSqrd; c++) {
        if(c !== j && cells[i][c].value === value) {
            console.log('in cells, cells[i][c])', cells[i][j]);
            console.log('Eh, but my value is ', value);
            let clashedEl = document.getElementById(indexToId(i, c));
            console.log('111111111111111111111 ', clashedEl); 
            collisions.push(clashedEl);
        }
    }
    // check column 
    for(let r = 0; r < nSqrd; r++) {
        if(r !== i && cells[r][j].value === value) {
            let clashedEl = document.getElementById(indexToId(r, j));
            console.log('222222222222222222222 ', clashedEl); 
            collisions.push(clashedEl);
        }
    }
    // check square 
    let clashedIndex = checkSquare(i, j, value);
    if(clashedIndex !== null) {
        console.log('333333333333333333333333333', clashedIndex);
       let clashedEl = document.getElementById(indexToId(clashedIndex.ci, clashedIndex.cj));
       collisions.push(clashedEl); 
        
    }
    
    if(collisions.length !== 0) {
        // add current element into the collisions array 
        let currElement = document.getElementById(indexToId(i, j));
        console.log('44444444444444444444444 ', currElement); 
        collisions.push(currElement);

        console.log(collisions);
        valid = false;
        collisions.map(
            obj => obj.children[0].className += ' collision'
        )
    }
    return valid;
}

function checkSquare(i, j, value) {
    // isomorphic position 
    let a = i % n;
    let b = j % n;
    // console.log('hereeeeeeeee, a, b, ', a, b);
   
    // find center of the n * n grid 
    let centerI;
    let centerJ;
    // center is (1, 1)
    if(a === 0 && b === 0) {
        centerI = i + 1;
        centerJ = j + 1;
    }
    else if(a === 0 && b === 1) {
        centerI = i + 1;
        centerJ = j;
    }
    else if(a === 0 && b === 2) {
        centerI = i + 1;
        centerJ = j - 1;
    }
    else if(a === 1 && b === 0) {
        centerI = i;
        centerJ = j + 1;
    }
    else if(a === 1 && b === 1) {
        centerI = i;
        centerJ = j;
    }
    else if(a === 1 && b === 2) {
        centerI = i;
        centerJ = j - 1;
    }
    else if(a === 2 && b === 0) {
        centerI = i - 1;
        centerJ = j + 1;
    }
    else if(a === 2 && b === 1) {
        centerI = i - 1;
        centerJ = j;
    }
    else if(a === 2 && b === 2) {
        centerI = i - 1;
        centerJ = j - 1;
    }
    console.log('center is ', centerI, centerJ);
    
    // 1
    if((centerI !== i) && (centerJ !== j) && (cells[centerI][centerJ].value === value)) {
        // console.log('1, in square, the same element is ', centerI, centerJ);
        let ci = centerI;
        let cj = centerJ;
        return {ci, cj};
    }
    // 2
    else if((centerI - 1 !== i) && (centerJ-1 !== j) && (cells[centerI - 1][centerJ - 1].value === value)) {
        let ci = centerI - 1;
        let cj = centerJ - 1;
        // console.log('2, in square, the sanme element is ',ci,cj);
        return {ci, cj}; 
    }
    // 3
    else if((centerI-1 !== i) && (centerJ !== j) && (cells[centerI - 1][centerJ].value === value)) {
        let ci = centerI - 1;
        let cj = centerJ
        // console.log('3, in square, the sanme element is ',ci,cj);;
        return {ci, cj};
    } 
    // 4
    else if((centerI - 1 !== i) && (centerJ + 1 !== j) && (cells[centerI - 1][centerJ + 1].value === value)) {
        let ci = centerI - 1;
        let cj = centerJ + 1;
        // console.log('4, in square, the sanme element is ',ci,cj);
        return {ci, cj}; 
    }
    // 5
    else if((centerI !== i) && (centerJ + 1 !== j) && (cells[centerI][centerJ + 1].value === value)) {
        let ci = centerI;
        let cj = centerJ + 1;
        // console.log('5, in square, the sanme element is ',ci,cj);
        return {ci, cj}; 
    }
    // 6
    else if((centerI !== i) && (centerJ -1 !== j) && (cells[centerI][centerJ - 1].value === value)) {
        let ci = centerI;
        let cj = centerJ - 1;
        // console.log('6, in square, the sanme element is ',ci,cj);
        return {ci, cj}; 
    }
    // 7
    else if((centerI + 1 !== i) && (centerJ - 1 !== j) && (cells[centerI + 1][centerJ - 1].value === value)) {
        let ci = centerI + 1;
        let cj = centerJ - 1;
        // console.log('7, in square, the sanme element is ',ci,cj);
        return {ci, cj}; 
    }
    // 8
    else if((centerI + 1 !== i) && (centerJ + 1 !== j) && (cells[centerI + 1][centerJ + 1].value === value)) {
        let ci = centerI + 1;
        let cj = centerJ + 1;
        // console.log('8, in square, the sanme element is ',ci,cj);
        return {ci, cj}; 
    }
    // 9
    else if((centerI + 1 !== i) && (centerJ !== j) && (cells[centerI + 1][centerJ].value === value)) {
        let ci = centerI + 1;
        let cj = centerJ;
        // console.log('9, in square, the sanme element is ',ci,cj);
        return {ci, cj}; 
    }
    return null; 
} 

function enterValue(i ,j, value) {
    // a -> a do nothing 
    // a -> b another value 
    if(cells[i][j].value !== value) {
        // 0 -> b 
        if(cells[i][j].value === 0) {
            emptyCellsCount--;
        } 
        // a -> b 
        else {
            // do nothing 
        }
        // actually change data 
        cells[i][j].value = value;
    }
    // console.log('value entered, this value is ', cells[i][j]);
    if(isCompelete()) {
        console.log('game is over');
    }
}

function clearValue(i, j) {
    cells[i][j].value = 0;
    emptyCellsCount++;
}

function getInputFromKeyboard(event) {
    // var e = event || window.event || arguments.callee.caller.arguments[0];
    let kc = event.keyCode;
    // console.log(kc);
    if (kc === 8 || kc === 46 || kc === 96 || kc === 48) {
        /*delete or backspace or 0 on numberpad or number row*/
        return 0;
        /*Empty*/
    } else if (kc >= 49 && kc <= 57) {
        return kc - 48;
        /*1-9*/
    } else if (kc >= 97 && kc <= 105) {
        return kc - 96;
        /*1-9 numberpad*/
    } else if (kc >= 65 && kc <= 90) {
        return kc - 55;
        /*A-Z*/
    } else if (kc === 222) {
        return 36;
        /*#*/
    }
}

function isCompelete() {
    console.log('emptyCellsCount is', emptyCellsCount);
    return emptyCellsCount === 0;
}

function indexToId(i, j) {
    return i * 9 + j;
}

/****************************/

function initView() {
    // 3D view 
    camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight, 1, 1000);
    camera.position.z = 3000;
    
    scene = new THREE.Scene();
    
    let startingPosition = {x: -565, y: -610};
    let prevPosition = {x: -565, y: -610};
    // Initialize the each cell of the board 
    let id = 0;
    for(let i = 0; i < nSqrd; i++) {
        for(let j = 0; j < nSqrd; j++) {
            var cell = document.createElement('div');
            cell.className = 'cell';
            cell.id = id++;
            
            var number = document.createElement('div');
            number.className = 'number';

            if(cells[i][j].value === 0) {
                number.textContent = '';
            } else {
                number.className += ' isStarting';
                number.textContent = cells[i][j].value;
            }
            cell.appendChild(number);

          
            addClickHandler(cell, i, j); 
            addKeydownHandler(cell, i, j);

            var object = new THREE.CSS3DObject(cell);
            object.position.x = Math.random() * 4000 - 2000;
            object.position.y = Math.random() * 4000 - 2000;
            object.position.z = Math.random() * 4000 - 2000;
            scene.add(object);

            objects.push(object); 

            object = new THREE.Object3D();
            // object.position.x = i * offset - 528;
            // object.position.y = j * offset - 500;
            if(i === 0 && j === 0) {
                object.position.x = startingPosition.x;
                object.position.y = startingPosition.y;
            }
            if(j % n === 0) {
                object.position.y = prevPosition.y + 155;
            }
            else {
                object.position.y = prevPosition.y + 135;
            }
            object.position.x = prevPosition.x;
            prevPosition.y = object.position.y;
                
            targets.board.push(object);

            let objectUp = new THREE.Object3D();
            objectUp.position.x = object.position.x;
            objectUp.position.y = object.position.y;
            objectUp.position.z = object.position.z + 150;
            
            targets.boardUp.push(objectUp);

            let objectDown = new THREE.Object3D();
            objectDown.position.x = object.position.x;
            objectDown.position.y = object.position.y;
            objectDown.position.z = object.position.z - 150;

            targets.boardDown.push(objectDown);

        }
        if((i + 1) % n === 0) {
            prevPosition.x += 155;
        } else {
            prevPosition.x += 135;
        }
        prevPosition.y = startingPosition.y;
    }

    // renderer 
    renderer = new THREE.CSS3DRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.style.position = 'absolute';
    document.getElementById('container').appendChild(renderer.domElement); 
    

    // controls
    controls = new THREE.TrackballControls(camera, renderer.domElement);
    controls.rotateSpeed = 1.5;
    controls.minDistance = 500;
    controls.maxDistance = 6000;
    controls.addEventListener( 'change', render );
   // controls.update();

    transform(targets.board, 2000);
    
    window.addEventListener('resize', onWindowResize, false);  
    

    // handle keydown !!
    document.onkeydown = function(event) {
        if(!canEnter) {
            return; 
        }
        if(currIndex !== defaultIndex) {
            let currElement = document.getElementById(indexToId(currIndex.i, currIndex.j));
            var input = getInputFromKeyboard(event);
            
            // special case, invalid input 
            if(input > nSqrd || input % 1 !== 0) {
                return;
            }
            // special case, input is ''
            if(input === 0) {
                if(cells[currIndex.i][currIndex.j] !== 0) {
                    // display 
                    currElement.children[0].textContent = '';
                    // clear value 
                    clearValue(currIndex.i, currIndex.j);   
                }
            } 
            else {
                // display 
                currElement.children[0].textContent = input;
                // no collision, display the value, add the number to data (cells)
                if(checkCollision(currIndex.i, currIndex.j, input)) {
                    enterValue(currIndex.i, currIndex.j, input);
                    transformUpBack(currIndex.i, currIndex.j);
                }
                // collisions happen, display the collisions and remove alert two secons later  
                else {
                    canEnter = false;
                    let x = currIndex.i;
                    let y = currIndex.j;
                    let remove = [];
                    collisions.map(el=>remove.push(el));
                    collisions = []; 
                    setTimeout(removeClashAlert, 1000, remove, x, y);
                }
            }
        }
    }

}

function removeClashAlert(remove, x, y) {
    while(remove.length !== 0) {
        let clashedElement = remove.pop();
        clashedElement.children[0].classList.remove('collision');
    }
    let currElement = document.getElementById(indexToId(x, y));
    currElement.children[0].textContent = '';
    canEnter = true;
    canClick = true; 
}

function transform(targets, duration) {
    console.log('transform');
    TWEEN.removeAll();

    for(let i = 0; i < objects.length; i++) {
        let object = objects[i];
        let target = targets[i];

        new TWEEN.Tween(object.position)
            .to({x: target.position.x, y: target.position.y, z: target.position.z}, Math.random() * duration + duration)
            .easing(TWEEN.Easing.Exponential.InOut)
            .start();
        
        new TWEEN.Tween().to({}, duration*2).onUpdate(render).start(); 
    }
}

function transformUpBack(i, j) {
    TWEEN.removeAll();
    let id = indexToId(i, j);
    let object = objects[id];
    let targetUp = targets.boardUp[id];

    let up = new TWEEN.Tween(object.position)
                .to({z: targetUp.position.z }, 500)
                .easing(TWEEN.Easing.Exponential.InOut)

    let targetBack = targets.board[id]
    let back = new TWEEN.Tween(object.position)
                .to({z: targetBack.position.z}, 500)
                .easing(TWEEN.Easing.Exponential.InOut)

    up.chain(back).start();
    new TWEEN.Tween().to({}, 2000).onUpdate(render).start(); 
}


function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
}

function addClickHandler(el, i , j) {
    el.addEventListener('click', function(e) {
        if(cells[i][j].isStarting) {
            return;
        }
        let element = el;
        // same 
        if(currIndex.i === i && currIndex.j === j) {
            element.classList.remove('highlight');
            currIndex = defaultIndex;
            prevIndex = defaultIndex;
            
        }
        // not same click 
        else {
            currIndex = {i, j};
            console.log('currIndex is', currIndex);
            element.className += ' highlight';
            if(prevIndex !== defaultIndex) {
                var prevId = indexToId(prevIndex.i, prevIndex.j);
                var prevElement = document.getElementById(prevId);
                prevElement.classList.remove('highlight');
            }
            prevIndex = currIndex;
        }
    }, false);
}

function addKeydownHandler(el, i, j) {
    el.addEventListener('keydown', function(e) {
    }, false);
}

function animate() {
    requestAnimationFrame(animate);
    TWEEN.update();
    controls.update();
}

function render() {
    renderer.render(scene, camera); 
}

function startNewBoard() {
    if(!canClick) {
        return; 
    }
    newData = true;
    canClick = false;
    canEnter = false;
    TWEEN.removeAll();
    for(let i = 0; i < objects.length; i++) {
        let object = objects[i];
        let target = targets.board[i];

        let center = new TWEEN.Tween(object.position)
                .to({x: 0, y: 0, z: 0}, Math.random() * 1000 + 1000)
                .easing(TWEEN.Easing.Exponential.InOut)
                .onComplete(loadNewData);
        
        let back = new TWEEN.Tween(object.position)
                .to({x: target.position.x, y: target.position.y, z: target.position.z}, Math.random() * 1000 + 1000)
                .easing(TWEEN.Easing.Exponential.InOut)
                .onComplete(function(){newData = false; canClick=true; canEnter=true})
        
        center.chain(back).start();
        new TWEEN.Tween().to({}, 2000*2).onUpdate(render).start(); 
    }
}

function loadNewData() {
    // load new data 
    emptyCellsCount = nSqrd * nSqrd;
    if(newData) {
        collisions = [];
        //emptyCellsCount = nSqrd * nSqrd;
        var rand = Math.floor(Math.random()*startingConfigs.length);
        startConfig = startingConfigs[rand];
    }
    loadingStartingConfiguration(startConfig);
    
    // load new view 
    currIndex = defaultIndex;
    prevIndex = defaultIndex; 

    for(let i = 0; i < nSqrd; i++) {
        for(let j = 0; j < nSqrd; j++) {
            let element = document.getElementById(indexToId(i,j));
            element.className = 'cell';
            element.children[0].className = 'number';
            if(cells[i][j].value === 0) {
                element.children[0].textContent = '';
            } else {
                element.children[0].className += ' isStarting';
                element.children[0].textContent = cells[i][j].value;
            }
        }
    }
}

function resetStartConfig() {
    if(!canClick) {
        return;
    }
    canClick = false;
    canEnter = false;
    TWEEN.removeAll();

    let animatedObjects = [];
    
    for(let i = 0; i < nSqrd; i++) {
        for(let j = 0; j < nSqrd; j++) {
            if(!cells[i][j].isStarting){
                let object = objects[indexToId(i,j)];
                animatedObjects.push(object);
            }
        }
    }

    for(let i = 0; i < animatedObjects.length; i++) {
        let object = animatedObjects[i];
        let targetDown = targets.boardDown[i];
        let targetBack = targets.board[i];

        let down = new TWEEN.Tween(object.position)
                .to({z: targetDown.position.z}, 1000)
                .easing(TWEEN.Easing.Exponential.InOut)
                .onComplete(loadNewData)

        let back = new TWEEN.Tween(object.position)
                .to({z: targetBack.position.z}, 1000) 
                .easing(TWEEN.Easing.Exponential.InOut)
                .onComplete(function(){canEnter=true; canClick=true;})
        
        down.chain(back).start();
        new TWEEN.Tween().to({}, 2000).onUpdate(render).start(); 
    } 
}