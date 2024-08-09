function play() {
    document.getElementById('play').style.display = 'block';
}

function noplay() {
    document.getElementById('play').style.display = 'none';
}

function play1() {
    document.getElementById('play1').style.display = 'block';
}

function noplay1() {
    document.getElementById('play1').style.display = 'none';
}

function play2() {
    document.getElementById('play2').style.display = 'block';
}

function noplay2() {
    document.getElementById('play2').style.display = 'none';
}

function play3() {
    document.getElementById('play3').style.display = 'block';
}

function noplay3() {
    document.getElementById('play3').style.display = 'none';
}

function play4() {
    document.getElementById('play4').style.display = 'block';
}

function noplay4() {
    document.getElementById('play4').style.display = 'none';
}

function hover1(element) {
    element.setAttribute('src', 'assets/images/IBITINGA_CORETO.jpg');
}
  
function unhover1(element) {
    element.setAttribute('src', 'assets/images/IBITINGA_CORETO-SELECAO.jpg');
}

function hover2(element) {
    element.setAttribute('src', 'assets/images/BANDA-DO-CARMO.jpg');
}
  
function unhover2(element) {
    element.setAttribute('src', 'assets/images/BANDA-DO-CARMO-SELECAO.jpg');
}

function hover3(element) {
    element.setAttribute('src', 'assets/images/BANDA-DE-PIRASSUNUNGA.jpg');
}
  
function unhover3(element) {
    element.setAttribute('src', 'assets/images/BANDA-DE-PIRASSUNUNGA-SELECAO.jpg');
}

function hover4(element) {
    element.setAttribute('src', 'assets/images/BANCO-COSMOPOLIS.jpg');
}
  
function unhover4(element) {
    element.setAttribute('src', 'assets/images/BANCO-COSMOPOLIS-SELECAO.jpg');
}

function hover5(element) {
    element.setAttribute('src', 'assets/images/CORETO_ITU.jpg');
}
  
function unhover5(element) {
    element.setAttribute('src', 'assets/images/CORETO_ITU-SELECAO.jpg');
}

function hover6(element) {
    element.setAttribute('src', 'assets/images/PIRASSUNUNGA-CORETO.jpg');
}
  
function unhover6(element) {
    element.setAttribute('src', 'assets/images/PIRASSUNUNGA-CORETO-SELECAO.jpg');
}

function hover7(element) {
    element.setAttribute('src', 'assets/images/CORNETAS.jpg');
}
  
function unhover7(element) {
    element.setAttribute('src', 'assets/images/CORNETAS-SELECAO.jpg');
}

function hover8(element) {
    element.setAttribute('src', 'assets/images/CORETO_COSMOPOLIS.jpg');
}
  
function unhover8(element) {
    element.setAttribute('src', 'assets/images/CORETO_COSMOPOLIS-SELECAO.jpg');
}

function hover9(element) {
    element.setAttribute('src', 'assets/images/MAESTRO-ISAIAS-ITU.jpg');
}
  
function unhover9(element) {
    element.setAttribute('src', 'assets/images/MAESTRO-ISAIAS-ITU-SELECAO.jpg');
}

$('#modal1').on('hidden.bs.modal', function () {
    $("#modal1 iframe").attr("src", $("#modal1 iframe").attr("src"));
});

$('#modal2').on('hidden.bs.modal', function () {
    $("#modal2 iframe").attr("src", $("#modal2 iframe").attr("src"));
});

$('#modal3').on('hidden.bs.modal', function () {
    $("#modal3 iframe").attr("src", $("#modal3 iframe").attr("src"));
});

$('#modal4').on('hidden.bs.modal', function () {
    $("#modal4 iframe").attr("src", $("#modal4 iframe").attr("src"));
});

$('#modal5').on('hidden.bs.modal', function () {
    $("#modal5 iframe").attr("src", $("#modal5 iframe").attr("src"));
});

$("#modal6").on('hidden.bs.modal', function () {
    $("#modal6 iframe").attr("src", $("#modal6 iframe").attr("src"));
});