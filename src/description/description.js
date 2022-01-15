var opened = false
var expand1IsAnimating = false;
$('#expandable1').click(() => {
    if (expand1IsAnimating == false) {
        if (!opened) {
            $("#item-icon").addClass("icon-rotate");
            $("#item-icon").removeClass("icon-unrotate");
            opened = true;
            expand1IsAnimating = true;
            $('#expandable1').animate({
                height: $("#expandable1").get(0).scrollHeight
            }, {
                duration: 500,
                complete: function () {
                    expand1IsAnimating = false;
                }
            })
        } else {
            $("#item-icon").addClass("icon-unrotate");
            $("#item-icon").removeClass("icon-rotate");
            opened = false;
            expand1IsAnimating = true;
            $('#expandable1').animate({
                height: 50
            }, {
                duration: 500,
                complete: function () {
                    expand1IsAnimating = false;
                }
            })
        }
    }
})


var sequences = [
    {
        seq: "#seq1",
        row: "#row1",
        opened: false
    },
    {
        seq: "#seq2",
        row: "#row2",
        opened: false
    },
    {
        seq: "#seq3",
        row: "#row3",
        opened: false
    },
    {
        seq: "#seq4",
        row: "#row4",
        opened: false
    },
    {
        seq: "#seq5",
        row: "#row5",
        opened: false
    },
    {
        seq: "#seq6",
        row: "#row6",
        opened: false
    },
    {
        seq: "#seq7",
        row: "#row7",
        opened: false
    },
    {
        seq: "#seq8",
        row: "#row8",
        opened: false
    }
]

var seqAnim = false;
sequences.map((seq) => {
    $(seq.seq).click(() => {
        if (seqAnim == false) {
            if (!seq.opened) {
                seq.opened = true;
                seqAnim = true;
                $(seq.row).animate({
                    height: $(seq.seq).get(0).scrollHeight
                }, {
                    duration: 500,
                    complete: function () {
                        seqAnim = false;
                    }
                })
            } else {
                seq.opened = false;
                seqAnim = true;
                $(seq.row).animate({
                    height: 80
                }, {
                    duration: 500,
                    complete: function () {
                        seqAnim = false;
                    }
                })
            }
        }
    })
})