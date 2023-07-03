$( function () {
    const container = $(".container");
    const circle1 = $(".color-1");
    const circle2 = $(".color-2");

    circle1.click(() => {
        container.removeClass("change");
    })

    circle2.click(() => {
        container.addClass("change");
    })
})