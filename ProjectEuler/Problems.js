function insertAfter(elem, refElem) {
  return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}

function createText(problemNumber, paraText) {
    var elid = 'solve' + problemNumber;
    if (document.getElementById(elid) !== null){
        document.getElementById(elid).remove();
    }
    var para = document.createElement('p');
    para.id = elid;
    para.className = 'solve';
    para.textContent = paraText;
    elid = 'put' + problemNumber;
    var task = document.getElementById(elid);
    insertAfter(para, task);
}

function problem1() {
    var sum = 0;
        for (var i = 0; i < 1000; i++) {
            if (i % 3 === 0 || i % 5 === 0) {
                sum += i;
            }
        }
        createText(1, sum);
}

function problem2() {
    function fibonachi(n) {
        if (n === 1) {
            return 1;
        } else if (n === 2) {
            return 2;
        } else {
            return fibonachi(n - 1) + fibonachi(n - 2);
        }
    }

    var sum = 0;
    var prev = 1;
    var holdprev;
    i = 2;
    while (i<4000000) {
        if (i % 2 === 0) {
            sum += i;
        }
        holdprev = i;
        i += prev;
        prev = holdprev;
    }

    createText(2, sum);
}

function showResult() {
    var showButtons = document.getElementsByClassName('show');
    for (var i = 0; i < showButtons.length; i++){
        var curSol = 'problem' + Number(i+1);
        showButtons[i].addEventListener('click', window[curSol]);
    }

}

showResult();