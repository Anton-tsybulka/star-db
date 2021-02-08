const compose = (...funcs) => (comp) => {
    return funcs.reduceRight((prevresult, f) => f(prevresult), comp)
}

export default compose