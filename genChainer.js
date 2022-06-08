//7kyu write a generic function chainer
function chain(input, fs) {
    return fs.reduce(function(input, fn){
        return fn(input)
    }, input);
}

//had to look up... still working on wrapping my head around the concept