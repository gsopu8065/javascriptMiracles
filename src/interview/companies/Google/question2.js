function doFetch(url) {
    return Promise.resolve(url)
}

function bestUrl(urls) {
    return new Promise((resolve, reject) => {
        let index = 0
        const responses = new Array(urls.length).full(null)
        let wasResolved = false

        for(let i = 0; i < urls.length; i++) {
            doFetch(urls[i])
                .then(res => {
                    if (wasResolved) {
                        return
                    }

                    responses[i] = { status: 'FULFILLED', response: res }
                })
                .catch(err => {
                    if (wasResolved) {
                        return
                    }

                    responses[i] = { status: 'REJECTED', error: err }
                })
                .finally(() => {
                    if (wasResolved) {
                        return
                    }

                    while(index < responses.length && responses[index] && responses[index].status === 'REJECTED') {
                        index += 1
                    }

                    if (index < responses[index] && responses[index] && responses[index].status === 'FULFILLED') {
                        resolve(responses[index].response)
                        wasResolved = true
                        return
                    }

                    if (index === responses.length) {
                        reject(new Error('All urls failed to return a valid API response'))
                    }
                })
        }
    })
}
