function print(){
    setTimeout(()=>{
        console.log('Welcome');
        setTimeout(()=>{
            console.log('to');
            setTimeout(() => {
                console.log('the');
                setTimeout(() => {
                    console.log('Coding World!')
                }, 1000);
            },1000)
        },1000)
    },1000)
}

print();