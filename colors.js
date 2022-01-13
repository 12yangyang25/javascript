var Body = {
    SetColor: function (color) {
        document.querySelector('body').style.color = color;
    },

    SetBackgroundColor: function (color) {
        document.querySelector('body').style.backgroundColor = color;
    }
}

var Links = {
    setColor: function (color) {
        var alist = document.querySelectorAll('a');
        var i = 0
        while (i < alist.length) {
            alist[i].style.color = color;
            i += 1;
        }
    }
}

function NightDayHandler(self) {
    var target = document.querySelector('body');
    if (self.value === 'Night') {
        Body.SetBackgroundColor('black');
        Body.SetColor('White');
        self.value = 'Day';
        Links.setColor('powderblue');
    }

    else {
        Body.SetBackgroundColor('white');
        Body.SetColor('black');
        self.value = 'Night';
        Links.setColor('blue');
    }
}