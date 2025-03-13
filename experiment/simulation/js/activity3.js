function activity3() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <p>Learning Objective: Calculate discharge by using given data </p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act3();' id='temp-btn-5' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function start_act3() {
    let temp_btn = document.getElementById('temp-btn-5');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Calculate Discharge", "tb3-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb3-box'>
        <p style="font-size: 24px; font-weight: 600; text-align: center">Activity 2</p> <br>
        <h5> Find the discharge through a rectangular channel ${b}m wide, having a depth of water ${d}m and bed slope as 1 in ${bed_slope}.</h5>
        <h5>Take the value of N=0.012 in Manning's formula.</h5>
        <br>

        <h5>Area</h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ A = b * d $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal13-inp'> <span id='cal13-val-sp'></span> m<sup>2</sup>
        </p>

        <h5>Perimeter</h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ P = d + b + d $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal14-inp'> <span id='cal14-val-sp'></span> m
        </p>

        <h5>Hydraulic Mean Depth</h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ m = \\frac{A}{P} $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal15-inp'> <span id='cal15-val-sp'></span> m
        </p>

        <h5>Using Kutter's formula</h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ c = \\frac{1}{N} * m^{1/6} $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal16-inp'> <span id='cal16-val-sp'></span>
        </p>

        <h5>Discharge is given by</h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ Q = AC \\sqrt{mi} $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal17-inp'> <span id='cal17-val-sp'></span> m<sup>3</sup>/s = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal18-inp'> <span id='cal18-val-sp'></span> litre/s
        </p>

        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify2();'  id='temp-btn-6' >Verify</button></div>

    </div>

    `;
    maindiv.innerHTML += text;
    internal_calculations2();
    setTimeout(() => { show_step('tb3-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function internal_calculations2() {
    area = b * d;
    perimeter = d + b + d;
    m = area / perimeter;
    act3_c = (1 / N) * Math.pow(m, (1 / 6));
    i = 1 / bed_slope;
    act3_Q = area * act3_c * Math.sqrt(m * i);
    act3_Q_lit = act3_Q * 1000;
}
function verify2() {
    let btn = document.getElementById('temp-btn-6');
    console.log("Area = ", area);
    console.log("Perimeter = ", perimeter);
    console.log("Hydraulic Mean Depth = ", m);
    console.log("C = ", act3_c);
    console.log("i = ", i);
    console.log("act3 Q = ", act3_Q);
    console.log("act3 Q in litre = ", act3_Q_lit);
    let inp1 = document.getElementById('cal13-inp');
    let sp1 = document.getElementById('cal13-val-sp');
    let inp2 = document.getElementById('cal14-inp');
    let sp2 = document.getElementById('cal14-val-sp');
    let inp3 = document.getElementById('cal15-inp');
    let sp3 = document.getElementById('cal15-val-sp');
    let inp4 = document.getElementById('cal16-inp');
    let sp4 = document.getElementById('cal16-val-sp');
    let inp5 = document.getElementById('cal17-inp');
    let sp5 = document.getElementById('cal17-val-sp');
    let inp6 = document.getElementById('cal18-inp');
    let sp6 = document.getElementById('cal18-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp1.value).toFixed(2)), parseFloat(area.toFixed(2)))) {
        alert('Area is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp2.value).toFixed(2)), parseFloat(perimeter.toFixed(2)))) {
        alert('Perimeter is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp3.value).toFixed(2)), parseFloat(m.toFixed(2)))) {
        alert('Hydraulic mean depth is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp4.value).toFixed(2)), parseFloat(act3_c.toFixed(2)))) {
        alert('c value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp5.value).toFixed(2)), parseFloat(act3_Q.toFixed(2)))) {
        alert('Discharge is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp6.value).toFixed(2)), parseFloat(act3_Q_lit.toFixed(2)))) {
        alert('Discharge in litres is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(area).toFixed(4)}`;
    inp2.remove();
    sp2.innerText = `${(perimeter).toFixed(4)}`;
    inp3.remove();
    sp3.innerText = `${(m).toFixed(4)}`;
    inp4.remove();
    sp4.innerText = `${(act3_c).toFixed(4)}`;
    inp5.remove();
    sp5.innerText = `${(act3_Q).toFixed(4)}`;
    inp6.remove();
    sp6.innerText = `${(act3_Q_lit).toFixed(4)}`;
    alert('Your entered values are correct!!');
    btn.style.display = 'none';
    exp_complete();
}
function exp_complete() {
    // let btn: HTMLButtonElement = <HTMLButtonElement>(
    // 	document.getElementById('temp-btn-8')
    // );
    // btn && btn.remove();
    alert('Experiment completed');
}
//# sourceMappingURL=activity3.js.map