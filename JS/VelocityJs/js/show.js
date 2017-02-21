$(function () {
    var container = $('.container');
    var box = $('.box');
    var buddy = $('.buddy');
    var pop = $('.pop');
    var open = $('.btn');
    var close = $('.close');
    var imgs = pop.find('img');
    //自定义动画透明度从0-1，Y轴位置从100到0(入场动画)
    $.Velocity.RegisterUI('lac.slideUpIn', {
        defaultDuration: 500,
        calls: [
            [{
                opacity: [1, 0],
                translateY: [0, 100]
            }]
        ]
    });
    //自定义动画2(出场动画)
    $.Velocity.RegisterUI('lac.slideDwonOut', {
        defaultDuration: 300,
        calls: [
            [{
                opacity: [0, 1],
                translateY: [100, 0]
            }]
        ]
    });
    //卡片弹出式入场动画
    $.Velocity.RegisterUI('lac.scaleIn', {
        defaultDuration: 300,
        calls: [
            [{
                opacity: [1, 0],
                scale: [1, 0.3]
            }]
        ]
    });
    //卡片弹出式出场动画
    $.Velocity.RegisterUI('lac.scaleOut', {
        defaultDuration: 300,
        calls: [
            [{
                opacity: [0, 1],
                scale: [0.3, 1]
            }]
        ]
    });
    //动画队列，sequenceQueue:false不依次执行
    var seqInit = [{
            elements: container,
            properties: 'lac.slideUpIn',
            options: {
                delay: 300
            }
        },
        {
            elements: box,
            properties: 'lac.slideUpIn',
            options: {
                sequenceQueue: false
            }
        },
        {
            elements: buddy,
            properties: 'lac.slideUpIn',
            options: {
                delay: 60,
                sequenceQueue: false
            }
        }
    ];
    var seqClick = [{
            elements: container,
            properties: 'lac.slideDwonOut',
            options: {}
        },
        {
            elements: box,
            properties: 'lac.slideDwonOut',
            options: {
                sequenceQueue: false
            }
        },
        {
            elements: container,
            properties: 'lac.slideUpIn',
        },
        {
            elements: pop,
            properties: 'lac.slideUpIn',
            options: {
                sequenceQueue: false
            }
        },
        {
            elements: imgs,
            properties: 'lac.scaleIn',
        }
    ];
    var seqClose = [{
            elements: imgs,
            properties: 'lac.scaleOut',
        },
        {
            elements: container,
            properties: 'lac.slideDwonOut',
            options: {}
        },
        {
            elements: pop,
            properties: 'lac.slideDwonOut',
            options: {
                sequenceQueue: false
            }
        },
        {
            elements: container,
            properties: 'lac.slideUpIn',
        },
        {
            elements: box,
            properties: 'lac.slideUpIn',
            options: {
                sequenceQueue: false
            }
        }

    ];
    $.Velocity.RunSequence(seqInit);
    open.on('click', function () {
        $.Velocity.RunSequence(seqClick);
    });
        close.on('click', function () {
        $.Velocity.RunSequence(seqClose);
    });
})