function dispQues(no, width) {

    if (question[no].type === "MCQ") {
        mark = 1;
    } else if (question[no].type === "MSQ") {
        mark = 2;
    }

    $('.jumbotron').html(`
            <div class="text-center">
                <h1 style="font-weight:200">${question[no].type}</h1>
            </div>
            <div class="d-flex justify-content-between">
            <p>Question: ${qno.indexOf(no)+1} of ${question.length}</p>
            <p>Point: ${mark}</p>
            </div>
            <div class="card shadow" style="width: 100%;">
                <div class="card-body">
                    <h3 class="card-title pb-2 ">${question[no].que}</h3>
                    <p class="card-text"></p>
                    <input type="hidden" name="questionDetailFromInput" value="${no}">
                    <br>
                    <p style="text-align:center">
                    <button class="w-100 btn btn-success btn-lg nextQuestionBtn">Next &nbsp;<i class="fa fa-arrow-right"></i></button>
                    </p>
                </div>
          </div>
          <div class="progress" style="height: 7px;">
                <div class="progress-bar" role="progressbar" style="width: ${width}%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          
          `);


    if (question[no].type === "MCQ") {
        $.each(question[no].opt, (k, v) => {
            $('p.card-text').append(`
                <div class="form-check inputOptionField d-flex align-items-center" style="font-size:20px">
                    <input style="" class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios${k}" value="${k+1}">
                    <label class="form-check-label w-100" for="exampleRadios${k}">${v}</label>
                </div>
            `);
        });
    } else if (question[no].type === "MSQ") {
        $.each(question[no].opt, (k, v) => {
            $('p.card-text').append(`
            <div class="form-check inputOptionField d-flex align-items-center" style="font-size:20px">
                <input class="form-check-input" type="checkbox" name="checkbox" value="${k+1}" id="defaultCheck${k}">
                <label class="form-check-label w-100" for="defaultCheck${k}">${v}</label>
            </div>
            `);
        });
    }

}

let qno = [];
let mcq = [];
let msq = [];


$.each(question, (key, _val) => {

    if (question[key].type === "MCQ") {
        mcq.push(key);
    } else if (question[key].type === "MSQ") {
        msq.push(key);
    }
});

function shuffleQuenstionNo() {
    mcq.sort(() => Math.random() - 0.5);
    msq.sort(() => Math.random() - 0.5);
    qno = mcq.concat(msq);
}


$('#startQuiz').click(() => {
    shuffleQuenstionNo();
    

    $('.jumbotron').html(`<div class="text-center"><img src="../img/loader.svg" width="100vmin"></div>`);

    setTimeout(() => {
        dispQues(qno[0], 100 / question.length);
        if (question.length === 1) {
            $('.nextQuestionBtn').html(`Submit`);
            $('.nextQuestionBtn').attr('id', 'answerSubmitBtn');
        }
    }, 1000);

});

let submitAns = [];
let marks = 0;
let count = 1;
let selectAns = [];

$(document).on('click', '.nextQuestionBtn', () => {
    let questionNo = $('input[name="questionDetailFromInput"]').val();
    let questionAns = question[questionNo].ans;
    
    if (question[questionNo].type === "MCQ") {
        selectAns = [];
        let selectRadioAns = $('input[name="exampleRadios"]:checked').val();
        selectAns.push(selectRadioAns);

        if ($.type(selectRadioAns) === "undefined") {
            selectAns = ["Not Answered"];
        }
        if (JSON.stringify(questionAns) === JSON.stringify(selectAns)) {
            point = 1;
            correct = true;
            marks++;
        } else {
            point = 0;
            correct = false;
        }

    } else if (question[questionNo].type === "MSQ") {
        selectAns = [];
        $.each($("input[name='checkbox']:checked"), function () {
            selectAns.push($(this).val());
        });


        if (selectAns.length === 0) {
            selectAns = ["Not Answered"];
        }
        if (JSON.stringify(questionAns) === JSON.stringify(selectAns)) {
            point = 2;
            correct = true;
            marks = marks + 2;
        } else {
            point = 0;
            correct = false;
        }

    }



    submitAns.push({
        slNo: count,
        questionNo: questionNo,
        questionAns: questionAns,
        selectAns: selectAns,
        totalMarks: marks,
        correct: correct,
        point: point
    });


    if (count < question.length) {
        dispQues(parseInt(qno[count]), (count + 1) * (100 / question.length));
    }

    if (count + 1 === question.length) {
        $('.nextQuestionBtn').html(`Submit &nbsp;<i class="fa fa-arrow-right"></i>`);
        $('.nextQuestionBtn').attr('id', 'answerSubmitBtn');
    }

    count++;
});

