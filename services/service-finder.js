const config = require('../config/config')

const serviceFinder = (serviceName) => {

    const services = config.SERVICES
    for(let i=0;i<services.length;i++) {
        if(services[i].SERVICE == serviceName) {
            return services[i]
        }
    }
}

module.exports = serviceFinder