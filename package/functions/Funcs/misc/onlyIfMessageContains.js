module.exports = async d => {
    const data = d.util.openFunc(d);
    if (data.err) return d.error(data.err);
    let error = false;

    const [text, ...stuffs] = data.inside.splits;
    const errorMsg = await d.util.errorParser(stuffs.pop(), d);

    if (!stuffs.every(x => text.addBrackets().includes(x.addBrackets()))) {
        error = true;
        if(typeof errorMsg === 'string' && errorMsg.trim() === '') return ;
        else return d.aoiError.makeMessageError(d.client, d.channel, errorMsg, errorMsg.options,d);
    }

    return {
        code: d.util.setCode(data),
        error
    }
}