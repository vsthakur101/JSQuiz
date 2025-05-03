const obj = {
    prefix: 'WEB',
    list: ['1', '2', '3'],
    log() {
        this.list.forEach(function (item) {
            console.log(this.prefix + item);
        });
    },
};

obj.log(); 