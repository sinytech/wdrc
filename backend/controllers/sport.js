const axios = require('axios')
const CSV = require('csv-string')

const { UsersServices } = require('../services')

const checkMatch = (str1, str2) => str1.toLowerCase() === str2.toLowerCase()

const getSportInfo = (req, res) => {
    const { query: { team }, user } = req

    if (!team) {
        return res.status(400).send('Incorrect params')
    }

    return UsersServices.findUserById(user._id)
        .then(result => {
            result.team = team
            return result.save()
        })
        .then(() => axios.get('http://www.football-data.co.uk/mmz4281/1718/I1.csv'))
        .then(response => {
            const data = CSV.parse(response.data)
            const headers = data.shift()
            const results = data
                .reduce((acc, i) => {
                    const el = headers
                        .reduce((accum, key, ind) => ({ ...accum, [key]: i[ind] }), {})
                    return [...acc, el]
                }, [])
                .filter(({ HomeTeam, AwayTeam, FTR }) => {
                    return (checkMatch(HomeTeam, team) && FTR === 'H') || (checkMatch(AwayTeam, team) && FTR === 'A')
                })
                .map(({ HomeTeam, AwayTeam, FTHG, FTAG }) => {
                    if (checkMatch(HomeTeam, team)) {
                        return { team: AwayTeam, goals: FTHG }
                    }
                    return { team: HomeTeam, goals: FTAG }
                })

            return res.status(200).send(results)
        })
}

module.exports = {
    getSportInfo
}
