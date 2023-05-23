// alert("Welcome to My Lab-07!");

// the contain for
$(document).ready(function () {
    $("#startQuiz").show();
    $("#container").hide();

    // request the username and show on the quiz;
    $("#startQuizButton").click(function () {
        let userName = $("#username").val();
        if (userName === "") {
            $("#usernameErrorMsg").html("<b>Please Enter a valid Name!</b>");
        }
        else {
            $("#container").fadeIn(1000);
            $("#startQuiz").hide();
            $("#welcome").html(`<b>Welcome ${userName}! Good Luck and Have Fun!</b>`);
        }
    })

    // HINT 
    // mouseenter() when user put the mouse on the HINT, and then fadeIn() the HINT
    // mouseleave() when user leave the mouse from the HINT, and then fadeOut() the HINT
    $("#hintdiv1").mouseenter(function () {
        $("#q1hint").fadeIn(950);
    }).mouseleave(function () {
        $("#q1hint").fadeOut(200);
    });

    $("#hintdiv2").mouseenter(function () {
        $("#q2hint").fadeIn(950);
    }).mouseleave(function () {
        $("#q2hint").fadeOut(200);
    });

    $("#hintdiv3").mouseenter(function () {
        $("#q3hint").fadeIn(950);
    }).mouseleave(function () {
        $("#q3hint").fadeOut(200);
    });

    $("#hintdiv4").mouseenter(function () {
        $("#q4hint").fadeIn(950);
    }).mouseleave(function () {
        $("#q4hint").fadeOut(200);
    });

    $("#hintdiv5").mouseenter(function () {
        $("#q5hint").fadeIn(950);
    }).mouseleave(function () {
        $("#q5hint").fadeOut(200);
    });


    // let user must select all 4 questions;
    $("#quizForm").submit(function (event) {
        event.preventDefault();
        let q1 = $('input[name="q1"]:checked').val();

        if (!q1) {
            $("#q1Error").html(`<b>Please Select A Answer!</b>`);
        }

        let q2 = $('input[name="q2"]:checked').val();

        if (!q2) {
            $("#q2Error").html(`<b>Please Select A Answer!</b>`);
        }

        let q3 = $('input[name="q3"]:checked').val();

        if (!q3) {
            $("#q3Error").html(`<b>Please Select A Answer!</b>`);
        }

        let q4 = $('input[name="q4"]:checked').val();

        if (!q4) {
            $("#q4Error").html(`<b>Please Select A Answer!</b>`);
        }

        let q5 = $('input[name="q5"]:checked').val();

        if (!q5) {
            $("#q5Error").html(`<b>Please Select A Answer!</b>`);
        }

        // Write a function to count the scored;
        function countScored(q1, q2, q3, q4, q5) {
            let scored1 = 0;
            let q5Count = 0;

            if (q1 === "b") {
                scored1++;
            }

            if (q2 === "a") {
                scored1++;
            }
            if (q3 === "c") {
                scored1++;
            }
            if (q4 === "a" || q4 == "b") {
                scored1++;
            }

            let i = 0;
            while (i < q5.length) {
                console.log(q5.length);
                if (q5[i] === "a" || q5[i] === "d") {
                    q5Count += 0.5;
                }

                if (q5[i] === "c" || q5[i] === "b") {
                    q5Count -= 0.5;
                }

                i++;
            }

            
            if(q5Count < 0) {
                q5Count = 0;
            }

            scored1 += q5Count;
            console.log(`scored1: ${scored1}, q5Count: ${q5Count}`);

            return scored1;
        }

        // Declare a name to call the function;
        let result = countScored(q1, q2, q3, q4, q5);

        $("#results").html(`<b>You scored ${result} out of 5`);
        $("#results2").html(`<b>RESULTS for ${$("#username").val()}: You scored ${result} out of 5`);

        // when the answer is all correct
        if (result == 5) {
            // bling 10 times;
            for (let j = 0; j < 10; j++) {
                $("#results3").html(`<b>You scored ${result} /5. Perfect!`);
                $("#results2").fadeOut(200);
                $("#results2").fadeIn(200);
                $("#results3").fadeOut(200);
                $("#results3").fadeIn(200);
            }
        }
    });

});


