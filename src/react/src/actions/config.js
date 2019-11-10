import axios from 'axios';

const getUrl = (config, props) => {
    const replaceCompareSigns = (text)=>{
        const replacement = {
            '!=':   ' ne ',
            '>':    ' gt ',
            '>=':   ' ge ',
            '<':    ' lt ',
            '<=':   ' le ',
            '|':    ' or ',
            '&':    ' and ',
            '!':    ' not ',
            '=':    ' eq ',
            '+':    ' add ',
            '-':    ' sub ',
            '*':    ' mul ',
            '/':    ' div ',
        }
        let arr = text.split('');
        let last = '';
        let isQuoted = -1;
        const quotes = "'\"";
        
        let index = -1;
        for(let i = 0; i < arr.length; i++){
            let chr = arr[i];
            index = quotes.indexOf(chr);
            if(index>-1){
                if(isQuoted === -1){
                    isQuoted = index;
                }else if(index === isQuoted){
                    isQuoted = -1;
                }
            }
            if(isQuoted === -1){ 
                let word = last ? last + chr : chr;
                for(let key in replacement){
                    index = word.indexOf(key);
                    if(index > -1){
                        if(index === 0 && word.length === 2){
                            arr[i - 1] = '';
                        }
                        arr[i] = replacement[key];
                        chr = '';
                        break;
                    }
                }
            }
            last = chr;
        }
        text = arr.join('');
        return text;
    }

    const apiParam = '$format=json';
    const {host,api,url} = config;
    
    const { key, id, sliceLast, sliceFirst, nav, skip, count, total, order, filter } = props;

    const object = url[key];

    const guid = !!id ? '(guid\'' + id + '\')' : '';

    
    let slice = !!sliceFirst ? '/SliceFirst(' : '';
    slice = !!sliceLast ? '/SliceLast(' : '';
    if(!!slice){
        const sliceProps = sliceLast || sliceFirst;
        const { Period, Condition } = sliceProps;
        slice += Period 
            ? `Period=datetime'${Period.toISOString()}',` 
            : ',';
        slice += Condition 
            ? `Condition='${replaceCompareSigns(Condition)}')` 
            : ')';
    }
    
    const rnav = nav ? '/'+ nav : '';
    const rskip = skip ? `&$skip=${skip}` : ''; 
    const rcount = count ? `&$top=${count}` : '';
    const rtotal = total ? '/$count' : '';
    const orderby = order ? `&$orderby=${order}` :'';
    const rfilter = filter ? `&$filter=${filter}` :'';

    const request = host + api + object + slice + guid + rnav + rtotal 
                  + "?" + apiParam + rskip + rcount + orderby + rfilter;
    
    //console.log(request);
    
    return request;
}

export const setConfig = config => ({
    type: 'SET_CONFIG',
    payload: {...config, getUrl}
});

export const fetchConfig = () => {
    const configFileName = '/conf.json';
    return (dispatch) => {
        return axios.get(configFileName)
                    .then(({data}) => dispatch(setConfig(data))) //  Устанавливаем, когда загрузили
    }
}
