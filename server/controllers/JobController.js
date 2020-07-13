const axios =  require('axios')
class JobController {
    static queryPositions (req, res, err) {
        let baseUrl = "https://jobs.github.com/positions.json"
        if (req.query) {
            baseUrl += '?'
            let count = 0
            for (let key in req.query) {
                if (count > 0) {
                    baseUrl += '&'
                }
                baseUrl += `${key}=${req.query[key].replace(' ', '+')}`
                count++
            }
            console.log(baseUrl)

        }

        return axios.get(baseUrl)
        .then(result => {
            const data = result.data
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json(err)
        })
    }

    static queryPositionsById (req, res, err) {
        let baseUrl = "https://jobs.github.com/positions/"
        const { id } = req.params
        console.log(`${baseUrl}${id}.json`)
        if (id) {
            return axios.get(`${baseUrl}${id}.json`)
            .then(result => {
                res.status(200).json(result.data)
            })
            .catch(err => {
                res.status(500).json({
                    errors: err
                })
            })
        } else {
            res.status(404).json({
                errors: [{ message: 'Positions Not Found' }]
            })
        }
    }
}

module.exports = JobController