$(document).on('click', '#answerSubmitBtn', () => {
    $('.jumbotron').html(`<div class="text-center"><img src="../img/loader.svg" width="100vmin"></div>`);
    setTimeout(() => {
        $('.jumbotron').html(``);
        showResult();
    }, 1000);

});

function showResult() {

    let totalAnswered = 0;
    let totalCorrect = 0;
    let totalPoint = 0;

    $.each(submitAns, (index, _value) => {
        if (question[submitAns[index].questionNo].type === "MCQ") {
            totalPoint = totalPoint + 1;
        } else if (question[submitAns[index].questionNo].type === "MSQ") {
            totalPoint = totalPoint + 2;
        }

        let answerStat = "";

        if (submitAns[index].correct === true) {
            answerStat = "(Correct)";
        } else {
            if (submitAns[index].selectAns.toString() != "Not Answered") {
                answerStat = "(Wrong)";
            } else {
                answerStat = "";
            }
        }
        $('.jumbotron').append(`
        <div class="card mb-5 shadow" style="width: 100%;">
            <div class="text-center d-flex justify-content-center align-items-center">
                <div style="width:70px;height:70px;border-radius:50%;position:relative;top:-30px" class="showTickOrCross${index}">
                    <i class="fa-2x fa" style="color:#fff;position:relative;top:50%;transform:translateY(-55%)"></i>
                </div>
            </div>
            <div class="card-body">
                <h3 class="card-title pb-2">${question[submitAns[index].questionNo].que}</h3>
                <div class="card-text d-flex justify-content-between align-items-center">
                    <p class="answerStat">Answered: ${submitAns[index].selectAns} ${answerStat} 
                        <br>Correct Answer: ${submitAns[index].questionAns}
                    </p> 
                    <p class="text-right">Type: ${question[submitAns[index].questionNo].type}
                        <br>Point: ${submitAns[index].point}
                    </p>
                </div>
                <ul class="list-group showOption${index}"></ul>
            </div>
        </div>
        `);

        if (submitAns[index].correct) {
            $(`.showTickOrCross${index}`).addClass('bg-success');
            $(`.showTickOrCross${index} i`).addClass('fa-check')
        } else {
            $(`.showTickOrCross${index}`).addClass('bg-danger');
            $(`.showTickOrCross${index} i`).addClass('fa-times');
        }

        $.each(question[submitAns[index].questionNo].opt, (_k, v) => {
            $(`ul.showOption${index}`).append(`
                <li>${v}</li>
            `);
        });

        $.each(submitAns[index].questionAns, (_key, val) => {

            $(`ul.showOption${index} li:nth-child(${val})`).addClass('bg-success text-white');
        });

        if (submitAns[index].selectAns.toString() != "Not Answered") {

            totalAnswered = totalAnswered + 1;
            if (submitAns[index].correct) {
                totalCorrect = totalCorrect + 1;

                $.each(submitAns[index].selectAns, (_key, val) => {
                    $(`ul.showOption${index} li:nth-child(${val})`).css('border', '5px solid green');
                });

            } else {

                $.each(submitAns[index].selectAns, (_key, val) => {
                    if ($.inArray(val, submitAns[index].questionAns) >= 0) {
                        $(`ul.showOption${index} li:nth-child(${val})`).css('border', '5px solid green');
                        $(`ul.showOption${index} li:nth-child(${val})`).addClass('bg-success text-white');
                    } else {
                        $(`ul.showOption${index} li:nth-child(${val})`).css('border', '5px solid #ff0015');
                        $(`ul.showOption${index} li:nth-child(${val})`).addClass('bg-danger text-white');
                    }

                });
            }
        }


    });



    $('.jumbotron').append(`
        <div class="card mb-4 shadow" style="width: 100%;">
            <div class="card-body text-center">
                <h4>Your score is ${submitAns[question.length-1].totalMarks} out of ${totalPoint}</h4>
                <h4>Total Question: ${question.length}</h4>
                <h4>Answered: ${totalAnswered}</h4>
                <h4>Not Answered: ${(question.length) - totalAnswered}</h4>
                <h4>Correct: ${totalCorrect}</h4>
                <h4>Wrong: ${(question.length) - totalCorrect}</h4>
            </div>
        </div>
        <button class="btn btn-primary btn-lg w-100 restartAgain">Play Again</button>
    `);


    let record = `Total Question: ${question.length} <br>`;
    record += `Answered: ${totalAnswered} <br>`;
    record += `Not Answered: ${(question.length) - totalAnswered}<br>`;
    record += `Correct: ${totalCorrect}<br>`;
    record += `Incorrect: ${(question.length) - totalCorrect}`;

    if (submitAns[question.length - 1].totalMarks === totalPoint) {
        Swal.fire({
            title: `Congrats! <br> your score is ${submitAns[question.length-1].totalMarks} out of ${totalPoint}`,
            background: '#fff url(../img/success.gif) no-repeat',
            backdrop: `
                rgba(0,0,123,0.4)
                url(../img/successbg.gif)
                top center
                no-repeat
            `,
            icon: `success`,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Play Again'
        }).then((result) => {
            if (result.value) {
                shuffleQuenstionNo();

                submitAns = [];
                marks = 0;
                count = 1;
                totalAnswered = 0;
                totalCorrect = 0;

                $('.jumbotron').html(`<div class="text-center"><img src="../img/loader.svg" width="100vmin"></div>`);

                setTimeout(() => {
                    dispQues(qno[0], 100 / question.length);
                    if (question.length === 1) {
                        $('.nextQuestionBtn').html(`Submit`);
                        $('.nextQuestionBtn').attr('id', 'answerSubmitBtn');
                    }
                }, 1000);
            }
        });
    } else {
        Swal.fire({
            title: `your score is ${submitAns[question.length-1].totalMarks} out of ${totalPoint} <br> ${record}`,
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Play Again',
            backdrop: `
                rgba(0,0,123,0.4)
            `
        }).then((result) => {
            if (result.value) {
                shuffleQuenstionNo();

                submitAns = [];
                marks = 0;
                count = 1;
                totalAnswered = 0;
                totalCorrect = 0;
                selectAns = [];

                $('.jumbotron').html(`<div class="text-center"><img src="../img/loader.svg" width="100vmin"></div>`);

                setTimeout(() => {
                    dispQues(qno[0], 100 / question.length);
                    if (question.length === 1) {
                        $('.nextQuestionBtn').html(`Submit`);
                        $('.nextQuestionBtn').attr('id', 'answerSubmitBtn');
                    }
                }, 1000);
            }
        });
    }

}

$(document).on('click', '.restartAgain', () => {
    shuffleQuenstionNo();

    submitAns = [];
    marks = 0;
    count = 1;
    totalAnswered = 0;
    totalCorrect = 0;

    $('.jumbotron').html(`<div class="text-center"><img src="../img/loader.svg" width="100vmin"></div>`);

    setTimeout(() => {
        dispQues(qno[0], 100 / question.length);
        if (question.length === 1) {
            $('.nextQuestionBtn').html(`Submit`);
            $('.nextQuestionBtn').attr('id', 'answerSubmitBtn');
        }
    }, 1000);
});



$(document).on('click', '.inputOptionField input', () => {
    selectCheckRadioBox = [];
    $.each($("input:checked"), function () {
        selectCheckRadioBox.push($(this).val());
    });
    $('.inputOptionField').siblings().css('background', '');
    $.each(selectCheckRadioBox, (_k, _v) => {
        $('.inputOptionField input:checked').parent().css('background', '#e9e7ef');
    });
});