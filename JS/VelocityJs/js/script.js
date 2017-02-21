$(function () {

    /*    $('#div1').velocity({
            width: '300px',
        }, {
            duration: 3000,
            complete: function () {
                $('#div2').velocity({
                    width: '300px',
                }, {
                    duration: 3000,
                    // delay:3000
                });
            }
        });*/
/*    var seq = [{
            elements: $('#div1'),
            properties: {
                width: '300px'
            },
            option: {
                duration: 1000
            }
        },
        {
            elements: $('#div2'),
            properties: {
                width: '300px'
            },
            option: {
                duration: 1000
            }
        },
        {
            elements: $('#div3'),
            properties: {
                width: '300px'
            },
            option: {
                duration: 1000
            }
        }
    ];
    $.Velocity.RunSequence(seq);*/
    $('#div1').on('mouseover',function(){
        $(this).velocity('callout.shake'); //'callout.shake'velocity预定义动画

    });
    //自定义
    $.Velocity.RegisterEffect('lixin.pulse',{
        defaultDuration:300,
        calls:[
            [{scaleX:1.1},0.5],
            [{scaleX:1.0},0.5]
        ]
    });
    $('#div2').on('mouseover',function(){
        $(this).velocity('lixin.pulse'); //'callout.shake'velocity预定义动画

    });
})