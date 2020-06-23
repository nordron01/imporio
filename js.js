$(document).ready(function() {
    console.log("document loaded");
    let globmass = [];
    let heightplant = 1400;
    let widthplant = 3000;
    var superResult = [];
    var testCaseResult = [];
    let globobjarray = [];
    let qw = 0;
    let qh = 0;
    let pdetalwidt1 = 0;
    let pdetalheig1 = 0;
    let pdetalwidt2 = 0;
    let pdetalheig2 = 0;
    let pdetalwidt3 = 0;
    let pdetalheig3 = 0;

    /*
        globobjarray = [
            {
                        width : 300,
                        height : 300,
                        widthDraw : 0,
                        heightDraw : 0,
                        type : 'square'
            },
            {
                        width : 300,
                        height : 1100,
                        widthDraw : 0,
                        heightDraw : 0,
                        type : 'square'
            },
            {
                        width : 200,
                        height : 300,
                        widthDraw : 0,
                        heightDraw : 0,
                        type : 'square'
            },
            {
                        width : 200,
                        height : 1100,
                        widthDraw : 0,
                        heightDraw : 0,
                        type : 'square'
            },
            {
                        width : 1500,
                        height : 300,
                        widthDraw : 0,
                        heightDraw : 0,
                        type : 'square'
            },
            {
                        width : 500,
                        height : 500,
                        widthDraw : 0,
                        heightDraw : 0,
                        type : 'square'
            },
            {
                        width : 750,
                        height : 700,
                        widthDraw : 0,
                        heightDraw : 0,
                        type : 'square'
            },
            {
                        width : 500,
                        height : 500,
                        widthDraw : 0,
                        heightDraw : 0,
                        type : 'square'
            },
                
            {
                        width : 750,
                        height : 700,
                        widthDraw : 0,
                        heightDraw : 0,
                        type : 'square'
            },
            {
                        width : 500,
                        height : 500,
                        widthDraw : 0,
                        heightDraw : 0,
                        type : 'square'
            }
            
        ];

        globobjarray = [
            {
                        width : 300,
                        height : 300,
                        widthDraw : 0,
                        heightDraw : 0,
                        type : 'square'
            },
            
            {
                        width : 200,
                        height : 300,
                        widthDraw : 0,
                        heightDraw : 0,
                        type : 'square'
            },
            {
                        width : 200,
                        height : 1100,
                        widthDraw : 0,
                        heightDraw : 0,
                        type : 'square'
            },
            {
                        width : 300,
                        height : 1100,
                        widthDraw : 0,
                        heightDraw : 0,
                        type : 'square'
            },
            {
                        width : 1500,
                        height : 300,
                        widthDraw : 0,
                        heightDraw : 0,
                        type : 'square'
            },
            {
                        width : 750,
                        height : 700,
                        widthDraw : 0,
                        heightDraw : 0,
                        type : 'square'
            },
            {
                        width : 500,
                        height : 500,
                        widthDraw : 0,
                        heightDraw : 0,
                        type : 'square'
            },
            
            {
                        width : 750,
                        height : 700,
                        widthDraw : 0,
                        heightDraw : 0,
                        type : 'square'
            },
            {
                        width : 500,
                        height : 500,
                        widthDraw : 0,
                        heightDraw : 0,
                        type : 'square'
            },
                
            {
                        width : 750,
                        height : 700,
                        widthDraw : 0,
                        heightDraw : 0,
                        type : 'square'
            },
            {
                        width : 500,
                        height : 500,
                        widthDraw : 0,
                        heightDraw : 0,
                        type : 'square'
            }
            
        ];
        */

    globobjarray = [{
            id: 1,
            width: 500,
            height: 450,
            widthDraw: 0,
            heightDraw: 0,
            type: 'square',
            revert: false
        },
        {
            id: 2,
            width: 2000,
            height: 750,
            widthDraw: 0,
            heightDraw: 0,
            type: 'square',
            revert: false
        },
        {
            id: 3,
            width: 500,
            height: 300,
            widthDraw: 0,
            heightDraw: 0,
            type: 'square',
            revert: false
        },
        {
            id: 4,
            width: 500,
            height: 750,
            widthDraw: 0,
            heightDraw: 0,
            type: 'square',
            revert: false
        },

        {
            id: 5,
            width: 1000,
            height: 250,
            widthDraw: 0,
            heightDraw: 0,
            type: 'square',
            revert: false
        },
        {
            id: 6,
            width: 1000,
            height: 500,
            widthDraw: 0,
            heightDraw: 0,
            type: 'square',
            revert: false
        },


    ];



    document.getElementById('heightplant').value = heightplant;
    document.getElementById('widthplant').value = widthplant;
    document.getElementById('gw1').value = 1000;
    document.getElementById('gh1').value = 200;
    document.getElementById('gw2').value = 200;
    document.getElementById('gh2').value = 500;

    globmass = drowstol(heightplant, widthplant);

    function preproperty(numer) {
        let countsqw = numer % 50;
        if (countsqw == 0) {
            return numerhDraw = numer / 50;
        } else {
            countsqw = numer / 50;
            return numerDraw = Math.ceil(countsqw);
        }
    }

    function drawsquare(stol, startheight, startwidth, heightDraw, widthDraw, color, t) {
        let n = heightDraw + startheight;
        let m = widthDraw + startwidth;
        for (let i = 0 + startheight; i < n; i++) {
            for (let j = 0 + startwidth; j < m; j++) {
                globmass.mas[i][j] = 1;
                $('#' + stol + 'w' + i + 'h' + j).css('border', '1px solid ' + color);
                $('#' + stol + 'w' + i + 'h' + j).css('background-color', color);
                //$('#'+stol+'w'+i+'h'+j).append(t);
            }
        }
    }

    function drawsquareNotVisible(stol, startheight, startwidth, heightDraw, widthDraw, color, t) {
        let n = heightDraw + startheight;
        let m = widthDraw + startwidth;
        for (let i = 0 + startheight; i < n; i++) {
            for (let j = 0 + startwidth; j < m; j++) {
                globmass.mas[i][j] = 1;
            }
        }
    }

    function startDrawSquare(heightDraw, widthDraw) {
        let k = 0;
        let j = 0;
        let i = 0;
        let t = 0;
        let saveI = 0;
        let saveJ = 0;
        let countSquareMax = heightDraw * widthDraw;
        let countSquareCurr = 0;
        let rdy = true;
        let n = globmass.n,
            m = globmass.m;

        for (i = 0; i < m; i++) {
            if (globmass.mas[i][j] == 0) {
                if (i + heightDraw < m) {
                    for (let s = i; s < i + heightDraw; s++) {
                        if (globmass.mas[s][j] == 0) {
                            k++;
                        }
                        if (s < i + heightDraw) {
                            saveI = s;
                        }
                    }
                    if (k === heightDraw) {
                        break;
                    }
                }
                if (i + heightDraw == m) {
                    for (let s = 0; s < heightDraw; s++) {
                        if (globmass.mas[i + s][j] == 0) {
                            k++;
                        }
                    }
                    saveI = m - 1;
                    break;
                }
            }

            if (i == m - 1) {
                if (j < n) {
                    i = -1;
                    j++;
                }
            }

        }

        if (i == m && j == n) {
            rdy = false;
            return { i, j, rdy };
        }

        for (j = 0; j < n; j++) {
            if (globmass.mas[i][j] == 0) {
                if (j + widthDraw < n) {
                    for (let q = j; q < j + widthDraw; q++) {
                        if (globmass.mas[i][q] == 0) {
                            t++;
                        }
                        if (q < j + widthDraw) {
                            saveJ = q;
                        }
                    }
                    if (t === widthDraw) {
                        break;
                    }
                }

                if (j + widthDraw == n) {
                    for (let q = 0; q < widthDraw; q++) {
                        if (globmass.mas[i][j + q] == 0) {
                            t++;
                        }
                    }
                    saveJ = n - 1;
                    break;
                }

            }
            if (j == n - 1) {
                if (i < m - 1) {
                    j = -1;
                    i++;
                }

            }
        }

        for (let ii = saveI; ii >= i; ii--) {
            for (let jj = saveJ; jj >= j; jj--) {
                if (globmass.mas[ii][jj] == 0) {
                    countSquareCurr++;
                }
            }
        }
        if (countSquareMax === countSquareCurr) {
            rdy = true;
        } else {
            rdy = false;
        }
        return { i, j, rdy };
    }

    function startdrawGpre(heightDraw1, widthDraw1, heightDraw2, widthDraw2, letibla) {

        let k = 0;
        let j = 0;
        let i = 0;
        let t = 0;
        let rdy = true;
        let n = globmass.n - 1,
            m = globmass.m - 1;
        let peremen = [];

        console.log('n=' + n + ' m=' + m)
        console.log('heightDraw1=' + heightDraw1 + ' widthDraw' + widthDraw1);
        for (i = 0; i < m + 1; ++i) {
            console.log('I=' + i + 'J=' + j);
            if (globmass.mas[i][j] == 0) {
                if (i + heightDraw1 <= m + 1) {
                    for (let s = i; s < i + heightDraw1; s++) {
                        if (globmass.mas[s][j] == 0) {
                            k++;
                        } else if (k == heightDraw1) {
                            break;
                        }
                    }
                } else {
                    console.log('перескочили');
                    //i= m-1;
                    j++;
                    i = -1;
                    k = 0;

                }
                if (k == n + 1) {
                    i = -1;
                    j++;
                    k = 0;
                    t = 0;
                }
                console.log('k=' + k);

                if (k == heightDraw1) {
                    console.log('исключение i' + i + ' ' + j);
                    console.log(globmass.mas);
                    for (let q = j; q < j + widthDraw1; q++) {
                        if (globmass.mas[i][q] == 0) {
                            console.log('Q' + q);
                            t++;
                            if (t == widthDraw1) {
                                break;
                            }
                        } else {
                            console.log('Перескок');
                            break;
                        }

                    }
                    console.log('t' + t);
                    if (t == m + 1) {

                        t = 0;
                    }

                    if (k == heightDraw1 && t == widthDraw1) {


                        console.log('i' + i + ' j' + j);
                        switch (letibla) {
                            case 0:
                                {
                                    peremen = startdrawG(heightDraw2, widthDraw2, i, j);
                                    break;
                                }
                            case 1:
                                {
                                    peremen = startdrawG(heightDraw2, widthDraw2, i, j + widthDraw1 - widthDraw2);
                                    break;
                                }
                            case 2:
                                {
                                    //drawsquare(1,Math.abs(startes1.i+heightDrawGshaped2-heightDrawGshaped1),startes1.j,heightDrawGshaped1,widthDrawGshaped1,colormix,1);// горизонтальная отрисовка
                                    //drawsquare(1,startes1.i,Math.abs(startes1.j+widthDrawGshaped1-widthDrawGshaped2),heightDrawGshaped2,widthDrawGshaped2,colormix,1);
                                    peremen = startdrawG(heightDraw2, widthDraw2, i, j + widthDraw1 - widthDraw2);
                                    break;
                                }
                            case 3:
                                {
                                    peremen = startdrawG(heightDraw2, widthDraw2, i, j + widthDraw1 - widthDraw2);
                                    break;
                                }


                        }

                        console.log(peremen);
                        if (peremen.rdy == true) {
                            break;
                        } else {

                            i = m;
                        }
                        if (k == heightDraw1 && t == widthDraw1 && peremen.rdy == true) {
                            break;
                        }


                        //break;
                    }
                }
                if (i == m) {
                    console.log('как такэ');
                    j++;
                    k = 0;
                    i = -1;
                    t = 0;
                    //break;
                }
            }
        }

        console.log('j' + j);
        console.log('i' + i);
        console.log('i2' + peremen.i);
        console.log('j2' + peremen.j);
        console.log('rdy' + rdy);

        return { i, j, rdy, i2: peremen.i, j2: peremen.j };
    }

    function startdrawG(heightDraw, widthDraw, starti, startj) {

        let k = 0;
        let t = 0;
        let sti = false;
        let stj = false;
        if ((starti + heightDraw) < globmass.m && (startj + widthDraw) < globmass.n) {

            console.log(widthDraw);
            console.log(startj);
            let i = starti;
            let j = startj;

            for (i = starti; i < heightDraw + starti; i++) {
                //console.log('i'+i+' j'+j);
                if (globmass.mas[i][j] == 0) {
                    k++;
                    if (k == heightDraw) {
                        sti = true;
                        break;
                    }
                }

                //console.log('k'+k);
            }
            i = starti;

            for (j = startj; j < widthDraw + startj; j++) {
                console.log(j);
                if (globmass.mas[i][j] == 0) {

                    t++;
                    if (t == widthDraw) {
                        stj = true;
                        break;
                    }
                }


            }
            console.log('sti' + sti + 'stj' + stj);
            console.log('i' + i + 'j' + j);
            if (stj == true && sti == true) {
                return { i: starti, j: startj, rdy: true };
            } else {
                return { i: starti, j: startj, rdy: false };
            }

        } else {
            return { i: starti, j: startj, rdy: false };
        }

    }

    function startDrawSquarev2(heightDraw, widthDraw) {

        let k = 0;
        let j = 0;
        let i = 0;
        let t = 0;
        let rdy = true;
        let n = globmass.n - 1,
            m = globmass.m - 1;

        console.log('n=' + n + ' m=' + m)
        console.log('heightDraw=' + heightDraw + ' widthDraw' + widthDraw);


        for (i = 0; i < m + 1; ++i) {
            //console.log(i);
            if (globmass.mas[i][j] == 0) {
                if (i + heightDraw <= m + 1) {
                    for (let s = i; s < i + heightDraw; s++) {
                        if (globmass.mas[s][j] == 0) {
                            k++;
                        }
                    }
                } else {
                    console.log('перескочили');
                    i = m - 1;
                }
                console.log('k=' + k);

                if (k > heightDraw) {
                    console.log('k=' + k);
                    /* 
                    for(let q = j; q < j+widthDraw; q++){
                    if(globmass.mas[i][q]  == 0 ){
                        console.log('i'+i+' j'+j);
                        t++;
                    }else {
                    console.log( 'Перескок');
                    j= n-1;
                    }

                    }
                    console.log('t'+t);     
                    */
                    break;


                }
                if (k == heightDraw) {

                    console.log('исключение i' + i);

                    for (let q = j; q < j + widthDraw; q++) {
                        if (globmass.mas[i][q] == 0) {
                            t++;
                        } else {
                            console.log('Перескок');
                            //j= n-1;
                        }

                    }
                    console.log('t' + t);
                    if (t < widthDraw) {
                        j++;
                        t = 0;

                    }
                    break;
                }
                if (k < heightDraw) {
                    if (j < n) {
                        j++;
                        k = 0;
                        i = -1;
                    }
                }

            }
            if (i == m) {
                console.log('как такэ');
                j++;
                k = 0;
                i = -1;
                //break;
            }



            if (widthDraw + j <= n) {

            } else {
                rdy = false;
                //
                break;
            }

            if (j == n) {
                rdy = false;
                //
                break;
            }
        }

        console.log('j' + j);
        console.log('i' + i);
        console.log('rdy' + rdy);

        return { i, j, rdy };
    }




    $("#drawq").click(function() {

        let heightDrawSQ = 0;
        let widthDrawSQ = 0;
        let startes = [];
        qw = $("#qw").val();
        qh = $("#qh").val();

        heightDrawSQ = preproperty(qh);
        widthDrawSQ = preproperty(qw);
        let squareobj = {
            width: qw,
            height: qh,
            widthDraw: widthDrawSQ,
            heightDraw: heightDrawSQ,
            type: 'square'
        }
        globobjarray.push(squareobj);

        startes = startDrawSquare(heightDrawSQ, widthDrawSQ);
        console.log(startes);

        if (startes.rdy === true) {
            drawsquare(1, startes.i, startes.j, heightDrawSQ, widthDrawSQ, getRandomColor(), 1);
        } else {
            startes = startDrawSquare(widthDrawSQ, heightDrawSQ); // rotate func
            if (startes.rdy === true) {
                drawsquare(1, startes.i, startes.j, widthDrawSQ, heightDrawSQ, getRandomColor(), 1);
            } else {
                alert('кончился перевый лист');
            }
        }

    });

    document.getElementById('Optimaze').addEventListener("click", function() {
        console.log(globobjarray);
        /*
        let i = 0;
        let startes = [];
        if (globobjarray.length !== 0 && globobjarray.length !== undefined) {
            for (i = 0; i < globobjarray.length; i++) {

                startes = startDrawSquare(globobjarray[i].heightDraw, globobjarray[i].widthDraw, i);

                //console.log(startes);
                //console.log('h'+heightDrawSQ);
                //console.log('w'+widthDrawSQ);
                if (startes.rdy === true) {
                    drawsquare(1, startes.i, startes.j, globobjarray[i].heightDraw, globobjarray[i].widthDraw, getRandomColor());
                } else {
                    startes = startDrawSquare(globobjarray[i].widthDraw, globobjarray[i].heightDraw); // rotate func
                    if (startes.rdy === true) {
                        drawsquare(1, startes.i, startes.j, globobjarray[i].widthDraw, globobjarray[i].heightDraw, getRandomColor());
                    } else {
                        alert('кончился перевый лист');
                    }

                }
            }
        } else {
            alert('Добавте объекты');
        }
        */
    });



    document.getElementById('Test').addEventListener("click", function() {
        test();
    });


    document.getElementById('Ostatki').addEventListener("click", function() {
        ostatki();
    });


    function test() {
        let startes = [];
        let testings = 0;
        let combinationNumber = [];
        console.log(globobjarray);

        for (let j = 0; j < globobjarray.length; j++) {
            combinationNumber.push(globobjarray[j].id);
        }

        let fullTestRun = combinations(combinationNumber);

        if (globobjarray.length !== 0 && globobjarray.length !== undefined) {
            for (let i = 0; i < fullTestRun.length; i++) {

                var testCase = [];
                for (let j = 0; j < fullTestRun[i].length; j++) {
                    let obj = globobjarray.find((element, index) => {
                        if (element.id === fullTestRun[i][j]) {
                            return element;
                        }
                    });

                    obj.heightDraw = preproperty(obj.height);
                    obj.widthDraw = preproperty(obj.width);
                    startes = startDrawSquare(obj.heightDraw, obj.widthDraw);
                    if (startes.rdy === true) {
                        drawsquareNotVisible(1, startes.i, startes.j, obj.heightDraw, obj.widthDraw, getRandomColor());
                        obj.revert = false;
                    } else {
                        startes = startDrawSquare(obj.widthDraw, obj.heightDraw); // rotate func
                        if (startes.rdy === true) {
                            drawsquareNotVisible(1, startes.i, startes.j, obj.widthDraw, obj.heightDraw, getRandomColor());
                            obj.revert = true;
                        } else {
                            testings++;
                            //alert('кончился перевый лист');   
                        }
                    }
                    testCase.push({
                        id: obj.id,
                        revert: obj.revert,
                    });

                }
                testCaseResult.push({ testCase: testCase, ostatki: ostatkiNotVisible() });
                clearStol();
            }
        } else {
            alert('Добавте объекты');
        }
    }

    function ostatki() {
        let ostao = [];
        let n = globmass.n,
            m = globmass.m;

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (globmass.mas[j][i] == 0) {
                    ostao.push({ a: i, b: j, c: 0 });
                }
            }

        }
        let k = 0;
        let now = 1;
        for (let i = 0; i < ostao.length - 1; i++) {
            if (ostao[i].b + 1 == ostao[i + 1].b && ostao[i].a == ostao[i + 1].a) {

                ostao[i].c = now;
                $('#1w' + ostao[i].b + 'h' + ostao[i].a).append(now);
                k++;
            } else if (ostao[i + 1].b == ostao[i - k].b) {
                ostao[i].c = now;
                $('#1w' + ostao[i].b + 'h' + ostao[i].a).append(now);
                k = 0;
            } else {
                if (ostao[i].a == ostao[i + 1].a) {} else {
                    ostao[i].c = now;
                    $('#1w' + ostao[i].b + 'h' + ostao[i].a).append(now);
                    now++;
                    k = 0;
                }
            }
            if (i + 1 == ostao.length - 1) {
                ostao[i + 1].c = now;
                $('#1w' + ostao[i + 1].b + 'h' + ostao[i + 1].a).append(now);
            }
        }

        return sumSquare(ostao);
    }


    function ostatkiNotVisible() {
        let ostao = [];
        let n = globmass.n,
            m = globmass.m;

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (globmass.mas[j][i] == 0) {
                    ostao.push({ a: i, b: j, c: 0 });
                }
            }

        }
        let k = 0;
        let now = 1;
        for (let i = 0; i < ostao.length - 1; i++) {
            if (ostao[i].b + 1 == ostao[i + 1].b && ostao[i].a == ostao[i + 1].a) {

                ostao[i].c = now;
                k++;
            } else if (ostao[i + 1].b == ostao[i - k].b) {
                ostao[i].c = now;
                k = 0;
            } else {
                if (ostao[i].a == ostao[i + 1].a) {} else {
                    ostao[i].c = now;
                    now++;
                    k = 0;
                }
            }
            if (i + 1 == ostao.length - 1) {
                ostao[i + 1].c = now;
            }
        }

        return sumSquare(ostao);
    }

    function sumSquare(ostao) {
        var massss = [];
        for (let i = 0; i < ostao.length; i++) {
            massss.push(ostao[i].c);
        }

        let result = massss.reduce(function(acc, el) {
            acc[el] = (acc[el] || 0) + 1;
            return acc;
        }, {});

        superResult.push(result);
        return result;
    }



    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;

    }

    document.getElementById('Conslog').addEventListener("click", function() {
        console.log(globobjarray);
        console.log(globmass);
        console.log(superResult);
        console.log(testCaseResult);


        let i = 0;
        let startes = [];
        if (globobjarray.length !== 0 && globobjarray.length !== undefined) {
            for (i = 0; i < globobjarray.length; i++) {
                $('#conlog').append(i + " " + globobjarray[i].widthDraw + " " + globobjarray[i].heightDraw + "<br>");
            }
        }
    });

    function make(arr, el) {
        var i, i_m, item;
        var len = arr.length;
        var res = [];

        for (i = len; i >= 0; i--) {
            res.push(
                ([]).concat(
                    arr.slice(0, i), [el],
                    arr.slice(i, i_m)
                )
            );
        }

        return res;
    }

    function combinations(arr) {
        var prev, curr, el, i;
        var len = arr.length;

        curr = [
            [arr[0]]
        ];

        for (i = 1; i < len; i++) {
            el = arr[i];
            prev = curr;
            curr = [];

            prev.forEach(function(item) {
                curr = curr.concat(
                    make(item, el)
                );
            });
        }

        return curr;
    }


    document.getElementById('testCaseResult').addEventListener("click", () => {
        for (let i = 0; i < testCaseResult.length; i++) {
            testCaseResult[i].lengthOs = Object.keys(testCaseResult[i].ostatki).length;
            testCaseResult[i].sums = Object.values(testCaseResult[i].ostatki).reduce((a, b) => a + b, 0);
        }




        testCaseResult.sort((a, b) => {
            if (a.lengthOs > b.lengthOs) {
                return 1;
            } else {
                return -1;
            }
            return 0;
        });

        console.log(testCaseResult);
    });

    document.getElementById('SearchTestResult').addEventListener('click', () => {
        let val = document.getElementById('numberCase').value;
        console.log(val);
        if (val <= testCaseResult.length) {
            console.log(testCaseResult[val]);
        }

    });




    $("#posit").click(() => {
        let heightDrawSQ = 0;
        let widthDrawSQ = 0;
        let startes = [];
        qw = document.getElementById('qw').value;
        qh = document.getElementById('qh').value;
        heightDrawSQ = preproperty(qh);
        widthDrawSQ = preproperty(qw);
        startes = startDrawSquare(heightDrawSQ, widthDrawSQ);
    });



    document.getElementById('drawG').addEventListener("click", function() {

        gw1 = document.getElementById('gw1').value;
        gh1 = document.getElementById('gh1').value;
        gw2 = document.getElementById('gw2').value;
        gh2 = document.getElementById('gh2').value;

        let heightDrawGshaped1 = 0;
        let widthDrawGshaped1 = 0;
        let heightDrawGshaped2 = 0;
        let widthDrawGshaped2 = 0;
        let startes1 = [];
        let startes2 = [];

        heightDrawGshaped1 = preproperty(gh1);
        widthDrawGshaped1 = preproperty(gw1);
        heightDrawGshaped2 = preproperty(gh2);
        widthDrawGshaped2 = preproperty(gw2);
        let colormix = getRandomColor();
        let rnd = getRandomInt(0, 3);
        if (document.getElementById("g0").checked == true) {
            rnd = 0;
        }
        if (document.getElementById("g1").checked == true) {
            rnd = 1;
        }
        if (document.getElementById("g2").checked == true) {
            rnd = 2;
        }
        if (document.getElementById("g3").checked == true) {
            rnd = 3;
        }
        let rdys = [];
        //console.log(globmass.mas);
        switch (rnd) {
            case 0:
                {
                    startes1 = startdrawGpre(heightDrawGshaped1, widthDrawGshaped1, heightDrawGshaped2, widthDrawGshaped2, 0);
                    drawsquare(1, startes1.i, startes1.j, widthDrawGshaped2, heightDrawGshaped2, colormix, 1);
                    drawsquare(1, startes1.i2, startes1.j2, widthDrawGshaped1, heightDrawGshaped1, colormix, 1);
                    break;
                }
            case 1:
                {

                    startes1 = startdrawGpre(widthDrawGshaped2, heightDrawGshaped2, widthDrawGshaped1, heightDrawGshaped1, 1);
                    drawsquare(1, startes1.i, startes1.j, widthDrawGshaped2, heightDrawGshaped2, colormix, 1);
                    drawsquare(1, startes1.i2, startes1.j2, widthDrawGshaped1, heightDrawGshaped1, colormix, 1);
                    //console.log(globmass.mas);

                    break;
                }
            case 2:
                {

                    startes1 = startdrawGpre(heightDrawGshaped1, widthDrawGshaped1, heightDrawGshaped2, widthDrawGshaped2, 2);
                    drawsquare(1, startes1.i, startes1.j, widthDrawGshaped2, heightDrawGshaped2, colormix, 1);
                    drawsquare(1, startes1.i2, startes1.j2, widthDrawGshaped1, heightDrawGshaped1, colormix, 1);
                    /*
                    startes1 = startDrawSquare(heightDrawGshaped1, widthDrawGshaped1);
                    startes2 = startDrawSquare(heightDrawGshaped2, widthDrawGshaped2);
                    drawsquare(1,Math.abs(startes1.i+heightDrawGshaped2-heightDrawGshaped1),startes1.j,heightDrawGshaped1,widthDrawGshaped1,colormix,1);// горизонтальная отрисовка
                    drawsquare(1,startes1.i,Math.abs(startes1.j+widthDrawGshaped1-widthDrawGshaped2),heightDrawGshaped2,widthDrawGshaped2,colormix,1);
                    */
                    break;
                }
            case 3:
                {
                    startes1 = startDrawSquare(heightDrawGshaped1, widthDrawGshaped1);
                    startes2 = startDrawSquare(heightDrawGshaped2, widthDrawGshaped2);
                    drawsquare(1, startes1.i, startes1.j, widthDrawGshaped1, heightDrawGshaped1, colormix, 1); // горизонтальная отрисовка
                    drawsquare(1, Math.abs(startes1.i + widthDrawGshaped1 - widthDrawGshaped2), startes1.j, widthDrawGshaped2, heightDrawGshaped2, colormix, 1);

                    break;
                }
        }

        /*
        if(startes1.i === startes2.i && startes1.j === startes2.j ){

            drawsquare(1,startes1.i,startes1.j,widthDrawGshaped1,heightDrawGshaped1,colormix,1);// горизонтальная отрисовка
            drawsquare(1,Math.abs(startes1.i+widthDrawGshaped1-widthDrawGshaped2),startes1.j,widthDrawGshaped2,heightDrawGshaped2,colormix,1);
            // вариант 1 
        //drawsquare(1,startes1.i,startes1.j,heightDrawGshaped1,widthDrawGshaped1,colormix,1);// горизонтальная отрисовка
        //drawsquare(1,startes1.i,startes1.j,heightDrawGshaped2,widthDrawGshaped2,colormix,1);
        }else{
                //вариант 2
        //drawsquare(1,startes2.i,startes2.j,heightDrawGshaped1,widthDrawGshaped1,colormix,1); // горизонтальная отрисовка
        //drawsquare(1,startes2.i,startes2.j,heightDrawGshaped2,widthDrawGshaped2,colormix,1);
    
        }
        */

        // вариант 1 
        //drawsquare(1,startes1.i,startes1.j,heightDrawGshaped1,widthDrawGshaped1,colormix,1);// горизонтальная отрисовка
        //drawsquare(1,startes1.i,startes1.j,heightDrawGshaped2,widthDrawGshaped2,colormix,1);

        // вариант 2 
        //drawsquare(1,startes1.i,startes1.j,widthDrawGshaped2,heightDrawGshaped2,colormix,1);
        //drawsquare(1,startes1.i,Math.abs(startes1.j+heightDrawGshaped2-heightDrawGshaped1),widthDrawGshaped1,heightDrawGshaped1,colormix,1);// горизонтальная отрисовка

        //вариант 3
        //drawsquare(1,Math.abs(startes1.i+heightDrawGshaped2-heightDrawGshaped1),startes1.j,heightDrawGshaped1,widthDrawGshaped1,colormix,1);// горизонтальная отрисовка
        //drawsquare(1,startes1.i,Math.abs(startes1.j+widthDrawGshaped1-widthDrawGshaped2),heightDrawGshaped2,widthDrawGshaped2,colormix,1);

        //вариант 4 
        //drawsquare(1,startes1.i,startes1.j,widthDrawGshaped1,heightDrawGshaped1,colormix,1);// горизонтальная отрисовка
        //drawsquare(1,Math.abs(startes1.i+widthDrawGshaped1-widthDrawGshaped2),startes1.j,widthDrawGshaped2,heightDrawGshaped2,colormix,1);

    });



    document.getElementById('drawP').addEventListener("click", function() {
        pw1 = document.getElementById('pw1').value;
        ph1 = document.getElementById('ph1').value;
        pw2 = document.getElementById('pw2').value;
        ph2 = document.getElementById('ph2').value;
        pw3 = document.getElementById('pw3').value;
        ph3 = document.getElementById('ph3').value;
        if (widthplant >= pw1) {

        } else {
            alert('нужен 2 лист');
        }

        if (heightplant >= ph1) {

        } else {
            alert('нужен 2 лист');
        }
        if (heightplant >= ph2) {

        } else {
            alert('нужен 2 лист');
        }
        if (heightplant >= pw2) {

        } else {
            alert('нужен 2 лист');
        }


        if (heightplant >= pw3) {

        } else {
            alert('нужен 2 лист');
        }
        if (heightplant >= ph3) {

        } else {
            alert('нужен 2 лист');
        }

        pdetalwidt1 = pw1 % 50;
        pdetalheig1 = ph1 % 50;
        pdetalwidt2 = pw2 % 50;
        pdetalheig2 = ph2 % 50;
        pdetalwidt3 = pw3 % 50;
        pdetalheig3 = ph3 % 50;


        if (pdetalwidt1 == 0) {
            pdetalwidt1 = pw1 / 50;

        }

        if (pdetalheig1 == 0) {
            pdetalheig1 = ph1 / 50;

        }
        if (pdetalwidt2 == 0) {
            pdetalwidt2 = pw2 / 50;

        }

        if (pdetalheig2 == 0) {
            pdetalheig2 = ph2 / 50;

        }


        if (pdetalwidt3 == 0) {
            pdetalwidt3 = pw3 / 50;

        }

        if (pdetalheig3 == 0) {
            pdetalheig3 = ph3 / 50;

        }

        console.log(pdetalwidt1);
        console.log(pdetalheig1);
        console.log(pdetalwidt2);
        console.log(pdetalheig2);
        console.log(pdetalwidt3);
        console.log(pdetalheig3);



        n = pdetalwidt1;
        m = pdetalheig1;
        //let mas = [];
        for (let i = 0; i < m; i++) {
            //mas[i] = [];
            for (let j = 0; j < n; j++) {
                mas[i][j] = 1;
                $('#w' + i + 'h' + j).css('border', '1px solid red');

                $('#w' + i + 'h' + j).append(1);

            }
        }


        n = pdetalwidt2;
        m = pdetalheig2;
        //let mas = [];
        for (let i = 0; i < m; i++) {
            //mas[i] = [];
            for (let j = 0; j < n; j++) {
                mas[i][j] = 1;
                $('#w' + i + 'h' + j).css('border', '1px solid red');

                $('#w' + i + 'h' + j).append(1);

            }
        }

        n = pdetalwidt3;
        m = pdetalheig3;
        //let mas = [];
        for (let i = 0; i < m; i++) {
            //mas[i] = [];
            for (let j = pdetalwidt1 - pdetalwidt3; j < pdetalwidt1; j++) {
                mas[i][j] = 1;
                $('#w' + i + 'h' + j).css('border', '1px solid red');

                $('#w' + i + 'h' + j).append(1);

            }
        }
    });

    function drowstol(hh, ww) {

        let n = 40,
            m = 30;
        m = Math.ceil(hh / 50);
        n = Math.ceil(ww / 50);

        let a = n * 22;
        let b = m * 22;
        let a1 = 20;
        let b1 = 20;
        let kva1 = "";
        let kva2 = "";


        for (let t = 1; t < 2; t++) {
            $('#quear' + t).css('width', a);
            $('#quear' + t).css('height', b);
            $('#quear' + t).css('border', '2px solid black');
            $('#quear' + t).css('position', 'block');
            $('#quear' + t).css('left', '350px');

            var mas = [];
            for (let i = 0; i < m; i++) {
                mas[i] = [];
                for (let j = 0; j < n; j++) {
                    mas[i][j] = 0;
                    kva2 = '<div id="' + t + 'w' + i + 'h' + j + '">     </div>';
                    $("#quear" + t).append(kva2);
                    $('#' + t + 'w' + i + 'h' + j).css('width', a1);
                    $('#' + t + 'w' + i + 'h' + j).css('height', b1);
                    $('#' + t + 'w' + i + 'h' + j).css('border', '1px solid green');
                    //$('#w'+i+j).css('position', 'relative');
                    $('#' + t + 'w' + i + 'h' + j).css('display', 'block');
                    $('#' + t + 'w' + i + 'h' + j).css('float', 'left');
                    $('#' + t + 'w' + i + 'h' + j).css('float', 'left');
                    $('#' + t + 'w' + i + 'h' + j).css('background', '#ffffff');
                    $('#' + t + 'w' + i + 'h' + j).empty();
                }
            }
        }
        console.log(`${mas} n=${n} m=${m}`);
        return { mas, n, m };
    }

    function drowstolNotVisible(hh, ww) {

        let n = 40,
            m = 30;
        m = Math.ceil(hh / 50);
        n = Math.ceil(ww / 50);

        let a = n * 22;
        let b = m * 22;
        let a1 = 20;
        let b1 = 20;
        let kva1 = "";
        let kva2 = "";


        for (let t = 1; t < 2; t++) {
            var mas = [];
            for (let i = 0; i < m; i++) {
                mas[i] = [];
                for (let j = 0; j < n; j++) {
                    mas[i][j] = 0;
                }
            }
        }
        return { mas, n, m };
    }

    function getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }


    document.getElementById('FullClear').addEventListener('click', () => {
        clearStol();

    });

    document.getElementById('FullTest').addEventListener('click', () => {
        fullTest();
    });




    function clearStol() {
        //$('#quear1').empty();
        globmass = drowstolNotVisible(heightplant, widthplant);
        //globobjarray = [];
    }

    function fullTest() {
        let dateA = new Date();
        test();
        let dateB = new Date();
        console.log((dateB.getTime() - dateA.getTime()) / 1000);
    }


});