$(document).ready(function() {
    console.log("document loaded");
    let globmass = [];

    /* settings  */
    let heightplant = 1400;
    let widthplant = 3000;
    document.getElementById('heightplant').value = heightplant;
    document.getElementById('widthplant').value = widthplant;
    document.getElementById('gw1').value = 1000;
    document.getElementById('gh1').value = 200;
    document.getElementById('gw2').value = 200;
    document.getElementById('gh2').value = 500;

    globmass = drowstol(heightplant, widthplant);
    console.log(globmass);
    let globobjarray = [];

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
        console.log(`startheight=${startheight}`);
        console.log(`startwidth=${startwidth}`);
        console.log(`heightDraw=${heightDraw}`);
        console.log(`widthDraw=${widthDraw}`);

        let n = heightDraw + startheight;
        let m = widthDraw + startwidth;
        //let mas = [];
        for (let i = 0 + startheight; i < n; i++) {
            //mas[i] = [];
            for (let j = 0 + startwidth; j < m; j++) {
                globmass.mas[i][j] = 1;
                $('#' + stol + 'w' + i + 'h' + j).css('border', '1px solid ' + color);
                $('#' + stol + 'w' + i + 'h' + j).css('background-color', color);
                //$('#'+stol+'w'+i+'h'+j).append(t);

            }
        }
    }

    function startdrawsquare(heightDraw, widthDraw) {

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
        let peremen = [];

        console.log('n=' + n + ' m=' + m)
        console.log('heightDraw=' + heightDraw + ' widthDraw' + widthDraw);


        for (i = 0; i < m; ++i) {
            if (globmass.mas[i][j] == 0) {
                if (i + heightDraw < m) {
                    for (let s = i; s < i + heightDraw; s++) {
                        console.log(`s=${s}`);
                        console.log(`i + heightDraw=${i + heightDraw}`);
                        if (globmass.mas[s][j] == 0) {
                            k++;
                        }
                        if (s < i + heightDraw) {
                            saveI = s;
                        }
                    }
                    if (k === heightDraw) {
                        console.log(`k = ${k}`);

                        break;
                    }
                    //console.log(`i+h = ${i+heightDraw}`);
                }
                if (i + heightDraw == m) {
                    console.log('equally height');
                }

            }
            if (i == m - 1) {
                console.log(`STOpi${i}`);
                i = -1;
                j++;
            }
        }

        console.log(`i=${i}`);
        console.log(`j=${j}`);

        for (j = 0; j < n; ++j) {
            if (globmass.mas[i][j] == 0) {
                if (j + widthDraw < n) {
                    for (let q = j; q < j + widthDraw; q++) {
                        console.log(`q=${q}`);
                        console.log(`j + widthDraw=${j + widthDraw}`);
                        if (globmass.mas[i][q] == 0) {
                            t++;
                        }
                        if (q < j + widthDraw) {
                            saveJ = q;
                        }
                    }
                    if (t === widthDraw) {
                        console.log(`t = ${t}`);
                        break;
                    }

                    //console.log(`i+h = ${i+heightDraw}`);
                }
                if (j + widthDraw == n) {
                    console.log('equally width');
                }

            }
            if (j == n - 1) {
                console.log(`STOpj${j}`);
                j = -1;
                i++;
            }
        }

        console.log(`saveI=[${i}..${saveI}]`);
        console.log(`saveJ=[${j}..${saveJ}]`);

        for (let ii = saveI; ii >= i; ii--) {
            for (let jj = saveJ; jj >= j; jj--) {
                if (globmass.mas[ii][jj] == 0) {
                    countSquareCurr++;
                }
            }
        }
        console.log(`countSquareMax = ${countSquareMax}  countSquareCurr=${countSquareCurr}`)
        if (countSquareMax === countSquareCurr) {
            rdy = true;
        } else {
            rdy = false;
        }

        /*
        if (globmass.mas[i][j] == 0) {
            if (i + heightDraw <= m ) {
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
                //console.log('k='+k);
                for (let q = j; q < j + widthDraw; q++) {
                    if (globmass.mas[i][q] == 0) {
                        t++;
                    } else {
                        console.log('Перескок');
                        break;
                    }

                }
                console.log('t' + t);
                if (k == heightDraw && t < widthDraw) {
                    j++;
                    t = 0;
                    i = 0;
                    k = 0;
                }
                console.log('t' + t);

                if (k == heightDraw && t == widthDraw) {
                    break;
                }


            }
            if (k == heightDraw) {

                console.log('исключение i' + i);

                for (let q = j; q < j + widthDraw; q++) {
                    if (globmass.mas[i][q] == 0) {
                        t++;
                    } else {
                        console.log('Перескок');
                        break;
                    }

                }
                //console.log('t'+t);   
                if (k == heightDraw && t < widthDraw) {
                    j++;
                    t = 0;
                    i = 0;
                    k = 0;
                }
                if (k == heightDraw && t == widthDraw) {
                    break;
                }
            }
            if (k < heightDraw) {
                if (j < n) {
                    console.log('Закончилось');
                    j++;
                    k = 0;
                    i = -1;
                }
            }

        }
        if (i == m) {
            console.log('как такэ');
            console.log('wd' + widthDraw + ' j' + j + ' n' + n);
            console.log('wh' + heightDraw + ' i' + i + ' m' + m);
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
        */



        console.log(`i=${i} j=${j} rdy=${rdy}`);
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

    function startdrawsquarev2(heightDraw, widthDraw) {

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


    let qw = 0;
    let qh = 0;
    let detalwidt = 0;
    let detalheig = 0;

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

        startes = startdrawsquare(heightDrawSQ, widthDrawSQ);
        console.log(startes);

        if (startes.rdy === true) {
            drawsquare(1, startes.i, startes.j, heightDrawSQ, widthDrawSQ, getRandomColor(), 1);
        } else {
            startes = startdrawsquare(widthDrawSQ, heightDrawSQ); // rotate func
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

                startes = startdrawsquare(globobjarray[i].heightDraw, globobjarray[i].widthDraw, i);

                //console.log(startes);
                //console.log('h'+heightDrawSQ);
                //console.log('w'+widthDrawSQ);
                if (startes.rdy === true) {
                    drawsquare(1, startes.i, startes.j, globobjarray[i].heightDraw, globobjarray[i].widthDraw, getRandomColor());
                } else {
                    startes = startdrawsquare(globobjarray[i].widthDraw, globobjarray[i].heightDraw); // rotate func
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
                width: 500,
                height: 450,
                widthDraw: 0,
                heightDraw: 0,
                type: 'square'
            },
            {
                width: 2000,
                height: 750,
                widthDraw: 0,
                heightDraw: 0,
                type: 'square'
            },
            {
                width: 500,
                height: 300,
                widthDraw: 0,
                heightDraw: 0,
                type: 'square'
            },
            {
                width: 500,
                height: 750,
                widthDraw: 0,
                heightDraw: 0,
                type: 'square'
            },

            {
                width: 1000,
                height: 250,
                widthDraw: 0,
                heightDraw: 0,
                type: 'square'
            },
            {
                width: 1000,
                height: 500,
                widthDraw: 0,
                heightDraw: 0,
                type: 'square'
            },


        ];

        let i = 0;
        let testings = 0;
        let startes = [];

        /*
        globobjarray.sort(function (a, b) {
          if (a.width < b.width) {
            return 1;
          }
          if (a.width > b.width) {
            return -1;
          }
          // a должно быть равным b
          return 0;
        });
        */

        console.log(globobjarray);
        let rnd = 0;

        if (globobjarray.length !== 0 && globobjarray.length !== undefined) {

            while (i <= 3000) {
                if (globobjarray.length == 0) {
                    i = 3000;
                    break;
                    rnd = 0;
                } else {
                    i++;
                    rnd = getRandomInt(0, globobjarray.length - 1);
                }

                console.log('rnd' + rnd);
                globobjarray[rnd].heightDraw = preproperty(globobjarray[rnd].height);
                globobjarray[rnd].widthDraw = preproperty(globobjarray[rnd].width);
                startes = startdrawsquare(globobjarray[rnd].heightDraw, globobjarray[rnd].widthDraw);

                //console.log(startes);
                //console.log('h'+heightDrawSQ);
                //console.log('w'+widthDrawSQ);
                if (startes.rdy === true) {
                    drawsquare(1, startes.i, startes.j, globobjarray[rnd].heightDraw, globobjarray[rnd].widthDraw, getRandomColor());
                } else {
                    startes = startdrawsquare(globobjarray[rnd].widthDraw, globobjarray[rnd].heightDraw); // rotate func
                    if (startes.rdy === true) {
                        drawsquare(1, startes.i, startes.j, globobjarray[rnd].widthDraw, globobjarray[rnd].heightDraw, getRandomColor());
                    } else {
                        testings++;
                        //alert('кончился перевый лист');   
                    }

                }
                globobjarray.splice(rnd, 1);
                console.log(globobjarray);
            }

        } else {
            alert('Добавте объекты');
        }
        console.log('res=' + testings);
        ostatki();
    });



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
        console.log('dlin' + ostao.length);
        for (let i = 0; i < ostao.length - 1; i++) {
            if (ostao[i].b + 1 == ostao[i + 1].b && ostao[i].a == ostao[i + 1].a) {

                ostao[i].c = now;
                $('#1w' + ostao[i].b + 'h' + ostao[i].a).append(now);
                k++;
                //console.log('k'+k);
            } else if (ostao[i + 1].b == ostao[i - k].b) {
                ostao[i].c = now;
                //globmass[ostao[i].b][ostao[i].a]=1;
                $('#1w' + ostao[i].b + 'h' + ostao[i].a).append(now);
                k = 0;
            } else {
                if (ostao[i].a == ostao[i + 1].a) {


                } else {
                    //console.log('i'+i+ '' + 'k '+k );
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
    }


    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;

    }

    document.getElementById('Conslog').addEventListener("click", function() {
        console.log(globobjarray);
        console.log(globmass);

        let i = 0;
        let startes = [];
        if (globobjarray.length !== 0 && globobjarray.length !== undefined) {
            for (i = 0; i < globobjarray.length; i++) {
                $('#conlog').append(i + " " + globobjarray[i].widthDraw + " " + globobjarray[i].heightDraw + "<br>");
            }
        }
    });

    $("#posit").click(function() {
        let heightDrawSQ = 0;
        let widthDrawSQ = 0;
        let startes = [];
        qw = document.getElementById('qw').value;
        qh = document.getElementById('qh').value;
        heightDrawSQ = preproperty(qh);
        widthDrawSQ = preproperty(qw);
        startes = startdrawsquare(heightDrawSQ, widthDrawSQ);
        console.log(startes);
    });

    let pdetalwidt1 = 0;
    let pdetalheig1 = 0;
    let pdetalwidt2 = 0;
    let pdetalheig2 = 0;
    let pdetalwidt3 = 0;
    let pdetalheig3 = 0;

    //let posit = 0;
    let print = 0;
    let ostatokwidth = 0;
    let ostatokheight = 0;

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
                    startes1 = startdrawsquare(heightDrawGshaped1, widthDrawGshaped1);
                    startes2 = startdrawsquare(heightDrawGshaped2, widthDrawGshaped2);
                    drawsquare(1,Math.abs(startes1.i+heightDrawGshaped2-heightDrawGshaped1),startes1.j,heightDrawGshaped1,widthDrawGshaped1,colormix,1);// горизонтальная отрисовка
                    drawsquare(1,startes1.i,Math.abs(startes1.j+widthDrawGshaped1-widthDrawGshaped2),heightDrawGshaped2,widthDrawGshaped2,colormix,1);
                    */
                    break;
                }
            case 3:
                {
                    startes1 = startdrawsquare(heightDrawGshaped1, widthDrawGshaped1);
                    startes2 = startdrawsquare(heightDrawGshaped2, widthDrawGshaped2);
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

    document.getElementById('ondrow').addEventListener("click", function() {

        let n = globmass.n,
            m = globmass.m;

        let t = 1;
        for (let i = 0; i < m; i++) {

            for (let j = 0; j < n; j++) {
                globmass.mas[i][j] = 0;
                $('#' + t + 'w' + i + 'h' + j).css('border', '1px solid green');

                $('#' + t + 'w' + i + 'h' + j).empty();

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

                }
            }
        }
        console.log(`${mas} n=${n} m=${m}`);
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

    let generator = gen(5);
    $("#GenStart").click(function() {

        let res1 = generator.next(10);
        let res2 = generator.next(20);
        let res3 = generator.next(30);
        //console.log('res'+res);
        //generator.next().value;
        //generator.next().value;
    });

    function* gen(atr) {
        console.log(1);
        console.log(2);
        console.log(3);
        let result1 = yield(atr * 2);
        console.log(result1);
        console.log(4);
        console.log(5);
        console.log(6);
        let result2 = yield(atr * 3);
        console.log(result2);
        console.log(7);
        console.log(8);
        console.log(9);
        console.log(result1, result2);

    }

});