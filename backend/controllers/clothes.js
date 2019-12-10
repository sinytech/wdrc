const axios = require('axios')

const getClothes = (req, res) => {
    const { username } = req.user
    return axios.get('https://therapy-box.co.uk/hackathon/clothing-api.php?username=' + username)
        .then(({ data }) => {
            const result = data.payload
                .reduce((acc, { clothe: title }) => {
                    const item = acc.find(i => i.title === title)
                    if (item) {
                        item.value += 1
                    } else {
                        acc.push({ title, value: 1 })
                    }
                    return acc
                }, [])
            return res.status(200).send(result)
        })
}

module.exports = {
    getClothes
}
