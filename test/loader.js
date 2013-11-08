(function () {
    function concatObj() {
        var args = Array.prototype.slice.call(arguments), res = {}
        args.forEach(function (obj) {
            for (var p in obj) { if (obj.hasOwnProperty(p)) res[p] = obj[p] }
        })
        return res
    }

    function load() {
        var args = Array.prototype.slice.call(arguments), done = args.pop(),
            pros = args.map(function (dir) {
                return promise.get(dir + '/paths.json')
            })
        promise.join(pros).then(function (res) {
            var err = res.some(function (args) { return args.shift() })
            if (err) return done(err)

            var retval = concatObj.apply(null, res.map(function (args) {
                return JSON.parse(args.shift())
            }))
            done(0, retval)
        })
    }

    this.loader = { load: load }
}())
