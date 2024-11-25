function activity2() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <p>Learning Objective: Calculate discharge by using given data </p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act2();' id='temp-btn-3' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function start_act2() {
    let temp_btn = document.getElementById('temp-btn-3');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Calculate Discharge", "tb2-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-box'>
        <p style="font-size: 24px; font-weight: 600; text-align: center">Activity 2</p> <br>
        <h5> Find the discharge through a rectangular channel ${b}m wide, having a depth of water ${d}m and bed slope as 1 in ${bed_slope}.</h5>
        <h5>Take the value of N=0.03 in Kutter's formula.</h5>
        <br>

        <h5>Area</h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ A = b * d $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal07-inp'> <span id='cal07-val-sp'></span> m<sup>2</sup>
        </p>

        <h5>Perimeter</h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ P = d + b + d $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal08-inp'> <span id='cal08-val-sp'></span> m
        </p>

        <h5>Hydraulic Mean Depth</h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ m = \\frac{A}{P} $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal09-inp'> <span id='cal09-val-sp'></span> m
        </p>

        <h5>Using Kutter's formula</h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ c = \\frac{23 + \\frac{0.00155}{i} + \\frac{1}{N}}{1 + (23 + \\frac{0.00155}{i}) \\frac{N}{\\sqrt{m}}} $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal10-inp'> <span id='cal10-val-sp'></span>
        </p>

        <h5>Discharge is given by</h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ Q = AC \\sqrt{mi} $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal11-inp'> <span id='cal11-val-sp'></span> m<sup>3</sup>/s = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal12-inp'> <span id='cal12-val-sp'></span> litre/s
        </p>

        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify1();'  id='temp-btn-4' >Verify</button></div>

    </div>

    `;
    maindiv.innerHTML += text;
    internal_calculations1();
    setTimeout(() => { show_step('tb2-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function internal_calculations1() {
    area = b * d;
    perimeter = d + b + d;
    m = area / perimeter;
    act2_c = (23 + (0.00155 / i) + (1 / N)) / (1 + (23 + (0.00155 / i) + N / Math.sqrt(m)));
    i = 1 / bed_slope;
    act2_Q = area * act2_c * Math.sqrt(m * i);
    act2_Q_lit = act2_Q * 1000;
}
function verify1() {
    let btn = document.getElementById('temp-btn-4');
    console.log("Area = ", area);
    console.log("Perimeter = ", perimeter);
    console.log("Hydraulic Mean Depth = ", m);
    console.log("C = ", act2_c);
    console.log("i = ", i);
    console.log("act2 Q = ", act2_Q);
    console.log("act2 Q in litre = ", act2_Q_lit);
    let inp1 = document.getElementById('cal07-inp');
    let sp1 = document.getElementById('cal07-val-sp');
    let inp2 = document.getElementById('cal08-inp');
    let sp2 = document.getElementById('cal08-val-sp');
    let inp3 = document.getElementById('cal09-inp');
    let sp3 = document.getElementById('cal09-val-sp');
    let inp4 = document.getElementById('cal10-inp');
    let sp4 = document.getElementById('cal10-val-sp');
    let inp5 = document.getElementById('cal11-inp');
    let sp5 = document.getElementById('cal11-val-sp');
    let inp6 = document.getElementById('cal12-inp');
    let sp6 = document.getElementById('cal12-val-sp');
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
    if (!verify_values(parseFloat(parseFloat(inp4.value).toFixed(2)), parseFloat(act2_c.toFixed(2)))) {
        alert('c value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp5.value).toFixed(2)), parseFloat(act2_Q.toFixed(2)))) {
        alert('Discharge is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp6.value).toFixed(2)), parseFloat(act2_Q_lit.toFixed(2)))) {
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
    sp4.innerText = `${(act2_c).toFixed(4)}`;
    inp5.remove();
    sp5.innerText = `${(act2_Q).toFixed(4)}`;
    inp6.remove();
    sp6.innerText = `${(act2_Q_lit).toFixed(4)}`;
    alert('Your entered values are correct!!');
    btn.style.display = 'none';
    activity3();
}
//# sourceMappingURL=activity2.js.map